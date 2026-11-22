
(function(){
  // odkaz na platbu (Stripe) doplníme; do té doby tlačítka vedou na cenu v dopise
  var BUY_URL='';
  var pg=document.getElementById('pg'), pct=document.getElementById('pct'), RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  [].forEach.call(document.querySelectorAll('[data-roll]'),function(el){ var t=el.textContent.trim(), k=0; el.textContent=''; el.classList.add('roll'); el.setAttribute('aria-label',t);
    t.split(/\s+/).forEach(function(w){ var ws=document.createElement('span'); ws.className='w'; ws.setAttribute('aria-hidden','true');
      Array.from(w).forEach(function(ch){ var r=document.createElement('span'); r.className='r'; var ri=document.createElement('span'); ri.className='ri'; ri.style.setProperty('--i',k++); ri.textContent=ch; r.appendChild(ri); ws.appendChild(r); }); el.appendChild(ws); k++; }); });
  // ANO → platba přes Stripe Payment Link (v náhledu v iframe se otevře v novém panelu); NE → děkovná stránka
  if(BUY_URL) [].forEach.call(document.querySelectorAll('[data-buy]'),function(a){ a.href=BUY_URL; if(window.top!==window){ a.target='_blank'; a.rel='noopener'; } });
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ pg.classList.add('go'); }); });
  if(RM) pct.textContent='60 %';
  else setTimeout(function(){ var t0=0; function f(now){ if(!t0) t0=now; var k=Math.min(1,(now-t0)/1400), e=1-Math.pow(1-k,4); pct.textContent=Math.round(60*e)+' %'; if(k<1) requestAnimationFrame(f); } requestAnimationFrame(f); },400);
  // průběh čtení dopisu jako tenká limetková linka pod upozorněním
  var L=document.getElementById('dopis'), rd=document.getElementById('rd'), tk=0;
  function rp(){ tk=0; var r=L.getBoundingClientRect(), p=Math.min(1,Math.max(0,(innerHeight*.6-r.top)/r.height)); rd.style.setProperty('--rp',p.toFixed(4)); }
  addEventListener('scroll',function(){ if(!tk) tk=requestAnimationFrame(rp); },{passive:true}); rp();
  var els=[].slice.call(document.querySelectorAll('.io'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.08}); els.forEach(function(el){ io.observe(el); });
    var st=document.getElementById('stick'), topBtn=document.querySelector('#top .btn'), price=document.getElementById('cena'), end=document.getElementById('koupit'), a=false, b=false, c=false;
    function upd(){ var on=a&&!b&&!c; st.classList.toggle('on',on); st.setAttribute('aria-hidden',on?'false':'true'); st.querySelector('a').tabIndex=on?0:-1; }
    new IntersectionObserver(function(es){ a=!es[0].isIntersecting&&es[0].boundingClientRect.top<0; upd(); }).observe(topBtn);
    new IntersectionObserver(function(es){ b=es[0].isIntersecting; upd(); },{threshold:.2}).observe(end);
    new IntersectionObserver(function(es){ c=es[0].isIntersecting; upd(); },{threshold:.3}).observe(price);
  } else els.forEach(function(el){ el.classList.add('in'); });
})();
