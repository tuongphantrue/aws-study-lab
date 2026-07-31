(function(){
  const nodeSelector='.diagram-node[data-explain]';
  function container(node){return node.closest('.interactive-architecture, .lesson-figure')}
  function panelFor(root){return root&&root.querySelector('.diagram-explanation')}
  function activate(node){
    const root=container(node),panel=panelFor(root); if(!root||!panel)return;
    root.querySelectorAll('.diagram-node.active').forEach(x=>x.classList.remove('active'));
    node.classList.add('active');
    const h=panel.querySelector('h3'),p=panel.querySelector('p');
    if(h)h.textContent=node.dataset.title||node.textContent.trim();
    if(p)p.textContent=node.dataset.explain||'';
  }
  document.addEventListener('mouseover',e=>{const n=e.target.closest(nodeSelector);if(n)activate(n)});
  document.addEventListener('focusin',e=>{const n=e.target.closest(nodeSelector);if(n)activate(n)});
  document.addEventListener('click',e=>{const n=e.target.closest(nodeSelector);if(n)activate(n)});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches(nodeSelector)){e.preventDefault();activate(e.target)}});
})();
