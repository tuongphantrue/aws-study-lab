(function(){
  const KEY='aws-beginner-section-progress-v2';
  const TOTAL_LECTURES=396;
  const sectionMeta=[
    [6,'15 min'],[1,'1 min'],[3,'13 min'],[20,'57 min'],[16,'1 hr 38 min'],[9,'34 min'],
    [14,'59 min'],[17,'1 hr 34 min'],[14,'1 hr 10 min'],[20,'1 hr 25 min'],[7,'43 min'],
    [14,'50 min'],[8,'30 min'],[15,'53 min'],[7,'33 min'],[10,'37 min'],[16,'1 hr 21 min'],
    [10,'49 min'],[18,'1 hr 23 min'],[4,'16 min'],[10,'25 min'],[12,'48 min'],[12,'26 min'],
    [18,'1 hr 19 min'],[10,'49 min'],[21,'1 hr 26 min'],[38,'2 hr 40 min'],[11,'44 min'],
    [5,'27 min'],[15,'48 min'],[4,'15 min'],[8,'17 min'],[3,'9 min']
  ];
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]').map(Number)}catch(e){return[]}};
  const done=new Set(read());

  // Turn the original section links into compact, accessible disclosure rows.
  // The original href, search copy, and description remain the source of truth.
  document.querySelectorAll('a.course-section-row').forEach(link=>{
    const section=Number(link.dataset.section);
    const title=link.querySelector('.section-row-copy b')?.textContent.trim()||`Section ${section}`;
    const description=link.querySelector('.section-row-copy small')?.textContent.trim()||'';
    const [lectureCount,duration]=sectionMeta[section-1];
    const sectionComplete=done.has(section);
    const article=document.createElement('article');
    const panelId=`course-section-${section}-details`;
    const lectureRows=Array.from({length:lectureCount},(_,index)=>`
      <div class="course-lecture-row" data-lecture="${index+1}">
        <span class="lecture-status ${sectionComplete?'complete':''}" aria-hidden="true">${sectionComplete?'\u2713':''}</span>
        <svg class="lecture-icon" viewBox="0 0 20 20" aria-hidden="true"><rect x="4" y="3" width="12" height="14" rx="1.5"/><path d="M7 7h6M7 10h6M7 13h4"/></svg>
        <span class="lecture-copy"><b>Lecture ${index+1}</b><small>Lesson details coming next</small></span>
      </div>`).join('');
    article.className='course-section-row';
    article.dataset.section=String(section);
    article.dataset.search=link.dataset.search||`${title} ${description}`.toLowerCase();
    article.innerHTML=`
      <button class="course-section-toggle" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="section-row-copy">
          <b>Section ${section}: ${title}</b>
          <small><span class="section-completion">${sectionComplete?lectureCount:0} / ${lectureCount}</span><span aria-hidden="true">|</span><span>${duration}</span></small>
        </span>
        <svg class="section-chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m6.5 8 3.5 3.5L13.5 8"/></svg>
      </button>
      <div class="course-section-detail" id="${panelId}" hidden>
        <div class="course-section-intro"><p>${description}</p><a href="${link.getAttribute('href')}">${sectionComplete?'Review section':'Open section'} <span aria-hidden="true">\u2192</span></a></div>
        <div class="course-lecture-list" aria-label="${lectureCount} lectures in Section ${section}">${lectureRows}</div>
      </div>`;
    link.replaceWith(article);
  });

  const rows=[...document.querySelectorAll('.course-section-row')];
  rows.forEach(row=>{
    const section=Number(row.dataset.section);
    row.classList.toggle('complete',done.has(section));
    const toggle=row.querySelector('.course-section-toggle');
    const panel=row.querySelector('.course-section-detail');
    toggle?.addEventListener('click',()=>{
      const open=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!open));
      panel.hidden=open;
      row.classList.toggle('open',!open);
    });
  });

  const completedLectures=sectionMeta.reduce((total,[count],index)=>total+(done.has(index+1)?count:0),0);
  const pct=Math.round(completedLectures/TOTAL_LECTURES*100);
  const progressText=document.getElementById('courseProgressText');
  const progressBar=document.getElementById('courseProgressBar');
  if(progressText)progressText.textContent=`${completedLectures} of ${TOTAL_LECTURES}`;
  if(progressBar)progressBar.style.width=pct+'%';
  const next=Math.min(33,Math.max(1,[...Array(33)].map((_,i)=>i+1).find(i=>!done.has(i))||33));
  const resume=document.getElementById('resumeSection');
  if(resume){
    resume.href=`course/section-${String(next).padStart(2,'0')}.html`;
    resume.textContent=done.size?'Continue course \u2192':'Start Section 1 \u2192';
  }

  const search=document.getElementById('courseSectionSearch');
  const empty=document.getElementById('courseEmpty');
  function filter(){
    const q=(search?.value||'').trim().toLowerCase();
    let visible=0;
    rows.forEach(row=>{
      const show=!q||row.dataset.search.includes(q)||row.textContent.toLowerCase().includes(q);
      row.hidden=!show;
      if(show)visible++;
    });
    document.querySelectorAll('.course-group').forEach(group=>{
      group.hidden=![...group.querySelectorAll('.course-section-row')].some(row=>!row.hidden);
    });
    if(empty)empty.hidden=visible!==0;
  }
  search?.addEventListener('input',filter);
})();
