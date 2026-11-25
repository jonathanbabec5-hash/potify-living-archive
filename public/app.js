'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const stages = [
    ['Seed','The beginning is quiet','Every story begins with potential and a little patience.','A starting point: origin, intention, and the first entry.'],
    ['Roots','First connections','The first signs of growth happen beneath the surface.','A place for early observations and the work that no one sees.'],
    ['Soil','A living foundation','The medium is more than a setting; it is an active part of the story.','Document the soil, its preparation, and what is learned along the way.'],
    ['Canopy','Finding the light','As the plant reaches outward, a new shape begins to emerge.','Capture the canopy and the decisions that helped shape it.'],
    ['Flip','A change in rhythm','A turning point in the cycle creates a new chapter to observe.','Record the transition and the context behind the change.'],
    ['Stretch','Room to become','Growth can arrive quickly; attention makes the change visible.','Compare observations across time instead of relying on a single frame.'],
    ['Density','Building character','The work gathers detail, texture, and a character of its own.','Preserve the small changes that are easy to overlook.'],
    ['Quiet Room','A slower rhythm','Some of the most meaningful work happens when the room gets quiet.','Keep a thoughtful record of the decisions made during the pause.'],
    ['Cut','A moment of transition','One chapter closes, and another kind of care begins.','Record the turning point without losing the history that led to it.'],
    ['Dry Room','The patient work','The pace changes again. Time and attention still matter.','Keep observations connected to the earlier chapters.'],
    ['Cure','Care after the cut','Finishing is not a single moment; it is another practice in patience.','Preserve the choices and lessons that shaped the final record.'],
    ['New Cycle','Begin again','Every ending leaves something for the next beginning.','Carry forward what was learned and make room for a new story.']
  ];
  let stage = 0, recovery = false;
  const roman=['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE'];
  const track=$('stage-track');
  stages.forEach((entry,i)=>{const b=document.createElement('button');b.type='button';b.innerHTML='<span>'+String(i+1).padStart(2,'0')+'</span>';b.append(document.createTextNode(entry[0]));b.addEventListener('click',()=>renderStage(i));track.append(b)});
  const stageArtwork = [
    ['seed.webp', 'A seed resting on living soil'],
    ['seed-roots.webp', 'A germinating seed and its roots'],
    ['soil.webp', 'A close study of living soil'],
    ['canopy.webp', 'A green cannabis canopy in a greenhouse'],
    ['flip.webp', 'A cannabis plant as the light shifts'],
    ['stretch.webp', 'A plant reaching toward greenhouse light'],
    ['flower.webp', 'A close view of a flowering cannabis canopy'],
    ['quiet-room.webp', 'A flowering plant in a quiet greenhouse'],
    ['cut.webp', 'A harvested branch beside a field notebook'],
    ['dry-room.webp', 'Cannabis branches hanging in a drying room'],
    ['cure.webp', 'A glass jar and notebook on a greenhouse table'],
    ['new-cycle.webp', 'A new seedling and seed on a potting bench']
  ];
  function renderStage(n){stage=(n+stages.length)%stages.length;if(recovery&&(stage<3||stage>7)){recovery=false;$('toggle-trait').setAttribute('aria-pressed','false');$('toggle-trait').textContent='Show a sample recovery trait'}const x=stages[stage];$('stage-title').textContent=x[0];$('stage-count').textContent=String(stage+1).padStart(2,'0')+' / 12';$('stage-kicker').textContent='CHAPTER '+roman[stage];$('stage-description').textContent=x[2];$('stage-evidence').textContent=x[3];$('art-caption').textContent=x[1].toUpperCase();const art=stageArtwork[stage]; const sample=recovery&&stage>=3&&stage<=7; $('stage-image').src='assets/'+(sample?'recovery.webp':art[0]); $('stage-image').alt='Concept artwork: '+(sample?'a plant with an illustrative recovery trait':art[1]); $('recovery-badge').hidden=!sample;[...track.children].forEach((b,i)=>{b.classList.toggle('active',i===stage);if(i===stage)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')})}
  $('prev-stage').addEventListener('click',()=>renderStage(stage-1));$('next-stage').addEventListener('click',()=>renderStage(stage+1));$('toggle-trait').addEventListener('click',()=>{recovery=!recovery;$('toggle-trait').setAttribute('aria-pressed',String(recovery));$('toggle-trait').textContent=recovery?'Hide sample recovery trait':'Show a sample recovery trait';if(recovery && (stage<3 || stage>7))stage=3;renderStage(stage)});renderStage(0);
  const slides=[
    {tag:'THE IDEA',title:'A living archive\nfor a living culture.',copy:'A digital collection rooted in the real work, stories, and people behind a cultivation cycle.',points:['CRAFT CULTIVATION','COMMUNITY','SOLANA']},
    {tag:'THE PURPOSE',title:'Give the story\nsomewhere to live.',copy:'A grow is more than its final image. The archive is designed to hold the effort, changes, and lessons that shape it.',points:['DOCUMENT THE PROCESS','HONOR THE PEOPLE']},
    {tag:'THE EXPERIENCE',title:'Twelve stages.\nOne continuous story.',copy:'Explore a complete cycle, from Seed through Cure and into New Cycle. The collection concept carries the story forward.',points:['12 CULTIVATION STAGES','ILLUSTRATIVE EVOLUTION']},
    {tag:'THE GREENHOUSE',title:'Participation\nhas a place.',copy:'Check-ins, harvesting, community decisions, and non-transferable Seeds connect people to the wider POTIFY experience.',points:['COMMUNITY','SEEDS','VOTING']},
    {tag:'THE ARCHIVE',title:'The soil remembers.\nSo should we.',copy:'The Chronicle and Grow Room make room for milestones, honest recoveries, and the details behind the finished work.',points:['FROM SEED TO SMOKE','THE POTIFY CHRONICLES']},
    {tag:'THE NETWORK',title:'Many experiences.\nConnected roots.',copy:'Vape God, Plant Doctor, the Greenhouse, stories, music, and a future wallet-linked identity are pieces of a larger ecosystem.',points:['PLAY','LEARN','CREATE','CONNECT']},
    {tag:'THE COLLECTIBLE',title:'Art with context.\nProgress with proof.',copy:'The vision is one evolving Solana collectible. Verified participation and approved records would inform future milestones and recovery traits.',points:['GENUINE EVIDENCE','CONTINUOUS IDENTITY']},
    {tag:'THE BUILD',title:'Trust is designed\ninto the process.',copy:'Start on devnet. Verify claim rules, authority controls, wallet behavior, metadata, and the documented evidence behind each change.',points:['TEST FIRST','PUBLIC RULES','SCOPED AUTHORITY']},
    {tag:'THE INVITATION',title:'Grow something\nworth keeping.',copy:'A meeting place for growers, creators, collectors, and communities who value the story behind the work.',points:['SEED','SOIL','SOLANA']}
  ];
  let current=0;const dots=$('deck-dots');
  slides.forEach((x,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Go to slide '+(i+1)+': '+x.tag);b.addEventListener('click',()=>renderSlide(i));dots.append(b)});
  function renderSlide(n){current=(n+slides.length)%slides.length;let s=slides[current];$('deck-position').textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');$('deck-eyebrow').textContent=s.tag;const h=$('deck-title');h.replaceChildren();s.title.split('\n').forEach((line,i)=>{if(i)h.append(document.createElement('br'));h.append(document.createTextNode(line))});$('deck-copy').textContent=s.copy;const ul=$('deck-points');ul.replaceChildren();s.points.forEach(p=>{const li=document.createElement('li');li.textContent=p;ul.append(li)});[...dots.children].forEach((b,i)=>{b.classList.toggle('active',i===current);if(i===current)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')})}
  $('deck-prev').addEventListener('click',()=>renderSlide(current-1));$('deck-next').addEventListener('click',()=>renderSlide(current+1));renderSlide(0);
  const nav=$('mobile-nav'),toggle=document.querySelector('.menu-toggle');toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.hidden=open});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.hidden=true;toggle.setAttribute('aria-expanded','false')}));
  const key='potify-living-archive-demo-v1';let data={seeds:0,streak:0,checkDate:'',harvestDate:'',vote:''};
  try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved&&typeof saved==='object')data={...data,...saved}}catch{}
  function save(){try{localStorage.setItem(key,JSON.stringify(data))}catch{}}
  function today(){const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')}
  function precedingDay(day){const [y,m,d]=day.split('-').map(Number);const z=new Date(Date.UTC(y,m-1,d-1));return z.toISOString().slice(0,10)}
  function showDemo(){const t=today();$('demo-seeds').textContent=String(data.seeds);$('demo-streak').textContent=data.streak+' '+(data.streak===1?'day':'days');$('demo-status').textContent=data.checkDate===t?'Checked in':'Ready';$('check-in').disabled=data.checkDate===t;$('harvest').disabled=data.harvestDate===t;$('vote').disabled=!!data.vote||data.seeds<3;$('vote-status').textContent=data.vote?'Preview choice: '+data.vote+'. Saved only in this browser.':'No sample vote yet.'}
  $('open-demo').addEventListener('click',()=>{$('demo').hidden=false;showDemo();$('demo').scrollIntoView({behavior:'smooth',block:'start'})});$('close-demo').addEventListener('click',()=>{$('demo').hidden=true;$('open-demo').focus()});
  $('check-in').addEventListener('click',()=>{const t=today();if(data.checkDate===t)return;data.streak=data.checkDate===precedingDay(t)?data.streak+1:1;data.checkDate=t;data.seeds+=5;save();showDemo();$('demo-message').textContent='Checked in. You earned 5 demo Seeds in this browser.'});
  $('harvest').addEventListener('click',()=>{const t=today();if(data.harvestDate===t)return;data.harvestDate=t;data.seeds+=3;save();showDemo();$('demo-message').textContent='Harvest complete. You earned 3 demo Seeds in this browser.'});
  $('vote').addEventListener('click',()=>{if(data.vote||data.seeds<3)return;data.vote=document.querySelector('input[name="cover"]:checked').value;data.seeds-=3;save();showDemo();$('demo-message').textContent='Your sample choice was saved locally; no real vote was submitted.'});
  $('reset-demo').addEventListener('click',()=>{data={seeds:0,streak:0,checkDate:'',harvestDate:'',vote:''};save();showDemo();$('demo-message').textContent='The local preview has been reset.'});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!$('demo').hidden)showDemo()});
})();
