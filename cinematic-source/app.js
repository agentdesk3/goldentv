/* Source-local DOM facades preserve choreography without cross-section selectors. */
const realDocument=document,realWindow=window,bus=new Map(),contexts=[],mounted=new Set();
function layoutRect(el){let top=0,left=0,node=el;while(node){top+=node.offsetTop;left+=node.offsetLeft;node=node.offsetParent}return {top:top-scrollY,left:left-scrollX,width:el.offsetWidth,height:el.offsetHeight,bottom:top-scrollY+el.offsetHeight}}
window.integrationStatus={mounted:[],errors:[]};
function listen(type,fn,options){if(['scroll','resize'].includes(type)){if(!bus.has(type)){bus.set(type,new Set());realWindow.addEventListener(type,event=>{for(const cb of bus.get(type))cb(event)},{passive:true})}bus.get(type).add(fn)}else realWindow.addEventListener(type,fn,options)}
if(window.gsap&&window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
function mount(key,ids,initialize){if(mounted.has(key))return;mounted.add(key);const root=realDocument.getElementById('section-'+key);const query=s=>s.replace(/#([\w-]+)/g,(all,id)=>'#'+(ids[id]||id));const doc=new Proxy(realDocument,{get(target,p){if(p==='querySelector')return s=>root.querySelector(query(s));if(p==='querySelectorAll')return s=>root.querySelectorAll(query(s));if(p==='getElementById')return id=>root.querySelector('#'+CSS.escape(ids[id]||id));if(p==='documentElement'||p==='body')return root;const v=Reflect.get(target,p,target);return typeof v==='function'?v.bind(target):v}});
const win=new Proxy(realWindow,{get(target,p){if(p==='document')return doc;if(p==='addEventListener')return listen;const v=Reflect.get(target,p,target);return typeof v==='function'?v.bind(target):v}});
if(key==='faq')root.querySelectorAll('.question').forEach(b=>{b.setAttribute('aria-expanded',b.dataset.initialExpanded);b.closest('.qa').classList.toggle('open',b.dataset.initialExpanded==='true')});
try{const run=()=>initialize(doc,win,listen);if(window.gsap)contexts.push(gsap.context(run,root));else run();root.classList.add('motion-ready');window.integrationStatus.mounted.push(key)}catch(e){root.classList.remove('motion-ready');window.integrationStatus.errors.push({key,message:e.message});console.error('Section initialization failed',key,e)}}

mount("hero",{"main":"hero-main","home":"hero-home","hero-title":"hero-hero-title"},function(document,window,addEventListener){

});
mount("sports",{"main":"sports-main","sports":"sports-sports","sports-title":"sports-sports-title","assembly-title":"sports-assembly-title"},function(document,window,addEventListener){
(()=>{if(!window.gsap||!window.ScrollTrigger)return;const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const logos=gsap.utils.toArray('.assembly-item');gsap.set(logos,{autoAlpha:0,y:24,scale:.92});gsap.set('.red-light',{autoAlpha:0});const tl=gsap.timeline({defaults:{ease:'none'},scrollTrigger:{id:'sports-logo-assembly',trigger:'.assembly',start:'top 90%',end:'bottom 55%',scrub:true}});tl.to(logos,{autoAlpha:1,y:0,scale:1,duration:1,stagger:.2}).to('.red-light',{autoAlpha:1,duration:.6});return()=>tl.revert()});Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))).then(()=>ScrollTrigger.refresh());document.fonts.ready.then(()=>ScrollTrigger.refresh());window.addEventListener('pageshow',()=>ScrollTrigger.refresh());window.addEventListener('pagehide',()=>mm.revert(),{once:true});})();
(()=>{if(!window.gsap||!window.ScrollTrigger)return;const mm=gsap.matchMedia();mm.add({mobile:'(max-width:767px)',desktop:'(min-width:768px)',motion:'(prefers-reduced-motion:no-preference)'},ctx=>{if(!ctx.conditions.motion)return;const panels=gsap.utils.toArray('.sport-panel');const starts=[{x:-36,y:0,scale:1},{x:0,y:32,scale:.96},{x:36,y:0,scale:1}];panels.forEach((p,i)=>gsap.set(p,{...starts[i],autoAlpha:0}));if(ctx.conditions.mobile){panels.forEach((p,i)=>gsap.to(p,{x:0,y:0,scale:1,autoAlpha:1,ease:'none',scrollTrigger:{id:'panorama-'+i,trigger:p,start:'top 90%',end:'top 35%',scrub:true}}))}else{const t=gsap.timeline({defaults:{ease:'none'},scrollTrigger:{id:'panorama',trigger:'.disciplines',start:'top 90%',end:'clamp(top 30%)',scrub:true}});panels.forEach((p,i)=>t.to(p,{x:0,y:0,scale:1,autoAlpha:1,duration:1},i*.35))}});Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))).then(()=>ScrollTrigger.refresh());window.addEventListener('pagehide',()=>mm.revert(),{once:true})})();
});
mount("universe",{"universe":"universe-universe","spotlight":"universe-spotlight"},function(document,window,addEventListener){

(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)'),logos=[...document.querySelectorAll('.logo')],universe=document.querySelector('#universe');let ticking=false;function update(){ticking=false;if(reduce.matches){logos.forEach(el=>{el.style.setProperty('--reveal',1);el.style.setProperty('--offset',0)});return}const h=innerHeight;logos.forEach((el,i)=>{const r=layoutRect(el),p=Math.max(0,Math.min(1,(h*.92-r.top)/(h*.58)));const smooth=p*p*(3-2*p);el.style.setProperty('--reveal',smooth.toFixed(3));el.style.setProperty('--offset',(1-smooth).toFixed(3))})}function schedule(){if(!ticking){ticking=true;requestAnimationFrame(update)}}addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduce.addEventListener?.('change',schedule);schedule();if(matchMedia('(hover:hover) and (pointer:fine)').matches){universe.addEventListener('pointermove',e=>{const r=universe.getBoundingClientRect();universe.style.setProperty('--mx',`${e.clientX-r.left}px`);universe.style.setProperty('--my',`${e.clientY-r.top}px`)},{passive:true});logos.forEach(el=>{const f=el.querySelector('.float');el.addEventListener('pointermove',e=>{if(reduce.matches)return;const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;f.style.setProperty('--hx',`${(x*12).toFixed(1)}px`);f.style.setProperty('--hy',`${(y*10).toFixed(1)}px`);f.style.setProperty('--hs','1.08');f.style.setProperty('--glow','1')});el.addEventListener('pointerleave',()=>{['--hx','--hy','--hs','--glow'].forEach(k=>f.style.removeProperty(k))})})}})();

});
mount("devices",{"devices":"devices-devices","devices-title":"devices-devices-title"},function(document,window,addEventListener){

(()=>{const items=[...document.querySelectorAll('.device')], section=document.querySelector('.device-band'), reduce=matchMedia('(prefers-reduced-motion: reduce)');let raf=0;function clamp(v){return Math.max(0,Math.min(1,v))}function update(){raf=0;if(reduce.matches){items.forEach(e=>{e.style.opacity='1';e.style.transform='none'});return}const r=section.getBoundingClientRect(),vh=innerHeight;/* Entire progression is a pure function of scroll position; no timers or autoplay. */const start=vh*.85,end=vh*.28;const progress=clamp((start-r.top)/(start-end));items.forEach((el,i)=>{const p=clamp((progress-i/items.length)*items.length*1.8);el.style.opacity=String(.12+.88*p);el.style.transform=`translate3d(0,${(1-p)*22}px,0)`})}function schedule(){if(!raf)raf=requestAnimationFrame(update)}addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduce.addEventListener?.('change',schedule);schedule()})();

});
mount("pricing",{"pricing-title":"pricing-pricing-title","plans":"pricing-plans"},function(document,window,addEventListener){

const plans=[{name:'1 Month',label:'FLEX',sub:'Your flexible way to begin',price:'R199',period:'billed for 1 month',saving:'Flexible monthly access',cta:'Choose Monthly Membership'},{name:'3 Months',label:'PLUS',sub:'More time. Better value.',price:'R499',period:'R166.33 / month equivalent',saving:'Save R98 vs 3 monthly plans',cta:'Choose 3-Month Membership'},{name:'6 Months',label:'PREMIUM',sub:'Stay longer. Save more.',price:'R699',period:'R116.50 / month equivalent',saving:'Save R495 vs 6 monthly plans',cta:'Choose 6-Month Membership'},{name:'12 Months',label:'GOLDEN ANNUAL',sub:'Your year of entertainment',price:'R999',period:'R83.25 / month equivalent',saving:'Save R1,389 vs 12 monthly plans',cta:'Choose Annual Membership',featured:true}];const features=['20,000 channels','100,000 movies','250,000 series','Stable streaming experience','24/7 customer support','7-day refund policy*'];const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));document.querySelector('#plans').innerHTML=plans.map((p,i)=>`<article class="plan reveal ${p.featured?'featured':''}" style="transition-delay:${i*85}ms" aria-label="${escapeHTML(p.name)} membership">${p.featured?'<div class="ribbon">✦ RECOMMENDED · BEST VALUE</div>':''}<div class="plan-top"><span class="plan-kicker">${escapeHTML(p.label)}</span><span class="plan-index">0${i+1} / 04</span></div><h2>${escapeHTML(p.name)}</h2><div class="subline">${escapeHTML(p.sub)}</div><div class="price">${escapeHTML(p.price)}</div><div class="period">${escapeHTML(p.period)}</div><div class="saving">${i===0?escapeHTML(p.saving):`<strong>${escapeHTML(p.saving)}</strong>`}</div><div class="divider"></div><div class="included">Every membership includes</div><ul class="features">${features.map((f,j)=>`<li><span class="tick" aria-hidden="true">✓</span><span ${j<3?'class="feature-strong"':''}>${escapeHTML(f)}</span></li>`).join('')}</ul><a class="cta" href="https://www.goldeniptv.co.za/pricing/" target="_blank" rel="noopener noreferrer">${escapeHTML(p.cta)} <span aria-hidden="true">↗</span></a></article>`).join('');const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets=[...document.querySelectorAll('.reveal')];
if(reduced){targets.forEach(el=>el.classList.add('visible'))}
else{
  document.documentElement.classList.add('scroll-driven');
  const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
  let queued=false;
  function renderScroll(){
    queued=false;
    const vh=window.innerHeight;
    const pricing=document.querySelector('.pricing');
    const rects=targets.map(el=>layoutRect(el));
    const section=pricing.getBoundingClientRect();
    targets.forEach((el,i)=>{
      const r=rects[i];
      const start=vh*.94;
      const finish=vh*.46;
      const progress=clamp((start-r.top)/(start-finish),0,1);
      const eased=progress*progress*(3-2*progress);
      el.style.setProperty('--scroll-progress',eased.toFixed(4));
      el.style.setProperty('--scroll-y',((1-eased)*66).toFixed(1)+'px');
      el.style.setProperty('--scroll-scale',(0.94+0.06*eased).toFixed(4));
      el.style.setProperty('--scroll-blur',((1-eased)*5).toFixed(2)+'px');
      el.style.setProperty('--scroll-rotate',((1-eased)*(i%2?-2.2:2.2)).toFixed(2)+'deg');
    
    });
    const journey=clamp((vh-section.top)/(vh+section.height),0,1);
    pricing.style.setProperty('--journey',journey.toFixed(4));
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(renderScroll)}}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  renderScroll();
}
if(!reduced&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){document.querySelectorAll('.plan').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${e.clientX-r.left}px`);card.style.setProperty('--my',`${e.clientY-r.top}px`)}))}

});
mount("how",{"steps":"how-steps","railFill":"how-railFill","visual":"how-visual"},function(document,window,addEventListener){

(()=>{const steps=[...document.querySelectorAll('.step')],scenes=[...document.querySelectorAll('.scene')],rail=document.getElementById('railFill'),container=document.getElementById('steps'),visual=document.getElementById('visual'),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;let ticking=false;function update(){ticking=false;const focus=innerHeight*.47;let active=0,closest=Infinity;steps.forEach((step,i)=>{const r=step.getBoundingClientRect();const distance=Math.abs(r.top+r.height/2-focus);if(distance<closest){closest=distance;active=i}});const r=container.getBoundingClientRect();steps.forEach((el,i)=>{el.classList.toggle('active',i===active)});scenes.forEach((el,i)=>el.classList.toggle('active',i===active));const p=Math.max(0,Math.min(1,(focus-r.top)/r.height));rail.style.height=`${p*100}%`}function request(){if(!ticking){ticking=true;requestAnimationFrame(update)}}addEventListener('scroll',request,{passive:true});addEventListener('resize',request);update();if(!reduce&&matchMedia('(hover:hover) and (pointer:fine)').matches){visual.addEventListener('pointermove',e=>{const r=visual.getBoundingClientRect();visual.style.setProperty('--mx',`${(e.clientX-r.left-r.width/2)*.13}px`);visual.style.setProperty('--my',`${(e.clientY-r.top-r.height/2)*.13}px`)});visual.addEventListener('pointerleave',()=>{visual.style.setProperty('--mx','0px');visual.style.setProperty('--my','0px')})}})();

});
mount("trust",{"story":"trust-story","visual":"trust-visual","bar":"trust-bar"},function(document,window,addEventListener){

const story=document.getElementById('story'),scenes=[...document.querySelectorAll('.scene')],panels=[...document.querySelectorAll('.panel')],bar=document.getElementById('bar'),visual=document.getElementById('visual');let raf=0;function update(){raf=0;const r=story.getBoundingClientRect(),range=Math.max(1,story.offsetHeight-innerHeight),p=Math.min(1,Math.max(0,-r.top/range)),i=Math.min(2,Math.floor(p*3));scenes.forEach((e,j)=>e.classList.toggle('active',j===i));panels.forEach((e,j)=>e.classList.toggle('active',j===i));bar.style.width=(p*100)+'%'}addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(update)},{passive:true});addEventListener('resize',update);update();if(matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches){visual.addEventListener('pointermove',e=>{let r=visual.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;visual.style.setProperty('--mx',(x*100)+'%');visual.style.setProperty('--my',(y*100)+'%');visual.style.setProperty('--ry',((x-.5)*3)+'deg');visual.style.setProperty('--rx',((.5-y)*3)+'deg')});visual.addEventListener('pointerleave',()=>{visual.style.setProperty('--ry','0deg');visual.style.setProperty('--rx','0deg')})}

});
mount("faq",{"faq":"faq-faq","bar":"faq-bar","count":"faq-count","questions":"faq-questions"},function(document,window,addEventListener){

const cards=[...document.querySelectorAll('.qa')],bar=document.getElementById('bar'),count=document.getElementById('count'),section=document.querySelector('.faq');let ticking=false;function update(){let mid=innerHeight*.49,best=0,dist=Infinity;cards.forEach((c,i)=>{let r=c.getBoundingClientRect(),d=Math.abs((r.top+r.bottom)/2-mid);if(d<dist){dist=d;best=i}});cards.forEach((c,i)=>c.classList.toggle('active',i===best));count.textContent=String(best+1).padStart(2,'0');let r=section.getBoundingClientRect(),total=Math.max(1,r.height-innerHeight),progress=Math.max(0,Math.min(1,-r.top/total));bar.style.width=(progress*100)+'%';ticking=false}addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);update();cards.forEach(c=>{let btn=c.querySelector('button');btn.addEventListener('click',()=>{let was=c.classList.contains('open');c.classList.toggle('open',!was);btn.setAttribute('aria-expanded',String(!was))})});section.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;let r=section.getBoundingClientRect();section.style.setProperty('--mx',(e.clientX-r.left)+'px');section.style.setProperty('--my',(e.clientY-r.top)+'px')});

});
mount("final",{"finale":"final-finale","sticky":"final-sticky","halo":"final-halo","beam":"final-beam","mouseGlow":"final-mouseGlow","footer":"final-footer","wordmark":"final-wordmark","year":"final-year"},function(document,window,addEventListener){

(()=>{'use strict';document.getElementById('year').textContent=new Date().getFullYear();const reduced=matchMedia('(prefers-reduced-motion: reduce)');const stage=document.getElementById('finale'),halo=document.getElementById('halo'),beam=document.getElementById('beam'),reveal=[...document.querySelectorAll('[data-reveal]')],footer=document.getElementById('footer'),wordmark=document.getElementById('wordmark'),sticky=document.getElementById('sticky');const clamp=(n,a=0,b=1)=>Math.max(a,Math.min(b,n));let scheduled=false;function render(){scheduled=false;if(reduced.matches){reveal.forEach(el=>{el.style.opacity='1';el.style.transform='none'});wordmark.style.opacity='1';wordmark.style.transform='none';return}const rect=stage.getBoundingClientRect();const range=Math.max(1,stage.offsetHeight-innerHeight);const p=clamp(-rect.top/range);halo.style.opacity=String(.25+p*.65);halo.style.transform=`translate(-50%,-50%) scale(${.75+p*.5})`;beam.style.transform=`translateX(${-120+p*260}%)`;reveal.forEach((el,i)=>{const start=.05+i*.085;const k=clamp((p-start)/.19);el.style.opacity=String(k);el.style.transform=`translateY(${(1-k)*35}px)`});const f=footer.getBoundingClientRect();const fp=clamp((innerHeight-f.top)/(innerHeight*.8));wordmark.style.opacity=String(.25+fp*.75);wordmark.style.transform=`translateY(${(1-fp)*50}px)`}function request(){if(!scheduled){scheduled=true;requestAnimationFrame(render)}}addEventListener('scroll',request,{passive:true});addEventListener('resize',request);reduced.addEventListener?.('change',request);request();if(matchMedia('(hover:hover) and (pointer:fine)').matches){sticky.addEventListener('pointermove',e=>{const r=sticky.getBoundingClientRect();sticky.style.setProperty('--mx',`${e.clientX-r.left}px`);sticky.style.setProperty('--my',`${e.clientY-r.top}px`)});document.querySelectorAll('.btn').forEach(btn=>{btn.addEventListener('pointermove',e=>{if(reduced.matches)return;const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.06}px,${(e.clientY-r.top-r.height/2)*.1}px)`});btn.addEventListener('pointerleave',()=>btn.style.transform='')})}})();

});

// Single post-assets refresh; native source schedules are notified of final geometry.
Promise.allSettled([...document.images].map(i=>i.decode())).then(()=>document.fonts.ready).then(()=>{window.ScrollTrigger?.refresh();window.dispatchEvent(new Event('resize'));window.integrationStatus.assetsReady=true});
window.addEventListener('pageshow',()=>{window.ScrollTrigger?.refresh();window.dispatchEvent(new Event('resize'))});
window.addEventListener('pagehide',e=>{if(!e.persisted){contexts.forEach(c=>c.revert());bus.forEach(s=>s.clear())}});
// Focus must never be hidden by scroll-only reveal states.
document.addEventListener('focusin',e=>{const el=e.target.closest('.reveal,[data-reveal]');if(el){el.classList.add('keyboard-visible');el.style.opacity='1'}});
document.querySelectorAll('#section-faq .question').forEach(btn=>btn.addEventListener('click',()=>window.ScrollTrigger?.refresh()));
document.querySelectorAll('#section-final .preview').forEach(e=>e.style.position='absolute');
