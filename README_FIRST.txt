HILMAS LANKA (PVT) LTD — PREMIUM WEBSITE / CREATIVE EDITION V2
===============================================================
Prepared as a NextWave Marketing website redesign demonstration.

START HERE
1. Extract this ZIP.
2. Double-click index.html to preview. For the best experience, serve the files
   through a local web server: move the folder to XAMPP htdocs, start Apache,
   and open http://localhost/Hilmas-Lanka-Website/
3. The real, published Hilmas product and award photographs normally load from the
   existing company's image URLs on the internet. When you're offline or an
   original photo is unavailable, local illustrated placeholders appear.
4. OPTIONAL: To copy the original image files into this folder and make it more
   self-contained, run `python fetch_original_images.py` on a computer with
   an internet connection. It downloads the genuine company-hosted photos
   and rewrites local image references automatically. Python 3.9+ recommended.
   This step cannot be run in the ZIP generation environment due to internet
   download restrictions. Do this before permanent deployment.

WHAT'S INCLUDED
- index.html — animated premium homepage
- about.html — company history, timeline and founder section
- products.html — 19 product catalogue entries with search and category filters
- 19 individual product-*.html detail pages
- quality.html — company approach and verification notice
- awards.html — dedicated awards gallery: 4 actual trophy photos, 8 archived certificates,
  6 accreditation emblems. Images open in an in-site lightbox, not the old site.
  Historical certificate validity dates are clearly labelled for verification.
- gallery.html — product photography gallery + image lightbox
- distributors.html — wholesale / business partnership information and form
- careers.html — careers enquiries
- contact.html — published contact details, map and enquiry form
- 404.html — custom not-found page
- assets/css/style.css + enhancements.css — responsive creative design, art direction and motion
- assets/js/main.js + enhancements.js — mobile navigation, filters, image viewer,
  dynamic featured-flavour selector and scroll progress
- assets/fallback/*.svg — offline illustrated image placeholders
- assets/brand-symbol.svg — CONCEPT mark (NOT official company logo)
- assets/products.json — the product list and original image source links
- fetch_original_images.py — optional first-party image backup tool

FUNCTIONALITY
- Mobile-friendly pages and keyboard-accessible navigation
- Optimized scroll-reveal and motion, with reduced-motion support
- Catalogue category filters, keyword search and related products
- Product-specific enquiry button that pre-fills the contact form
- Reviewable WhatsApp enquiry drafts for contact and wholesale queries
- Telephone and email links; careers email link
- Google Maps iframe (internet needed)
- Award and photo viewer with Escape-to-close interaction (no redirects)
- Interactive featured-flavour product showcase on the homepage
- Tested desktop/tablet/mobile layout (1440 / 768 / 390 / 360 px) without horizontal overflow
- SEO page titles, descriptions, OG title/description/image tags
- No database, no server code, no paid plugins and no build process

IMPORTANT PRODUCTION HANDOVER ITEMS
- Hilmas Lanka's official logo was NOT available as a downloadable asset; the
  website uses a clearly new typographic/candy-mark CONCEPT. Replace it with
  the actual company-approved SVG/PNG logo before launch. Product pack images
  show the brand's authentic imagery when online.
- Current certificates (including date ranges) need fresh verification; an
  original SLSI GMP certificate shown on the old website states an end date of
  21 August 2026. We DO NOT present old credentials as presently valid.
- Verify all copy, product availability, SKUs, pack sizes, allergen/ingredient
  statements, pricing, official trade phone number and award claims with client.
- Company phone +94 77 726 9920, email hilmaslanka.lk@gmail.com, and address
  374, Main Street, Nintavur 22, Sri Lanka were taken from published sources.
- The WhatsApp number is also listed on the official Sri Lankan industry
  directory (slenterprises.gov.lk); it should still be reconfirmed by client.
- Contact and dealer forms OPEN a populated WhatsApp draft. They DO NOT save
  data in a database or automatically submit to an email server. To receive
  web-hosted enquiries in an inbox/admin system, connect a secure backend.
- Product pages are catalogue/inquiry pages only. No checkout/payment system.
- Gallery images and original product photos belong to their owners. Confirm
  with Hilmas Lanka authorization to re-use before publishing.
- Before going live, back up old site, plan SEO redirects, update analytics,
  confirm domain configuration, add privacy/cookie documents as appropriate,
  update OG URLs/canonicals, and test on the final web host.
- Remove this README and sync script from public web root after handover if not
  needed. Do not overwrite an existing WordPress site without backups.

RESEARCH SOURCES (ORIGINAL / PUBLIC)
https://www.hilmaslanka.lk/
https://www.hilmaslanka.lk/about-us/
https://www.hilmaslanka.lk/products/
https://www.hilmaslanka.lk/gallery/
https://www.hilmaslanka.lk/about-us/achievements/
https://www.hilmaslanka.lk/careers/
https://www.hilmaslanka.lk/contact/
https://slenterprises.gov.lk/ (National Industry Information System)

Enjoy the preview!

IMPORTANT FOR FIRST-CLASS LAUNCH
- The actual award and product photos are REMOTELY REFERENCED initially due to
  download restrictions in this creation environment. They open in-site and
  never require visitors to navigate to the old Hilmas website.
- If you want ALL original photos directly served by your new domain instead
  of linked from the old site, run python fetch_original_images.py on an
  internet-connected computer BEFORE publishing. It saves the company images
  in assets/images and automatically rewrites all page image references.
- Confirm high-resolution official logo, original photo-use permission, current
  certificate validity, company details and artwork with the client.
- This is a professional client-demo FRONTEND website, not a CMS or payment site.
