(function(){
  const rootPrefix=document.documentElement.dataset.rootPrefix||'';
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const inCourse=location.pathname.includes('/course/');
  const studyPages=new Set(['study.html','study-guide.html','iam.html','vpc.html','autoscaling.html','load-balancing.html','sqs.html','cloudwatch.html','disaster-recovery.html','lambda-concurrency.html','dynamodb.html','storage-selector.html','database-selector.html','route53-delivery.html','s3-lifecycle.html','cost-optimizer.html']);
  const examPages=new Set(['exam.html','exam-guide.html','exam-strategy.html','architecture-practice.html','mock-exams.html']);
  const area=(inCourse||studyPages.has(current))?'study':examPages.has(current)?'exam':'home';
  const currentSection=Number(document.body.dataset.section||0);
  const courseProgressKey='aws-beginner-section-progress-v2';
  const sectionTitles=['Introduction','Study method','Getting started with AWS','IAM & CLI','EC2 fundamentals','EC2 architecture','EC2 storage','Load balancing & Auto Scaling','RDS, Aurora & ElastiCache','Route 53','Architecture patterns','Amazon S3','Advanced S3','S3 security','CloudFront & Global Accelerator','Storage extras','SQS, SNS, Kinesis & MQ','Containers','Serverless','Serverless architectures','Databases','Data & analytics','Machine learning','Monitoring & audit','Advanced IAM','Security & encryption','VPC networking','Disaster recovery & migrations','More architectures','Other AWS services','Well-Architected review','Exam preparation','Finish & next steps'];
  const groups=[{name:'Start here',from:1,to:4},{name:'Compute & architecture',from:5,to:11},{name:'Storage & delivery',from:12,to:16},{name:'Apps, serverless & data',from:17,to:23},{name:'Operations & security',from:24,to:28},{name:'Architecture & exam',from:29,to:33}];
  const readCourseDone=()=>{try{return JSON.parse(localStorage.getItem(courseProgressKey)||'[]').map(Number)}catch(e){return[]}};
  const sectionHref=n=>`${rootPrefix}course/section-${String(n).padStart(2,'0')}.html`;
  const firstIncomplete=()=>{const done=new Set(readCourseDone());for(let i=1;i<=33;i++)if(!done.has(i))return i;return 33};

  // Remove any previously injected shells before drawing the current one.
  document.querySelectorAll('.rw-global-topbar,.rw-primary-sidebar,.rw-context-sidebar,.rw-mobile-nav,.rw-workspace-crumb').forEach(el=>el.remove());
  const oldSidebar=document.getElementById('appSidebar');
  if(oldSidebar){oldSidebar.setAttribute('aria-hidden','true');oldSidebar.style.display='none'}
  document.querySelector('.sidebar-scrim')?.setAttribute('aria-hidden','true');
  document.body.classList.add('rw-shell-on',`rw-${area}-shell`);

  const icon={
    home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8Z"/></svg>',
    study:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 8h7M8 12h7M8 16h4"/></svg>',
    exam:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v4H7z"/><path d="M5 5h14v16H5zM8 11h8M8 15h5"/></svg>',
    grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
    settings:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.6h-4L10.5 6A8 8 0 0 0 9 7.1l-2.4-1-2 3.4L6.7 11a7 7 0 0 0 0 2l-2.1 1.5 2 3.4 2.4-1a8 8 0 0 0 1.5.9l.3 2.7h4l.2-2.7a8 8 0 0 0 1.5-.9l2.4 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg>',
    search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>'
  };

  const top=document.createElement('header');
  top.className='rw-global-topbar';
  top.innerHTML=`
    <a class="rw-global-brand" href="${rootPrefix}index.html"><span class="rw-brand-mark">AWS</span><span>AWS Study Lab</span></a>
    <div class="rw-global-search-wrap"><label class="rw-global-search">${icon.search}<input id="rwGlobalSearch" type="search" autocomplete="off" placeholder="Search study content..."><span class="rw-search-shortcut">Ctrl+K</span></label></div>
    <div class="rw-global-actions">
      <button class="rw-icon-btn" type="button" aria-label="Help"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.5 2.5 0 1 1 3.8 2.1c-1 .6-1.6 1.1-1.6 2.4M12 17h.01"/></svg></button>
      <button class="rw-icon-btn" type="button" aria-label="Notifications"><svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg></button>
      <button class="rw-icon-btn" type="button" aria-label="Theme"><svg viewBox="0 0 24 24"><path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg></button>
      <span class="rw-avatar">S</span><span class="rw-avatar-chevron">⌄</span>
    </div>`;
  document.body.prepend(top);

  const primary=document.createElement('aside');
  primary.className='rw-primary-sidebar';
  primary.setAttribute('aria-label','AWS Study Lab navigation');
  primary.innerHTML=`
    <div class="rw-primary-head">${icon.grid}<span>AWS SAA</span></div>
    <div class="rw-primary-scroll">
      <a class="rw-primary-link ${area==='home'?'active':''}" href="${rootPrefix}index.html">${icon.home}<span>Home</span></a>
      <a class="rw-primary-link ${area==='study'?'active':''}" href="${rootPrefix}study.html">${icon.study}<span>Study</span></a>
      <a class="rw-primary-link ${area==='exam'?'active':''}" href="${rootPrefix}exam.html">${icon.exam}<span>Exam</span></a>
      <div class="rw-primary-label">Workspace</div>
      <a class="rw-primary-link" href="${rootPrefix}study-guide.html">${icon.study}<span>Course</span></a>
      <a class="rw-primary-link" href="${rootPrefix}architecture-practice.html">${icon.grid}<span>Practice</span></a>
    </div>
    <div class="rw-primary-bottom">
      <a class="rw-primary-link" href="${rootPrefix}index.html#settings">${icon.settings}<span>Settings</span></a>
      <div class="rw-primary-account"><span>A</span><div><b>AWS learner</b><small>Study workspace</small></div><span>⌃</span></div>
    </div>`;
  document.body.appendChild(primary);

  function createStudySidebar(){
    const side=document.createElement('aside');
    side.className='rw-context-sidebar rw-study-sidebar';
    side.setAttribute('aria-label','Study navigation and progress');
    side.innerHTML=`<div class="rw-context-head">Study</div><div class="rw-context-scroll">
      <a class="rw-context-link ${current==='study.html'?'active':''}" href="${rootPrefix}study.html">${icon.home}<span>Course overview</span></a>
      <div class="rw-progress-card"><div class="rw-progress-top"><span>Course progress</span><strong id="rwProgressCount">0 / 33</strong></div><div class="rw-progress-track"><i id="rwProgressBar"></i></div><a id="rwContinueLink" href="${sectionHref(firstIncomplete())}"><div><small>CONTINUE</small><b id="rwContinueTitle"></b></div><span>→</span></a></div>
      <div class="rw-context-label">Sections</div><div class="rw-course-groups" id="rwCourseGroups"></div>
    </div>`;
    document.body.appendChild(side);return side;
  }
  function createExamSidebar(){
    const side=document.createElement('aside');
    side.className='rw-context-sidebar rw-exam-sidebar';side.setAttribute('aria-label','Exam navigation');
    const links=[['exam.html','Exam dashboard'],['exam-guide.html','Exam guide'],['exam-strategy.html','Question strategy'],['architecture-practice.html','Scenario practice'],['mock-exams.html','Mock exams']];
    side.innerHTML=`<div class="rw-context-head">Exam</div><div class="rw-context-scroll"><div class="rw-context-label">Exam workspace</div>${links.map(([href,label])=>`<a class="rw-context-link ${current===href?'active':''}" href="${rootPrefix}${href}"><span class="rw-context-dot"></span><span>${label}</span></a>`).join('')}<div class="rw-context-note"><small>STUDY FIRST</small><p>Learn the service before practicing exam wording.</p><a href="${rootPrefix}study.html">Go to Study →</a></div></div>`;
    document.body.appendChild(side);return side;
  }
  if(area==='study')createStudySidebar();
  if(area==='exam')createExamSidebar();

  // Rework pages consistently show a thin breadcrumb toolbar above the workspace.
  const existingMain=document.querySelector('body > main, body > .landing-shell, body > .hero');
  if(existingMain){
    const crumb=document.createElement('div');crumb.className='rw-workspace-crumb';
    const areaLabel=area==='study'?'Study':area==='exam'?'Exam':'Home';
    let detail='Workspace';
    if(inCourse&&currentSection) detail=`Section ${currentSection} · ${sectionTitles[currentSection-1]}`;
    else if(current!=='index.html') detail=(document.title||areaLabel).replace(/\s*[|–-]\s*AWS.*$/i,'');
    crumb.innerHTML=`<a href="${rootPrefix}${area==='study'?'study.html':area==='exam'?'exam.html':'index.html'}">${areaLabel}</a><span>›</span><b>${detail}</b>`;
    const pageHeader=document.querySelector('body > header:not(.app-topbar):not(.topbar):not(.rw-global-topbar)');
    const target=pageHeader||existingMain;
    target.parentNode.insertBefore(crumb,target);
  }

  const mobile=document.createElement('nav');mobile.className='rw-mobile-nav';mobile.setAttribute('aria-label','Mobile navigation');mobile.innerHTML=`<a class="${area==='home'?'active':''}" href="${rootPrefix}index.html">Home</a><a class="${area==='study'?'active':''}" href="${rootPrefix}study.html">Study</a><a class="${area==='exam'?'active':''}" href="${rootPrefix}exam.html">Exam</a>`;document.body.appendChild(mobile);

  function renderStudyProgress(){
    if(area!=='study')return;
    const done=new Set(readCourseDone()),count=done.size,pct=Math.round(count/33*100);
    const countEl=document.getElementById('rwProgressCount'),barEl=document.getElementById('rwProgressBar');if(countEl)countEl.textContent=`${count} / 33`;if(barEl)barEl.style.width=`${pct}%`;
    const next=firstIncomplete(),continueLink=document.getElementById('rwContinueLink'),continueTitle=document.getElementById('rwContinueTitle');if(continueLink)continueLink.href=sectionHref(next);if(continueTitle)continueTitle.textContent=count===33?'Review the course':`Section ${next} · ${sectionTitles[next-1]}`;
    const host=document.getElementById('rwCourseGroups');if(!host)return;
    const activeGroupIndex=groups.findIndex(g=>currentSection>=g.from&&currentSection<=g.to);const nextGroupIndex=groups.findIndex(g=>{for(let n=g.from;n<=g.to;n++)if(!done.has(n))return true;return false});const defaultOpen=activeGroupIndex>=0?activeGroupIndex:(nextGroupIndex>=0?nextGroupIndex:0);
    host.innerHTML=groups.map((g,gi)=>{let groupDone=0;for(let n=g.from;n<=g.to;n++)if(done.has(n))groupDone++;const open=gi===defaultOpen;const lessons=[];for(let n=g.from;n<=g.to;n++){const isDone=done.has(n),isCurrent=n===currentSection;lessons.push(`<a class="rw-section-link ${isCurrent?'active':''} ${isDone?'done':''}" href="${sectionHref(n)}"><span class="rw-section-state">${isDone?'✓':String(n).padStart(2,'0')}</span><span>${sectionTitles[n-1]}</span></a>`)}return `<section class="rw-course-group ${open?'open':''}"><button class="rw-group-toggle" type="button" aria-expanded="${open}"><span class="rw-group-chevron">›</span><span>${g.name}</span><small>${groupDone}/${g.to-g.from+1}</small></button><div class="rw-group-lessons">${lessons.join('')}</div></section>`}).join('');
    host.querySelectorAll('.rw-group-toggle').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.closest('.rw-course-group'),willOpen=!group.classList.contains('open');group.classList.toggle('open',willOpen);btn.setAttribute('aria-expanded',String(willOpen))}));
  }
  renderStudyProgress();window.addEventListener('aws-study-progress-changed',renderStudyProgress);window.addEventListener('storage',e=>{if(e.key===courseProgressKey)renderStudyProgress()});

  // Ctrl+K focuses the global search. Enter takes the learner to the Study overview with the query.
  const shellSearch=document.getElementById('rwGlobalSearch');
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();shellSearch?.focus()}});
  shellSearch?.addEventListener('keydown',e=>{if(e.key==='Enter'&&shellSearch.value.trim()){location.href=`${rootPrefix}study.html?q=${encodeURIComponent(shellSearch.value.trim())}`}});

  // Preserve local completion and filtering behavior used by the optional lab pages.
  const labKey='aws-saa-study-lab-completed';const getDone=()=>{try{return JSON.parse(localStorage.getItem(labKey)||'[]')}catch(e){return[]}};const saveDone=v=>localStorage.setItem(labKey,JSON.stringify(v));const page=current,complete=document.getElementById('completeLab');
  function paintComplete(){if(!complete)return;const done=getDone().includes(page);complete.classList.toggle('done',done);const label=complete.querySelector('span:last-child');if(label)label.textContent=done?'Completed':'Mark complete'}
  if(complete){complete.addEventListener('click',()=>{let done=getDone();done=done.includes(page)?done.filter(x=>x!==page):[...done,page];saveDone(done);paintComplete()});paintComplete()}
  const tiles=[...document.querySelectorAll('.app-tile')],legacySearch=document.getElementById('labSearch')||document.getElementById('globalSearch');let domain='all';
  function filter(value=''){if(!tiles.length)return;const q=value.trim().toLowerCase();let visible=0;tiles.forEach(tile=>{const showText=!q||tile.textContent.toLowerCase().includes(q),showDomain=domain==='all'||tile.dataset.domain===domain,show=showText&&showDomain;tile.classList.toggle('is-hidden',!show);if(show)visible++});document.getElementById('emptySearch')?.classList.toggle('show',visible===0)}
  if(legacySearch)legacySearch.addEventListener('input',e=>filter(e.target.value));document.querySelectorAll('.domain-filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.domain-filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');domain=btn.dataset.filter;filter(legacySearch?.value||'')}));
  const initialQuery=new URLSearchParams(location.search).get('q');if(initialQuery&&tiles.length){if(legacySearch)legacySearch.value=initialQuery;filter(initialQuery)}
  if(tiles.length){const done=getDone(),completed=done.filter(x=>tiles.some(t=>t.dataset.page===x));tiles.forEach(t=>t.classList.toggle('completed',done.includes(t.dataset.page)));const pct=Math.round(completed.length/tiles.length*100);document.querySelectorAll('[data-progress]').forEach(el=>el.style.setProperty('--progress',pct+'%'));document.querySelectorAll('[data-progress-label]').forEach(el=>el.textContent=pct+'%');document.querySelectorAll('[data-complete-count]').forEach(el=>el.textContent=completed.length)}
})();
