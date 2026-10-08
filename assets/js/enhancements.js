'use strict';
(()=>{
  // Scroll position is the quiet interaction feedback seen across the site.
  const el=document.createElement('div');el.className='page-progress';el.setAttribute('aria-hidden','true');document.body.appendChild(el);
  const style=document.createElement('style');style.textContent='.page-progress{position:fixed;top:0;left:0;height:3px;width:100%;background:linear-gradient(90deg,#d7b375,#ff8e6a,#d9cb9e);transform:scaleX(0);transform-origin:left;z-index:300;pointer-events:none}';document.head.appendChild(style);
  let raf=false;const update=()=>{const travel=Math.max(1,document.documentElement.scrollHeight-innerHeight);el.style.transform=`scaleX(${Math.min(1,scrollY/travel)})`;raf=false};
  window.addEventListener('scroll',()=>{if(!raf){raf=true;requestAnimationFrame(update)}},{passive:true});update();
  // Native lazy loading is supported; never block display if images are slow.
  document.querySelectorAll('img[loading="lazy"]').forEach(image=>{image.decoding='async'});
  // In-page award archive cards are buttons, not outgoing links. Lightbox is handled by main.js.
  // Keep menu backdrop behavior and scrolling consistent across small devices.
  const menu=document.querySelector('#mobile-menu'),toggle=document.querySelector('.menu-toggle');
  if(menu&&toggle){const sync=()=>{document.body.classList.toggle('nav-open',menu.classList.contains('open'))};
    toggle.addEventListener('click',sync);menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));
    window.addEventListener('resize',()=>{if(innerWidth>1250){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');document.body.classList.remove('nav-open')}});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('nav-open')}});
  }
})();

// Featured-flavour switcher works without any dependencies and keeps the page still for reduced motion users.
(()=>{
const stage=document.getElementById('flavour-stage');if(!stage)return;
const entries={
 fruit:{overline:'01 / FRUIT LOVERS',title:'The brighter,<br><em>the better.</em>',desc:'Seven fruit flavours and one delightfully chewy adventure.',button:'Meet Fruit Sclentir',url:'product-fruit-sclentir.html',photo:'https://www.hilmaslanka.lk/wp-content/uploads/2026/08/FruitSclentirChewyToffee.jpg',fallback:'assets/fallback/fruit-sclentir.svg',alt:'Fruit Sclentir Chewy Toffee pack',a:'#f7d9c2',b:'#f2a57e'},
 coffee:{overline:'02 / FOR COFFEE LOVERS',title:'A little <em>coffee.</em><br>A lot of joy.',desc:'A delicious coffee-inspired confectionery treat made for a flavourful break.',button:'Meet Koffee',url:'product-koffee-bag.html',photo:'https://www.hilmaslanka.lk/wp-content/uploads/2025/07/koffee-1.jpg',fallback:'assets/fallback/koffee-bag.svg',alt:'Koffee Toffee pack',a:'#f1dfc8',b:'#cea27d'},
 lolly:{overline:'03 / SOMETHING PLAYFUL',title:'A pop of<br><em>happy.</em>',desc:'Colourful lollipop moments, made for a little everyday delight.',button:'Meet Hilpop',url:'product-hilpop.html',photo:'https://www.hilmaslanka.lk/wp-content/uploads/2025/07/pop-hilpop-1.jpg',fallback:'assets/fallback/hilpop.svg',alt:'Hilpop Lollipops pack',a:'#e5d5f4',b:'#f5b67c'}
};
const buttons=[...document.querySelectorAll('.flavour-choice')],photo=document.getElementById('flavour-image');
buttons.forEach(b=>b.addEventListener('click',()=>{const item=entries[b.dataset.flavour];if(!item)return;
 buttons.forEach(x=>{x.classList.toggle('is-active',x===b);x.setAttribute('aria-pressed',String(x===b))});
 stage.style.setProperty('--flavour-a',item.a);stage.style.setProperty('--flavour-b',item.b);
 document.getElementById('flavour-overline').textContent=item.overline;document.getElementById('flavour-title').innerHTML=item.title;document.getElementById('flavour-description').textContent=item.desc;
 const link=document.getElementById('flavour-link');link.href=item.url;link.firstChild.textContent=item.button+' ';
 photo.alt=item.alt;photo.onerror=()=>{photo.onerror=null;photo.src=item.fallback};photo.src=item.photo;
}));
})();
