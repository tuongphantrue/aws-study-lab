(function(){
  const LECTURE_KEY='aws-course-lecture-progress-v1';
  const SECTION_KEY='aws-beginner-section-progress-v2';
  const params=new URLSearchParams(location.search);
  const sectionNumber=Number(params.get('section')||1);
  const lectureNumber=Number(params.get('lecture')||1);
  const curriculum=window.AWS_COURSE_CURRICULUM||[];
  const section=curriculum[sectionNumber-1];
  const lecture=section?.lectures?.[lectureNumber-1];
  const loading=document.getElementById('lectureLoading');
  const article=document.getElementById('lectureArticle');
  const error=document.getElementById('lectureError');

  if(!section||!lecture||!lecture.ready){
    loading.hidden=true;
    error.hidden=false;
    return;
  }

  const lectureId=`${sectionNumber}-${lectureNumber}`;
  const readList=key=>{try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch(error){return[]}};
  const writeList=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
  const setText=(id,value)=>{const element=document.getElementById(id);if(element)element.textContent=value};
  const lectureHref=(targetSection,targetLecture)=>`lecture.html?section=${targetSection}&lecture=${targetLecture}`;
  const findReadyLecture=direction=>{
    for(let targetSection=sectionNumber+direction;targetSection>=1&&targetSection<=curriculum.length;targetSection+=direction){
      const readyIndexes=curriculum[targetSection-1].lectures.map((item,index)=>item.ready?index:-1).filter(index=>index>=0);
      if(readyIndexes.length)return {section:targetSection,lecture:(direction>0?readyIndexes[0]:readyIndexes[readyIndexes.length-1])+1};
    }
    return null;
  };

  document.title=`${lecture.title} | AWS Study Lab`;
  document.body.dataset.section=String(sectionNumber);
  setText('lectureEyebrow',`SECTION ${sectionNumber} / LECTURE ${lectureNumber}`);
  setText('lectureTitle',lecture.title);
  setText('lectureSummary',lecture.summary);
  setText('lecturePosition',`Lecture ${lectureNumber} of ${section.lectures.length}`);
  setText('lectureExamTip',lecture.examTip);
  const source=document.getElementById('lectureSource');
  if(lecture.sourcePages){source.textContent=`PDF slides ${lecture.sourcePages}`;source.hidden=false}
  document.getElementById('lectureBack').href=`../study-guide.html?section=${sectionNumber}`;

  const explanation=document.getElementById('lectureExplanation');
  lecture.explanation.forEach(copy=>{const paragraph=document.createElement('p');paragraph.textContent=copy;explanation.appendChild(paragraph)});
  const takeaways=document.getElementById('lectureTakeaways');
  lecture.takeaways.forEach(copy=>{const item=document.createElement('li');item.textContent=copy;takeaways.appendChild(item)});
  const slideOutline=document.getElementById('lectureSlideOutline');
  const slideTopics=document.getElementById('lectureSlideTopics');
  if(Array.isArray(lecture.slideTopics)&&lecture.slideTopics.length){
    lecture.slideTopics.forEach(topic=>{
      const card=document.createElement('article');
      const heading=document.createElement('h3');
      const isTextTopic=typeof topic==='string';
      heading.textContent=isTextTopic?topic:topic.heading;
      card.appendChild(heading);
      if(!isTextTopic&&Array.isArray(topic.bullets)&&topic.bullets.length){
        const list=document.createElement('ul');
        topic.bullets.forEach(copy=>{const item=document.createElement('li');item.textContent=copy;list.appendChild(item)});
        card.appendChild(list);
      }
      slideTopics.appendChild(card);
    });
    slideOutline.hidden=false;
  }
  if(lecture.sourcePages)setText('lectureSourceNote',`Original study notes derived from PDF slides ${lecture.sourcePages} supplied by the learner. The wording is summarized rather than transcribed.`);

  const previous=document.getElementById('previousLecture');
  const next=document.getElementById('nextLecture');
  if(lectureNumber>1){
    previous.href=lectureHref(sectionNumber,lectureNumber-1);
    previous.querySelector('b').textContent=section.lectures[lectureNumber-2].title;
  }else{
    const previousReady=findReadyLecture(-1);
    if(previousReady){
      previous.href=lectureHref(previousReady.section,previousReady.lecture);
      previous.querySelector('b').textContent=curriculum[previousReady.section-1].lectures[previousReady.lecture-1].title;
    }else previous.hidden=true;
  }
  if(lectureNumber<section.lectures.length){
    next.href=lectureHref(sectionNumber,lectureNumber+1);
    next.querySelector('b').textContent=section.lectures[lectureNumber].title;
  }else{
    const nextReady=findReadyLecture(1);
    if(nextReady){
      next.href=lectureHref(nextReady.section,nextReady.lecture);
      next.querySelector('small').textContent=`NEXT SECTION`;
      next.querySelector('b').textContent=curriculum[nextReady.section-1].lectures[nextReady.lecture-1].title;
    }else{
      next.href=`../study-guide.html?section=${sectionNumber}`;
      next.querySelector('small').textContent='FINISH SECTION';
      next.querySelector('b').textContent='Return to course content';
    }
  }

  const complete=document.getElementById('completeLecture');
  function isComplete(){return readList(LECTURE_KEY).map(String).includes(lectureId)||readList(SECTION_KEY).map(Number).includes(sectionNumber)}
  function paintComplete(){const done=isComplete();complete.classList.toggle('is-complete',done);complete.setAttribute('aria-pressed',String(done));complete.querySelector('.complete-label').textContent=done?'Completed':'Mark complete'}
  complete.addEventListener('click',()=>{
    let completed=readList(LECTURE_KEY).map(String);
    let completedSections=readList(SECTION_KEY).map(Number).filter(Number.isFinite);
    const sectionWasComplete=completedSections.includes(sectionNumber);
    const sectionLectureIds=section.lectures.map((_,index)=>`${sectionNumber}-${index+1}`);
    if(sectionWasComplete)completed=[...new Set([...completed,...sectionLectureIds])];
    completed=completed.includes(lectureId)?completed.filter(id=>id!==lectureId):[...completed,lectureId];
    writeList(LECTURE_KEY,completed);
    const allComplete=sectionLectureIds.every(id=>completed.includes(id));
    if(allComplete&&!completedSections.includes(sectionNumber))completedSections.push(sectionNumber);
    if(!allComplete)completedSections=completedSections.filter(number=>number!==sectionNumber);
    writeList(SECTION_KEY,completedSections);
    paintComplete();
    window.dispatchEvent(new Event('aws-study-progress-changed'));
  });

  paintComplete();
  loading.hidden=true;
  article.hidden=false;
})();
