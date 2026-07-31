(function(){
  const rootPrefix=document.documentElement.dataset.rootPrefix||'';
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const inCourse=location.pathname.includes('/course/');
  const studyPages=new Set(['study.html','study-guide.html','iam.html','vpc.html','autoscaling.html','load-balancing.html','sqs.html','cloudwatch.html','disaster-recovery.html','lambda-concurrency.html','dynamodb.html','storage-selector.html','database-selector.html','route53-delivery.html','s3-lifecycle.html','cost-optimizer.html']);
  const examPages=new Set(['exam.html','exam-guide.html','exam-strategy.html','architecture-practice.html','mock-exams.html']);
  const section=(inCourse||studyPages.has(current))?'study':examPages.has(current)?'exam':'home';

  document.querySelector('.global-rail')?.remove();
  const nav=document.createElement('nav');
  nav.className='global-rail simple-global-nav';
  nav.setAttribute('aria-label','Main navigation');
  nav.innerHTML=`
    <a class="simple-brand" href="${rootPrefix}index.html"><span class="simple-brand-mark">AWS</span><span>AWS Study Lab</span></a>
    <div class="rail-main">
      <a class="rail-item" data-rail-section="home" href="${rootPrefix}index.html"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8Z"/></svg><span class="rail-label">Home</span></a>
      <a class="rail-item" data-rail-section="study" href="${rootPrefix}study.html"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 8h7M8 12h7M8 16h4"/></svg><span class="rail-label">Study</span></a>
      <a class="rail-item" data-rail-section="exam" href="${rootPrefix}exam.html"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v4H7z"/><path d="M5 5h14v16H5zM8 11h8M8 15h5"/></svg><span class="rail-label">Exam</span></a>
    </div>`;
  document.body.prepend(nav);
  nav.querySelectorAll('[data-rail-section]').forEach(a=>a.classList.toggle('active',a.dataset.railSection===section));

  // The old contextual sidebar is intentionally hidden; navigation lives in Home / Study / Exam only.
  const oldSidebar=document.getElementById('appSidebar');
  if(oldSidebar) oldSidebar.setAttribute('aria-hidden','true');

  const key='aws-saa-study-lab-completed';
  const getDone=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]}};
  const saveDone=v=>localStorage.setItem(key,JSON.stringify(v));
  const page=current,complete=document.getElementById('completeLab');
  function paintComplete(){if(!complete)return;const done=getDone().includes(page);complete.classList.toggle('done',done);const label=complete.querySelector('span:last-child');if(label)label.textContent=done?'Completed':'Mark complete'}
  if(complete){complete.addEventListener('click',()=>{let done=getDone();done=done.includes(page)?done.filter(x=>x!==page):[...done,page];saveDone(done);paintComplete()});paintComplete()}

  const tiles=[...document.querySelectorAll('.app-tile')],search=document.getElementById('labSearch')||document.getElementById('globalSearch'),global=document.getElementById('globalSearch');let domain='all';
  function filter(value=''){if(!tiles.length)return;const q=value.trim().toLowerCase();let visible=0;tiles.forEach(tile=>{const showText=!q||tile.textContent.toLowerCase().includes(q),showDomain=domain==='all'||tile.dataset.domain===domain,show=showText&&showDomain;tile.classList.toggle('is-hidden',!show);if(show)visible++});document.getElementById('emptySearch')?.classList.toggle('show',visible===0)}
  if(search)search.addEventListener('input',e=>filter(e.target.value));if(global&&global!==search)global.addEventListener('input',e=>filter(e.target.value));
  document.querySelectorAll('.domain-filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.domain-filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');domain=btn.dataset.filter;filter((document.getElementById('labSearch')||global)?.value||'')}));
  const initialQuery=new URLSearchParams(location.search).get('q');if(initialQuery&&tiles.length){const target=document.getElementById('labSearch')||global;if(target)target.value=initialQuery;filter(initialQuery)}
  if(tiles.length){const done=getDone(),completed=done.filter(x=>tiles.some(t=>t.dataset.page===x));tiles.forEach(t=>t.classList.toggle('completed',done.includes(t.dataset.page)));const pct=Math.round(completed.length/tiles.length*100);document.querySelectorAll('[data-progress]').forEach(el=>el.style.setProperty('--progress',pct+'%'));document.querySelectorAll('[data-progress-label]').forEach(el=>el.textContent=pct+'%');document.querySelectorAll('[data-complete-count]').forEach(el=>el.textContent=completed.length)}
})();
