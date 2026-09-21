(()=>{'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const links=document.querySelectorAll('a[href^="#"]');
links.forEach(a=>a.addEventListener('click',e=>{
  const t=document.querySelector(a.getAttribute('href'));
  if(t){e.preventDefault();t.scrollIntoView({behavior:reduce?'auto':'smooth'})}
}));
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('contextmenu',e=>e.preventDefault());
  img.addEventListener('dragstart',e=>e.preventDefault());
  img.addEventListener('selectstart',e=>e.preventDefault());
});
if(reduce)return;
const root=document.documentElement;
addEventListener('pointermove',e=>{
  root.style.setProperty('--pointer-x',e.clientX/innerWidth*100+'%');
  root.style.setProperty('--pointer-y',e.clientY/innerHeight*100+'%');
},{passive:true});
if('AmbientLightSensor' in window){
  try{
    const sensor=new AmbientLightSensor({frequency:.2});
    sensor.addEventListener('reading',()=>{
      const lux=Math.max(1,Math.min(sensor.illuminance||40,500));
      root.style.setProperty('--ambient-level',Math.min(1,Math.max(.25,lux/220)).toFixed(2));
    });
    sensor.start();
  }catch(e){}
}
})();