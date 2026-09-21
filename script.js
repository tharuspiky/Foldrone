(()=>{'use strict';
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('contextmenu',e=>e.preventDefault());
  img.addEventListener('dragstart',e=>e.preventDefault());
  img.addEventListener('selectstart',e=>e.preventDefault());
});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(target){e.preventDefault();target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});}
}));
const menu=document.querySelector('.menu');
const nav=document.querySelector('.site-header nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=menu.getAttribute('aria-expanded')==='true';
    menu.setAttribute('aria-expanded',String(!open));
    nav.classList.toggle('open',!open);
  });
}
})();