(()=>{"use strict";
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll("img").forEach(img=>{
  ["contextmenu","dragstart","selectstart"].forEach(type=>img.addEventListener(type,e=>e.preventDefault()));
});
const menu=document.querySelector(".menu-button"), nav=document.querySelector(".mobile-nav");
if(menu&&nav){menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));nav.classList.toggle("open",!open);});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.setAttribute("aria-expanded","false");nav.classList.remove("open")}));}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:reduced?"auto":"smooth",block:"start"})}}));
})();