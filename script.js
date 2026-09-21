(()=>{'use strict';
document.querySelectorAll('img').forEach(img=>{
  ['contextmenu','dragstart','selectstart'].forEach(evt=>img.addEventListener(evt,e=>e.preventDefault()));
});
const menu=document.querySelector('.menu'),nav=document.querySelector('.site-header nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);});}
})();