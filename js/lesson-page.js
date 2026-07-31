(function(){
  const nodes=[...document.querySelectorAll('.step')],title=document.getElementById('explainTitle'),text=document.getElementById('explainText');
  function select(node){nodes.forEach(n=>n.classList.toggle('active',n===node));if(title)title.textContent=node.dataset.title||'';if(text)text.textContent=node.dataset.text||''}
  nodes.forEach(node=>{node.addEventListener('mouseenter',()=>select(node));node.addEventListener('focus',()=>select(node));node.addEventListener('click',()=>select(node))});
  if(nodes[0])select(nodes[0]);

  const quiz=document.querySelector('.quiz');
  if(quiz){const correct=Number(quiz.dataset.correct),feedback=document.getElementById('feedback'),explanation=quiz.dataset.explain||'';quiz.querySelectorAll('.answer').forEach(btn=>btn.addEventListener('click',()=>{const choice=Number(btn.dataset.choice);quiz.querySelectorAll('.answer').forEach(b=>{const c=Number(b.dataset.choice);b.disabled=true;b.classList.toggle('correct',c===correct);b.classList.toggle('wrong',c===choice&&c!==correct)});const ok=choice===correct;feedback.className='feedback show '+(ok?'good':'retry');feedback.innerHTML=`<b>${ok?'Correct.':'Not yet.'}</b> ${explanation}`;}));}

  const section=Number(document.body.dataset.section||0),key='aws-beginner-section-progress-v2',complete=document.getElementById('completeLesson');
  const read=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]}},write=v=>localStorage.setItem(key,JSON.stringify(v));
  function paint(){const done=read().includes(section);complete?.classList.toggle('done',done);if(complete)complete.textContent=done?'✓ Completed':'Mark complete';const pct=Math.round(read().length/33*100);document.querySelector('.progress-strip i')?.style.setProperty('width',pct+'%')}
  function markComplete(){let done=read();if(!done.includes(section)){done=[...done,section];write(done);paint();window.dispatchEvent(new Event('aws-study-progress-changed'))}}
  complete?.addEventListener('click',()=>{let done=read();done=done.includes(section)?done.filter(x=>x!==section):[...done,section];write(done);paint();window.dispatchEvent(new Event('aws-study-progress-changed'))});paint();

  // Turn each lesson into a short click-through sequence. This keeps one teaching decision on screen at a time.
  const main=document.querySelector('main'),head=main?.querySelector('.lesson-head'),pageFoot=main?.querySelector('.page-foot');
  if(main&&head&&pageFoot){
    const idea=main.querySelector('.main-idea'),figure=main.querySelector('.figure'),simple=main.querySelector('.simple-grid'),exam=main.querySelector('.card.exam'),memory=main.querySelector('.memory'),lab=main.querySelector('.lab-link'),check=main.querySelector('.quiz');
    const specs=[];
    if(idea)specs.push({k:'START HERE',title:'Understand one idea first',lead:'Do not memorize details yet. Make the basic idea feel obvious.',nodes:[idea]});
    if(figure)specs.push({k:'SEE IT',title:'See the idea as a simple flow',lead:'Hover, focus, or tap the boxes only when you want a little more detail.',nodes:[figure]});
    if(simple)specs.push({k:'MAKE IT REAL',title:'Connect it to a familiar example',lead:'A concrete situation makes the AWS service easier to remember.',nodes:[simple]});
    if(exam||memory)specs.push({k:'REMEMBER',title:'Keep only the clue that matters',lead:'This is the small piece worth carrying into later architecture questions.',nodes:[exam,memory].filter(Boolean)});
    if(lab)specs.push({k:'OPTIONAL',title:'Try it only if the idea is already clear',lead:'The lab is practice, not the explanation. You can skip it and continue learning.',nodes:[lab]});
    if(check)specs.push({k:'QUICK CHECK',title:'Answer one question, then move on',lead:'If you can explain why the answer fits, the lesson has done its job.',nodes:[check]});

    if(specs.length>1){
      const deck=document.createElement('section');deck.className='lesson-deck';
      const deckHead=document.createElement('header');deckHead.className='lesson-deck-head';
      deckHead.innerHTML='<div><span id="deckKicker"></span><h2 id="deckTitle"></h2><p id="deckLead"></p></div><div class="lesson-step-progress"><div><span id="deckStepText"></span><b id="deckStepPct"></b></div><div class="lesson-step-track"><i id="deckStepBar"></i></div></div>';
      const viewport=document.createElement('div');viewport.className='lesson-deck-viewport';
      specs.forEach((spec,i)=>{const slide=document.createElement('article');slide.className='lesson-slide';slide.dataset.slide=String(i);spec.nodes.forEach(n=>slide.appendChild(n));viewport.appendChild(slide)});
      const controls=document.createElement('footer');controls.className='lesson-deck-controls';controls.innerHTML='<button class="lesson-deck-btn" id="deckPrev" type="button">← Previous</button><div class="lesson-deck-dots" id="deckDots"></div><button class="lesson-deck-btn primary" id="deckNext" type="button">Next →</button>';
      deck.append(deckHead,viewport,controls);head.insertAdjacentElement('afterend',deck);

      let active=0;
      const kicker=deck.querySelector('#deckKicker'),deckTitle=deck.querySelector('#deckTitle'),lead=deck.querySelector('#deckLead'),stepText=deck.querySelector('#deckStepText'),stepPct=deck.querySelector('#deckStepPct'),stepBar=deck.querySelector('#deckStepBar'),prev=deck.querySelector('#deckPrev'),next=deck.querySelector('#deckNext'),dots=deck.querySelector('#deckDots');
      function renderSlide(shouldScroll=false){
        const spec=specs[active],pct=Math.round((active+1)/specs.length*100);
        deck.querySelectorAll('.lesson-slide').forEach((el,i)=>el.classList.toggle('active',i===active));
        kicker.textContent=spec.k;deckTitle.textContent=spec.title;lead.textContent=spec.lead;stepText.textContent=`Step ${active+1} of ${specs.length}`;stepPct.textContent=`${pct}%`;stepBar.style.width=`${pct}%`;
        prev.disabled=active===0;next.textContent=active===specs.length-1?(read().includes(section)?'Completed ✓':'Finish section'):'Next →';
        dots.innerHTML=specs.map((_,i)=>`<button type="button" class="lesson-deck-dot ${i===active?'active':''}" data-go="${i}" aria-label="Go to step ${i+1}"></button>`).join('');
        dots.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>{active=Number(btn.dataset.go);renderSlide(true)}));
        if(shouldScroll)deck.scrollIntoView({block:'start',behavior:'smooth'});
      }
      prev.addEventListener('click',()=>{if(active>0){active--;renderSlide(true)}});
      next.addEventListener('click',()=>{if(active<specs.length-1){active++;renderSlide(true)}else{markComplete();renderSlide(true)}});
      document.addEventListener('keydown',e=>{const tag=(e.target?.tagName||'').toLowerCase();if(['input','select','textarea','button'].includes(tag))return;if(e.key==='ArrowRight'&&active<specs.length-1){active++;renderSlide(true)}if(e.key==='ArrowLeft'&&active>0){active--;renderSlide(true)}});
      renderSlide();
    }
  }
})();
