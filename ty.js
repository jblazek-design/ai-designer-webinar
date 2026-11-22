
(function(){
  var ty=document.getElementById('ty'), pct=document.getElementById('pct');
  [].forEach.call(document.querySelectorAll('[data-roll]'),function(el){ var t=el.textContent.trim(), k=0; el.textContent=''; el.classList.add('roll'); el.parentNode.setAttribute('aria-label',t);
    t.split(/\s+/).forEach(function(w){ var ws=document.createElement('span'); ws.className='w'; ws.setAttribute('aria-hidden','true');
      Array.from(w).forEach(function(ch){ var r=document.createElement('span'); r.className='r'; var ri=document.createElement('span'); ri.className='ri'; ri.style.setProperty('--i',k++); ri.textContent=ch; r.appendChild(ri); ws.appendChild(r); }); el.appendChild(ws); k++; }); });
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ ty.classList.add('go'); }); });
  // počítadlo procent běží souběžně s barem
  var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(RM){ pct.textContent='90 %'; }
  else setTimeout(function(){ var t0=0; function f(now){ if(!t0) t0=now; var k=Math.min(1,(now-t0)/1600), e=1-Math.pow(1-k,4); pct.textContent=Math.round(90*e)+' %'; if(k<1) requestAnimationFrame(f); } requestAnimationFrame(f); },500);
  // sekce níž najedou při doscrollování
  var els=[].slice.call(document.querySelectorAll('.io'));
  if('IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.2}); els.forEach(function(el){ io.observe(el); }); }
  else els.forEach(function(el){ el.classList.add('in'); });
  // kalendář: .ics se třemi večery (Praha, 19:00–21:00)
  document.getElementById('calBtn').addEventListener('click',function(){
    var L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Socialmind//AI Designer//CS','CALSCALE:GREGORIAN',
      'BEGIN:VTIMEZONE','TZID:Europe/Prague','BEGIN:STANDARD','DTSTART:19701025T030000','RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU','TZOFFSETFROM:+0200','TZOFFSETTO:+0100','TZNAME:CET','END:STANDARD','END:VTIMEZONE'];
    [['06','Večer 1: Design s AI je teď největší příležitost'],['07','Večer 2: Můj workflow, se kterým porazíš i agenturu'],['08','Večer 3: Jak se dostat na 100 tis. měsíčně']].forEach(function(d){
      L.push('BEGIN:VEVENT','UID:aid-202612'+d[0]+'@socialmind.cz','DTSTAMP:20261121T120000Z','DTSTART;TZID=Europe/Prague:202612'+d[0]+'T190000','DTEND;TZID=Europe/Prague:202612'+d[0]+'T210000','SUMMARY:AI Designer · '+d[1],'DESCRIPTION:Odkaz na živé vysílání najdeš ve WhatsApp skupině.','BEGIN:VALARM','TRIGGER:-PT15M','ACTION:DISPLAY','DESCRIPTION:AI Designer začíná za 15 minut','END:VALARM','END:VEVENT'); });
    L.push('END:VCALENDAR');
    var b=new Blob([L.join('\r\n')],{type:'text/calendar;charset=utf-8'}), a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download='ai-designer-6-8-12.ics'; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); },500);
  });
})();
