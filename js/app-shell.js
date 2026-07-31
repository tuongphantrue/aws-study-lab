(function(){
  const rootPrefix=document.documentElement.dataset.rootPrefix||'';
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const inCourse=location.pathname.includes('/course/');
  const studyPages=new Set(['study.html','study-guide.html','iam.html','vpc.html','autoscaling.html','load-balancing.html','sqs.html','cloudwatch.html','disaster-recovery.html','lambda-concurrency.html','dynamodb.html','storage-selector.html','database-selector.html','route53-delivery.html','s3-lifecycle.html','cost-optimizer.html']);
  const examPages=new Set(['exam.html','exam-guide.html','exam-strategy.html','architecture-practice.html','mock-exams.html']);
  const area=(inCourse||studyPages.has(current))?'study':examPages.has(current)?'exam':'home';
  const currentSection=Number(document.body.dataset.section||0);
  const courseProgressKey='aws-beginner-section-progress-v2';

  const sectionTitles=[
    'Introduction','Study method','Getting started with AWS','IAM & CLI','EC2 fundamentals','EC2 architecture','EC2 storage','Load balancing & Auto Scaling','RDS, Aurora & ElastiCache','Route 53','Architecture patterns','Amazon S3','Advanced S3','S3 security','CloudFront & Global Accelerator','Storage extras','SQS, SNS, Kinesis & MQ','Containers','Serverless','Serverless architectures','Databases','Data & analytics','Machine learning','Monitoring & audit','Advanced IAM','Security & encryption','VPC networking','Disaster recovery & migrations','More architectures','Other AWS services','Well-Architected review','Exam preparation','Finish & next steps'
  ];
  const groups=[
    {name:'Start here',from:1,to:4},
    {name:'Compute & architecture',from:5,to:11},
    {name:'Storage & delivery',from:12,to:16},
    {name:'Apps, serverless & data',from:17,to:23},
    {name:'Operations & security',from:24,to:28},
    {name:'Architecture & exam',from:29,to:33}
  ];
  const readCourseDone=()=>{try{return JSON.parse(localStorage.getItem(courseProgressKey)||'[]').map(Number)}catch(e){return[]}};
  const sectionHref=n=>`${rootPrefix}course/section-${String(n).padStart(2,'0')}.html`;
  const firstIncomplete=()=>{const done=new Set(readCourseDone());for(let i=1;i<=33;i++)if(!done.has(i))return i;return 33};

  // Remove old navigation if present in static HTML or from an earlier build.
  document.querySelector('.global-rail')?.remove();
  document.querySelector('.rw-platform-rail')?.remove();
  document.querySelector('.rw-context-sidebar')?.remove();
  const oldSidebar=document.getElementById('appSidebar');
  if(oldSidebar){oldSidebar.setAttribute('aria-hidden','true');oldSidebar.style.display='none'}
  document.querySelector('.sidebar-scrim')?.setAttribute('aria-hidden','true');

  document.body.classList.add('rw-shell-on',`rw-${area}-shell`);

  const rail=document.createElement('nav');
  rail.className='rw-platform-rail';
  rail.setAttribute('aria-label','Workspace');
  rail.innerHTML=`
    <a class="rw-app-mark" href="${rootPrefix}index.html" aria-label="AWS Study Lab"><span>AWS</span></a>
    <div class="rw-rail-divider"></div>
    <a class="rw-rail-link ${area==='home'?'active':''}" href="${rootPrefix}index.html" aria-label="Home">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8Z"/></svg><span class="rw-tooltip">Home</span>
    </a>
    <a class="rw-rail-link ${area==='study'?'active':''}" href="${rootPrefix}study.html" aria-label="Study">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 8h7M8 12h7M8 16h4"/></svg><span class="rw-tooltip">Study</span>
    </a>
    <a class="rw-rail-link ${area==='exam'?'active':''}" href="${rootPrefix}exam.html" aria-label="Exam">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v4H7z"/><path d="M5 5h14v16H5zM8 11h8M8 15h5"/></svg><span class="rw-tooltip">Exam</span>
    </a>`;
  document.body.prepend(rail);

  function createStudySidebar(){
    const side=document.createElement('aside');
    side.className='rw-context-sidebar rw-study-sidebar';
    side.setAttribute('aria-label','Study navigation and progress');
    side.innerHTML=`
      <div class="rw-context-head">
        <div class="rw-context-kicker">AWS SAA</div>
        <div class="rw-context-title">Study</div>
      </div>
      <div class="rw-context-scroll">
        <a class="rw-context-link ${current==='study.html'?'active':''}" href="${rootPrefix}study.html"><span class="rw-context-icon">⌂</span><span>Course overview</span></a>
        <div class="rw-progress-card">
          <div class="rw-progress-top"><span>Course progress</span><strong id="rwProgressCount">0 / 33</strong></div>
          <div class="rw-progress-track"><i id="rwProgressBar"></i></div>
          <a id="rwContinueLink" href="${sectionHref(firstIncomplete())}"><small>CONTINUE</small><b id="rwContinueTitle"></b><span>→</span></a>
        </div>
        <div class="rw-context-label">SECTIONS</div>
        <div class="rw-course-groups" id="rwCourseGroups"></div>
      </div>`;
    document.body.appendChild(side);
    return side;
  }

  function createExamSidebar(){
    const side=document.createElement('aside');
    side.className='rw-context-sidebar rw-exam-sidebar';
    side.setAttribute('aria-label','Exam navigation');
    const links=[
      ['exam.html','Exam dashboard'],['exam-guide.html','Exam guide'],['exam-strategy.html','Question strategy'],['architecture-practice.html','Scenario practice'],['mock-exams.html','Mock exams']
    ];
    side.innerHTML=`
      <div class="rw-context-head"><div class="rw-context-kicker">AWS SAA</div><div class="rw-context-title">Exam</div></div>
      <div class="rw-context-scroll">
        <div class="rw-context-label">EXAM WORKSPACE</div>
        ${links.map(([href,label])=>`<a class="rw-context-link ${current===href?'active':''}" href="${rootPrefix}${href}"><span class="rw-context-dot"></span><span>${label}</span></a>`).join('')}
        <div class="rw-context-note"><small>STUDY FIRST</small><p>Learn the service before practicing exam wording.</p><a href="${rootPrefix}study.html">Go to Study →</a></div>
      </div>`;
    document.body.appendChild(side);
    return side;
  }

  let contextSidebar=null;
  if(area==='study') contextSidebar=createStudySidebar();
  if(area==='exam') contextSidebar=createExamSidebar();

  function renderStudyProgress(){
    if(area!=='study')return;
    const done=new Set(readCourseDone());
    const count=done.size;
    const pct=Math.round(count/33*100);
    const countEl=document.getElementById('rwProgressCount');
    const barEl=document.getElementById('rwProgressBar');
    if(countEl)countEl.textContent=`${count} / 33`;
    if(barEl)barEl.style.width=`${pct}%`;
    const next=firstIncomplete();
    const continueLink=document.getElementById('rwContinueLink');
    const continueTitle=document.getElementById('rwContinueTitle');
    if(continueLink)continueLink.href=sectionHref(next);
    if(continueTitle)continueTitle.textContent=count===33?'Review the course':`Section ${next} · ${sectionTitles[next-1]}`;

    const host=document.getElementById('rwCourseGroups');
    if(!host)return;
    const activeGroupIndex=groups.findIndex(g=>currentSection>=g.from&&currentSection<=g.to);
    const nextGroupIndex=groups.findIndex(g=>{for(let n=g.from;n<=g.to;n++)if(!done.has(n))return true;return false});
    const defaultOpen=activeGroupIndex>=0?activeGroupIndex:(nextGroupIndex>=0?nextGroupIndex:groups.length-1);
    host.innerHTML=groups.map((g,gi)=>{
      let groupDone=0;for(let n=g.from;n<=g.to;n++)if(done.has(n))groupDone++;
      const open=gi===defaultOpen;
      const lessons=[];
      for(let n=g.from;n<=g.to;n++){
        const isDone=done.has(n),isCurrent=n===currentSection;
        lessons.push(`<a class="rw-section-link ${isCurrent?'active':''} ${isDone?'done':''}" href="${sectionHref(n)}"><span class="rw-section-state">${isDone?'✓':String(n).padStart(2,'0')}</span><span>${sectionTitles[n-1]}</span></a>`);
      }
      return `<section class="rw-course-group ${open?'open':''}" data-group="${gi}">
        <button class="rw-group-toggle" type="button" aria-expanded="${open}"><span class="rw-group-chevron">›</span><span>${g.name}</span><small>${groupDone}/${g.to-g.from+1}</small></button>
        <div class="rw-group-lessons">${lessons.join('')}</div>
      </section>`;
    }).join('');
    host.querySelectorAll('.rw-group-toggle').forEach(btn=>btn.addEventListener('click',()=>{
      const group=btn.closest('.rw-course-group');
      const willOpen=!group.classList.contains('open');
      group.classList.toggle('open',willOpen);
      btn.setAttribute('aria-expanded',String(willOpen));
    }));
  }
  renderStudyProgress();
  window.addEventListener('aws-study-progress-changed',renderStudyProgress);
  window.addEventListener('storage',e=>{if(e.key===courseProgressKey)renderStudyProgress()});

  // Preserve local completion and search behavior used by the optional lab pages.
  const labKey='aws-saa-study-lab-completed';
  const getDone=()=>{try{return JSON.parse(localStorage.getItem(labKey)||'[]')}catch(e){return[]}};
  const saveDone=v=>localStorage.setItem(labKey,JSON.stringify(v));
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
