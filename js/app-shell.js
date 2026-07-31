(function(){
  const rootPrefix=document.documentElement.dataset.rootPrefix||'';
  if(!document.querySelector('.global-rail')){
    const rail=document.createElement('nav');
    rail.className='global-rail';
    rail.setAttribute('aria-label','Platform navigation');
    rail.innerHTML=`
      <a class="rail-logo" href="${rootPrefix}index.html" aria-label="AWS workspace"><span></span><span></span><span></span><span></span></a>
      <div class="rail-main">
        <a class="rail-item" data-rail-section="home" href="${rootPrefix}index.html" aria-label="Home" title="Home"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8Z"/></svg><span class="rail-label">Home</span></a>
        <a class="rail-item" data-rail-section="study" href="${rootPrefix}study.html" aria-label="Study" title="Study"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 8h7M8 12h7M8 16h4"/></svg><span class="rail-label">Study</span></a>
        <a class="rail-item" data-rail-section="exam" href="${rootPrefix}exam.html" aria-label="Exam" title="Exam"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v4H7z"/><path d="M5 5h14v16H5zM8 11h8M8 15h5"/></svg><span class="rail-label">Exam</span></a>
        <button class="rail-item" type="button" aria-label="Search" title="Search" data-focus-search><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg><span class="rail-label">Search</span></button>
      </div>
      <div class="rail-bottom">
        <a class="rail-item" href="https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html" target="_blank" rel="noopener" aria-label="AWS guide" title="AWS guide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg><span class="rail-label">Guide</span></a>
        <span class="rail-avatar" aria-label="User">TP</span>
      </div>`;
    document.body.prepend(rail);
    rail.querySelector('[data-focus-search]')?.addEventListener('click',()=>document.getElementById('globalSearch')?.focus());
    const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    const inCourse=location.pathname.includes('/course/');
    const studyPages=new Set(['study.html','study-guide.html','iam.html','vpc.html','autoscaling.html','load-balancing.html','sqs.html','cloudwatch.html','disaster-recovery.html','lambda-concurrency.html','dynamodb.html','storage-selector.html','database-selector.html','route53-delivery.html','s3-lifecycle.html','cost-optimizer.html']);
    const examPages=new Set(['exam.html','architecture-practice.html','mock-exams.html']);
    const section=(inCourse||studyPages.has(current))?'study':examPages.has(current)?'exam':'home';
    rail.querySelectorAll('[data-rail-section]').forEach(a=>a.classList.toggle('active',a.dataset.railSection===section));
  }

  const body=document.body,menu=document.getElementById('menuButton'),scrim=document.getElementById('sidebarScrim');
  if(menu)menu.addEventListener('click',()=>body.classList.toggle('sidebar-open'));if(scrim)scrim.addEventListener('click',()=>body.classList.remove('sidebar-open'));
  const key='aws-saa-study-lab-completed';const getDone=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]}},saveDone=v=>localStorage.setItem(key,JSON.stringify(v));
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase(),complete=document.getElementById('completeLab');
  function paintComplete(){if(!complete)return;const done=getDone().includes(page);complete.classList.toggle('done',done);complete.querySelector('span:last-child').textContent=done?'Completed':'Mark complete'}
  if(complete){complete.addEventListener('click',()=>{let done=getDone();done=done.includes(page)?done.filter(x=>x!==page):[...done,page];saveDone(done);paintComplete()});paintComplete()}
  const tiles=[...document.querySelectorAll('.app-tile')],search=document.getElementById('labSearch')||document.getElementById('globalSearch'),global=document.getElementById('globalSearch');let domain='all';
  function filter(value=''){if(!tiles.length)return;const q=value.trim().toLowerCase();let visible=0;tiles.forEach(tile=>{const showText=!q||tile.textContent.toLowerCase().includes(q),showDomain=domain==='all'||tile.dataset.domain===domain,show=showText&&showDomain;tile.classList.toggle('is-hidden',!show);if(show)visible++});document.getElementById('emptySearch')?.classList.toggle('show',visible===0)}
  if(search)search.addEventListener('input',e=>filter(e.target.value));if(global&&global!==search)global.addEventListener('input',e=>filter(e.target.value));if(global&&!tiles.length)global.addEventListener('keydown',e=>{if(e.key==='Enter'&&global.value.trim())location.href='study.html?q='+encodeURIComponent(global.value.trim())});
  document.querySelectorAll('.domain-filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.domain-filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');domain=btn.dataset.filter;filter((document.getElementById('labSearch')||global)?.value||'')}));
  const initialQuery=new URLSearchParams(location.search).get('q');if(initialQuery&&tiles.length){const target=document.getElementById('labSearch')||global;if(target)target.value=initialQuery;filter(initialQuery)}
  if(tiles.length){const done=getDone(),completed=done.filter(x=>tiles.some(t=>t.dataset.page===x));tiles.forEach(t=>t.classList.toggle('completed',done.includes(t.dataset.page)));const pct=Math.round(completed.length/tiles.length*100);document.querySelectorAll('[data-progress]').forEach(el=>el.style.setProperty('--progress',pct+'%'));document.querySelectorAll('[data-progress-label]').forEach(el=>el.textContent=pct+'%');document.querySelectorAll('[data-complete-count]').forEach(el=>el.textContent=completed.length);document.querySelectorAll('[data-domain-card]').forEach(card=>{const d=card.dataset.domain,all=tiles.filter(t=>t.dataset.domain===d),count=all.filter(t=>done.includes(t.dataset.page)).length,p=all.length?Math.round(count/all.length*100):0;card.style.setProperty('--domain-progress',p+'%')})}
})();