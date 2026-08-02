(function(){
  const meta=[
    [6,'15 min'],[1,'1 min'],[3,'13 min'],[20,'57 min'],[16,'1 hr 38 min'],[9,'34 min'],
    [14,'59 min'],[17,'1 hr 34 min'],[14,'1 hr 10 min'],[20,'1 hr 25 min'],[7,'43 min'],
    [14,'50 min'],[8,'30 min'],[15,'53 min'],[7,'33 min'],[10,'37 min'],[16,'1 hr 21 min'],
    [10,'49 min'],[18,'1 hr 23 min'],[4,'16 min'],[10,'25 min'],[12,'48 min'],[12,'26 min'],
    [18,'1 hr 19 min'],[10,'49 min'],[21,'1 hr 26 min'],[38,'2 hr 40 min'],[11,'44 min'],
    [5,'27 min'],[15,'48 min'],[4,'15 min'],[8,'17 min'],[3,'9 min']
  ];

  const sectionTopics=[
    ['SAA-C03 certification goals','architecture requirements','AWS account setup','shared responsibility'],
    ['course navigation','study resources','hands-on labs','repeatable study routine'],
    ['AWS Regions','Availability Zones','edge locations','AWS Management Console'],
    ['IAM users and groups','IAM policies','multi-factor authentication','access keys and AWS CLI','AWS CloudShell','IAM roles','credential reports'],
    ['EC2 instance types','EC2 user data','security groups','SSH access','EC2 purchasing options','Spot Instances','AWS Budgets'],
    ['public and private IP addresses','Elastic IP addresses','placement groups','elastic network interfaces','EC2 hibernation'],
    ['EBS volumes','EBS snapshots','Amazon Machine Images','EC2 instance store','EBS volume types','EBS encryption','Amazon EFS'],
    ['vertical and horizontal scaling','Elastic Load Balancing','Application Load Balancer','Network Load Balancer','Gateway Load Balancer','sticky sessions','TLS certificates','Auto Scaling groups'],
    ['Amazon RDS','read replicas and Multi-AZ','Amazon Aurora','database backups','RDS security','RDS Proxy','Amazon ElastiCache'],
    ['DNS records','Route 53 hosted zones','DNS time to live','CNAME and Alias records','routing policies','Route 53 health checks','hybrid DNS resolvers'],
    ['multi-tier architecture','stateless application servers','session management','resilient web applications','database scaling'],
    ['S3 buckets and objects','S3 versioning','S3 replication','S3 storage classes','S3 event notifications','S3 performance'],
    ['S3 lifecycle rules','multipart uploads','S3 Select','S3 Batch Operations','object replication','storage cost patterns'],
    ['S3 bucket policies','Block Public Access','S3 encryption','cross-origin resource sharing','S3 access points','S3 Object Lock'],
    ['Amazon CloudFront','CloudFront origins','cache behaviors','signed URLs and cookies','origin access control','AWS Global Accelerator'],
    ['AWS Snow Family','AWS Storage Gateway','Amazon FSx','AWS DataSync','AWS Transfer Family'],
    ['Amazon SQS','FIFO queues','dead-letter queues','Amazon SNS','SNS fanout','Amazon Kinesis','Amazon MQ'],
    ['container fundamentals','Amazon ECR','Amazon ECS','ECS task definitions','AWS Fargate','Amazon EKS','AWS App Runner'],
    ['AWS Lambda','Lambda concurrency','Amazon API Gateway','Amazon DynamoDB','Amazon Cognito','AWS Step Functions','serverless tradeoffs'],
    ['serverless REST APIs','authentication flows','asynchronous processing','event-driven workflows','serverless observability'],
    ['database selection','Amazon RDS and Aurora','Amazon DynamoDB','Amazon ElastiCache','Amazon Redshift','Amazon DocumentDB','Amazon Neptune','specialized databases'],
    ['Amazon Athena','AWS Glue','Amazon EMR','Amazon Redshift','Amazon OpenSearch Service','stream analytics','Amazon MSK','data visualization'],
    ['Amazon Rekognition','Amazon Transcribe','Amazon Polly','Amazon Translate','Amazon Comprehend','Amazon Lex','Amazon SageMaker','AI search and documents'],
    ['CloudWatch metrics','CloudWatch logs','CloudWatch alarms','Amazon EventBridge','AWS CloudTrail','AWS Config','AWS X-Ray'],
    ['advanced IAM policies','AWS STS','AWS Organizations and SCPs','permissions boundaries','identity federation','Amazon Cognito','IAM Identity Center','AWS Resource Access Manager'],
    ['AWS KMS','SSM Parameter Store','AWS Secrets Manager','AWS Certificate Manager','AWS WAF','AWS Shield','Firewall Manager','Amazon GuardDuty','Amazon Inspector','Amazon Macie'],
    ['VPC address ranges','public and private subnets','route tables','internet gateways','NAT gateways','network ACLs','security groups','VPC peering','Transit Gateway','VPC endpoints','VPC Flow Logs','VPN and Direct Connect'],
    ['recovery time and recovery point objectives','AWS Backup','Database Migration Service','Schema Conversion Tool','Application Migration Service','backup and restore','pilot light','warm standby','multi-site recovery'],
    ['event-driven architecture','caching patterns','high-performance computing','scalable web applications','microservice communication'],
    ['AWS CloudFormation','AWS Systems Manager','Amazon SES','Amazon Pinpoint','AWS Batch','Amazon AppFlow','AWS Amplify','Elastic Beanstalk'],
    ['Well-Architected Framework','operational excellence','security pillar','reliability pillar','performance efficiency','cost optimization','sustainability','AWS Trusted Advisor'],
    ['SAA-C03 exam format','requirement extraction','distractor elimination','time management','practice exam review','weak-area planning'],
    ['course completion review','personal study plan','exam readiness decision']
  ];

  const angles=[
    ['Overview',topic=>`Understand what ${topic} does and the problem it solves in an AWS architecture.`],
    ['Core concepts',topic=>`Learn the essential vocabulary and building blocks behind ${topic}.`],
    ['How it works',topic=>`Follow the request and data flow to see how ${topic} behaves in practice.`],
    ['Architecture choices',topic=>`Recognize when ${topic} fits a requirement and when another service is better.`],
    ['Configuration',topic=>`Review the settings that most directly affect ${topic} behavior.`],
    ['Hands-on reasoning',topic=>`Walk through a practical setup and verify the expected result for ${topic}.`],
    ['Security',topic=>`Apply least privilege, encryption, and network controls to ${topic}.`],
    ['Reliability',topic=>`Identify the failure modes of ${topic} and design for recovery.`],
    ['Performance',topic=>`Match ${topic} capacity and scaling behavior to workload demand.`],
    ['Cost',topic=>`Control the main cost drivers and avoid waste when using ${topic}.`],
    ['Operations',topic=>`Monitor, troubleshoot, and maintain ${topic} with low operational effort.`],
    ['Common mistakes',topic=>`Avoid the configuration traps and incorrect assumptions commonly associated with ${topic}.`],
    ['Exam scenario',topic=>`Use requirement keywords to evaluate ${topic} in an SAA-C03 style architecture decision.`],
    ['Review',topic=>`Summarize the decision rules and key facts to remember about ${topic}.`]
  ];

  const sectionOneLectures=[
    {
      ready:true,
      title:'Welcome to the SAA-C03 journey',
      summary:'Set realistic expectations for the certification and understand what this course is designed to teach.',
      explanation:[
        'The Solutions Architect Associate journey is about learning to turn business requirements into sensible AWS designs. You do not need previous AWS experience, but basic familiarity with servers, networking, storage, and databases will make the vocabulary easier to absorb.',
        'Treat the course as a guided architecture practice rather than a race through service names. The valuable skill is being able to explain why a design is secure, resilient, performant, cost-aware, and manageable.'
      ],
      takeaways:['Expect broad coverage across many AWS services.','Learn service relationships, not isolated definitions.','Build understanding gradually and revisit difficult topics.'],
      examTip:'The exam rewards requirement matching. Start every scenario by identifying the main constraint before considering a service.'
    },
    {
      ready:true,
      title:'How to study a long AWS course',
      summary:'Use a repeatable learning loop that turns a large syllabus into manageable decisions.',
      explanation:[
        'A long certification course becomes manageable when each study session has a small goal. Learn one concept, restate it in your own words, compare it with a nearby alternative, and then test the decision with a short scenario.',
        'Pause when a diagram or term is unclear. Speed is useful only after the underlying idea makes sense. Notes should capture decision rules and contrasts rather than copying every detail.'
      ],
      takeaways:['Study in short, focused blocks.','Write comparison notes such as Multi-AZ versus read replica.','Use quizzes to find weak reasoning, not merely to collect scores.'],
      examTip:'When reviewing a missed question, explain why every distractor fails. That produces knowledge you can transfer to unseen scenarios.'
    },
    {
      ready:true,
      title:'What Amazon Web Services provides',
      summary:'Understand AWS as on-demand technology building blocks that can be created, scaled, and removed through APIs.',
      explanation:[
        'AWS is a cloud provider. Instead of purchasing and maintaining every physical server yourself, you request compute, storage, networking, database, security, and application services when you need them.',
        'Cloud resources are programmable. You can create them through the console, command-line tools, software development kits, or infrastructure-as-code templates. This makes environments repeatable and allows capacity to change with demand.'
      ],
      takeaways:['AWS supplies services on demand.','Most resources can be controlled through APIs.','Elastic capacity helps match infrastructure to changing workloads.'],
      examTip:'Cloud does not remove operational responsibility. Always ask which responsibilities AWS manages and which remain with the customer.'
    },
    {
      ready:true,
      title:'Build a mental map of AWS services',
      summary:'Organize the large AWS catalog by architectural job instead of memorizing a flat list of products.',
      explanation:[
        'The AWS catalog is easier to navigate when services are grouped by the job they perform. EC2 and Lambda provide compute; S3, EBS, and EFS store data; RDS and DynamoDB manage different database models; VPC and Route 53 control network paths; IAM and KMS protect access and data.',
        'An architecture normally combines several of these categories. A user request may pass through DNS and content delivery, enter a load balancer, reach compute, read a database, publish a message, and generate monitoring data.'
      ],
      takeaways:['Group services into compute, storage, database, networking, security, integration, and operations.','Learn the normal job of each service before advanced features.','Trace complete request paths across service categories.'],
      examTip:'If an answer uses many services, verify that each one solves a stated requirement. Extra components are not automatically better architecture.'
    },
    {
      ready:true,
      title:'Think like a solutions architect',
      summary:'Move from recognizing service names to making defensible architecture decisions.',
      explanation:[
        'A solutions architect begins with constraints: availability, latency, throughput, security, compliance, recovery objectives, operational effort, and cost. Services are selected only after those constraints are understood.',
        'More than one design may work technically. The preferred answer is usually the simplest managed design that satisfies every important requirement without introducing unnecessary operations or cost.'
      ],
      takeaways:['Translate business language into technical constraints.','Eliminate choices that violate any hard requirement.','Compare remaining choices using explicit tradeoffs.'],
      examTip:'Words such as “most cost-effective,” “highly available,” and “least operational overhead” often determine the final choice.'
    },
    {
      ready:true,
      title:'Prepare for the first AWS building blocks',
      summary:'Know what comes next and establish a safe, deliberate learning environment.',
      explanation:[
        'The next lessons move from the course overview into AWS global infrastructure, the management console, identity, compute, storage, and networking. These foundations appear repeatedly in later architecture sections.',
        'When following hands-on work, use clear resource names, select the intended Region, enable cost awareness, and remove resources after practice. Keep credentials private and prefer temporary role-based access whenever possible.'
      ],
      takeaways:['Regions and Availability Zones shape resilience and latency.','IAM should be understood before creating workloads.','Cost and credential hygiene begin with the first lab.'],
      examTip:'Foundation topics are cumulative. A later database or serverless question may still depend on Region, IAM, networking, or encryption knowledge.'
    }
  ];

  window.AWS_COURSE_CURRICULUM=sectionTopics.map((topics,sectionIndex)=>{
    const [count,duration]=meta[sectionIndex];
    const lectures=Array.from({length:count},(_,index)=>{
      const topic=topics[index%topics.length];
      const [angle,summary]=angles[Math.floor(index/topics.length)%angles.length];
      return {title:`${topic} — ${angle}`,summary:summary(topic)};
    });
    return {count,duration,lectures};
  });
  window.AWS_COURSE_CURRICULUM[0].lectures=sectionOneLectures;
})();
