/* petals.js — gentle falling cherry blossoms with slow parallax
   lightweight, respects prefers-reduced-motion */
(function(){
  if (typeof window === 'undefined') return;
  const canvas = document.querySelector('.petal-canvas');
  const COUNT = 16;
  const PETAL_SVG = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30"><path fill="%23D7A6B0" d="M20 2c5 1 9 5 10 9c-3 1-6 5-10 8c-4-3-7-7-10-8c1-4 5-8 10-9z"/></svg>');

  function supportsReducedMotion(){
    try{return window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){return false}
  }

  function spawnPetal(index){
    const el = document.createElement('div');
    el.className = 'petal';
    const svg = document.createElement('img');
    svg.setAttribute('src','data:image/svg+xml;utf8,'+PETAL_SVG);
    svg.setAttribute('aria-hidden','true');
    el.appendChild(svg);

    const left = Math.random()*100; // percent
    const scale = 0.6 + Math.random()*0.8;
    const dur = 10 + Math.random()*16; // seconds
    const delay = -(Math.random()*8);
    const rot = (Math.random()*360) * (Math.random()<0.5?-1:1);
    const drift = (Math.random()*120 - 60) + 'px';
    const sway = (20 + Math.random()*48) + 'px';

    el.style.left = left + '%';
    el.style.setProperty('--rot', rot + 'deg');
    el.style.setProperty('--drift', drift);
    el.style.setProperty('--sway', sway);
    el.style.transform = `translateY(-20vh) scale(${scale})`;
    el.style.animationDuration = dur + 's, ' + (4 + Math.random()*6) + 's';
    el.style.animationDelay = delay + 's, 0s';

    // remove and respawn when done
    el.addEventListener('animationend', function(e){
      if (e.animationName === 'petal-fall'){
        el.remove();
        setTimeout(()=> spawnPetal(), 200 + Math.random()*2000);
      }
    });

    canvas.appendChild(el);
  }

  function init(){
    if (!canvas) return;
    if (supportsReducedMotion()) return; // skip heavy motion
    for(let i=0;i<COUNT;i++) spawnPetal(i);
  }

  // start after DOM ready
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
