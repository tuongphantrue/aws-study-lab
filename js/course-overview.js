(function(){
  const KEY='aws-beginner-section-progress-v2';
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return[]}};
  const done=new Set(read());
  const rows=[...document.querySelectorAll('.course-section-row')];
  rows.forEach(row=>row.classList.toggle('complete',done.has(Number(row.dataset.section))));
  const pct=Math.round(done.size/33*100);
  document.getElementById('courseProgressText').textContent=`${done.size} of 33`;
  document.getElementById('courseProgressBar').style.width=pct+'%';
  const next=Math.min(33,Math.max(1,[...Array(33)].map((_,i)=>i+1).find(i=>!done.has(i))||33));
  const resume=document.getElementById('resumeSection');
  resume.href=`course/section-${String(next).padStart(2,'0')}.html`;
  resume.textContent=done.size?'Continue course →':'Start Section 1 →';
  const search=document.getElementById('courseSectionSearch'),empty=document.getElementById('courseEmpty');
  function filter(){const q=(search.value||'').trim().toLowerCase();let visible=0;rows.forEach(r=>{const show=!q||r.dataset.search.includes(q)||r.textContent.toLowerCase().includes(q);r.hidden=!show;if(show)visible++});document.querySelectorAll('.course-group').forEach(g=>g.hidden=![...g.querySelectorAll('.course-section-row')].some(r=>!r.hidden));empty.hidden=visible!==0;}
  search?.addEventListener('input',filter);
})();
