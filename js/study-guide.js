(function(){
const chapters=window.AWS_BEGINNER_COURSE||[];
const PROGRESS='aws-maarek-sequence-progress-v1',CURRENT='aws-maarek-sequence-current-v1',QUIZ='aws-maarek-sequence-quiz-v1';
const $=id=>document.getElementById(id);
const safeRead=(k,f)=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch(e){return f}};
let completed=new Set(safeRead(PROGRESS,[])),quiz=safeRead(QUIZ,{}),flat=[],current=Number(localStorage.getItem(CURRENT)||0),collapsed=false;
chapters.forEach((chapter,ci)=>chapter.lessons.forEach((lesson,li)=>flat.push({chapter,lesson,ci,li,id:`c${ci}-l${li}`})));
current=Math.max(0,Math.min(current,flat.length-1));
function save(){localStorage.setItem(PROGRESS,JSON.stringify([...completed]));localStorage.setItem(CURRENT,String(current));localStorage.setItem(QUIZ,JSON.stringify(quiz));}
function progress(){const pct=flat.length?Math.round(completed.size/flat.length*100):0;$('totalLessons').textContent=flat.length;$('completedLessons').textContent=completed.size;$('courseProgressPct').textContent=pct+'%';$('courseProgressRing').style.setProperty('--progress',pct+'%');$('curriculumDone').textContent=`${completed.size} complete`;$('curriculumPercent').textContent=pct+'%';$('curriculumBar').style.width=pct+'%';$('resumeCourse').textContent=completed.size?'Continue learning':'Start learning';}
function shorten(text,maxWords=28){const words=(text||'').trim().split(/\s+/).filter(Boolean);return words.length>maxWords?words.slice(0,maxWords).join(' ')+'…':text}
function takePoints(points,count=4){return (points||[]).slice(0,count).map(p=>p.replace(/^Decision rule:\s*/,'').replace(/^Common mistake:\s*/,'Avoid: '))}
function lessonKey(item){return ((item.lesson.title||'')+' '+(item.chapter.title||'')).toLowerCase()}
function figureForLesson(item){
  const k=lessonKey(item);
  const make=(title,caption,cols)=>({title,caption,cols});
  if(/iam|policy|role|security|scp|permission/.test(k)) return make('Identity flow','Who is calling AWS, and what are they allowed to do?',[['Person / App','IAM role'],['Policy check','AWS service'],['Allow','Deny']]);
  if(/region|availability zone|global infrastructure|cloudfront|edge location/.test(k)) return make('AWS global layout','A Region contains multiple isolated Availability Zones.',[['Region'],['AZ 1','AZ 2','AZ 3'],['Service runs across AZs']]);
  if(/ec2|load balancer|elb|autoscaling|auto scaling/.test(k)) return make('Highly available web app','Distribute traffic, then add or replace instances automatically.',[['Users'],['Load balancer'],['EC2 in AZ A','EC2 in AZ B'],['Auto Scaling group']]);
  if(/ebs|efs|fsx|storage|s3|object|block|file/.test(k) && !/database/.test(k)) return make('Storage choices','Choose by access pattern: object, block, or shared file.',[['App'],['S3 object'],['EBS block','EFS shared file']]);
  if(/database|rds|aurora|sql|dynamodb|elasticache|redshift/.test(k)) return make('Database choice','Pick the database based on data shape and access pattern.',[['Application'],['SQL DB','NoSQL DB','Cache'],['Read / write pattern']]);
  if(/route 53|cloudfront|global accelerator|dns|delivery/.test(k)) return make('Global request path','Decide how the user reaches your application.',[['User'],['Route 53'],['CloudFront / GA'],['ALB / S3 origin']]);
  if(/sqs|sns|mq|kinesis|messag/.test(k)) return make('Decoupled systems','Let producers and consumers move at different speeds.',[['Producer'],['Queue / Topic / Stream'],['Consumer'],['Retry / DLQ']]);
  if(/container|ecs|eks|fargate/.test(k)) return make('Container platform','Run many small services behind one entry point.',[['Users'],['ALB'],['ECS / EKS service'],['Tasks / Pods']]);
  if(/lambda|serverless|api gateway|step function/.test(k)) return make('Serverless request flow','Events trigger code only when needed.',[['Event / API'],['Lambda'],['DynamoDB / S3'],['Scale automatically']]);
  if(/cloudwatch|monitor|alarm|eventbridge|x-ray|logs/.test(k)) return make('Observe and react','Metrics and logs become alarms, notifications, or automation.',[['Metrics / Logs'],['CloudWatch'],['Alarm'],['SNS / Action']]);
  if(/vpc|subnet|nat|internet gateway|route table|security group|network acl|network/.test(k)) return make('VPC network path','Separate public entry points from private workloads.',[['Internet'],['Public subnet'],['Private subnet'],['Database subnet']]);
  if(/hybrid|direct connect|vpn/.test(k)) return make('Connect on-premises','Extend your network into AWS securely.',[['On-prem'],['VPN / Direct Connect'],['VPC'],['AWS services']]);
  if(/disaster|backup|restore|pilot light|warm standby|dr /.test(k)) return make('Resilience across Regions','Keep a copy so you can recover after a major failure.',[['Primary Region'],['Replication / Backup'],['Secondary Region'],['Fail over']]);
  if(/cost|saving|pricing|reserved|spot|budget/.test(k)) return make('Cost decision','Balance flexibility, commitment, and interruption risk.',[['Workload'],['On-Demand'],['Savings Plan / RI'],['Spot']]);
  return make('Architecture thinking','Start from the requirement, then choose the simplest fitting service.',[['Requirement'],['AWS service'],['Tradeoff'],['Result']]);
}
function nodeExplanation(label){
  const k=(label||'').toLowerCase();
  if(k.includes('user')||k.includes('person')||k.includes('app'))return 'The caller or application starts the request and states what it needs.';
  if(k.includes('role'))return 'A role supplies temporary credentials and permissions without storing long-lived keys.';
  if(k.includes('policy'))return 'Policies are evaluated together to decide whether the requested action is allowed.';
  if(k.includes('region'))return 'A Region is a separate geographic AWS area containing multiple Availability Zones.';
  if(/^az /.test(k))return 'An Availability Zone is an isolated group of data centers inside one Region.';
  if(k.includes('load balancer')||k==='alb')return 'The load balancer gives users one endpoint and forwards traffic to healthy targets.';
  if(k.includes('ec2'))return 'EC2 provides virtual servers where the application code can run.';
  if(k.includes('auto scaling'))return 'Auto Scaling adds, removes, and replaces instances according to demand and health.';
  if(k.includes('s3'))return 'S3 stores objects accessed through an API and scales without managing disks.';
  if(k.includes('ebs'))return 'EBS is block storage normally attached to one EC2 instance in one Availability Zone.';
  if(k.includes('efs'))return 'EFS is a managed shared Linux file system that many instances can mount.';
  if(k.includes('sql'))return 'A relational database fits structured data, transactions, joins, and SQL queries.';
  if(k.includes('nosql')||k.includes('dynamodb'))return 'A NoSQL database fits known key-based access patterns and horizontal scale.';
  if(k.includes('cache'))return 'A cache keeps frequently used temporary data in memory to reduce latency and database load.';
  if(k.includes('route 53'))return 'Route 53 answers DNS queries and can choose endpoints using routing policies and health checks.';
  if(k.includes('cloudfront'))return 'CloudFront caches HTTP content near users at edge locations.';
  if(k.includes('accelerator'))return 'Global Accelerator provides static anycast IPs and optimized routing to healthy regional endpoints.';
  if(k.includes('queue'))return 'A queue stores work so producers and consumers can run independently.';
  if(k.includes('topic'))return 'A topic publishes one message to multiple subscribers.';
  if(k.includes('stream'))return 'A stream keeps an ordered flow of records for multiple consumers.';
  if(k.includes('consumer'))return 'The consumer receives and processes the queued or streamed work.';
  if(k.includes('retry')||k.includes('dlq'))return 'Retries handle temporary failure; a dead-letter queue isolates messages that keep failing.';
  if(k.includes('lambda'))return 'Lambda runs code in response to events without managing servers.';
  if(k.includes('metric')||k.includes('logs'))return 'Metrics and logs describe the current behavior and health of the workload.';
  if(k.includes('alarm'))return 'An alarm evaluates datapoints and changes state when the configured condition is met.';
  if(k.includes('public subnet'))return 'A public subnet has a route to an Internet Gateway and usually holds internet-facing components.';
  if(k.includes('private subnet'))return 'A private subnet has no direct inbound internet path and holds application workloads.';
  if(k.includes('database subnet'))return 'The data tier stays private and accepts connections only from approved application resources.';
  if(k.includes('vpn')||k.includes('direct connect'))return 'This link securely connects an on-premises network to AWS.';
  if(k.includes('backup')||k.includes('replication'))return 'Copies of data and infrastructure support recovery after a failure.';
  if(k.includes('fail over'))return 'Failover redirects users to the healthy recovery environment.';
  if(k.includes('on-demand'))return 'On-Demand provides maximum flexibility without a long-term commitment.';
  if(k.includes('saving')||k.includes('ri'))return 'A commitment reduces cost for predictable steady usage.';
  if(k.includes('spot'))return 'Spot offers deep discounts for workloads that can tolerate interruption.';
  if(k.includes('tradeoff'))return 'Every architecture choice balances cost, performance, reliability, security, and operational effort.';
  return 'This component performs one step in the architecture. Follow the arrows to see how the complete request flows.';
}
function renderFigure(item){
  const fig=figureForLesson(item); 
  $('figureTitle').textContent=fig.title; $('figureCaption').textContent=fig.caption;
  $('figureCanvas').innerHTML=fig.cols.map((col,idx)=>`<div class="figure-col">${(Array.isArray(col)?col:[col]).map(x=>`<button type="button" class="diagram-node figure-box" data-title="${x}" data-explain="${nodeExplanation(x)}"><b>${x}</b></button>`).join('')}${idx<fig.cols.length-1?'<div class="figure-arrow">→</div>':''}</div>`).join(''); const panel=document.querySelector('.lesson-figure .diagram-explanation'); if(panel){panel.querySelector('h3').textContent=fig.title;panel.querySelector('p').textContent=fig.caption;}
}
function renderCurriculum(query=''){const q=query.trim().toLowerCase();const root=$('courseCurriculum');root.innerHTML='';let count=0;chapters.forEach((chapter,ci)=>{const visible=chapter.lessons.map((lesson,li)=>({lesson,li,show:!q||(chapter.title+' '+chapter.subtitle+' '+lesson.title+' '+lesson.lead).toLowerCase().includes(q)}));if(!visible.some(x=>x.show))return;count++;const section=document.createElement('section');const open=!collapsed&&(q||ci===flat[current].ci);section.className='chapter-item '+(open?'open':'');const done=chapter.lessons.filter((_,li)=>completed.has(`c${ci}-l${li}`)).length;section.innerHTML=`<button class="chapter-toggle" type="button"><span class="chapter-number">${ci+1}</span><span><b>${chapter.title}</b><small>${done}/${chapter.lessons.length} complete · ${chapter.subtitle}</small></span><i>›</i></button><div class="chapter-lessons"></div>`;const list=section.querySelector('.chapter-lessons');visible.forEach(({lesson,li,show})=>{if(!show)return;const idx=flat.findIndex(x=>x.ci===ci&&x.li===li),id=`c${ci}-l${li}`;const b=document.createElement('button');b.type='button';b.className='chapter-lesson '+(idx===current?'active ':'')+(completed.has(id)?'complete':'');b.innerHTML=`<span class="lesson-check">✓</span><span><b>${lesson.title}</b><small>${lesson.duration} min</small></span>`;b.onclick=()=>{current=idx;save();renderLesson();renderCurriculum($('courseSearch').value)};list.appendChild(b)});section.querySelector('.chapter-toggle').onclick=()=>section.classList.toggle('open');root.appendChild(section)});if(!count)root.innerHTML='<div class="course-empty">No beginner lesson matches this search.</div>'}
function renderLesson(){const item=flat[current],l=item.lesson,c=item.chapter,id=item.id;$('readerSection').textContent=`Section ${item.ci+1} of ${chapters.length}`;$('readerDuration').textContent=`${l.duration} min`;$('readerCategory').textContent=c.title;$('readerTitle').textContent=l.title;$('readerLead').textContent=shorten(l.lead,18);$('plainExplanation').textContent=shorten(l.plain,24);$('lessonAnalogy').textContent=shorten(l.analogy,22);renderFigure(item);$('conceptFlow').innerHTML=l.flow.map((x,i)=>`<div class="flow-node"><span>${i+1}</span><b>${x}</b></div>`).join('<i>→</i>');$('lessonPoints').innerHTML=takePoints(l.points).map(x=>`<div><span>✓</span><p>${shorten(x,18)}</p></div>`).join('');$('lessonExample').textContent=shorten(l.example,22);$('termGrid').innerHTML=l.terms.slice(0,3).map(([term,meaning])=>`<article><b>${term}</b><p>${shorten(meaning,14)}</p></article>`).join('');$('readerPosition').textContent=`Lesson ${current+1} of ${flat.length}`;
 const understood=completed.has(id);$('markLesson').classList.toggle('complete',understood);$('markLesson').querySelector('b').textContent=understood?'Understood':'Mark understood';$('prevLesson').disabled=current===0;$('nextLesson').disabled=current===flat.length-1;$('nextLesson').textContent=current===flat.length-1?'Course complete':'Next lesson →';
 const lab=$('courseLabCard');if(l.lab){lab.hidden=false;$('courseLabTitle').textContent=`Practice: ${l.title}`;$('courseLabLink').href=l.lab}else lab.hidden=true;
 $('checkQuestion').textContent=l.check.q;$('checkOptions').innerHTML='';$('checkFeedback').className='check-feedback';$('checkFeedback').textContent='';l.check.options.forEach((o,i)=>{const b=document.createElement('button');b.type='button';b.className='check-option';b.innerHTML=`<span>${String.fromCharCode(65+i)}</span><b>${o}</b>`;b.onclick=()=>answer(i);$('checkOptions').appendChild(b)});if(quiz[id]!==undefined)paintQuiz(quiz[id]);window.scrollTo({top:0,behavior:'smooth'});}
function answer(choice){const id=flat[current].id;quiz[id]=choice;save();paintQuiz(choice)}
function paintQuiz(choice){const l=flat[current].lesson;[...$('checkOptions').children].forEach((b,i)=>{b.disabled=true;b.classList.toggle('selected',i===choice);b.classList.toggle('correct',i===l.check.correct);b.classList.toggle('wrong',i===choice&&i!==l.check.correct)});const ok=choice===l.check.correct;$('checkFeedback').className='check-feedback show '+(ok?'good':'retry');$('checkFeedback').innerHTML=`<b>${ok?'Correct.':'Not yet.'}</b> ${l.check.explain}`;}
$('markLesson').onclick=()=>{const id=flat[current].id;completed.has(id)?completed.delete(id):completed.add(id);save();progress();renderLesson();renderCurriculum($('courseSearch').value)};
$('prevLesson').onclick=()=>{if(current>0){current--;save();renderLesson();renderCurriculum($('courseSearch').value)}};
$('nextLesson').onclick=()=>{if(current<flat.length-1){completed.add(flat[current].id);current++;save();progress();renderLesson();renderCurriculum($('courseSearch').value)}};
$('resumeCourse').onclick=()=>document.getElementById('courseWorkspace').scrollIntoView({behavior:'smooth'});
$('courseSearch').oninput=e=>renderCurriculum(e.target.value);
$('collapseAll').onclick=()=>{collapsed=!collapsed;$('collapseAll').textContent=collapsed?'+':'−';document.querySelectorAll('.chapter-item').forEach(x=>x.classList.toggle('open',!collapsed))};
const global=$('globalSearch');if(global)global.oninput=e=>{$('courseSearch').value=e.target.value;renderCurriculum(e.target.value)};
progress();renderCurriculum();renderLesson();
})();
