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
  const lectureHref=number=>`lecture.html?section=${sectionNumber}&lecture=${number}`;

  document.title=`${lecture.title} | AWS Study Lab`;
  document.body.dataset.section=String(sectionNumber);
  setText('lectureEyebrow',`SECTION ${sectionNumber} / LECTURE ${lectureNumber}`);
  setText('lectureTitle',lecture.title);
  setText('lectureSummary',lecture.summary);
  setText('lecturePosition',`Lecture ${lectureNumber} of ${section.lectures.length}`);
  setText('lectureExamTip',lecture.examTip);
  document.getElementById('lectureBack').href=`../study-guide.html?section=${sectionNumber}`;

  const explanation=document.getElementById('lectureExplanation');
  lecture.explanation.forEach(copy=>{const paragraph=document.createElement('p');paragraph.textContent=copy;explanation.appendChild(paragraph)});
  const takeaways=document.getElementById('lectureTakeaways');
  lecture.takeaways.forEach(copy=>{const item=document.createElement('li');item.textContent=copy;takeaways.appendChild(item)});

  const previous=document.getElementById('previousLecture');
  const next=document.getElementById('nextLecture');
  if(lectureNumber>1){previous.href=lectureHref(lectureNumber-1);previous.querySelector('b').textContent=section.lectures[lectureNumber-2].title}else{previous.hidden=true}
  if(lectureNumber<section.lectures.length){next.href=lectureHref(lectureNumber+1);next.querySelector('b').textContent=section.lectures[lectureNumber].title}else{next.href=`../study-guide.html?section=${sectionNumber}`;next.querySelector('small').textContent='FINISH SECTION';next.querySelector('b').textContent='Return to course content'}

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
