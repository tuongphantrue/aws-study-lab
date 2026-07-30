
(function(){
  const sections=window.AWS_STUDY_COURSE||[];
  const progressKey='aws-saa-course-progress-v1',currentKey='aws-saa-course-current-v1',quizKey='aws-saa-course-quiz-v1';
  const read=(k,fallback)=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(fallback))}catch(e){return fallback}};
  let completed=new Set(read(progressKey,[])),quizState=read(quizKey,{}),flat=[];
  sections.forEach((section,si)=>section.lessons.forEach((lesson,li)=>flat.push({si,li,id:`s${si}-l${li}`,section,lesson})));
  let current=Math.max(0,Math.min(flat.length-1,Number(localStorage.getItem(currentKey)||0))),allCollapsed=false;
  const $=id=>document.getElementById(id),curriculum=$('courseCurriculum');
  $('totalLessons').textContent=flat.length;$('lessonCountStat').textContent=flat.length;
  const durationFor=(item)=>Math.max(4,Math.min(12,Math.round((item.lesson[0].length+item.lesson[1].length)/30)+4));
  function updateProgress(){const pct=flat.length?Math.round(completed.size/flat.length*100):0;$('completedLessons').textContent=completed.size;$('courseProgressPct').textContent=pct+'%';$('courseProgressRing').style.setProperty('--course-progress',pct+'%');$('curriculumDone').textContent=completed.size;$('curriculumPercent').textContent=pct+'%';$('curriculumBar').style.width=pct+'%';}
  function renderCurriculum(query=''){
    const q=query.trim().toLowerCase();curriculum.innerHTML='';let matches=0;
    sections.forEach((section,si)=>{const lessonMatches=section.lessons.map((l,li)=>({l,li,match:!q||section.title.toLowerCase().includes(q)||section.summary.toLowerCase().includes(q)||l.join(' ').toLowerCase().includes(q)}));const visible=lessonMatches.some(x=>x.match);if(!visible)return;matches++;
      const sec=document.createElement('section');sec.className='course-section '+((q||si===flat[current].si)&&!allCollapsed?'open':'');sec.dataset.section=si;
      const done=section.lessons.filter((_,li)=>completed.has(`s${si}-l${li}`)).length;
      sec.innerHTML=`<button class="section-toggle"><span class="section-index">${String(si+1).padStart(2,'0')}</span><span class="section-name"><b>${section.title}</b><small>${done}/${section.lessons.length} complete · ${section.category}</small></span><span class="section-chevron">›</span></button><div class="lesson-list"></div>`;
      const list=sec.querySelector('.lesson-list');lessonMatches.forEach(({l,li,match})=>{if(!match)return;const idx=flat.findIndex(x=>x.si===si&&x.li===li),id=`s${si}-l${li}`;const b=document.createElement('button');b.className='lesson-link '+(idx===current?'active ':'')+(completed.has(id)?'complete':'');b.innerHTML=`<span class="lesson-state">✓</span><b>${l[0]}</b><small>${durationFor(flat[idx])} min</small>`;b.addEventListener('click',()=>{current=idx;localStorage.setItem(currentKey,current);renderLesson();renderCurriculum($('courseSearch').value)});list.appendChild(b)});
      sec.querySelector('.section-toggle').addEventListener('click',()=>sec.classList.toggle('open'));curriculum.appendChild(sec);
    });
    if(!matches)curriculum.innerHTML='<div class="course-empty">No section or lesson matches this search.</div>';
  }
  function renderLesson(){
    const item=flat[current],section=item.section,lesson=item.lesson,id=item.id;
    $('readerSection').textContent=`Section ${item.si+1} of ${sections.length}`;$('readerDuration').textContent=durationFor(item)+' min';$('readerCategory').textContent=section.category+' · '+section.domain;$('readerTitle').textContent=lesson[0];$('readerSummary').textContent=section.summary;$('lessonDescription').textContent=lesson[1];$('decisionRule').textContent=section.decision;$('examTrap').textContent=section.trap;$('readerPosition').textContent=`Lesson ${current+1} of ${flat.length}`;
    $('knowledgeGrid').innerHTML=section.facts.map((f,i)=>`<article class="knowledge-item"><span>${i+1}</span><p>${f}</p></article>`).join('');
    const complete=completed.has(id);$('markLesson').classList.toggle('complete',complete);$('markLesson').querySelector('b').textContent=complete?'Completed':'Mark complete';
    $('prevLesson').disabled=current===0;$('nextLesson').disabled=current===flat.length-1;$('nextLesson').textContent=current===flat.length-1?'Course complete':'Next lesson →';
    const lab=$('courseLabCard');if(section.lab){lab.hidden=false;$('courseLabTitle').textContent='Practice '+section.title;$('courseLabLink').href=section.lab}else lab.hidden=true;
    const quiz=section.quiz;$('checkQuestion').textContent=quiz.q;$('checkOptions').innerHTML='';$('checkFeedback').className='check-feedback';$('checkFeedback').textContent='';
    quiz.options.forEach((option,oi)=>{const b=document.createElement('button');b.className='check-option';b.textContent=String.fromCharCode(65+oi)+'. '+option;b.addEventListener('click',()=>answerQuiz(item.si,oi));$('checkOptions').appendChild(b)});
    if(quizState[item.si]!==undefined)paintQuiz(item.si,quizState[item.si]);window.scrollTo({top:0,behavior:'smooth'});
  }
  function answerQuiz(si,choice){quizState[si]=choice;localStorage.setItem(quizKey,JSON.stringify(quizState));paintQuiz(si,choice)}
  function paintQuiz(si,choice){const quiz=sections[si].quiz,buttons=[...$('checkOptions').children];buttons.forEach((b,i)=>{b.disabled=true;b.classList.toggle('selected',i===choice);b.classList.toggle('correct',i===quiz.correct);b.classList.toggle('wrong',i===choice&&i!==quiz.correct)});const good=choice===quiz.correct;$('checkFeedback').className='check-feedback show';$('checkFeedback').innerHTML=`<b>${good?'Correct.':'Not quite.'}</b> ${quiz.explain}`;}
  $('markLesson').addEventListener('click',()=>{const id=flat[current].id;if(completed.has(id))completed.delete(id);else completed.add(id);localStorage.setItem(progressKey,JSON.stringify([...completed]));updateProgress();renderLesson();renderCurriculum($('courseSearch').value)});
  $('prevLesson').addEventListener('click',()=>{if(current>0){current--;localStorage.setItem(currentKey,current);renderLesson();renderCurriculum($('courseSearch').value)}});
  $('nextLesson').addEventListener('click',()=>{if(current<flat.length-1){completed.add(flat[current].id);localStorage.setItem(progressKey,JSON.stringify([...completed]));current++;localStorage.setItem(currentKey,current);updateProgress();renderLesson();renderCurriculum($('courseSearch').value)}});
  $('resumeCourse').addEventListener('click',()=>document.querySelector('.course-layout').scrollIntoView({behavior:'smooth',block:'start'}));
  $('courseSearch').addEventListener('input',e=>renderCurriculum(e.target.value));
  const global=$('globalSearch');if(global){global.addEventListener('input',e=>{$('courseSearch').value=e.target.value;renderCurriculum(e.target.value)});global.addEventListener('keydown',e=>{if(e.key==='Enter')document.querySelector('.course-layout').scrollIntoView({behavior:'smooth'})})}
  $('collapseAll').addEventListener('click',()=>{allCollapsed=!allCollapsed;$('collapseAll').textContent=allCollapsed?'+':'−';document.querySelectorAll('.course-section').forEach(s=>s.classList.toggle('open',!allCollapsed))});
  updateProgress();renderCurriculum();renderLesson();
})();
