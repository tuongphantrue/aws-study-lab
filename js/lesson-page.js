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
  complete?.addEventListener('click',()=>{let done=read();done=done.includes(section)?done.filter(x=>x!==section):[...done,section];write(done);paint()});paint();
})();
