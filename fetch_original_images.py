#!/usr/bin/env python3
"""Optionally download original company-hosted photos into this site.
Run on a computer with internet access: python fetch_original_images.py
Images remain hosted by Hilmas Lanka until synced. Please confirm usage rights.
"""
from pathlib import Path
from urllib.parse import urlparse, unquote
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from collections import Counter
import re, time
ROOT=Path(__file__).resolve().parent
html_files=list(ROOT.glob('*.html'))
all_html={p:p.read_text(encoding='utf-8') for p in html_files}
urls=set()
for code in all_html.values():
    urls.update(re.findall(r'https://www\.hilmaslanka\.lk/wp-content/uploads/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp)',code,re.IGNORECASE))
print(f'Found {len(urls)} distinct company-hosted media URLs.')
assets=ROOT/'assets/images';assets.mkdir(exist_ok=True,parents=True)
replace={}
for index,url in enumerate(sorted(urls),1):
    parsed=urlparse(url)
    rel=unquote(parsed.path.split('/wp-content/uploads/',1)[1])
    local=assets/rel
    if local.is_file() and local.stat().st_size>1000:
        print(f'[{index}/{len(urls)}] Have {rel}');replace[url]='assets/images/'+rel;continue
    local.parent.mkdir(parents=True,exist_ok=True)
    try:
        req=Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; HilmasWebsiteMediaBackup/1.0)'})
        with urlopen(req,timeout=30) as res:
            payload=res.read(15*1024*1024)
            ct=res.headers.get('Content-Type','')
        if len(payload)<1000 or not any(x in ct.lower() for x in ('image/jpeg','image/png','image/webp','application/octet-stream')):
            raise RuntimeError(f'Non-image/empty response: content-type={ct}, bytes={len(payload)}')
        local.write_bytes(payload)
        replace[url]='assets/images/'+rel
        print(f'[{index}/{len(urls)}] Saved {rel} ({len(payload)//1024} KiB)')
    except (OSError,URLError,HTTPError,RuntimeError) as exc:
        print(f'[{index}/{len(urls)}] FAILED {url}: {exc}')
    time.sleep(.12)
for file,code in all_html.items():
    for old,new in replace.items():
        # Preserve absolute OG sharing images; adapt img src and gallery viewer photo href.
        code=code.replace(f'src="{old}"',f'src="{new}"')
        code=code.replace(f'href="{old}"',f'href="{new}"')
    file.write_text(code,encoding='utf-8')
print(f'Finished: {len(replace)}/{len(urls)} originals mirrored. Open index.html to preview.')
print('Note: Original website media belongs to its rightsholders. Obtain client confirmation before publication.')
