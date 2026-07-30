
(function(){
  const body=document.body;
  const menu=document.getElementById('menuButton');
  const scrim=document.getElementById('sidebarScrim');
  if(menu) menu.addEventListener('click',()=>body.classList.toggle('sidebar-open'));
  if(scrim) scrim.addEventListener('click',()=>body.classList.remove('sidebar-open'));

  const key='aws-study-lab-completed';
  const getDone=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]}};
  const saveDone=v=>localStorage.setItem(key,JSON.stringify(v));
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const complete=document.getElementById('completeLab');
  function paintComplete(){
    if(!complete) return;
    const done=getDone().includes(page);
    complete.classList.toggle('done',done);
    complete.querySelector('span:last-child').textContent=done?'Completed':'Mark complete';
  }
  if(complete){complete.addEventListener('click',()=>{let done=getDone();done=done.includes(page)?done.filter(x=>x!==page):[...done,page];saveDone(done);paintComplete();});paintComplete()}

  const tiles=[...document.querySelectorAll('.app-tile')];
  const search=document.getElementById('labSearch')||document.getElementById('globalSearch');
  const global=document.getElementById('globalSearch');
  function filter(value){
    if(!tiles.length) return;
    const q=value.trim().toLowerCase();let visible=0;
    tiles.forEach(tile=>{const show=!q||tile.textContent.toLowerCase().includes(q);tile.classList.toggle('is-hidden',!show);if(show)visible++});
    document.getElementById('emptySearch')?.classList.toggle('show',visible===0);
  }
  if(search) search.addEventListener('input',e=>filter(e.target.value));
  if(global&&global!==search) global.addEventListener('input',e=>filter(e.target.value));
  if(global&&!tiles.length) global.addEventListener('keydown',e=>{if(e.key==='Enter'&&global.value.trim()) location.href='index.html?q='+encodeURIComponent(global.value.trim())});
  const initialQuery=new URLSearchParams(location.search).get('q');
  if(initialQuery&&tiles.length){const target=document.getElementById('labSearch')||global;if(target)target.value=initialQuery;filter(initialQuery);}

  if(tiles.length){
    const done=getDone();tiles.forEach(t=>t.classList.toggle('completed',done.includes(t.dataset.page)));
    const pct=Math.round(done.filter(x=>tiles.some(t=>t.dataset.page===x)).length/tiles.length*100);
    document.querySelectorAll('[data-progress]').forEach(el=>el.style.setProperty('--progress',pct+'%'));
    document.querySelectorAll('[data-progress-label]').forEach(el=>el.textContent=pct+'%');
    document.querySelectorAll('[data-complete-count]').forEach(el=>el.textContent=done.filter(x=>tiles.some(t=>t.dataset.page===x)).length);
  }
})();
