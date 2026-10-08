'use strict';
(function(){
  const $=(sel,scope=document)=>scope.querySelector(sel);
  const $$=(sel,scope=document)=>Array.from(scope.querySelectorAll(sel));
  const header=$('#site-header');
  const toggle=$('.menu-toggle');
  const mobile=$('#mobile-menu');
  function closeMenu(){if(!toggle||!mobile)return;mobile.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');document.body.classList.remove('nav-open');}
  if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=!mobile.classList.contains('open');mobile.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});$$('a',mobile).forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});document.addEventListener('click',e=>{if(!header.contains(e.target))closeMenu()});}
  const setScroll=()=>header&&header.classList.toggle('is-scrolled',window.scrollY>18);
  setScroll();window.addEventListener('scroll',setScroll,{passive:true});
  const year=$('#copyright-year');if(year)year.textContent=String(new Date().getFullYear());
  const revealEls=$$('.reveal');
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{rootMargin:'0px 0px 40px 0px',threshold:.04});revealEls.forEach(el=>observer.observe(el));}else revealEls.forEach(el=>el.classList.add('visible'));
  let toastTimeout;function toast(msg){const el=$('#toast');if(!el)return;el.textContent=msg;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),3500)}
  // Product catalog: URL-aware category filters and type-to-search.
  const search=$('#product-search');const chips=$$('.filter-chip');const cards=$$('#product-grid .product-card');
  if(search&&cards.length){let category=new URLSearchParams(location.search).get('category')||'All';if(!chips.some(c=>c.dataset.filter===category))category='All';const count=$('#catalog-count');const empty=$('#catalog-empty');
    function update(){const query=search.value.trim().toLowerCase();let shown=0;cards.forEach(card=>{const matchesCategory=category==='All'||card.dataset.category===category;const matchesQuery=card.dataset.name.includes(query)||card.textContent.toLowerCase().includes(query);const visible=matchesCategory&&matchesQuery;card.hidden=!visible;card.style.display=visible?'':'none';if(visible)shown++;});chips.forEach(chip=>chip.setAttribute('aria-pressed',String(chip.dataset.filter===category)));if(count)count.textContent=`Showing ${shown} of ${cards.length} products`;if(empty)empty.hidden=shown!==0;}
    chips.forEach(chip=>chip.addEventListener('click',()=>{category=chip.dataset.filter;const url=new URL(location.href);if(category==='All')url.searchParams.delete('category');else url.searchParams.set('category',category);history.replaceState({},'',url);update()}));search.addEventListener('input',update);$('#reset-filters')?.addEventListener('click',()=>{category='All';search.value='';history.replaceState({},'',location.pathname);update()});update();}
  // Product detail → contact page: pre-fill the product name in the message.
  const productParam=new URLSearchParams(location.search).get('product');
  const contactForm=$('.contact-layout .inquiry-form');
  if(productParam&&contactForm){const message=$('textarea[name="message"]',contactForm);const interest=$('select[name="interest"]',contactForm);if(message)message.value='Hello, I would like more information about '+productParam+'.';if(interest)interest.value='Product information';}
  // Forms do not pretend to submit to a server. Reviewable WhatsApp draft instead.
  $$('.inquiry-form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const parts=['Hello Hilmas Lanka,','I would like to make an enquiry.'];
    [['Name','name'],['Company / store','company'],['Phone','phone'],['Email','email'],['Enquiry','interest'],['Message','message']].forEach(([label,key])=>{const val=String(data.get(key)||'').trim();if(val)parts.push(label+': '+val)});
    const url='https://wa.me/94777269920?text='+encodeURIComponent(parts.join('\n'));
    const opened=window.open(url,'_blank','noopener,noreferrer');if(!opened){const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';document.body.appendChild(a);a.click();a.remove()};toast('WhatsApp draft prepared — review it before sending.');
  }));
  // Accessible image lightbox with escape key and click-outside support.
  const lightbox=$('#lightbox'),closeBtn=$('#lightbox-close');let focusReturn;
  function closeLightbox(){if(!lightbox)return;lightbox.hidden=true;document.body.style.overflow='';$('#lightbox-image').removeAttribute('src');focusReturn?.focus();}
  if(lightbox){$$('[data-lightbox]').forEach(item=>item.addEventListener('click',e=>{e.preventDefault();focusReturn=item;const image=$('img',item);const large=$('#lightbox-image');large.src=image?.currentSrc||item.href;large.alt=image?.alt||'Product photo';$('#lightbox-caption').textContent=item.dataset.caption||'';lightbox.hidden=false;document.body.style.overflow='hidden';closeBtn?.focus()}));closeBtn?.addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lightbox.hidden)closeLightbox()})}
})();
