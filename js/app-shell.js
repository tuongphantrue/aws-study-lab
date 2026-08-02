(function(){
  const rootPrefix=document.documentElement.dataset.rootPrefix||'';
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const inCourse=location.pathname.includes('/course/');
  const studyPages=new Set(['study.html','study-guide.html','iam.html','vpc.html','autoscaling.html','load-balancing.html','sqs.html','cloudwatch.html','disaster-recovery.html','lambda-concurrency.html','dynamodb.html','storage-selector.html','database-selector.html','route53-delivery.html','s3-lifecycle.html','cost-optimizer.html']);
  const examPages=new Set(['exam.html','exam-guide.html','exam-strategy.html','architecture-practice.html','mock-exams.html']);
  const area=(inCourse||studyPages.has(current))?'study':examPages.has(current)?'exam':'home';
  const currentSection=Number(document.body.dataset.section||0);
  const currentLecture=Number(new URLSearchParams(location.search).get('lecture')||(current==='lecture.html'?1:0));
  const courseProgressKey='aws-beginner-section-progress-v2';
  const lectureProgressKey='aws-course-lecture-progress-v1';
  const sectionTitles=['Introduction - AWS Certified Solutions Architect Associate','Code & Slides Download','Getting started with AWS','IAM & AWS CLI','EC2 Fundamentals','EC2 - Solutions Architect Associate Level','EC2 Instance Storage','High Availability and Scalability: ELB & ASG','AWS Fundamentals: RDS + Aurora + ElastiCache','Route 53','Classic Solutions Architecture Discussions','Amazon S3 Introduction','Advanced Amazon S3','Amazon S3 Security','CloudFront & AWS Global Accelerator','AWS Storage Extras','Decoupling applications: SQS, SNS, Kinesis, Active MQ','Containers on AWS: ECS, Fargate, ECR & EKS','Serverless Overviews from a Solution Architect Perspective','Serverless Solution Architecture Discussions','Databases in AWS','Data & Analytics','Machine Learning','AWS Monitoring & Audit: CloudWatch, CloudTrail & Config','Identity and Access Management (IAM) - Advanced','AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF','Networking - VPC','Disaster Recovery & Migrations','More Solution Architectures','Other Services','WhitePapers and Architectures - AWS Certified Solutions Architect Associate','Preparing for the Exam + Practice Exam - AWS Certified Solutions Architect Associate','Congratulations - AWS Certified Solutions Architect Associate'];
  const fallbackMeta=[[6,'15 min'],[1,'1 min'],[3,'13 min'],[20,'57 min'],[16,'1 hr 38 min'],[9,'34 min'],[14,'59 min'],[17,'1 hr 34 min'],[14,'1 hr 10 min'],[20,'1 hr 25 min'],[7,'43 min'],[14,'50 min'],[8,'30 min'],[15,'53 min'],[7,'33 min'],[10,'37 min'],[16,'1 hr 21 min'],[10,'49 min'],[18,'1 hr 23 min'],[4,'16 min'],[10,'25 min'],[12,'48 min'],[12,'26 min'],[18,'1 hr 19 min'],[10,'49 min'],[21,'1 hr 26 min'],[38,'2 hr 40 min'],[11,'44 min'],[5,'27 min'],[15,'48 min'],[4,'15 min'],[8,'17 min'],[3,'9 min']];
  const readCourseDone=()=>{try{return JSON.parse(localStorage.getItem(courseProgressKey)||'[]').map(Number)}catch(e){return[]}};
  const readLectureDone=()=>{try{const value=JSON.parse(localStorage.getItem(lectureProgressKey)||'[]');return Array.isArray(value)?value.map(String):[]}catch(e){return[]}};
  const sectionHref=n=>{const readyIndex=window.AWS_COURSE_CURRICULUM?.[n-1]?.lectures.findIndex(lecture=>lecture.ready)??-1;return readyIndex>=0?`${rootPrefix}course/lecture.html?section=${n}&lecture=${readyIndex+1}`:`${rootPrefix}course/section-${String(n).padStart(2,'0')}.html`};
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
    side.innerHTML=`<div class="rw-context-head">Course content</div><div class="rw-context-scroll">
      <a class="rw-context-link ${current==='study-guide.html'?'active':''}" href="${rootPrefix}study-guide.html">${icon.home}<span>Course overview</span></a>
      <div class="rw-progress-card"><div class="rw-progress-top"><span>Course progress</span><strong id="rwProgressCount">0 / 396</strong></div><div class="rw-progress-track"><i id="rwProgressBar"></i></div><a id="rwContinueLink" href="${sectionHref(firstIncomplete())}"><div><small>CONTINUE</small><b id="rwContinueTitle"></b></div><span>→</span></a></div>
      <div class="rw-context-label">33 sections &middot; 396 lectures</div><div class="rw-course-outline" id="rwCourseGroups"></div>
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
    const curriculum=window.AWS_COURSE_CURRICULUM||[];
    const done=new Set(readCourseDone()),lectureDone=new Set(readLectureDone());
    const totalLectures=curriculum.length?curriculum.reduce((sum,section)=>sum+section.count,0):396;
    const completedLectures=fallbackMeta.reduce((total,[fallbackCount],index)=>{
      const count=curriculum[index]?.count||fallbackCount;
      if(done.has(index+1))return total+count;
      return total+[...lectureDone].filter(id=>id.startsWith(`${index+1}-`)).length;
    },0);
    const pct=Math.round(completedLectures/totalLectures*100);
    const countEl=document.getElementById('rwProgressCount'),barEl=document.getElementById('rwProgressBar');if(countEl)countEl.textContent=`${completedLectures} / ${totalLectures}`;if(barEl)barEl.style.width=`${pct}%`;
    let nextSection=firstIncomplete(),nextLecture=0;
    for(let sectionIndex=0;sectionIndex<curriculum.length;sectionIndex++){
      if(done.has(sectionIndex+1))continue;
      const lectureIndex=curriculum[sectionIndex].lectures.findIndex((lecture,index)=>lecture.ready&&!lectureDone.has(`${sectionIndex+1}-${index+1}`));
      if(lectureIndex>=0){nextSection=sectionIndex+1;nextLecture=lectureIndex+1;break}
    }
    const continueLink=document.getElementById('rwContinueLink'),continueTitle=document.getElementById('rwContinueTitle');
    if(continueLink)continueLink.href=nextLecture?`${rootPrefix}course/lecture.html?section=${nextSection}&lecture=${nextLecture}`:sectionHref(nextSection);
    if(continueTitle)continueTitle.textContent=completedLectures===totalLectures?'Review the course':`Section ${nextSection} · ${sectionTitles[nextSection-1]}`;
    const host=document.getElementById('rwCourseGroups');if(!host)return;
    const defaultOpen=currentSection||nextSection||1;
    host.innerHTML=sectionTitles.map((title,index)=>{
      const sectionNumber=index+1,data=curriculum[index],count=data?.count||fallbackMeta[index][0],duration=data?.duration||fallbackMeta[index][1];
      const sectionComplete=done.has(sectionNumber),completed=sectionComplete?count:[...lectureDone].filter(id=>id.startsWith(`${sectionNumber}-`)).length,open=sectionNumber===defaultOpen;
      const lectureRows=data?data.lectures.map((lecture,lectureIndex)=>{
        const number=lectureIndex+1,id=`${sectionNumber}-${number}`,isDone=sectionComplete||lectureDone.has(id),isCurrent=sectionNumber===currentSection&&number===currentLecture;
        const copy=`<span class="rw-lecture-state">${isDone?'✓':number}</span><span><b>${lecture.title}</b><small>Lecture ${number}</small></span>`;
        return lecture.ready?`<a class="rw-outline-lecture ${isCurrent?'active':''} ${isDone?'done':''}" href="${rootPrefix}course/lecture.html?section=${sectionNumber}&lecture=${number}">${copy}</a>`:`<div class="rw-outline-lecture ${isDone?'done':''}">${copy}</div>`;
      }).join(''):'';
      return `<section class="rw-outline-section ${open?'open':''}"><button class="rw-outline-toggle" type="button" aria-expanded="${open}"><span class="rw-group-chevron">›</span><span class="rw-outline-title">Section ${sectionNumber}: ${title}<small>${completed} / ${count} | ${duration}</small></span></button><div class="rw-outline-lectures">${lectureRows}</div></section>`;
    }).join('');
    host.querySelectorAll('.rw-outline-toggle').forEach(btn=>btn.addEventListener('click',()=>{const section=btn.closest('.rw-outline-section'),willOpen=!section.classList.contains('open');section.classList.toggle('open',willOpen);btn.setAttribute('aria-expanded',String(willOpen))}));
  }
  renderStudyProgress();window.addEventListener('aws-study-progress-changed',renderStudyProgress);window.addEventListener('storage',e=>{if(e.key===courseProgressKey||e.key===lectureProgressKey)renderStudyProgress()});

  if(area==='study'&&!window.AWS_COURSE_CURRICULUM){
    const curriculumScript=document.createElement('script');curriculumScript.src=`${rootPrefix}js/course-lecture-data.js`;curriculumScript.addEventListener('load',renderStudyProgress);document.head.appendChild(curriculumScript);
  }

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
