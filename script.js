(()=>{"use strict";
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll("img").forEach(img=>["contextmenu","dragstart","selectstart"].forEach(t=>img.addEventListener(t,e=>e.preventDefault())));
const button=document.querySelector(".menu-button"),menu=document.querySelector(".mobile-menu");
if(button&&menu){button.addEventListener("click",()=>{const open=button.getAttribute("aria-expanded")==="true";button.setAttribute("aria-expanded",String(!open));menu.classList.toggle("open",!open)});menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{button.setAttribute("aria-expanded","false");menu.classList.remove("open")}))}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const target=document.querySelector(a.getAttribute("href"));if(target){e.preventDefault();target.scrollIntoView({behavior:reduced?"auto":"smooth",block:"start"})}}));
})();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));}
