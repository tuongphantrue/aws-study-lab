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

  const legacySectionOneLectures=[
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

  const sectionOneLectures=[
    {
      ready:true,title:'Welcome to the SAA-C03 journey',sourcePages:'6–9',
      summary:'Follow the supplied course introduction: exam target, expected background, course scale, and instructor context.',
      explanation:['The slides introduce this as the AWS Certified Solutions Architect – Associate SAA-C03 course. It is presented as a challenging and lengthy certification path that mixes shared foundations from Cloud Practitioner, Developer, and SysOps material with architecture topics specific to Solutions Architect.','Beginners are welcome, but the deck recommends basic IT knowledge and a patient pace. The course covers more than 30 AWS services. The instructor context explains that the material comes from experience as an IT consultant, AWS solutions architect, developer, SysOps practitioner, and builder of websites, applications, and streaming platforms.'],
      slideTopics:[
        {heading:'Course target',bullets:['Prepare specifically for the SAA-C03 Solutions Architect Associate exam.','Expect a long course because the certification covers both shared AWS foundations and architecture-specific material.']},
        {heading:'Starting level',bullets:['Basic IT knowledge is expected.','AWS and IT beginners can follow the course, but should slow down when concepts are new.']},
        {heading:'Instructor context',bullets:['Background includes consulting and AWS architecture, development, and operations.','Examples draw on building web, application, and streaming workloads.']}
      ],
      takeaways:['The target certification is SAA-C03.','The course covers more than 30 AWS services.','Beginners should prioritize understanding over speed.'],
      examTip:'The opening slides set expectations rather than testable service details; use them to plan enough time for broad architecture coverage.'
    },
    {
      ready:true,title:'How to study a long AWS course',sourcePages:'7, 13',
      summary:'Apply the pace and course-platform guidance emphasized by the welcome and Udemy tips slides.',
      explanation:['The welcome slide explicitly says the certification is challenging, the course will be long, and learning is not a race. Some videos reuse foundational knowledge that applies across AWS certifications, while other lessons concentrate on Solutions Architect design decisions.','The deck includes a dedicated Udemy Tips slide but no detailed tip text in the supplied PDF. The faithful takeaway is therefore limited: use the course platform to support a deliberate pace, and revisit shared foundation lessons instead of skipping them merely because they appear in another certification track.'],
      slideTopics:[
        {heading:'Pace stated in the welcome',bullets:['The course is intentionally long because SAA-C03 is broad.','Take time with unfamiliar IT and AWS concepts.','Shared certification knowledge remains part of the required foundation.']},
        {heading:'Udemy Tips slide',bullets:['The supplied deck contains the heading only; it does not provide additional written instructions to reproduce.']}
      ],
      takeaways:['Do not treat the course as a race.','Foundational lessons support later architecture topics.','The supplied Udemy Tips slide contains no detailed body text.'],
      examTip:'Move forward only when you can explain the current concept without relying on playback or copied wording.'
    },
    {
      ready:true,title:'What Amazon Web Services provides',sourcePages:'10',
      summary:'Match the deck’s definition of AWS as an on-demand, easily scalable cloud provider.',
      explanation:['The “What’s AWS?” slide defines Amazon Web Services as a cloud provider that supplies servers and services on demand. Instead of waiting for owned infrastructure, customers can request the capabilities they need and scale them more easily as demand changes.','The slide frames AWS as a major change in how IT is delivered and points to Amazon.com and Netflix as examples of very large websites associated with AWS-scale infrastructure. Detailed service mechanics are intentionally deferred to later sections.'],
      slideTopics:[
        {heading:'What AWS is',bullets:['A cloud provider.','A source of servers and managed services on demand.','A platform designed to scale resources more easily.']},
        {heading:'Why it matters',bullets:['AWS changed the traditional IT provisioning model.','The platform supports very large internet workloads.']}
      ],
      takeaways:['AWS is a cloud provider.','Resources and services are available on demand.','Easy scaling is a central cloud benefit.'],
      examTip:'At this stage, remember the cloud model: request and scale services when needed instead of purchasing every server in advance.'
    },
    {
      ready:true,title:'Build a mental map of AWS services',sourcePages:'11',
      summary:'Use the exact service families introduced on the course overview slide as the first map of the syllabus.',
      explanation:['The course overview names EC2, ECR, ECS, Elastic Load Balancing, Elastic Beanstalk, Lambda, S3, RDS, DynamoDB, ElastiCache, Aurora, CloudFront, Route 53, CloudWatch, CloudFormation, CloudTrail, IAM, KMS, Kinesis, API Gateway, Step Functions, Auto Scaling, SQS, SNS, and SES.','These names preview the course rather than explaining each product. A useful reading of the slide is to recognize the families: compute and containers, storage and databases, delivery and networking, monitoring and infrastructure automation, security, streaming and APIs, workflow, scaling, and messaging.'],
      slideTopics:[
        {heading:'Compute and application platforms',bullets:['Amazon EC2, Amazon ECR, Amazon ECS, Elastic Load Balancing, Elastic Beanstalk, AWS Lambda, and Auto Scaling.']},
        {heading:'Data services',bullets:['Amazon S3, Amazon RDS, Amazon DynamoDB, Amazon ElastiCache, and Amazon Aurora.']},
        {heading:'Networking, operations, and security',bullets:['Amazon CloudFront, Route 53, CloudWatch, CloudFormation, CloudTrail, IAM, and AWS KMS.']},
        {heading:'Integration and messaging',bullets:['Amazon Kinesis, API Gateway, Step Functions, SQS, SNS, and SES.']}
      ],
      takeaways:['The slide previews the named AWS services used throughout the course.','Services span compute, data, networking, operations, security, and integration.','Definitions and comparisons arrive in later sections.'],
      examTip:'Do not memorize the overview as one flat list; first recognize which service family a scenario is asking about.'
    },
    {
      ready:true,title:'Think like a solutions architect',sourcePages:'12',
      summary:'Understand the “AWS spaghetti bowl” warning: many service names overlap and only become clear through relationships and use cases.',
      explanation:['The supplied slide is titled “Navigating the AWS spaghetti bowl.” It visually communicates that AWS has many connected services and that the catalog can feel confusing when encountered as logos and names without an architecture context.','The purpose of the course is to untangle those relationships progressively. Later sections explain what each service does, which services integrate, and how to choose between nearby options. The slide itself does not present a formal decision framework or additional bullet points.'],
      slideTopics:[{heading:'AWS spaghetti bowl',bullets:['The large catalog is difficult to understand as isolated service logos.','Service relationships and architecture use cases provide the organizing structure.','The course will untangle the catalog section by section.']}],
      takeaways:['A large service catalog can look confusing initially.','Relationships are more useful than isolated names.','The deck promises progressive clarification rather than instant memorization.'],
      examTip:'When several unfamiliar services appear, first identify their broad category and the job each component performs.'
    },
    {
      ready:true,title:'Prepare for the first AWS building blocks',sourcePages:'3–5, 14',
      summary:'Follow the table of contents from AWS foundations into the full Solutions Architect syllabus.',
      explanation:['The table of contents starts with Getting Started with AWS, IAM, EC2 basics and associate-level compute, instance storage, high availability, databases, Route 53, architecture discussions, and the S3 and CloudFront storage-delivery sequence.','It then continues through messaging, containers, serverless, analytics, machine learning, monitoring, advanced identity, encryption and security, VPC networking, disaster recovery, solution patterns, supporting services, whitepapers, and exam preparation. Slide 14 marks the transition into “Getting started with AWS.”'],
      slideTopics:[
        {heading:'Foundation sequence',bullets:['Getting Started, IAM, EC2, storage, high availability, databases, Route 53, and S3.']},
        {heading:'Architecture and application sequence',bullets:['Messaging, containers, serverless, analytics, machine learning, monitoring, identity, security, VPC, and disaster recovery.']},
        {heading:'Course transition',bullets:['The next PDF divider is “Getting started with AWS.”']}
      ],
      takeaways:['The course follows a deliberate progression from foundations to architecture.','Networking, security, and operations reappear across later topics.','The next section begins with AWS history, use cases, and global infrastructure.'],
      examTip:'Use the table of contents as a dependency map: later designs build on IAM, networking, compute, storage, and resilience fundamentals.'
    }
  ];

  const legacySectionTwoLectures=[
    {
      ready:true,
      title:'Code & Slides Download',
      summary:'Organize the course resources so the slides, examples, and your own notes support active study. Use the supplied files for personal learning only.',
      explanation:[
        'Keep the course slides nearby as a reference while you study. The lesson reader should be your concise explanation layer, while the deck is useful for diagrams, service lists, and a quick visual review after completing a topic.',
        'When a lesson includes code or a configuration example, save your own working copy and annotate what each important setting changes. Do not treat a successful copy-and-paste as understanding: rebuild the example, change one input, and observe the result.',
        'Create a simple folder structure for slides, lab notes, screenshots, and architecture comparisons. The supplied deck is copyrighted course material, so keep it for personal study and do not publish or redistribute it with the study lab.'
      ],
      takeaways:[
        'Use slides as a visual reference, not as a substitute for explaining the concept yourself.',
        'Rebuild examples and record why each important setting exists.',
        'Keep supplied course files private and publish only your own notes and original summaries.'
      ],
      examTip:'Resource files help with review, but the exam tests decisions. Turn each diagram or code example into a question: which requirement does this component satisfy, and what tradeoff would make you choose something else?'
    }
  ];

  const legacySectionThreeLectures=[
    {
      ready:true,
      title:'AWS cloud overview and common use cases',
      summary:'Understand why organizations use AWS and how on-demand infrastructure supports applications of very different sizes.',
      explanation:[
        'AWS developed from Amazon solving its own infrastructure challenges into a public cloud platform. The important idea is not the timeline itself: reusable computing capabilities became services that customers can request without owning the underlying data centers.',
        'Organizations use AWS for web and mobile applications, enterprise systems, backup and storage, analytics, media, and gaming. These workloads need different combinations of compute, storage, databases, networking, and managed application services.',
        'Cloud resources can be provisioned when needed and adjusted as demand changes. This shortens the time required to experiment, but good architecture still requires deliberate choices about security, resilience, performance, operations, and cost.'
      ],
      takeaways:[
        'AWS provides reusable technology services on demand.',
        'Cloud use cases range from simple hosting to large data and enterprise platforms.',
        'Elastic access to resources improves speed, but does not replace architecture decisions.'
      ],
      examTip:'A scenario usually describes a workload goal rather than asking for cloud history. Translate that goal into requirements before selecting AWS services.'
    },
    {
      ready:true,
      title:'AWS Regions, Availability Zones, and edge locations',
      summary:'Learn the three geographic building blocks and use each one for the architectural problem it is designed to solve.',
      explanation:[
        'An AWS Region is a geographic area containing multiple Availability Zones. Most services and the resources you create in them are scoped to a selected Region, so Region choice becomes an early architecture decision.',
        'Choose a Region by checking data residency and compliance, proximity to users, required service availability, and price. A Region that is closest may reduce latency, but it is not suitable if it fails a legal or product requirement.',
        'Availability Zones are isolated locations within a Region, connected by high-bandwidth, low-latency networking. Distributing an application across AZs protects it from a single-location failure. Edge locations are a different layer: they bring cached content and network entry points closer to users to improve global delivery.'
      ],
      takeaways:[
        'A Region is the geographic scope for most AWS resources.',
        'Multiple Availability Zones provide isolation within one Region.',
        'Edge locations reduce delivery latency; they do not replace Regions or AZs.',
        'Compliance, latency, service availability, and price guide Region selection.'
      ],
      examTip:'“Highly available in one Region” usually points toward multiple Availability Zones. “Low latency for global users” often requires an edge service such as CloudFront.'
    },
    {
      ready:true,
      title:'Tour the AWS console and understand service scope',
      summary:'Navigate the management console safely and distinguish global services from resources tied to a selected Region.',
      explanation:[
        'The AWS Management Console is a graphical interface to AWS service APIs. Use the service search, account menu, and Region selector deliberately. Before creating or troubleshooting a resource, confirm both the active account and active Region.',
        'Some services operate globally, including core identity and global delivery services. Many workload services—including virtual servers, functions, and numerous data services—are Regional. Switching the console Region can therefore make a Regional resource appear to be missing even though it still exists elsewhere.',
        'The console is useful for learning and inspection, while command-line tools, SDKs, and infrastructure as code make repeatable operations possible. All of these interfaces ultimately request actions from AWS APIs and are governed by permissions.'
      ],
      takeaways:[
        'Always verify the account and Region before changing resources.',
        'Global and Regional services have different geographic behavior.',
        'The console, CLI, SDKs, and templates are different interfaces to AWS APIs.',
        'Permissions apply regardless of which interface sends the request.'
      ],
      examTip:'If a design copies a Regional workload to another Region, expect an explicit replication or deployment step. AWS does not automatically make every Regional resource global.'
    }
  ];

  const sectionTwoLectures=[
    {
      ready:true,title:'Code & Slides Download',sourcePages:'1–5',
      summary:'Use the supplied course resources within the personal-use limits stated in the deck and understand the syllabus they contain.',
      explanation:['The opening PDF pages contain course links, a copyright notice, and the full table of contents. The notice states that the slides are reserved for enrolled learners, must not be copied or redistributed, and remain the instructor’s intellectual property.','The contents pages outline the course from AWS foundations through IAM, EC2, storage, databases, networking, messaging, containers, serverless, analytics, security, disaster recovery, architecture reviews, and exam preparation. They are a syllabus index rather than lecture explanations.'],
      slideTopics:[
        {heading:'Resource and copyright notice',bullets:['The deck is supplied for the enrolled learner’s personal study.','Do not publish, copy, or redistribute the original slides.','The study lab should contain transformed notes, not the source PDF.']},
        {heading:'Table of contents',bullets:['Pages 3–5 enumerate the major AWS sections covered by the course.','The sequence moves from foundations to service architecture and final exam review.']}
      ],
      takeaways:['Keep the supplied PDF private.','Use the table of contents as the course index.','Publish original summaries rather than copied slide text or images.'],
      examTip:'The resource lesson is administrative; use the syllabus to locate a weak topic, then study the corresponding service section.'
    }
  ];

  const sectionThreeLectures=[
    {
      ready:true,title:'AWS cloud overview and common use cases',sourcePages:'14–17',
      summary:'Follow the deck’s AWS history, slide-era market facts, and list of common cloud workloads.',
      explanation:['The history slide traces Amazon’s internal infrastructure work in 2002–2003, the public launch of SQS in 2004, and the broader 2006 launch with SQS, S3, and EC2. It also marks later expansion into Europe and major enterprise usage milestones. These dates provide context for AWS’s development as a cloud platform.','The deck’s dated figures say AWS earned about $90 billion in 2023 and held roughly 31% of the cloud market in Q1 2024. Its use-case list includes enterprise IT, backup and storage, big data analytics, website hosting, mobile and social applications, and gaming. Treat the numbers as slide-era context, not permanent limits or current market data.'],
      slideTopics:[
        {heading:'History shown in the deck',bullets:['2002–2003: Amazon formalized internal infrastructure capabilities and the idea of offering them externally.','2004: SQS launched publicly.','2006: AWS relaunched with SQS, S3, and EC2.']},
        {heading:'Slide-era scale facts',bullets:['The slides cite approximately $90 billion in 2023 annual revenue.','They cite a 31% market share for Q1 2024 and describe AWS as a cloud pioneer and leader.']},
        {heading:'Cloud use cases',bullets:['Enterprise IT, backup and storage, big data analytics, websites, mobile and social applications, and gaming.']}
      ],
      takeaways:['AWS grew from Amazon’s internal infrastructure capabilities.','SQS, S3, and EC2 were early public services.','The course presents AWS as a platform for many workload types.'],
      examTip:'History and market figures are orientation material; architecture questions focus on matching a workload to services and constraints.'
    },
    {
      ready:true,title:'AWS Regions, Availability Zones, and edge locations',sourcePages:'18–22',
      summary:'Use the exact global-infrastructure hierarchy and Region-selection criteria introduced in the slides.',
      explanation:['The deck separates AWS global infrastructure into Regions, Availability Zones, data centers, and edge locations or points of presence. A Region is a geographic cluster of data centers, has a code such as us-east-1 or eu-west-3, and is the scope for most AWS services.','The slides select a Region by data-governance and legal requirements, proximity and latency, service availability, and pricing. Availability Zones are isolated groups of data centers within a Region connected by low-latency, high-bandwidth links. Edge locations and regional caches place content closer to users; the numeric edge counts on the slide are time-specific.'],
      slideTopics:[
        {heading:'AWS Region',bullets:['A geographic cluster of data centers.','Identified by codes such as us-east-1 and eu-west-3.','Most AWS services are Region-scoped.']},
        {heading:'How the deck chooses a Region',bullets:['Compliance and data-governance requirements.','Proximity to customers for lower latency.','Availability of required services.','Regional pricing differences.']},
        {heading:'Availability Zones',bullets:['Each AZ contains one or more discrete data centers with redundant power, networking, and connectivity.','AZs within a Region are isolated yet connected with fast, low-latency networking.']},
        {heading:'Points of presence',bullets:['Edge locations and regional caches improve content delivery to end users.','The deck’s location counts are dated capacity figures rather than architectural limits.']}
      ],
      takeaways:['Regions are geographic service scopes.','AZs provide isolated locations inside a Region.','Edge locations serve content closer to users.','Compliance, latency, service support, and price guide Region choice.'],
      examTip:'Multi-AZ answers address resilience within one Region; edge services address delivery near geographically distributed users.'
    },
    {
      ready:true,title:'Tour the AWS console and understand service scope',sourcePages:'23',
      summary:'Match the console-tour slide’s distinction between global services and Region-scoped workload services.',
      explanation:['The console-tour slide identifies IAM, Route 53, CloudFront, and WAF as global services for the purpose of the course overview. It contrasts them with Region-scoped services such as EC2, Elastic Beanstalk, Lambda, and Rekognition.','The practical lesson is to check the selected account and Region when using the console. A Regional resource can appear absent when the console is viewing another Region, while global-service configuration is not organized through the same regional resource switch.'],
      slideTopics:[
        {heading:'Global services named on the slide',bullets:['IAM, Route 53, CloudFront, and AWS WAF.']},
        {heading:'Regional services named on the slide',bullets:['Amazon EC2, Elastic Beanstalk, AWS Lambda, and Amazon Rekognition.']},
        {heading:'Console behavior',bullets:['Use the Region selector deliberately for Region-scoped services.','Verify the active account before creating or changing resources.']}
      ],
      takeaways:['The console exposes both global and Regional services.','Most workload resources belong to a selected Region.','A wrong Region selection can make a resource seem missing.'],
      examTip:'When a scenario requires another Region, expect explicit deployment or replication for Region-scoped resources.'
    }
  ];

  const sectionFourLectures=[
    {
      ready:true,title:'IAM foundations: identities and permissions',
      summary:'Build the core mental model for deciding who can make an AWS request and which actions the request may perform.',
      explanation:['AWS Identity and Access Management controls authentication and authorization. Authentication establishes who the caller is; authorization evaluates whether that identity may perform the requested action on the requested resource.','IAM is a global service. Its identities and policies are available across Regions, although the resources they authorize are often Regional. Start every access design by identifying the caller, required actions, target resources, and any conditions.'],
      takeaways:['Authentication identifies the caller.','Authorization decides whether a request is permitted.','IAM is global even when target resources are Regional.'],
      examTip:'Separate identity questions from resource questions. A valid login does not imply permission to use every AWS service.'
    },
    {
      ready:true,title:'Protect the AWS account root user',
      summary:'Reserve the root user for the small set of account tasks that cannot be delegated safely.',
      explanation:['The root user is created with the AWS account and has unrestricted account-level power. It is not an everyday administrator identity and should not be shared or used for routine service work.','Protect root with a unique strong password and MFA, avoid creating root access keys, and store its recovery details securely. Create delegated administrative identities for normal operations so activity can be attributed and limited.'],
      takeaways:['Root has unrestricted account authority.','Use root only for tasks that specifically require it.','Protect root with MFA and avoid root access keys.'],
      examTip:'When an answer proposes using root for normal administration or applications, eliminate it unless the scenario names a root-only account task.'
    },
    {
      ready:true,title:'IAM users and groups',
      summary:'Represent people with individual identities and manage common permissions through groups.',
      explanation:['An IAM user represents a person or, in legacy designs, a long-lived workload identity. Each person should have an individual identity so credentials and activity are not shared.','Groups are collections of users used to assign common permissions. A user may belong to multiple groups, users do not have to belong to a group, and groups cannot contain other groups.'],
      takeaways:['Use one identity per person.','Assign shared job permissions through groups.','Groups contain users, not other groups.'],
      examTip:'For a team of people with the same job function, attach permissions to a group instead of duplicating policies on every user.'
    },
    {
      ready:true,title:'Assign group membership with least privilege',
      summary:'Translate job responsibilities into group membership without accumulating unnecessary access.',
      explanation:['Design groups around stable job functions such as billing review, operations, or development. Users can join multiple groups when responsibilities overlap, and their effective permissions combine the applicable policies.','Review membership when responsibilities change. Least privilege is not a one-time configuration: access should be reduced when it is no longer required, particularly for temporary projects and privileged work.'],
      takeaways:['Model stable job functions with groups.','Multiple memberships combine applicable permissions.','Remove access when responsibilities end.'],
      examTip:'Choose the design that centralizes repeatable human permissions and minimizes direct per-user exceptions.'
    },
    {
      ready:true,title:'How IAM policies authorize requests',
      summary:'Understand policies as JSON rules that allow or deny actions against AWS resources.',
      explanation:['An IAM policy contains statements describing an effect, actions, resources, and optional conditions. Identity-based policies can be attached to users, groups, or roles to grant permissions to those identities.','AWS begins with an implicit deny. An applicable Allow is required, and an applicable explicit Deny overrides an Allow. This evaluation model lets guardrails remain effective even when another policy grants broad access.'],
      takeaways:['Policies describe effects, actions, resources, and conditions.','Requests are implicitly denied until allowed.','An explicit Deny overrides an Allow.'],
      examTip:'When policies conflict, look for an explicit Deny before adding together the Allow statements.'
    },
    {
      ready:true,title:'Read the structure of an IAM policy',
      summary:'Interpret the fields of a policy statement instead of treating the JSON document as opaque configuration.',
      explanation:['A policy document declares a language version and one or more statements. Each statement commonly contains Effect, Action, and Resource; Sid is an optional label, while Condition narrows when the statement applies.','Principal identifies the trusted identity in policy types that require it, such as role trust or resource-based policies. In an identity-based permissions policy, the principal is already implied by the identity to which the policy is attached.'],
      takeaways:['Statement is the required collection of permission rules.','Action names API operations and Resource narrows their targets.','Condition adds contextual restrictions such as source or tags.'],
      examTip:'Do not assume Principal belongs in every policy. First identify whether the question describes identity permissions, a resource policy, or a role trust policy.'
    },
    {
      ready:true,title:'Managed policies, inline policies, and inheritance',
      summary:'Choose a reusable or tightly coupled policy form and predict the permissions an identity receives.',
      explanation:['AWS managed policies are maintained by AWS, customer managed policies are reusable policies maintained in your account, and inline policies are embedded in one identity. Reusable customer managed policies are usually easier to govern consistently.','A user receives permissions from policies attached directly and from every group membership. A role receives its permissions from policies attached to the role. Effective access is the result of all applicable policy types and guardrails.'],
      takeaways:['Customer managed policies are reusable across identities.','Inline policies have a one-to-one relationship with an identity.','Effective permissions combine all applicable sources.'],
      examTip:'Prefer centrally managed reusable policies when the same permission set must be maintained for multiple identities.'
    },
    {
      ready:true,title:'Design least-privilege permissions',
      summary:'Narrow actions, resources, and conditions to the smallest access required for a task.',
      explanation:['Least privilege means granting only the permissions needed to perform defined work. Replace broad wildcards with specific API actions and resource ARNs whenever the service supports resource-level permissions.','Conditions can further limit access by factors such as network source, requested Region, resource tags, or required encryption. Begin with a narrow policy, test expected tasks, and expand only for a demonstrated need.'],
      takeaways:['Limit actions to required API operations.','Limit resources to intended targets.','Use conditions for contextual controls.'],
      examTip:'The most secure valid answer usually avoids Action "*" and Resource "*" unless the named API cannot be scoped more narrowly.'
    },
    {
      ready:true,title:'IAM password policies',
      summary:'Set an account-wide baseline for IAM user console passwords.',
      explanation:['An IAM password policy controls properties such as minimum length, character requirements, reuse prevention, expiration, and whether users may change their own password. It applies to IAM users in the account.','A strong password policy reduces weak credential risk, but passwords remain a single authentication factor. Combine the policy with MFA and prefer federated workforce access when centralized identity management is available.'],
      takeaways:['Password policy is configured at the account level.','It can enforce length, complexity, rotation, and reuse rules.','Password strength does not replace MFA.'],
      examTip:'If stolen passwords are the concern, MFA provides the decisive additional control; increasing password complexity alone is insufficient.'
    },
    {
      ready:true,title:'Multi-factor authentication',
      summary:'Require a second factor so a stolen password alone cannot authenticate a privileged user.',
      explanation:['MFA combines something the user knows with something the user possesses. After the password is entered, the user must provide a time-based code or use a supported security key.','Enable MFA for root and privileged identities first, then enforce it broadly. Policies can also require that a request was made using an MFA-authenticated session before allowing sensitive actions.'],
      takeaways:['MFA adds a possession factor to the password.','Protect root and privileged access first.','Policies can require MFA-authenticated sessions.'],
      examTip:'Choose MFA when a scenario asks how to protect an account after a password is compromised.'
    },
    {
      ready:true,title:'Choose and manage MFA devices',
      summary:'Compare virtual authenticators and hardware security devices while planning enrollment and recovery.',
      explanation:['AWS supports virtual authenticator applications and compatible hardware security devices. Hardware-backed options can resist phishing more effectively, while virtual authenticators are often easier to deploy at scale.','Device choice should include a recovery process. Losing the only enrolled device must not force insecure credential sharing, so keep account contacts current and document controlled recovery for administrators.'],
      takeaways:['Virtual and hardware MFA options serve different operational needs.','Security keys can provide strong phishing resistance.','Plan device replacement and account recovery before an incident.'],
      examTip:'The key exam concept is the second factor, not a particular vendor. Match device strength and operations to the stated requirement.'
    },
    {
      ready:true,title:'Console, CLI, and SDK access',
      summary:'Choose the correct AWS interface for interactive work, shell automation, or application code.',
      explanation:['The Management Console is a browser interface typically protected by a password and MFA. The AWS CLI sends service API requests from a command shell, while an AWS SDK lets application code call those APIs through language-specific libraries.','The interfaces expose many of the same AWS capabilities. Their main differences are how requests are created and how credentials are supplied, not a separate permissions model. IAM authorization still evaluates every request.'],
      takeaways:['Console supports interactive browser work.','CLI supports commands and scripts.','SDKs embed AWS API calls in applications.'],
      examTip:'Select CLI for shell automation and an SDK for application integration; neither bypasses IAM.'
    },
    {
      ready:true,title:'Access keys and credential safety',
      summary:'Treat long-lived programmatic credentials as secrets and avoid embedding them in code.',
      explanation:['An access key consists of an access key ID and a secret access key. The ID identifies the credential; the secret proves possession. Both belong to one IAM identity and the secret is normally displayed only when created.','Never publish keys, commit them to source control, or share one key between people. Prefer temporary credentials from roles. If a long-lived key is unavoidable, store it securely, rotate it, monitor its use, and remove it when no longer required.'],
      takeaways:['The secret access key must remain confidential.','Do not embed or commit credentials in source code.','Temporary role credentials are preferred for workloads.'],
      examTip:'An application running on AWS should normally use a role, not hard-coded IAM user access keys.'
    },
    {
      ready:true,title:'Configure and use the AWS CLI safely',
      summary:'Establish a predictable command-line workflow with explicit profiles, Regions, and output verification.',
      explanation:['The AWS CLI translates shell commands into signed AWS API requests. Configuration commonly includes a credential source, default Region, and output format; named profiles can separate accounts or roles.','Before running a modifying command, verify the active identity and Region. Use read-only commands first, inspect the result, and avoid placing secrets directly in command history or scripts.'],
      takeaways:['CLI commands call public AWS service APIs.','Profiles help separate identities and environments.','Verify identity and Region before changing resources.'],
      examTip:'CLI access is authorized by the caller credentials. Installing the CLI grants no permissions by itself.'
    },
    {
      ready:true,title:'Use AWS CloudShell for browser-based commands',
      summary:'Run authenticated AWS CLI commands from the console without managing a local CLI installation.',
      explanation:['AWS CloudShell provides a browser-based shell with common tools and AWS CLI access. It uses the permissions of the signed-in console identity, which avoids copying a separate long-lived access key into the environment.','CloudShell is convenient for short administrative commands and learning. For production automation, use controlled pipelines, roles, and repeatable scripts rather than depending on an interactive shell session.'],
      takeaways:['CloudShell is launched from the AWS console.','It inherits the signed-in identity permissions.','It is useful for interactive work, not a replacement for automation pipelines.'],
      examTip:'CloudShell simplifies CLI access, but the same IAM authorization rules and Region awareness still apply.'
    },
    {
      ready:true,title:'Use AWS SDKs in application code',
      summary:'Call AWS services through language libraries while keeping credentials outside the application source.',
      explanation:['AWS SDKs provide language-specific clients, request models, retry behavior, and credential discovery. Applications use them to call services such as S3, DynamoDB, SQS, or Secrets Manager.','Use the default credential provider chain so code can obtain temporary credentials from its runtime role. This keeps the application portable across local development, AWS compute, and controlled deployment environments.'],
      takeaways:['SDKs provide language-specific AWS service clients.','Credential provider chains keep secrets out of code.','Runtime roles supply temporary credentials on AWS.'],
      examTip:'When code on EC2 or Lambda needs AWS access, attach a role and let the SDK retrieve temporary credentials automatically.'
    },
    {
      ready:true,title:'IAM roles for AWS services',
      summary:'Delegate permissions to a service through temporary credentials instead of attaching permanent keys to a workload.',
      explanation:['An IAM role is an assumable identity with permissions but no long-term password or access key. AWS services such as EC2, Lambda, and CloudFormation can assume a role to act on your behalf.','Attach only the workload permissions the service needs. The service obtains and refreshes temporary credentials, removing the need for credentials stored in an image, environment file, or code repository.'],
      takeaways:['Roles are assumed identities without long-lived credentials.','AWS services use roles to call other services.','Temporary credentials are delivered and rotated automatically.'],
      examTip:'For AWS-to-AWS access, a service role is almost always safer than an IAM user key.'
    },
    {
      ready:true,title:'Role trust policies and permission policies',
      summary:'Separate who may assume a role from what the role may do after assumption.',
      explanation:['A role trust policy defines the principals allowed to assume the role. Its permission policies define the AWS actions available to the resulting role session. Both sides must be correct for delegated access to work.','This separation supports AWS services, cross-account access, and federated users. Narrow the trusted principals and conditions, then grant the assumed role only the permissions required for its task.'],
      takeaways:['Trust policy controls who may assume the role.','Permission policies control actions after assumption.','Role sessions use temporary credentials.'],
      examTip:'If AssumeRole is denied, inspect trust. If assumption succeeds but an AWS action fails, inspect the role permissions and other guardrails.'
    },
    {
      ready:true,title:'Audit credentials and permissions',
      summary:'Use IAM security reports to find stale credentials and permissions that can be removed.',
      explanation:['The account-level credential report lists IAM users and the status or age of credentials such as passwords, access keys, and MFA. It supports periodic reviews for unused or weak authentication.','Access Advisor shows services an identity is allowed to use and when they were last accessed. Use that evidence carefully to reduce permissions, accounting for infrequent but legitimate operational tasks.'],
      takeaways:['Credential report audits user credential status account-wide.','Access Advisor shows service access history for an identity.','Audit results support credential cleanup and least privilege.'],
      examTip:'Choose the credential report for account-wide credential status and Access Advisor for deciding which granted service permissions may be unused.'
    },
    {
      ready:true,title:'IAM review and security decision rules',
      summary:'Combine users, groups, policies, roles, MFA, and audit tools into a secure identity strategy.',
      explanation:['Use individual or federated identities for people, groups or centralized permission sets for job access, and roles for workloads. Protect interactive access with strong authentication and protect programmatic access by preferring temporary credentials.','Review policies and credentials continuously. Remove unused users and keys, narrow permissions, monitor privileged access, and keep root reserved for exceptional account tasks.'],
      takeaways:['People need attributable identities and MFA.','Workloads should use roles and temporary credentials.','Least privilege requires ongoing auditing and cleanup.'],
      examTip:'Map the requirement to the IAM control: MFA protects login, policies authorize actions, roles delegate temporary access, and reports support auditing.'
    }
  ];

  const sectionFiveLectures=[
    {
      ready:true,title:'Amazon EC2 and infrastructure as a service',
      summary:'Understand EC2 as configurable virtual compute and place it within the larger set of services used to run an application.',
      explanation:['Amazon EC2 provides resizable virtual machines. You select the machine image, compute size, network placement, storage, and security controls while AWS operates the physical infrastructure.','A production EC2 design commonly combines instances with EBS storage, load balancing, and Auto Scaling. EC2 offers flexibility, but the customer remains responsible for the guest operating system, installed software, and workload configuration.'],
      takeaways:['EC2 provides virtual machines as infrastructure as a service.','You control the guest OS and workload configuration.','Storage, load balancing, and scaling are separate design choices.'],
      examTip:'Choose EC2 when the workload requires operating-system control or software that does not fit a more managed compute service.'
    },
    {
      ready:true,title:'Configure an EC2 instance',
      summary:'Translate workload needs into an image, instance size, storage, networking, and firewall configuration.',
      explanation:['An EC2 launch begins with an Amazon Machine Image that supplies the operating system and initial software. The instance type defines CPU, memory, networking, and sometimes local storage capacity.','Network placement determines the VPC, subnet, and addressing. EBS volumes provide network-attached block storage, instance store provides temporary local disks on supported types, and security groups control allowed traffic.'],
      takeaways:['The AMI supplies the starting operating system and software.','Instance type controls the compute resource profile.','Subnet, storage, and security groups complete the launch design.'],
      examTip:'Do not choose an instance type from CPU alone; memory, network, storage, and architecture requirements can change the correct family.'
    },
    {
      ready:true,title:'Bootstrap instances with EC2 user data',
      summary:'Automate first-boot configuration so newly launched instances become consistent application servers.',
      explanation:['EC2 user data supplies a script or cloud-init configuration that runs during the initial boot by default. It can install packages, download configuration, start services, and register the instance with other systems.','User-data code runs with powerful operating-system privileges, so keep secrets out of the script and make commands safe to retry. For continuing configuration management, use images, Systems Manager, or deployment tooling rather than treating first boot as a full lifecycle manager.'],
      takeaways:['User data automates instance bootstrap.','It normally runs on the first launch.','Avoid placing credentials and other secrets in user data.'],
      examTip:'Use user data when an Auto Scaling group must configure every replacement instance automatically at launch.'
    },
    {
      ready:true,title:'Launch and manage an EC2 instance',
      summary:'Follow the resource lifecycle and distinguish stopping, rebooting, and terminating a virtual server.',
      explanation:['At launch, verify the Region, AMI, instance type, key or connection method, subnet, security group, storage, and user data. Test the application through only the network path that should be allowed.','A reboot keeps the instance on its host in normal circumstances. Stop and start may place an EBS-backed instance on new hardware and can change its auto-assigned public IPv4 address. Termination removes the instance and may delete volumes configured for deletion.'],
      takeaways:['Review placement, security, storage, and bootstrap before launch.','Stop/start differs from an operating-system reboot.','Termination can delete attached root storage.'],
      examTip:'If an application needs a stable public IPv4 address across stop/start, use an Elastic IP or a stable front door rather than relying on the auto-assigned address.'
    },
    {
      ready:true,title:'Read EC2 instance type names',
      summary:'Decode instance family, generation, capabilities, and size from an EC2 type name.',
      explanation:['An instance type name identifies a family and a size. The family letter points to a workload profile, the generation number tracks hardware evolution, and suffixes can identify processors, accelerators, local disks, or enhanced features.','Size scales resources within a family, but scaling is not perfectly interchangeable across every characteristic. Check current AWS specifications for CPU architecture, memory, network bandwidth, EBS bandwidth, and local storage.'],
      takeaways:['Family represents the workload profile.','Generation identifies a version of the family.','Size and suffixes communicate capacity and special capabilities.'],
      examTip:'Recognize the family intent; exact model specifications change and are usually provided when a scenario depends on them.'
    },
    {
      ready:true,title:'Choose an EC2 instance family',
      summary:'Match general, compute, memory, and storage-optimized families to the dominant workload constraint.',
      explanation:['General-purpose instances balance CPU, memory, and networking. Compute-optimized families suit CPU-bound processing; memory-optimized families suit large in-memory datasets; storage-optimized families provide high local storage throughput or IOPS.','Start with measured workload behavior rather than a familiar family name. A database may be memory-bound, storage-bound, or balanced depending on its working set and access pattern, so monitoring should guide rightsizing.'],
      takeaways:['General purpose balances common resources.','Compute and memory families target their named bottlenecks.','Storage-optimized instances target intensive local data access.'],
      examTip:'Keywords such as high-performance processors, large in-memory cache, or high sequential local I/O point to different optimized families.'
    },
    {
      ready:true,title:'Right-size EC2 capacity',
      summary:'Select enough CPU, memory, network, and storage bandwidth without paying for consistently idle capacity.',
      explanation:['Instance sizes within a family offer different resource levels. Evaluate CPU utilization, memory pressure, network throughput, EBS bandwidth, latency, and burst behavior before moving up or down.','Vertical scaling changes the size of one instance and may require interruption. Horizontal scaling distributes work across more instances and is often the better resilience model for stateless applications.'],
      takeaways:['Measure all important resource dimensions.','Rightsizing reduces cost and performance risk.','Horizontal scaling can improve both capacity and resilience.'],
      examTip:'For a stateless web tier with changing demand, prefer load balancing and horizontal Auto Scaling over one permanently oversized instance.'
    },
    {
      ready:true,title:'Security group fundamentals',
      summary:'Use stateful virtual firewalls to allow only required inbound and outbound traffic.',
      explanation:['A security group is attached to an elastic network interface and contains allow rules. Inbound rules identify permitted sources and destination ports; outbound rules identify permitted destinations. There are no explicit deny rules.','Security groups are stateful: response traffic for an allowed connection is automatically permitted. New groups deny inbound traffic by default and commonly allow outbound traffic by default until you tighten the rules.'],
      takeaways:['Security groups contain allow rules only.','They filter traffic at the network interface.','Stateful behavior automatically permits response traffic.'],
      examTip:'Do not add a separate inbound rule for return traffic from a connection the instance initiated; state tracking handles the response.'
    },
    {
      ready:true,title:'Reference security groups in layered architectures',
      summary:'Authorize traffic by workload identity instead of maintaining changing lists of private IP addresses.',
      explanation:['A security group rule can reference another security group as its source or destination. A database group can therefore allow its port from the application group, regardless of which current application instance addresses are attached to that group.','The reference does not copy rules or create network connectivity. Routing must already exist, and the rule applies to private network traffic associated with matching group membership.'],
      takeaways:['Group references follow workload membership, not fixed IPs.','They are useful between load balancer, application, and database tiers.','Security group rules do not create routes.'],
      examTip:'For an Auto Scaling application tier accessing a database, reference the application security group instead of its changing instance IP addresses.'
    },
    {
      ready:true,title:'Diagnose security group and application failures',
      summary:'Use connection symptoms to separate blocked network traffic from a service that is not listening.',
      explanation:['A connection timeout often indicates that traffic is being dropped by a security group, network ACL, route, or host firewall. A connection-refused response usually means the host was reached but no application accepted the target port.','Check the entire path: DNS and address, route, security rules, operating-system firewall, listening process, and application health. Avoid opening broad access as a troubleshooting shortcut.'],
      takeaways:['Timeout commonly indicates a blocked or unreachable path.','Connection refused commonly indicates an application or listening-port issue.','Troubleshoot the path layer by layer.'],
      examTip:'Security groups are Region/VPC scoped and sit outside the guest OS, so blocked packets may never reach instance logs.'
    },
    {
      ready:true,title:'Recognize common network ports',
      summary:'Associate standard administration and web protocols with their default ports while keeping access narrow.',
      explanation:['SSH and SFTP commonly use TCP 22, HTTP uses 80, HTTPS uses 443, and Windows Remote Desktop uses 3389. FTP control traditionally uses 21 but introduces additional connection behavior that must be considered.','A port number identifies an expected protocol endpoint, not a security guarantee. Prefer encrypted protocols, restrict administrative ports to controlled sources, and expose only ports the application actually serves.'],
      takeaways:['SSH and SFTP commonly use port 22.','HTTP uses 80 and HTTPS uses 443.','RDP commonly uses port 3389.'],
      examTip:'Public web servers normally allow 80/443 from clients; administrative ports should not be open to the entire internet.'
    },
    {
      ready:true,title:'Connect to Linux instances securely',
      summary:'Compare SSH and browser-based EC2 Instance Connect while preserving key and network security.',
      explanation:['Traditional SSH uses a private key held by the administrator and requires reachability to port 22. Protect the private key file, use the correct operating-system username, and restrict the security-group source.','EC2 Instance Connect can push a temporary public key and open a browser-based terminal for supported configurations, but the network path and IAM authorization still matter. Systems Manager Session Manager can remove the need for inbound SSH in suitable managed environments.'],
      takeaways:['SSH requires a protected private key and reachable port 22.','Instance Connect uses temporary key material in supported setups.','Session Manager can provide administration without inbound SSH.'],
      examTip:'For secure administration without public IPs or open port 22, look for Systems Manager Session Manager when its prerequisites are available.'
    },
    {
      ready:true,title:'Choose between On-Demand and Reserved pricing',
      summary:'Use flexible pricing for uncertain workloads and commitments for stable, predictable usage.',
      explanation:['On-Demand Instances have no long-term commitment and suit short-lived, unpredictable, or newly launched workloads. Their flexibility comes with a higher unit price than committed models.','Reserved Instance billing discounts suit steady-state usage over a one- or three-year term. Standard reservations offer stronger discounts with less flexibility, while convertible reservations allow more attribute changes with a different discount profile.'],
      takeaways:['On-Demand prioritizes flexibility.','Reservations target predictable long-term usage.','Commitment length and flexibility affect the discount.'],
      examTip:'A continuously running, stable database is a classic commitment candidate; a short uncertain experiment is an On-Demand candidate.'
    },
    {
      ready:true,title:'Use EC2 Savings Plans',
      summary:'Commit to a level of compute spend while retaining more usage flexibility than a narrowly scoped reservation.',
      explanation:['Savings Plans exchange a one- or three-year hourly spend commitment for discounted eligible compute usage. Matching usage consumes the commitment and additional usage is billed at normal rates.','The exact flexibility depends on the plan type, but the architectural idea is consistent: it is a billing commitment, not a capacity reservation. Capacity availability must be solved separately when a workload requires guaranteed placement.'],
      takeaways:['Savings Plans are spend commitments.','They discount matching compute usage.','They do not reserve physical capacity.'],
      examTip:'Separate cost optimization from capacity assurance: a Savings Plan lowers eligible cost, while an On-Demand Capacity Reservation holds capacity.'
    },
    {
      ready:true,title:'Run interruption-tolerant work on Spot Instances',
      summary:'Trade interruption risk for deep discounts on spare EC2 capacity.',
      explanation:['Spot Instances use spare AWS capacity at a variable discount and can be interrupted when the capacity is reclaimed. Design workers to checkpoint, retry, drain, and distribute work across capacity pools.','Good candidates include batch processing, analytics, media conversion, testing, and fault-tolerant distributed workloads. A single critical database or an uncheckpointed long-running job is a poor fit.'],
      takeaways:['Spot capacity can be interrupted.','Fault-tolerant and flexible workloads are suitable.','Checkpointing and diversified capacity reduce interruption impact.'],
      examTip:'Choose Spot for the lowest-cost flexible batch workload, not when the scenario requires uninterrupted single-instance execution.'
    },
    {
      ready:true,title:'Dedicated tenancy, capacity reservations, and Spot fleets',
      summary:'Distinguish hardware isolation, guaranteed AZ capacity, and diversified spare-capacity provisioning.',
      explanation:['Dedicated Hosts allocate an entire physical server and expose placement information useful for server-bound licenses or strict compliance. Dedicated Instances run on single-tenant hardware without the same host-level placement control. Capacity Reservations hold capacity in one Availability Zone but provide no discount by themselves.','A Spot Fleet requests target capacity from multiple Spot—and optionally On-Demand—pools. Allocation strategies can emphasize available capacity, price, or diversification; capacity-aware diversification generally reduces interruptions better than selecting one cheapest pool.'],
      takeaways:['Dedicated Hosts support host-level control and licensing.','Capacity Reservations guarantee capacity in a specific AZ.','Spot Fleets diversify capacity across launch pools.'],
      examTip:'Match the requirement precisely: licensing and sockets suggest Dedicated Hosts, guaranteed placement suggests Capacity Reservations, and resilient low-cost fleets suggest Spot diversification.'
    }
  ];

  const sectionSixLectures=[
    {
      ready:true,title:'Public and private IP addressing on EC2',
      summary:'Distinguish internet-routable addresses from VPC-local addresses and understand how each participates in an EC2 connection.',
      explanation:['A private IP identifies an interface inside its VPC and can be reused in unrelated private networks. A public IP is internet-routable and must be globally unique while assigned. IPv4 remains common, while IPv6 provides a much larger address space and different end-to-end routing possibilities.','An EC2 instance communicates internally through its private address. A public IPv4 address is mapped to that private address through AWS network infrastructure; it does not replace the interface private IP. Routing and security rules must still permit the traffic.'],
      takeaways:['Private addresses are unique only within their private network.','Public addresses are globally routable while assigned.','Addressing, routes, and security controls must all support a connection.'],
      examTip:'Private-subnet instances normally use private addresses and controlled egress; public addressing alone does not make an instance reachable.'
    },
    {
      ready:true,title:'Elastic IP addresses and stable endpoints',
      summary:'Use a static public IPv4 address only when a workload truly requires address-level continuity.',
      explanation:['An automatically assigned public IPv4 address can change after an instance is stopped and started. An Elastic IP is an account-allocated public IPv4 address that can be associated with an interface and remapped when necessary.','Elastic IPs are scarce and often couple clients to one instance. DNS, load balancers, and resilient multi-instance designs are usually better public entry points, while Elastic IPs remain useful for explicit allowlists or legacy protocols that require fixed addresses.'],
      takeaways:['Auto-assigned public IPv4 addresses can change after stop/start.','Elastic IPs remain allocated until released.','Prefer DNS and load balancing for resilient application endpoints.'],
      examTip:'A fixed allowlisted IPv4 may justify an Elastic IP; high availability for a web application usually points to a load balancer instead.'
    },
    {
      ready:true,title:'Placement group strategy overview',
      summary:'Control how EC2 instances share or avoid underlying infrastructure when latency, isolation, or scale dominates.',
      explanation:['Placement groups influence physical placement beyond choosing an Availability Zone. Cluster placement keeps instances close, spread placement isolates a small number of critical instances, and partition placement separates large distributed fleets into rack groups.','The strategies optimize different properties and cannot be treated as interchangeable. Begin with the failure domain and network requirement, then select a strategy supported by the instance types and topology.'],
      takeaways:['Cluster optimizes proximity and network performance.','Spread maximizes hardware isolation for a small fleet.','Partition exposes large logical failure domains.'],
      examTip:'Match the named requirement—lowest latency, isolated critical instances, or rack-aware distributed systems—to the corresponding placement strategy.'
    },
    {
      ready:true,title:'Cluster placement groups',
      summary:'Place tightly coupled instances near one another for high throughput and low network latency.',
      explanation:['A cluster placement group packs supported instances into a low-latency arrangement within one Availability Zone. It suits tightly coupled computation, high-performance analytics, and workloads that exchange large amounts of data between nodes.','The performance advantage concentrates risk: an Availability Zone disruption can affect the entire group. Capacity can also be easier to obtain when the fleet is launched together with consistent instance types.'],
      takeaways:['Cluster placement stays within one Availability Zone.','It targets high inter-instance network performance.','Concentrated placement increases correlated failure risk.'],
      examTip:'Choose cluster placement for tightly coupled HPC, not for a request to survive an Availability Zone failure.'
    },
    {
      ready:true,title:'Spread placement groups',
      summary:'Keep a small set of critical instances on distinct underlying hardware to reduce simultaneous failure.',
      explanation:['A spread placement group distributes instances across distinct hardware and can span Availability Zones. It suits a limited number of individually important instances where sharing a rack is an unacceptable correlated risk.','Spread placement has a low per-AZ instance limit, so it is not designed for hundreds of interchangeable workers. Use multiple AZs as well when the requirement includes location-level resilience.'],
      takeaways:['Spread instances use distinct underlying hardware.','The group can span multiple Availability Zones.','Strict per-AZ limits make it suitable for small critical fleets.'],
      examTip:'A handful of critical instances that must not share hardware points to spread placement.'
    },
    {
      ready:true,title:'Partition placement groups',
      summary:'Divide a large distributed fleet into rack-level failure domains that applications can recognize.',
      explanation:['Partition placement separates instances into logical partitions backed by different racks. A rack failure may affect one partition but should not affect the others, and the application can retrieve partition information from instance metadata.','This model suits rack-aware distributed systems such as large data stores and streaming clusters. Application replicas should be distributed across partitions so one failure domain does not contain every copy of data.'],
      takeaways:['Partitions represent distinct rack groups.','The strategy scales to large distributed fleets.','Applications can use partition metadata for replica placement.'],
      examTip:'Choose partition placement for Hadoop-, Cassandra-, or Kafka-style systems that need explicit rack-aware failure domains.'
    },
    {
      ready:true,title:'Elastic Network Interfaces',
      summary:'Treat the ENI as the VPC network identity that carries addresses, security groups, and a MAC address.',
      explanation:['An Elastic Network Interface is a virtual network card with a primary private IPv4 address, optional secondary addresses, security groups, and other interface attributes. Public and Elastic IPv4 mappings relate to its private addresses.','Additional ENIs can support management networks, network appliances, or failover patterns. An ENI is bound to an Availability Zone, so it can move between compatible instances in that AZ but not across AZ boundaries.'],
      takeaways:['An ENI holds VPC addresses and security-group associations.','An instance can use multiple interfaces.','An ENI is scoped to one Availability Zone.'],
      examTip:'Moving an ENI can preserve a private network identity during same-AZ failover, but it is not a cross-AZ resilience mechanism.'
    },
    {
      ready:true,title:'EC2 stop, start, reboot, and terminate behavior',
      summary:'Predict which compute, memory, addressing, and EBS state survives each instance lifecycle action.',
      explanation:['A reboot restarts the guest operating system. Stopping an EBS-backed instance releases its compute while retaining attached EBS data; a later start may use new physical hardware and a new auto-assigned public IPv4 address.','Termination permanently removes the instance and deletes volumes whose delete-on-termination flag is enabled. Instance-store data is ephemeral and does not survive stop or termination, so durable state belongs on persistent storage or managed services.'],
      takeaways:['Stop preserves EBS but releases running compute.','Auto-assigned public IPv4 can change after stop/start.','Termination and instance-store loss require deliberate data protection.'],
      examTip:'Check both volume type and delete-on-termination settings before deciding whether data survives a lifecycle event.'
    },
    {
      ready:true,title:'EC2 hibernation',
      summary:'Persist an instance memory image to encrypted EBS so a slow-to-initialize workload can resume faster.',
      explanation:['Hibernation writes RAM contents to the root EBS volume before the instance stops. On resume, the operating system and in-memory application state are restored instead of beginning a normal cold boot.','The root volume must be encrypted and large enough for the memory image, and the instance, AMI, and other attributes must support hibernation. It helps long initialization or in-memory processing but does not replace application-level durability or high availability.'],
      takeaways:['Hibernation preserves RAM state on the root EBS volume.','The root EBS volume must be encrypted and adequately sized.','Support and hibernation duration have platform constraints.'],
      examTip:'Choose hibernation for faster resume with preserved memory, not as a disaster-recovery or multi-AZ solution.'
    }
  ];

  const sectionSevenLectures=[
    {
      ready:true,title:'Amazon EBS volume fundamentals',
      summary:'Use durable network-attached block storage for EC2 boot volumes and application data.',
      explanation:['Amazon Elastic Block Store provides virtual block devices that an operating system formats and mounts like disks. Data persists independently of the running compute lifecycle, subject to the volume deletion configuration.','An EBS volume is provisioned with capacity and performance characteristics and resides in one Availability Zone. It can be detached and attached to a compatible instance in that AZ, making compute replacement independent from persistent disk data.'],
      takeaways:['EBS is network-attached block storage.','Volumes are scoped to one Availability Zone.','Provisioned capacity is billed even when unattached.'],
      examTip:'Choose EBS when one EC2 instance needs a persistent disk; choose a shared file service when many instances need the same filesystem.'
    },
    {
      ready:true,title:'Attach, move, and retain EBS volumes',
      summary:'Manage the Availability Zone boundary and deletion settings that determine where a volume can attach and whether it survives termination.',
      explanation:['A volume attaches only to instances in its own Availability Zone. To move its data to another AZ or Region, create a snapshot and restore or copy that snapshot into the destination.','Delete on termination is an attachment setting. Root volumes commonly default to deletion when the instance terminates, while additional data volumes commonly persist; verify and change the flag when data-retention requirements differ.'],
      takeaways:['Direct attachment cannot cross Availability Zones.','Snapshots move EBS data across AZ or Region boundaries.','Delete on termination is configurable per attachment.'],
      examTip:'To preserve a root disk after instance termination, disable its delete-on-termination setting before the instance is removed.'
    },
    {
      ready:true,title:'Create and restore EBS snapshots',
      summary:'Capture point-in-time block backups and restore them as new volumes in the required location.',
      explanation:['An EBS snapshot is a point-in-time backup stored by AWS. Snapshots are incremental after the first backup, although each snapshot can be used as a complete restore point.','A snapshot can be taken while a volume is attached, but application-consistent backup may require flushing writes or briefly pausing the workload. Restoring creates a new EBS volume, which can use a different size or Availability Zone.'],
      takeaways:['Snapshots are point-in-time EBS backups.','Later snapshots store changed blocks incrementally.','Restores create new volumes rather than modifying the source.'],
      examTip:'Use snapshots—not direct volume attachment—to copy an EBS dataset into another Availability Zone.'
    },
    {
      ready:true,title:'Archive, protect, and accelerate snapshots',
      summary:'Choose snapshot archive, Recycle Bin, or Fast Snapshot Restore for different cost, recovery, and performance goals.',
      explanation:['Snapshot Archive lowers storage cost for long-retention backups but adds a substantial restore delay. Recycle Bin retention rules protect deleted snapshots from immediate permanent loss and support recovery from accidental deletion.','Volumes restored from normal snapshots may initialize blocks as they are first read. Fast Snapshot Restore prepares supported snapshots in selected Availability Zones so new volumes deliver full performance immediately, at additional cost.'],
      takeaways:['Archive trades lower cost for slower restore.','Recycle Bin adds deletion recovery retention.','Fast Snapshot Restore removes first-access initialization latency.'],
      examTip:'Match the requirement: cheap long retention suggests Archive, accidental deletion protection suggests Recycle Bin, and immediate full disk performance suggests FSR.'
    },
    {
      ready:true,title:'Build reusable Amazon Machine Images',
      summary:'Package an operating system and preinstalled software into a repeatable EC2 launch image.',
      explanation:['An Amazon Machine Image defines the operating-system template, launch permissions, and block-device mappings for EC2 instances. A custom AMI can preinstall application dependencies and monitoring agents to reduce launch configuration time.','Creating an EBS-backed AMI produces snapshots of its configured volumes. AMIs are Regional resources but can be copied across Regions; use controlled image pipelines to patch, test, and replace images rather than modifying production servers manually.'],
      takeaways:['AMIs are templates for launching EC2 instances.','Custom AMIs reduce repeated bootstrap work.','AMI copies support consistent multi-Region deployment.'],
      examTip:'Use a prebuilt AMI when instances must launch quickly and consistently; use user data for smaller environment-specific configuration.'
    },
    {
      ready:true,title:'Use EC2 instance store for ephemeral data',
      summary:'Exploit very fast local disks only for data that can be lost and rebuilt.',
      explanation:['Instance store volumes are physically attached to the host running an EC2 instance and can provide high local I/O performance. Availability and capacity depend on the chosen instance type.','Instance-store data is ephemeral: it can be lost when the instance stops, terminates, or its host fails. Suitable data includes caches, buffers, scratch files, and replicated shards; durable copies must live elsewhere.'],
      takeaways:['Instance store is local to the EC2 host.','Its data does not survive stop or host loss.','Applications must replicate or rebuild important data.'],
      examTip:'Choose instance store for the fastest temporary scratch space, never as the only copy of irreplaceable data.'
    },
    {
      ready:true,title:'Choose an EBS volume family',
      summary:'Select SSD or HDD storage according to IOPS, throughput, latency, boot, and cost requirements.',
      explanation:['EBS SSD families serve transactional and boot workloads where small random I/O and low latency matter. Provisioned IOPS SSD targets sustained high-performance databases, while general-purpose SSD balances performance and cost.','HDD families optimize large sequential throughput at lower cost and cannot be boot volumes. Evaluate size, IOPS, throughput, latency consistency, durability, and current platform limits rather than choosing by capacity alone.'],
      takeaways:['SSD suits transactional and boot workloads.','HDD suits large sequential throughput.','Only supported SSD families can serve as boot volumes.'],
      examTip:'Database IOPS, log-stream throughput, and cheap cold sequential access point to different volume families.'
    },
    {
      ready:true,title:'General Purpose SSD: gp3 and gp2',
      summary:'Use gp3 for flexible baseline storage and understand the older gp2 size-to-performance relationship.',
      explanation:['General Purpose SSD is the default fit for boot volumes, development systems, virtual desktops, and many application disks. gp3 lets capacity, IOPS, and throughput be configured more independently.','With gp2, baseline IOPS scales with volume size and smaller volumes can burst using credits. This coupling sometimes forced overprovisioning capacity just to gain performance, which gp3 often avoids.'],
      takeaways:['gp3 separates performance tuning from capacity more effectively.','gp2 performance is linked to volume size.','General Purpose SSD fits broad low-latency workloads.'],
      examTip:'When a workload needs more IOPS without more storage, gp3 is usually the cleaner general-purpose choice.'
    },
    {
      ready:true,title:'Provisioned IOPS SSD: io1 and io2',
      summary:'Provide sustained high IOPS and consistent low latency for critical transactional systems.',
      explanation:['Provisioned IOPS volumes let architects request a defined IOPS level independently within size and ratio limits. They suit latency-sensitive databases and applications whose required performance exceeds general-purpose limits.','io2 and its Block Express capabilities offer higher durability and performance ceilings on supported configurations. Exact limits evolve, so the exam-relevant decision is the need for sustained, provisioned transactional performance.'],
      takeaways:['Provisioned IOPS targets critical transactional workloads.','IOPS can be configured independently within platform ratios.','io2 provides higher durability and advanced performance options.'],
      examTip:'A mission-critical database requiring sustained IOPS and low latency points to Provisioned IOPS SSD.'
    },
    {
      ready:true,title:'Throughput Optimized and Cold HDD',
      summary:'Reduce cost for large sequential data access while avoiding HDD for random-I/O or boot workloads.',
      explanation:['Throughput Optimized HDD is designed for frequently accessed, throughput-intensive datasets such as logs, big-data processing, and data warehouses. Its strength is megabytes per second rather than small random IOPS.','Cold HDD costs less for infrequently accessed sequential data where low storage price dominates. Neither HDD family supports boot volumes, and both are poor fits for transactional databases.'],
      takeaways:['st1 targets frequent sequential throughput.','sc1 targets colder sequential data at the lowest HDD cost.','HDD volumes cannot be EC2 boot volumes.'],
      examTip:'Large streaming log files suggest st1; infrequently accessed sequential archives may suggest sc1.'
    },
    {
      ready:true,title:'EBS Multi-Attach',
      summary:'Attach one supported Provisioned IOPS volume to a small cluster in the same Availability Zone.',
      explanation:['EBS Multi-Attach allows a supported io1 or io2 volume to connect to multiple compatible EC2 instances in one Availability Zone. Every attached instance can issue reads and writes.','The application must coordinate concurrent access using a cluster-aware filesystem or storage layer. A normal single-host filesystem can corrupt data, and Multi-Attach does not create multi-AZ storage resilience.'],
      takeaways:['Multi-Attach uses supported Provisioned IOPS volumes.','All instances must be in the same Availability Zone.','Concurrent writers require cluster-aware coordination.'],
      examTip:'Do not choose Multi-Attach for ordinary shared Linux files across AZs; EFS is the managed shared-file answer.'
    },
    {
      ready:true,title:'Encrypt EBS volumes and snapshots',
      summary:'Protect block data transparently with KMS-backed encryption across volumes, snapshots, and restores.',
      explanation:['Encrypted EBS protects data at rest, data moving between supported instances and volumes, snapshots, and volumes restored from those snapshots. AWS performs encryption transparently using KMS keys.','To migrate an unencrypted volume, snapshot it, copy the snapshot while enabling encryption, and create a new encrypted volume. Permissions to the KMS key must accompany permissions to use the encrypted storage.'],
      takeaways:['EBS encryption covers volumes, transport, and snapshots.','Encrypted snapshots produce encrypted restored volumes.','Snapshot copy can convert unencrypted data to encrypted storage.'],
      examTip:'If an encrypted volume cannot be attached or restored, inspect both EBS permissions and access to its KMS key.'
    },
    {
      ready:true,title:'Amazon EFS shared file storage',
      summary:'Mount one managed POSIX filesystem from many Linux instances across multiple Availability Zones.',
      explanation:['Amazon Elastic File System provides managed NFS file storage that scales capacity automatically. Regional EFS uses mount targets across Availability Zones so many Linux clients can share the same files.','Security groups control network access and POSIX permissions control file access. EFS suits shared web content, content management, home directories, and data exchange where block storage attached to one instance is insufficient.'],
      takeaways:['EFS is managed NFS for Linux workloads.','Regional EFS supports multi-AZ shared access.','Capacity scales automatically with pay-for-use storage.'],
      examTip:'Many Linux web servers sharing the same files across AZs is a direct EFS use case.'
    },
    {
      ready:true,title:'EFS performance, lifecycle, and storage selection',
      summary:'Tune shared-file behavior and choose among EFS, EBS, and instance store from access and durability requirements.',
      explanation:['EFS performance and throughput modes address latency-sensitive general workloads, highly parallel access, provisioned throughput, or automatically changing demand. Lifecycle policies move colder files from Standard into lower-cost Infrequent Access or Archive tiers.','Regional storage offers multi-AZ resilience, while One Zone reduces cost for suitable data. Choose EBS for instance-oriented block storage, EFS for shared POSIX files, and instance store for temporary host-local performance.'],
      takeaways:['EFS modes tune latency, parallelism, and throughput scaling.','Lifecycle tiers reduce the cost of colder files.','Access pattern and failure scope decide EFS versus EBS versus instance store.'],
      examTip:'Ask three questions: block or file, one host or many, and persistent or disposable. Those answers usually identify the correct EC2 storage service.'
    }
  ];

  const sectionEightLectures=[
    {
      ready:true,title:'Scalability, elasticity, and high availability',
      summary:'Separate capacity growth from failure resilience and choose vertical or horizontal scaling deliberately.',
      explanation:['Vertical scaling increases the resources of one system; horizontal scaling adds more systems and requires a distributed workload. Elasticity is the ability to adjust that capacity as demand changes.','High availability is a different goal: keeping service available through component or location failure. On AWS, an active web tier commonly combines horizontal scaling with instances distributed across multiple Availability Zones.'],
      takeaways:['Vertical scaling makes one resource larger.','Horizontal scaling adds resources.','High availability removes single failure domains.'],
      examTip:'A larger instance improves capacity but does not survive an Availability Zone failure; multi-AZ redundancy is still required.'
    },
    {
      ready:true,title:'Elastic Load Balancing fundamentals',
      summary:'Expose one managed endpoint that distributes connections to healthy application targets.',
      explanation:['Elastic Load Balancing accepts client traffic on listeners and forwards it to registered targets. It provides a stable DNS endpoint while backend instances can be added, replaced, or kept private.','Health checks test a configured protocol, port, and path. Unhealthy targets stop receiving new traffic, so the health endpoint should prove that the application can actually serve requests without depending on unrelated optional systems.'],
      takeaways:['Listeners accept traffic and target groups receive it.','Health checks remove failing targets from service.','Managed load balancers reduce infrastructure operations.'],
      examTip:'A load balancer provides traffic distribution; pair it with redundant targets and Auto Scaling for a complete resilient tier.'
    },
    {
      ready:true,title:'Choose an AWS load balancer',
      summary:'Match HTTP routing, transport performance, or transparent appliances to ALB, NLB, or GWLB.',
      explanation:['Application Load Balancer operates at Layer 7 for HTTP and HTTPS features. Network Load Balancer operates at Layer 4 for high-performance TCP, UDP, and TLS traffic with static per-AZ addresses.','Gateway Load Balancer routes IP traffic transparently through fleets of virtual network appliances. Classic Load Balancer is the legacy generation and is rarely the preferred answer for new designs.'],
      takeaways:['ALB understands HTTP requests.','NLB handles high-performance transport traffic.','GWLB inserts scalable network appliances.'],
      examTip:'Path or host routing suggests ALB; static IP and extreme TCP/UDP performance suggest NLB; inline inspection suggests GWLB.'
    },
    {
      ready:true,title:'Application Load Balancer routing',
      summary:'Route HTTP requests to different services using host, path, header, method, or query information.',
      explanation:['An ALB listener evaluates ordered rules and forwards matching requests to target groups. One endpoint can route different hostnames or URL paths to separate applications, making ALB a natural front door for microservices and containers.','Rules can also redirect HTTP to HTTPS, return fixed responses, or weight traffic across target groups. A default rule handles requests that match no higher-priority condition.'],
      takeaways:['ALB routing uses Layer 7 request attributes.','One ALB can front multiple applications.','Listener rule priority controls evaluation order.'],
      examTip:'Consolidating many HTTP services behind one endpoint with host- or path-based routing is an ALB design.'
    },
    {
      ready:true,title:'ALB target groups and client context',
      summary:'Register EC2, containers, private IPs, or Lambda and preserve original request information through headers.',
      explanation:['ALB target groups can represent instances, private IP addresses, ECS tasks, or Lambda functions. Each group owns its health-check configuration and can use a different backend port.','Because the ALB terminates the client connection, targets see the load balancer as the network peer. Forwarded headers carry the original client IP, protocol, and port, and applications must trust them only from the controlled load-balancer path.'],
      takeaways:['ALB supports several target types.','Health checks are configured per target group.','Forwarded headers preserve client connection context.'],
      examTip:'Use the forwarded client-IP header for application logging behind an ALB, not the target connection source address.'
    },
    {
      ready:true,title:'Network Load Balancer',
      summary:'Distribute TCP, UDP, and TLS traffic with very high throughput, low latency, and stable addresses.',
      explanation:['NLB operates on transport connections rather than HTTP request content. It scales to demanding connection rates and provides a static IP for each enabled Availability Zone, with optional Elastic IP association for internet-facing designs.','Targets can include instances, private IPs, and an ALB. Health checks can use TCP, HTTP, or HTTPS even when client traffic uses another supported transport protocol.'],
      takeaways:['NLB works at Layer 4.','It supports TCP, UDP, and TLS.','Static per-AZ addresses support IP allowlisting.'],
      examTip:'When a partner must allowlist fixed public IPs for a high-volume TCP service, choose an internet-facing NLB.'
    },
    {
      ready:true,title:'Gateway Load Balancer',
      summary:'Insert and scale third-party firewalls and inspection appliances transparently in a network path.',
      explanation:['GWLB combines a transparent network gateway with load distribution across virtual appliances. Route tables direct traffic through a GWLB endpoint, while the service distributes encapsulated packets to healthy appliance targets.','Common uses include firewalls, intrusion detection, deep packet inspection, and traffic transformation. The GENEVE encapsulation used by GWLB requires compatible appliances and target configuration.'],
      takeaways:['GWLB operates on IP packets.','It scales fleets of network virtual appliances.','Route tables steer traffic through GWLB endpoints.'],
      examTip:'Centralized transparent inspection by third-party appliances is the signature Gateway Load Balancer scenario.'
    },
    {
      ready:true,title:'Sticky sessions and application state',
      summary:'Keep a client associated with one target when legacy in-memory session state cannot yet be externalized.',
      explanation:['Session affinity uses a cookie or connection behavior to send a returning client to the same backend. ALB supports load-balancer-generated duration cookies and application cookies with configurable lifetime.','Stickiness can create uneven load and reduces the freedom to replace targets. Stateless application servers with sessions stored in a shared cache or database scale and recover more cleanly.'],
      takeaways:['Stickiness preserves target affinity for a client.','Cookie expiration controls affinity duration.','External session storage enables stateless scaling.'],
      examTip:'Use stickiness only when the requirement demands target affinity; prefer externalized session state for resilient horizontal scaling.'
    },
    {
      ready:true,title:'Cross-zone load balancing',
      summary:'Understand whether each load-balancer node distributes traffic only within its AZ or across all registered targets.',
      explanation:['Without cross-zone balancing, each load-balancer node sends its share of traffic to targets in its own Availability Zone. Uneven target counts can therefore produce uneven per-target load.','With cross-zone balancing, nodes can use healthy targets across enabled AZs. Defaults and inter-AZ data charges differ by load-balancer type, so validate current service behavior when cost or strict zonal isolation matters.'],
      takeaways:['Cross-zone balancing pools targets across AZs.','It can smooth load when target counts differ.','Defaults and data-transfer pricing vary by load-balancer type.'],
      examTip:'Distinguish even traffic per AZ from even traffic per target; cross-zone behavior determines which result you get.'
    },
    {
      ready:true,title:'TLS termination, ACM, and SNI',
      summary:'Encrypt client connections at the load balancer and serve multiple domains with managed certificates.',
      explanation:['An HTTPS or TLS listener presents an X.509 certificate and negotiates encryption with the client. AWS Certificate Manager can provision and renew supported public certificates, while an appropriate security policy controls allowed protocol versions and ciphers.','Server Name Indication lets a modern client name the requested hostname during the handshake so one ALB or NLB listener can select among certificates. A default certificate handles clients or names without a match.'],
      takeaways:['TLS protects data in transit to the listener.','ACM manages supported certificate lifecycle.','SNI enables multiple certificates on one listener.'],
      examTip:'Multiple HTTPS domains on one modern load balancer require ALB or NLB certificate lists with SNI, not multiple legacy CLBs.'
    },
    {
      ready:true,title:'Deregistration delay and connection draining',
      summary:'Stop new traffic while allowing in-flight requests to finish during deployments or scale-in.',
      explanation:['When a target is deregistered, the load balancer stops selecting it for new work but can allow existing requests or connections to complete for a configured period. ALB and NLB call this deregistration delay; legacy CLB calls it connection draining.','Set the delay to match normal request duration and application shutdown behavior. Very short requests can use a lower value, while long downloads or transactions need enough time to finish safely.'],
      takeaways:['Draining stops new work before removing a target.','Existing work receives a configurable completion window.','Shutdown hooks should align with the delay.'],
      examTip:'Graceful instance replacement with in-flight request completion points to deregistration delay.'
    },
    {
      ready:true,title:'Auto Scaling Group fundamentals',
      summary:'Maintain minimum, desired, and maximum EC2 capacity while replacing failed instances automatically.',
      explanation:['An Auto Scaling Group manages a fleet of instances from a launch template. Desired capacity is the current target, minimum is the lower boundary, and maximum prevents uncontrolled growth.','The group can span subnets in multiple Availability Zones and register instances with target groups. When an instance becomes unhealthy or terminates, the group launches a replacement to restore desired capacity.'],
      takeaways:['ASG desired capacity is bounded by minimum and maximum.','Multi-AZ subnet selection supports availability.','Unhealthy instances can be replaced automatically.'],
      examTip:'An ASG maintains compute count; a load balancer distributes traffic. Most elastic web tiers need both.'
    },
    {
      ready:true,title:'Launch templates and load-balancer integration',
      summary:'Define repeatable instance configuration and connect every new server to the application target group.',
      explanation:['A launch template versions the AMI, instance type, security groups, storage, IAM role, key settings, and user data used by an ASG. Versioning supports controlled fleet updates and rollbacks.','Target-group integration registers launched instances and makes load-balancer health available to the group. Ensure the instance security group permits only the load-balancer path on the application port.'],
      takeaways:['Launch templates make fleet configuration repeatable.','Versions support controlled configuration changes.','Target-group integration automates registration and health.'],
      examTip:'Put configuration shared by every fleet member in the launch template or AMI, not in manual post-launch steps.'
    },
    {
      ready:true,title:'ASG health checks and instance replacement',
      summary:'Use meaningful health signals and warm-up timing so the group replaces failures without creating a loop.',
      explanation:['EC2 health checks detect infrastructure failure, while load-balancer health checks can detect an application that no longer serves requests. An ASG can use both when configured for target-group health.','Health-check grace and instance warm-up prevent a new server from being judged before startup completes. If bootstrap repeatedly fails, automatic replacement creates churn rather than recovery, so monitor launch failures and application logs.'],
      takeaways:['EC2 and load-balancer health detect different failures.','Grace periods protect initializing instances.','Replacement cannot repair a broken launch configuration.'],
      examTip:'For replacement when the web process fails but the VM still runs, enable load-balancer health checks for the ASG.'
    },
    {
      ready:true,title:'Target tracking scaling',
      summary:'Let the ASG adjust capacity to keep a selected utilization metric near a desired value.',
      explanation:['Target tracking compares a metric with a target and creates the required scale-out and scale-in behavior. Common metrics include average CPU utilization and ALB request count per target.','Choose a metric that changes proportionally with capacity and reflects demand. The policy needs warm-up information so new instances can contribute before further decisions overreact.'],
      takeaways:['Target tracking maintains a metric near a target.','The metric should correlate with fleet capacity.','Warm-up prevents premature scaling decisions.'],
      examTip:'For a simple requirement such as maintaining average CPU near 40 percent, target tracking is the preferred policy.'
    },
    {
      ready:true,title:'Step, scheduled, and predictive scaling',
      summary:'Use thresholds for reactive changes, schedules for known events, and forecasts for recurring demand.',
      explanation:['Step scaling changes capacity by different amounts according to alarm severity. Scheduled scaling changes minimum, maximum, or desired capacity at known times such as a weekly traffic event.','Predictive scaling forecasts recurring load and prepares capacity ahead of demand. These approaches can coexist with dynamic policies when boundaries and timing are designed to avoid conflicting actions.'],
      takeaways:['Step scaling reacts by alarm magnitude.','Scheduled scaling handles known timing.','Predictive scaling prepares for forecast demand.'],
      examTip:'Known calendar traffic suggests scheduled scaling; repeatable but varying patterns may benefit from predictive scaling.'
    },
    {
      ready:true,title:'Scaling metrics, cooldowns, and architecture review',
      summary:'Select a demand signal and stabilize scaling so capacity changes improve service instead of oscillating.',
      explanation:['Useful metrics include CPU, request count per target, network throughput, queue depth, or an application-specific custom metric. The signal should represent demand each instance can help absorb.','Cooldowns and instance warm-up allow metrics to settle after a scaling action. Fast launch from a prepared AMI reduces the delay between demand and useful capacity, while multi-AZ distribution and a load balancer keep the fleet available.'],
      takeaways:['Scale on demand signals tied to capacity.','Cooldown and warm-up reduce oscillation.','Prepared images shorten time to serve traffic.'],
      examTip:'Queue workers should often scale on backlog per worker rather than CPU; the best metric expresses the actual bottleneck.'
    }
  ];

  const sectionNineLectures=[
    {
      ready:true,title:'Amazon RDS managed relational databases',
      summary:'Run familiar SQL engines while AWS handles the undifferentiated database infrastructure work.',
      explanation:['Amazon RDS provisions managed relational database instances for engines including PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and others. AWS manages the host, operating-system patching, database installation, monitoring integration, and backup automation.','You still design schemas, indexes, queries, users, and application connections. Unlike a self-managed database on EC2, standard RDS does not provide shell access to the underlying host because that layer is operated by the service.'],
      takeaways:['RDS manages database infrastructure and engine operations.','Customers retain responsibility for data design and database access.','Standard RDS does not expose host-level SSH access.'],
      examTip:'Choose RDS over EC2 when a supported relational engine is required and minimizing operational effort is a priority.'
    },
    {
      ready:true,title:'RDS storage scaling and backup foundations',
      summary:'Let database storage grow within a safe ceiling and protect data with automated backups and snapshots.',
      explanation:['RDS storage autoscaling increases allocated storage when sustained free space becomes low, up to a maximum threshold you configure. It helps unpredictable growth but does not shrink storage or replace capacity monitoring.','Automated backups combine periodic snapshots with transaction logs for point-in-time recovery during the retention window. Manual snapshots persist until deleted, and restoring either type creates a new database instance rather than overwriting the source.'],
      takeaways:['Storage autoscaling grows toward a configured maximum.','Automated backups enable point-in-time recovery.','Manual snapshots support user-controlled retention.'],
      examTip:'A restore creates a new endpoint, so applications must be redirected after recovery.'
    },
    {
      ready:true,title:'RDS read replicas',
      summary:'Offload read-heavy work through asynchronous copies without confusing read scaling with failover.',
      explanation:['A read replica receives changes asynchronously from a source database and serves read-only application traffic. Applications must explicitly connect read workloads to replica endpoints; RDS does not automatically split queries for them.','Replica lag means recently committed data may not yet be visible. Replicas can be placed across AZs or Regions and promoted into independent databases, making them useful for reporting, geographic reads, or some recovery strategies.'],
      takeaways:['Read replicas scale SELECT workloads.','Asynchronous replication can produce stale reads.','Promotion creates an independent writable database.'],
      examTip:'Use read replicas for performance; use Multi-AZ when the primary requirement is automatic database failover.'
    },
    {
      ready:true,title:'RDS Multi-AZ high availability',
      summary:'Maintain a synchronous standby and one stable endpoint for automatic failover.',
      explanation:['A Multi-AZ deployment synchronously replicates to standby capacity in another Availability Zone. The standby is not the application read-scaling target; it exists to take over after infrastructure, storage, or AZ failure.','RDS manages failover behind the database DNS name so applications can reconnect without choosing a new endpoint. Converting a supported Single-AZ database builds and synchronizes the standby through a managed modification workflow.'],
      takeaways:['Multi-AZ uses synchronous replication.','The standby provides failover, not ordinary read scaling.','One DNS endpoint follows the active database.'],
      examTip:'“Highly available relational database with automatic failover” points to Multi-AZ, not a read replica alone.'
    },
    {
      ready:true,title:'RDS Custom for host-level control',
      summary:'Retain managed-service assistance while customizing supported Oracle or SQL Server hosts and database software.',
      explanation:['RDS Custom exposes the underlying operating system and database environment for specialized applications that require privileged configuration, native features, or vendor software. Administrators can connect through controlled management paths.','Customization increases responsibility. Automation must be paused for some changes and snapshots should protect the database before invasive work; ordinary RDS remains preferable when host access is not a hard requirement.'],
      takeaways:['RDS Custom supports specialized Oracle and SQL Server needs.','It permits OS and database customization.','Greater control creates greater operational responsibility.'],
      examTip:'A supported commercial database requiring OS-level agents or settings suggests RDS Custom; routine SQL workloads should stay on standard RDS.'
    },
    {
      ready:true,title:'Aurora cluster architecture and endpoints',
      summary:'Use cloud-optimized shared storage, one writer, and multiple low-lag readers for MySQL- or PostgreSQL-compatible applications.',
      explanation:['Amazon Aurora separates compute instances from a distributed storage layer replicated across multiple Availability Zones. A cluster has one writer and can add Aurora Replicas for reads and failover candidates.','The writer endpoint follows the current writer after failover. The reader endpoint balances new read connections across replicas, while instance endpoints support explicit placement when an application needs one particular member.'],
      takeaways:['Aurora compute shares a distributed multi-AZ storage volume.','The writer endpoint targets the active writer.','The reader endpoint distributes read connections.'],
      examTip:'Use cluster endpoints rather than hard-coded instance endpoints when the application should follow failover or reader scaling automatically.'
    },
    {
      ready:true,title:'Aurora replicas, custom endpoints, and Serverless',
      summary:'Scale readers for demand, isolate specialized queries, or let Aurora adjust compute for intermittent workloads.',
      explanation:['Aurora Auto Scaling adjusts replica count from demand metrics. Custom endpoints group selected replicas, such as larger instances reserved for analytics, so specialized queries do not compete with ordinary reads.','Aurora Serverless adjusts database compute capacity without fixed instance planning and suits variable, intermittent, or unpredictable usage. Confirm engine version and feature requirements before selecting the serverless deployment model.'],
      takeaways:['Replica Auto Scaling changes read capacity.','Custom endpoints isolate workloads on selected replicas.','Aurora Serverless targets variable capacity needs.'],
      examTip:'Infrequent unpredictable database usage with minimal capacity management suggests Aurora Serverless.'
    },
    {
      ready:true,title:'Aurora global and specialized capabilities',
      summary:'Extend Aurora for cross-Region reads and recovery, SQL-driven ML predictions, or selected SQL Server migrations.',
      explanation:['Aurora Global Database replicates from one read/write primary Region to read-only secondary Regions with low lag. It supports local read latency and fast cross-Region recovery through secondary promotion.','Aurora ML integrates supported prediction services through SQL, while Babelfish helps some SQL Server applications communicate with Aurora PostgreSQL using familiar protocol and T-SQL behavior. These are specialized features, not default requirements for every cluster.'],
      takeaways:['Global Database provides low-lag cross-Region replication.','Secondary Regions serve reads and can be promoted.','Aurora ML and Babelfish solve specialized integration or migration needs.'],
      examTip:'For global Aurora reads plus rapid Region-level recovery, Global Database is more purpose-built than a single cross-Region replica.'
    },
    {
      ready:true,title:'RDS and Aurora restore and cloning options',
      summary:'Recover to new databases and create fast Aurora test environments without altering production.',
      explanation:['Restoring an automated backup or manual snapshot creates a new RDS instance or Aurora cluster. Supported MySQL backup formats can also be imported from S3 for migration into new managed databases.','Aurora cloning uses copy-on-write storage so a new cluster initially shares unchanged data blocks with its source. It creates development or staging databases faster and with less initial storage than a full snapshot copy.'],
      takeaways:['Backup restore creates a new database.','S3 backup import supports selected MySQL migrations.','Aurora cloning uses copy-on-write.'],
      examTip:'A fast, cost-efficient staging copy of a large Aurora production cluster points to database cloning.'
    },
    {
      ready:true,title:'RDS and Aurora security',
      summary:'Combine network isolation, KMS encryption, TLS, authentication, and audit logging around managed databases.',
      explanation:['Place databases in private subnets and restrict security-group ingress to application sources. KMS-backed encryption protects storage, snapshots, and replicas when enabled, while TLS protects client connections in transit.','Database credentials can be stored in Secrets Manager, and supported engines can use IAM database authentication for short-lived tokens. Export database logs to CloudWatch when retention, investigation, or centralized monitoring requires it.'],
      takeaways:['Security groups control database network reachability.','KMS and TLS protect data at rest and in transit.','IAM authentication can replace long-lived passwords for supported connections.'],
      examTip:'To encrypt an existing unencrypted database, snapshot it and restore an encrypted copy; encryption is not simply toggled in place.'
    },
    {
      ready:true,title:'Amazon RDS Proxy',
      summary:'Pool database connections and improve application behavior during traffic spikes and failover.',
      explanation:['RDS Proxy maintains and reuses connections to supported RDS and Aurora engines. Many short-lived application clients—especially functions—can share a smaller controlled database connection pool.','The managed proxy scales across Availability Zones, integrates with Secrets Manager and IAM authentication, and can reduce failover disruption. It is reached inside a VPC and does not make a private database publicly accessible.'],
      takeaways:['RDS Proxy pools and reuses database connections.','It protects databases from connection storms.','It supports managed secrets and IAM authentication.'],
      examTip:'A burst of Lambda invocations exhausting relational database connections is a classic RDS Proxy scenario.'
    },
    {
      ready:true,title:'ElastiCache architecture and common uses',
      summary:'Place managed in-memory storage between applications and slower systems for low-latency reads or shared sessions.',
      explanation:['Amazon ElastiCache manages Redis- or Memcached-compatible caches. A cache-aside pattern reads the cache first, loads missing data from the database, and stores the result with an expiration and invalidation strategy.','A shared session cache lets stateless application servers retrieve the same login state regardless of which instance receives a request. Caching requires application changes and must tolerate misses, eviction, and stale data.'],
      takeaways:['ElastiCache provides managed in-memory data access.','Database caching reduces repeated backend reads.','Shared session storage supports stateless application tiers.'],
      examTip:'Use a cache for repeated low-latency reads; do not treat it as the only durable system of record unless the design explicitly supports that risk.'
    },
    {
      ready:true,title:'Redis, Memcached, and cache security',
      summary:'Choose Redis features or Memcached simplicity and protect the cache at network, transport, and authentication layers.',
      explanation:['Redis supports replication, failover, persistence options, backups, and rich structures such as sorted sets. Memcached offers a simple multi-threaded distributed cache and client-side sharding without the same native replication model.','Keep cache nodes private and restrict their security groups to application clients. Use supported TLS and authentication mechanisms; IAM permissions for managing cache resources are distinct from data-plane authentication to the engine.'],
      takeaways:['Redis provides replication and advanced data structures.','Memcached provides a simple distributed memory cache.','Network controls and engine authentication protect data-plane access.'],
      examTip:'Automatic failover, backups, or sorted sets suggest Redis; a disposable simple multi-threaded object cache may fit Memcached.'
    },
    {
      ready:true,title:'Caching patterns and Redis decision rules',
      summary:'Select lazy loading, write-through, session storage, or sorted sets while planning invalidation explicitly.',
      explanation:['Lazy loading caches data after a miss and avoids storing unused records, but a miss adds latency and cached values can become stale. Write-through updates cache during database writes, improving freshness at the cost of extra writes and potentially unused cached data.','TTL-based session data should be disposable, while Redis sorted sets maintain unique ordered scores for leaderboards and rankings. Every cache design needs behavior for eviction, failure, and invalidation.'],
      takeaways:['Lazy loading fills the cache on demand.','Write-through updates cache with database writes.','Redis sorted sets support real-time rankings.'],
      examTip:'A gaming leaderboard requiring unique members ordered by score is a direct Redis sorted-set use case.'
    }
  ];

  const sectionTenLectures=[
    {
      ready:true,title:'DNS hierarchy and name resolution',
      summary:'Follow a hostname from the client cache through recursive and authoritative DNS servers to an address.',
      explanation:['The Domain Name System translates hierarchical names into records applications can use. A fully qualified name is built from labels such as host, subdomain, registered domain, top-level domain, and the DNS root.','A recursive resolver follows referrals from root and TLD servers to the authoritative name servers for the domain, caches the answer, and returns it to the client. DNS supplies connection information; it does not carry the application traffic.'],
      takeaways:['DNS uses a hierarchical namespace.','Recursive resolvers query authoritative servers and cache answers.','DNS resolution precedes, but does not route, application traffic.'],
      examTip:'Route 53 routing policies choose DNS answers; a load balancer distributes the traffic that arrives after resolution.'
    },
    {
      ready:true,title:'Route 53 records and core record types',
      summary:'Describe a DNS answer with a name, type, value, routing policy, and cache lifetime.',
      explanation:['An A record returns IPv4 addresses, an AAAA record returns IPv6 addresses, and an NS record delegates a zone to authoritative name servers. A CNAME makes one non-apex hostname an alias of another hostname.','Route 53 supports many additional standards-based record types for mail, verification, service discovery, and delegation. Record name and type determine which set is evaluated for a query.'],
      takeaways:['A maps a name to IPv4 and AAAA to IPv6.','CNAME points a non-apex name to another name.','NS records identify authoritative name servers.'],
      examTip:'A CNAME cannot be used at the zone apex, which is why AWS Alias records matter for root-domain AWS endpoints.'
    },
    {
      ready:true,title:'Public and private hosted zones',
      summary:'Keep internet DNS and VPC-only DNS records in the correct authoritative container.',
      explanation:['A public hosted zone contains records resolvable through the public DNS hierarchy. A private hosted zone associates with one or more VPCs and answers only through Route 53 Resolver for those networks.','The same domain can exist in public and private zones to provide different internal and external answers. VPC DNS settings and zone association must be correct for private names to resolve.'],
      takeaways:['Public zones serve internet-visible DNS records.','Private zones serve associated VPCs.','Split-view DNS can return different internal and external answers.'],
      examTip:'Private application hostnames that should resolve only inside selected VPCs belong in a private hosted zone.'
    },
    {
      ready:true,title:'DNS caching and TTL',
      summary:'Balance resolver traffic and change speed by choosing an appropriate record time to live.',
      explanation:['TTL tells recursive resolvers and clients how long they may cache a DNS answer. A long TTL reduces query volume and improves cache efficiency but delays adoption of record changes.','A low TTL increases authoritative queries and cost but shortens stale-answer duration. Lower the TTL before a planned migration, wait for old caches to expire, make the change, and raise it again after stability.'],
      takeaways:['TTL controls DNS cache duration.','High TTL favors efficiency and stability.','Low TTL favors faster changes.'],
      examTip:'Changing a record cannot force every resolver to discard an answer it already cached before the TTL expires.'
    },
    {
      ready:true,title:'CNAME and Route 53 Alias records',
      summary:'Point friendly names to managed AWS endpoints, including the zone apex, without tracking changing IP addresses.',
      explanation:['A CNAME can point a subdomain to any hostname but cannot exist at the zone apex. A Route 53 Alias is an AWS extension that returns an A or AAAA-style answer for supported AWS resources and can be used at the apex.','Alias targets include load balancers, CloudFront, API Gateway, S3 website endpoints, Global Accelerator, interface endpoints, and records in the same zone. Route 53 tracks the underlying managed endpoint and does not expose a user-set TTL for the Alias.'],
      takeaways:['CNAME works for non-apex names.','Alias works at the apex and subdomains.','Alias supports a defined set of AWS targets.'],
      examTip:'For example.com pointing to an ALB, create an Alias A/AAAA record rather than a CNAME.'
    },
    {
      ready:true,title:'Routing policies and simple routing',
      summary:'Understand that policies choose DNS responses and use simple routing when no traffic logic is required.',
      explanation:['A routing policy controls how Route 53 selects values from records with the same name and type. The client then connects to the returned endpoint; Route 53 is not a proxy in that data path.','Simple routing returns one value or a set of values without health-check-based selection. A client or resolver may choose among multiple returned addresses, so simple routing is not a managed replacement for a load balancer.'],
      takeaways:['Routing policies select DNS answers.','Simple routing has no health evaluation.','Multiple simple values do not equal load balancing.'],
      examTip:'Use simple routing for one endpoint when no weighting, location, latency, or failover logic is required.'
    },
    {
      ready:true,title:'Weighted routing',
      summary:'Split DNS responses by relative weight for gradual releases, experiments, or multi-endpoint distribution.',
      explanation:['Weighted records share a name and type and receive relative numeric weights. Route 53 selects each answer according to its fraction of the total; weights do not need to sum to one hundred.','A zero weight can remove an endpoint from normal selection, while health checks can keep unhealthy weighted records out. Because DNS answers are cached, the observed short-term traffic ratio is approximate rather than per-request exact.'],
      takeaways:['Weights are relative, not percentages that must total 100.','Weighted records can use health checks.','DNS caching makes distribution statistical.'],
      examTip:'A controlled 90/10 DNS rollout between two application versions is a weighted-routing design.'
    },
    {
      ready:true,title:'Latency-based routing',
      summary:'Direct a user toward the deployed AWS Region that currently offers the lowest measured network latency.',
      explanation:['Latency records associate endpoints with AWS Regions. Route 53 uses latency measurements between the resolver location and those Regions to select an answer; the geographically closest Region is not always the lowest-latency one.','Health checks can remove an unhealthy regional endpoint, combining performance routing with failover. The application and data layers must still support users arriving in any selected Region.'],
      takeaways:['Latency routing uses measured Region latency.','It differs from geographic location rules.','Health checks can exclude failed endpoints.'],
      examTip:'“Best network latency to multiple regional deployments” points to latency routing, not geolocation.'
    },
    {
      ready:true,title:'Route 53 endpoint health checks',
      summary:'Monitor public HTTP, HTTPS, or TCP endpoints from distributed checkers and feed health into DNS decisions.',
      explanation:['Route 53 health checkers probe a public endpoint at a configured interval and apply healthy and unhealthy thresholds. HTTP checks expect successful status codes and can optionally search an initial portion of the response body.','Firewalls must allow the published checker address ranges. A shallow port check proves reachability, while an application health path can verify dependencies; choose a test that reflects whether serving traffic is safe.'],
      takeaways:['Direct health checks require publicly reachable endpoints.','Thresholds reduce sensitivity to one failed probe.','Health status integrates with supported routing policies.'],
      examTip:'Route 53 public checkers cannot directly reach a private-subnet-only endpoint.'
    },
    {
      ready:true,title:'Calculated checks and private-resource health',
      summary:'Combine child checks or bridge private application metrics into DNS failover through CloudWatch alarms.',
      explanation:['A calculated health check evaluates the status of multiple child checks with AND, OR, NOT, or a required healthy count. It can model a composite service or provide controlled maintenance behavior.','For private endpoints that public checkers cannot reach, publish a CloudWatch metric, evaluate it with an alarm, and create a health check that follows the alarm state. This separates private monitoring from public DNS control.'],
      takeaways:['Calculated checks combine child health states.','CloudWatch alarm checks can represent private resources.','The monitored signal should reflect application health.'],
      examTip:'A private RDS or internal service needs alarm-based health integration, not a direct public Route 53 endpoint check.'
    },
    {
      ready:true,title:'Failover routing',
      summary:'Implement active-passive DNS by returning a secondary endpoint when the primary fails health evaluation.',
      explanation:['Failover record sets label one endpoint primary and another secondary. Route 53 normally returns the healthy primary and switches to the secondary according to the configured health behavior.','DNS caching means failover is not an instantaneous connection migration. TTL, detection thresholds, application recovery time, and the readiness of the standby all contribute to the observed recovery time.'],
      takeaways:['Failover routing is active-passive.','Primary health controls secondary selection.','TTL and detection intervals affect recovery.'],
      examTip:'A warm standby site used only when the primary endpoint fails is a failover-routing scenario.'
    },
    {
      ready:true,title:'Geolocation routing',
      summary:'Return content or endpoints according to the user location for localization, licensing, or regional policy.',
      explanation:['Geolocation routing matches the origin of a DNS query to configured continents, countries, or US states. More specific matching records take precedence over broader ones.','Create a default record for users who match no location rule. Geolocation expresses business geography; it does not promise the chosen endpoint has the lowest network latency.'],
      takeaways:['Geolocation matches the user location.','The most specific applicable location wins.','A default record handles unmatched users.'],
      examTip:'Country-specific content or legal distribution rules suggest geolocation routing.'
    },
    {
      ready:true,title:'Geoproximity routing and bias',
      summary:'Route by the geographic relationship between users and resources, then expand or shrink a resource influence area.',
      explanation:['Geoproximity routing places AWS resources by Region and external resources by coordinates. Traffic Flow calculates geographic boundaries that normally direct users toward nearby resources.','A positive bias expands one resource region so it receives more traffic; a negative bias shrinks it. Bias allows controlled shifts that pure geolocation or latency policies do not express.'],
      takeaways:['Geoproximity considers user and resource geography.','Bias changes the size of a resource influence area.','Traffic Flow is used to configure this policy.'],
      examTip:'Shifting a geographic boundary toward one Region without fixed country rules points to geoproximity bias.'
    },
    {
      ready:true,title:'IP-based routing',
      summary:'Map known client CIDR ranges to specific endpoints for network-aware optimization or cost control.',
      explanation:['IP-based routing uses a CIDR collection that associates source networks with locations. Records then return different endpoints for clients whose resolver source matches those mappings.','This is useful when organizations know customer, office, or ISP address ranges and want deterministic network-based choices. Maintain mappings carefully as client networks change.'],
      takeaways:['IP routing matches configured client CIDRs.','CIDR locations map to record endpoints.','It differs from inferred geographic location.'],
      examTip:'Routing a known ISP or corporate address block to a preferred endpoint is an IP-based policy.'
    },
    {
      ready:true,title:'Multi-value answer routing',
      summary:'Return several healthy DNS records while recognizing that clients—not Route 53—choose the connection target.',
      explanation:['Multi-value routing associates health checks with multiple records and returns a subset of healthy values for each query. It can improve simple client-side distribution and avoid publishing failed endpoints.','It does not provide connection-level balancing, draining, TLS termination, or application-aware routing. Use an Elastic Load Balancer when those managed data-plane capabilities are required.'],
      takeaways:['Multi-value returns multiple healthy answers.','Resolvers and clients choose among returned values.','It is not a substitute for ELB.'],
      examTip:'Choose multi-value only for DNS-level healthy-answer distribution, not when the scenario asks for a managed load balancer.'
    },
    {
      ready:true,title:'Domain registration and DNS delegation',
      summary:'Separate ownership of a domain from the authoritative DNS service that hosts its records.',
      explanation:['A registrar records domain ownership and manages delegation information with the registry. The authoritative DNS provider hosts the zone records; the registrar and DNS provider can be different companies.','To use Route 53 for a domain registered elsewhere, create a public hosted zone and update the registrar delegation to the Route 53 name-server set. Keep registrar contacts, renewal, and transfer controls secure.'],
      takeaways:['Registrar and authoritative DNS are separate roles.','NS delegation points a domain to its DNS provider.','A third-party registration can use Route 53 hosted zones.'],
      examTip:'Changing name servers at the registrar delegates DNS; copying records alone does not make Route 53 authoritative.'
    },
    {
      ready:true,title:'Route 53 Resolver and hybrid DNS',
      summary:'Resolve public, VPC, and on-premises names across networks connected by VPN or Direct Connect.',
      explanation:['The VPC Route 53 Resolver answers AWS-provided names, private hosted-zone records, and recursive public DNS queries. Hybrid DNS extends resolution between that resolver and DNS servers in other networks.','Network connectivity must already exist through VPN, Direct Connect, or supported VPC paths. Resolver endpoints provide managed query entry and exit points; forwarding rules decide which domain suffix goes where.'],
      takeaways:['Route 53 Resolver serves VPC DNS queries.','Hybrid DNS requires network connectivity.','Endpoints and rules connect separate DNS namespaces.'],
      examTip:'A VPN transports the DNS packets, but Resolver endpoints and forwarding rules provide the hybrid DNS behavior.'
    },
    {
      ready:true,title:'Resolver inbound endpoints',
      summary:'Let on-premises or other connected DNS clients resolve private AWS names through managed VPC addresses.',
      explanation:['An inbound Resolver endpoint creates IP addresses in selected VPC subnets that receive DNS queries from connected networks. The VPC resolver then answers private hosted-zone and AWS names available to that VPC.','On-premises DNS servers conditionally forward the AWS private domain toward those endpoint addresses. Security groups, network routes, and redundant endpoint placement must allow DNS over the required transport.'],
      takeaways:['Inbound endpoints receive queries into AWS.','External DNS servers forward AWS private zones to them.','Deploy endpoint addresses redundantly across AZs.'],
      examTip:'On-premises clients resolving app.aws.private need a Resolver inbound endpoint.'
    },
    {
      ready:true,title:'Resolver outbound endpoints and forwarding rules',
      summary:'Forward selected VPC DNS queries to authoritative resolvers in on-premises or other connected networks.',
      explanation:['An outbound Resolver endpoint sends queries from the VPC resolver toward configured external DNS server addresses. A forwarding rule associates a domain suffix with those targets and can be shared across accounts.','Rules should be specific enough to avoid loops and unexpected resolution paths. The destination resolvers must permit queries from the endpoint addresses and routes must carry traffic in both directions.'],
      takeaways:['Outbound endpoints send VPC queries outward.','Rules match domain suffixes to target DNS servers.','Routing and DNS-server ACLs must permit the path.'],
      examTip:'AWS workloads resolving onpremises.private need an outbound endpoint plus a forwarding rule.'
    },
    {
      ready:true,title:'Route 53 architecture decision rules',
      summary:'Choose records, policies, health checks, and Resolver direction from the exact DNS requirement.',
      explanation:['Start with scope: public internet, associated VPCs, or hybrid networks. Then choose record behavior: one answer, weighted release, lowest latency, active-passive failover, user geography, known client CIDR, or multiple healthy answers.','Add health only where it improves the decision, and include TTL in recovery expectations. Use inbound endpoints for queries entering AWS and outbound endpoints for queries leaving AWS; neither replaces routing connectivity.'],
      takeaways:['Hosted-zone scope determines who can resolve names.','Routing policy expresses the answer-selection rule.','Resolver endpoint direction follows query direction.'],
      examTip:'Translate scenario wording directly: percentage, latency, location, failover, CIDR, or hybrid direction usually names the Route 53 feature.'
    }
  ];

  const sectionElevenLectures=[
    {
      ready:true,title:'Develop the solutions architect mindset',
      summary:'Evolve a design from the smallest valid system toward scalability and resilience as requirements change.',
      explanation:['Architecture begins with the current workload and explicit constraints, not a diagram containing every AWS service. A small application may accept one instance and downtime; adding availability, growth, persistent state, or operational requirements justifies additional components.','For each change, name the problem it solves and the tradeoff it introduces. This incremental method exposes why load balancers, Auto Scaling, multi-AZ databases, caches, and shared filesystems appear in a design.'],
      takeaways:['Start with stated requirements.','Add each service to solve a specific problem.','Re-evaluate cost and operations after every change.'],
      examTip:'Eliminate answers that add complexity without satisfying a requirement; the simplest complete design is usually preferred.'
    },
    {
      ready:true,title:'Evolve a stateless web application',
      summary:'Progress from one public server to a private, elastic, multi-AZ fleet behind a stable endpoint.',
      explanation:['A single EC2 instance with a public address is simple but couples users to one server. Vertical scaling adds capacity with an upper bound and possible downtime; multiple DNS A records add servers but handle replacement and health poorly because answers are cached.','A Route 53 Alias to a multi-AZ load balancer creates a stable entry point. Private instances in an Auto Scaling group register automatically, health checks remove failures, and security groups allow application traffic only from the load balancer.'],
      takeaways:['Stateless servers can be replaced or scaled horizontally.','ELB provides a stable healthy data-plane endpoint.','Multi-AZ Auto Scaling removes one-AZ dependence.'],
      examTip:'For an elastic stateless web tier, combine Route 53 Alias, ALB, and a multi-AZ ASG rather than publishing instance IPs.'
    },
    {
      ready:true,title:'Design a stateful e-commerce web application',
      summary:'Externalize shopping carts, user records, and hot reads so application servers remain disposable.',
      explanation:['Sticky sessions can temporarily keep a user on one server, but target loss still loses local state and creates uneven load. Client cookies have size and integrity limits. A stronger pattern stores only a session identifier in the cookie and keeps session data in ElastiCache or DynamoDB.','RDS or Aurora stores durable customer and order data. Read replicas or caching scale reads, while Multi-AZ protects database availability. Tier-specific security groups permit only ALB-to-app and app-to-data traffic.'],
      takeaways:['External session storage enables stateless compute.','Relational databases hold durable transactional data.','Read scaling and Multi-AZ solve different database problems.'],
      examTip:'Shopping carts must survive instance replacement, so do not rely on sticky sessions plus server-local memory as the only state store.'
    },
    {
      ready:true,title:'Scale WordPress with shared storage',
      summary:'Separate the database and uploaded files from interchangeable WordPress application instances.',
      explanation:['A scalable WordPress tier runs behind a load balancer across multiple AZs. RDS or Aurora MySQL stores posts and metadata, with Multi-AZ and reader capacity selected from availability and workload needs.','An EBS volume is tied to one AZ and normally one instance, so independent volumes do not automatically share uploaded images. Regional EFS gives Linux web servers a common POSIX filesystem across AZs, allowing any instance to serve the same media.'],
      takeaways:['Database state belongs outside the web instances.','EBS suits single-instance block storage.','EFS supplies shared multi-AZ files for Linux servers.'],
      examTip:'A horizontally scaled WordPress fleet that must see identical uploads points to EFS, not separate EBS disks.'
    },
    {
      ready:true,title:'Instantiate full application stacks quickly',
      summary:'Prepackage stable software and restore data so replacement environments reach service readiness faster.',
      explanation:['A golden AMI contains the operating system, dependencies, agents, and stable application components prepared before launch. User data adds small dynamic settings such as environment endpoints, and combining both reduces bootstrap time without baking every deployment detail into the image.','RDS and EBS snapshots restore schemas, data, and formatted disks faster than rebuilding them manually. Image and snapshot pipelines should patch, test, version, and retire artifacts consistently.'],
      takeaways:['Golden AMIs preinstall stable server components.','User data supplies launch-specific configuration.','Snapshots accelerate database and volume restoration.'],
      examTip:'When Auto Scaling replacements launch too slowly, move heavy installation into an AMI and keep user data concise.'
    },
    {
      ready:true,title:'Assemble a secure three-tier architecture',
      summary:'Place public entry, private compute, and protected data in separate layers across multiple Availability Zones.',
      explanation:['Route 53 directs users to an internet-facing ALB in public subnets. The ALB forwards to an Auto Scaling application tier in private subnets, and the application reaches database and cache services in isolated data subnets.','Security groups reference the preceding tier rather than broad CIDRs. Multi-AZ placement removes location-level single points of failure, while NAT or VPC endpoints provide controlled outbound access for private instances when required.'],
      takeaways:['Only the public entry tier needs direct internet ingress.','Application and data resources stay in private networks.','Security groups enforce tier-to-tier paths.'],
      examTip:'A classic secure web design exposes the load balancer—not the EC2 or database instances—to internet clients.'
    },
    {
      ready:true,title:'Deploy applications with Elastic Beanstalk',
      summary:'Let a developer-focused service orchestrate common web infrastructure while retaining access to underlying AWS configuration.',
      explanation:['Elastic Beanstalk packages an application version into an environment and manages capacity provisioning, load balancing, Auto Scaling, health monitoring, and instance configuration using standard AWS resources. The service itself has no separate charge, but the resources it creates do.','Web environments handle synchronous requests behind a load balancer, while worker environments consume jobs from SQS. Single-instance environments suit development; load-balanced multi-AZ environments suit production availability.'],
      takeaways:['Beanstalk environments run one application version at a time.','Web and worker tiers address request and queue processing.','Underlying resources remain configurable and billable.'],
      examTip:'Choose Elastic Beanstalk when developers want to deploy supported application code with managed infrastructure orchestration but still need EC2-level configuration control.'
    }
  ];

  const sectionTwelveLectures=[
    {
      ready:true,title:'Amazon S3 object storage and use cases',
      summary:'Store durable objects at massive scale for applications, backup, archives, analytics, and content delivery.',
      explanation:['Amazon S3 is regional object storage accessed through APIs rather than a mounted block device. It stores complete objects inside buckets and scales without customers provisioning disks or storage servers.','Common uses include backups, disaster recovery copies, data lakes, media, software distribution, static assets, and integration between AWS services. Object storage is not a drop-in replacement for a transactional filesystem or database.'],
      takeaways:['S3 stores objects in regional buckets.','Capacity scales without disk provisioning.','Object semantics differ from block and file storage.'],
      examTip:'Choose S3 for durable, highly scalable blobs and datasets—not when an application requires in-place block updates or POSIX file locking.'
    },
    {
      ready:true,title:'Buckets, keys, objects, and multipart uploads',
      summary:'Understand the S3 namespace and the metadata that travels with every stored object.',
      explanation:['A bucket name follows S3 naming rules and must be unique within its namespace. An object key is the full string after the bucket name; slash characters create useful prefixes but not real nested directories.','An object includes its body, system and user metadata, optional tags, and a version ID when versioning is enabled. Large uploads should use multipart upload, which transfers parts independently and can resume failed work.'],
      takeaways:['Keys are complete names, not filesystem paths.','Metadata and tags support management and policy.','Multipart upload improves large transfer reliability.'],
      examTip:'Uploads larger than the single-request limit require multipart upload; it is also recommended for smaller large objects to improve resilience.'
    },
    {
      ready:true,title:'S3 authorization model',
      summary:'Evaluate identity policies, bucket policies, ACLs, ownership, and explicit denies for each object request.',
      explanation:['Identity-based IAM policies grant an AWS principal permission to call S3 APIs. Bucket policies are resource-based and can grant account, cross-account, service, or public access while applying conditions to the bucket and its objects.','Modern buckets generally use Object Ownership with ACLs disabled. A request still needs an applicable Allow and must survive explicit Deny statements, organization guardrails, public-access controls, encryption-key policy, and endpoint policies.'],
      takeaways:['IAM policies grant identity permissions.','Bucket policies grant resource-based access.','Explicit Deny and guardrails override Allow.'],
      examTip:'For cross-account S3 access, verify both the resource policy and the caller identity permissions unless the specific resource-policy model provides the needed grant.'
    },
    {
      ready:true,title:'Bucket policies, roles, and Block Public Access',
      summary:'Grant the intended application or account access while preventing accidental public exposure.',
      explanation:['Use an IAM role for an EC2 workload rather than storing access keys. Use a bucket policy for cross-account access, service delivery, encryption enforcement, or other bucket-wide conditions.','S3 Block Public Access settings prevent policy or ACL configurations from making data public and can be enforced at account and bucket levels. Leave them enabled unless a reviewed public use case explicitly requires otherwise.'],
      takeaways:['Workloads should access S3 through IAM roles.','Bucket policies support cross-account and conditional access.','Block Public Access is a protective guardrail.'],
      examTip:'A private application bucket should keep Block Public Access enabled even when authorized roles need full object access.'
    },
    {
      ready:true,title:'Host a static website on S3',
      summary:'Serve HTML, CSS, JavaScript, and media directly when no server-side runtime is required.',
      explanation:['S3 website hosting publishes a regional website endpoint and supports index and error documents. The content must be readable through an appropriate policy, which conflicts with Block Public Access unless the design uses a private origin through another service.','The S3 website endpoint supports static content and does not execute server code. For HTTPS, custom domains, caching, and private-origin patterns, place CloudFront in front of the bucket rather than exposing it directly.'],
      takeaways:['S3 website hosting serves static files only.','Direct public hosting requires public-read authorization.','CloudFront adds HTTPS and a stronger private-origin pattern.'],
      examTip:'A 403 from a direct S3 website often indicates missing public-read permission, but production designs should consider CloudFront with private S3 access.'
    },
    {
      ready:true,title:'S3 versioning and delete markers',
      summary:'Preserve previous object states so overwrites and accidental deletions can be recovered.',
      explanation:['Versioning assigns a new version ID whenever the same key is uploaded again. Deleting without a version ID places a delete marker that hides prior versions rather than erasing them.','Objects created before versioning have a null version. Suspending versioning stops new numbered versions but does not remove existing history, and every retained version continues to consume storage.'],
      takeaways:['Overwrites create new object versions.','Delete markers can be removed to reveal previous data.','Suspension does not delete version history.'],
      examTip:'Versioning protects against logical mistakes, while lifecycle rules are still needed to control the cost of old versions.'
    },
    {
      ready:true,title:'Cross-Region and Same-Region Replication',
      summary:'Copy versioned objects asynchronously for compliance, isolation, aggregation, or regional access.',
      explanation:['S3 replication requires versioning on source and destination and an IAM role that allows S3 to read and copy the data. CRR sends objects to another Region; SRR copies within the same Region, including into another account.','Replication is asynchronous. Common uses include compliance boundaries, account isolation, lower-latency regional copies, log aggregation, and production-to-test separation.'],
      takeaways:['Source and destination must be versioned.','CRR crosses Regions and SRR stays within one Region.','S3 needs permission to perform replication.'],
      examTip:'If the requirement is automatic object copies into another AWS Region, choose CRR—not a lifecycle transition.'
    },
    {
      ready:true,title:'Replication behavior and Batch Replication',
      summary:'Predict which existing objects and deletions copy, and avoid assuming chained replication.',
      explanation:['A new replication rule applies to new qualifying writes. S3 Batch Replication can copy eligible existing objects and retry objects that previously failed replication.','Delete-marker replication is optional, explicit deletion of a particular version is not replicated, and objects received from another replication rule do not automatically continue into a third bucket. Design each required replication path directly.'],
      takeaways:['Existing objects require Batch Replication.','Delete-marker copying is configurable.','Replication does not chain automatically.'],
      examTip:'For a populated bucket that just gained CRR, use S3 Batch Replication to backfill older objects.'
    },
    {
      ready:true,title:'S3 durability, availability, and storage classes',
      summary:'Separate the probability of data loss from the probability that an object is immediately reachable.',
      explanation:['Durability describes preservation of stored objects and is designed to be extremely high across S3 classes. Availability describes successful access at a moment in time and differs by class and resilience scope.','Storage classes trade storage price, retrieval price, minimum duration, access latency, and AZ coverage. Choose from the access pattern and recovery requirement rather than from storage cost alone.'],
      takeaways:['Durability and availability are different metrics.','Classes share strong durability but vary in access characteristics.','Retrieval and minimum-duration charges affect total cost.'],
      examTip:'A lower storage price can be the expensive answer if objects are retrieved frequently or deleted before the minimum billed duration.'
    },
    {
      ready:true,title:'S3 Standard and Infrequent Access classes',
      summary:'Use Standard for active data and IA classes for less frequent data that still needs millisecond retrieval.',
      explanation:['S3 Standard spans multiple Availability Zones and suits frequently accessed content with low latency and high throughput. Standard-IA also spans multiple AZs but lowers storage cost in exchange for retrieval fees and a minimum storage duration.','One Zone-IA stores data in one AZ at lower cost. It suits recreatable data or secondary copies, not the only copy of critical information that must survive an AZ loss.'],
      takeaways:['Standard serves frequent access.','Standard-IA retains multi-AZ resilience with retrieval charges.','One Zone-IA accepts one-AZ loss risk.'],
      examTip:'A rarely accessed but immediately retrievable primary backup copy usually fits Standard-IA; recreatable secondary data may fit One Zone-IA.'
    },
    {
      ready:true,title:'S3 Glacier archive classes',
      summary:'Choose instant, flexible, or deep archive retrieval according to how long the business can wait.',
      explanation:['Glacier Instant Retrieval keeps millisecond access for archive data read only occasionally. Glacier Flexible Retrieval offers retrieval options from minutes to hours, while Deep Archive targets the lowest-cost long retention with recovery measured in many hours.','Archive classes include minimum storage durations and retrieval charges. The recovery-time objective must therefore be set before choosing the lowest storage price.'],
      takeaways:['Instant Retrieval provides millisecond archive access.','Flexible Retrieval trades wait time and retrieval cost.','Deep Archive targets long-term, slow-recovery data.'],
      examTip:'Regulatory records accessed perhaps once a year with a 48-hour restore allowance point to Deep Archive.'
    },
    {
      ready:true,title:'S3 Intelligent-Tiering',
      summary:'Let S3 move objects among access tiers when usage is unknown or changes over time.',
      explanation:['Intelligent-Tiering monitors access and automatically moves objects between frequent, infrequent, and instant-archive access tiers. Optional asynchronous archive tiers support colder data with configurable timing.','The class adds a per-object monitoring fee but avoids retrieval charges for its automatic access tiers. It is most valuable when access patterns are unpredictable and objects are large or valuable enough for monitoring economics to make sense.'],
      takeaways:['Tiering responds automatically to observed access.','Optional archive tiers add slower retrieval choices.','Monitoring cost matters for many tiny objects.'],
      examTip:'Unknown or changing access patterns with a desire to automate cost optimization suggest Intelligent-Tiering.'
    },
    {
      ready:true,title:'S3 Express One Zone directory buckets',
      summary:'Co-locate high-performance object storage and compute in one Availability Zone for latency-sensitive workloads.',
      explanation:['S3 Express One Zone uses directory buckets tied to a selected Availability Zone and is designed for very high request rates with single-digit millisecond latency. Compute in the same AZ avoids cross-AZ latency and transfer.','The one-AZ scope is an explicit resilience tradeoff. It suits scratch analytics, ML training, media processing, and HPC data that has another durable source or can tolerate the selected failure domain.'],
      takeaways:['Directory buckets are Availability Zone scoped.','Express One Zone prioritizes request performance.','Applications must accept or mitigate the one-AZ failure scope.'],
      examTip:'Use Express One Zone when extreme S3 performance and AZ co-location matter more than multi-AZ storage availability.'
    },
    {
      ready:true,title:'Select an S3 storage class by total cost',
      summary:'Match frequency, latency, resilience, retention, and retrieval economics to one defensible class.',
      explanation:['Begin with required retrieval time and whether an AZ loss must be tolerated. Then estimate access frequency, object lifetime, object size, monitoring fees, early-deletion charges, and data-retrieval volume.','Lifecycle policies can transition predictable aging data, while Intelligent-Tiering addresses uncertain usage. Keep independent backups or replication when a storage class alone does not satisfy the recovery design.'],
      takeaways:['Recovery time eliminates unsuitable archive classes.','AZ resilience distinguishes One Zone choices.','Total cost includes requests, retrieval, monitoring, and duration.'],
      examTip:'Do not memorize only class prices; scenario keywords about access time, recreation, and retention determine the answer.'
    }
  ];

  const sectionThirteenLectures=[
    {
      ready:true,title:'Automate storage with S3 Lifecycle rules',
      summary:'Transition aging objects to lower-cost classes and expire data that no longer provides value.',
      explanation:['S3 Lifecycle rules automate actions according to object age. Transition actions move matching objects into another storage class, while expiration actions delete current objects, noncurrent versions, expired delete markers, or abandoned multipart uploads.','A rule can target an entire bucket or a filtered set of objects by prefix, tags, object size, or a combination of filters. Build the schedule around retrieval time, minimum storage duration, and retention requirements so that storage savings do not create unexpected access or early-deletion costs.'],
      takeaways:['Transitions change an object\'s storage class automatically.','Expiration can remove old versions and incomplete multipart uploads.','Filters let one bucket apply different policies to different data sets.'],
      examTip:'When access predictably decreases as objects age, choose a Lifecycle rule; when access is unpredictable, consider Intelligent-Tiering.'
    },
    {
      ready:true,title:'Design Lifecycle policies from recovery requirements',
      summary:'Translate retention, retrieval speed, and data reproducibility into safe transition and expiration schedules.',
      explanation:['Classify each data set before choosing a lifecycle action. Re-creatable derivatives such as thumbnails can use a one-AZ class and expire early, while source objects may need multi-AZ storage before moving to an archive tier when slower recovery becomes acceptable.','With versioning enabled, a delete normally creates a delete marker and leaves a recoverable noncurrent version. Lifecycle rules can keep recent noncurrent versions in an immediately accessible class, then move older versions to deep archive or expire them after the required retention period. S3 Storage Class Analysis can provide access-pattern evidence for Standard and Standard-IA transition decisions.'],
      takeaways:['Recovery-time objectives determine eligible archive tiers.','Re-creatable data can accept more aggressive cost optimization.','Noncurrent-version rules support staged deleted-object recovery.'],
      examTip:'If deleted objects need fast recovery first and slower recovery later, combine versioning with lifecycle transitions for noncurrent versions.'
    },
    {
      ready:true,title:'Share large data sets with Requester Pays',
      summary:'Keep ownership and storage charges with the bucket owner while shifting request and download costs to consumers.',
      explanation:['Normally the bucket owner pays S3 storage, requests, and data transfer. A Requester Pays bucket changes the billing relationship so an authenticated requester accepts the request and download charges while the owner continues paying for stored capacity.','This model is useful for public or cross-account distribution of very large data sets where usage costs should follow each consumer. Requesters must identify an AWS account for billing and explicitly acknowledge Requester Pays in their requests, so anonymous access is not supported.'],
      takeaways:['The owner still pays storage charges.','The authenticated requester pays request and download costs.','Clients must explicitly send the Requester Pays acknowledgement.'],
      examTip:'Choose Requester Pays when many consumers download a shared data set and the owner must avoid paying their transfer costs.'
    },
    {
      ready:true,title:'React to object changes with S3 Event Notifications',
      summary:'Send object-created, removed, restored, and replication events to serverless processing destinations.',
      explanation:['S3 Event Notifications can publish selected bucket events to Lambda, Amazon SNS, or Amazon SQS. Prefix and suffix filters narrow delivery, allowing workflows such as invoking an image-processing function only when a matching object is created.','Delivery is asynchronous and can occasionally take longer than a few seconds. The destination must also trust S3: Lambda uses a resource-based permission, while SNS topics and SQS queues use resource policies that allow the bucket to publish or send messages. Design consumers to tolerate duplicate delivery.'],
      takeaways:['S3 can target Lambda, SNS, or SQS directly.','Key-name filters reduce irrelevant events.','Destination resource policies authorize S3 delivery.'],
      examTip:'If an S3 notification configuration looks correct but messages never arrive, check the destination resource policy before changing the bucket role.'
    },
    {
      ready:true,title:'Route S3 events through Amazon EventBridge',
      summary:'Use richer filtering, more destinations, replay, and routing when direct bucket notifications are too limited.',
      explanation:['An S3 bucket can send its events to EventBridge, where rules evaluate structured event fields such as operation, object name, object size, and metadata. Matching events can then reach a broad set of AWS targets, including Step Functions and streaming services.','EventBridge adds capabilities such as multiple routing rules, event archives, replay, and reliable delivery controls. Direct S3 notifications remain simpler for a single Lambda, SNS, or SQS destination; EventBridge is the stronger choice for complex fan-out and content-based routing.'],
      takeaways:['EventBridge rules filter structured event content.','One event can be routed to multiple service targets.','Archives and replay help recover or reprocess events.'],
      examTip:'Requirements for advanced JSON filtering, Step Functions targets, or replay point to EventBridge rather than a direct S3 notification.'
    },
    {
      ready:true,title:'Scale S3 requests and large-object transfers',
      summary:'Use prefixes, multipart upload, Transfer Acceleration, and byte-range reads for high-throughput workloads.',
      explanation:['S3 automatically scales request capacity per prefix, so distributing a heavy workload across multiple prefixes increases aggregate throughput. Modern applications do not need random key prefixes for ordinary scale, but they should recognize that hot request patterns and client-side concurrency still shape performance.','Multipart upload sends large files as independent parts that can transfer in parallel and retry separately. Transfer Acceleration enters AWS through nearby edge locations for long-distance uploads, while byte-range GETs parallelize downloads or retrieve only the needed portion of an object.'],
      takeaways:['Multiple prefixes can provide parallel request capacity.','Multipart upload improves concurrency and retry efficiency.','Byte ranges support parallel or partial reads.'],
      examTip:'For a distant client uploading very large objects, combine multipart upload with S3 Transfer Acceleration when testing shows a benefit.'
    },
    {
      ready:true,title:'Transform object fleets with S3 Batch Operations',
      summary:'Run a managed action across a manifest of existing objects with tracking, retries, and completion reports.',
      explanation:['S3 Batch Operations applies one operation to a large object list. Managed actions include copying objects, changing tags or ACLs, restoring archived objects, invoking Lambda per object, and replacing selected metadata or encryption settings.','A job combines a manifest, an operation, permissions, and optional parameters. S3 handles scheduling, progress tracking, retries, and reporting. S3 Inventory can generate the source list, and Athena can filter that inventory before it becomes the job manifest.'],
      takeaways:['Batch Operations targets existing objects at scale.','A manifest defines the exact object population.','Inventory plus Athena can build a filtered manifest.'],
      examTip:'Use Batch Operations—not a Lifecycle rule—when a one-time change must be applied to millions of existing objects.'
    },
    {
      ready:true,title:'Analyze an S3 estate with Storage Lens',
      summary:'Aggregate organization-wide storage, cost, protection, access, event, and performance signals in shared dashboards.',
      explanation:['S3 Storage Lens summarizes usage and activity across organizations, accounts, Regions, buckets, and prefixes. Its dashboards help identify fast-growing storage, incomplete multipart uploads, old noncurrent versions, and buckets that are missing expected protection or access-management settings.','Free metrics provide a baseline view with shorter historical retention. Advanced metrics add deeper activity, cost-optimization, data-protection, and status-code insight, along with longer retention, prefix aggregation, CloudWatch publishing, and daily CSV or Parquet exports for further analysis.'],
      takeaways:['Storage Lens provides an aggregate view beyond one bucket.','Metric categories cover cost, protection, access, events, and performance.','Advanced metrics add richer detail and longer history.'],
      examTip:'Choose Storage Lens for cross-account S3 visibility; choose Storage Class Analysis when the narrow question is when Standard objects should transition to Standard-IA.'
    }
  ];

  const sectionFourteenLectures=[
    {
      ready:true,title:'Choose an S3 encryption model',
      summary:'Separate who performs encryption from who owns the keys before selecting an at-rest protection option.',
      explanation:['S3 supports server-side and client-side encryption. With server-side encryption, S3 receives plaintext over TLS and encrypts it before storage; the variants differ mainly in key ownership and control. Client-side encryption protects the object before it ever leaves the application.','SSE-S3 is the default for new objects and uses keys wholly managed by S3. SSE-KMS adds KMS policy control and auditability, DSSE-KMS adds a second independent encryption layer, and SSE-C accepts a customer-supplied key with each request. Choose from compliance, auditing, key ownership, performance, and integration requirements rather than from encryption strength alone.'],
      takeaways:['SSE-S3 is the default at-rest encryption.','SSE-KMS adds key control and KMS audit events.','Client-side encryption keeps plaintext away from S3.'],
      examTip:'If the scenario only requires automatic encryption at rest with minimal administration, SSE-S3 is usually sufficient.'
    },
    {
      ready:true,title:'Control and audit keys with SSE-KMS',
      summary:'Use KMS keys when policy separation, rotation control, and a record of key use matter.',
      explanation:['With SSE-KMS, S3 requests a data key from AWS KMS for encryption and calls KMS to decrypt that key when an authorized reader retrieves the object. The caller needs both S3 permission and appropriate permission on the KMS key, so a bucket allow alone may not be enough.','KMS calls add cost and consume KMS request capacity. A high-request S3 workload can therefore be throttled by KMS even when S3 itself has capacity. S3 Bucket Keys can reduce KMS request traffic and cost by reusing a bucket-level key for a limited period.'],
      takeaways:['SSE-KMS authorization spans S3 and the KMS key.','CloudTrail can record KMS key usage.','KMS request rate and cost affect high-throughput designs.'],
      examTip:'When SSE-KMS downloads are throttled, inspect KMS quotas or use an S3 Bucket Key; adding S3 prefixes does not solve a KMS bottleneck.'
    },
    {
      ready:true,title:'Supply external keys with SSE-C',
      summary:'Let S3 perform encryption while the customer retains and sends the encryption key for every object operation.',
      explanation:['SSE-C keeps the key outside AWS key management. The client supplies the key and its digest over HTTPS when uploading, reading, or copying the protected object; S3 uses it for the operation and does not retain the key. Losing the key makes the object unrecoverable.','SSE-C has limited integration with other AWS services and adds key-distribution responsibility to every client. As of April 2026, new general purpose buckets disable SSE-C writes by default, so a workload with a specific SSE-C requirement must deliberately enable it in the bucket encryption configuration.'],
      takeaways:['S3 does not store the customer-provided key.','HTTPS is mandatory for SSE-C operations.','The customer owns key availability, rotation, and delivery.'],
      examTip:'A requirement to keep encryption keys entirely outside AWS points to SSE-C or client-side encryption, but SSE-C still exposes plaintext to S3 during processing.'
    },
    {
      ready:true,title:'Encrypt objects before upload',
      summary:'Use client-side encryption when the application must control the full encryption and decryption lifecycle.',
      explanation:['With client-side encryption, the application encrypts data locally and uploads ciphertext as the S3 object. On retrieval, the application downloads that ciphertext and decrypts it. S3 stores and transfers an opaque encrypted payload.','The client must select a supported encryption library, protect data keys, record the metadata needed for decryption, and plan key rotation and recovery. This offers strong separation from the storage service but increases application complexity and can limit server-side processing of the object.'],
      takeaways:['Encryption and decryption happen in the client.','The application manages keys and cryptographic metadata.','S3 services cannot interpret the encrypted payload.'],
      examTip:'Choose client-side encryption when data must already be encrypted before it reaches S3.'
    },
    {
      ready:true,title:'Enforce TLS for data in transit',
      summary:'Deny unencrypted S3 requests with an explicit bucket-policy condition instead of relying on client defaults.',
      explanation:['HTTPS protects object data and credentials while they travel between a client and S3. Most SDKs use HTTPS automatically, and SSE-C requires it, but an explicit control is needed when a compliance rule says every request must be encrypted in transit.','A bucket policy can deny requests when the global condition key aws:SecureTransport is false. The explicit deny applies even if another identity policy allows the S3 action, which makes the requirement enforceable across callers rather than dependent on each application configuration.'],
      takeaways:['HTTPS provides encryption in transit.','aws:SecureTransport reports whether TLS is used.','An explicit deny overrides otherwise allowed HTTP access.'],
      examTip:'For “must use HTTPS” requirements, choose a bucket-policy Deny with aws:SecureTransport=false.'
    },
    {
      ready:true,title:'Combine default encryption and bucket policy controls',
      summary:'Understand the difference between automatically encrypting an accepted upload and rejecting a noncompliant upload.',
      explanation:['Default bucket encryption chooses the server-side encryption applied when a write request does not specify another allowed option. It protects stored data without requiring every uploader to send an encryption header.','A bucket policy is evaluated as authorization and can reject requests that do not specify the required encryption type or KMS key. Because policy evaluation occurs before default encryption is applied, a policy that demands a particular request header can deny an otherwise encryptable upload. Use default encryption for a safe fallback and policy conditions for strict caller behavior.'],
      takeaways:['Default encryption transforms accepted writes.','Bucket policies can reject writes before storage.','Policy conditions can require a specific KMS key or encryption header.'],
      examTip:'If every upload must explicitly request SSE-KMS, enforce the header in policy; merely setting SSE-KMS as the bucket default does not prove the client requested it.'
    },
    {
      ready:true,title:'Allow browser access with S3 CORS',
      summary:'Return the cross-origin response headers browsers require when a web page calls a different S3 origin.',
      explanation:['A browser origin is the combination of scheme, host, and port. JavaScript loaded from one origin cannot freely call another origin because browsers enforce the same-origin policy; S3 must return matching CORS headers for the browser to expose the response.','An S3 CORS rule lists allowed origins, HTTP methods, request headers, and optionally exposed response headers. Some requests trigger an OPTIONS preflight before the real call. CORS is a browser permission mechanism, not an S3 authorization mechanism, so IAM and bucket policies must still allow the underlying request.'],
      takeaways:['Different schemes, hosts, or ports create different origins.','CORS rules may authorize a preflighted method and headers.','CORS never grants S3 data permissions by itself.'],
      examTip:'If a browser blocks an otherwise authorized request from one S3 website origin to another, configure CORS on the bucket receiving the request.'
    },
    {
      ready:true,title:'Protect destructive actions with MFA Delete',
      summary:'Require a second authentication factor for permanent version deletion and versioning suspension.',
      explanation:['MFA Delete adds a token requirement to two high-impact operations: permanently deleting a specific object version and changing the bucket versioning state to suspended. It does not require MFA merely to enable versioning or list versions.','The bucket must have versioning enabled, and only the AWS account root user can enable or disable MFA Delete. This is a specialized safeguard, not a replacement for least privilege, Object Lock, backups, or avoiding everyday use of root credentials.'],
      takeaways:['MFA Delete protects permanent version deletion.','It also protects suspension of versioning.','Only the root user can change the MFA Delete setting.'],
      examTip:'A request to stop privileged users from casually deleting protected versions may point to MFA Delete; immutable retention requirements point to Object Lock.'
    },
    {
      ready:true,title:'Audit requests with S3 server access logging',
      summary:'Deliver detailed bucket request records to a separate destination bucket for investigation and analysis.',
      explanation:['S3 server access logging records requests made to a source bucket, including successful and denied activity, then delivers log objects to a destination bucket in the same Region. Delivery is best effort and not immediate, so it is useful for access analysis rather than real-time alerting.','Keep the destination separate from the monitored source. Writing logs back into the same bucket generates more logged writes and can create a recursive growth loop. Apply lifecycle retention to log objects and use query tools when the volume becomes large.'],
      takeaways:['Both authorized and denied requests can be logged.','The destination bucket must be in the same Region.','The source bucket must not log into itself.'],
      examTip:'For API-level governance and near-real-time event workflows, consider CloudTrail data events; for traditional S3 request logs, use server access logging.'
    },
    {
      ready:true,title:'Delegate temporary access with presigned URLs',
      summary:'Grant time-limited access to one private-object operation without changing the bucket to public.',
      explanation:['A presigned URL contains a SigV4 authorization created from an IAM principal and an expiration. Anyone holding the URL can perform the signed action, such as GET or PUT, until it expires, subject to the permissions and continuing validity of the signer\'s credentials.','Generate URLs on demand after application-level authorization, keep expirations short, and bind uploads to an exact bucket key. A presigned URL is a bearer capability: it can be shared, and deleting it from the application does not revoke the signature. Revocation usually requires changing the underlying permission, credentials, object, or an applicable policy.'],
      takeaways:['The bucket and object can remain private.','The URL cannot grant more than the signer is allowed.','Possession of the URL is sufficient until it expires or becomes invalid.'],
      examTip:'Temporary download or upload access for users without AWS credentials is a classic presigned URL scenario.'
    },
    {
      ready:true,title:'Lock Glacier archives with a Vault Lock policy',
      summary:'Turn a tested Glacier vault policy into an immutable WORM compliance control.',
      explanation:['S3 Glacier Vault Lock applies a policy to a Glacier vault and supports write-once-read-many retention controls. The workflow begins a lock with a validation period so the policy can be tested before it becomes permanent.','After the lock is finalized, the Vault Lock policy cannot be changed or removed. This is distinct from the ordinary vault access policy, which remains editable, and from S3 Object Lock, which protects individual object versions in S3 buckets.'],
      takeaways:['Vault Lock supports immutable WORM controls.','A validation period precedes final locking.','The locked retention policy cannot later be weakened.'],
      examTip:'If the scenario explicitly names a Glacier vault and an unchangeable compliance policy, choose Vault Lock rather than S3 Object Lock.'
    },
    {
      ready:true,title:'Retain object versions with S3 Object Lock',
      summary:'Prevent overwrite or deletion for a fixed retention period or an independent legal hold.',
      explanation:['S3 Object Lock requires versioning and protects individual object versions. Governance mode blocks ordinary users but allows specially authorized principals to bypass retention; compliance mode prevents deletion or shortening the retention even by the root user.','A retention period protects until a timestamp and can be extended. A legal hold has no expiration and remains until an authorized principal removes it; it operates independently of retention mode. Select the control from the legal requirement, not merely from a desire to reduce accidental deletion.'],
      takeaways:['Object Lock protects versions, not an unversioned key.','Governance mode supports privileged bypass.','Compliance mode cannot be shortened, even by root.'],
      examTip:'For SEC-style WORM retention where no administrator may shorten the period, use Object Lock in compliance mode.'
    },
    {
      ready:true,title:'Scale permissions with S3 Access Points',
      summary:'Give each application or team a distinct S3 endpoint and policy instead of expanding one bucket policy indefinitely.',
      explanation:['An S3 Access Point is a named endpoint attached to a bucket, with its own DNS name, network origin, and resource policy. Separate access points can expose only a finance prefix, allow read-only analytics, or isolate another application while all data remains in one bucket.','Access is still governed jointly: the access point policy, bucket policy, identity policies, and account-level controls must permit the operation. Access Points simplify delegation and policy ownership; they do not bypass the bucket\'s security boundary.'],
      takeaways:['Each access point has a unique endpoint and policy.','Multiple access patterns can share one bucket.','Bucket and access point authorization must align.'],
      examTip:'When one large shared bucket has an unwieldy policy for many teams, create purpose-specific S3 Access Points.'
    },
    {
      ready:true,title:'Keep S3 access private with a VPC Access Point',
      summary:'Restrict an access point to VPC traffic and authorize the complete path through an S3 VPC endpoint.',
      explanation:['A VPC-origin S3 Access Point can be reached only from the specified VPC. Workloads use an S3 gateway or interface endpoint so traffic does not require an internet gateway or public S3 endpoint.','Three policy layers commonly matter: the caller identity, the VPC endpoint, and the access point or bucket. A deny or missing allow at any required layer can stop the request. The endpoint policy must permit both the target access point and its underlying bucket operations.'],
      takeaways:['VPC-origin access points are not internet reachable.','An S3 VPC endpoint provides the private network path.','Endpoint, access point, bucket, and identity policies work together.'],
      examTip:'For S3 access that must be available only inside a VPC, pair a VPC-origin Access Point with an S3 VPC endpoint.'
    },
    {
      ready:true,title:'Transform responses with S3 Object Lambda',
      summary:'Study how a Lambda-backed access point can alter data during retrieval, while recognizing its current availability limits.',
      explanation:['S3 Object Lambda routes supported S3 requests through a Lambda function before returning the response. One stored object can therefore produce caller-specific views such as redacted records, converted formats, enriched documents, resized images, or watermarked assets without storing every variant.','The design uses a supporting S3 Access Point plus an Object Lambda Access Point and requires permissions for every hop. As of November 7, 2025, AWS limits S3 Object Lambda to existing customers already using it and select AWS Partner Network partners; new designs should evaluate alternatives such as CloudFront with Lambda-backed processing, API Gateway, Lambda URLs, or client-side transformation.'],
      takeaways:['Transformation occurs as data is returned.','A supporting standard access point connects to the source.','New customers generally need an alternative architecture.'],
      examTip:'For the course exam pattern, on-demand redaction or format conversion of one stored object identifies S3 Object Lambda; for a real new deployment, account for its current availability restriction.'
    }
  ];

  const sectionFifteenLectures=[
    {
      ready:true,title:'Deliver content globally with CloudFront',
      summary:'Cache content near viewers to reduce latency, protect origins, and improve the experience of a global audience.',
      explanation:['Amazon CloudFront is a content delivery network built from globally distributed edge locations. A viewer request reaches a nearby edge; CloudFront serves a cached response when possible or forwards the request to the configured origin and caches the result according to the behavior and cache policy.','The cache key, time to live, HTTP methods, cookies, headers, and query strings determine whether requests share cached objects. CloudFront also integrates with AWS Shield and AWS WAF, giving public applications an edge layer for DDoS resilience and web-request filtering.'],
      takeaways:['Edge caches shorten the path between viewers and content.','A cache miss causes CloudFront to request the origin.','Cache policies control the cache key and expiration.'],
      examTip:'Static content requested globally with a need to reduce origin load is a strong CloudFront signal.'
    },
    {
      ready:true,title:'Select and secure a CloudFront origin',
      summary:'Connect CloudFront to S3, private VPC resources, or a public HTTP server without exposing more than necessary.',
      explanation:['A distribution can use an S3 bucket, a custom HTTP origin, or a VPC origin. For a normal S3 bucket, Origin Access Control signs origin requests so the bucket policy can allow CloudFront while Block Public Access remains enabled. An S3 static-website endpoint is instead treated as a public custom origin.','CloudFront VPC origins can privately reach supported Application Load Balancers, Network Load Balancers, and EC2 instances in private subnets. For older public-origin designs, the load balancer or instance must be internet reachable and security rules can restrict incoming traffic to CloudFront origin-facing addresses or managed prefix lists.'],
      takeaways:['OAC keeps a regular S3 origin private.','S3 website endpoints are public custom origins.','VPC origins remove the need to expose supported backends publicly.'],
      examTip:'To serve a private S3 bucket through CloudFront, use OAC plus a bucket policy—not an S3 website endpoint.'
    },
    {
      ready:true,title:'Choose CloudFront or S3 replication',
      summary:'Distinguish an expiring edge cache from durable object copies stored in selected AWS Regions.',
      explanation:['CloudFront creates temporary cached copies at many edge locations after viewers request content. It is optimized for global delivery, and objects age out or refresh according to cache policy; the edge copy is not an independent source of truth.','S3 Cross-Region Replication asynchronously creates durable object versions in explicitly chosen destination Regions. It fits compliance, disaster recovery, regional data ownership, and low-latency S3 access in a small set of Regions, but it does not provide CloudFront\'s global viewer edge network.'],
      takeaways:['CloudFront caches at edge locations.','CRR stores durable copies in chosen Regions.','CloudFront is demand driven; replication follows eligible writes.'],
      examTip:'Global delivery of popular static assets points to CloudFront; a durable bucket copy required in another Region points to CRR.'
    },
    {
      ready:true,title:'Control geography and refresh CloudFront caches',
      summary:'Apply country-level viewer restrictions and remove stale cached paths before their TTL expires.',
      explanation:['CloudFront geo restriction can allow only selected countries or block selected countries based on the viewer IP geolocation. It is useful for broad licensing or distribution boundaries, though applications needing user-level entitlements still require authorization such as signed URLs or signed cookies.','Changing a file at the origin does not immediately remove previously cached bytes. A CloudFront invalidation marks specified paths, such as one object or a wildcard subtree, as stale so the next request returns updated content. Versioned filenames are often cheaper and safer for routine releases because both old and new assets can coexist.'],
      takeaways:['Geo restriction works at country granularity.','Invalidation bypasses the remaining cache TTL for matching paths.','Versioned object names avoid most invalidations.'],
      examTip:'Use invalidation when an already cached path must refresh immediately; lowering the TTL only affects future cache behavior.'
    },
    {
      ready:true,title:'Enter AWS through Global Accelerator anycast addresses',
      summary:'Give clients stable global IP entry points and move long-distance traffic onto the AWS network quickly.',
      explanation:['A unicast address identifies one network location, while an anycast address is advertised from many locations and routes a client toward a nearby entry point. AWS Global Accelerator exposes static anycast IP addresses at the AWS edge and carries accepted traffic across the AWS global network to application endpoints.','An IPv4 accelerator receives two static IPv4 addresses; dual-stack provides two IPv4 and two IPv6 addresses. Because these addresses remain attached for the life of the accelerator, clients and firewalls can use stable allowlists even while regional endpoints change behind them.'],
      takeaways:['Anycast routes the same address toward a nearby edge.','Global Accelerator provides stable client entry points.','Dual-stack accelerators support IPv4 and IPv6.'],
      examTip:'A global application that must expose fixed IP addresses to enterprise allowlists is a Global Accelerator use case.'
    },
    {
      ready:true,title:'Route to healthy regional endpoints with Global Accelerator',
      summary:'Improve network consistency and regional failover for ALB, NLB, EC2, and Elastic IP endpoints.',
      explanation:['A standard accelerator has listeners, regional endpoint groups, and endpoints. It supports TCP and UDP and can direct traffic to Application Load Balancers, Network Load Balancers, EC2 instances, and Elastic IP addresses according to client location, endpoint health, weights, and regional traffic dials.','Health checks remove unhealthy endpoints from normal routing and enable fast failover for new connections without waiting for DNS caches to expire. Traffic enters the AWS network at the edge, reducing exposure to variable public-internet paths, while Shield protection and a small static address set simplify the public security boundary.'],
      takeaways:['Endpoint groups represent AWS Regions.','Health and routing policy influence endpoint choice.','Traffic dials and weights support controlled traffic shifts.'],
      examTip:'Deterministic regional failover without DNS propagation delay strongly favors Global Accelerator.'
    },
    {
      ready:true,title:'Choose CloudFront or Global Accelerator',
      summary:'Match HTTP content delivery and edge caching to CloudFront, or packet acceleration and static IPs to Global Accelerator.',
      explanation:['Both services use AWS edge locations and the AWS global network, and both benefit from AWS Shield. CloudFront is an HTTP and HTTPS reverse proxy that can cache responses, apply cache behaviors, integrate with WAF, and serve content directly from the edge.','Global Accelerator operates at the network layer for TCP and UDP. It proxies connections from static anycast addresses to healthy regional endpoints without caching application content, making it suitable for gaming, voice, IoT, non-HTTP protocols, static-IP requirements, and rapid multi-Region failover.'],
      takeaways:['CloudFront understands HTTP caching and content behavior.','Global Accelerator supports TCP and UDP without caching.','Static anycast IPs are a defining Global Accelerator feature.'],
      examTip:'Choose CloudFront for a CDN or edge HTTP controls; choose Global Accelerator for UDP, fixed IPs, or fast endpoint failover.'
    }
  ];

  const sectionSixteenLectures=[
    {
      ready:true,title:'Move offline data and compute at the edge with Snowball',
      summary:'Understand the physical-transfer and disconnected-compute pattern, together with the service\'s current availability limits.',
      explanation:['Snowball Edge devices were designed to move very large data sets when bandwidth, transfer time, network cost, or connectivity makes online migration impractical. AWS ships a secured device, the customer copies data locally, and the device is returned for import into AWS. Workloads can also run compute close to where data is produced in disconnected locations.','A Snowball import lands data in S3, not directly in an S3 Glacier storage class; use a Lifecycle rule after import when archival is required. As of November 7, 2025, new customers cannot order AWS Snow Family devices. AWS recommends DataSync for online transfer, Data Transfer Terminal or partners for secure physical movement, and Outposts for new edge-compute designs.'],
      takeaways:['Physical transfer avoids dependence on a constrained WAN.','Glacier ingestion requires an S3 landing step and lifecycle transition.','Snowball Edge remains available only to existing customers.'],
      examTip:'For the course pattern, a petabyte migration that would take weeks over the network identifies Snowball; for a real new customer, evaluate AWS\'s current alternatives.'
    },
    {
      ready:true,title:'Run Windows shares with FSx for Windows File Server',
      summary:'Provide managed SMB and NTFS storage with Microsoft identity integration and Multi-AZ availability options.',
      explanation:['Amazon FSx for Windows File Server provides a native Windows file system accessible through SMB. It integrates with Microsoft Active Directory and supports familiar Windows capabilities such as NTFS ACLs, user quotas, and Distributed File System namespaces. Linux clients can also mount the SMB share.','SSD storage fits latency-sensitive, IOPS-heavy workloads, while HDD storage fits throughput-oriented file shares at lower cost. Clients can connect from EC2 or from on premises through VPN or Direct Connect, and Multi-AZ deployment supports higher availability for production shares.'],
      takeaways:['FSx for Windows uses SMB and NTFS.','Active Directory supplies user authentication and authorization context.','Multi-AZ deployment improves file-service availability.'],
      examTip:'A managed shared drive requiring SMB, Windows ACLs, and Active Directory points to FSx for Windows—not EFS.'
    },
    {
      ready:true,title:'Accelerate parallel workloads with FSx for Lustre',
      summary:'Use a high-throughput Linux file system for HPC, machine learning, analytics, and media processing.',
      explanation:['Amazon FSx for Lustre is a managed parallel file system built for workloads that need very high throughput, high IOPS, and low latency across many compute nodes. It can link to S3 so applications process bucket objects through a file-system interface and export results back to S3.','Scratch deployments prioritize temporary burst performance and do not replicate data across file servers, so source and output should live elsewhere. Persistent deployments replicate data within an Availability Zone and replace failed file servers, making them appropriate for longer-running or sensitive workloads.'],
      takeaways:['Lustre is optimized for parallel Linux computation.','S3 integration connects durable object data to file-based processing.','Scratch favors temporary speed; persistent favors durability.'],
      examTip:'A compute cluster that must process an S3 data set through a high-performance shared file system strongly suggests FSx for Lustre.'
    },
    {
      ready:true,title:'Choose FSx for NetApp ONTAP or OpenZFS',
      summary:'Preserve enterprise NAS features or ZFS semantics while moving managed file storage to AWS.',
      explanation:['FSx for NetApp ONTAP supports NFS, SMB, and iSCSI and fits organizations migrating existing NetApp or multiprotocol NAS workloads. It adds ONTAP features such as snapshots, replication, compression, deduplication, automatic capacity changes, and space-efficient clones.','FSx for OpenZFS provides managed ZFS storage over NFS and is the natural fit for applications already relying on ZFS behavior. It offers low-latency performance, snapshots, compression, and fast clones, but it does not provide ONTAP\'s SMB and iSCSI multiprotocol compatibility.'],
      takeaways:['ONTAP supports NFS, SMB, and iSCSI.','OpenZFS exposes managed ZFS through NFS.','Both support snapshots and rapid cloning workflows.'],
      examTip:'Choose ONTAP for NetApp or multiprotocol migration; choose OpenZFS for a ZFS/NFS workload.'
    },
    {
      ready:true,title:'Bridge local file applications with Storage Gateway',
      summary:'Expose cloud-backed storage through familiar on-premises protocols while caching hot data locally.',
      explanation:['AWS Storage Gateway is a hybrid storage layer deployed as a local virtual machine, appliance, or supported cloud instance. It connects applications using file, block, or virtual-tape protocols to durable AWS storage over encrypted links, supporting migration, backup, disaster recovery, and tiered storage.','S3 File Gateway presents S3-backed objects through NFS or SMB and caches recently used content locally. IAM roles control bucket access, SMB can integrate with Active Directory, and S3 Lifecycle policies transition objects into archive classes after they have entered the bucket.'],
      takeaways:['The gateway preserves familiar local storage protocols.','A local cache provides low-latency access to active data.','S3 File Gateway maps NFS or SMB files to S3 objects.'],
      examTip:'An on-premises file application that must use NFS or SMB while storing durable data as S3 objects points to S3 File Gateway.'
    },
    {
      ready:true,title:'Present cloud-backed iSCSI with Volume Gateway',
      summary:'Choose cached or stored volumes according to where the authoritative block data must live.',
      explanation:['Volume Gateway presents iSCSI block volumes to on-premises servers and creates point-in-time backups as EBS snapshots. Those snapshots support restoring a local volume or creating an EBS volume for disaster recovery in AWS.','Cached volumes keep primary data in AWS and retain frequently accessed blocks in the local cache, reducing on-premises capacity needs. Stored volumes keep the complete primary data set locally for low-latency access and asynchronously back it up to AWS.'],
      takeaways:['Applications mount Volume Gateway through iSCSI.','Cached mode places primary data in AWS.','Stored mode keeps primary data on premises.'],
      examTip:'If the entire data set must remain locally available but needs cloud snapshots, choose stored volumes; if local capacity is constrained, choose cached volumes.'
    },
    {
      ready:true,title:'Replace physical tape infrastructure with Tape Gateway',
      summary:'Keep existing backup software and tape workflows while storing virtual tapes in AWS.',
      explanation:['Tape Gateway presents an iSCSI Virtual Tape Library with virtual tape drives and a media changer, allowing supported backup applications to operate much as they do with physical tape systems. Active virtual tapes use cloud storage rather than hardware cartridges.','Ejecting a virtual tape from the backup application archives it into lower-cost AWS storage for long retention. This pattern removes physical tape transport and facilities while preserving established backup catalogs, schedules, and operational processes.'],
      takeaways:['Tape Gateway exposes an iSCSI VTL.','Existing supported backup software can keep its tape workflow.','Archived virtual tapes provide low-cost long-term retention.'],
      examTip:'A company must retire its physical tape library without changing tape-oriented backup software: choose Tape Gateway.'
    },
    {
      ready:true,title:'Modernize managed file exchange with AWS Transfer Family',
      summary:'Land partner and user transfers directly in AWS storage while retaining familiar transfer protocols and identities.',
      explanation:['AWS Transfer Family provides managed endpoints for SFTP, FTPS, FTP, AS2 business exchanges, and browser-based transfers. Files can flow into or out of S3 and supported workflows can also use EFS, while the service handles highly available endpoint infrastructure and scaling.','Authentication can use service-managed users, Microsoft Active Directory, or custom identity providers backed by API Gateway or Lambda, depending on protocol and endpoint type. Prefer SFTP or FTPS for encrypted transport; plain FTP sends credentials and data without transport encryption and is limited to appropriate private-network designs.'],
      takeaways:['Transfer Family preserves common partner-facing protocols.','S3 or EFS provides the durable storage backend.','Identity and endpoint choices depend on the selected protocol.'],
      examTip:'When partners insist on SFTP but the destination must be S3 without self-managed servers, use AWS Transfer Family.'
    },
    {
      ready:true,title:'Automate storage movement with AWS DataSync',
      summary:'Schedule accelerated, validated copies between on-premises, other clouds, and AWS storage services.',
      explanation:['AWS DataSync moves file and object data between supported locations such as NFS, SMB, HDFS, S3-compatible storage, Amazon S3, EFS, and FSx. Transfers from on premises or another cloud use a DataSync agent; transfers between supported AWS storage services generally do not.','A task defines source, destination, schedule, filters, verification, and bandwidth controls. DataSync parallelizes transfer and preserves supported metadata and permissions, making it a migration and recurring synchronization service rather than a live application file-system protocol.'],
      takeaways:['External locations normally require a DataSync agent.','AWS-to-AWS transfers can run without an agent.','Tasks can schedule, filter, throttle, and verify copies.'],
      examTip:'For a repeatable NFS or SMB migration that must preserve metadata and run nightly, choose DataSync rather than Snowball or Storage Gateway.'
    },
    {
      ready:true,title:'Select the right AWS storage and transfer service',
      summary:'Start with the data interface and operating pattern, then choose a storage target and movement method.',
      explanation:['Choose object storage for API-addressed objects, block storage for mounted volumes, and file storage for shared hierarchical namespaces. S3 and archive classes serve objects; EBS and instance store serve EC2 block needs; EFS provides managed Linux NFS; the FSx families supply specialized Windows, Lustre, ONTAP, and OpenZFS file systems.','Then separate access from movement. Storage Gateway gives on-premises applications a persistent hybrid protocol, Transfer Family accepts partner file-transfer protocols, DataSync performs scheduled data copies, and physical-transfer services address data sets that cannot cross the available network in time. Databases belong in the decision only when indexing, transactions, or query semantics are required.'],
      takeaways:['Interface requirements narrow object, block, and file choices.','Persistent hybrid access differs from a migration copy.','Protocol compatibility is often the decisive scenario clue.'],
      examTip:'Identify the required protocol first—S3 API, iSCSI, NFS, SMB, SFTP, or tape—before comparing cost or performance.'
    }
  ];

  const sectionSeventeenLectures=[
    {
      ready:true,title:'Decouple application communication',
      summary:'Replace fragile chains of synchronous calls with buffers, pub/sub delivery, or replayable streams when workloads need independent scale.',
      explanation:['A synchronous request makes the caller wait for the downstream service and often propagates latency, errors, and traffic spikes through the architecture. Asynchronous messaging accepts work quickly and lets producers and consumers operate, fail, deploy, and scale more independently.','Choose the interaction model before the product: SQS is a work queue with competing consumers, SNS pushes one publication to multiple subscribers, and Kinesis Data Streams stores an ordered event log for real-time processing and replay. Decoupling improves resilience but introduces eventual processing, retries, duplicate handling, and observability requirements.'],
      takeaways:['Synchronous dependencies can amplify failures and traffic spikes.','A queue buffers work between independently scaled tiers.','Pub/sub and streams solve different multi-consumer needs.'],
      examTip:'A sudden burst overwhelms a slower backend: place SQS between the tiers and scale workers from queue backlog.'
    },
    {
      ready:true,title:'Process work with an SQS Standard queue',
      summary:'Persist messages until competing consumers successfully process and explicitly delete them.',
      explanation:['A producer calls SendMessage and SQS durably retains the message until it is deleted or reaches its retention limit. Consumers poll for batches, process the work, and call DeleteMessage with the receipt handle only after the business operation succeeds.','Standard queues offer very high, automatically scaling throughput with at-least-once delivery and best-effort ordering. Consumers must therefore be idempotent: processing the same order or event more than once should not create an incorrect second outcome. Messages can be up to 1 MiB; larger payload patterns store data in S3 and queue a reference.'],
      takeaways:['Messages remain until deleted or expired.','Multiple consumers compete for queued work.','Standard queues can duplicate or reorder delivery.'],
      examTip:'When order is unimportant but massive elastic throughput and reliable buffering matter, choose an SQS Standard queue.'
    },
    {
      ready:true,title:'Scale workers from SQS backlog',
      summary:'Use queue depth and message age to match consumer capacity to buffered demand without dropping requests.',
      explanation:['SQS separates admission rate from processing rate. A front end can enqueue work through a spike while an Auto Scaling group, ECS service, or Lambda event source adds consumers and drains the backlog at a safe rate for downstream databases and APIs.','ApproximateNumberOfMessagesVisible measures queued work, while ApproximateAgeOfOldestMessage reveals whether latency is becoming unacceptable. Scaling only from raw queue length can be misleading; a useful target relates backlog to active consumer capacity and the business processing-time objective.'],
      takeaways:['SQS absorbs short-lived producer spikes.','Consumers can scale horizontally and independently.','Backlog age often expresses user impact better than depth alone.'],
      examTip:'To protect a database from burst writes, enqueue requests and let a controlled worker fleet write at sustainable concurrency.'
    },
    {
      ready:true,title:'Secure an SQS queue',
      summary:'Combine identity permissions, queue resource policies, encryption, and private connectivity for controlled messaging.',
      explanation:['IAM identity policies govern which SQS API calls a principal may make. A queue policy supplies resource-based authorization, which is especially important for cross-account consumers or allowing an AWS service such as SNS or S3 to send messages. Conditions should constrain the expected source resource and account.','HTTPS protects messages in transit, server-side encryption protects queue contents at rest with SQS-managed or KMS keys, and client-side encryption protects payloads before they reach the service. A VPC endpoint can keep API traffic on private AWS networking, but its endpoint policy becomes another authorization layer.'],
      takeaways:['Queue policies enable cross-account and service-to-service access.','KMS encryption adds key-policy and request considerations.','Resource conditions prevent confused-deputy access.'],
      examTip:'For SNS fan-out into SQS, the queue policy must allow that SNS topic to call SendMessage.'
    },
    {
      ready:true,title:'Tune the SQS visibility timeout',
      summary:'Hide in-flight work long enough to finish while still recovering promptly from failed consumers.',
      explanation:['ReceiveMessage makes a message temporarily invisible; it does not remove it. If the consumer deletes the message before the visibility timeout expires, processing is complete. Otherwise the message becomes visible again so another consumer can retry it.','A timeout shorter than normal processing causes concurrent duplicate work, while an excessively long timeout delays recovery after a crash. Consumers with variable job duration can call ChangeMessageVisibility as progress continues. Pair retries with a dead-letter queue so repeatedly failing messages do not circulate forever.'],
      takeaways:['Visibility is a processing lease, not deletion.','Expired leases make messages available again.','ChangeMessageVisibility can extend a running job.'],
      examTip:'If healthy workers receive the same long-running job before completion, increase or dynamically extend the visibility timeout.'
    },
    {
      ready:true,title:'Reduce empty receives with SQS long polling',
      summary:'Wait briefly for messages instead of repeatedly issuing empty short-poll requests.',
      explanation:['Short polling returns immediately from a subset of SQS servers and may produce an empty response even when messages exist elsewhere. Long polling waits for a message for up to the configured receive wait time and queries the queue more broadly.','Long polling lowers empty responses and API cost while often reducing the delay between arrival and consumption. Configure it as a queue default or per ReceiveMessage request, and make the client HTTP timeout longer than the polling wait so the connection is not aborted first.'],
      takeaways:['Long polling can wait up to 20 seconds.','It reduces empty API responses and cost.','Client timeouts must exceed the wait time.'],
      examTip:'The preferred optimization for consumers making many empty ReceiveMessage calls is long polling, not a shorter loop interval.'
    },
    {
      ready:true,title:'Preserve ordered work with SQS FIFO',
      summary:'Group related messages for strict ordering and deduplicate producer retries when sequence correctness matters.',
      explanation:['A FIFO queue preserves order within each MessageGroupId. One group is processed sequentially, while independent groups can be processed in parallel, so partitioning work by customer, account, or entity provides both correctness and throughput.','A MessageDeduplicationId or content-based deduplication suppresses repeated sends within the deduplication interval. FIFO provides exactly-once processing semantics at the queue layer, but consumers must still make downstream side effects idempotent. High-throughput FIFO mode and batching can substantially exceed the original per-queue transaction rate.'],
      takeaways:['Ordering is scoped to a message group.','Deduplication protects against repeated sends.','More groups allow greater parallel processing.'],
      examTip:'Transactions for each account must stay ordered while different accounts run concurrently: use SQS FIFO with account ID as MessageGroupId.'
    },
    {
      ready:true,title:'Publish one event to many SNS subscribers',
      summary:'Fan a message out from one topic to queues, functions, webhooks, notifications, and delivery streams.',
      explanation:['With Amazon SNS, a producer publishes once to a topic and SNS pushes a copy to every matching subscription. Supported endpoints include SQS, Lambda, HTTP/S, email, SMS, mobile push, and Amazon Data Firehose, subject to topic type and regional feature support.','SNS removes direct producer-to-consumer integrations, making it easy to add subscribers later. Standard topics prioritize high-throughput fan-out and may deliver more than once or out of order, so downstream processing must tolerate those semantics.'],
      takeaways:['Publishers target a topic rather than each receiver.','Subscriptions define independent delivery endpoints.','Standard topics favor broad elastic fan-out.'],
      examTip:'One business event must immediately notify several unlike destinations: publish it to an SNS Standard topic.'
    },
    {
      ready:true,title:'Control SNS publishing and delivery',
      summary:'Authorize topic use, protect message data, and connect AWS service events without broad access.',
      explanation:['Publishers use the SNS Publish API or supported service integrations, while topic resource policies allow cross-account principals and AWS services to publish or subscribe. Combine the topic ARN with source-account and source-resource conditions when granting a service access.','HTTPS protects API traffic, server-side encryption can use KMS for stored message data, and client-side encryption protects application payloads end to end. Delivery retries vary by endpoint type, and an SNS subscription dead-letter queue can retain messages that exhaust their retry policy.'],
      takeaways:['Topic policies provide resource-based authorization.','Many AWS services publish events directly to SNS.','Subscription DLQs capture exhausted deliveries.'],
      examTip:'If S3 must publish to an SNS topic, authorize the bucket in the topic policy; an IAM role on S3 is not the normal mechanism.'
    },
    {
      ready:true,title:'Build durable fan-out with SNS and SQS',
      summary:'Give each subscriber an independent persistent backlog, retry policy, and processing rate.',
      explanation:['Subscribing multiple SQS queues to one SNS topic combines push fan-out with durable pull-based processing. SNS copies each publication to every permitted queue, and each consumer fleet drains its own backlog without delaying or competing with the others.','The SQS queue policy must allow the topic to send messages. Add per-queue dead-letter handling and monitoring, and enable raw message delivery only when consumers should receive the original body without the SNS envelope. Cross-Region SNS-to-SQS delivery is available for supported configurations.'],
      takeaways:['Each queue receives its own durable message copy.','Subscribers scale and retry independently.','The queue resource policy authorizes SNS delivery.'],
      examTip:'Fraud, shipping, and analytics must all process every order at different speeds: fan out SNS to one SQS queue per consumer.'
    },
    {
      ready:true,title:'Filter and order SNS fan-out',
      summary:'Route only relevant messages per subscription and use FIFO topics when ordered publication must reach queues.',
      explanation:['An SNS subscription filter policy evaluates message attributes or the message body and delivers only matching publications. Subscriptions without a filter receive every message, so one topic can support placed, cancelled, and declined workflows without forcing each consumer to discard irrelevant events.','SNS FIFO topics add message groups and deduplication. They can deliver to SQS FIFO or standard queues, but strict end-to-end ordering and deduplication require FIFO queues. Different message groups can move in parallel, and filtering still applies to FIFO subscriptions.'],
      takeaways:['Filters operate independently for each subscription.','FIFO topics preserve order within message groups.','A standard subscriber gives up FIFO delivery guarantees.'],
      examTip:'For ordered fan-out to several independently processed queues, use an SNS FIFO topic with SQS FIFO subscriptions.'
    },
    {
      ready:true,title:'Store replayable events in Kinesis Data Streams',
      summary:'Capture continuously produced records for multiple real-time consumers that can reread retained history.',
      explanation:['Kinesis Data Streams is a durable streaming log for clickstreams, telemetry, metrics, logs, and other ongoing event sources. Producers append records and consumers read them in real time without deleting them, allowing independent applications to process or replay the same retained sequence.','A partition key maps a record to a shard and guarantees ordering only among records with the same key. Retention starts at 24 hours and can extend to 365 days. Records are encrypted in transit and can use KMS at rest; the current maximum data payload is 10 MiB, though streams are optimized for frequent smaller events.'],
      takeaways:['Consumers do not delete stream records.','Retention enables replay and new consumers.','Ordering is scoped to the partition key and shard.'],
      examTip:'Multiple analytics applications need real-time events plus the ability to replay yesterday\'s data: choose Kinesis Data Streams.'
    },
    {
      ready:true,title:'Plan Kinesis capacity and consumers',
      summary:'Choose provisioned shards or on-demand scaling and isolate high-throughput readers when necessary.',
      explanation:['Provisioned mode exposes shards as capacity units, so operators choose and reshard capacity according to record count and byte rate. On-demand mode automatically manages shards and is appropriate for uncertain or rapidly changing traffic, with pricing based on stream use and transferred data.','Shared-throughput consumers poll shards and share each shard\'s read capacity. Enhanced fan-out registers consumers and gives each one dedicated per-shard throughput with push-style delivery. A well-distributed partition key prevents one hot shard from throttling an otherwise underused stream.'],
      takeaways:['Provisioned mode requires shard capacity planning.','On-demand mode adapts capacity automatically.','Enhanced fan-out isolates registered consumer throughput.'],
      examTip:'One partition key causes throttling while other shards are idle: redesign the key distribution before simply adding consumers.'
    },
    {
      ready:true,title:'Deliver streams with Amazon Data Firehose',
      summary:'Buffer, transform, convert, and load streaming records into managed analytics destinations without consumer code.',
      explanation:['Amazon Data Firehose is a fully managed delivery service that accepts records directly or from sources such as Kinesis Data Streams, then batches them into S3, Redshift through S3 staging, OpenSearch, supported partners, or HTTP endpoints. It scales automatically and delivers near real time according to buffering conditions.','Firehose can invoke Lambda transformations, compress data, convert JSON into columnar formats such as Parquet or ORC, and back up all or failed records to S3. Unlike Kinesis Data Streams, Firehose is a delivery pipeline rather than a replayable retained log.'],
      takeaways:['Firehose delivers to configured storage and analytics targets.','Buffering makes delivery near real time, not record-by-record real time.','The service does not provide stream replay.'],
      examTip:'To load application events into S3 as compressed Parquet with minimal operations, choose Amazon Data Firehose.'
    },
    {
      ready:true,title:'Choose SQS, SNS, or Kinesis',
      summary:'Match work distribution, immediate fan-out, or ordered replayable streaming to the application contract.',
      explanation:['Use SQS when each message represents work normally handled by one competing consumer and persistence should bridge producer and worker speed. Use SNS when one publication must be pushed to many independent subscribers, especially across multiple endpoint types.','Use Kinesis Data Streams when records form a time-ordered stream that multiple consumers read independently and may replay. SNS-to-SQS combines broadcast with durable per-consumer queues, while Data Firehose is the managed delivery choice when the destination matters more than custom stream consumption.'],
      takeaways:['SQS distributes queued work.','SNS broadcasts notifications.','Kinesis retains ordered records for independent readers.'],
      examTip:'Ask whether the scenario needs one worker, every subscriber, or many replaying readers; that distinction usually selects SQS, SNS, or Kinesis.'
    },
    {
      ready:true,title:'Preserve broker protocols with Amazon MQ',
      summary:'Migrate ActiveMQ or RabbitMQ applications without immediately rewriting them for AWS-native messaging APIs.',
      explanation:['Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ. It supports established broker protocols and APIs used by traditional applications, making it a compatibility bridge when changing application messaging code to SQS and SNS would be costly or risky.','Unlike the serverless scale model of SQS and SNS, brokers run on provisioned instances and require capacity choices. High-availability deployments use redundant brokers across Availability Zones with engine-appropriate replicated storage or quorum behavior, while client libraries must reconnect to the available endpoint during failover.'],
      takeaways:['Amazon MQ supports ActiveMQ and RabbitMQ engines.','It preserves common open messaging protocols.','Broker capacity and failover still require design attention.'],
      examTip:'A lift-and-shift application depends on JMS, AMQP, MQTT, STOMP, or OpenWire: choose Amazon MQ instead of rewriting it for SQS/SNS.'
    }
  ];

  const sectionEighteenLectures=[
    {
      ready:true,title:'Package applications as container images',
      summary:'Build an immutable image once and run consistent isolated processes across developer machines and AWS compute.',
      explanation:['A container image bundles application code, runtime, libraries, and configuration defaults into a versioned artifact. A Dockerfile defines how to build that artifact; a registry stores it; and a container runtime starts isolated processes from the image.','Containers share the host operating-system kernel, so they start faster and use less overhead than virtual machines that each include a guest OS. They improve deployment consistency but do not erase architecture differences such as CPU instruction set, kernel features, persistent storage, networking, or secrets.'],
      takeaways:['A Dockerfile produces a reusable image.','A registry distributes image versions.','Containers share a host kernel while VMs include guest operating systems.'],
      examTip:'When the requirement is portable, repeatable packaging for microservices, think container image plus ECR and a container orchestrator.'
    },
    {
      ready:true,title:'Run ECS tasks on EC2 or Fargate',
      summary:'Choose control over cluster instances or serverless task capacity while keeping the same ECS application model.',
      explanation:['Amazon ECS schedules containers as tasks from a task definition, while an ECS service maintains a desired number of long-running tasks. With the EC2 capacity model, the customer provisions instances, installs or uses the ECS agent, patches the operating system, and ensures the cluster has enough CPU and memory.','AWS Fargate supplies task-level compute without exposing worker instances. The customer chooses supported CPU, memory, networking, and platform settings and pays for task resources. EC2 offers deeper host control and potentially better bin-packing economics; Fargate minimizes infrastructure operations and scales capacity with tasks.'],
      takeaways:['Task definitions describe containers and resources.','ECS services maintain long-running desired task count.','Fargate removes worker-instance management.'],
      examTip:'If the team wants ECS without patching or sizing EC2 hosts, choose Fargate; host customization or special instance hardware favors EC2 capacity.'
    },
    {
      ready:true,title:'Separate ECS infrastructure and application IAM',
      summary:'Give the ECS agent only infrastructure permissions and each workload its own least-privilege task role.',
      explanation:['On EC2 capacity, the container-instance role lets the ECS agent register the host, pull images, publish logs, and perform other cluster operations. A task execution role lets the ECS or Fargate agent perform actions on behalf of a task at startup, such as pulling a private ECR image or retrieving referenced secrets.','The task role is delivered to application containers and authorizes their AWS API calls. Different services should receive different task roles even when they share a cluster or instance; placing application data permissions on the EC2 instance role can accidentally expose them to every task on that host.'],
      takeaways:['The instance role supports the ECS agent on EC2.','The execution role supports task startup operations.','The task role belongs to application code.'],
      examTip:'A container needs to read one DynamoDB table: grant that action to its ECS task role, not the EC2 instance profile.'
    },
    {
      ready:true,title:'Connect and persist ECS services',
      summary:'Select load balancing and storage according to protocol, sharing scope, and lifecycle requirements.',
      explanation:['An Application Load Balancer fits most HTTP and HTTPS ECS services and supports path or host routing to multiple target groups. A Network Load Balancer fits TCP, UDP, static-IP, PrivateLink, or extremely high-throughput needs. Dynamic task registration allows services to replace and scale containers without fixed backend addresses.','Container-writable layers and task ephemeral storage are temporary. EFS provides a shared, persistent multi-AZ Linux file system for EC2 and Fargate tasks. ECS also supports EBS task volumes for durable high-performance block storage, including supported Fargate workloads, while service-managed task volumes have lifecycle behavior that must be checked before treating them as permanent data.'],
      takeaways:['ALB is the common choice for HTTP services.','NLB fits network-layer protocols and PrivateLink.','EFS shares persistent files; EBS provides block storage.'],
      examTip:'Several Fargate tasks across Availability Zones need the same persistent files: mount EFS rather than relying on container storage.'
    },
    {
      ready:true,title:'Scale ECS services and cluster capacity',
      summary:'Scale the number of tasks for demand and, on EC2, separately ensure enough host capacity exists to place them.',
      explanation:['ECS Service Auto Scaling uses Application Auto Scaling to change desired task count. Target tracking can follow average CPU, memory, or ALB requests per target; step policies react to CloudWatch alarm ranges; and scheduled policies prepare for predictable demand.','Fargate obtains infrastructure as tasks launch, but EC2-backed services also need cluster capacity. An ECS capacity provider linked to an Auto Scaling group can add or remove instances as task placement demand changes. Scaling tasks without hosts leaves tasks pending; scaling hosts without tasks wastes capacity.'],
      takeaways:['Service scaling changes desired task count.','EC2 capacity scaling changes available cluster hosts.','Capacity providers coordinate task demand and Auto Scaling groups.'],
      examTip:'ECS tasks remain PENDING after service scale-out on EC2: the cluster likely lacks CPU or memory, so scale the capacity provider or Auto Scaling group.'
    },
    {
      ready:true,title:'Launch and observe event-driven ECS tasks',
      summary:'Run finite container jobs from events or schedules and react when tasks stop unexpectedly.',
      explanation:['EventBridge rules can call RunTask to start an ECS or Fargate task when an event matches or a schedule fires. This suits containerized image processing, hourly batch work, or jobs too specialized or long-running for a function, with the task role granting access to its input and output services.','Long-running ECS workers can also poll SQS and scale from backlog. ECS emits task state-change events to EventBridge, allowing an SNS notification, Lambda remediation, or workflow to respond when a task stops. Design every event-driven job for retries and duplicate invocation.'],
      takeaways:['EventBridge can start one-off ECS tasks.','SQS can buffer work for persistent ECS workers.','Task state changes can trigger operational automation.'],
      examTip:'A scheduled containerized batch job with no server management points to EventBridge RunTask targeting Fargate.'
    },
    {
      ready:true,title:'Store and govern images with Amazon ECR',
      summary:'Use an IAM-integrated private or public registry with scanning, lifecycle cleanup, and immutable release practices.',
      explanation:['Amazon Elastic Container Registry stores OCI-compatible container images in private repositories or publishes them through ECR Public. ECS, EKS, developer tools, and CI/CD systems authenticate through AWS permissions, so image pull failures often trace to repository, identity, network, or KMS policies.','Repository policies support cross-account access, lifecycle policies expire unneeded images, tag immutability prevents a release tag from being silently replaced, and replication can copy images across Regions or accounts. Basic scanning finds operating-system vulnerabilities; enhanced scanning integrates with Amazon Inspector for continuous operating-system and language-package findings.'],
      takeaways:['ECR is the AWS-managed container registry.','IAM and repository policies control image access.','Inspector-backed enhanced scanning continuously updates findings.'],
      examTip:'For private ECS images with AWS-native authentication and vulnerability scanning, store them in Amazon ECR.'
    },
    {
      ready:true,title:'Operate Kubernetes with Amazon EKS',
      summary:'Use an AWS-managed Kubernetes control plane when Kubernetes APIs and ecosystem portability are requirements.',
      explanation:['Amazon EKS runs a managed, highly available Kubernetes control plane while workloads run as Pods on customer-selected compute. Kubernetes Services and Ingress resources integrate with AWS load balancers, the VPC CNI connects Pods to VPC networking, and Container Insights can collect cluster metrics and logs.','EKS and ECS both orchestrate containers, but they expose different operational models and APIs. EKS fits teams already standardized on Kubernetes, using Kubernetes tools across clouds, or requiring its ecosystem. Multi-Region designs deploy a separate cluster in each Region and coordinate traffic and data outside the cluster.'],
      takeaways:['AWS manages the EKS Kubernetes control plane.','Pods run on a chosen EKS compute option.','Kubernetes portability and ecosystem are the main EKS differentiators.'],
      examTip:'An organization must preserve Kubernetes manifests and tooling from another environment: choose Amazon EKS rather than translating everything to ECS.'
    },
    {
      ready:true,title:'Choose EKS compute and node management',
      summary:'Balance infrastructure control, operational effort, workload compatibility, and cost across the current EKS compute choices.',
      explanation:['Managed node groups automate EC2 provisioning, draining, updates, and replacement through managed Auto Scaling groups, with On-Demand and Spot capacity. Self-managed nodes offer maximum host control. Fargate runs selected Pods in isolated serverless compute without node administration, but has workload and feature constraints.','EKS Auto Mode extends AWS management into compute autoscaling, networking, load balancing, DNS, block storage, and core agents using automatically provisioned nodes. EKS Hybrid Nodes connect supported on-premises or edge infrastructure. A cluster can mix several compute types, so labels, taints, affinities, and runtime requirements determine placement.'],
      takeaways:['Managed node groups reduce EC2 lifecycle work.','Fargate removes node management for supported Pods.','EKS Auto Mode manages a broader Kubernetes data-plane stack.'],
      examTip:'For the course baseline, “no worker nodes to manage” identifies Fargate; in current architectures also evaluate Auto Mode when managed EC2-backed Kubernetes capabilities are needed.'
    },
    {
      ready:true,title:'Attach persistent storage to EKS Pods',
      summary:'Use Kubernetes StorageClasses and CSI drivers to provision AWS block or shared file storage for stateful workloads.',
      explanation:['A PersistentVolumeClaim expresses a Pod\'s storage need, a StorageClass defines provisioning behavior, and an AWS Container Storage Interface driver connects Kubernetes to the backing service. EBS provides Availability-Zone-scoped block volumes, while EFS provides shared multi-AZ NFS storage and is supported for EKS on Fargate.','FSx CSI integrations serve specialized needs such as Lustre high-performance processing and NetApp ONTAP enterprise storage. Match volume topology to Pod scheduling: a Pod using EBS must run where its volume is attachable, while EFS is a better fit for many replicas across Availability Zones.'],
      takeaways:['CSI drivers integrate Kubernetes with AWS storage.','EBS is block storage with Availability Zone topology.','EFS supplies shared multi-AZ file access.'],
      examTip:'Multiple Kubernetes Pods in different Availability Zones need concurrent read-write file access: use EFS through its CSI driver.'
    }
  ];

  const sectionNineteenLectures=[
    {
      ready:true,title:'Think in serverless building blocks',
      summary:'Design around managed execution, data, identity, messaging, and orchestration services rather than long-lived servers.',
      explanation:['Serverless means the customer does not provision or patch the underlying servers; it does not mean servers cease to exist. Capacity is allocated by the service, scaling is driven by demand or configuration, and billing usually follows requests, execution, or consumed capacity.','AWS serverless architectures combine services such as Lambda, API Gateway, DynamoDB, S3, Cognito, SQS, SNS, EventBridge, Step Functions, Aurora Serverless, and Fargate. Reduced infrastructure work comes with service limits, event-driven failure modes, distributed tracing needs, and stronger dependence on managed-service contracts.'],
      takeaways:['AWS operates the underlying server fleet.','Serverless includes more than functions.','Managed scaling does not remove architectural limits.'],
      examTip:'A requirement to minimize server administration should trigger a composition of managed services, not automatically Lambda for every component.'
    },
    {
      ready:true,title:'Run event-driven code with AWS Lambda',
      summary:'Execute short-lived functions on demand with automatic scaling and usage-based billing.',
      explanation:['AWS Lambda runs a handler in response to a synchronous request, asynchronous event, or polling event source. Functions use managed language runtimes or custom runtimes; container-image packages must implement the Lambda Runtime API and are not arbitrary always-on containers.','Memory configuration also influences available CPU and network resources. Lambda suits bursty APIs, file processing, automation, and event handlers with bounded execution time, while ECS or Fargate is usually better for long-running processes, arbitrary images, specialized host needs, or protocols requiring persistent servers.'],
      takeaways:['Lambda scales by creating execution environments.','Billing follows requests and execution resources.','A Lambda container image must implement the Runtime API.'],
      examTip:'Choose Lambda for short event-driven execution; choose Fargate when a normal container must run longer or control its process model.'
    },
    {
      ready:true,title:'Connect Lambda to events and schedules',
      summary:'Use native integrations for object processing, stream consumption, queue workers, APIs, and recurring jobs.',
      explanation:['Services can invoke Lambda directly, deliver events asynchronously, or expose records through an event source mapping that Lambda polls. S3 object events can start thumbnail generation, API Gateway can invoke request handlers, and SQS or Kinesis event source mappings batch records for scalable processing.','EventBridge rules invoke functions from schedules or matching events, replacing server-based cron jobs. Each integration has its own retry, ordering, batching, and failure-destination behavior, so the architecture must define idempotency and what happens after repeated failure.'],
      takeaways:['Invocation models differ by event source.','EventBridge supplies schedules and event routing.','Consumers must tolerate retries and duplicates.'],
      examTip:'For an hourly serverless task, use an EventBridge schedule targeting Lambda rather than keeping an EC2 cron host running.'
    },
    {
      ready:true,title:'Design within Lambda quotas',
      summary:'Account for execution duration, memory, temporary disk, deployment size, environment configuration, and concurrency.',
      explanation:['A Lambda invocation has a maximum execution duration of 15 minutes and runs with configured memory, proportional compute, and configurable ephemeral storage under /tmp. Deployment packages, container images, environment variables, payloads, and file descriptors each have limits that can eliminate Lambda for a workload.','Concurrency counts simultaneous executions in a Region. The account receives a regional quota that can be raised, while functions can consume from the shared pool. Monitor duration, memory, throttles, errors, iterator age, and queue age rather than assuming automatic scaling is unlimited.'],
      takeaways:['Lambda executions are limited to 15 minutes.','More memory also supplies more compute resources.','Regional concurrency is finite and shared.'],
      examTip:'A single job may run for hours: redesign it as smaller steps or use ECS/Fargate, Batch, or Step Functions rather than increasing Lambda timeout.'
    },
    {
      ready:true,title:'Control Lambda concurrency and startup latency',
      summary:'Use reserved capacity boundaries, provisioned environments, or SnapStart according to isolation and latency needs.',
      explanation:['Reserved concurrency guarantees capacity for a function while also capping its maximum, protecting downstream systems and preventing one function from consuming the entire regional pool. Synchronous callers receive throttling errors when capacity is unavailable; asynchronous and polling sources apply their own queueing and retry behavior.','Provisioned concurrency keeps initialized environments ready for predictable low latency. SnapStart publishes snapshots of initialized supported Java, Python, or .NET managed runtimes and restores from them to reduce cold starts, but it has feature limitations and cannot be combined with provisioned concurrency on the same version.'],
      takeaways:['Reserved concurrency is both a reservation and a limit.','Provisioned concurrency pre-initializes environments.','SnapStart restores a published initialization snapshot.'],
      examTip:'Protect a database from a burst of Lambda connections by limiting reserved concurrency; solve connection churn further with RDS Proxy.'
    },
    {
      ready:true,title:'Customize CloudFront at the edge',
      summary:'Choose lightweight CloudFront Functions or more capable Lambda@Edge processing based on the event and code requirements.',
      explanation:['CloudFront Functions execute JavaScript on viewer request or viewer response events at very high scale with extremely low latency. They fit URL rewrites, redirects, header changes, cache-key normalization, and lightweight token checks without network or file-system access.','Lambda@Edge supports viewer and origin request or response events with longer execution, more resources, request-body access in supported triggers, third-party libraries, and network calls. Functions are authored in us-east-1 and replicated by CloudFront. Use the lighter service whenever its restricted runtime can perform the job.'],
      takeaways:['CloudFront Functions run only on viewer events.','Lambda@Edge can also run around origin requests and responses.','Lambda@Edge supports heavier processing and network access.'],
      examTip:'A simple header rewrite at millions of viewer requests favors CloudFront Functions; origin selection requiring an SDK call favors Lambda@Edge.'
    },
    {
      ready:true,title:'Reach private resources from Lambda safely',
      summary:'Attach functions to VPC subnets only when necessary and pool relational database connections through RDS Proxy.',
      explanation:['By default, Lambda runs in an AWS-managed network and can reach public AWS endpoints but not private addresses in a customer VPC. VPC attachment places managed network interfaces into selected subnets and security groups, enabling access to RDS, ElastiCache, internal load balancers, and other private resources.','A VPC-attached function needs a NAT path for general internet egress and VPC endpoints for private service access when desired. Rapid Lambda scaling can exhaust database connections, so RDS Proxy pools and reuses connections, stores credentials through Secrets Manager, supports IAM authentication, and improves failover behavior.'],
      takeaways:['VPC attachment is required for private VPC addresses.','Private subnets need an explicit egress path for public endpoints.','RDS Proxy absorbs Lambda connection churn.'],
      examTip:'Thousands of Lambda invocations overload an RDS database with connections: put Lambda in the VPC and connect through RDS Proxy.'
    },
    {
      ready:true,title:'Model data in DynamoDB',
      summary:'Organize schemaless items around partition and sort keys that directly support application access patterns.',
      explanation:['Amazon DynamoDB is a managed multi-AZ NoSQL database with consistent low-millisecond performance at scale. A table contains items with flexible attributes, but every item is identified by either a partition key or a composite partition-and-sort key; individual items have a 400 KB size limit.','The partition key determines physical distribution, so a low-cardinality or heavily concentrated key can create hot partitions. Design keys and secondary indexes from known query patterns rather than trying to reproduce relational joins or unrestricted ad hoc queries.'],
      takeaways:['Every table has a primary key.','Composite keys group and order related items.','Access patterns drive DynamoDB schema design.'],
      examTip:'A massive key-value workload needing predictable millisecond latency and no joins is a DynamoDB candidate.'
    },
    {
      ready:true,title:'Choose DynamoDB capacity mode',
      summary:'Use on-demand capacity for unpredictable traffic or provisioned capacity for planned throughput and tighter cost control.',
      explanation:['On-demand mode automatically accommodates changing request traffic and bills for reads and writes consumed, reducing capacity planning for new or spiky workloads. Provisioned mode configures read and write throughput units and can use Application Auto Scaling to follow longer-term demand.','Both modes can throttle poorly distributed hot keys, and switching modes has operational rules. Evaluate base tables and indexes together, monitor consumed capacity and throttled requests, and use capacity reservations or warm-throughput features only when the workload justifies them.'],
      takeaways:['On-demand removes explicit RCU and WCU planning.','Provisioned mode reserves configured throughput.','Key distribution matters in either mode.'],
      examTip:'Unknown request volume with abrupt spikes generally favors on-demand; stable measurable traffic may cost less with provisioned plus auto scaling.'
    },
    {
      ready:true,title:'Accelerate DynamoDB reads with DAX',
      summary:'Add an API-compatible in-memory cache for repeated DynamoDB item, Query, and Scan access.',
      explanation:['DynamoDB Accelerator is a managed multi-node cache placed between an application and DynamoDB. Its client is compatible with DynamoDB APIs, allowing cached reads to achieve microsecond latency and offload hot read traffic with relatively small application changes.','DAX is optimized for DynamoDB access patterns and is not a general-purpose cache. ElastiCache is better for arbitrary application objects, computed aggregates, sessions, pub/sub, or data not backed by DynamoDB. Neither cache should be treated as the durable system of record.'],
      takeaways:['DAX caches DynamoDB reads.','Cached responses can reach microsecond latency.','ElastiCache supports broader application caching patterns.'],
      examTip:'Repeated GetItem and Query calls cause DynamoDB read pressure and require microsecond responses: use DAX.'
    },
    {
      ready:true,title:'React to changes with DynamoDB Streams',
      summary:'Consume an ordered record of item mutations for projections, notifications, analytics, and downstream workflows.',
      explanation:['DynamoDB Streams records item-level inserts, updates, and deletes in order for each item and retains records for 24 hours. A Lambda event source mapping can process batches, or applications can use the Streams adapter to build custom consumers.','Use streams to update derived tables, index data, send notifications, or trigger business reactions without modifying the write path. Kinesis Data Streams for DynamoDB provides longer retention and more consumer scalability when the 24-hour change stream is too constrained. Consumers must be idempotent because batches can be retried.'],
      takeaways:['Streams capture item-level mutations.','Ordering is preserved per item.','Lambda can process stream batches automatically.'],
      examTip:'Send a welcome workflow when a new DynamoDB user item appears: enable a stream and trigger Lambda.'
    },
    {
      ready:true,title:'Replicate globally with DynamoDB Global Tables',
      summary:'Serve local reads and writes from multiple Regions using managed multi-active replication.',
      explanation:['A DynamoDB global table consists of regional replicas that use the same DynamoDB API and replicate item changes. Applications can direct traffic to a nearby healthy Region for low latency and multi-Region availability without implementing their own replication pipeline.','Current global tables support multi-Region eventual consistency and, in supported configurations, multi-Region strong consistency. The consistency mode is chosen when the global table is created and cannot later be changed; write conflicts, regional routing, capacity, and failover behavior must be designed explicitly.'],
      takeaways:['Global tables are multi-Region and multi-active.','Each replica serves local application traffic.','Consistency mode affects write and failure semantics.'],
      examTip:'Active-active DynamoDB access with local reads and writes in several Regions points directly to Global Tables.'
    },
    {
      ready:true,title:'Manage DynamoDB retention, backup, and S3 exchange',
      summary:'Expire short-lived items, recover tables to new resources, and move snapshots without consuming table request capacity.',
      explanation:['DynamoDB Time to Live uses an epoch-seconds attribute to remove expired items asynchronously without consuming write capacity. It fits sessions and retention cleanup but is not an exact-time scheduler because deletion can occur after the timestamp.','Point-in-time recovery keeps configurable continuous recovery points for up to 35 days and restores into a new table. On-demand backups support longer retention. PITR exports can write DynamoDB JSON or Ion to S3 without consuming read capacity, while S3 imports create a new table from supported formats without consuming write capacity.'],
      takeaways:['TTL deletion is asynchronous.','PITR restore creates a new table.','S3 export and import avoid live table capacity consumption.'],
      examTip:'To analyze a historical DynamoDB snapshot in Athena without affecting production reads, export the PITR data to S3.'
    },
    {
      ready:true,title:'Build managed APIs with API Gateway',
      summary:'Expose Lambda, HTTP backends, or AWS service APIs with routing, stages, throttling, validation, and observability.',
      explanation:['Amazon API Gateway provides REST, HTTP, and WebSocket API front doors. Integrations can invoke Lambda, proxy an HTTP service, connect privately through supported links, or call an AWS service directly using a configured service role and request mapping.','Stages and deployments separate environments and versions, while throttling, quotas, request validation, transformation, access logs, metrics, and optional REST API caching centralize cross-cutting concerns. API keys identify and meter clients but are not a substitute for authentication and authorization.'],
      takeaways:['API Gateway supports multiple API and integration types.','Stages represent deployed environments.','API keys handle metering, not user identity.'],
      examTip:'A public HTTPS API must send records directly to Kinesis without Lambda code: use an API Gateway AWS service integration.'
    },
    {
      ready:true,title:'Select and secure an API Gateway endpoint',
      summary:'Match edge-optimized, Regional, or private REST endpoints with the right authentication and custom-domain design.',
      explanation:['An edge-optimized REST endpoint routes globally distributed clients through a service-managed CloudFront distribution. A Regional endpoint serves from one Region and can sit behind a customer-managed CloudFront distribution. A private REST API is reachable only through API Gateway interface VPC endpoints and is constrained with resource policies.','IAM authorization fits AWS-authenticated callers, Cognito user-pool authorizers validate application user tokens, and Lambda authorizers implement custom logic. Custom domains use ACM certificates: edge-optimized domains require the certificate in us-east-1, while Regional domains use a certificate in the API Region.'],
      takeaways:['Endpoint type reflects client location and network boundary.','Private APIs require interface VPC endpoints.','Authorization options include IAM, Cognito, and Lambda authorizers.'],
      examTip:'An API must be callable only inside specified VPCs: choose a private REST API, interface endpoint, and resource policy.'
    },
    {
      ready:true,title:'Orchestrate workflows with Step Functions',
      summary:'Express sequences, choices, parallel work, retries, waits, callbacks, and service calls as durable state machines.',
      explanation:['AWS Step Functions coordinates Lambda and many other AWS services through visual state machines. States can branch by data, run work in parallel, wait, retry with backoff, catch errors, map over collections, and pause for an external callback or human approval.','Standard Workflows fit durable, auditable, potentially long-running orchestration; Express Workflows fit high-volume, short-duration event processing with different execution semantics. Moving control flow out of Lambda avoids custom polling loops and functions waiting while no compute work occurs.'],
      takeaways:['State machines make workflow state explicit.','Retry and catch policies handle failures declaratively.','Wait and callback states avoid idle function execution.'],
      examTip:'A multi-step order process needs branching, retries, and a human approval that may take days: use a Step Functions Standard Workflow.'
    },
    {
      ready:true,title:'Authenticate app users with Cognito User Pools',
      summary:'Provide a managed user directory and standards-based tokens for web and mobile application sign-in.',
      explanation:['A Cognito user pool stores user profiles and handles registration, password policies, recovery, verification, MFA, hosted login, and federation with social, OIDC, or SAML identity providers. Successful authentication returns signed JWTs with identity and authorization claims.','API Gateway and Application Load Balancer integrations can validate those tokens before requests reach application code. User pools authenticate application users at consumer scale; IAM users are identities for operating AWS accounts and should not be created for every customer.'],
      takeaways:['User pools are application user directories.','Authentication produces OIDC-compatible JWTs.','Federation can connect enterprise and social providers.'],
      examTip:'A mobile app needs registration, login, MFA, and JWT authentication for API Gateway: use a Cognito User Pool.'
    },
    {
      ready:true,title:'Authorize direct AWS access with Cognito Identity Pools',
      summary:'Exchange trusted application identity tokens for temporary, scoped AWS credentials.',
      explanation:['A Cognito identity pool accepts identities from a user pool or supported external providers and exchanges their tokens for temporary AWS credentials through AWS STS. Authenticated and optional guest users assume configured IAM roles rather than receiving permanent access keys.','Those credentials can let a mobile app upload directly to a user-specific S3 prefix or access permitted DynamoDB items, reducing the need to proxy large data through an API. IAM conditions based on identity attributes enforce fine-grained boundaries; the application must never rely only on a client-supplied object path.'],
      takeaways:['Identity pools issue temporary AWS credentials.','User pools and identity pools can work together.','IAM roles and conditions bound direct resource access.'],
      examTip:'App users must upload directly to their own private S3 folders: use an identity pool with scoped IAM credentials.'
    }
  ];

  const sectionTwentyLectures=[
    {
      ready:true,title:'Design a serverless mobile to-do application',
      summary:'Combine managed authentication, an HTTPS API, elastic compute, scalable data, direct file access, and targeted caching.',
      explanation:['A mobile client authenticates with a Cognito User Pool and sends its token to API Gateway, which authorizes HTTPS requests before invoking Lambda. Lambda applies business rules and reads or writes DynamoDB, giving the API independently scalable compute and data layers without persistent application servers.','For user files, a Cognito Identity Pool can exchange the signed identity token for temporary IAM credentials restricted to that user\'s S3 prefix, avoiding an unnecessary API proxy. DAX accelerates repeated DynamoDB reads, while API Gateway caching can reuse entire API responses; choose the cache closest to the repeated operation and invalidate or expire it safely after writes.'],
      takeaways:['User Pools authenticate API users.','Identity Pools can authorize direct, scoped S3 access.','DAX and API Gateway cache at different layers.'],
      examTip:'If mobile users must upload directly to their own S3 folders, issue temporary scoped credentials through a Cognito Identity Pool.'
    },
    {
      ready:true,title:'Build a globally scalable serverless website',
      summary:'Separate static delivery, dynamic APIs, multi-Region data, and asynchronous reactions into purpose-built managed services.',
      explanation:['Store static site assets in a private S3 bucket and deliver them globally through CloudFront with Origin Access Control. Dynamic requests use API Gateway and Lambda, while DynamoDB supplies elastic persistence; Global Tables can serve local multi-Region reads and writes when the application truly needs an active-active data layer.','DynamoDB Streams can invoke a Lambda function when a subscriber record appears, and that function can send a welcome message through Amazon SES using its task-specific IAM role. S3 object-created events can trigger image thumbnail processing, optionally buffering work through SQS when bursts or controlled retry behavior matter.'],
      takeaways:['CloudFront and private S3 serve global static assets.','API Gateway plus Lambda supplies the dynamic API.','Streams and object events decouple side effects from writes.'],
      examTip:'A public site is read globally and updated rarely: cache static S3 content at CloudFront and keep dynamic writes behind a serverless API.'
    },
    {
      ready:true,title:'Compose independently designed microservices',
      summary:'Let each service choose suitable compute and data while standardizing discovery, communication, security, and operations.',
      explanation:['A microservice may use API Gateway and Lambda with DynamoDB, an ALB with ECS and ElastiCache, or EC2 with RDS. Route 53, custom domains, load balancers, and API Gateway provide stable service endpoints even though each implementation scales and deploys independently.','Use synchronous HTTP only when the caller needs an immediate response; use SQS, SNS, EventBridge, Kinesis, or service events when work can proceed asynchronously. Microservices exchange centralized server density for more APIs, versions, deployment pipelines, tracing, authorization boundaries, and failure modes, so shared platform automation becomes essential.'],
      takeaways:['Each service can select its own compute and database.','Synchronous and asynchronous contracts have different coupling.','Independent deployment requires consistent platform controls.'],
      examTip:'Do not force every microservice onto one technology; select services per workload, then decouple non-immediate work with messaging.'
    },
    {
      ready:true,title:'Offload software distribution with CloudFront',
      summary:'Place a global cache in front of an existing origin to reduce compute scaling, bandwidth, and repeated file delivery.',
      explanation:['An EC2 application may perform well during normal traffic but scale sharply whenever a new software package is released. Because update artifacts are static and identical for many clients, forwarding every download to EC2 and shared storage repeats the same origin work and network transfer.','CloudFront can cache those files at edge locations without rewriting the application or making the origin serverless. Subsequent users download nearby cached copies, reducing load on the Auto Scaling group, origin storage, and long-distance network path while improving availability and latency. Use versioned filenames so immutable releases cache safely.'],
      takeaways:['Static downloads are highly cacheable.','CloudFront reduces repeated origin requests and transfer.','Versioned filenames avoid stale-release ambiguity.'],
      examTip:'A release causes a massive spike of identical downloads from an existing EC2 site: add CloudFront before scaling the origin fleet.'
    }
  ];

  const sectionTwentyOneLectures=[
    {
      ready:true,title:'Choose a database from the access pattern',
      summary:'Start with data relationships, queries, scale, latency, consistency, durability, and operational constraints—not a familiar product name.',
      explanation:['Relational OLTP workloads needing transactions and joins fit RDS or Aurora. Key-value and document access at massive scale may fit DynamoDB, graph traversal fits Neptune, MongoDB-compatible documents fit DocumentDB, Cassandra-compatible wide columns fit Keyspaces, and time-series measurements need a time-oriented engine or supported alternative.','Object storage, caches, search indexes, warehouses, and databases solve different contracts even when they can all retain data. Define the source of truth, read/write ratio, growth, item size, query shapes, schema flexibility, recovery objective, consistency, concurrency, licensing, and team expertise before selecting a service. Amazon QLDB, named in older course comparisons, reached end of support in July 2025 and should not be chosen for new ledger designs.'],
      takeaways:['Data model and query shape lead the decision.','A cache or search index is not automatically the source of truth.','Operational and licensing needs matter alongside performance.'],
      examTip:'Translate scenario nouns into access patterns first: joins, key lookup, graph traversal, document query, time window, object, or analytical scan.'
    },
    {
      ready:true,title:'Run relational OLTP with Amazon RDS',
      summary:'Use managed standard database engines when SQL transactions, joins, and engine compatibility are core requirements.',
      explanation:['Amazon RDS manages supported PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and Db2 database instances. The customer selects instance and storage capacity while AWS automates common provisioning, patching, monitoring, backup, and replacement operations.','Multi-AZ deployments improve availability and failover; read replicas scale reads and support selected disaster-recovery patterns. Automated backups enable point-in-time restore, manual snapshots support longer retention, and RDS Custom provides deeper operating-system and database access for supported Oracle and SQL Server workloads that cannot use the standard managed boundary.'],
      takeaways:['RDS supports familiar relational engines.','Multi-AZ addresses availability; read replicas address reads.','Backups and snapshots restore into a separate database instance.'],
      examTip:'A commercial application requires standard SQL Server or Oracle compatibility and relational transactions: choose the matching RDS engine.'
    },
    {
      ready:true,title:'Use Aurora for cloud-native relational scale',
      summary:'Separate distributed storage from MySQL- or PostgreSQL-compatible compute for faster failover, read scaling, and global options.',
      explanation:['Amazon Aurora maintains replicated, self-healing cluster storage across three Availability Zones and attaches a writer plus optional readers through stable cluster endpoints. Its MySQL- and PostgreSQL-compatible APIs ease many migrations while the distributed architecture supplies managed read scaling and failover.','Aurora Serverless v2 adjusts database capacity for variable workloads, Aurora Global Database supports cross-Region reads and disaster recovery, and database cloning creates copy-on-write test or development clusters quickly. Compatibility is not identity: extensions, versions, limits, and licensing assumptions must still be validated.'],
      takeaways:['Aurora separates cluster storage and DB instances.','Reader and writer endpoints route distinct workloads.','Serverless, Global Database, and cloning solve different needs.'],
      examTip:'MySQL- or PostgreSQL-compatible OLTP needs high availability, many readers, and rapid cross-Region recovery: evaluate Aurora Global Database.'
    },
    {
      ready:true,title:'Cache hot data with Amazon ElastiCache',
      summary:'Add managed in-memory Valkey, Redis OSS, or Memcached when sub-millisecond access and database offload justify application changes.',
      explanation:['ElastiCache stores frequently accessed key-value data in memory for sessions, computed results, leaderboards, rate limits, and database query caching. Applications must implement cache-aside or another caching strategy, including TTL, invalidation, miss handling, and graceful fallback when cached data disappears.','Current ElastiCache supports Valkey, Redis OSS, and Memcached with serverless or node-based deployment choices. Valkey and Redis OSS provide richer data structures, replication, persistence options, and clustering; Memcached offers a simpler distributed cache. Serverless removes node and shard capacity planning, while node-based clusters provide finer topology control.'],
      takeaways:['ElastiCache requires explicit application cache logic.','Valkey and Redis OSS provide richer features than Memcached.','Serverless and node-based deployments trade simplicity for control.'],
      examTip:'A relational database is overloaded by repeated reads of the same results and the app can tolerate cache loss: add ElastiCache.'
    },
    {
      ready:true,title:'Scale key-value workloads with DynamoDB',
      summary:'Use a serverless multi-AZ NoSQL table for predictable key access, flexible items, and event-driven applications.',
      explanation:['DynamoDB provides millisecond key-value and document operations with on-demand or provisioned capacity. IAM controls data-plane access, transactions coordinate selected items, TTL removes expired data, and flexible attributes let schemas evolve within the fixed primary-key design.','DAX accelerates repeated reads, Streams or Kinesis integration publishes item changes, and Global Tables provide multi-Region replicas. PITR and on-demand backups restore to new tables, while S3 export and import move snapshots without consuming normal read or write units. It is not a relational engine and should not be chosen for arbitrary joins.'],
      takeaways:['Primary-key design determines scalable access.','Capacity modes address predictable and variable traffic.','Streams and Global Tables extend the core table.'],
      examTip:'A serverless application needs massive key-based scale, flexible items, TTL, and IAM authorization: choose DynamoDB.'
    },
    {
      ready:true,title:'Store large immutable objects in Amazon S3',
      summary:'Treat S3 as an object key-value store for files and blobs rather than a transactional record database.',
      explanation:['S3 maps a bucket and object key to object bytes plus metadata. It scales without database instance management and fits media, documents, backups, data lakes, static assets, logs, and other large objects, with storage classes and lifecycle policies controlling long-term cost.','Versioning, replication, encryption, Object Lock, event notifications, Batch Operations, Inventory, multipart transfer, and Access Points add protection and management. S3 does not provide relational joins, record-level transactions across objects, or low-latency updates to fields inside an object; an application usually stores searchable metadata in a database or index.'],
      takeaways:['S3 addresses objects by bucket and key.','Lifecycle classes optimize retention cost.','Queryable metadata often belongs in another service.'],
      examTip:'Store large images or documents in S3 and keep their searchable attributes and relationships in DynamoDB or a relational database.'
    },
    {
      ready:true,title:'Run MongoDB-compatible documents with DocumentDB',
      summary:'Use a managed document database when MongoDB API compatibility and JSON-like document queries drive the workload.',
      explanation:['Amazon DocumentDB is a managed document database with MongoDB compatibility. It stores and indexes flexible document structures and separates cluster compute from distributed storage, with replicas supporting read scale and managed failover across Availability Zones.','MongoDB compatibility is workload dependent rather than complete equivalence. Before migration, test drivers, commands, indexes, aggregation behavior, change streams, extensions, and performance characteristics. Choose native DynamoDB instead when the application can use AWS key-value APIs and needs that serverless scale model.'],
      takeaways:['DocumentDB targets MongoDB-compatible applications.','Replicas support reads and high availability.','Compatibility must be tested against required MongoDB features.'],
      examTip:'A lift-and-shift application already uses MongoDB drivers and document queries: evaluate DocumentDB before redesigning it for DynamoDB.'
    },
    {
      ready:true,title:'Traverse relationships with Amazon Neptune',
      summary:'Use a graph database for paths, neighborhoods, recommendations, fraud rings, and highly connected knowledge.',
      explanation:['Amazon Neptune is a managed graph database optimized for querying relationships across billions of vertices and edges. It supports common graph models and query languages, making multi-hop questions far more natural than repeated joins or application-side traversal.','Typical uses include social relationships, knowledge graphs, identity graphs, fraud detection, and recommendation engines. Neptune Streams exposes an ordered, non-duplicated sequence of graph changes through an HTTP API so applications can update search indexes, caches, analytics stores, or cross-Region replicas.'],
      takeaways:['Graphs model entities and relationships directly.','Neptune optimizes multi-hop traversal.','Neptune Streams exposes ordered graph mutations.'],
      examTip:'Find connections among accounts across several relationship hops to identify a fraud ring: choose Neptune.'
    },
    {
      ready:true,title:'Preserve Cassandra access with Amazon Keyspaces',
      summary:'Use a managed Cassandra-compatible wide-column service without operating database clusters.',
      explanation:['Amazon Keyspaces supports Cassandra Query Language and drivers for applications built around Cassandra-compatible tables. AWS manages replication across Availability Zones, patching, server replacement, and elastic table capacity.','On-demand capacity fits variable traffic, while provisioned capacity with auto scaling fits planned workloads. Encryption, backup, and point-in-time recovery support protection, but Cassandra feature compatibility and data-model limits must be assessed before migration. Common patterns include IoT state, high-volume operational records, and time-oriented wide rows.'],
      takeaways:['Keyspaces uses Cassandra Query Language.','AWS manages the underlying distributed database fleet.','Capacity can be on-demand or provisioned.'],
      examTip:'An existing application depends on Cassandra drivers and CQL but the team wants no cluster operations: choose Amazon Keyspaces.'
    },
    {
      ready:true,title:'Store time-series measurements with Timestream patterns',
      summary:'Model timestamped metrics for time-window queries while accounting for current Timestream service availability.',
      explanation:['A time-series engine organizes measurements by time, dimensions, and measures and optimizes retention tiers, windowed aggregation, interpolation, and trend analysis. The course\'s Timestream for LiveAnalytics pattern ingests telemetry from IoT, streams, or applications and serves operational analytics through SQL-compatible queries and downstream visualization tools.','Amazon Timestream for LiveAnalytics stopped accepting new customers on June 20, 2025, although existing customers can continue using it. AWS recommends new customers evaluate Amazon Timestream for InfluxDB for similar managed time-series needs; alternatives may also include OpenSearch, managed Prometheus, DynamoDB, or an analytics lake depending on query and retention requirements.'],
      takeaways:['Time-series databases optimize timestamped measurements.','Recent and historical data often use different storage tiers.','New customers cannot adopt Timestream for LiveAnalytics.'],
      examTip:'Recognize Timestream for the course\'s IoT time-series scenario, but select a currently available supported alternative for a new real-world workload.'
    }
  ];

  const sectionTwentyTwoLectures=[
    {
      ready:true,title:'Query S3 data with Amazon Athena',
      summary:'Run serverless SQL over files in S3 and reduce cost by scanning only the data each query needs.',
      explanation:['Amazon Athena reads structured and semi-structured data in S3 through schemas stored in a data catalog and writes query results to S3. It is well suited to ad hoc analytics, log investigation, reporting, and data-lake exploration without loading data into a database cluster. Current Athena engine versions incorporate Trino capabilities.','Query cost and speed depend heavily on bytes scanned. Convert text into compressed columnar Parquet or ORC, partition paths by frequently filtered dimensions, compact many tiny files, and select only required columns. Federated Query uses connectors, commonly Lambda-based, to query supported relational, NoSQL, log, and custom sources alongside S3 data.'],
      takeaways:['Athena queries data in place in S3.','Columnar formats and partitions reduce scanned bytes.','Federated connectors reach non-S3 sources.'],
      examTip:'Serverless SQL analysis of CloudTrail, load-balancer, or VPC Flow Logs already in S3 points to Athena.'
    },
    {
      ready:true,title:'Build an OLAP warehouse with Amazon Redshift',
      summary:'Use columnar, massively parallel SQL compute for repeated joins, aggregations, and business-intelligence workloads.',
      explanation:['Amazon Redshift is an analytical warehouse rather than an OLTP database. Columnar storage, compression, distributed execution, and query optimization make it effective for scanning and aggregating large structured data sets through SQL and BI tools.','Provisioned deployments expose cluster capacity, while Redshift Serverless uses namespaces and workgroups with capacity measured in RPUs. Load large batches efficiently with COPY from S3 or supported streaming paths rather than issuing many small row inserts, and isolate transactional systems from analytical scans.'],
      takeaways:['Redshift targets OLAP, not transactional request processing.','Columnar MPP execution accelerates analytics.','COPY and batch loading outperform tiny inserts.'],
      examTip:'Complex BI joins over terabytes or petabytes with predictable repeated queries favor Redshift over an OLTP RDS database.'
    },
    {
      ready:true,title:'Protect and extend Redshift analytics',
      summary:'Use snapshots and multi-AZ options for recovery, and query S3 data through integrated data-lake access.',
      explanation:['Redshift automated and manual snapshots capture recovery points and restore into a new warehouse. Retention and cross-Region snapshot copy support disaster-recovery goals, while supported Multi-AZ provisioned configurations improve local availability without replacing backups.','Redshift Spectrum and integrated data-lake queries expose external S3 tables through the Glue Data Catalog without first loading all data into warehouse storage. Provisioned clusters and Redshift Serverless supply compute for these queries, letting architectures combine hot warehouse tables with a much larger S3 lake.'],
      takeaways:['Snapshots restore into a separate warehouse.','Cross-Region copies support regional recovery.','Spectrum queries external S3 tables.'],
      examTip:'Keep historical data cheaply in S3 but join it from existing Redshift SQL: create external tables and query through Spectrum.'
    },
    {
      ready:true,title:'Search and analyze text with Amazon OpenSearch Service',
      summary:'Index fields and free text for partial matching, relevance, log exploration, and dashboards alongside a source database.',
      explanation:['Amazon OpenSearch Service provides managed-cluster and Serverless deployment modes for search, log analytics, and observability. Unlike primary-key access in DynamoDB, an index can search many fields, tokenize text, rank matches, aggregate documents, and power OpenSearch Dashboards.','OpenSearch is commonly a derived index rather than the system of record. DynamoDB Streams with Lambda can project table changes, while CloudWatch Logs subscriptions, Kinesis Data Firehose, and streaming consumers can ingest operational data. Plan replay or reconciliation so a failed indexing event does not permanently diverge from the source.'],
      takeaways:['OpenSearch supports free-text and multi-field search.','Dashboards visualize indexed documents.','A durable source should be able to rebuild the index.'],
      examTip:'Users must search products by partial text across several attributes while DynamoDB remains authoritative: replicate changes into OpenSearch.'
    },
    {
      ready:true,title:'Process big data with Amazon EMR',
      summary:'Run managed Hadoop ecosystem frameworks for large-scale Spark, Hive, HBase, Flink, and related workloads.',
      explanation:['Amazon EMR provisions and configures distributed data-processing frameworks on EC2, EKS, or serverless options depending on the selected service mode. It fits Spark ETL, machine learning preparation, web indexing, large batch analytics, and applications already built for the Hadoop ecosystem.','In an EC2 cluster, the primary node coordinates work, core nodes process and store cluster data, and optional task nodes add compute without HDFS storage responsibility. Stable nodes favor On-Demand or committed capacity, while interruption-tolerant task nodes are good Spot candidates. Transient clusters reduce idle cost for finite jobs.'],
      takeaways:['EMR manages distributed open-source analytics frameworks.','Core and task nodes have different storage roles.','Transient clusters fit finite batch processing.'],
      examTip:'A company already has Apache Spark jobs that need hundreds of scalable workers: choose EMR rather than rewriting them as SQL queries.'
    },
    {
      ready:true,title:'Visualize insights with Amazon Quick Sight',
      summary:'Create interactive analyses, publish dashboards, and embed scalable business intelligence over diverse data sources.',
      explanation:['Amazon QuickSight was rebranded as Amazon Quick Sight, a core component of the Amazon Quick analytics and AI platform. It connects to Athena, Redshift, RDS, Aurora, S3, OpenSearch, SaaS sources, and JDBC databases to create analyses and interactive visualizations.','SPICE imports data into an in-memory engine for fast, scalable dashboard interaction. An analysis is the editable authoring workspace; a dashboard is a published read-oriented view shared with users or groups. Row- and column-level security must protect underlying data, because dashboard viewers may otherwise see more than the visual alone suggests.'],
      takeaways:['Quick Sight is AWS business intelligence and visualization.','SPICE accelerates imported analytical data.','Dashboards are published from editable analyses.'],
      examTip:'Executives need serverless dashboards over Athena and Redshift data: use Amazon Quick Sight.'
    },
    {
      ready:true,title:'Transform analytics data with AWS Glue',
      summary:'Discover, clean, convert, and load data through serverless ETL jobs and visual preparation tools.',
      explanation:['AWS Glue runs managed ETL jobs that extract data from sources such as S3 and JDBC databases, transform it using supported engines, and load analytics targets. A common pattern converts incoming CSV or JSON into compressed Parquet in partitioned S3 paths for cheaper Athena queries.','Job bookmarks track previously processed input to reduce duplicate work. Glue Studio provides visual job authoring and monitoring, DataBrew offers no-code data cleaning, and streaming ETL processes Kinesis or Kafka records continuously. Triggers and workflows coordinate jobs, but pipelines still need idempotent output and data-quality checks.'],
      takeaways:['Glue supplies managed ETL execution.','Parquet conversion improves lake analytics.','Bookmarks help avoid reprocessing old input.'],
      examTip:'Transform daily S3 CSV files into partitioned Parquet without managing Spark servers: use an AWS Glue ETL job.'
    },
    {
      ready:true,title:'Catalog shared data with AWS Glue Data Catalog',
      summary:'Store reusable table, schema, partition, and location metadata for multiple analytics engines.',
      explanation:['The Glue Data Catalog is a managed metadata repository. Crawlers inspect supported sources and create or update database and table definitions, while ETL pipelines and schema-management processes can write metadata explicitly for tighter control.','Athena, Redshift external schemas, EMR, Glue jobs, and other integrations reuse the same definitions instead of each maintaining a separate map of S3 files. The catalog stores metadata, not the underlying records; permissions must cover both catalog resources and the actual S3 or database data.'],
      takeaways:['Crawlers infer metadata from data sources.','Multiple engines share catalog table definitions.','Catalog authorization does not replace data-location access.'],
      examTip:'Athena and Redshift Spectrum must query the same S3 table definition: register it in the Glue Data Catalog.'
    },
    {
      ready:true,title:'Govern an S3 data lake with Lake Formation',
      summary:'Centralize ingestion, cataloging, and fine-grained permissions across lake data and analytics consumers.',
      explanation:['AWS Lake Formation builds on S3 and the Glue Data Catalog to simplify data-lake setup and governance. It can help register locations, ingest and catalog data, and define centrally managed access for services such as Athena, Redshift, EMR, Glue, and Quick Sight.','Lake Formation permissions can restrict databases, tables, columns, rows, and governed data cells rather than distributing broad bucket permissions to every analyst. IAM still controls service API access, so effective authorization combines IAM, Lake Formation grants, catalog metadata, and S3 registration.'],
      takeaways:['Lake Formation governs data stored in S3.','Fine-grained grants can restrict rows and columns.','It builds on Glue catalog metadata and IAM.'],
      examTip:'Many analytics services need centralized table-, row-, and column-level data-lake permissions: choose Lake Formation.'
    },
    {
      ready:true,title:'Process streams with Managed Service for Apache Flink',
      summary:'Run stateful Apache Flink applications for real-time transformations, windows, joins, and event-time analytics.',
      explanation:['Amazon Managed Service for Apache Flink, formerly Kinesis Data Analytics for Apache Flink, manages compute, scaling, checkpoints, and snapshots for Flink applications written with supported APIs and languages. Sources commonly include Kinesis Data Streams and Amazon MSK.','Flink maintains state across records and supports event-time windows, streaming joins, and complex transformations that exceed simple per-record Lambda processing. Amazon Data Firehose is a delivery destination rather than a Flink source, so route records through Kinesis Data Streams or Kafka when Flink must consume them.'],
      takeaways:['Flink performs stateful stream processing.','Checkpoints and snapshots protect application state.','Kinesis Data Streams and MSK are common sources.'],
      examTip:'A real-time application needs windowed aggregation and stateful joins over events: use Managed Service for Apache Flink.'
    },
    {
      ready:true,title:'Run Kafka workloads with Amazon MSK',
      summary:'Preserve Apache Kafka clients, topics, partitions, and ecosystem integrations with managed brokers or serverless capacity.',
      explanation:['Amazon Managed Streaming for Apache Kafka operates Kafka infrastructure in a customer VPC with multi-AZ replication and automated recovery. Existing producers and consumers use Kafka protocols, allowing migrations and ecosystem tools that would otherwise require rewriting for Kinesis APIs.','Provisioned MSK offers Standard or Express broker choices and current clusters may use ZooKeeper or KRaft metadata modes; MSK Serverless abstracts broker capacity and scales compute and storage. Kafka partitions define ordering and parallelism and can only be added, so key selection and initial partition strategy remain important.'],
      takeaways:['MSK is managed Apache Kafka.','Topics and partitions determine ordering and concurrency.','Serverless removes broker capacity management.'],
      examTip:'An application depends on native Kafka clients and topic semantics: choose Amazon MSK rather than Kinesis Data Streams.'
    },
    {
      ready:true,title:'Assemble a serverless analytics pipeline',
      summary:'Connect real-time ingestion, transformation, lake storage, SQL analysis, warehousing, and dashboards with decoupled stages.',
      explanation:['IoT Core or applications publish real-time events into Kinesis Data Streams. Amazon Data Firehose buffers delivery into an S3 ingestion zone and can invoke Lambda for lightweight transformation. S3 events can enqueue downstream work in SQS so processing survives bursts and retries independently.','Athena queries curated S3 data and writes results to a reporting bucket; Glue maintains formats and catalog metadata. Quick Sight can visualize Athena or Redshift data, while Redshift loads repeated analytical models or queries lake tables. Each boundary needs encryption, least privilege, partitioning, failure storage, replay, and observability.'],
      takeaways:['Streams ingest; Firehose delivers.','S3 is the durable analytics lake.','Athena, Redshift, and Quick Sight serve different analysis layers.'],
      examTip:'For fully managed real-time ingestion into S3 followed by SQL and dashboards, combine Kinesis, Firehose, Athena, and Quick Sight rather than one monolithic service.'
    }
  ];

  const sectionTwentyThreeLectures=[
    {
      ready:true,title:'Analyze images and video with Amazon Rekognition',
      summary:'Detect objects, people, text, faces, and unsafe content without building a computer-vision model.',
      explanation:['Amazon Rekognition applies pretrained computer-vision models to images and stored or streaming video. It can label objects and scenes, detect text and celebrities, compare or search faces, and follow people through video. Applications receive labels and confidence scores rather than a business decision.','Content Moderation identifies potentially unsafe or inappropriate material. Set confidence thresholds to match the cost of false positives and false negatives, and route uncertain or sensitive results to human review, including workflows built with Amazon Augmented AI. Face analysis requires careful consent, access control, retention, and regional policy design.'],
      takeaways:['Rekognition analyzes images and video.','Responses include labels and confidence scores.','Moderation can be combined with human review.'],
      examTip:'A question asks for managed object, face, text, or unsafe-content detection in media: choose Rekognition.'
    },
    {
      ready:true,title:'Convert speech to text with Amazon Transcribe',
      summary:'Create searchable transcripts, captions, and call records from live or recorded audio.',
      explanation:['Amazon Transcribe is an automatic speech recognition service that converts audio into text. Batch transcription works with recordings, while streaming transcription produces text as audio arrives for captions, contact centers, and live applications.','Features include language identification, speaker labeling, custom vocabulary, channel identification, and redaction of supported personally identifiable information. Transcribe produces text; use a downstream service such as Comprehend for sentiment or entity analysis and protect both the original audio and its transcript.'],
      takeaways:['Transcribe converts speech into text.','Batch and streaming modes address different latency needs.','Custom vocabulary improves domain-term recognition.'],
      examTip:'Recorded calls must become searchable text or live audio needs captions: use Amazon Transcribe.'
    },
    {
      ready:true,title:'Create lifelike speech with Amazon Polly',
      summary:'Synthesize spoken audio from text and control pronunciation, pacing, and delivery.',
      explanation:['Amazon Polly is the reverse of speech recognition: it converts text into speech using managed voices. Applications can stream the audio response or store generated audio in S3 for narration, accessibility, announcements, and voice-enabled products.','Pronunciation lexicons define how specialized words, abbreviations, or names should sound. Speech Synthesis Markup Language controls pauses, emphasis, speaking rate, pitch, and pronunciation. Cache reusable audio when appropriate to reduce repeated synthesis cost and latency.'],
      takeaways:['Polly converts text into speech.','Lexicons customize pronunciation.','SSML controls how speech is delivered.'],
      examTip:'Text must be read aloud with a natural voice and custom pronunciation: choose Amazon Polly.'
    },
    {
      ready:true,title:'Translate text with Amazon Translate',
      summary:'Add managed neural translation to applications and localization pipelines.',
      explanation:['Amazon Translate converts text between supported languages for websites, support messages, documents, and near-real-time conversations. It removes the need to train and host a general-purpose translation model.','Choose Translate when the input is already text. For spoken conversations, first use Transcribe to create text, translate it, and optionally use Polly to speak the result. Translation can preserve meaning imperfectly, so high-impact legal, medical, or brand content still needs human review.'],
      takeaways:['Translate performs managed text translation.','Speech workflows combine Transcribe, Translate, and Polly.','Sensitive translations may require human validation.'],
      examTip:'An application needs scalable multilingual text localization: select Amazon Translate.'
    },
    {
      ready:true,title:'Build conversational contact centers with Lex and Connect',
      summary:'Use a chatbot to understand caller intent and a cloud contact center to route customer interactions.',
      explanation:['Amazon Lex builds text and voice conversational interfaces using intents, utterances, slots, and fulfillment. It uses the same general speech and language capabilities associated with Alexa and can invoke Lambda to validate input or perform business actions.','Amazon Connect provides a managed contact center with phone numbers, contact flows, queues, routing, recording, and agent experiences. Combine Connect and Lex for self-service callers, then transfer to an agent with context when automation cannot resolve the request. CRM and Lambda integrations connect the conversation to customer data and workflows.'],
      takeaways:['Lex recognizes intents and collects slot values.','Connect is a managed contact center.','Lambda can fulfill chatbot actions.'],
      examTip:'A cloud call center needs an interactive voice bot before routing to human agents: combine Amazon Connect with Amazon Lex.'
    },
    {
      ready:true,title:'Extract meaning from text with Amazon Comprehend',
      summary:'Apply natural-language processing to detect language, entities, key phrases, sentiment, and syntax.',
      explanation:['Amazon Comprehend analyzes unstructured text with pretrained natural-language processing models. Common outputs include dominant language, named entities, key phrases, sentiment, syntax, personally identifiable information, and targeted sentiment; custom classification and custom entity recognition address domain-specific needs.','Use synchronous APIs for small interactive requests and asynchronous jobs for document collections in S3. Topic modeling appears in course and exam material, but AWS no longer offers topic modeling, event detection, or prompt-safety classification to new customers; other Comprehend capabilities remain available, and AWS points new topic and event workloads toward Amazon Bedrock models.'],
      takeaways:['Comprehend extracts insights from text.','It does not transcribe audio or scan document images.','Some older specialty features are unavailable to new customers.'],
      examTip:'Customer reviews are already text and require managed sentiment or entity extraction: choose Amazon Comprehend.'
    },
    {
      ready:true,title:'Understand clinical text with Comprehend Medical',
      summary:'Detect healthcare entities and protected health information in unstructured clinical notes.',
      explanation:['Amazon Comprehend Medical applies pretrained clinical NLP to English medical text such as physician notes, discharge summaries, and test results. It identifies conditions, medications, dosage details, anatomy, procedures, and protected health information, and can link supported entities to medical ontologies.','The service returns confidence scores and is not a substitute for medical judgment. Encrypt connections, apply least privilege, follow healthcare compliance obligations, and require trained review for patient-care decisions. S3 batch data, Firehose streams, or text created by Transcribe can feed an analysis workflow.'],
      takeaways:['Comprehend Medical targets clinical language.','It can detect PHI and link medical entities.','High-impact results require professional review.'],
      examTip:'Unstructured clinical notes require medication, condition, or PHI extraction: choose Amazon Comprehend Medical, not general Comprehend.'
    },
    {
      ready:true,title:'Build and deploy models with Amazon SageMaker AI',
      summary:'Manage the machine-learning lifecycle from data preparation and training through hosted inference.',
      explanation:['Amazon SageMaker AI provides managed tools for preparing data, experimenting, training, tuning, evaluating, and deploying machine-learning models. It supports built-in algorithms and frameworks as well as custom containers, so teams retain control over model development without operating every infrastructure component.','Training jobs allocate compute for a finite run and persist model artifacts, while endpoints host models for real-time inference. Batch Transform fits offline data sets, and asynchronous or serverless inference fits other traffic patterns. Monitor data and model quality because deployment does not eliminate drift, bias, or governance responsibilities.'],
      takeaways:['SageMaker AI supports custom model lifecycles.','Training jobs and inference endpoints are separate resources.','Choose inference mode based on latency and traffic.'],
      examTip:'A data-science team must train, tune, and deploy its own model: choose SageMaker AI rather than a pretrained AI API.'
    },
    {
      ready:true,title:'Search enterprise documents with Amazon Kendra',
      summary:'Recognize the course service for natural-language enterprise search and understand its current adoption status.',
      explanation:['Amazon Kendra indexes documents from repositories and connectors so users can ask natural-language questions and receive ranked passages or answers. Relevance tuning, metadata, access controls, and user feedback help align search results with enterprise content.','Kendra stopped accepting new customers on July 30, 2026; existing customers can continue using it. For a new real-world architecture, AWS recommends evaluating Knowledge Bases for Amazon Bedrock for similar retrieval capabilities. Keep Kendra recognizable for course scenarios while applying the current availability rule to implementation decisions.'],
      takeaways:['Kendra provides ML-powered enterprise search.','Connectors index content from multiple repositories.','New customers should evaluate Bedrock Knowledge Bases.'],
      examTip:'For legacy exam wording, natural-language search across company documents points to Kendra; for a new deployment, account for its new-customer restriction.'
    },
    {
      ready:true,title:'Generate recommendations with Amazon Personalize',
      summary:'Create individualized rankings and recommendations from users, items, and interaction events.',
      explanation:['Amazon Personalize uses interaction history and optional user and item metadata to produce recommendations, personalized rankings, and user segments. Use-case optimized recommenders simplify common retail and media patterns, while custom resources offer more configuration.','Real-time APIs update recommendations as behavior arrives, while batch inference produces large offline result sets. Recommendation quality depends on representative events, stable identifiers, and evaluation against business outcomes; filters and promotions can enforce eligibility or discovery rules without replacing the relevance model.'],
      takeaways:['Personalize powers application recommendations.','Interaction data is central to personalization.','Real-time and batch recommendation modes are available.'],
      examTip:'A retailer wants managed product recommendations modeled after each user\'s behavior: choose Amazon Personalize.'
    },
    {
      ready:true,title:'Extract forms and tables with Amazon Textract',
      summary:'Turn scanned documents into structured text, handwriting, key-value pairs, and table data.',
      explanation:['Amazon Textract is more than basic optical character recognition. It detects printed text and handwriting while preserving document structure such as lines, forms, tables, queries, signatures, and expense or identity-document fields supported by specialized APIs.','Synchronous operations fit small interactive documents; asynchronous operations process multi-page documents from S3 and publish completion through notification workflows. Textract extracts document content but does not understand broad sentiment like Comprehend, so document pipelines often use Textract first and NLP or business validation afterward.'],
      takeaways:['Textract performs document OCR.','It extracts form key-value pairs and tables.','Asynchronous APIs fit multi-page S3 documents.'],
      examTip:'Scanned invoices or application forms must become structured fields and tables: choose Amazon Textract.'
    },
    {
      ready:true,title:'Choose the right managed AI service',
      summary:'Match the input format and desired output to a specialized AI API or a custom model platform.',
      explanation:['Start with modality: Rekognition analyzes media, Transcribe converts speech to text, Polly converts text to speech, Translate changes language, Textract structures documents, and Comprehend analyzes language. Lex manages conversational intent, Connect runs contact centers, Personalize recommends items, and Comprehend Medical handles clinical text.','Prefer a specialized pretrained service when its output directly matches the requirement. Choose SageMaker AI when the organization needs a custom model or control of training and deployment. For enterprise retrieval, remember Kendra for existing course scenarios while checking its current customer availability and considering Bedrock Knowledge Bases for new systems.'],
      takeaways:['Input and desired output narrow the service choice.','Pretrained APIs minimize ML operations.','SageMaker AI fits custom model development.'],
      examTip:'Translate the scenario into input, transformation, and output before selecting a service; similarly named AI products solve different layers.'
    }
  ];

  const sectionTwentyFourLectures=[
    {
      ready:true,title:'Measure resources with CloudWatch metrics',
      summary:'Organize time-series measurements by namespace, metric name, dimensions, timestamp, and resolution.',
      explanation:['Amazon CloudWatch metrics represent numeric observations such as CPU utilization, request count, latency, or network throughput. A namespace isolates related metrics, dimensions identify the resource or context, and statistics aggregate data points over a selected period. Dashboards combine metrics into operational views.','AWS services publish selected metrics automatically, but the exact coverage and frequency vary. Applications can publish custom metrics for business or system data that AWS does not expose, such as queue age or memory utilization. High-resolution custom metrics support shorter alarm periods but increase ingestion and monitoring cost.'],
      takeaways:['Metrics are time-series numeric data.','Dimensions identify a metric context.','Custom metrics cover application-specific signals.'],
      examTip:'CPU and network are standard EC2 metrics, but guest-memory or application-order counts require an agent or custom metric.'
    },
    {
      ready:true,title:'Stream metrics with CloudWatch Metric Streams',
      summary:'Continuously deliver selected CloudWatch metrics to external analytics and monitoring destinations.',
      explanation:['CloudWatch Metric Streams sends near-real-time metric updates through Amazon Data Firehose to supported destinations such as S3 or partner observability platforms. This push model avoids repeatedly polling CloudWatch APIs across many accounts and Regions.','Include and exclude filters control which namespaces or metrics leave CloudWatch, reducing cost and noise. A stream transports metrics; it does not replace CloudWatch alarms or dashboards, and the Firehose delivery path still needs buffering, retry, encryption, and destination failure handling.'],
      takeaways:['Metric Streams pushes metrics continuously.','Data Firehose handles delivery.','Filters limit streamed metrics.'],
      examTip:'A monitoring vendor needs low-latency access to metrics from many AWS services without API polling: use CloudWatch Metric Streams.'
    },
    {
      ready:true,title:'Organize and retain CloudWatch Logs',
      summary:'Structure application events into log groups and streams with controlled retention and encryption.',
      explanation:['A CloudWatch Logs log group usually represents an application or workload, while log streams separate producers such as instances, containers, or files. Retention is configured per log group so operational data does not remain forever by accident; encryption is automatic and a customer-managed KMS key can provide additional key control.','Many AWS services integrate directly with CloudWatch Logs, while applications use SDKs or agents. Lambda, API Gateway, Route 53 query logging, VPC Flow Logs, CloudTrail, and container platforms each require their own logging configuration and permissions. Logs should exclude unnecessary secrets and sensitive payloads at the source.'],
      takeaways:['Log groups contain log streams.','Retention is configured at the group level.','Sources need permissions and logging configuration.'],
      examTip:'CloudWatch receives no operating-system log files merely because an EC2 instance exists; install and authorize an agent.'
    },
    {
      ready:true,title:'Investigate logs with CloudWatch Logs Insights',
      summary:'Run interactive queries over stored log events to filter, parse, aggregate, sort, and visualize findings.',
      explanation:['CloudWatch Logs Insights is an on-demand query engine for CloudWatch Logs. It automatically discovers fields in common AWS and JSON events and supports parsing, filtering, aggregation, sorting, and limits across one or more selected log groups. Saved queries and dashboard widgets make recurring investigations easier.','It analyzes events already ingested into log groups and is not a continuous delivery engine. Limit the time range and selected fields to improve responsiveness and control scanned-data cost; use subscription filters when events must trigger downstream processing as they arrive.'],
      takeaways:['Logs Insights queries stored logs.','It supports field discovery and aggregation.','Narrow time ranges reduce scanned data.'],
      examTip:'An operator must count recent ERROR messages or find requests from one IP in CloudWatch Logs: use Logs Insights.'
    },
    {
      ready:true,title:'Export and subscribe to CloudWatch Logs',
      summary:'Choose batch S3 export for historical copies or subscriptions for continuous downstream processing.',
      explanation:['A CloudWatch Logs export task copies an available time range to S3 for archival or later analysis, but it is not a real-time path. Subscription filters continuously match new events and deliver them to supported destinations such as Lambda, Kinesis Data Streams, or Amazon Data Firehose.','Subscriptions can centralize logs from multiple accounts and Regions, but cross-account delivery requires a destination policy and an authorized role or resource path. Build for retries, duplicates, throttling, and failed records, and avoid creating recursive delivery loops back into the same log group.'],
      takeaways:['S3 export is a batch operation.','Subscriptions process new logs continuously.','Cross-account aggregation needs explicit trust.'],
      examTip:'New log events must reach a central stream with low latency: choose a subscription filter, not an S3 export task.'
    },
    {
      ready:true,title:'Collect host telemetry with the CloudWatch agent',
      summary:'Send operating-system logs and guest-level metrics from EC2 and on-premises servers.',
      explanation:['EC2 publishes hypervisor-visible metrics but does not automatically send arbitrary files or guest-memory statistics. The unified CloudWatch agent collects logs plus metrics such as memory, disk usage, processes, swap, and detailed network statistics from supported hosts.','Store shared agent configuration in Systems Manager Parameter Store and attach an IAM role with only the required CloudWatch and Logs actions. The older Logs agent sends logs only; prefer the unified agent for new installations that require both logs and system metrics.'],
      takeaways:['EC2 does not automatically ship guest logs.','The unified agent collects logs and system metrics.','IAM authorizes telemetry publication.'],
      examTip:'An alarm needs Linux memory or disk-space utilization from EC2: install the unified CloudWatch agent and publish those metrics.'
    },
    {
      ready:true,title:'Create actionable CloudWatch alarms',
      summary:'Evaluate metric statistics over time and trigger notifications, scaling, or EC2 actions.',
      explanation:['A metric alarm compares a statistic against a threshold for configured evaluation periods and moves among OK, ALARM, and INSUFFICIENT_DATA. Missing-data treatment matters for sparse metrics, while M-out-of-N evaluation reduces reactions to isolated spikes.','Alarm actions can notify SNS, invoke Auto Scaling policies, or perform supported EC2 stop, terminate, reboot, and recovery actions. Alarms should represent a condition that has a clear response; dashboards explain behavior but do not trigger remediation by themselves.'],
      takeaways:['Alarms evaluate metrics over periods.','Missing-data treatment affects state.','Actions connect detection to response.'],
      examTip:'A threshold must send a notification or scale capacity automatically: create a CloudWatch alarm on the relevant metric.'
    },
    {
      ready:true,title:'Reduce noise with composite alarms and metric filters',
      summary:'Combine alarm states and turn matching log events into metrics for higher-signal alerting.',
      explanation:['A composite alarm applies AND, OR, and NOT logic to other alarm states. It can notify only when several symptoms agree or suppress downstream alarms during maintenance, reducing alert storms without altering the underlying metric alarms.','A CloudWatch Logs metric filter converts matching events into metric values, allowing an alarm on patterns such as authorization failures. For EC2 infrastructure failure, an alarm on the system status check can initiate instance recovery while retaining key instance attributes; instance status failures instead point to the guest workload.'],
      takeaways:['Composite alarms combine other alarm states.','Metric filters derive metrics from log patterns.','System and instance status checks diagnose different layers.'],
      examTip:'Notify only when both high CPU and high I/O alarms are active: use a composite alarm with AND logic.'
    },
    {
      ready:true,title:'Monitor hybrid links with Network Synthetic Monitor',
      summary:'Measure packet loss and round-trip latency between VPC subnets and on-premises destinations without agents.',
      explanation:['Amazon CloudWatch Network Synthetic Monitor creates managed probes from a selected VPC subnet to on-premises IP destinations across AWS Direct Connect or Site-to-Site VPN paths. It publishes latency and packet-loss metrics to CloudWatch for dashboards, thresholds, and alarms.','For Direct Connect, the network health indicator helps distinguish degradation within the AWS network. The monitor improves diagnosis but does not perform automatic failover, and it addresses private hybrid paths rather than public end-user internet performance.'],
      takeaways:['Managed probes require no host agent.','It measures hybrid packet loss and latency.','Monitoring does not provide failover.'],
      examTip:'Diagnose latency on a Direct Connect or Site-to-Site VPN path without installing agents: use Network Synthetic Monitor.'
    },
    {
      ready:true,title:'Route events with Amazon EventBridge rules',
      summary:'Match service and application events or schedules and fan them out to decoupled targets.',
      explanation:['Amazon EventBridge receives JSON events and evaluates rules against event patterns. Matching events can reach targets such as Lambda, SQS, SNS, Step Functions, ECS tasks, API destinations, or other event buses. EventBridge Scheduler is the dedicated current option for large-scale one-time and recurring schedules.','A rule responds to an event rather than polling for state. Configure retries and a dead-letter queue for delivery failures, grant EventBridge permission to invoke its target, and make consumers idempotent because delivery is at least once.'],
      takeaways:['Rules match JSON event patterns.','One event can reach multiple targets.','Consumers must tolerate duplicate delivery.'],
      examTip:'Run automation when an EC2 instance changes state or a CloudTrail API event occurs: create an EventBridge rule.'
    },
    {
      ready:true,title:'Design EventBridge buses, archives, and schemas',
      summary:'Separate event sources, permit cross-account publishing, replay retained events, and formalize contracts.',
      explanation:['The default bus receives supported AWS service events, custom buses organize application events, and partner event sources connect supported SaaS providers. Resource-based policies allow selected accounts or organizations to publish to a central bus for multi-account aggregation.','Archives retain matching bus events and can replay them later for recovery or testing. Schema Registry discovers or stores event structures and can generate language bindings, but producers and consumers still need compatible versioning. Archive replay is not a substitute for a durable application command queue.'],
      takeaways:['Different buses separate event domains.','Resource policies enable cross-account publishing.','Archives support later replay.'],
      examTip:'Centralize events from many accounts and replay them after a consumer fix: use a central EventBridge bus with a resource policy and archive.'
    },
    {
      ready:true,title:'Observe containers and Lambda runtimes',
      summary:'Add workload-level telemetry for container platforms and serverless execution environments.',
      explanation:['CloudWatch Container Insights collects and summarizes telemetry across ECS and Kubernetes clusters, services, tasks, pods, nodes, and containers. Collection setup depends on the platform: EKS and self-managed Kubernetes commonly use a containerized agent or observability add-on, while ECS and Fargate have their own enablement paths.','CloudWatch Lambda Insights adds system-level CPU, memory, disk, network, cold-start, and worker diagnostics beyond standard Lambda metrics. Both features must be enabled and authorized, and their added detail increases monitoring cost; structured application logs and tracing still provide request and business context.'],
      takeaways:['Container Insights organizes container telemetry.','Lambda Insights adds execution-environment diagnostics.','Both require explicit enablement.'],
      examTip:'Choose Container Insights for cluster-to-container visibility and Lambda Insights for unexplained function runtime behavior.'
    },
    {
      ready:true,title:'Find top contributors and application problems',
      summary:'Use Contributor Insights for top talkers and Application Insights for application-centered diagnosis.',
      explanation:['CloudWatch Contributor Insights evaluates structured logs or supported metrics to create time series for the top contributors, such as source IPs, URLs, users, or resources generating errors. Rules make high-cardinality operational data easier to rank without manually scanning every event.','CloudWatch Application Insights groups supported application resources, builds dashboards, and highlights likely problems across components. Its findings can integrate with EventBridge and Systems Manager OpsCenter. Choose Contributor Insights for who or what contributes most; choose Application Insights for correlated application health and troubleshooting.'],
      takeaways:['Contributor Insights identifies top-N contributors.','Application Insights correlates supported application resources.','The two tools answer different diagnostic questions.'],
      examTip:'Find the IP addresses producing the most rejected requests from flow logs: use Contributor Insights.'
    },
    {
      ready:true,title:'Audit account activity with AWS CloudTrail',
      summary:'Record who called AWS APIs, what they requested, when they acted, and where the call originated.',
      explanation:['AWS CloudTrail event history is enabled automatically and provides 90 days of management events in each Region. Event records identify the principal, API operation, source, request parameters, response elements, and time, making CloudTrail the first place to investigate resource creation, modification, or deletion.','A trail continuously delivers selected events to S3 and can integrate with CloudWatch Logs and EventBridge. Multi-Region and organization trails provide broader coverage; protect the destination with restricted access, encryption, log-file validation, retention controls, and monitoring for changes to the trail itself.'],
      takeaways:['CloudTrail records AWS API activity.','Event history covers recent management events.','Trails provide ongoing durable delivery.'],
      examTip:'Determine which identity deleted a resource or changed a security group: inspect CloudTrail.'
    },
    {
      ready:true,title:'Choose CloudTrail event types and detect anomalies',
      summary:'Separate control-plane, high-volume resource, network, and unusual-activity records.',
      explanation:['Management events describe control-plane actions such as creating a subnet or attaching a policy and can be split into reads and writes. Data events record high-volume resource activity such as S3 object access and Lambda invocation and require explicit selection. Network activity events can capture supported VPC endpoint access outcomes.','CloudTrail Insights learns normal write-management API patterns and creates Insights events when activity changes unusually. These detections can be delivered and routed through EventBridge, but they are an anomaly signal rather than proof of compromise. Selectors should capture the required evidence without logging every expensive high-volume operation unnecessarily.'],
      takeaways:['Management events cover control-plane operations.','Data events cover resource-level activity.','Insights detects unusual API-rate patterns.'],
      examTip:'Auditing S3 GetObject calls requires CloudTrail data events; ordinary management-event history is insufficient.'
    },
    {
      ready:true,title:'Retain and analyze CloudTrail events',
      summary:'Extend beyond recent event history with trails and account for the current CloudTrail Lake restriction.',
      explanation:['CloudTrail event history retains 90 days of management events per Region. For longer retention, a trail can deliver files to S3, where lifecycle policies, Object Lock, and Athena support durable evidence and SQL investigation. EventBridge can react to API events exposed through CloudTrail for near-real-time automation.','CloudTrail Lake provides managed event data stores and SQL analysis for existing customers, but it stopped accepting new customers on May 31, 2026. New architectures should use durable trails and AWS-recommended alternatives appropriate to their query and security-analytics needs rather than assuming a new Lake event data store can be created.'],
      takeaways:['Event history is limited to 90 days.','S3 trails support long-term retention.','CloudTrail Lake is closed to new customers.'],
      examTip:'Keep audit events for years and query them with a broadly available course pattern: deliver a trail to S3 and analyze with Athena.'
    },
    {
      ready:true,title:'Record compliance with AWS Config',
      summary:'Track supported resource configurations and evaluate them against desired rules over time.',
      explanation:['AWS Config records configuration items and relationships for supported resources, producing a history that answers what a resource looked like and how it changed. Managed and custom Config rules evaluate that state for compliance either when configurations change or on a schedule.','Config does not prevent changes by itself. Conformance packs group rules and remediation actions, while Systems Manager Automation can correct supported noncompliant resources. EventBridge or SNS can notify operators about compliance and configuration changes; scope and recording frequency affect cost.'],
      takeaways:['Config records resource configuration history.','Rules evaluate compliance.','Remediation can use Systems Manager Automation.'],
      examTip:'Determine whether every EBS volume is encrypted and see when a resource became noncompliant: use AWS Config.'
    },
    {
      ready:true,title:'Distinguish CloudWatch, CloudTrail, and Config',
      summary:'Select operational telemetry, API auditing, or configuration compliance based on the question being asked.',
      explanation:['CloudWatch answers how a system is behaving through metrics, logs, alarms, dashboards, and traces. CloudTrail answers who performed an AWS API action and from where. AWS Config answers what a supported resource configuration was, how it changed, and whether it complies with a rule.','The services complement one another. For a load balancer, CloudWatch graphs request and error metrics, CloudTrail records configuration API calls, and Config tracks listener or security-group state over time. EventBridge can route relevant events from these systems into automated response workflows.'],
      takeaways:['CloudWatch is operational observability.','CloudTrail is API activity auditing.','Config is configuration history and compliance.'],
      examTip:'Map performance to CloudWatch, actor and API call to CloudTrail, and resource state over time to AWS Config.'
    }
  ];

  const sectionTwentyFiveLectures=[
    {
      ready:true,title:'Organize multiple accounts with AWS Organizations',
      summary:'Group AWS accounts into a hierarchy for centralized governance, billing, and shared services.',
      explanation:['AWS Organizations is a global service with one management account and member accounts arranged beneath the root in organizational units. OUs should reflect governance boundaries such as production, development, and regulated workloads rather than merely copying a company org chart. Policies attached higher in the tree inherit downward.','Consolidated billing combines usage for payment and eligible volume benefits while preserving account-level cost reporting. Organizations can also coordinate services such as organization trails, delegated administration, tag policies, and account creation. Keep application workloads out of the management account and protect its root credentials with strong controls.'],
      takeaways:['The management account governs member accounts.','OUs create policy inheritance boundaries.','Consolidated billing retains account-level visibility.'],
      examTip:'Central billing and governance across many AWS accounts point to AWS Organizations.'
    },
    {
      ready:true,title:'Set permission ceilings with SCPs and RCPs',
      summary:'Apply organization-wide guardrails to principals and supported resources without directly granting access.',
      explanation:['A service control policy defines the maximum permissions available to principals in member accounts. Every applicable SCP from the root, OU, and account participates in evaluation; an explicit deny wins, and an allow-list strategy requires each level to permit the action. SCPs do not grant an IAM principal permission and do not restrict identities in the management account.','Resource control policies add resource-centric permission ceilings for supported services in member accounts. Effective access still requires the relevant identity- or resource-based grant and must survive SCPs, RCPs, boundaries, and explicit denies. Test restrictive policies on a small OU before broad rollout to avoid disabling essential operations.'],
      takeaways:['SCPs limit principals in member accounts.','RCPs limit access to supported member-account resources.','Neither policy type grants access.'],
      examTip:'Even AdministratorAccess cannot perform an action explicitly denied by an applicable SCP.'
    },
    {
      ready:true,title:'Standardize governance with organization policies',
      summary:'Use tagging and backup-oriented policies to apply consistent operational expectations across accounts.',
      explanation:['AWS Organizations policy types address different governance needs. Tag policies define valid tag keys and values and report compliance, helping teams standardize ownership, environment, and cost-allocation metadata. They do not automatically attach missing tags or replace IAM authorization.','Other supported organization policies can coordinate backup, AI-service opt-out, declarative EC2 configuration, or chat application controls depending on current feature support. Treat policies as versioned governance code, validate inherited effects, and separate reporting-oriented policies from permission guardrails such as SCPs and RCPs.'],
      takeaways:['Tag policies standardize tag conventions.','Compliance reporting does not grant or deny API access.','Policy inheritance follows the organization tree.'],
      examTip:'A company needs consistent allowed values for cost-center tags across accounts: use an Organizations tag policy.'
    },
    {
      ready:true,title:'Scope IAM access with conditions and resource ARNs',
      summary:'Constrain permissions by request context, resource tags, Regions, networks, and precise resource types.',
      explanation:['IAM conditions evaluate keys such as source IP, requested Region, MFA presence, principal organization, and resource or request tags. Use the correct operator and understand whether the key exists for the service and request; a condition written for public source IP behavior may not mean the same thing through a VPC endpoint or AWS service call.','Resource ARNs must match the API being authorized. For S3, ListBucket targets the bucket ARN, while GetObject, PutObject, and DeleteObject target object ARNs beneath the bucket. Combining both resource levels in one undifferentiated statement often produces missing permission or unintended scope.'],
      takeaways:['Conditions narrow when a grant applies.','Not every context key is present in every request.','S3 bucket and object actions use different ARNs.'],
      examTip:'For S3 listing plus object reads, authorize ListBucket on the bucket ARN and GetObject on the object ARN pattern.'
    },
    {
      ready:true,title:'Choose roles or resource-based cross-account access',
      summary:'Decide whether a caller should assume a new identity or access a resource with its existing principal identity.',
      explanation:['With cross-account role assumption, the target account trust policy permits the source principal to call STS, and the resulting session uses the role permissions. The caller gives up its original identity-based permissions for that session, which is useful for a defined target-account job or administrative persona.','A resource-based policy on services such as S3, SQS, SNS, Lambda, or EventBridge can grant the external principal direct access without role switching. This preserves the principal identity, although effective evaluation depends on principal type and policy context. EventBridge similarly uses target resource policies where supported and execution roles for targets that require API calls.'],
      takeaways:['AssumeRole creates a role session.','Resource policies can grant direct cross-account access.','Event targets need the correct permission model.'],
      examTip:'A user must retain its original principal while sending to a cross-account SQS queue: use a queue resource policy.'
    },
    {
      ready:true,title:'Delegate safely with permissions boundaries',
      summary:'Cap the permissions that identity policies can grant to an IAM user or role.',
      explanation:['A permissions boundary is a managed policy attached to an IAM user or role that defines its maximum identity-based permissions. It does not grant actions by itself. This lets a central team allow developers to create roles while preventing those roles from exceeding an approved permission envelope.','Evaluation combines the identity policy with the boundary and applicable organization controls, session policies, and resource policies. An explicit deny wins. Boundaries do not apply to IAM groups, and careless delegation can still allow removal of the boundary or creation of an unbounded principal unless those escalation paths are denied.'],
      takeaways:['Boundaries apply to users and roles.','A boundary is a ceiling, not a grant.','Delegation must prevent boundary removal and bypass.'],
      examTip:'Allow a developer to create IAM roles that can never exceed a prescribed policy: require a permissions boundary.'
    },
    {
      ready:true,title:'Evaluate IAM policies and troubleshoot denials',
      summary:'Trace a request through authentication, applicable policy types, explicit denies, and final allows.',
      explanation:['AWS first authenticates the principal and builds the request context, then evaluates applicable identity policies, resource policies, permissions boundaries, session policies, SCPs, and RCPs. A relevant explicit deny overrides any allow; otherwise the request needs an effective allow and is implicitly denied.','Troubleshoot by naming the exact action and resource, identifying the principal session, and checking every ceiling and condition. Policy Simulator and CloudTrail help, but simulator coverage is not universal and a successful simulation cannot compensate for a missing trust relationship, KMS key policy, or runtime context key.'],
      takeaways:['Explicit deny overrides allow.','No effective allow means implicit deny.','Trust and permissions solve different parts of role access.'],
      examTip:'When an allowed action still fails, check boundaries and organization policies before adding broader IAM permissions.'
    },
    {
      ready:true,title:'Centralize workforce access with IAM Identity Center',
      summary:'Give users one sign-in experience for AWS accounts and business applications.',
      explanation:['AWS IAM Identity Center connects a workforce identity source to AWS accounts in an organization and supported applications. The identity source may be the built-in directory, an external identity provider, or supported Microsoft Active Directory integration; users receive temporary federated sessions rather than long-lived IAM user keys.','Permission sets are reusable templates of policies and session settings. Assigning a user or group, permission set, and account causes Identity Center to provision corresponding roles in target accounts. Use groups and job functions to manage access at scale, apply MFA at the identity provider, and avoid routine workforce IAM users.'],
      takeaways:['Identity Center provides workforce SSO.','Permission sets become roles in assigned accounts.','Federation uses temporary credentials.'],
      examTip:'Employees need one portal and centrally managed access to many organization accounts: use IAM Identity Center.'
    },
    {
      ready:true,title:'Integrate Microsoft identity with Directory Service',
      summary:'Choose managed Microsoft AD, a proxy to existing AD, or a lightweight directory based on compatibility needs.',
      explanation:['AWS Managed Microsoft AD runs actual Microsoft Active Directory in AWS and supports trusts with an on-premises forest, making it suitable for workloads that need full AD compatibility. AD Connector proxies authentication requests to an existing on-premises directory without caching user credentials in AWS.','Simple AD is a lower-cost Samba-based directory for compatible basic use cases but lacks many Microsoft AD capabilities. IAM Identity Center can use supported directory integrations for workforce sign-in; plan redundant network connectivity and DNS carefully because authentication becomes dependent on the directory path.'],
      takeaways:['Managed Microsoft AD provides full AD capability.','AD Connector proxies an existing directory.','Simple AD supports narrower use cases.'],
      examTip:'AWS applications must authenticate directly against an existing on-premises AD without replicating users: choose AD Connector.'
    },
    {
      ready:true,title:'Govern a landing zone with AWS Control Tower',
      summary:'Orchestrate a multi-account environment with account vending, centralized logging, and ongoing controls.',
      explanation:['AWS Control Tower builds a landing zone on AWS Organizations and coordinates services including IAM Identity Center, CloudTrail, AWS Config, and Service Catalog. Account Factory standardizes account provisioning, while dedicated audit and log archive accounts separate security responsibilities.','Controls, formerly called guardrails, express governance at the OU level. Preventive controls use mechanisms such as SCPs to block actions, detective controls evaluate deployed resources, and proactive controls check resources before provisioning in supported workflows. Control Tower orchestrates these services rather than replacing them.'],
      takeaways:['Control Tower creates and governs a landing zone.','Account Factory standardizes new accounts.','Controls can be preventive, detective, or proactive.'],
      examTip:'A company wants an AWS best-practice multi-account landing zone with automated account provisioning: choose AWS Control Tower.'
    }
  ];

  const sectionTwentySixLectures=[
    {
      ready:true,title:'Choose encryption in transit, at rest, or client side',
      summary:'Place encryption at the layer that matches who may see plaintext and where keys must be controlled.',
      explanation:['Encryption in transit protects network connections with protocols such as TLS. Server-side encryption lets the receiving AWS service encrypt stored data and decrypt it for authorized requests. Client-side encryption transforms data before upload, so the storage service never receives plaintext.','These controls solve different threats and are commonly combined. Encryption does not replace authorization, integrity checks, backups, or secret management; key access is effectively data access, so least privilege and recovery planning must cover the keys as carefully as the ciphertext.'],
      takeaways:['TLS protects data in transit.','Server-side encryption occurs at the service.','Client-side encryption keeps plaintext from the storage service.'],
      examTip:'If AWS must never receive plaintext, encrypt on the client before sending the data.'
    },
    {
      ready:true,title:'Manage encryption keys with AWS KMS',
      summary:'Use a regional managed control plane for cryptographic keys, policies, grants, rotation, and audit.',
      explanation:['AWS Key Management Service creates and controls keys backed by protected hardware and integrates with services such as S3, EBS, RDS, DynamoDB, and Secrets Manager. KMS API activity is recorded in CloudTrail, and customer managed keys support configurable policies, aliases, enablement, rotation options, and deletion waiting periods.','KMS is designed for keys and small cryptographic operations, not bulk payload encryption. Applications normally request a data key, encrypt the large payload locally, store the encrypted data key beside the ciphertext, and ask KMS to decrypt that data key when authorized. This envelope pattern limits data transferred to KMS.'],
      takeaways:['KMS centrally controls cryptographic keys.','Integrated services use KMS permissions on the caller\'s behalf.','Envelope encryption handles large payloads efficiently.'],
      examTip:'Managed encryption with auditability and fine-grained key control across AWS services points to AWS KMS.'
    },
    {
      ready:true,title:'Select KMS key ownership and key type',
      summary:'Balance control, cost, compatibility, and cryptographic operation requirements.',
      explanation:['AWS owned keys are fully managed and hidden within a service. AWS managed keys use service aliases and visible policies that customers cannot edit. Customer managed keys provide control over policy, aliases, lifecycle, rotation, and cross-account use, with associated charges and operational responsibility.','Symmetric KMS keys serve most integrated AWS encryption because the same protected key material encrypts and decrypts. Asymmetric keys expose a public key for supported encryption, signing, or verification patterns, while HMAC keys generate and verify message authentication codes. Confirm that a target AWS service supports the selected key kind.'],
      takeaways:['Customer managed keys offer the most control.','Symmetric keys fit most service integrations.','Asymmetric and HMAC keys serve specialized operations.'],
      examTip:'Cross-account encryption or editable key policy requirements usually require a customer managed KMS key.'
    },
    {
      ready:true,title:'Authorize KMS with key policies and grants',
      summary:'Combine the key policy, IAM permissions, and scoped grants to control cryptographic use.',
      explanation:['Every KMS key has a key policy, and access is impossible without a policy path that permits it. A default customer managed key policy can enable the account to delegate through IAM, while a custom policy can name administrators, users, services, and conditions directly. Keep key administration separate from key usage.','KMS grants provide delegated, often temporary permissions to use a key and are heavily used by integrated AWS services. Conditions such as encryption context and ViaService can constrain where a key is usable. Troubleshoot both the calling principal permission and key policy rather than broadening only one side.'],
      takeaways:['A KMS key policy is mandatory.','Key administrators need not decrypt data.','Grants support delegated service use.'],
      examTip:'An IAM allow alone does not guarantee KMS access; confirm that the key policy enables the principal or account delegation.'
    },
    {
      ready:true,title:'Copy encrypted snapshots and AMIs safely',
      summary:'Re-encrypt regional copies and explicitly share both artifacts and customer managed keys across accounts.',
      explanation:['KMS keys are regional, so copying an encrypted EBS or RDS snapshot to another Region re-encrypts the copy under a destination-Region key. The target key policy and caller permissions must allow the operation, and the copied snapshot becomes an independent regional recovery artifact.','For cross-account use, encrypt with a customer managed key, authorize the destination account in the key policy, and share the snapshot or AMI permissions. The recipient commonly copies the artifact into its own account and re-encrypts it under its own key. AWS managed keys cannot be edited for this sharing workflow.'],
      takeaways:['Cross-Region copies use a destination key.','Artifact permission and KMS permission are separate.','Cross-account sharing needs a customer managed key.'],
      examTip:'To share an encrypted AMI, grant launch access and authorize the recipient to use the backing customer managed KMS key.'
    },
    {
      ready:true,title:'Use KMS multi-Region keys deliberately',
      summary:'Replicate related key material across Regions when applications require compatible regional cryptography.',
      explanation:['A multi-Region primary KMS key can be replicated into supported Regions. Replicas share key material and key ID so ciphertext or signatures can be processed regionally without a re-encryption hop, while each replica has its own ARN, policy, alias configuration, enabled state, and audit trail.','Multi-Region keys do not replicate application data and are not automatically global. They fit client-side encryption, disaster recovery, and globally distributed signing where identical key material is a requirement; ordinary AWS service encryption often remains simpler with independent regional keys.'],
      takeaways:['Primary and replica keys share key material.','Policies and lifecycle remain regional.','Data replication is a separate concern.'],
      examTip:'A globally replicated application must decrypt the same client-side ciphertext locally in multiple Regions: consider KMS multi-Region keys.'
    },
    {
      ready:true,title:'Replicate KMS-encrypted S3 objects',
      summary:'Give S3 permission to decrypt the source and encrypt the replica with an approved destination key.',
      explanation:['S3 Replication copies eligible objects according to a rule and role. SSE-KMS objects require explicit replication configuration, permission to decrypt with the source key, and permission to encrypt with the destination KMS key. Cross-account destinations also need compatible bucket and key policies.','The destination object may use a different regional key, and KMS request volume and throttling become part of replication capacity planning. Replication status and failure metrics should be monitored because a valid bucket rule alone cannot overcome a denied or disabled KMS key.'],
      takeaways:['SSE-KMS replication needs explicit enablement.','Source decrypt and destination encrypt are distinct permissions.','KMS capacity can affect replication.'],
      examTip:'S3 replication works for unencrypted objects but fails for SSE-KMS objects: check the replication rule and both KMS key permissions.'
    },
    {
      ready:true,title:'Store configuration in Systems Manager Parameter Store',
      summary:'Manage hierarchical configuration values and optionally encrypt sensitive strings with KMS.',
      explanation:['Systems Manager Parameter Store stores versioned String, StringList, and SecureString parameters under hierarchical names such as /application/environment/database. IAM policies can grant access by path, and applications can retrieve values through APIs without hard-coding configuration into images or source control.','SecureString uses KMS, so callers need both Parameter Store and KMS permissions. Standard and advanced tiers differ in quotas, value size, throughput options, and features; advanced parameters support policies such as expiration notifications. Parameter Store is a strong configuration service but does not provide the same managed secret rotation workflow as Secrets Manager.'],
      takeaways:['Hierarchies organize environment configuration.','SecureString adds KMS encryption.','Parameter policies require the advanced tier.'],
      examTip:'Hierarchical application settings with optional encrypted values and no managed rotation requirement point to Parameter Store.'
    },
    {
      ready:true,title:'Rotate credentials with AWS Secrets Manager',
      summary:'Store, retrieve, rotate, and replicate application secrets through a purpose-built managed service.',
      explanation:['AWS Secrets Manager encrypts secret versions with KMS and controls retrieval through IAM and resource policies. Managed integrations and Lambda rotation functions can create a new credential, test it, promote its staging label, and preserve an older version for rollback. Applications should cache values briefly and handle rotation without restart.','Multi-Region secrets create managed replicas that track the primary for regional applications and recovery. Use Secrets Manager when rotation, database credential integration, cross-account resource policies, or replica secrets justify it; use Parameter Store for simpler configuration where those features are unnecessary.'],
      takeaways:['Secrets are versioned and KMS encrypted.','Rotation can be automated.','Regional replicas support resilient applications.'],
      examTip:'A database password must rotate automatically without embedding credentials in code: use Secrets Manager.'
    },
    {
      ready:true,title:'Provision TLS certificates with AWS Certificate Manager',
      summary:'Request, validate, deploy, and renew certificates on supported AWS integrated services.',
      explanation:['AWS Certificate Manager issues public certificates after domain validation and manages renewal while they remain eligible and in use with supported integrations. ACM also manages private certificates with AWS Private CA and can import externally issued certificates, although imported certificates require the owner to monitor expiration and replace them.','ACM certificates attach to services such as Elastic Load Balancing, CloudFront, and API Gateway rather than being downloaded as private keys in the traditional non-exportable workflow. Certificate Region matters: a CloudFront viewer certificate is requested in us-east-1, while a regional load balancer uses a certificate in its own Region.'],
      takeaways:['ACM manages TLS certificate lifecycle.','Imported certificates need owner-managed renewal.','Certificate Region must match the integration.'],
      examTip:'Use an ACM public certificate on an ALB for managed HTTPS and renewal; do not install it directly as a normal EC2 file.'
    },
    {
      ready:true,title:'Secure API Gateway custom domains',
      summary:'Match endpoint scope, DNS, and ACM certificate Region for edge, regional, or private APIs.',
      explanation:['An edge-optimized custom domain routes through a CloudFront distribution managed by API Gateway and uses an ACM certificate in us-east-1. A regional custom domain serves from a chosen Region and uses an ACM certificate there; Route 53 alias records can direct clients to either endpoint.','Private APIs are reachable through interface VPC endpoints and resource policies rather than public edge distribution. Endpoint selection depends on client geography and network exposure, and TLS termination does not replace authorization, throttling, WAF protection, or backend encryption.'],
      takeaways:['Edge endpoints suit geographically distributed clients.','Regional endpoints keep the API in one Region.','Private APIs use VPC endpoint access.'],
      examTip:'For an edge-optimized API Gateway custom domain, the ACM certificate must be in us-east-1.'
    },
    {
      ready:true,title:'Control dedicated key hardware with AWS CloudHSM',
      summary:'Operate keys on single-tenant hardware security modules when exclusive control or specialized interfaces are required.',
      explanation:['AWS CloudHSM provisions dedicated HSM appliances inside a customer VPC. AWS maintains the hardware, but the customer manages users, keys, clusters, backups, client software, and cryptographic operations through supported industry interfaces. IAM controls cluster-management APIs, not access to cryptographic keys inside the HSM.','A production cluster should span Availability Zones because an individual HSM is not the availability boundary. CloudHSM suits requirements for single-tenant devices, direct PKCS #11, JCE, or CNG access, or key ownership beyond standard KMS control, but it carries more cost and operational effort.'],
      takeaways:['CloudHSM provides dedicated single-tenant HSMs.','Customers manage HSM users and keys.','Multi-AZ clusters provide resilience.'],
      examTip:'A compliance requirement demands customer-controlled keys on dedicated HSM hardware: choose CloudHSM.'
    },
    {
      ready:true,title:'Compare KMS, CloudHSM, and custom key stores',
      summary:'Choose managed key service convenience, direct HSM control, or a bridge between the two.',
      explanation:['KMS is multi-tenant, highly integrated, and operationally managed by AWS, with customer control expressed through keys and policies. CloudHSM provides dedicated appliances and direct cryptographic interfaces, but customers handle clustering, users, keys, capacity, and availability.','A KMS custom key store can back KMS keys with a CloudHSM cluster, preserving many KMS integrations while placing key material in customer-controlled HSMs. An external key store instead connects KMS to supported external key-management infrastructure. Both add availability, latency, and operational dependencies that standard KMS avoids.'],
      takeaways:['KMS maximizes managed integration.','CloudHSM maximizes direct dedicated control.','Custom key stores combine KMS APIs with alternate key backing.'],
      examTip:'Choose standard KMS unless a stated requirement demands single-tenancy, direct HSM interfaces, or externally controlled key material.'
    },
    {
      ready:true,title:'Filter application traffic with AWS WAF',
      summary:'Inspect Layer 7 web requests and allow, block, count, challenge, or rate-limit matches.',
      explanation:['AWS WAF attaches a web ACL to supported resources such as CloudFront, Application Load Balancer, API Gateway, AppSync, and other current integrations. Rules match IP sets, headers, URI paths, query strings, body content, geographic origin, labels, rate behavior, or managed rule groups.','WAF protects HTTP and HTTPS semantics, not arbitrary TCP or UDP traffic. Start new rules in count mode, inspect sampled requests and logs, tune exclusions, then enforce to reduce false positives. Capacity units and rule priority determine whether a web ACL is valid and which action takes effect.'],
      takeaways:['WAF is a Layer 7 firewall.','Web ACLs contain ordered rules.','Managed rules still require tuning and monitoring.'],
      examTip:'Block SQL injection, cross-site scripting, or abusive HTTP request rates: use AWS WAF.'
    },
    {
      ready:true,title:'Combine WAF with stable entry points',
      summary:'Use CloudFront or Global Accelerator when clients need global ingress behavior that a regional web tier alone cannot provide.',
      explanation:['WAF does not attach directly to a Network Load Balancer because an NLB operates at Layer 4. For global HTTP applications, CloudFront provides edge caching, a stable distribution endpoint, WAF integration, and an origin such as an ALB.','Global Accelerator supplies static anycast IP addresses and routes TCP or UDP traffic to healthy regional endpoints, including ALBs. When the application also needs Layer 7 filtering, place WAF on the ALB while clients enter through Global Accelerator; choose the pattern based on caching, protocol, and static-IP requirements.'],
      takeaways:['WAF cannot attach to an NLB.','CloudFront integrates edge delivery and WAF.','Global Accelerator provides static anycast IPs.'],
      examTip:'Static global IPs plus WAF-protected HTTP behind an ALB point to Global Accelerator in front of the WAF-associated ALB.'
    },
    {
      ready:true,title:'Mitigate DDoS attacks with AWS Shield',
      summary:'Use automatic baseline protection or an advanced subscription with enhanced detection and response support.',
      explanation:['AWS Shield Standard automatically protects AWS customers against common infrastructure-layer DDoS attacks at no additional charge. It is built into services such as CloudFront and Route 53 and works with scalable regional front doors to absorb or route around attacks.','AWS Shield Advanced adds enhanced detection, visibility, protection groups, health-based detection, cost-protection benefits under qualifying conditions, and access to the AWS Shield Response Team. It is not a replacement for WAF: Shield addresses denial-of-service resilience while WAF expresses application request rules.'],
      takeaways:['Shield Standard is automatic and included.','Shield Advanced adds response and cost-protection features.','WAF and Shield address different layers.'],
      examTip:'A business needs expert DDoS response support and enhanced protected-resource visibility: choose Shield Advanced.'
    },
    {
      ready:true,title:'Apply security policies with AWS Firewall Manager',
      summary:'Centrally deploy and audit firewall protections across accounts and organizational units.',
      explanation:['AWS Firewall Manager lets a delegated security administrator define policies for AWS WAF, Shield Advanced, security groups, Network Firewall, Route 53 Resolver DNS Firewall, and other supported controls. It discovers in-scope resources and can remediate missing or noncompliant protection.','Firewall Manager requires AWS Organizations and appropriate service configuration. It distributes policy but does not replace the underlying firewall services: teams still design WAF rules, Network Firewall policies, and exception processes, then use Firewall Manager to enforce their consistent presence.'],
      takeaways:['Firewall Manager centralizes multi-account policy.','It works through underlying security services.','Policies can audit or remediate resources.'],
      examTip:'Enforce the same WAF web ACL across application accounts in an organization: use Firewall Manager.'
    },
    {
      ready:true,title:'Design a DDoS-resilient architecture',
      summary:'Absorb traffic at the edge, scale regional capacity, filter requests, and minimize exposed origins.',
      explanation:['CloudFront, Global Accelerator, Route 53, and Shield provide globally distributed entry points. Regional layers use Elastic Load Balancing and Auto Scaling to spread legitimate surges, while WAF rate-based and managed rules reject abusive application requests before expensive backend work.','Reduce attack surface by keeping origins private or restricted to approved front doors, using security groups and network controls, avoiding direct instance exposure, and decoupling work with queues. Monitor normal baselines, rehearse incident response, protect DNS and credentials, and control scaling cost because elasticity alone is not a complete defense.'],
      takeaways:['Edge services absorb and distribute traffic.','WAF filters application-layer abuse.','Origin exposure should be minimized.'],
      examTip:'The strongest DDoS design combines edge protection, scalable regional layers, request filtering, and a hidden origin.'
    },
    {
      ready:true,title:'Detect threats with Amazon GuardDuty',
      summary:'Continuously analyze account, network, DNS, and optional workload signals for suspicious activity.',
      explanation:['Amazon GuardDuty uses threat intelligence, anomaly detection, and machine learning over foundational sources including CloudTrail management events, VPC Flow Logs, and Route 53 Resolver DNS query logs. It consumes independent service feeds, so foundational detection does not require customers to create those log deliveries first.','Protection plans extend coverage to areas such as S3 data events, EKS audit activity, RDS login activity, Lambda networking, malware, AI workloads, and runtime events on supported compute. Findings describe evidence and severity and can flow through EventBridge for enrichment or response; they do not automatically prove compromise.'],
      takeaways:['GuardDuty is managed threat detection.','Foundational sources require little setup.','Protection plans add workload-specific coverage.'],
      examTip:'Detect anomalous API activity, malicious IP communication, or credential compromise without managing a SIEM pipeline: enable GuardDuty.'
    },
    {
      ready:true,title:'Scan vulnerabilities with Amazon Inspector',
      summary:'Continuously assess supported EC2, ECR image, and Lambda resources for software and code risk.',
      explanation:['Amazon Inspector discovers eligible resources and continuously scans EC2 instances, container images in Amazon ECR, and Lambda functions. Findings correlate package or code vulnerabilities with exploit intelligence, network reachability, and resource context to help prioritize remediation.','EC2 coverage can use Systems Manager agent-based scanning and supported agentless or hybrid paths; exact operating-system and language support matters. ECR rescans images as vulnerability intelligence changes, while Lambda standard and code scanning cover supported packages and runtimes. Inspector identifies vulnerabilities but does not patch them automatically.'],
      takeaways:['Inspector performs vulnerability management.','It covers EC2, ECR images, and Lambda.','Findings must feed a remediation process.'],
      examTip:'Continuously identify CVEs in EC2 packages and ECR container images: use Amazon Inspector.'
    },
    {
      ready:true,title:'Discover sensitive S3 data with Amazon Macie',
      summary:'Use managed classification to find personal, financial, credential, and custom sensitive-data patterns in S3.',
      explanation:['Amazon Macie inventories S3 buckets and evaluates security posture signals such as public access, encryption, and sharing. Sensitive-data discovery jobs inspect selected objects with managed data identifiers, custom regular expressions, and allow lists, then produce findings without changing the source data.','Automated sensitive data discovery samples and profiles supported bucket data over time, while targeted jobs provide precise scope and scheduling. Findings can reach Security Hub or EventBridge for workflow, but classification should be paired with access remediation, retention, encryption, and cost-aware sampling.'],
      takeaways:['Macie focuses on sensitive data in S3.','Managed and custom identifiers classify content.','Discovery findings do not remediate access automatically.'],
      examTip:'Find buckets and objects containing PII or exposed credentials at scale: use Amazon Macie.'
    }
  ];

  const sectionTwentySevenLectures=[
    {
      ready:true,title:'Build regional networks with Amazon VPC',
      summary:'Create an isolated regional network from subnets, routes, gateways, interfaces, and layered controls.',
      explanation:['An Amazon VPC spans the Availability Zones of one Region, while each subnet belongs to exactly one Availability Zone. Route tables decide the next hop for destination prefixes, network interfaces attach workloads, and gateways connect the VPC to the internet, other VPCs, or external networks.','High availability requires resources and subnets across multiple AZs; a VPC alone does not create redundancy. Address plans must leave room for growth and avoid overlap with networks that may later connect through peering, Transit Gateway, VPN, or Direct Connect.'],
      takeaways:['A VPC is regional.','A subnet is tied to one AZ.','Routes and gateways determine connectivity.'],
      examTip:'Design multi-AZ applications with at least one workload subnet per participating Availability Zone.'
    },
    {
      ready:true,title:'Plan IPv4 ranges with CIDR',
      summary:'Translate prefix lengths into address ranges and reserve non-overlapping space for future connectivity.',
      explanation:['CIDR combines a base address with a prefix length. A longer prefix fixes more network bits and creates a smaller range: /32 identifies one IPv4 address, /24 contains 256 addresses, and /16 contains 65,536. Security rules and route tables use CIDR destinations and sources.','Choose VPC and subnet blocks from an intentional enterprise address plan. Overlapping CIDRs prevent normal routing across peering and complicate Transit Gateway, VPN, and Direct Connect designs; renumbering a deployed network is much harder than reserving adequate space early.'],
      takeaways:['Longer prefixes represent smaller ranges.','CIDR appears in routes and firewall rules.','Connected networks should not overlap.'],
      examTip:'When comparing routes, the most specific matching prefix—the longest prefix—wins.'
    },
    {
      ready:true,title:'Distinguish public, private, and Elastic IPv4 addresses',
      summary:'Understand address scope, translation, persistence, and internet reachability.',
      explanation:['Private IPv4 ranges are not routed directly on the public internet. An EC2 public IPv4 address maps through AWS edge translation to the instance private address and may change when the instance is stopped and started; an Elastic IP is a static public IPv4 allocation that can be remapped.','A public address does not make a resource reachable by itself. The subnet route table needs a route to an internet gateway, security controls must allow the traffic, and the operating system or application must listen. Conversely, a private instance can initiate internet traffic through NAT without accepting unsolicited inbound sessions.'],
      takeaways:['Private IPv4 is not internet-routable.','Elastic IPs are static allocations.','Reachability requires routes and security permission.'],
      examTip:'A public subnet is defined by routing to an internet gateway, not merely by its name or CIDR.'
    },
    {
      ready:true,title:'Choose a default or custom VPC',
      summary:'Use the default network for quick experimentation and custom designs for deliberate production boundaries.',
      explanation:['A default VPC includes public default subnets, an internet gateway, a main route table, a default security group, a default network ACL, and DNS settings intended to make launches easy. Instances may receive public IPv4 addresses automatically depending on subnet configuration.','A custom VPC begins with controlled address space and lets architects explicitly define public, private, isolated, inspection, and database tiers. Production environments favor custom VPCs because routing, exposure, logging, and IP allocation are visible design decisions rather than inherited conveniences.'],
      takeaways:['Default VPCs optimize ease of launch.','Custom VPCs optimize intentional architecture.','Every VPC has default route and security resources.'],
      examTip:'Do not assume a private workload belongs in the default VPC; design custom subnets and routes for production isolation.'
    },
    {
      ready:true,title:'Design subnets and usable address capacity',
      summary:'Divide a VPC CIDR across Availability Zones while accounting for AWS-reserved addresses.',
      explanation:['A subnet uses a non-overlapping CIDR contained within a VPC address range and cannot span AZs. AWS reserves the first four and final IPv4 addresses in every subnet, so a nominal block has fewer assignable addresses than its mathematical size.','Allow capacity for instances, load balancer nodes, NAT and endpoint interfaces, Kubernetes pods, failover, and rolling deployments. Small subnets can exhaust silently as managed services add ENIs; distribute tiers across AZs and monitor available IP address counts.'],
      takeaways:['Subnet CIDRs cannot overlap.','Five IPv4 addresses per subnet are reserved.','Managed services also consume subnet IPs.'],
      examTip:'A /28 has 16 total IPv4 addresses but only 11 are assignable in an AWS subnet.'
    },
    {
      ready:true,title:'Route traffic with VPC route tables',
      summary:'Associate subnets with destination-to-target rules and rely on longest-prefix matching.',
      explanation:['Every subnet is associated with one route table, explicitly or through the VPC main table. The automatic local route enables communication inside the VPC CIDR, while additional routes target internet, NAT, peering, Transit Gateway, virtual private gateway, endpoint, or appliance resources.','Routing is destination based: AWS chooses the longest matching prefix, and a propagated route can coexist with static routes. A route may become blackholed when its target is unavailable or deleted. Return paths and stateful or stateless filtering must also permit the connection.'],
      takeaways:['One route table applies to each subnet.','The local route connects VPC address space.','Longest-prefix match selects the route.'],
      examTip:'When two routes match, AWS uses the more specific CIDR before considering a broader default route.'
    },
    {
      ready:true,title:'Provide internet access with an internet gateway',
      summary:'Attach a horizontally scaled gateway and route public-subnet traffic to it.',
      explanation:['An internet gateway attaches to one VPC and provides a route target for IPv4 and IPv6 internet traffic. A typical public subnet has a default IPv4 route to the IGW, and an IPv4 instance also needs a public or Elastic IP for one-to-one edge translation.','The IGW itself is redundant and managed, but it is not a firewall and does not override security groups or NACLs. Private subnets should not route directly to it for IPv4 internet egress; they use a NAT design or private service endpoint instead.'],
      takeaways:['An IGW attaches to a VPC.','Public IPv4 instances need public addressing and a route.','Security controls still apply.'],
      examTip:'An instance has a public IP but no internet connection: verify the subnet default route points to an attached internet gateway.'
    },
    {
      ready:true,title:'Administer private instances without exposing SSH',
      summary:'Prefer managed access paths and tightly constrain any bastion host that remains necessary.',
      explanation:['A bastion host sits in a public subnet and accepts administrative connections from a narrow trusted source, then reaches private instances over their private addresses. Its security group should expose only required ports and targets should accept administration only from the bastion security group.','Systems Manager Session Manager often removes the need for inbound SSH, public IPs, and private keys. It uses an authorized agent and outbound connectivity through NAT or VPC endpoints, logs sessions, and integrates with IAM; choose it when requirements permit a managed, auditable control-plane path.'],
      takeaways:['Bastions are hardened entry hosts.','Target rules can reference the bastion security group.','Session Manager avoids inbound administration ports.'],
      examTip:'For secure shell access with no public IP or open port 22, use Systems Manager Session Manager.'
    },
    {
      ready:true,title:'Recognize legacy NAT instance designs',
      summary:'Understand self-managed IPv4 translation and why managed NAT is preferred.',
      explanation:['A NAT instance is an EC2 instance configured to forward traffic from private subnets. It must reside in a public subnet, have a public address, disable source/destination checking, and receive the private route-table default route. Security groups and operating-system firewall rules govern it.','Capacity, patching, failure recovery, and scaling belong to the customer. NAT instances can support custom software, port forwarding, or bastion use that a NAT gateway does not, but old preconfigured NAT AMIs are unsupported and AWS recommends NAT gateways for normal outbound translation.'],
      takeaways:['NAT instances require source/destination check disabled.','They are customer managed.','They allow customization unavailable in NAT gateways.'],
      examTip:'Select a NAT instance only when the scenario explicitly needs custom NAT software or behavior.'
    },
    {
      ready:true,title:'Provide zonal egress with NAT gateways',
      summary:'Let private IPv4 workloads initiate external connections through a managed Availability Zone resource.',
      explanation:['A public zonal NAT gateway is created in a public subnet with an Elastic IP and sends internet-bound traffic through the VPC internet gateway. Private subnet route tables point their default IPv4 route to the NAT gateway; unsolicited inbound internet connections are not translated back to private workloads.','A zonal NAT gateway is redundant within its AZ but is not cross-AZ. For zone-independent architecture, place one in each active AZ and route each private subnet to its local gateway, avoiding a single-AZ dependency and unnecessary cross-AZ data transfer.'],
      takeaways:['NAT gateway provides initiated outbound access.','A public NAT gateway needs an EIP and IGW.','Per-AZ deployment isolates failures.'],
      examTip:'Private EC2 instances need managed IPv4 software updates from the internet without inbound exposure: use NAT gateways.'
    },
    {
      ready:true,title:'Simplify egress with regional NAT gateways',
      summary:'Use one regional NAT identity that expands across workload Availability Zones automatically.',
      explanation:['A regional NAT gateway is associated with a VPC instead of one public subnet. It has its own route table and automatically expands or contracts across AZs based on workload presence, preserving zonal affinity while offering a single route target and high availability by default.','Regional NAT gateways remove the need to build public NAT subnets and manage a separate gateway per AZ for public egress. They do not support private NAT, and expansion into a newly used AZ is not instantaneous, so verify feature availability, migration interruption, address strategy, and pricing for the workload.'],
      takeaways:['Regional NAT spans workload AZs automatically.','It does not require a public subnet.','Private NAT still uses zonal gateways.'],
      examTip:'For a current greenfield multi-AZ public-egress design with minimal NAT routing administration, evaluate a regional NAT gateway.'
    },
    {
      ready:true,title:'Filter instance traffic with security groups',
      summary:'Apply stateful allow rules to elastic network interfaces and reference workload identities.',
      explanation:['Security groups are stateful virtual firewalls attached to ENIs. They contain allow rules only; return traffic for an allowed connection is automatically permitted regardless of the opposite-direction rule. Multiple attached groups combine their allowed traffic.','Rules can reference CIDRs, prefix lists, or other security groups in supported network relationships. Referencing an application-tier group from a database group is safer and more scalable than tracking instance IPs. Security groups do not process traffic addressed to Amazon DNS or several reserved infrastructure paths in the usual way.'],
      takeaways:['Security groups are stateful.','They support allow rules only.','Group references express workload relationships.'],
      examTip:'Allow database connections only from the application fleet by referencing the application security group as the source.'
    },
    {
      ready:true,title:'Control subnet traffic with network ACLs',
      summary:'Use ordered stateless allow and deny rules as a coarse subnet boundary.',
      explanation:['A network ACL associates with one or more subnets, and each subnet uses one NACL. Inbound and outbound numbered rules are evaluated from the lowest number until the first match; both allow and deny actions are available, followed by an implicit deny.','NACLs are stateless, so response traffic must be allowed explicitly in the reverse direction. The default NACL permits traffic, while a new custom NACL initially denies it. Use NACLs for coarse CIDR blocks and defense in depth, not as a replacement for workload-level security groups.'],
      takeaways:['NACLs operate at subnet boundaries.','Rules are ordered and can deny.','Return traffic needs an explicit reverse rule.'],
      examTip:'A requirement to deny one source CIDR at the subnet boundary points to a network ACL.'
    },
    {
      ready:true,title:'Handle ephemeral ports and compare firewalls',
      summary:'Design bidirectional NACL rules while relying on stateful security groups for connection tracking.',
      explanation:['A client connects to a well-known server port but receives responses on the client operating system\'s ephemeral source port. Because NACLs are stateless, the client-side subnet must allow response traffic to the relevant ephemeral range and the server-side subnet must allow corresponding outbound traffic.','Security groups remember established flows and need no explicit ephemeral response rule. Diagnose failures by checking route tables, security groups, both NACL directions, host firewalls, and whether the packet is a request or response; a flow-log REJECT shows filtering but not always which control rejected it.'],
      takeaways:['Clients use ephemeral source ports.','NACLs require both traffic directions.','Security groups track established connections.'],
      examTip:'Requests reach a server but responses fail after adding restrictive NACLs: open the appropriate ephemeral return-port range.'
    },
    {
      ready:true,title:'Connect VPCs with peering',
      summary:'Create private one-to-one connectivity between non-overlapping VPC networks.',
      explanation:['VPC peering routes traffic privately between two VPCs in supported Regions and accounts. After accepting the connection, both sides need routes for the peer CIDR and compatible security rules; DNS resolution options may also need configuration.','Peering uses the AWS network and has no gateway bottleneck, but it is a point-to-point relationship. CIDRs cannot overlap, and each peering connection is an explicit trust and routing boundary suitable for a small number of direct relationships.'],
      takeaways:['Peering requires non-overlapping CIDRs.','Both sides need routes.','Cross-account and inter-Region peering are supported.'],
      examTip:'Two non-overlapping VPCs need simple private direct connectivity: use VPC peering.'
    },
    {
      ready:true,title:'Respect VPC peering limitations',
      summary:'Avoid transitive routing and edge-to-edge gateway assumptions in point-to-point topologies.',
      explanation:['VPC peering is non-transitive: if A peers with B and B peers with C, A cannot reach C through B. A full mesh grows rapidly as VPC count rises, and overlapping address ranges remain impossible even if routes appear otherwise viable.','A peer generally cannot use the other VPC as a transit path to its internet gateway, NAT gateway, VPN, or Direct Connect gateway. Use Transit Gateway or another supported centralized routing architecture when many networks or hybrid connections must share transit services.'],
      takeaways:['Peering is non-transitive.','A peer is not a general gateway transit path.','Meshes become hard to manage at scale.'],
      examTip:'Many VPCs need hub-and-spoke transitive routing: choose Transit Gateway, not chains of VPC peerings.'
    },
    {
      ready:true,title:'Keep AWS service traffic private with VPC endpoints',
      summary:'Reach supported services without routing through an internet gateway or NAT device.',
      explanation:['A VPC endpoint gives workloads private connectivity to a supported AWS or endpoint service over the AWS network. It removes public-path and NAT dependencies, although the service remains regional and the workload still needs DNS, route, security, IAM, and service-policy authorization.','Endpoint policies can limit which principals, resources, or actions use an endpoint, while the target service policy can require requests to arrive through a named endpoint or VPC. Endpoint connectivity does not itself grant application permission.'],
      takeaways:['Endpoints avoid internet and NAT paths.','IAM authorization still applies.','Endpoint policies add a network-path control.'],
      examTip:'Private workloads need an AWS service without internet egress: use the appropriate VPC endpoint.'
    },
    {
      ready:true,title:'Use gateway endpoints for S3 and DynamoDB',
      summary:'Add free route-table targets for private in-Region access to S3 and DynamoDB.',
      explanation:['Gateway endpoints support Amazon S3 and DynamoDB. Selecting route tables adds service prefix-list routes whose target is the endpoint, so matching traffic stays on the AWS network and bypasses NAT gateway processing.','They do not create ENIs or use security groups and are scoped to the VPC and Region. For on-premises, cross-Region, or some centralized endpoint patterns, an interface endpoint may be needed instead. Bucket policies can use endpoint conditions to restrict access carefully without locking out required administration.'],
      takeaways:['Gateway endpoints support S3 and DynamoDB.','They modify selected route tables.','They have no hourly endpoint charge.'],
      examTip:'Reduce NAT charges for private subnets accessing regional S3: use an S3 gateway endpoint.'
    },
    {
      ready:true,title:'Use interface endpoints and AWS PrivateLink',
      summary:'Expose supported services through private IP addresses and controlled endpoint network interfaces.',
      explanation:['An interface endpoint creates ENIs with private IPs in selected subnets and attaches security groups. Private DNS can map the normal regional service hostname to those endpoint addresses so applications need no endpoint-specific URL changes. Hourly and data-processing charges apply.','AWS PrivateLink also lets service providers place Network Load Balancers behind endpoint services that consumers reach through interface endpoints. It provides private service-oriented connectivity without full network routing or CIDR coordination, making it useful for SaaS and shared internal services.'],
      takeaways:['Interface endpoints use private ENIs.','Security groups filter endpoint traffic.','PrivateLink exposes services without joining networks.'],
      examTip:'Consumers need private access to one provider service despite overlapping VPC CIDRs: use PrivateLink.'
    },
    {
      ready:true,title:'Give VPC-connected Lambda functions service access',
      summary:'Separate Lambda-to-VPC attachment from outbound paths to public and AWS service endpoints.',
      explanation:['A Lambda function attached to customer subnets uses managed Hyperplane ENIs to reach VPC resources. This attachment does not give the function a public IP, even in a public subnet; internet-bound IPv4 traffic needs a route through NAT from private subnets.','Prefer gateway or interface endpoints for supported AWS services to avoid NAT cost and exposure. Size subnets for concurrent network interfaces, attach focused security groups, and remember that a Lambda function outside the VPC can already call public AWS service APIs without customer VPC networking.'],
      takeaways:['VPC attachment enables private resource access.','A public subnet does not give Lambda public internet access.','Endpoints can replace NAT for supported services.'],
      examTip:'A VPC Lambda must call DynamoDB privately: associate suitable subnets and use a DynamoDB gateway endpoint.'
    },
    {
      ready:true,title:'Capture network metadata with VPC Flow Logs',
      summary:'Record accepted and rejected IP flow metadata at VPC, subnet, or network-interface scope.',
      explanation:['VPC Flow Logs capture fields such as source and destination addresses, ports, protocol, packets, bytes, timestamps, and ACCEPT or REJECT status. They can publish to CloudWatch Logs, S3, or Amazon Data Firehose using supported formats and aggregation settings.','Flow logs are metadata, not full packet payloads, and omit some AWS-managed traffic. Creating a flow log does not interrupt traffic. Choose scope, fields, aggregation, destination, retention, and partitioning based on troubleshooting, security, and cost requirements.'],
      takeaways:['Flow logs record connection metadata.','They can capture accepted and rejected flows.','They do not capture packet payloads.'],
      examTip:'Identify IPs, ports, and accept or reject outcomes without packet contents: enable VPC Flow Logs.'
    },
    {
      ready:true,title:'Analyze flow logs and delivery permissions',
      summary:'Send network records to the right analytics destination and interpret them with surrounding context.',
      explanation:['CloudWatch Logs supports near-real-time queries, metric filters, alarms, and Contributor Insights for top talkers. S3 supports long retention, partitioned Athena analysis, and lake integration, while Data Firehose supports managed streaming delivery. Each destination needs the correct service role or resource policy.','An ACCEPT record proves a network control permitted the observed flow, not that the application succeeded. A REJECT can point toward a security group or NACL, but correlate ENI ownership, direction, routes, ephemeral ports, and host behavior. Use custom fields and enrichment to make centralized multi-account records actionable.'],
      takeaways:['Destination choice follows latency and retention needs.','Delivery needs explicit permission.','Flow outcomes require network context.'],
      examTip:'Find the top source IPs producing rejected traffic in near real time: deliver flow logs to CloudWatch Logs and use Contributor Insights.'
    },
    {
      ready:true,title:'Connect on premises with Site-to-Site VPN',
      summary:'Build redundant encrypted IPsec tunnels over the internet between customer and AWS gateways.',
      explanation:['A Site-to-Site VPN connection has two tunnels between a customer gateway device and an AWS-side virtual private gateway or Transit Gateway attachment. Static routes or BGP advertise reachable prefixes, and route tables must direct hybrid traffic toward the gateway.','The customer gateway resource represents the on-premises device and routing information; the actual appliance must support the VPN configuration. Use both tunnels, monitor their state, avoid overlapping CIDRs, and design redundant customer devices and internet paths because AWS tunnel redundancy alone does not remove on-premises failure points.'],
      takeaways:['Site-to-Site VPN uses IPsec.','AWS supplies two tunnels.','BGP supports dynamic route exchange.'],
      examTip:'A rapidly provisioned encrypted connection from a data center to a VPC points to Site-to-Site VPN.'
    },
    {
      ready:true,title:'Connect multiple sites with VPN CloudHub',
      summary:'Use a virtual private gateway as a simple BGP hub for several on-premises VPN locations.',
      explanation:['VPN CloudHub lets multiple customer gateway devices establish Site-to-Site VPN connections to the same virtual private gateway and exchange routes through it. It creates a low-cost hub-and-spoke topology for branch communication over encrypted internet tunnels.','It fits a modest set of sites with non-overlapping prefixes and BGP-capable devices. Transit Gateway provides broader scale, segmentation, VPC integration, ECMP, and centralized routing, while accelerated Site-to-Site VPN can use Global Accelerator to improve internet path consistency where supported.'],
      takeaways:['CloudHub uses multiple VPNs on one VGW.','BGP exchanges branch routes.','Transit Gateway is the scalable hub alternative.'],
      examTip:'Several small branch offices need encrypted hub-and-spoke communication through one VPC gateway: consider VPN CloudHub.'
    },
    {
      ready:true,title:'Establish dedicated links with Direct Connect',
      summary:'Use a private physical connection for predictable hybrid bandwidth and routing.',
      explanation:['AWS Direct Connect links a customer network to an AWS Direct Connect location through a dedicated or partner-hosted connection. Provisioning takes longer than a VPN and requires a carrier or colocation path, but it can provide more consistent bandwidth and latency than the public internet.','Direct Connect is private but not encrypted by default. It is not inherently a complete highly available design: physical ports, devices, locations, and regional attachments must be duplicated according to recovery objectives, often with VPN as an independent backup.'],
      takeaways:['Direct Connect is a dedicated private path.','Provisioning requires physical connectivity.','Privacy does not imply encryption.'],
      examTip:'A hybrid workload needs sustained predictable private bandwidth and can tolerate setup lead time: use Direct Connect.'
    },
    {
      ready:true,title:'Choose Direct Connect virtual interfaces and gateways',
      summary:'Map one physical connection to public AWS services, VPCs, or Transit Gateway attachments.',
      explanation:['A private virtual interface reaches VPC resources through a virtual private gateway or Direct Connect gateway. A transit virtual interface reaches Transit Gateway through a Direct Connect gateway, while a public virtual interface advertises supported public AWS service prefixes without becoming general internet transit.','A Direct Connect gateway provides global association to supported virtual private gateways or Transit Gateways across Regions and accounts under defined rules. It does not itself provide transitive VPC routing; the attached gateway architecture and route propagation determine reachability.'],
      takeaways:['Private VIFs reach VPC private addresses.','Transit VIFs connect to Transit Gateway.','Public VIFs reach public AWS prefixes.'],
      examTip:'One Direct Connect must reach multiple regional VPCs: use a Direct Connect gateway with the appropriate VIF and gateway associations.'
    },
    {
      ready:true,title:'Encrypt traffic over Direct Connect',
      summary:'Add IPsec or supported link-layer encryption when a private circuit is not sufficient.',
      explanation:['Direct Connect traffic does not receive encryption merely because it avoids the public internet. A Site-to-Site VPN over a Direct Connect public VIF combines dedicated transport with IPsec encryption and can reduce variability compared with an internet-based tunnel.','MAC Security can provide point-to-point Ethernet encryption on supported dedicated connections, port speeds, and locations. End-to-end TLS remains valuable regardless of link encryption. Choose based on compliance scope, device support, throughput, operational complexity, and which segments require cryptographic protection.'],
      takeaways:['Direct Connect is unencrypted by default.','VPN over DX adds IPsec.','MACsec is available only for supported dedicated links.'],
      examTip:'The requirement says dedicated private connectivity plus encryption: combine Direct Connect with VPN or supported MACsec.'
    },
    {
      ready:true,title:'Design resilient hybrid connectivity',
      summary:'Remove single points across connections, devices, facilities, and network providers.',
      explanation:['High-resiliency Direct Connect designs use multiple connections at more than one location; maximum-resiliency designs also separate customer and AWS devices. BGP preferences control primary and backup paths, and Bidirectional Forwarding Detection can accelerate supported failure detection.','A Site-to-Site VPN can back up Direct Connect at lower cost, but it must be configured and tested before failure. Avoid asymmetric routing through stateful appliances, monitor tunnel and BGP state, and rehearse failover because a diagram with two lines is not evidence that routes converge correctly.'],
      takeaways:['Redundant ports in one location do not cover a site failure.','VPN can back up Direct Connect.','Routing policy determines actual failover.'],
      examTip:'For critical hybrid service, use redundant Direct Connect locations and an independently tested backup path.'
    },
    {
      ready:true,title:'Create a routing hub with Transit Gateway',
      summary:'Connect many VPCs and hybrid networks through a scalable regional transitive router.',
      explanation:['AWS Transit Gateway uses attachments for VPCs, VPNs, Direct Connect gateways, peering, and supported appliances. Its route tables associate an attachment with one forwarding policy and accept propagated or static routes from selected attachments.','Multiple route tables create segmentation for production, development, inspection, and shared services without a full peering mesh. Transit Gateway is regional but supports inter-Region peering; account owners can share it through AWS RAM while retaining explicit attachment acceptance and routing control.'],
      takeaways:['Transit Gateway provides transitive hub routing.','Attachments connect networks.','Multiple route tables enable segmentation.'],
      examTip:'Hundreds of VPCs need centralized hybrid and transitive connectivity: choose Transit Gateway.'
    },
    {
      ready:true,title:'Scale Transit Gateway with ECMP and sharing',
      summary:'Aggregate VPN paths and centralize cross-account connectivity without losing route governance.',
      explanation:['Transit Gateway supports equal-cost multipath routing across eligible BGP VPN tunnels, allowing aggregate throughput and path redundancy beyond a single tunnel. The customer devices must advertise equal prefixes with compatible attributes, and flows are distributed by hashing rather than split packet by packet.','AWS Resource Access Manager shares a Transit Gateway with organization accounts so application teams create VPC attachments to a central network. A networking account controls route tables and propagation, and a Direct Connect gateway can extend the shared hub to on-premises networks.'],
      takeaways:['ECMP uses multiple equal BGP paths.','RAM enables cross-account TGW use.','Central route tables preserve segmentation.'],
      examTip:'Increase aggregate VPN throughput into a hub using several tunnels that advertise the same routes: use Transit Gateway ECMP.'
    },
    {
      ready:true,title:'Inspect packets with VPC Traffic Mirroring',
      summary:'Copy selected ENI traffic to security and monitoring appliances for deep analysis.',
      explanation:['VPC Traffic Mirroring duplicates inbound or outbound packets from supported network interfaces, applies a mirror filter, and sends them through a mirror session to a target such as a Network Load Balancer, Gateway Load Balancer endpoint, or monitoring ENI.','Unlike flow logs, mirrored traffic includes packet content and supports intrusion detection, protocol analysis, and troubleshooting. It adds processing, bandwidth, privacy, and appliance capacity considerations, so filter only required traffic and secure the monitoring destination.'],
      takeaways:['Traffic Mirroring copies packet data.','Filters control captured flows.','Targets run inspection or monitoring tools.'],
      examTip:'A security appliance needs full packet payloads rather than connection metadata: use VPC Traffic Mirroring.'
    },
    {
      ready:true,title:'Adopt dual-stack IPv6 networking',
      summary:'Add globally unique IPv6 ranges while continuing to support IPv4 where required.',
      explanation:['A VPC can use IPv4-only or dual-stack addressing, and dual-stack subnets receive both IPv4 and IPv6 CIDRs. IPv6 addresses are globally unique and do not require NAT for address conservation, but public reachability still depends on routes, security groups, NACLs, and gateway choice.','Plan DNS records, application listeners, load balancers, endpoints, logging, and downstream dependencies for both families. IPv6 adoption does not automatically solve IPv4 subnet exhaustion unless workloads and services can operate IPv6-only or reduce their IPv4 interface demand.'],
      takeaways:['Dual stack supports IPv4 and IPv6 together.','IPv6 does not require address-conservation NAT.','Security and routing remain explicit.'],
      examTip:'A resource with a public IPv6 address is not reachable unless its route and security controls permit inbound traffic.'
    },
    {
      ready:true,title:'Control IPv6 egress with an egress-only internet gateway',
      summary:'Allow outbound-initiated IPv6 internet connections without accepting unsolicited inbound sessions.',
      explanation:['An egress-only internet gateway is a VPC route target for IPv6. Private dual-stack subnets can route ::/0 to it, allowing workloads to initiate internet connections while blocking new inbound connections from the internet at the gateway.','It performs no address translation and does not handle IPv4. IPv4 private egress uses NAT, while IPv6-only workloads that must reach IPv4 services can use DNS64 with NAT64 on a NAT gateway. Security groups and NACLs still govern permitted flows.'],
      takeaways:['Egress-only IGW is IPv6 specific.','It allows outbound-initiated connections.','NAT64 bridges IPv6 workloads to IPv4 destinations.'],
      examTip:'Private IPv6 instances need outbound internet access without unsolicited inbound reachability: use an egress-only internet gateway.'
    },
    {
      ready:true,title:'Understand AWS network data-transfer cost',
      summary:'Treat path selection, Availability Zone boundaries, Regions, and internet egress as architecture inputs.',
      explanation:['Data transfer into AWS is often free, while internet egress, inter-Region transfer, cross-AZ paths, NAT processing, Transit Gateway processing, and endpoint processing can add charges. Exact rates change by service and Region, so architecture should identify billable hops rather than memorize one price.','Keep chatty components in the same AZ when resilience allows, use caching and compression, select regional replicas near consumers, and avoid accidental hairpin routes through centralized appliances. Cost optimization must preserve failure isolation and security rather than collapsing everything into one zone.'],
      takeaways:['Architecture determines billable network hops.','Cross-AZ and egress paths can add cost.','Current pricing must be verified by Region.'],
      examTip:'Trace the complete packet path—including NAT, hubs, and AZ crossings—when comparing network cost.'
    },
    {
      ready:true,title:'Reduce S3 and NAT transfer expense',
      summary:'Use gateway endpoints, direct regional paths, and caching instead of unnecessary processed egress.',
      explanation:['When private workloads reach regional S3 through a NAT gateway, the design can incur NAT data processing and potentially cross-AZ charges. An S3 gateway endpoint adds a direct route-table path without hourly endpoint or NAT processing charges and keeps traffic on the AWS network.','CloudFront caches frequently requested S3 content near external users and reduces repeated origin transfer. S3 Transfer Acceleration uses the edge network for faster long-distance uploads when its added charge is justified. Evaluate source, destination, acceleration, request, and retrieval costs together.'],
      takeaways:['S3 gateway endpoints bypass NAT.','CloudFront reduces repeated origin transfer.','Acceleration trades added cost for transfer performance.'],
      examTip:'Private EC2 instances transfer large volumes to S3 through NAT: add an S3 gateway endpoint first.'
    },
    {
      ready:true,title:'Inspect VPC traffic with AWS Network Firewall',
      summary:'Deploy managed stateful and stateless filtering for centralized ingress, egress, and east-west inspection.',
      explanation:['AWS Network Firewall creates scalable firewall endpoints in selected subnets and applies stateless rule groups, stateful Suricata-compatible rules, domain lists, and managed rule groups. Route tables steer traffic through those endpoints before it reaches an internet, NAT, Transit Gateway, or workload destination.','Deploy an endpoint in every participating AZ and preserve symmetric routing so both directions of a stateful flow cross the same firewall path. Logging can record alerts and flows to supported destinations. Network Firewall adds deep network inspection but does not replace security groups, NACLs, or WAF.'],
      takeaways:['Network Firewall inspects Layers 3 through 7.','Route tables insert firewall endpoints.','Stateful inspection needs symmetric routing.'],
      examTip:'A VPC needs managed domain filtering and intrusion-prevention rules for outbound traffic: use AWS Network Firewall.'
    },
    {
      ready:true,title:'Choose the correct network protection layer',
      summary:'Match security groups, NACLs, WAF, Network Firewall, Shield, and inspection appliances to traffic scope.',
      explanation:['Security groups provide stateful ENI-level allow rules; NACLs provide stateless subnet allow and deny rules. AWS WAF filters HTTP semantics on supported application front doors, Network Firewall inspects routed VPC traffic, and Shield mitigates denial-of-service attacks.','Gateway Load Balancer inserts third-party virtual appliances, while Traffic Mirroring sends copies for out-of-band inspection. Layer controls are complementary: define the threat, protocol, enforcement point, required state, and operational owner before selecting a product.'],
      takeaways:['Security groups protect interfaces.','NACLs protect subnet boundaries.','WAF and Network Firewall inspect different traffic scopes.'],
      examTip:'SQL injection is a WAF problem; a denied subnet CIDR is a NACL problem; routed domain inspection is a Network Firewall problem.'
    },
    {
      ready:true,title:'Troubleshoot VPC connectivity systematically',
      summary:'Follow the packet in both directions through DNS, addressing, routes, gateways, controls, and applications.',
      explanation:['Start with name resolution and the resolved address family, then verify source and destination addresses, ENI attachment, subnet routes, gateway or endpoint state, and the longest-prefix path. Check security groups, both NACL directions, ephemeral ports, host firewalls, listeners, and return routing.','Use Reachability Analyzer for configuration-path analysis, Flow Logs for observed metadata, Network Access Analyzer for unintended exposure, Network Synthetic Monitor for hybrid performance, and packet mirroring when payload inspection is essential. Separate reachability failure from latency, DNS, TLS, and application errors.'],
      takeaways:['Connectivity requires a valid forward and return path.','Stateful and stateless controls behave differently.','AWS analysis tools answer different questions.'],
      examTip:'Do not fix a network problem by opening every rule; identify the first failed layer and change only that control.'
    }
  ];

  const sectionTwentyEightLectures=[
    {
      ready:true,title:'Define recovery with RPO and RTO',
      summary:'Translate business impact into acceptable data loss and service-restoration time.',
      explanation:['Recovery point objective is the maximum acceptable age of recovered data, measured backward from disruption to the latest usable recovery point. Recovery time objective is the target duration for restoring service after the event. Neither is the same as actual achieved recovery performance.','Lower targets require more frequent replication, pre-provisioned capacity, automation, and testing, which increase cost and complexity. Define objectives per workload and dependency, then prove them with exercises that include data integrity, DNS, identity, network, secrets, and operational decision time.'],
      takeaways:['RPO measures tolerable data loss.','RTO measures tolerable downtime.','Business impact should drive both targets.'],
      examTip:'A requirement of no more than five minutes of lost transactions is an RPO requirement.'
    },
    {
      ready:true,title:'Choose a disaster-recovery strategy',
      summary:'Balance recovery speed and cost across backup, pilot light, warm standby, and multi-site designs.',
      explanation:['Backup and restore keeps no live application stack, pilot light keeps only critical core services active, warm standby runs a complete reduced-capacity environment, and multi-site operates production capacity in more than one location. Moving along this spectrum generally lowers RTO and RPO while raising steady-state cost.','The strategy is not a label alone: specify which data is copied, how infrastructure is recreated, what triggers failover, how capacity scales, and how clients are redirected. Dependencies with weaker recovery capability set the effective objective for the whole application.'],
      takeaways:['Backup and restore costs least but recovers slowest.','Warm standby runs a scaled-down full stack.','Multi-site provides the fastest recovery at highest cost.'],
      examTip:'Select the least expensive strategy that can demonstrably meet both stated RPO and RTO.'
    },
    {
      ready:true,title:'Recover from backups',
      summary:'Rebuild infrastructure and restore protected data when longer recovery objectives permit.',
      explanation:['Backup-and-restore architectures copy databases, volumes, files, and configuration into durable storage, often across accounts or Regions. During a disaster, automation creates the network and compute stack, restores data, validates it, and changes traffic routing.','Backups need encryption keys, immutable retention, cataloging, and restore testing. A successful backup job does not prove recovery: large restores, missing dependencies, quota limits, and inaccessible KMS keys can dominate RTO, so measure full application restoration rather than object durability alone.'],
      takeaways:['Backups minimize idle recovery infrastructure.','Cross-account copies improve isolation.','Restore testing validates real recoverability.'],
      examTip:'Long RTO and RPO with a strong cost constraint favor backup and restore.'
    },
    {
      ready:true,title:'Maintain a pilot-light environment',
      summary:'Keep critical data and core services alive while recreating the remaining application during recovery.',
      explanation:['A pilot light continuously replicates essential data and runs the minimal core required to preserve application state. Most web, application, and supporting capacity remains stopped or represented as infrastructure templates until disaster declaration.','Recovery launches the missing tiers, scales the core, restores configuration, validates dependencies, and redirects traffic. Compared with backup and restore it reduces recovery time, but it remains slower than warm standby because important components still need provisioning and integration.'],
      takeaways:['Critical core services remain active.','Other tiers are created during failover.','Data replication reduces potential loss.'],
      examTip:'Only the database and essential core run continuously in the recovery Region: this is pilot light.'
    },
    {
      ready:true,title:'Run a warm standby',
      summary:'Operate a complete but reduced-capacity recovery stack that can scale rapidly after failure.',
      explanation:['Warm standby keeps every application layer deployed and functional in the recovery location at minimum capacity. Data replicates continuously, health is monitored, and the environment can serve validation traffic before a disaster.','Failover scales resources to production demand and shifts users through Route 53, Global Accelerator, or another traffic-control layer. This costs more than pilot light but avoids creating missing tiers during the incident, typically improving RTO and confidence.'],
      takeaways:['The full stack is always running.','Capacity is below production scale.','Failover mainly scales and redirects traffic.'],
      examTip:'A fully functional secondary environment runs at reduced capacity: choose warm standby.'
    },
    {
      ready:true,title:'Operate active-active multi-site recovery',
      summary:'Serve production traffic from multiple locations for the lowest recovery time and highest complexity.',
      explanation:['A multi-site design runs production-scale environments concurrently across Regions or between AWS and on premises. Global routing sends users to healthy endpoints, while application and data layers manage replication, conflicts, consistency, and regional isolation.','This approach can achieve very low RTO and RPO, but only if dependencies support regional failure and automation avoids split-brain behavior. Test evacuation under realistic load and consider correlated deployment, identity, DNS, and control-plane failures rather than assuming two active stacks are independent.'],
      takeaways:['Multiple sites serve live traffic.','Data conflict strategy is essential.','Operational complexity and cost are highest.'],
      examTip:'Near-zero downtime with both Regions serving normal production traffic describes an active-active multi-site strategy.'
    },
    {
      ready:true,title:'Recover servers with AWS Elastic Disaster Recovery',
      summary:'Continuously replicate block-level server data into a low-cost staging area and launch recovery instances on demand.',
      explanation:['AWS Elastic Disaster Recovery installs an agent on supported source servers and continuously replicates their disks to staging resources in AWS. During a drill or disaster, it converts the replicated state and launches recovery EC2 instances according to configured launch settings.','The staging area uses inexpensive resources until recovery, supporting low RPO without a fully running duplicate fleet. Configure network, security, instance sizing, post-launch actions, licensing, and failback, then run non-disruptive drills to verify bootability and application dependencies.'],
      takeaways:['DRS uses continuous block replication.','Recovery compute launches on demand.','Drills validate launch configuration and dependencies.'],
      examTip:'Physical or virtual servers need low-RPO recovery into EC2 without a full warm stack: use Elastic Disaster Recovery.'
    },
    {
      ready:true,title:'Migrate databases with AWS DMS and schema conversion',
      summary:'Move data with full load and change replication while converting incompatible database objects separately.',
      explanation:['AWS Database Migration Service connects a source and target and performs a full load, ongoing change data capture, or both. The source can remain available while DMS applies changes to reduce cutover downtime; Multi-AZ replication instances improve migration-task availability but do not replace source and target resilience.','Homogeneous migrations may need little schema change. For heterogeneous engines, use DMS Schema Conversion, the current recommended workflow, to assess and convert schemas and code, then manually resolve unsupported objects before DMS moves data. The older desktop AWS Schema Conversion Tool remains recognizable in course material.'],
      takeaways:['DMS moves database data.','CDC keeps targets synchronized before cutover.','Schema conversion handles engine differences.'],
      examTip:'Oracle must migrate to Aurora PostgreSQL with minimal downtime: convert the schema, then use DMS full load plus CDC.'
    },
    {
      ready:true,title:'Rehost servers with Application Migration Service',
      summary:'Continuously replicate source machines and automate lift-and-shift launches into EC2.',
      explanation:['AWS Application Migration Service installs a replication agent on supported physical, virtual, and cloud servers and copies block-level data into an AWS staging area. Test and cutover launches create EC2 instances using the latest synchronized state and configured launch templates.','MGN is the current rehosting evolution of CloudEndure Migration and replaced the older Server Migration Service pattern. For VMware-specific environments, older course references to VMware Cloud on AWS describe a commercial managed VMware path whose current availability and terms must be confirmed; native rehosting commonly uses MGN.'],
      takeaways:['MGN is the AWS lift-and-shift server service.','Continuous replication reduces cutover data loss.','Test launches should precede cutover.'],
      examTip:'Rehost many existing servers into EC2 with minimal application modification: choose Application Migration Service.'
    },
    {
      ready:true,title:'Centralize protection with AWS Backup',
      summary:'Apply policy-driven backup schedules, retention, copies, immutability, and restore testing across services.',
      explanation:['AWS Backup creates plans that select supported resources by tags or assignments and define frequency, lifecycle, retention, and cross-account or cross-Region copies. Organizations backup policies can standardize protection across member accounts, while centralized monitoring reports job and compliance status.','Backup Vault Lock enforces write-once-read-many retention; compliance mode becomes intentionally irreversible after its grace period, preventing even privileged deletion before expiration. Logically air-gapped vaults and restore testing strengthen ransomware resilience, but service-specific restore behavior and KMS permissions still need validation.'],
      takeaways:['Backup plans automate supported service protection.','Copies provide account and Region isolation.','Vault Lock enforces immutable retention.'],
      examTip:'Centrally enforce retention that administrators cannot shorten after lock: use AWS Backup Vault Lock in compliance mode.'
    },
    {
      ready:true,title:'Discover workloads and move bulk data',
      summary:'Assess dependencies with current discovery tooling and choose online or offline transfer by deadline and bandwidth.',
      explanation:['The course uses AWS Application Discovery Service for agent-based and agentless inventory, utilization, and dependency mapping. It closed to new customers on November 7, 2025; AWS recommends AWS Transform for new discovery and assessment projects, including migration wave planning and enhanced VMware analysis.','For data movement, estimate transfer time before selecting a path. DataSync or Direct Connect fits repeatable online transfers, Storage Gateway supports hybrid access patterns, and Snow Family offline devices fit large migrations constrained by WAN bandwidth. Include export, shipping, import, verification, and incremental synchronization in the deadline.'],
      takeaways:['Discovery informs migration grouping and sizing.','AWS Transform is the current new-project path.','Transfer choice depends on volume, bandwidth, and deadline.'],
      examTip:'If network transfer cannot meet the migration window, use an offline Snow Family workflow and synchronize final changes separately.'
    }
  ];

  const sectionTwentyNineLectures=[
    {
      ready:true,title:'Combine Lambda, SNS, and SQS safely',
      summary:'Separate synchronous notification, durable buffering, retries, and failure isolation in event-driven systems.',
      explanation:['SNS pushes one published message to multiple subscribers, while SQS stores messages until consumers poll and delete them. Subscribing separate queues to a topic creates durable fan-out: each consumer progresses, retries, and scales independently without forcing the publisher to call every destination.','Lambda polls SQS through an event source mapping and can report partial batch failures so successful messages are not retried. Configure visibility timeout longer than processing, an appropriate redrive count, and a dead-letter queue for diagnosis. FIFO components preserve supported ordering and deduplication but require consistent message-group design.'],
      takeaways:['SNS fans out messages.','SQS buffers work durably.','DLQs isolate repeatedly failing messages.'],
      examTip:'One event must reach several independently retryable consumers: publish to SNS with one SQS queue per consumer.'
    },
    {
      ready:true,title:'Route S3 and API events without application glue',
      summary:'Use native notifications, EventBridge, CloudTrail, and direct service integrations to reduce custom code.',
      explanation:['S3 Event Notifications can match object-created, removed, restored, and replication events by key prefix or suffix and send them to supported Lambda, SQS, or SNS destinations. Notifications are at least once, so consumers should be idempotent; overlapping rules and same-bucket writes can create duplicate work or loops.','Enabling S3 events through EventBridge provides broader rule filtering, multiple targets, archives, and cross-service orchestration. CloudTrail-originated events let EventBridge react to supported API calls, while API Gateway AWS service integrations can validate and transform client requests directly into services such as SQS or Kinesis without a Lambda proxy.'],
      takeaways:['S3 notifications are at least once.','EventBridge adds richer routing.','API Gateway can call AWS services directly.'],
      examTip:'If API Gateway only needs to place a request onto SQS, use a direct AWS service integration instead of Lambda.'
    },
    {
      ready:true,title:'Place caching and IP controls at the right layer',
      summary:'Reduce latency at multiple tiers and block unwanted clients at the earliest meaningful enforcement point.',
      explanation:['CloudFront caches near viewers, API Gateway caches method responses, ElastiCache or DAX accelerates application data access, and local caches avoid repeated network calls. Each layer needs a TTL and invalidation strategy that matches freshness, consistency, cardinality, and cost.','For HTTP applications, WAF on CloudFront or an ALB can block IP sets and application patterns. NACLs can deny CIDRs at a subnet boundary, while security groups allow traffic but cannot express denies. Network Load Balancers can now use security groups when assigned at creation, so do not rely on older assumptions that every NLB must expose targets directly.'],
      takeaways:['Cache closest to repeated demand.','WAF provides Layer 7 IP and request filtering.','NACLs support subnet-level deny rules.'],
      examTip:'Block an abusive public IP before it reaches a global web origin: use AWS WAF on CloudFront.'
    },
    {
      ready:true,title:'Assemble high-performance computing on AWS',
      summary:'Match tightly coupled compute, low-latency networking, parallel storage, and schedulers to HPC workloads.',
      explanation:['HPC fleets use compute- or accelerator-optimized EC2 instances, Spot capacity for interruption-tolerant jobs, and cluster placement groups for low-latency east-west communication. Elastic Fabric Adapter provides OS-bypass networking for supported tightly coupled MPI and machine-learning workloads.','FSx for Lustre supplies high-throughput parallel file storage and can link to S3 data sets, while EBS and instance store address block and temporary local I/O patterns. AWS Batch schedules container jobs and supports multi-node parallel work; ParallelCluster helps provision traditional schedulers and clusters.'],
      takeaways:['EFA targets tightly coupled workloads.','FSx for Lustre provides parallel file access.','Batch or ParallelCluster orchestrates compute fleets.'],
      examTip:'A tightly coupled MPI job needs low-latency node communication: use EFA-capable instances in a cluster placement group.'
    },
    {
      ready:true,title:'Replace and restore a stateful EC2 instance',
      summary:'Automate failure detection while separating persistent identity and data from disposable compute.',
      explanation:['A CloudWatch alarm can recover an impaired EC2 instance for supported system-status failures while retaining key instance properties. For broader failure replacement, an Auto Scaling group with desired capacity one launches a new instance, but bootstrap configuration must recreate application state and attach any required identity or storage.','Elastic IP addresses can be reassociated and EBS data volumes can be detached and attached through automation, though attachment constraints, fencing, crash consistency, and AZ placement must be handled. Whenever possible, move state into managed multi-AZ data services and place stateless instances behind a load balancer instead of engineering a fragile singleton.'],
      takeaways:['EC2 recovery and ASG replacement solve different failures.','Persistent data should be externalized.','Automation must prevent two writers to one stateful volume.'],
      examTip:'For one replaceable instance, an ASG with minimum and desired capacity one restores compute automatically; protect state separately.'
    }
  ];

  const sectionThirtyLectures=[
    {
      ready:true,title:'Model infrastructure with AWS CloudFormation',
      summary:'Declare desired AWS resources in versioned templates and let CloudFormation order their lifecycle.',
      explanation:['A CloudFormation template describes resources, properties, parameters, mappings, conditions, outputs, and dependencies. A stack is one deployed instance of that template; CloudFormation resolves references, creates resources in dependency order, and records their state.','Infrastructure as code makes environments reviewable, repeatable, and disposable, but templates still need least privilege, secret-safe parameters, testing, and rollback planning. Use outputs and cross-stack references carefully because they can couple stack lifecycles.'],
      takeaways:['Templates declare desired resources.','Stacks are deployed template instances.','References establish dependencies.'],
      examTip:'Repeatably deploy the same governed infrastructure across environments: use CloudFormation.'
    },
    {
      ready:true,title:'Control CloudFormation changes and drift',
      summary:'Preview updates, detect out-of-band edits, and protect important state during stack operations.',
      explanation:['A change set shows proposed stack actions before execution, helping reviewers spot replacements and destructive updates. Drift detection compares supported live resource properties with the template, while rollback returns a failed operation toward the last stable stack state.','DeletionPolicy and UpdateReplacePolicy can retain, snapshot, or delete stateful resources when stacks or replacements occur. Stack policies protect critical resources from updates, and termination protection prevents accidental stack deletion; none replaces backups or a recovery plan.'],
      takeaways:['Change sets preview updates.','Drift reveals manual divergence.','Deletion policies protect resource state.'],
      examTip:'Before applying a template update that might replace a database, create and review a CloudFormation change set.'
    },
    {
      ready:true,title:'Delegate and visualize CloudFormation deployment',
      summary:'Use service roles, visual composition, and multi-account deployment controls appropriately.',
      explanation:['A CloudFormation service role supplies the permissions used to create, update, and delete stack resources. Users allowed to operate a stack can indirectly use that role, so restrict iam:PassRole, template sources, macros, and stack actions rather than treating the role as harmless plumbing.','AWS Infrastructure Composer provides visual authoring for supported application resources and can generate or edit infrastructure templates. StackSets deploy stacks across accounts and Regions with self-managed or Organizations-integrated permissions, adding rollout concurrency and failure-tolerance controls.'],
      takeaways:['Service roles determine deployment power.','Infrastructure Composer assists visual template design.','StackSets deploy across accounts and Regions.'],
      examTip:'Centrally deploy one baseline template to every organization account: use CloudFormation StackSets.'
    },
    {
      ready:true,title:'Send transactional email with Amazon SES',
      summary:'Deliver application email at scale while managing identities, reputation, feedback, and compliance.',
      explanation:['Amazon Simple Email Service sends transactional, marketing, or bulk email through APIs or SMTP and can receive mail in supported Regions. Verify sending domains, configure DKIM and SPF alignment, and move an account from sandbox restrictions only after the workload is prepared.','Configuration sets publish delivery, bounce, complaint, and engagement events to monitoring destinations. Suppression lists and reputation dashboards help protect deliverability, while applications must process complaints and bounces, honor consent, and keep credentials narrowly scoped.'],
      takeaways:['SES provides managed email sending.','Domains and identities require verification.','Bounce and complaint handling protects reputation.'],
      examTip:'An application needs high-volume transactional email rather than general pub/sub notifications: choose SES.'
    },
    {
      ready:true,title:'Transition from Amazon Pinpoint messaging',
      summary:'Recognize the course engagement service while designing new messaging on its supported successors.',
      explanation:['Amazon Pinpoint historically provided audience endpoints, segments, templates, campaigns, journeys, analytics, and multichannel messaging. It stopped accepting new customers on May 20, 2025 and reaches end of support on October 30, 2026, after which its console and engagement resources are unavailable.','SMS, MMS, push, WhatsApp, voice, OTP, and phone-validation APIs continue under AWS End User Messaging. AWS directs engagement use cases such as segments, campaigns, journeys, and analytics toward Amazon Connect Customer capabilities. Keep Pinpoint recognizable for older exam material but do not choose it for a new implementation.'],
      takeaways:['Pinpoint engagement is nearing end of support.','Messaging APIs continue as AWS End User Messaging.','New engagement workflows should use the recommended successor.'],
      examTip:'For current architecture, separate message delivery through AWS End User Messaging from proactive customer engagement through Amazon Connect Customer.'
    },
    {
      ready:true,title:'Open managed sessions with Session Manager',
      summary:'Access managed nodes through IAM without inbound SSH, bastions, or distributed private keys.',
      explanation:['Systems Manager Session Manager establishes interactive shell or port-forwarding sessions through the SSM Agent and outbound service connectivity. Nodes need a managed identity and access to Systems Manager endpoints through internet egress or interface VPC endpoints.','IAM controls who can start sessions and against which nodes, while logs can be sent to S3 or CloudWatch Logs subject to session encryption limitations. Session Manager reduces exposed administration paths but still requires operating-system authorization, agent health, patching, and emergency access planning.'],
      takeaways:['Session Manager requires no inbound administration port.','IAM authorizes sessions.','Managed nodes need outbound SSM connectivity.'],
      examTip:'Administrators need auditable access to private EC2 instances without SSH keys: use Session Manager.'
    },
    {
      ready:true,title:'Execute fleet tasks with Systems Manager Run Command',
      summary:'Run documents across tagged managed nodes without logging into each server.',
      explanation:['Run Command executes an SSM document or command on selected managed nodes, with targets based on IDs, tags, or resource groups and controlled concurrency and error thresholds. Output and status can flow to CloudWatch Logs, S3, SNS, or EventBridge-supported workflows.','The service removes direct shell connectivity but commands still run with powerful local privileges through the agent. Restrict permitted documents and parameters, use maintenance controls for disruptive actions, and prefer idempotent scripts that tolerate partial fleet completion and retry.'],
      takeaways:['Run Command performs remote fleet operations.','Targets can be selected dynamically.','Concurrency and error limits control blast radius.'],
      examTip:'Run one approved command on hundreds of private instances without SSH: use Systems Manager Run Command.'
    },
    {
      ready:true,title:'Patch fleets with Patch Manager policies',
      summary:'Define approved updates, schedules, scanning, installation, reboot behavior, and compliance reporting.',
      explanation:['Systems Manager Patch Manager compares managed nodes with operating-system-specific patch baselines and can scan or scan-and-install missing updates. AWS currently recommends Quick Setup patch policies for centralized schedules and baselines across organization accounts and Regions.','Stage deployment rings, set maintenance windows and concurrency, test application compatibility, and choose reboot behavior explicitly. Compliance status reflects the most recent scan method, so avoid overlapping policies with conflicting baselines and monitor failures rather than equating task launch with successful patching.'],
      takeaways:['Patch baselines define approved updates.','Patch policies centralize fleet schedules.','Patching needs staged rollout and compliance review.'],
      examTip:'Standardize recurring OS patches across organization accounts: use a Systems Manager Quick Setup patch policy.'
    },
    {
      ready:true,title:'Schedule and automate Systems Manager operations',
      summary:'Use Maintenance Windows for timing and Automation runbooks for repeatable multi-step workflows.',
      explanation:['A Maintenance Window defines when registered targets may receive tasks such as Run Command, Automation, Lambda, or Step Functions operations. Scheduling, duration, cutoff, priority, concurrency, and error thresholds constrain change execution.','Systems Manager Automation runbooks coordinate AWS API actions, scripts, approvals, branching, and output across resources. They support tasks such as creating AMIs, restarting fleets, or remediating Config findings. Use scoped service roles and idempotent steps because automation can amplify both good and bad changes.'],
      takeaways:['Maintenance Windows control when work runs.','Automation runbooks coordinate multiple steps.','Approvals and error limits reduce risk.'],
      examTip:'Patch only during an approved overnight change period: target the operation through a Systems Manager Maintenance Window.'
    },
    {
      ready:true,title:'Analyze spend with AWS Cost Explorer',
      summary:'Group, filter, forecast, and investigate historical AWS cost and usage through interactive reports.',
      explanation:['AWS Cost Explorer visualizes cost and usage by dimensions such as service, account, Region, tag, purchase option, and charge type. Daily and monthly views reveal trends, while resource-level and hourly data are available for supported scopes and configuration.','Forecasts extrapolate historical patterns and are not budget guarantees. Use consistent cost-allocation tags and cost categories, separate amortized commitment cost from cash charges, and combine Cost Explorer with detailed Cost and Usage Reports when line-item analysis is required.'],
      takeaways:['Cost Explorer analyzes historical spend.','Dimensions and filters isolate cost drivers.','Forecasts are estimates, not controls.'],
      examTip:'Identify which service or linked account caused a monthly cost increase: start with Cost Explorer.'
    },
    {
      ready:true,title:'Detect unusual spend automatically',
      summary:'Use machine-learning baselines and routed alerts to surface unexpected cost changes.',
      explanation:['AWS Cost Anomaly Detection creates monitors for overall services, linked accounts, cost categories, or tags and learns expected spend patterns. Detected anomalies include likely root causes and estimated impact rather than relying only on a static monthly threshold.','Alert subscriptions set frequency and impact thresholds and can notify through email or SNS. Detection is not prevention and can lag usage, so combine it with AWS Budgets, service quotas, preventive governance, and rapid ownership metadata for a complete cost-control process.'],
      takeaways:['Anomaly Detection learns normal spend.','Monitors define analyzed scope.','Subscriptions route impact-based alerts.'],
      examTip:'Alert on an unexpected service cost spike without manually selecting a fixed threshold for every service: use Cost Anomaly Detection.'
    },
    {
      ready:true,title:'Run AWS infrastructure on premises with Outposts',
      summary:'Bring AWS-managed racks or servers to a customer site for low latency, local processing, and residency needs.',
      explanation:['AWS Outposts extends selected AWS infrastructure, services, APIs, and operating models into an approved on-premises location. The customer provides power, cooling, space, physical security, and resilient network connectivity, while AWS delivers and maintains the managed hardware.','Workloads can process data locally and access their parent Region for control-plane and regional service dependencies. Outposts is not a disconnected cloud by default; architects must understand service availability, network interruption behavior, capacity ordering, and which data or operations remain regional.'],
      takeaways:['Outposts places AWS-managed hardware on premises.','It serves latency and residency requirements.','Regional connectivity remains important.'],
      examTip:'A workload must use familiar AWS APIs while compute and data remain at the factory: consider AWS Outposts.'
    },
    {
      ready:true,title:'Run containerized batch jobs with AWS Batch',
      summary:'Schedule finite jobs onto managed compute environments instead of operating a job cluster.',
      explanation:['AWS Batch accepts container job definitions and queues, evaluates dependencies and priorities, and schedules jobs onto managed EC2, Fargate, or supported EKS compute environments. EC2 environments can mix On-Demand and Spot capacity for cost-aware large-scale processing.','Batch jobs may run much longer and use broader container runtimes and compute shapes than Lambda functions. Lambda fits short event-driven functions with a managed runtime limit; Batch fits queued, resource-intensive, retryable jobs with a defined start and finish.'],
      takeaways:['Batch schedules container jobs.','Compute environments supply capacity.','Spot suits interruption-tolerant batch work.'],
      examTip:'A multi-hour Dockerized scientific job needs hundreds of workers: use AWS Batch rather than Lambda.'
    },
    {
      ready:true,title:'Transfer SaaS data with Amazon AppFlow',
      summary:'Move and transform records between supported SaaS applications and AWS services without custom connectors.',
      explanation:['Amazon AppFlow creates managed flows between supported SaaS sources and destinations such as S3, Redshift, and Salesforce-related endpoints. Flows can run on demand, on schedules, or from supported events and can map, filter, validate, aggregate, and mask fields.','Use AppFlow when a supported connector and transformation model fits the integration. Configure private connectivity where available, encrypt data, restrict connector credentials, and design incremental fields and error handling to avoid duplicates or missed changes.'],
      takeaways:['AppFlow integrates supported SaaS and AWS data.','Flows support scheduling and transformations.','Connector support determines applicability.'],
      examTip:'Transfer Salesforce records into S3 on a schedule without building an ETL connector: use Amazon AppFlow.'
    },
    {
      ready:true,title:'Build front ends and schedule resources economically',
      summary:'Use Amplify for full-stack web delivery and managed scheduling patterns for nonproduction cost control.',
      explanation:['AWS Amplify provides tools for hosting and deploying web applications with Git-based workflows, previews, custom domains, and integrations for authentication, data, storage, and serverless backends. It accelerates front-end teams while the underlying AWS resources still need security, observability, and environment separation.','Instance Scheduler on AWS is a deployable solution, not a standalone service, that uses schedules and tags to stop and start supported EC2 and RDS resources. Systems Manager Quick Setup also offers scheduled EC2 start and stop. Use these for idle nonproduction capacity, not workloads whose availability or licensing prevents interruption.'],
      takeaways:['Amplify accelerates web application delivery.','Instance Scheduler is an AWS Solution.','Scheduling reduces idle nonproduction cost.'],
      examTip:'For predictable office-hours development instances, schedule start and stop rather than paying for continuous runtime.'
    }
  ];

  const sectionThirtyOneLectures=[
    {
      ready:true,title:'Apply the six Well-Architected pillars',
      summary:'Evaluate workloads through operational excellence, security, reliability, performance, cost, and sustainability.',
      explanation:['The AWS Well-Architected Framework organizes architectural decisions into six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. A strong design balances them according to business context rather than maximizing one dimension in isolation.','General principles include automating operations, testing recovery, designing for change, using data to choose capacity, and learning from events. Reviews surface risks and tradeoffs; they are not pass-fail audits or a guarantee that AWS operates the workload for the customer.'],
      takeaways:['The framework has six pillars.','Tradeoffs depend on workload context.','Reviews should recur as architecture changes.'],
      examTip:'When an answer improves one pillar but violates a stated requirement in another, choose the balanced design that meets the business objective.'
    },
    {
      ready:true,title:'Review workloads with the Well-Architected Tool',
      summary:'Answer structured questions, identify risks, build improvement plans, and measure change over time.',
      explanation:['AWS Well-Architected Tool records a workload and applies the core Framework lens plus optional AWS official or custom lenses. Answers and notes identify high- and medium-risk issues and generate an improvement plan that teams can prioritize by business impact.','A milestone is an immutable snapshot of review state at a point in time, useful after an initial review or major improvement. Reviews require honest evidence and workload owners across disciplines; copying ideal answers defeats the purpose and hides operational risk.'],
      takeaways:['Lenses supply review questions and best practices.','Improvement plans turn findings into work.','Milestones record progress snapshots.'],
      examTip:'A team wants a free structured review against AWS architectural best practices: use AWS Well-Architected Tool.'
    },
    {
      ready:true,title:'Act on AWS Trusted Advisor recommendations',
      summary:'Use account-specific checks to find cost, performance, security, resilience, quota, and operational issues.',
      explanation:['AWS Trusted Advisor evaluates configured resources and usage against AWS checks and returns recommendations across categories such as cost optimization, performance, security, fault tolerance, service quotas, and operational excellence. Some checks and refresh capabilities depend on the AWS Support plan.','Recommendations are signals, not automatic changes. Validate business context before removing idle resources or changing controls, assign owners, suppress justified exceptions, and route supported organizational findings into governance workflows. Trusted Advisor complements service-specific monitoring and Well-Architected reviews.'],
      takeaways:['Trusted Advisor analyzes the AWS account.','Check availability can depend on Support plan.','Recommendations need contextual review.'],
      examTip:'Find underutilized resources, exposed security settings, and approaching quotas through managed account checks: use Trusted Advisor.'
    },
    {
      ready:true,title:'Use reference architectures without copying blindly',
      summary:'Adapt AWS guidance, whitepapers, and patterns to workload constraints and validate them continuously.',
      explanation:['AWS Architecture Center, Prescriptive Guidance, Solutions Library, service decision guides, and Well-Architected lenses provide proven patterns and implementation considerations. They accelerate design vocabulary but represent starting points, not universally correct production blueprints.','Record assumptions about scale, consistency, compliance, failure domains, team capability, and cost, then test them through load, security, and recovery exercises. Revisit architecture after service changes and incidents; a diagram becomes trustworthy only when its operational procedures and failure behavior are understood.'],
      takeaways:['Reference patterns are adaptable starting points.','Assumptions must be explicit and tested.','Architecture review is continuous work.'],
      examTip:'Prefer AWS best-practice patterns, then use the scenario\'s stated constraints to select among their tradeoffs.'
    }
  ];

  const sectionThirtyTwoLectures=[
    {
      ready:true,title:'Measure readiness against the SAA-C03 blueprint',
      summary:'Use the official domains and task statements to turn broad study into a focused gap analysis.',
      explanation:['The current SAA-C03 guide weights secure architectures at 30%, resilient architectures at 26%, high-performing architectures at 24%, and cost-optimized architectures at 20% of scored content. It also publishes task statements and non-exhaustive in-scope service lists.','Rate each task by whether you can explain the tradeoff, recognize it in a scenario, and eliminate plausible alternatives without notes. Spend remaining time on weak high-weight tasks rather than rereading every lecture equally, and recheck the official guide in case AWS changes exam scope.'],
      takeaways:['The blueprint has four weighted domains.','Task statements are better checkpoints than service-name recall.','Official scope can change.'],
      examTip:'Build the final study plan from domain tasks and evidence of weakness, not from whichever topic feels most familiar.'
    },
    {
      ready:true,title:'Turn service knowledge into architecture decisions',
      summary:'Practice mapping requirements to constraints, failure modes, and managed-service tradeoffs.',
      explanation:['Exam questions rarely ask for a definition alone. Translate each scenario into functional need, scale, latency, consistency, security, resilience, operations, migration, and cost constraints, then identify which phrases distinguish otherwise valid services.','Hands-on work makes these distinctions concrete: launch a small VPC, inspect IAM evaluation, configure an S3 lifecycle, build an SQS consumer, test an alarm, and restore a backup. The objective is not memorizing console clicks but predicting behavior and recognizing dependencies.'],
      takeaways:['Requirements drive service choice.','Tradeoffs distinguish plausible answers.','Hands-on practice exposes hidden dependencies.'],
      examTip:'Underline qualifiers such as least operational overhead, most cost-effective, minimal downtime, and highly available before comparing answers.'
    },
    {
      ready:true,title:'Eliminate scenario distractors methodically',
      summary:'Remove answers that violate explicit requirements before choosing among technically possible designs.',
      explanation:['Read the final question first, then identify mandatory constraints and the requested optimization. Reject options with a wrong service capability, unsupported integration, single point of failure, excessive management, inconsistent data behavior, or cost model that conflicts with the prompt.','Among remaining answers, prefer the simplest AWS-native design that satisfies every stated requirement. Do not invent requirements or optimize one dimension the scenario does not prioritize. For multiple-response questions, evaluate each option independently and confirm the requested number of selections.'],
      takeaways:['Explicit constraints eliminate distractors.','Possible is not the same as best.','Multiple-response options should be judged independently.'],
      examTip:'If two answers work, the one meeting the named objective with fewer operational components is often stronger.'
    },
    {
      ready:true,title:'Study authoritative service boundaries',
      summary:'Use official exam guides, documentation, decision guides, and FAQs to resolve confusing overlaps.',
      explanation:['The official SAA-C03 guide is the source for domains, task statements, response types, and current in-scope services. AWS documentation explains actual behavior, while decision guides and FAQs are useful for comparisons such as SQS versus SNS, storage classes, load balancers, databases, and connectivity options.','Prioritize boundaries that generate distractors: stateful versus stateless controls, Multi-AZ versus read replicas, queues versus streams, backup versus replication, gateway versus interface endpoints, and CloudWatch versus CloudTrail versus Config. Avoid treating old course limits or retired service names as current implementation guidance.'],
      takeaways:['The exam guide defines current scope.','Official docs resolve service behavior.','Comparison boundaries are high-value study targets.'],
      examTip:'When notes and current AWS documentation disagree, learn the exam-recognition term but use the current supported behavior.'
    },
    {
      ready:true,title:'Use practice exams as diagnostic tools',
      summary:'Review the reasoning behind every uncertain answer instead of chasing a score through repetition.',
      explanation:['Take timed mixed-domain practice only after enough study to make the result meaningful. For each wrong or guessed response, record the missed constraint, incorrect assumption, relevant service boundary, and a short rule that would produce the correct decision next time.','Retaking the same questions quickly measures memory, not readiness. Use new scenarios, revisit weak-domain labs, and explain why every distractor fails. A stable score across unfamiliar questions and the ability to articulate tradeoffs are stronger signals than one high result.'],
      takeaways:['Guesses deserve review even when correct.','An error log reveals recurring gaps.','Fresh scenarios measure transfer of knowledge.'],
      examTip:'After a practice test, spend more time analyzing reasoning errors than reading the score report.'
    },
    {
      ready:true,title:'Manage time and uncertainty during the exam',
      summary:'Keep momentum, flag costly questions, and reserve a deliberate review window.',
      explanation:['SAA-C03 currently contains multiple-choice and multiple-response items; 50 questions are scored and 15 are unscored, but unscored items are not identified. There is no penalty for guessing, so every question should receive an answer.','Set a rough pace, make the best supported choice, flag uncertainty, and move on before one dense scenario consumes several questions worth of time. During review, change an answer only for a concrete overlooked constraint or corrected fact, not because the original choice merely feels uncomfortable.'],
      takeaways:['Scored and unscored questions are mixed.','Unanswered questions are incorrect.','Flagging preserves time for later review.'],
      examTip:'Never leave an item blank; eliminate what you can, choose the best remaining response, and flag it.'
    },
    {
      ready:true,title:'Prepare exam-day logistics from official sources',
      summary:'Verify registration, identification, delivery, language, and accommodation requirements before test day.',
      explanation:['AWS exam logistics, pricing, delivery vendors, policies, and available languages can change, so confirm them in the AWS Certification account and official policies rather than relying on a screenshot or old course slide. Make the appointment in the correct time zone and verify the name matches accepted identification.','For online proctoring, test the computer, camera, microphone, network, room, and permitted software in advance. For a test center, plan travel and arrival. Handle accommodations before scheduling when required, and avoid last-minute rescheduling or identification surprises.'],
      takeaways:['Official Certification pages control logistics.','Identity details must match requirements.','Environment checks should happen before exam day.'],
      examTip:'Treat registration and system checks as part of preparation; technical readiness cannot compensate for failed admission requirements.'
    },
    {
      ready:true,title:'Run a final readiness checklist',
      summary:'Consolidate patterns, rest appropriately, and enter the exam with a repeatable decision process.',
      explanation:['In the final days, review architecture comparisons, personal error notes, critical service limits that affect design, and the four domain tasks. Confirm you can reason through security, resilience, performance, and cost together for storage, compute, database, networking, and event-driven scenarios.','Stop adding large new topic areas at the last minute. Prepare logistics, sleep, and use a simple exam loop: identify the requested outcome, extract constraints, eliminate violations, compare tradeoffs, answer, and flag if needed. Certification validates a snapshot of knowledge; continue building and reviewing real systems afterward.'],
      takeaways:['Review personal weaknesses and core comparisons.','Use one consistent scenario-solving loop.','Certification is a milestone, not the end of learning.'],
      examTip:'The day before the exam, favor concise recall and rest over an exhausting full-course reread.'
    }
  ];

  const sectionThirtyThreeLectures=[
    {
      ready:true,title:'Complete the architecture learning journey',
      summary:'Consolidate the course into a connected model of secure, resilient, performant, and cost-aware design.',
      explanation:['You have progressed from AWS foundations through compute, storage, databases, networking, integration, security, monitoring, migration, and architecture review. The lasting skill is not recalling hundreds of service facts independently, but composing them into a design whose tradeoffs match business requirements.','Use the study guide as a navigable reference: revisit comparisons, recreate small architectures, and explain choices aloud. If an explanation depends only on a memorized product name, strengthen it by identifying the input, output, failure mode, scaling boundary, security control, and cost driver.'],
      takeaways:['Architecture connects services into outcomes.','Tradeoff reasoning matters more than isolated facts.','Weak explanations identify the next study target.'],
      examTip:'Before declaring a topic complete, explain why the correct service fits and why its closest alternatives do not.'
    },
    {
      ready:true,title:'Turn course notes into hands-on evidence',
      summary:'Build a small portfolio of repeatable labs that prove core architecture behaviors.',
      explanation:['Create focused experiments rather than one oversized project: a multi-AZ web tier, private service access through endpoints, queue-driven processing with a DLQ, encrypted backup and restore, least-privilege cross-account access, and an observable serverless workflow. Define success and failure tests before deployment.','Provision with infrastructure as code, record costs, capture diagrams and operational decisions, then delete resources safely. For each lab, document what failed, how telemetry exposed it, and how the design recovered. This turns certification study into evidence useful for real engineering work and interviews.'],
      takeaways:['Small focused labs teach service boundaries.','Failure tests deepen operational understanding.','Infrastructure as code makes learning repeatable.'],
      examTip:'Hands-on validation is especially valuable for concepts that sound similar in notes but behave differently under failure.'
    },
    {
      ready:true,title:'Continue after certification',
      summary:'Use the exam as a milestone and maintain a current, practice-driven AWS learning loop.',
      explanation:['After the exam, review the score report without overinterpreting domain bands, update weak areas, and continue following AWS documentation and service announcements. Cloud services evolve: names, limits, recommended patterns, and product availability can change even while older concepts remain visible in training material.','Choose the next step from actual goals—deeper solutions architecture, security, networking, data, operations, development, or machine learning—and pair study with production-quality practice. Regular Well-Architected reviews, incident learning, cost analysis, and recovery exercises create expertise that lasts beyond a certificate renewal cycle.'],
      takeaways:['Certification is one checkpoint.','Current documentation keeps knowledge accurate.','Real goals should determine the next specialty.'],
      examTip:'Celebrate completion, then preserve momentum with one concrete lab or review objective scheduled for the following week.'
    }
  ];

  const sectionFourSlideOverrides={
    'IAM foundations: identities and permissions':{
      sourcePages:'24–26',
      summary:'Start the IAM chapter with the deck’s global-service model: users and groups receive JSON permission policies, and access should follow least privilege.',
      explanation:['The chapter opens with AWS Identity and Access Management (IAM). The slides define IAM as a global service and immediately distinguish the root account, individual users, and user groups.','Permissions are expressed in JSON policy documents attached to users or groups. The deck’s governing rule is least privilege: grant only the permissions a person needs.'],
      slideTopics:[{heading:'IAM chapter opening',bullets:['IAM stands for Identity and Access Management.','IAM is presented as a global AWS service.','The root account exists by default and should not be used or shared for routine work.']},{heading:'Permission model',bullets:['Users and groups can receive JSON policy documents.','Policies define what their identities are permitted to do.','Least privilege avoids granting unnecessary permissions.']}],
      takeaways:['IAM is global.','Users represent people and groups collect users.','Policies carry permissions.','Least privilege is the chapter’s core security rule.'],
      examTip:'For shared human permissions, attach an appropriately scoped policy to a group and place the users in that group.'
    },
    'Protect the AWS account root user':{
      sourcePages:'25, 30, 39',
      summary:'Apply the three root-user rules repeated in the deck: do not share it, avoid routine use, and protect it with MFA.',
      explanation:['The root account is created automatically and has exceptional authority. The users-and-groups slide says it should not be used or shared, while the best-practices slide reserves it for account setup.','The MFA slide specifically calls out protecting root accounts and IAM users. Normal administration should use attributable IAM identities rather than shared root credentials.'],
      slideTopics:[{heading:'Root account rule',bullets:['Created with the AWS account by default.','Not intended for everyday service administration.','Must not be shared among operators.']},{heading:'Protection in the slides',bullets:['Enable MFA for the root account.','Use individual AWS users for people.','Return to root only for the exceptional account tasks that require it.']}],
      takeaways:['Root is created by default.','Do not share root credentials.','Do not use root for routine administration.','Protect root with MFA.'],
      examTip:'Reject designs that use the root user for normal operations, CLI automation, or application access.'
    },
    'IAM users and groups':{
      sourcePages:'25',
      summary:'Follow the deck’s exact user/group rules, including multiple memberships and the prohibition on nested groups.',
      explanation:['IAM users represent people within an organization. Groups are collections used to organize users, but a group may contain users only—not another group.','A user does not have to belong to a group and may belong to multiple groups. The slide’s example shows developers and operations users, including one user whose responsibilities span both groups.'],
      slideTopics:[{heading:'Users',bullets:['Represent people in the organization.','Each person should have an individual AWS user.','A user may be outside all groups or belong to several.']},{heading:'Groups',bullets:['Contain users only.','Cannot contain other groups.','Organize people with common permission needs.']}],
      takeaways:['Users map to people.','Groups contain users, not groups.','Group membership is optional.','A user can join multiple groups.'],
      examTip:'Nested IAM groups are not supported; use multiple group memberships when a user spans job functions.'
    },
    'Assign group membership with least privilege':{
      sourcePages:'25–27, 39',
      summary:'Use group membership to inherit only the policies required by each job function, as illustrated by the deck’s inheritance diagram.',
      explanation:['The slides group users by function, such as Developers, Operations, and Audit Team. A policy attached to a group is inherited by every user in that group.','A user in more than one group receives permissions from each membership; a user can also have an inline policy. The best-practices slide recommends assigning permissions to groups and keeping one AWS user per physical person.'],
      slideTopics:[{heading:'Inheritance diagram',bullets:['Alice, Bob, and Charles inherit the Developers group policy.','David and Edward inherit the Operations group policy.','Charles is shown in both Developers and Audit Team, so both group policies apply.','Fred is shown with an inline policy.']},{heading:'Least-privilege use',bullets:['Choose memberships from actual job responsibilities.','Centralize common permissions on groups.','Avoid broad or shared identities.']}],
      takeaways:['Group policies flow to member users.','Multiple memberships combine permissions.','Inline user policies are possible.','Membership should reflect required work only.'],
      examTip:'When several people need the same permissions, group assignment is the deck’s preferred pattern.'
    },
    'How IAM policies authorize requests':{
      sourcePages:'26, 28',
      summary:'Read policies as JSON documents whose statements name an effect, API actions, target resources, and optional conditions.',
      explanation:['The permissions slide introduces policies as JSON documents assigned to users or groups. The structure slide then breaks each policy into a language version, optional identifier, and one or more required statements.','Within a statement, Effect is Allow or Deny; Action names API operations; Resource identifies the resources to which the statement applies; and Condition optionally controls when the rule applies.'],
      slideTopics:[{heading:'Policy purpose',bullets:['A policy defines permissions for a user or group.','The document is written in JSON.','Least privilege determines how broad its permissions should be.']},{heading:'Statement decision fields',bullets:['Effect selects Allow or Deny.','Action lists the API calls affected.','Resource lists affected AWS resources.','Condition is optional and narrows when the statement applies.']}],
      takeaways:['Policies are JSON permission documents.','Statements contain the authorization rules.','Effect, Action, and Resource are central fields.','Condition is optional.'],
      examTip:'Translate a requirement into the smallest necessary Action and Resource set, then add conditions when the scenario needs context.'
    },
    'Read the structure of an IAM policy':{
      sourcePages:'28',
      summary:'Decode every field identified by the supplied IAM policy-structure slide.',
      explanation:['At the document level, Version identifies the policy language version, Id is optional, and Statement is a required list of individual rules. The slide says to include policy language version 2012-10-17.','At statement level, Sid is an optional statement identifier, Effect is Allow or Deny, Principal identifies the account, user, or role to which a policy applies, Action lists API calls, Resource lists targets, and Condition is optional.'],
      slideTopics:[{heading:'Document fields',bullets:['Version: policy-language version; the slide uses 2012-10-17.','Id: optional policy identifier.','Statement: one or more required permission statements.']},{heading:'Statement fields',bullets:['Sid is optional.','Effect is Allow or Deny.','Principal identifies an account, user, or role where applicable.','Action, Resource, and optional Condition complete the rule.']}],
      takeaways:['Version and Statement organize the document.','Sid and Id are optional labels.','Effect states Allow or Deny.','Action and Resource define the operation and target.'],
      examTip:'When reading a policy, inspect Effect, Action, Resource, and Condition together rather than judging it by its name.'
    },
    'Managed policies, inline policies, and inheritance':{
      sourcePages:'27–28',
      summary:'Center this lesson on the inheritance modes actually pictured in the deck: group-attached policies and a direct inline user policy.',
      explanation:['The inheritance slide shows policies attached to three groups and inherited by their members. It also labels Fred with an inline policy, demonstrating a policy attached directly to that identity.','The supplied IAM slides do not separately compare AWS-managed and customer-managed policy lifecycles. Their exam focus here is predicting which policies a user receives from group membership plus any direct policy.'],
      slideTopics:[{heading:'Group policy inheritance',bullets:['Developers, Operations, and Audit Team each have a policy.','Every member inherits the policy of each group they join.','A user in two groups receives both sets of group permissions.']},{heading:'Inline example',bullets:['Fred has an inline policy attached directly.','The diagram contrasts this direct assignment with group inheritance.','The next slide supplies the JSON fields inside such policies.']}],
      takeaways:['Group policies are inherited by all members.','Multiple memberships add multiple policy sources.','An inline policy can be attached directly to a user.','The deck does not expand this page into a managed-policy taxonomy.'],
      examTip:'Calculate a user’s permissions from every group shown plus any direct policy shown on that user.'
    },
    'Design least-privilege permissions':{
      sourcePages:'26, 28, 38–39',
      summary:'Implement the deck’s least-privilege rule and use access history to refine permissions over time.',
      explanation:['The permissions slide defines least privilege plainly: do not give a user more permissions than needed. Policy structure supplies the controls for narrowing access—Action, Resource, and optional Condition.','The best-practices slide tells administrators to apply least privilege, while Access Advisor reports granted service permissions and when services were last accessed. That history supports evidence-based permission reduction.'],
      slideTopics:[{heading:'Build a narrow policy',bullets:['Allow only the required API actions.','Target only the resources needed by the role.','Use conditions when the request must satisfy additional criteria.']},{heading:'Review access',bullets:['Access Advisor is user-level.','It shows service permissions and last-accessed information.','Use review evidence to remove permissions no longer needed.']}],
      takeaways:['Least privilege limits permissions to the task.','Action and Resource determine scope.','Condition can narrow a rule further.','Access Advisor supports later review.'],
      examTip:'Choose the policy that satisfies the stated job while granting the fewest unrelated actions and resources.'
    },
    'IAM password policies':{
      sourcePages:'29',
      summary:'Cover every password control listed on the deck’s password-policy slide.',
      explanation:['AWS can define an account password policy for IAM users. The slide lists minimum length and required character categories: uppercase, lowercase, numbers, and non-alphanumeric characters.','It also lists allowing users to change their own passwords, requiring password expiration, and preventing password reuse. These settings raise the baseline for console credentials but remain separate from MFA.'],
      slideTopics:[{heading:'Complexity settings',bullets:['Set a minimum password length.','Require uppercase and lowercase letters.','Require numbers and non-alphanumeric characters.']},{heading:'Lifecycle settings',bullets:['Allow IAM users to change their passwords.','Require passwords to expire after a chosen interval.','Prevent reuse of old passwords.']}],
      takeaways:['Password policy is an IAM account control.','It can enforce length and character categories.','It can govern expiration and reuse.','It can permit self-service password changes.'],
      examTip:'Use the password policy for password quality and lifecycle; use MFA when the requirement is protection after password theft.'
    },
    'Multi-factor authentication':{
      sourcePages:'30',
      summary:'Use the slide’s two-factor equation: a password the user knows plus a device the user possesses.',
      explanation:['The MFA slide warns that users who reach an account may change configuration or delete resources. It therefore emphasizes protecting both root accounts and IAM users.','MFA combines a password with a security device. If a password is stolen or hacked, the account remains protected because the attacker still lacks the device.'],
      slideTopics:[{heading:'Why MFA matters',bullets:['Authenticated users may change or delete AWS resources.','Root and IAM user access therefore require stronger protection.','A stolen password should not be sufficient by itself.']},{heading:'Two factors',bullets:['Password: something the user knows.','Security device: something the user owns.','Both must be presented for MFA-protected access.']}],
      takeaways:['MFA protects root and IAM users.','It combines knowledge and possession factors.','It reduces damage from a stolen password.','MFA complements a password policy.'],
      examTip:'A scenario asking how to remain protected after password compromise points directly to MFA.'
    },
    'Choose and manage MFA devices':{
      sourcePages:'31–32',
      summary:'Compare only the MFA device categories pictured in the supplied slides and recognize that named vendors are slide-era examples.',
      explanation:['The deck shows virtual authenticator applications, a Universal 2nd Factor security key, and hardware key-fob devices. Its examples include Google Authenticator, Authy, a YubiKey, Gemalto, and a GovCloud key fob from SurePassID.','The slide notes that one virtual authenticator device can support multiple tokens for multiple root and IAM users. Vendor names and supported device catalogs can change; the enduring distinction is virtual software versus physical security hardware.'],
      slideTopics:[{heading:'Virtual MFA device',bullets:['Phone authenticator apps generate verification codes.','The slide says one device can hold tokens for multiple root and IAM users.']},{heading:'Physical devices',bullets:['A U2F security key is shown as one option.','Hardware key fobs are shown for standard AWS and AWS GovCloud (US).','Specific vendor examples reflect the slide’s publication period.']}],
      takeaways:['Virtual authenticators are supported.','Physical security keys are supported.','Hardware key fobs appear in the deck.','Device/vendor examples may evolve over time.'],
      examTip:'Focus on satisfying the second-factor requirement; do not memorize a vendor as though it were an architectural constraint.'
    },
    'Console, CLI, and SDK access':{
      sourcePages:'33',
      summary:'Use the three access paths and credential types exactly as the slide presents them.',
      explanation:['The Management Console is the interactive browser path and is protected by a password plus MFA. The AWS CLI sends commands from a shell and uses access keys.','The AWS SDK is the application-code path and also uses programmatic credentials. The slide stresses that users manage their own access keys and that access keys are secrets, like passwords.'],
      slideTopics:[{heading:'Three ways to access AWS',bullets:['Management Console: password and MFA.','Command Line Interface: shell commands protected by access keys.','Software Development Kit: application code protected by access keys.']},{heading:'Credential ownership',bullets:['Access keys are generated through the console.','Users manage their own access keys.','The secret must not be shared.']}],
      takeaways:['Console access uses password and MFA.','CLI access is programmatic.','SDK access is embedded in code.','Access keys must remain secret.'],
      examTip:'Match interactive work to the console, shell scripting to the CLI, and application integration to an SDK.'
    },
    'Access keys and credential safety':{
      sourcePages:'33–34, 39',
      summary:'Treat the access key ID and secret access key as the programmatic credential pair shown in the deck, and never share them.',
      explanation:['The access-method slide says CLI and SDK usage is protected by access keys generated through the AWS Console. The example slide displays a deliberately fake access key ID and secret access key to teach the two-part format.','The explicit lesson beneath that example is not to share access keys. The best-practices slide adds that access keys should be used for programmatic access rather than shared human console access.'],
      slideTopics:[{heading:'Credential pair',bullets:['Access key ID identifies the programmatic credential.','Secret access key is the confidential half of the pair.','The displayed values in the source deck are labeled fake examples.']},{heading:'Safety rule',bullets:['Do not share access keys.','Do not confuse programmatic credentials with console passwords.','Create credentials for the intended IAM identity.']}],
      takeaways:['An access key has an ID and a secret.','The secret must remain private.','The slide’s sample values are fake.','Access keys support CLI and SDK requests.'],
      examTip:'Never choose an answer that shares or embeds a person’s long-lived access key as a general workload solution.'
    },
    'Configure and use the AWS CLI safely':{
      sourcePages:'35, 39–40',
      summary:'Keep this lecture anchored to the deck’s CLI definition: a command-shell tool that calls public AWS service APIs and enables scripts.',
      explanation:['The AWS CLI lets a user interact with AWS services through commands in a command-line shell. The slide describes this as direct access to public AWS service APIs and highlights scripting for resource management.','It is an open-source tool with an alternative to the browser console. The IAM best-practices and summary slides tie CLI access to access keys, so those credentials must be protected and scoped by IAM permissions.'],
      slideTopics:[{heading:'CLI definition',bullets:['Runs AWS service commands from a command-line shell.','Calls public AWS service APIs.','Supports scripts that manage resources.']},{heading:'Deck comparison',bullets:['The CLI is open source.','It is an alternative to the Management Console.','Its programmatic access uses access keys governed by IAM.']}],
      takeaways:['The CLI is a shell interface.','It calls AWS public APIs.','It supports automation scripts.','Installing it does not itself grant permissions.'],
      examTip:'The IAM identity behind the CLI determines what its commands can do.'
    },
    'Use AWS CloudShell for browser-based commands':{
      sourcePages:'33, 35',
      summary:'Place browser-based command work in the access model while clearly noting that this supplied IAM chapter has no dedicated CloudShell slide.',
      explanation:['The deck contrasts browser console access with command-line access and then defines the AWS CLI. Those concepts explain the purpose of a browser-hosted command environment: it exposes command-line interaction while the learner is working through AWS.','CloudShell itself is not named on pages 24–40 of the supplied slides. For strict slide study, retain the examinable points from these pages: CLI commands call public APIs, programmatic access is permission-controlled, and credentials must not be shared.'],
      slideTopics:[{heading:'What the supplied pages establish',bullets:['Console is the browser-based management interface.','CLI is the command-shell interface to AWS public APIs.','IAM authorization still controls the commands.']},{heading:'Coverage boundary',bullets:['The IAM chapter does not contain a dedicated CloudShell slide.','Do not substitute extra CloudShell feature claims for the slide’s CLI and credential lessons.']}],
      takeaways:['Browser and command-line access are distinct interfaces.','CLI requests reach AWS public APIs.','Permissions still come from IAM.','CloudShell is not a dedicated topic in this deck chapter.'],
      examTip:'For this slide set, memorize the console/CLI/SDK distinction rather than product details not shown in the IAM chapter.'
    },
    'Use AWS SDKs in application code':{
      sourcePages:'33, 36',
      summary:'Follow the SDK slide’s language-library model and its examples of supported SDK categories.',
      explanation:['The AWS Software Development Kit provides language-specific APIs and libraries so applications can access and manage AWS services programmatically. Unlike a standalone shell command, SDK calls are embedded inside application code.','The slide lists server-side languages including JavaScript, Python, PHP, .NET, Ruby, Java, Go, Node.js, and C++, mobile SDKs for Android and iOS, and device SDKs for embedded C and Arduino. It also says the AWS CLI is built on the AWS SDK for Python.'],
      slideTopics:[{heading:'SDK purpose',bullets:['Provides language-specific AWS APIs and libraries.','Lets applications access and manage AWS services programmatically.','Is embedded within application code.']},{heading:'Examples in the deck',bullets:['General SDKs span major server-side languages.','Mobile SDKs include Android and iOS.','IoT device SDKs include embedded C and Arduino.','The CLI is described as using the AWS SDK for Python.']}],
      takeaways:['SDKs are language-specific libraries.','SDK calls live inside applications.','The deck includes mobile and IoT SDK categories.','SDK access is programmatic and credential-protected.'],
      examTip:'Choose an SDK when application code itself must call AWS services.'
    },
    'IAM roles for AWS services':{
      sourcePages:'37',
      summary:'Use IAM roles when an AWS service must perform actions on the customer’s behalf, matching the three examples on the slide.',
      explanation:['The roles slide explains that some AWS services need permissions to perform actions on your behalf. IAM roles assign those permissions to the service rather than treating the service like a human user.','Its common examples are EC2 instance roles, Lambda function roles, and roles for CloudFormation. The diagram shows an EC2 instance using an IAM role to access AWS.'],
      slideTopics:[{heading:'Why service roles exist',bullets:['An AWS service sometimes needs to call another AWS action for you.','A role supplies the service with the required permissions.','Permissions should match the service task.']},{heading:'Examples named on the slide',bullets:['EC2 instance role.','Lambda function role.','Role for CloudFormation.']}],
      takeaways:['Roles grant permissions to AWS services.','Services act on the customer’s behalf.','EC2, Lambda, and CloudFormation are the slide examples.','A service role replaces a shared human identity.'],
      examTip:'When an EC2 instance or Lambda function needs AWS API access, select a role for that service.'
    },
    'Role trust policies and permission policies':{
      sourcePages:'28, 37',
      summary:'Connect the policy fields in the deck to the service-role diagram without adding a trust-policy deep dive that is absent from this chapter.',
      explanation:['The policy-structure slide introduces Principal as the account, user, or role to which a policy applies, along with Effect, Action, Resource, and Condition. The roles slide then shows a service receiving permissions through a role.','The supplied IAM chapter does not separately diagram trust policies versus permissions policies. Its required takeaway is narrower: the AWS service uses the role, and the role supplies permissions for actions performed on your behalf.'],
      slideTopics:[{heading:'Policy connection',bullets:['Principal identifies who a relevant policy applies to.','Action and Resource describe permitted operations and targets.','Condition may narrow when a statement applies.']},{heading:'Role connection',bullets:['The service is assigned an IAM role.','The role carries permissions needed for delegated actions.','EC2, Lambda, and CloudFormation are the chapter’s examples.']}],
      takeaways:['Roles are the service permission mechanism in the deck.','Policies describe the allowed operations.','Principal, Action, and Resource have different jobs.','Detailed trust-policy mechanics are outside this slide chapter.'],
      examTip:'For the supplied slides, identify the service that needs the role and the permissions required for its delegated task.'
    },
    'Audit credentials and permissions':{
      sourcePages:'38',
      summary:'Distinguish the account-level credentials report from the user-level Access Advisor exactly as the security-tools slide does.',
      explanation:['The IAM credentials report is account-level. It lists all users in the account and the status of their various credentials, supporting an account-wide credential review.','IAM Access Advisor is user-level. It shows the service permissions granted to a user and when those services were last accessed, which helps revise policies toward least privilege.'],
      slideTopics:[{heading:'Credentials report',bullets:['Scope: the AWS account.','Lists all account users.','Shows the status of their credentials.']},{heading:'Access Advisor',bullets:['Scope: an individual user.','Shows granted service permissions.','Shows when those services were last accessed.','Supports policy revision.']}],
      takeaways:['Credentials report is account-level.','It audits user credential status.','Access Advisor is user-level.','Last-accessed data supports least privilege.'],
      examTip:'Choose the credentials report for account-wide credential status and Access Advisor for a user’s service-permission history.'
    },
    'IAM review and security decision rules':{
      sourcePages:'39–40',
      summary:'Finish with the deck’s own IAM checklist and section summary rather than a broader identity catalog.',
      explanation:['The guidelines slide says to reserve root for account setup, create one AWS user per physical person, assign users to groups, attach permissions to groups, establish a strong password policy, use MFA, use access keys for programmatic access, audit with credentials reports, and apply least privilege.','The summary connects each concept: users map to people, groups contain users only, policies are JSON permission documents, roles serve EC2 or other AWS services, MFA and password policy secure access, CLI and SDK provide programmatic interfaces, and access keys enable API access.'],
      slideTopics:[{heading:'Guidelines checklist',bullets:['Do not use root except for account setup.','One physical person maps to one AWS user.','Assign permissions through groups.','Use a strong password policy and MFA.','Audit credentials and apply least privilege.']},{heading:'Section summary',bullets:['Users and groups organize human identities.','Policies define permissions.','Roles grant AWS services permissions.','CLI and SDK calls use programmatic access.']}],
      takeaways:['Root is exceptional.','People need individual users.','Groups and policies organize permissions.','Roles serve AWS workloads.','MFA, reports, and least privilege improve security.'],
      examTip:'Map the requirement to the deck’s control: group for shared human permissions, role for a service, MFA for stronger login, or a report for auditing.'
    }
  };

  sectionFourLectures.forEach(lecture=>Object.assign(lecture,sectionFourSlideOverrides[lecture.title]||{}));

  const sectionFiveSlideOverrides={
    'Amazon EC2 and infrastructure as a service':{
      sourcePages:'41–42',summary:'Introduce EC2 through the four capabilities named in the deck: virtual machines, block storage, load distribution, and automatic scaling.',
      explanation:['Amazon Elastic Compute Cloud (EC2) is presented as Infrastructure as a Service and one of AWS’s central offerings. Its primary compute capability is renting virtual machines.','The opening slide places EC2 beside EBS virtual drives, Elastic Load Balancing, and Auto Scaling. Together they form the basic compute platform developed throughout the following chapters.'],
      slideTopics:[{heading:'EC2 foundation',bullets:['EC2 means Elastic Compute Cloud.','It provides virtual machines as Infrastructure as a Service.','The customer chooses and operates instance capacity.']},{heading:'Related capabilities on the slide',bullets:['EBS stores data on virtual drives.','ELB distributes traffic across machines.','Auto Scaling Group scales capacity.']}],
      takeaways:['EC2 provides rentable virtual machines.','EBS supplies virtual drives.','ELB distributes load.','Auto Scaling adjusts machine capacity.'],examTip:'A requirement for operating configurable virtual servers points to EC2 rather than a fully managed application runtime.'
    },
    'Configure an EC2 instance':{
      sourcePages:'43',summary:'Use the exact configuration dimensions from the sizing slide before choosing an instance.',
      explanation:['The deck sizes an EC2 instance by operating system, CPU and core count, RAM, storage, networking, and firewall rules. Operating-system examples are Linux, Windows, and macOS.','Storage may be network-attached through EBS or EFS, or hardware-local through EC2 Instance Store. Network choices include card speed and public IP behavior, while a security group supplies firewall rules.'],
      slideTopics:[{heading:'Compute configuration',bullets:['Choose Linux, Windows, or macOS.','Select CPU and core capacity.','Select the required RAM.']},{heading:'Storage and network',bullets:['Network-attached storage: EBS or EFS.','Hardware-local storage: EC2 Instance Store.','Choose network performance and public IP settings.','Attach security-group firewall rules.']}],
      takeaways:['OS, CPU, and RAM are explicit choices.','Storage can be network-attached or local.','Network performance is configurable.','Security groups provide firewall rules.'],examTip:'Match instance configuration to workload constraints instead of choosing by instance name alone.'
    },
    'Bootstrap instances with EC2 user data':{
      sourcePages:'44',summary:'Follow the slide’s one-time bootstrap model for EC2 user data.',
      explanation:['EC2 user data runs bootstrap commands when an instance starts. The supplied slide states that the script runs once, at the instance’s first start, and runs with root privileges.','The listed boot tasks include installing updates, installing software, downloading common files, and any other startup automation. User data is therefore initialization, not a continuously running orchestration system.'],
      slideTopics:[{heading:'Bootstrap behavior',bullets:['Runs commands when the machine starts.','Runs once at first start in the course model.','Executes with root privileges.']},{heading:'Example tasks',bullets:['Install operating-system updates.','Install required software.','Download shared files from the internet.']}],
      takeaways:['User data bootstraps an instance.','It is first-start initialization.','It can install and download dependencies.','Its commands run as root.'],examTip:'Use user data when a launch must automatically perform initial machine setup.'
    },
    'Launch and manage an EC2 instance':{
      sourcePages:'45',summary:'Recreate the hands-on flow described by the deck: launch Linux, inspect parameters, bootstrap a web server, and observe lifecycle behavior.',
      explanation:['The hands-on slide launches a Linux virtual server from the AWS Console and uses that flow to introduce instance parameters at a high level. The web server is created through EC2 user data.','The exercise then starts, stops, and terminates the instance. The slide calls out the change in public IP after stopping as an important lifecycle observation.'],
      slideTopics:[{heading:'Launch exercise',bullets:['Create a Linux EC2 virtual server in the console.','Review the launch parameters.','Use user data to launch a web server.']},{heading:'Lifecycle exercise',bullets:['Start and stop the instance.','Observe that the public IP changes after stopping.','Terminate the instance when finished.']}],
      takeaways:['Console launch exposes EC2 parameters.','User data can create the sample web server.','Stop/start can change the public IP.','Termination removes the instance.'],examTip:'Do not depend on an automatically assigned public IPv4 address remaining unchanged across stop/start.'
    },
    'Read EC2 instance type names':{
      sourcePages:'46',summary:'Decode the deck’s m5.2xlarge example into family, generation, and size.',
      explanation:['EC2 offers instance types optimized for different use cases. The naming convention shown is m5.2xlarge.','In that example, m is the instance class, 5 is the generation, and 2xlarge is the size within that class. AWS evolves families and generations over time, so the durable skill is reading the pattern.'],
      slideTopics:[{heading:'m5.2xlarge',bullets:['m: instance class or family.','5: family generation.','2xlarge: size within the family.']},{heading:'Selection rule',bullets:['Different families are optimized for different workloads.','New generations appear as AWS evolves the platform.']}],
      takeaways:['The leading letter identifies a family.','The number identifies generation.','The suffix identifies size.','Names communicate workload orientation and capacity.'],examTip:'First choose the workload-appropriate family, then select the size needed inside it.'
    },
    'Choose an EC2 instance family':{
      sourcePages:'47–50',summary:'Compare the four instance-family categories and use cases listed in the supplied slides.',
      explanation:['General purpose balances compute, memory, and networking for workloads such as web servers and code repositories. Compute optimized targets processor-intensive work including batch processing, transcoding, high-performance web servers, HPC, scientific modeling, machine learning, and gaming servers.','Memory optimized serves large in-memory data sets, high-performance databases, distributed caches, BI databases, and real-time processing. Storage optimized targets high sequential local-storage throughput for OLTP, databases, caches, data warehousing, and distributed file systems.'],
      slideTopics:[{heading:'Balanced and CPU-heavy',bullets:['General purpose balances compute, memory, and networking.','Compute optimized favors high-performance processors.']},{heading:'Memory and local storage',bullets:['Memory optimized processes large in-memory data sets.','Storage optimized favors high sequential read/write access to local storage.']}],
      takeaways:['General purpose is balanced.','Compute optimized is CPU-centric.','Memory optimized serves large in-memory workloads.','Storage optimized serves intensive local-storage workloads.'],examTip:'Use the bottleneck in the scenario—CPU, memory, or local I/O—to select the family.'
    },
    'Right-size EC2 capacity':{
      sourcePages:'46, 51',summary:'Compare instance capacity across vCPU, memory, storage, network performance, and EBS bandwidth as the deck’s table does.',
      explanation:['The example table compares several instance types rather than treating size as a single CPU number. Its columns are vCPU, memory in GiB, attached storage, network performance, and EBS bandwidth.','Some examples are EBS-only, while a storage-oriented example includes local NVMe SSD. The exact models and values are slide-era examples; the design method is to compare every relevant resource dimension.'],
      slideTopics:[{heading:'Dimensions in the table',bullets:['vCPU count.','Memory in GiB.','EBS-only versus local instance storage.','Network performance.','EBS bandwidth.']},{heading:'Right-sizing method',bullets:['Choose a family for the workload pattern.','Choose a size that meets measured resource demand.','Treat table values as dated examples, not fixed service limits.']}],
      takeaways:['Instance sizes differ on several axes.','Storage may be EBS-only or include local NVMe.','Network and EBS throughput matter.','Published instance specifications evolve.'],examTip:'A workload can be constrained by network or storage throughput even when CPU and memory look sufficient.'
    },
    'Security group fundamentals':{
      sourcePages:'52–55',summary:'Use the deck’s firewall model: allow rules filter inbound and outbound traffic by IP, port, or another security group.',
      explanation:['Security groups are the fundamental EC2 network-security control in this chapter. They contain rules that control traffic into and out of an instance, and rules may reference an IP address or another security group.','The deeper-dive slides describe control of ports, IPv4 and IPv6 ranges, inbound traffic, and outbound traffic. Security groups can attach to multiple instances, belong to a Region/VPC combination, live outside the instance, and are stateful: allowed return traffic is automatically permitted.'],
      slideTopics:[{heading:'Rule model',bullets:['Inbound rules control traffic reaching an instance.','Outbound rules control traffic leaving an instance.','Rules can reference IP ranges or security groups.','Security groups contain allow rules.']},{heading:'Operational properties',bullets:['One security group can attach to multiple instances.','A group is scoped to a Region/VPC combination.','It lives outside EC2 and is stateful.']}],
      takeaways:['Security groups filter ingress and egress.','Rules use ports and permitted sources or destinations.','Security groups are stateful.','They can attach to multiple instances.'],examTip:'If traffic is allowed into a stateful security group, the response path does not require a separate return rule.'
    },
    'Reference security groups in layered architectures':{
      sourcePages:'52, 56',summary:'Authorize traffic by source security group so layered instances can communicate without hard-coded private IP addresses.',
      explanation:['The reference diagram shows Security Group 1 authorizing traffic from instances carrying Security Group 1 or Security Group 2. It does not authorize an unrelated instance merely because that instance has an IP address.','A security-group reference identifies eligible network interfaces by group membership. It does not copy rules from the referenced group, and it supports layered designs whose instance IPs may change.'],
      slideTopics:[{heading:'Diagram behavior',bullets:['The destination listens on a chosen port.','Its inbound rule authorizes selected source security groups.','Instances attached to an authorized source group can connect.']},{heading:'Architecture use',bullets:['Reference a load-balancer or application-tier group as the source.','Avoid maintaining changing private IP allowlists.','Group membership expresses the trusted tier.']}],
      takeaways:['Rules can reference other security groups.','References use group membership, not copied rules.','This pattern supports layered architectures.','Unreferenced groups remain unauthorized.'],examTip:'For an application tier reachable only from a load balancer, use the load balancer’s security group as the inbound source.'
    },
    'Diagnose security group and application failures':{
      sourcePages:'54–55, 60',summary:'Apply the deck’s diagnostic split: timeout suggests blocked security-group traffic, while connection refused suggests the request reached the instance.',
      explanation:['The security-group notes state that blocked traffic never reaches the EC2 instance because the group operates outside it. They give a practical troubleshooting rule: an application timeout is usually a security-group issue.','A connection-refused error means the request passed the security group and the application rejected it or was not listening. For SSH trouble, the deck recommends checking the lecture and guide, then trying EC2 Instance Connect.'],
      slideTopics:[{heading:'Failure signals',bullets:['Timeout: inspect security-group rules and reachability.','Connection refused: traffic reached the host; inspect the application or listener.','Blocked traffic is not visible to the instance application.']},{heading:'SSH troubleshooting',bullets:['Recheck the connection steps.','Use the troubleshooting guide.','Try EC2 Instance Connect as another method.']}],
      takeaways:['Timeout commonly indicates filtering.','Connection refused commonly indicates a host/application issue.','Security groups operate outside EC2.','One working connection method is sufficient for the lab.'],examTip:'Use the observed error to decide whether to inspect the network rule or the process listening on the instance.'
    },
    'Recognize common network ports':{
      sourcePages:'57',summary:'Memorize the classic service ports listed by the supplied deck.',
      explanation:['The ports slide associates SSH and SFTP with 22, FTP with 21, HTTP with 80, HTTPS with 443, and Microsoft Remote Desktop with 3389.','It also lists database ports: PostgreSQL 5432, MySQL and Aurora 3306, Oracle RDS 1521, Microsoft SQL Server 1433, and MariaDB 3306. Port knowledge helps interpret security-group rules.'],
      slideTopics:[{heading:'Remote access and web',bullets:['21: FTP.','22: SSH and SFTP.','80: HTTP.','443: HTTPS.','3389: RDP.']},{heading:'Database ports',bullets:['5432: PostgreSQL.','3306: MySQL, Aurora, and MariaDB.','1521: Oracle RDS.','1433: Microsoft SQL Server.']}],
      takeaways:['SSH and SFTP use 22.','HTTP/HTTPS use 80/443.','RDP uses 3389.','Database engines have recognizable default ports.'],examTip:'A security-group question often expects the destination port that matches the named protocol or database engine.'
    },
    'Connect to Linux instances securely':{
      sourcePages:'58–63',summary:'Follow the deck’s OS-specific SSH paths and browser-based EC2 Instance Connect behavior.',
      explanation:['The lecture guide directs macOS and Linux learners to SSH, older Windows learners to PuTTY, Windows 10 learners to SSH, and everyone to EC2 Instance Connect. SSH provides command-line control of a remote machine.','EC2 Instance Connect works from the browser and uploads a temporary key to EC2, so the downloaded key file is not used for that connection. The slide’s stated prerequisites are Amazon Linux 2 support, port 22, and an enabled SSH service.'],
      slideTopics:[{heading:'Connection choices',bullets:['macOS/Linux: SSH.','Windows: PuTTY or built-in SSH depending on version.','All learners: EC2 Instance Connect.']},{heading:'Instance Connect in the deck',bullets:['Connects through the browser.','Uploads a temporary key.','Requires port 22 and a running SSH service.']}],
      takeaways:['SSH controls a remote Linux instance.','Client choice depends on the local OS.','Instance Connect uses a temporary uploaded key.','Port 22 must be reachable.'],examTip:'If SSH times out, check the inbound port-22 rule and source address before changing the instance application.'
    },
    'Choose between On-Demand and Reserved pricing':{
      sourcePages:'64–66, 72–73',summary:'Compare no-commitment On-Demand capacity with the deck’s one- or three-year Reserved Instance commitments.',
      explanation:['On-Demand charges for use without upfront payment or long-term commitment and is recommended for short, uninterrupted, unpredictable workloads. The slide describes it as the highest-cost purchasing option in exchange for flexibility.','Reserved Instances target steady-state usage for one or three years. The slide lists standard and convertible forms, payment choices, and a dated discount of up to 72%; exact prices and discounts are historical examples rather than permanent guarantees.'],
      slideTopics:[{heading:'On-Demand',bullets:['No long-term commitment.','No required upfront payment.','Best suited to short, unpredictable, uninterrupted work.']},{heading:'Reserved Instances',bullets:['One- or three-year term.','Standard or convertible reservation choices.','No Upfront, Partial Upfront, or All Upfront payment options.','Slide-era discounts reach up to 72%.']}],
      takeaways:['On-Demand favors flexibility.','Reserved favors predictable long-running usage.','Longer terms and payment choices affect discount.','Quoted percentages are slide-era figures.'],examTip:'Stable, predictable instance usage favors a commitment; unknown short-term demand favors On-Demand.'
    },
    'Use EC2 Savings Plans':{
      sourcePages:'64, 67, 72',summary:'Use the deck’s spend-commitment model: commit to an hourly dollar amount for one or three years and retain flexibility within an instance family and Region.',
      explanation:['EC2 Savings Plans provide discounted compute in return for a one- or three-year usage commitment measured in dollars per hour. Usage beyond the plan is billed at the On-Demand rate.','The slide says the plan is locked to an instance family and Region but remains flexible across instance size, operating system, and tenancy. Its up-to-72% discount is a slide-era maximum.'],
      slideTopics:[{heading:'Commitment',bullets:['Commit to a chosen dollars-per-hour usage level.','Choose a one- or three-year term.','Excess usage receives On-Demand pricing.']},{heading:'Flexibility shown',bullets:['Bound to a family and Region in this EC2 Savings Plan slide.','Flexible across size, operating system, and tenancy.','Slide-era discount is stated as up to 72%.']}],
      takeaways:['Savings Plans use an hourly spend commitment.','The term is one or three years.','Excess usage is On-Demand.','The slide retains size, OS, and tenancy flexibility.'],examTip:'Choose the commitment model when usage is predictable but exact instance size or operating system may change.'
    },
    'Run interruption-tolerant work on Spot Instances':{
      sourcePages:'64, 68, 74–76',summary:'Use Spot only for workloads that tolerate interruption, and understand the request lifecycle illustrated in the deck.',
      explanation:['Spot Instances use spare EC2 capacity at steep discounts—the slides cite up to 90% compared with On-Demand—but the instance can be lost when the Spot price exceeds the maximum price. Suitable examples are batch jobs, data analysis, image processing, distributed workloads, and workloads with flexible start/end times.','The request slide distinguishes one-time and persistent requests and gives a two-minute interruption grace period. The termination diagram warns that canceling a Spot request does not itself terminate an instance and that sequence matters.'],
      slideTopics:[{heading:'Workload fit',bullets:['Strong cost efficiency with interruption risk.','Good for batch, analytics, image processing, and distributed work.','Not suitable for critical jobs or databases.']},{heading:'Request behavior',bullets:['One-time or persistent request types.','Two-minute grace period is shown for interruption.','Canceling a request and terminating an instance are separate actions.']}],
      takeaways:['Spot trades reliability for low price.','Workloads must tolerate interruption.','Persistent requests can reopen.','Request cancellation does not automatically terminate an instance.'],examTip:'Choose Spot for fault-tolerant work with flexible timing, never for a noninterruptible critical database.'
    },
    'Dedicated tenancy, capacity reservations, and Spot fleets':{
      sourcePages:'69–73, 77',summary:'Separate hardware isolation, reserved capacity, and mixed Spot fleet orchestration using the deck’s comparisons.',
      explanation:['A Dedicated Host is a fully dedicated physical server and supports server-bound licenses and compliance needs; the slide describes three-year reservation options and high cost. A Dedicated Instance runs on dedicated hardware but can share that hardware with instances from the same account and gives no placement control.','A Capacity Reservation secures On-Demand capacity in one Availability Zone without a term commitment or billing discount. A Spot Fleet combines Spot and optional On-Demand Instances, selects from launch pools, and uses lowest-price, diversified, capacity-optimized, or price-capacity-optimized allocation strategies.'],
      slideTopics:[{heading:'Isolation and capacity',bullets:['Dedicated Host: dedicated physical server and placement visibility.','Dedicated Instance: dedicated tenancy without host placement control.','Capacity Reservation: guaranteed capacity in a specific AZ, charged at On-Demand rates.']},{heading:'Spot Fleet',bullets:['Targets capacity using multiple launch pools.','May combine Spot and On-Demand Instances.','Allocation strategies trade price and capacity availability.']}],
      takeaways:['Dedicated Hosts address licensing and physical-host needs.','Dedicated Instances provide tenancy without host control.','Capacity Reservations solve AZ capacity availability, not discounts.','Spot Fleets diversify capacity pools.'],examTip:'Do not confuse a Capacity Reservation’s availability guarantee with a pricing discount; combine mechanisms when both are required.'
    }
  };

  sectionFiveLectures.forEach(lecture=>Object.assign(lecture,sectionFiveSlideOverrides[lecture.title]||{}));

  const sectionSixSlideOverrides={
    'Public and private IP addressing on EC2':{
      sourcePages:'78–81, 84',summary:'Use the deck’s IPv4 model to distinguish internet-unique public addresses from reusable private-network addresses.',
      explanation:['The slides introduce IPv4 and IPv6 but use IPv4 throughout the course. Public IPv4 addresses identify machines on the internet, must be globally unique, and can be geolocated.','Private IPv4 addresses work only within a private network, must be unique inside that network, and may be reused by different private networks. EC2 commonly has a private address for the AWS network and a public address for internet reachability; the public address may change after stop/start.'],
      slideTopics:[{heading:'Public IPv4',bullets:['Reachable and identifiable on the internet.','Globally unique across the public web.','Can be geolocated.']},{heading:'Private IPv4',bullets:['Reachable within its private network.','Unique only inside that network.','The same private range may be reused by separate organizations.']},{heading:'EC2 hands-on',bullets:['Private IP supports the internal AWS network.','Public IP supports access from the internet.','Stop/start may replace the public IP while the private IP remains.']}],
      takeaways:['Public IPs are internet-unique.','Private IPs are locally unique.','Separate private networks may reuse ranges.','An automatic EC2 public IP is not a stable endpoint.'],examTip:'Use private IPs for internal communication and do not assume an auto-assigned public IP survives stop/start.'
    },
    'Elastic IP addresses and stable endpoints':{
      sourcePages:'82–83',summary:'Apply Elastic IPs only when a fixed public IPv4 address is required, while retaining the deck’s warning that they are usually an avoidable design constraint.',
      explanation:['An Elastic IP is a public IPv4 address retained by the account until it is released. It solves the problem of an ordinary EC2 public IP changing after the instance is stopped and started.','The deck shows rapid remapping to another instance as a way to mask failure, then recommends avoiding dependence on Elastic IPs by using a random public IP with DNS or a load balancer. Its five-address statement is a slide-era default quota, not a permanent universal limit.'],
      slideTopics:[{heading:'Stable address',bullets:['Owned by the account until released.','Can be attached to one instance at a time.','Can be remapped to another instance.']},{heading:'Deck guidance',bullets:['The slide-era default quota is five per account.','Elastic IPs can expose architectural constraints.','Prefer DNS or a load balancer when a fixed instance IP is unnecessary.']}],
      takeaways:['Elastic IP supplies stable public IPv4.','It can be remapped during failure.','Quotas are time-specific and adjustable.','Load balancing often removes the fixed-IP need.'],examTip:'Choose a load balancer for scalable failover; choose an Elastic IP only when the requirement specifically demands a fixed public IPv4 address.'
    },
    'Placement group strategy overview':{
      sourcePages:'85',summary:'Choose among cluster, spread, and partition placement using the definitions on the overview slide.',
      explanation:['A placement group gives control over the placement strategy for EC2 instances. The overview names three strategies.','Cluster packs instances into a low-latency group in one Availability Zone; spread places instances across underlying hardware; partition divides instances among partitions that rely on different hardware racks.'],
      slideTopics:[{heading:'Three strategies',bullets:['Cluster: close placement in one AZ.','Spread: distribute instances across hardware.','Partition: divide instances across rack groups.']},{heading:'Decision axis',bullets:['Cluster optimizes network proximity.','Spread minimizes correlated failure for a small critical set.','Partition isolates large distributed groups by rack partition.']}],
      takeaways:['Placement groups control instance placement strategy.','Cluster favors performance.','Spread favors per-instance isolation.','Partition favors grouped rack isolation at scale.'],examTip:'Translate the scenario’s main concern—latency, individual-instance isolation, or partition-aware scale—into the placement strategy.'
    },
    'Cluster placement groups':{
      sourcePages:'85–86',summary:'Use cluster placement for tightly coupled, high-throughput instances that can accept one-AZ failure correlation.',
      explanation:['The cluster diagram places instances together in the same Availability Zone. The slide cites very high inter-instance network performance with Enhanced Networking enabled.','The tradeoff is common fate: if that Availability Zone fails, all clustered instances fail together. Listed use cases are a fast big-data job and an application requiring extremely low latency and high network throughput.'],
      slideTopics:[{heading:'Cluster benefits',bullets:['Instances are packed close together.','Very high inter-instance bandwidth is the goal.','Low latency supports tightly coupled work.']},{heading:'Cluster risk and fit',bullets:['The group occupies one AZ.','An AZ failure affects the whole group.','Use for big data or extreme low-latency/high-throughput applications.']}],
      takeaways:['Cluster is single-AZ.','It maximizes network proximity.','It increases correlated AZ risk.','It fits tightly coupled compute.'],examTip:'Choose cluster for the strongest east-west network performance, not for multi-AZ resilience.'
    },
    'Spread placement groups':{
      sourcePages:'85, 87',summary:'Use spread placement to put a small number of critical instances on different physical hardware, potentially across AZs.',
      explanation:['Spread placement reduces simultaneous failure by placing EC2 instances on separate underlying hardware. The diagram spans multiple Availability Zones.','The slide-era limit is seven instances per AZ per placement group. Its use case is a critical application in which each individual instance must be isolated from hardware failure.'],
      slideTopics:[{heading:'Spread properties',bullets:['Can span Availability Zones.','Places instances on different physical hardware.','Reduces simultaneous hardware failure risk.']},{heading:'Scale and use case',bullets:['The slide states a seven-instances-per-AZ limit.','Designed for a small number of critical instances.','Treat the numeric limit as source-era service information.']}],
      takeaways:['Spread isolates individual instances.','It can cross AZs.','It reduces correlated hardware failure.','It is intended for a small critical set.'],examTip:'Choose spread when each critical instance needs distinct underlying hardware; use partition for much larger fleets.'
    },
    'Partition placement groups':{
      sourcePages:'85, 88',summary:'Use partition placement for large distributed systems that understand rack-level partitions.',
      explanation:['A partition placement group divides instances into partitions whose racks do not overlap. A partition failure may affect many instances inside that partition but does not share racks with other partitions.','The slide says a group can span multiple AZs in one Region, scale to hundreds of instances, and use up to seven partitions per AZ. EC2 exposes partition information to instance metadata; listed examples are HDFS, HBase, and Cassandra.'],
      slideTopics:[{heading:'Partition isolation',bullets:['Partitions use different sets of racks.','Failure is contained to the affected partition’s racks.','Instances can see their partition in metadata.']},{heading:'Scale and examples',bullets:['Can span AZs in one Region.','Supports hundreds of EC2 instances.','The slide cites up to seven partitions per AZ.','HDFS, HBase, and Cassandra are example systems.']}],
      takeaways:['Partitions isolate rack groups.','A group can span AZs.','It scales beyond spread placement.','Distributed systems can use partition awareness.'],examTip:'Choose partition for a large rack-aware distributed system; choose spread for a small number of individually isolated instances.'
    },
    'Elastic Network Interfaces':{
      sourcePages:'89',summary:'Model an ENI as a movable virtual network card within one Availability Zone, carrying addresses, security groups, and a MAC address.',
      explanation:['An Elastic Network Interface is a logical VPC component representing a virtual network card. The slide lists a primary private IPv4 address, one or more secondary private IPv4 addresses, one Elastic IP per private IPv4, one public IPv4, security groups, and a MAC address.','An ENI can be created independently and moved between EC2 instances for failover, but it is bound to a specific Availability Zone. The diagram uses this movement to illustrate network-interface failover.'],
      slideTopics:[{heading:'ENI attributes',bullets:['Primary and optional secondary private IPv4 addresses.','Public IPv4 and Elastic IP relationships.','Attached security groups.','A MAC address.']},{heading:'Lifecycle',bullets:['Create an ENI independently of an instance.','Attach or move it between instances.','Keep it within one Availability Zone.']}],
      takeaways:['ENI is a virtual network card.','It carries IP and security-group configuration.','It can move between instances.','It is AZ-bound.'],examTip:'An ENI can preserve a network identity during same-AZ instance failover; it cannot be moved across AZs.'
    },
    'EC2 stop, start, reboot, and terminate behavior':{
      sourcePages:'82, 84, 90',summary:'Separate disk persistence, public-address changes, reboot behavior, and termination loss using the lifecycle statements in the deck.',
      explanation:['Stopping an EBS-backed instance keeps data on its EBS disk for the next start, while the automatically assigned public IP may change. Starting after a stop performs a new operating-system boot, although the private IP is retained in the hands-on model.','Termination removes the instance and loses any root EBS volume configured for deletion. A reboot restarts the operating system without the stop/start address transition; the hibernation slides contrast both with preserving RAM state.'],
      slideTopics:[{heading:'Stop and start',bullets:['EBS disk data remains intact.','A later start boots the operating system again.','The public IP can change after stop/start.']},{heading:'Reboot and terminate',bullets:['Reboot restarts the OS without a full stop/start lifecycle.','Termination removes the instance.','Root EBS data is lost when Delete on Termination is enabled.']}],
      takeaways:['Stop preserves EBS-backed disk data.','Stop/start may change public IP.','Reboot differs from stop/start.','Termination can delete the root EBS volume.'],examTip:'Read the Delete on Termination setting before deciding whether storage survives instance termination.'
    },
    'EC2 hibernation':{
      sourcePages:'90–92',summary:'Preserve RAM to the encrypted root EBS volume for faster resume, subject to the deck’s hibernation prerequisites and limits.',
      explanation:['Hibernation writes the in-memory RAM state to a file on the root EBS volume. The operating system is not fully restarted on resume, so the instance returns faster and retains its prior memory state.','The root EBS volume must be encrypted and large enough for RAM. The good-to-know slide lists supported families and operating systems, excludes bare metal, states a slide-era RAM threshold below 150 GB, and caps hibernation at 60 days; all specific limits should be rechecked when implementing.'],
      slideTopics:[{heading:'How hibernation works',bullets:['Preserves in-memory state.','Writes RAM into the root EBS volume.','Resumes faster because the OS is not restarted from scratch.']},{heading:'Requirements shown',bullets:['Encrypted root EBS volume with enough space.','Supported family, size, AMI, and operating system.','Slide-era limits include less than 150 GB RAM and at most 60 days.']}],
      takeaways:['Hibernation preserves RAM.','RAM is stored on root EBS.','Root EBS encryption is required.','Support and numeric limits are source-era details.'],examTip:'Choose hibernation when an application has expensive in-memory initialization and must resume its prior state.'
    }
  };

  sectionSixLectures.forEach(lecture=>Object.assign(lecture,sectionSixSlideOverrides[lecture.title]||{}));

  const sectionSevenSlideOverrides={
    'Amazon EBS volume fundamentals':{
      sourcePages:'93–96',summary:'Model EBS as a persistent, network-attached block drive that is provisioned independently of an EC2 instance.',
      explanation:['Elastic Block Store provides a network drive that can be attached while an EC2 instance runs. The slides emphasize persistence beyond instance termination when deletion is not configured.','An EBS volume uses the network, so it has some latency, and can be detached and attached to another instance. The chapter model normally mounts one volume to one instance, locks a volume to one Availability Zone, and allows capacity and performance to be provisioned in advance.'],
      slideTopics:[{heading:'EBS definition',bullets:['Network-attached block drive for EC2.','Persists independently of the instance lifecycle.','Can be detached and reattached.']},{heading:'Scope and provisioning',bullets:['Normally attached to one instance at a time.','Bound to one Availability Zone.','Capacity and IOPS are provisioned attributes.','An unattached volume is still billed.']}],
      takeaways:['EBS is network block storage.','It can persist after an instance ends.','A volume is AZ-scoped.','Provisioned unattached volumes still cost money.'],examTip:'To move EBS data to another AZ, use a snapshot and restore a new volume there.'
    },
    'Attach, move, and retain EBS volumes':{
      sourcePages:'94–97',summary:'Use detach/attach within an AZ and the Delete on Termination attribute to control EBS movement and retention.',
      explanation:['The diagram shows volumes attached to different instances and an unattached volume, all within their Availability Zones. A volume can move quickly between EC2 instances but cannot be directly attached across an AZ boundary.','Delete on Termination controls what happens when an instance terminates. The deck says the root EBS volume is deleted by default while other attached EBS volumes are retained by default; the launch settings can change this.'],
      slideTopics:[{heading:'Attach and move',bullets:['Detach a volume from one instance.','Attach it to another compatible instance in the same AZ.','An EBS volume may exist unattached.']},{heading:'Delete on Termination',bullets:['Enabled by default for the root EBS volume.','Disabled by default for other attached EBS volumes.','Can be changed during instance configuration.']}],
      takeaways:['Direct EBS attachment is AZ-local.','Volumes can exist independently.','Root and data volumes have different default deletion behavior.','Deletion behavior is configurable.'],examTip:'Check Delete on Termination when a requirement says a data volume must survive instance termination.'
    },
    'Create and restore EBS snapshots':{
      sourcePages:'98',summary:'Use a point-in-time EBS snapshot to back up a volume and create replacement volumes in other AZs or Regions.',
      explanation:['An EBS snapshot is a point-in-time backup of a volume. The source volume does not have to be detached, though the slide recommends detaching it for the backup operation.','A snapshot can be copied across Availability Zones or Regions and used to create a new EBS volume. This is the deck’s mechanism for moving EBS-backed data beyond the source volume’s AZ.'],
      slideTopics:[{heading:'Snapshot operation',bullets:['Capture a point-in-time backup.','Detachment is not mandatory, but the slide recommends it.','Restore the snapshot into a new EBS volume.']},{heading:'Geographic movement',bullets:['Use snapshots to create a volume in another AZ.','Copy snapshots across Regions when required.']}],
      takeaways:['Snapshots are point-in-time backups.','A volume may remain attached during capture.','Snapshots can cross AZ or Region boundaries.','Restoring creates a new volume.'],examTip:'EBS volumes do not move across AZs directly; snapshot and restore them.'
    },
    'Archive, protect, and accelerate snapshots':{
      sourcePages:'99',summary:'Cover the three snapshot features named in the deck: Archive, Recycle Bin, and Fast Snapshot Restore.',
      explanation:['EBS Snapshot Archive moves a snapshot to a lower-cost archive tier; the slide cites 75% savings and a 24–72 hour restore window. Recycle Bin retention rules make deleted snapshots recoverable for a chosen period.','Fast Snapshot Restore initializes a restored volume fully so it delivers full performance immediately. The deck labels this feature expensive; all quoted prices and time windows are source-era values.'],
      slideTopics:[{heading:'Cost and protection',bullets:['Archive lowers storage cost with slow restoration.','Recycle Bin retains deleted snapshots under configured rules.','Archived cost percentages and restore windows are slide-era facts.']},{heading:'Fast restoration',bullets:['Fast Snapshot Restore removes first-read initialization delay.','The new volume reaches full performance immediately.','The feature adds significant cost.']}],
      takeaways:['Archive trades restore speed for cost.','Recycle Bin protects against accidental deletion.','Fast Snapshot Restore improves immediate performance.','Feature pricing and timings may change.'],examTip:'Choose Archive for long retention, Recycle Bin for deletion recovery, and Fast Snapshot Restore for immediate restored-volume performance.'
    },
    'Build reusable Amazon Machine Images':{
      sourcePages:'100–101',summary:'Create an AMI from a customized EC2 instance to package software, configuration, operating system, and monitoring for faster launches.',
      explanation:['An Amazon Machine Image is a customized EC2 image. The slides say it can contain the chosen software, configuration, operating system, and monitoring tools, reducing future boot and setup time.','The process is to launch and customize an instance, stop it for data integrity, build the AMI—which also creates EBS snapshots—and launch new instances from that AMI. AMIs are Region-scoped but can be copied across Regions.'],
      slideTopics:[{heading:'AMI contents and sources',bullets:['Packages instance software and configuration.','May be supplied by AWS, a marketplace, or the customer.','Speeds later instance boot and configuration.']},{heading:'Creation process',bullets:['Customize an EC2 instance.','Stop it for data integrity.','Create the AMI and its EBS snapshots.','Launch instances from the image.']}],
      takeaways:['AMI is a reusable EC2 image.','Creation also captures EBS snapshots.','Stopping improves data integrity.','AMIs can be copied to another Region.'],examTip:'Choose a custom AMI when many instances must launch with the same preinstalled operating environment.'
    },
    'Use EC2 instance store for ephemeral data':{
      sourcePages:'102–103',summary:'Use directly attached instance-store hardware for very high I/O only when data loss on stop or termination is acceptable.',
      explanation:['The slides contrast network EBS with EC2 Instance Store, a high-performance hardware disk physically attached to the host. It provides very high IOPS and suits buffers, caches, scratch data, and temporary content.','Instance Store is ephemeral: data is lost when the instance is stopped or terminated. The deck therefore requires replication or backup when any stored information must be durable.'],
      slideTopics:[{heading:'Performance',bullets:['Physically attached local hardware disk.','Better I/O performance than the network-drive model.','Very high IOPS for temporary workload data.']},{heading:'Durability tradeoff',bullets:['Data is lost on stop or termination.','Use for buffers, caches, scratch data, and temporary content.','Replicate or back up data that must survive.']}],
      takeaways:['Instance Store is local hardware storage.','It offers very high I/O.','Its data is ephemeral.','Durable data requires another copy.'],examTip:'Choose Instance Store for rebuildable high-performance temporary data, not as the only copy of important information.'
    },
    'Choose an EBS volume family':{
      sourcePages:'104, 108',summary:'Choose among the six volume types grouped by SSD latency/IOPS needs and HDD throughput needs.',
      explanation:['The overview groups gp2 and gp3 as General Purpose SSD, io1 and io2 Block Express as Provisioned IOPS SSD, st1 as Throughput Optimized HDD, and sc1 as Cold HDD.','Only gp2/gp3 and io1/io2 can be boot volumes. Size and IOPS are independent for gp3 and the io families, while gp2 performance is linked to volume size in the supplied comparison.'],
      slideTopics:[{heading:'SSD families',bullets:['gp2/gp3: broad general-purpose price/performance.','io1/io2: sustained high IOPS for critical low-latency workloads.']},{heading:'HDD families',bullets:['st1: frequent-access, high-throughput sequential work.','sc1: lowest-cost, infrequently accessed workloads.','HDD types cannot be boot volumes.']}],
      takeaways:['EBS has general-purpose and provisioned-IOPS SSDs.','HDD types optimize throughput and cost.','Only SSD families serve as boot volumes.','Volume selection begins with the I/O pattern.'],examTip:'Choose SSD for random IOPS and boot volumes; choose HDD for large sequential throughput when boot support is unnecessary.'
    },
    'General Purpose SSD: gp3 and gp2':{
      sourcePages:'104–105, 108, 116',summary:'Compare gp3’s independently configurable performance with gp2’s size-linked IOPS using the deck’s values.',
      explanation:['General Purpose SSD is cost-effective, low-latency storage for boot volumes, virtual desktops, development, and testing. The slide-era size range is 1 GiB to 16 TiB.','The deck gives gp3 a 3,000 IOPS and 125 MiB/s baseline with independent scaling up to stated maxima. gp2 uses three IOPS per GiB, can burst to 3,000 IOPS, and reaches its stated maximum at 5,334 GiB; these numbers reflect the source edition.'],
      slideTopics:[{heading:'gp3',bullets:['General-purpose SSD with independent size and performance.','Slide baseline: 3,000 IOPS and 125 MiB/s.','IOPS and throughput can be raised without increasing capacity.']},{heading:'gp2',bullets:['Performance scales with volume size.','Slide rate: three IOPS per GiB.','Burst and maximum values are source-era specifications.']}],
      takeaways:['Both types are general-purpose SSD.','gp3 decouples performance from capacity.','gp2 performance grows with size.','Exact numeric ceilings must be checked when implementing.'],examTip:'When capacity needs are small but IOPS needs are higher, gp3 avoids overprovisioning storage solely for performance.'
    },
    'Provisioned IOPS SSD: io1 and io2':{
      sourcePages:'104, 106, 108',summary:'Use Provisioned IOPS SSD for sustained, latency-sensitive database I/O, with io2 providing the stronger durability and IOPS-per-GiB figures in the deck.',
      explanation:['The slides position io1 and io2 for critical applications requiring sustained IOPS or more than 16,000 IOPS, especially databases sensitive to consistent storage performance. IOPS are provisioned independently from capacity.','The source edition lists distinct size, maximum IOPS, and IOPS-to-GiB ratios for io1 and io2 Block Express and states greater durability for io2. These values should be treated as slide-era specifications.'],
      slideTopics:[{heading:'Workload fit',bullets:['Critical business applications.','Sustained high-IOPS performance.','Database workloads sensitive to latency and consistency.']},{heading:'Provisioning model',bullets:['Choose storage capacity and IOPS independently.','io2 is presented with higher durability and stronger scaling.','All maxima in the slide require current verification before deployment.']}],
      takeaways:['io1/io2 provide Provisioned IOPS SSD.','They suit critical databases.','IOPS are selected independently of size.','io2 has the stronger source-deck characteristics.'],examTip:'Choose Provisioned IOPS when the scenario explicitly requires sustained, predictable high IOPS rather than inexpensive general-purpose storage.'
    },
    'Throughput Optimized and Cold HDD':{
      sourcePages:'104, 107–108',summary:'Distinguish frequently accessed sequential-throughput work on st1 from infrequently accessed lowest-cost data on sc1.',
      explanation:['The HDD types cannot be boot volumes and use the slide-era range of 125 GiB to 16 TiB. Throughput Optimized HDD (st1) targets big data, data warehouses, and log processing.','Cold HDD (sc1) targets infrequently accessed data for which low storage cost is the primary requirement. The throughput and IOPS maxima in the slide are edition-specific service figures.'],
      slideTopics:[{heading:'st1',bullets:['High-throughput HDD for frequent access.','Examples: big data, data warehousing, and log processing.','Optimizes sequential throughput rather than random IOPS.']},{heading:'sc1',bullets:['Lowest-cost HDD in the comparison.','Designed for infrequently accessed data.','Cannot be used as a boot volume.']}],
      takeaways:['st1 serves frequent sequential throughput.','sc1 serves cold, infrequent data.','Neither HDD family is a boot volume.','Numeric limits are slide-era values.'],examTip:'Choose st1 for active sequential workloads and sc1 when low cost matters more than frequent access.'
    },
    'EBS Multi-Attach':{
      sourcePages:'109, 116',summary:'Attach one io1/io2 volume to several EC2 instances in the same AZ only when the application provides clustered write coordination.',
      explanation:['Multi-Attach allows the same Provisioned IOPS EBS volume to attach to multiple EC2 instances in one Availability Zone. Each attached instance receives full read and write permissions.','The slides give higher application availability in clustered Linux applications, such as Teradata, as a use case and state a slide-era maximum of 16 instances. The application must manage concurrent writes; a cluster-aware file system is required.'],
      slideTopics:[{heading:'Attachment model',bullets:['Supported by io1/io2 family volumes in the deck.','All instances must be in the same AZ.','Each instance has read/write access.']},{heading:'Application responsibility',bullets:['Use a cluster-aware file system.','Coordinate concurrent writes in the application stack.','The slide states up to 16 attached instances.']}],
      takeaways:['Multi-Attach is same-AZ.','It uses Provisioned IOPS volume families.','Every attachment can read and write.','The application must coordinate shared writes.'],examTip:'Multi-Attach does not turn EBS into a general cross-AZ shared file system; EFS is the deck’s multi-AZ shared-file option.'
    },
    'Encrypt EBS volumes and snapshots':{
      sourcePages:'110–111',summary:'Follow the encryption inheritance and unencrypted-volume conversion workflow shown in the slides.',
      explanation:['An encrypted EBS volume encrypts data at rest, data in flight between the instance and volume, snapshots, and volumes created from those snapshots. The deck says encryption and decryption are handled transparently with minimal latency impact and use KMS keys.','To convert an unencrypted volume, create a snapshot, copy and encrypt the snapshot, create a new encrypted volume from it, and attach the new volume. This is a replacement workflow rather than an in-place toggle.'],
      slideTopics:[{heading:'Encryption coverage',bullets:['Volume data at rest.','Traffic between EC2 and EBS.','Snapshots of the volume.','Volumes restored from encrypted snapshots.']},{heading:'Convert an unencrypted volume',bullets:['Create an EBS snapshot.','Encrypt it during snapshot copy.','Create a new volume from the encrypted snapshot.','Attach the new encrypted volume.']}],
      takeaways:['EBS encryption covers rest and in-flight paths.','Snapshots inherit encryption.','Restored volumes inherit encrypted state.','Unencrypted volumes use snapshot-copy replacement.'],examTip:'To encrypt existing EBS data, choose snapshot, encrypted copy, and new-volume restoration.'
    },
    'Amazon EFS shared file storage':{
      sourcePages:'112–113, 117',summary:'Use EFS as managed NFSv4.1 shared Linux storage mounted concurrently by many EC2 instances across Availability Zones.',
      explanation:['Elastic File System is a managed network file system that can mount on many EC2 instances across multiple Availability Zones. The slides describe it as highly available, scalable, pay-per-use shared storage.','EFS uses NFSv4.1, controls network access with security groups, supports Linux/POSIX rather than Windows, and offers encryption at rest through KMS. Listed use cases are content management, web serving, data sharing, and WordPress.'],
      slideTopics:[{heading:'Shared file model',bullets:['Managed NFS mounted by many EC2 instances.','Works across multiple AZs.','Automatically scales and bills by use.']},{heading:'Compatibility and security',bullets:['Uses NFSv4.1 and Linux/POSIX semantics.','Security groups control access.','KMS supports encryption at rest.']}],
      takeaways:['EFS is shared network file storage.','Many Linux instances can mount it.','It works across AZs.','Security groups and KMS protect access and data.'],examTip:'Choose EFS when many Linux instances across AZs need the same POSIX file system.'
    },
    'EFS performance, lifecycle, and storage selection':{
      sourcePages:'114–117',summary:'Select EFS performance, throughput, storage tier, and availability options using the deck’s decision categories, then compare EFS with EBS.',
      explanation:['The deck describes General Purpose and Max I/O performance modes plus Bursting, Provisioned, and Elastic throughput. It highlights automatic petabyte-scale growth and thousands of concurrent NFS clients; numeric rates are slide-era examples.','Lifecycle management moves files among Standard, Infrequent Access, and Archive. Standard multi-AZ provides production availability; One Zone lowers price for development. Compared with EBS, EFS mounts hundreds of Linux instances across AZs but has a higher price point, while EBS is AZ-scoped block storage normally attached to one instance.'],
      slideTopics:[{heading:'Performance choices',bullets:['General Purpose targets latency-sensitive work.','Max I/O favors higher aggregate throughput and parallelism.','Bursting, Provisioned, and Elastic are throughput modes in the slide.']},{heading:'Storage and availability',bullets:['Standard, Infrequent Access, and Archive tiers.','Lifecycle policies move files after a configured age.','Standard uses multi-AZ; One Zone reduces cost.']},{heading:'EBS versus EFS',bullets:['EBS: AZ-scoped block device, usually one instance.','EFS: multi-AZ shared POSIX file system for many Linux instances.']}],
      takeaways:['Performance and throughput modes are separate choices.','Lifecycle tiers reduce cold-file cost.','One Zone trades resilience for price.','EFS and EBS solve different storage interfaces.'],examTip:'Start with the interface requirement: block device for one workload suggests EBS; shared POSIX files across AZs suggest EFS.'
    }
  };

  sectionSevenLectures.forEach(lecture=>Object.assign(lecture,sectionSevenSlideOverrides[lecture.title]||{}));

  const sectionEightSlideOverrides={
    'Scalability, elasticity, and high availability':{
      sourcePages:'118–123',summary:'Separate scale-up, scale-out, elasticity, and multi-AZ availability using the opening diagrams in the deck.',
      explanation:['Scalability is the ability to handle greater load by adapting. Vertical scaling changes instance size and is common for non-distributed systems such as databases; horizontal scaling changes the number of instances and is common for distributed web applications.','High availability means operating in at least two data centers or Availability Zones so service survives a location failure. Elasticity is the cloud-era ability to add capacity when demand rises and remove it when demand falls.'],
      slideTopics:[{heading:'Scaling directions',bullets:['Vertical: increase or decrease instance size.','Horizontal: add or remove instances.','Elasticity: scale with demand and release unused capacity.']},{heading:'High availability',bullets:['Run across at least two AZs in the EC2 model.','Often accompanies horizontal scaling.','Designs for continued service during location failure.']}],
      takeaways:['Vertical scaling changes size.','Horizontal scaling changes count.','Elasticity follows demand.','High availability spans isolated locations.'],examTip:'More capacity is scalability; surviving an AZ failure is high availability. A design may require both.'
    },
    'Elastic Load Balancing fundamentals':{
      sourcePages:'124–127, 129',summary:'Use a managed Elastic Load Balancer to expose one endpoint, distribute traffic, health-check targets, and isolate application security groups.',
      explanation:['A load balancer forwards incoming traffic to multiple downstream servers. The slides list traffic distribution, a single DNS access point, failure handling, health checks, SSL termination, cookie stickiness, and multi-AZ availability as benefits.','Elastic Load Balancing is managed by AWS for operation, upgrades, maintenance, and high availability. Health checks use a protocol, port, and route; an unhealthy response removes a target from serving traffic. Application instances can allow inbound traffic only from the load balancer security group.'],
      slideTopics:[{heading:'Load-balancer jobs',bullets:['Distribute traffic across targets.','Expose one DNS endpoint.','Health-check targets and avoid failed instances.','Support SSL termination and multi-AZ service.']},{heading:'Security pattern',bullets:['Users reach the load balancer.','Application security group accepts traffic only from the load balancer group.','Health checks test a configured port and path.']}],
      takeaways:['ELB is managed.','It distributes traffic and handles unhealthy targets.','Clients use a DNS endpoint.','Security-group references isolate the application tier.'],examTip:'If users must not reach EC2 directly, permit the application port only from the load balancer’s security group.'
    },
    'Choose an AWS load balancer':{
      sourcePages:'128–130, 137–141',summary:'Choose ALB for HTTP routing, NLB for high-performance TCP/UDP and static IPs, GWLB for appliances, and treat CLB as legacy.',
      explanation:['The overview names Classic, Application, Network, and Gateway Load Balancers. CLB is the old generation; ALB operates at Layer 7 for HTTP/HTTPS; NLB operates at Layer 4 for TCP, UDP, and TLS; GWLB operates at Layer 3 for IP packets.','The deck recommends newer-generation load balancers. ALB supplies content routing, NLB supplies ultra-low latency and one static IP per AZ, and GWLB inserts scalable third-party network appliances using GENEVE on port 6081.'],
      slideTopics:[{heading:'Web and transport',bullets:['ALB: Layer 7 HTTP/HTTPS application routing.','NLB: Layer 4 TCP/UDP/TLS and static IP per AZ.','CLB: legacy Layer 4/7 features.']},{heading:'Network appliances',bullets:['GWLB deploys and scales firewalls, IDS/IPS, and inspection appliances.','Operates at Layer 3.','Uses GENEVE on port 6081.']}],
      takeaways:['ALB understands HTTP.','NLB handles transport traffic and static IP needs.','GWLB inserts virtual appliances.','CLB is previous generation.'],examTip:'Match the required network layer and feature—HTTP routing, static high-performance transport, or appliance insertion—to the load balancer.'
    },
    'Application Load Balancer routing':{
      sourcePages:'131–133, 135',summary:'Route Layer 7 requests to different target groups using URL paths, hostnames, query strings, headers, methods, and source IP.',
      explanation:['ALB is an HTTP Layer 7 load balancer that can serve multiple applications and ports through target groups. The slides show path routing such as /users and /posts and hostname routing such as one.example.com and other.example.com.','Additional rules can inspect query strings, headers, HTTP methods, and source IP. This makes one ALB suitable for microservices and container applications instead of deploying one load balancer per service.'],
      slideTopics:[{heading:'HTTP routing inputs',bullets:['URL path.','Hostname.','Query string and HTTP headers.','HTTP method and source IP.']},{heading:'Architecture result',bullets:['Send each rule to a target group.','Run multiple applications behind one ALB.','Route to different ports or machines.']}],
      takeaways:['ALB is Layer 7.','Rules inspect HTTP request context.','Target groups separate applications.','One ALB can front many services.'],examTip:'Choose ALB when a scenario routes /api and /images, multiple hostnames, or request headers to different backends.'
    },
    'ALB target groups and client context':{
      sourcePages:'133–136',summary:'Use ALB target groups for EC2, ECS, Lambda, or private IP targets and recover client context from forwarded headers.',
      explanation:['The target-group slide lists EC2 instances, ECS tasks, Lambda functions, and private IP addresses, including on-premises servers. Health checks run at the target-group level.','An ALB has a fixed DNS hostname but its nodes do not expose one fixed client-facing IP. Application servers receive the original client IP through X-Forwarded-For, with X-Forwarded-Port and X-Forwarded-Proto carrying additional client request context.'],
      slideTopics:[{heading:'Target types',bullets:['EC2 instances, optionally managed by an ASG.','ECS tasks.','Lambda functions translated from HTTP into JSON events.','Private IP addresses, including on-premises targets.']},{heading:'Forwarded context',bullets:['X-Forwarded-For carries client IP.','X-Forwarded-Port carries original port.','X-Forwarded-Proto carries original protocol.']}],
      takeaways:['ALB supports several target types.','Target groups own health checks.','ALB uses a DNS hostname.','Forwarded headers preserve original client context.'],examTip:'If an application behind an ALB needs the caller’s IP, read X-Forwarded-For rather than the immediate connection source.'
    },
    'Network Load Balancer':{
      sourcePages:'137–139',summary:'Use NLB for massive, ultra-low-latency Layer 4 traffic, static per-AZ IPs, and TCP/UDP/TLS workloads.',
      explanation:['The NLB slide describes Layer 4 forwarding of TCP and UDP, millions of requests per second, and ultra-low latency. Each enabled AZ receives one static IP, and an Elastic IP can be assigned for a fixed address requirement.','NLB target groups can contain EC2 instances, private IP addresses, or an ALB. Health checks can use TCP, HTTP, or HTTPS. The source deck labels NLB availability within its Free Tier-era context; pricing claims should be treated as dated.'],
      slideTopics:[{heading:'NLB properties',bullets:['Layer 4 TCP and UDP forwarding.','Very high request rates and ultra-low latency.','One static IP per AZ with optional Elastic IP.']},{heading:'Targets and health',bullets:['EC2 instances.','Private IP addresses.','Application Load Balancer.','TCP, HTTP, or HTTPS health checks.']}],
      takeaways:['NLB is Layer 4.','It supports static per-AZ addressing.','It prioritizes throughput and latency.','It can target an ALB.'],examTip:'A fixed IP or extreme TCP/UDP performance requirement points to NLB, not ALB.'
    },
    'Gateway Load Balancer':{
      sourcePages:'140–141',summary:'Insert, scale, and health-check third-party network virtual appliances transparently with GWLB endpoints and GENEVE.',
      explanation:['Gateway Load Balancer deploys and manages fleets of virtual network appliances such as firewalls, intrusion detection/prevention systems, and deep packet inspection systems. It combines a transparent network gateway with load balancing.','GWLB operates at Layer 3 and uses the GENEVE protocol on port 6081. Its target groups contain EC2 instances or private IP addresses representing the appliances.'],
      slideTopics:[{heading:'Appliance use cases',bullets:['Firewalls.','Intrusion detection and prevention.','Deep packet inspection.','Payload manipulation.']},{heading:'Traffic model',bullets:['Layer 3 IP packet handling.','GWLB endpoints route traffic into the service.','GENEVE protocol uses port 6081.','Targets are instances or private IPs.']}],
      takeaways:['GWLB serves virtual appliances.','It combines gateway and balancing functions.','It operates at Layer 3.','GENEVE uses port 6081.'],examTip:'Choose GWLB when traffic must pass transparently through a scalable fleet of third-party inspection appliances.'
    },
    'Sticky sessions and application state':{
      sourcePages:'142–143',summary:'Use cookies to keep one client on one target, while recognizing the load imbalance and state-management tradeoff.',
      explanation:['Session affinity redirects the same client to the same instance behind a CLB, ALB, or NLB, using a cookie with an expiration. It can preserve server-local session state but may create uneven load.','Application-based cookies may be custom target-generated cookies or ALB-generated application cookies. Duration-based cookies are generated by the load balancer. The deck lists reserved AWS cookie names that custom applications must not use.'],
      slideTopics:[{heading:'Stickiness behavior',bullets:['Same client returns to the same backend instance.','A cookie carries affinity for a configured lifetime.','Uneven client activity can unbalance targets.']},{heading:'Cookie categories',bullets:['Custom application cookie from the target.','Application cookie generated by ALB.','Duration cookie generated by the load balancer.']}],
      takeaways:['Stickiness creates client affinity.','It relies on cookies.','It can preserve local session state.','It can reduce even load distribution.'],examTip:'Prefer external shared session state for elasticity; enable stickiness only when affinity is an explicit requirement.'
    },
    'Cross-zone load balancing':{
      sourcePages:'144–145',summary:'Distinguish distributing evenly across all registered targets from distributing first by Availability Zone.',
      explanation:['With cross-zone load balancing enabled, every load-balancer node spreads its share across all registered targets in all enabled AZs. Without it, each node distributes only among targets in its own AZ, so uneven target counts create uneven per-target load.','The source slide says ALB has cross-zone enabled by default at no inter-AZ charge and can disable it at target-group level; NLB and GWLB default it off and incur inter-AZ charges when enabled. Treat pricing details as deck-era information.'],
      slideTopics:[{heading:'Traffic distribution',bullets:['Enabled: each node balances across targets in every enabled AZ.','Disabled: each node balances only inside its own AZ.','Target imbalance by AZ matters when disabled.']},{heading:'Deck defaults',bullets:['ALB: enabled by default.','NLB and GWLB: disabled by default.','Inter-AZ pricing statements reflect the source edition.']}],
      takeaways:['Cross-zone balances across all enabled-AZ targets.','Disabled mode is AZ-local.','ALB and NLB/GWLB have different defaults in the deck.','Cross-AZ charges depend on load-balancer type and era.'],examTip:'When targets are unevenly distributed across AZs, cross-zone balancing evens load per target.'
    },
    'TLS termination, ACM, and SNI':{
      sourcePages:'146–149',summary:'Terminate encrypted client connections at the load balancer, manage X.509 certificates, and use SNI for multiple hostnames.',
      explanation:['An SSL/TLS certificate encrypts traffic in flight and has an expiration date. The load balancer uses an X.509 server certificate, which can come from AWS Certificate Manager or be uploaded; an HTTPS listener requires a default certificate and can add others.','Server Name Indication lets the client name the requested hostname during the TLS handshake so one endpoint can choose among multiple certificates. The deck says ALB and NLB support multiple certificates through SNI, while CLB supports only one.'],
      slideTopics:[{heading:'TLS termination',bullets:['Client-to-load-balancer traffic is encrypted in transit.','The load balancer presents an X.509 certificate.','ACM can manage certificate creation and renewal.']},{heading:'SNI',bullets:['Client sends target hostname in the initial TLS handshake.','Endpoint selects the matching certificate.','ALB/NLB support multiple SNI certificates; CLB does not in the deck.']}],
      takeaways:['TLS encrypts in-flight traffic.','HTTPS listeners require certificates.','ACM manages AWS certificates.','SNI enables multiple hostname certificates on one listener.'],examTip:'For multiple HTTPS domains behind one modern load balancer, use SNI with ALB or NLB.'
    },
    'Deregistration delay and connection draining':{
      sourcePages:'150',summary:'Let in-flight requests complete while a target is being removed, then stop sending it new work.',
      explanation:['Connection Draining is the CLB name; Deregistration Delay is the ALB/NLB name. During the configured period, the load balancer allows existing requests to finish while the target is deregistering or unhealthy.','New requests go to other targets. The slide gives a 1–3,600 second configurable range and 300-second default, recommends a low value for short requests, and says it can be disabled with zero; these are source-era settings.'],
      slideTopics:[{heading:'Drain behavior',bullets:['Existing in-flight work gets time to finish.','No new requests are routed to the draining target.','Applies during deregistration or unhealthy removal.']},{heading:'Deck settings',bullets:['CLB calls it Connection Draining.','ALB/NLB call it Deregistration Delay.','Default and range values are slide-era service settings.']}],
      takeaways:['Draining protects in-flight requests.','New traffic moves elsewhere.','Feature naming differs by generation.','Timeout should match request duration.'],examTip:'Increase the delay for long-running requests; reduce it for short requests when fast replacement matters.'
    },
    'Auto Scaling Group fundamentals':{
      sourcePages:'151–152',summary:'Maintain an EC2 fleet between minimum, desired, and maximum capacity while adapting to changing demand.',
      explanation:['An Auto Scaling Group adds instances as load increases and removes them as load decreases. Its purpose is to keep capacity aligned with demand and replace unhealthy instances.','The diagram defines minimum capacity, desired capacity, and maximum capacity and places instances across Availability Zones. The desired number moves within the configured boundaries.'],
      slideTopics:[{heading:'ASG jobs',bullets:['Scale out by adding EC2 instances.','Scale in by removing EC2 instances.','Keep a configured minimum/desired fleet healthy.']},{heading:'Capacity boundaries',bullets:['Minimum sets the floor.','Desired is the current target count.','Maximum sets the ceiling.','Instances can span AZs.']}],
      takeaways:['ASG manages instance count.','Desired capacity stays within min/max.','Scale out adds; scale in removes.','Multi-AZ placement supports availability.'],examTip:'An ASG provides elasticity and instance replacement; a load balancer provides traffic distribution.'
    },
    'Launch templates and load-balancer integration':{
      sourcePages:'153–154',summary:'Define repeatable instance launch settings in a launch template and register the resulting fleet with a load balancer.',
      explanation:['The ASG launch template contains the AMI, instance type, user data, EBS volumes, security groups, SSH key pair, IAM roles, network and subnet settings, and load-balancer information. Launch configurations are labeled deprecated.','An ASG can register instances with a load balancer and use ELB health checks. The slides also note scaling policies and automatic registration of new instances.'],
      slideTopics:[{heading:'Launch template contents',bullets:['AMI and instance type.','User data and EBS volumes.','Security groups and SSH key pair.','IAM role, network, and subnet settings.']},{heading:'ELB integration',bullets:['Register fleet instances behind an ELB.','ELB distributes user traffic.','Health checks can influence replacement.','New instances join the load-balanced fleet.']}],
      takeaways:['Launch templates define new instance configuration.','Launch configurations are deprecated in the deck.','ASG and ELB integrate.','New fleet members can register automatically.'],examTip:'A launch template defines what to launch; the ASG defines how many and where; ELB defines how requests reach them.'
    },
    'ASG health checks and instance replacement':{
      sourcePages:'151–155',summary:'Use EC2 or ELB health information so the ASG maintains desired healthy capacity and replaces failed instances.',
      explanation:['The ASG overview states that unhealthy instances are replaced. EC2 status and, when configured, load-balancer health checks indicate whether an instance should remain in service.','When a failed instance leaves, the group launches a replacement from the launch template to return to desired capacity. A load balancer independently stops routing to unhealthy targets while the replacement workflow proceeds.'],
      slideTopics:[{heading:'Detection',bullets:['EC2 health checks report instance-level status.','ELB health checks test the serving port and route.','Unhealthy targets stop receiving user traffic.']},{heading:'Replacement',bullets:['ASG terminates unhealthy capacity when configured.','Launch template creates a replacement.','The group returns to desired capacity.']}],
      takeaways:['Health checks protect serving capacity.','ELB routing and ASG replacement are related but distinct.','Replacement uses the launch template.','Desired capacity drives recovery.'],examTip:'Enable ELB health checks when application endpoint health, not merely EC2 host status, should trigger replacement.'
    },
    'Target tracking scaling':{
      sourcePages:'155–156',summary:'Choose a target metric value and let the ASG add or remove capacity to keep the fleet near it.',
      explanation:['CloudWatch alarms can trigger ASG scaling when a monitored metric crosses a condition. Target tracking simplifies this by declaring the desired fleet-wide value.','The slide example keeps average ASG CPU around 40%. The ASG scales out when load raises the metric and scales in when capacity is excessive, subject to cooldown and boundaries.'],
      slideTopics:[{heading:'Control loop',bullets:['Monitor an ASG metric in CloudWatch.','Set the desired target value.','Scale capacity to bring the metric toward the target.']},{heading:'Slide example',bullets:['Average ASG CPU target: 40%.','Scale out when demand pushes utilization up.','Scale in when less capacity is needed.']}],
      takeaways:['Target tracking is metric-goal based.','CloudWatch supplies the measurement.','ASG adjusts instance count.','The policy respects min and max capacity.'],examTip:'Choose target tracking when the requirement states a metric value to maintain, such as average CPU or requests per target.'
    },
    'Step, scheduled, and predictive scaling':{
      sourcePages:'155–157',summary:'Match reactive alarm steps, known schedules, and forecast-ahead capacity to their workload patterns.',
      explanation:['Simple or step scaling reacts to CloudWatch alarms. Step scaling can apply different capacity changes for different alarm severity ranges.','Scheduled actions fit known patterns, such as raising minimum capacity before a weekly event. Predictive scaling continuously forecasts load and schedules capacity before the forecasted demand arrives.'],
      slideTopics:[{heading:'Reactive policies',bullets:['Simple scaling responds to an alarm action.','Step scaling changes capacity by alarm magnitude.','Both react after the monitored signal changes.']},{heading:'Proactive policies',bullets:['Scheduled actions follow known times.','Predictive scaling forecasts load.','Predictive capacity is scheduled ahead of expected demand.']}],
      takeaways:['Step scaling reacts by severity.','Scheduled scaling follows known timing.','Predictive scaling forecasts recurring load.','Policy choice depends on demand predictability.'],examTip:'Use scheduled actions for a fixed business calendar and predictive scaling for repeating demand learned from history.'
    },
    'Scaling metrics, cooldowns, and architecture review':{
      sourcePages:'158–159',summary:'Scale on a metric that tracks the real bottleneck and let newly launched capacity stabilize during cooldown.',
      explanation:['The good-metrics slide lists average CPUUtilization, RequestCountPerTarget, average network input/output, and custom CloudWatch metrics. A useful scaling metric changes proportionally with demand and improves when capacity is added.','After a scaling action, cooldown prevents another action while metrics stabilize; the slide states a 300-second default and recommends a ready-to-serve AMI to reduce cooldown. A scaling-specific cooldown can override the default.'],
      slideTopics:[{heading:'Metrics listed',bullets:['Average CPUUtilization.','RequestCountPerTarget.','Average network input/output.','Custom CloudWatch metric.']},{heading:'Cooldown',bullets:['Waits after a scaling activity.','Allows metrics and new instances to stabilize.','A preconfigured AMI shortens readiness time.','The 300-second default is a source-era setting.']}],
      takeaways:['Scale on the workload bottleneck.','CloudWatch metrics drive policies.','Cooldown prevents rapid repeated actions.','Faster instance readiness improves scaling response.'],examTip:'Use RequestCountPerTarget for request-driven fleets when CPU does not reliably represent demand.'
    }
  };

  sectionEightLectures.forEach(lecture=>Object.assign(lecture,sectionEightSlideOverrides[lecture.title]||{}));

  const sectionNineSlideOverrides={
    'Amazon RDS managed relational databases':{
      sourcePages:'160–162',summary:'Use RDS for managed SQL engines when AWS should operate the database infrastructure rather than the customer managing it on EC2.',
      explanation:['Relational Database Service is a managed SQL database service supporting PostgreSQL, MySQL, MariaDB, Oracle, Microsoft SQL Server, IBM Db2, and Aurora in the supplied deck.','Compared with a database on EC2, RDS automates provisioning, OS patching, backups, point-in-time restore, monitoring, read replicas, Multi-AZ disaster recovery, maintenance, and scaling. The tradeoff is that the customer cannot SSH into the managed host.'],
      slideTopics:[{heading:'Engines listed',bullets:['PostgreSQL, MySQL, and MariaDB.','Oracle, Microsoft SQL Server, and IBM Db2.','Amazon Aurora.']},{heading:'Managed benefits',bullets:['Provisioning and OS patching.','Backups and point-in-time restore.','Monitoring, read replicas, and Multi-AZ.','No SSH access to the underlying host.']}],
      takeaways:['RDS manages relational engines.','AWS operates the database host layer.','Managed features reduce administration.','Host SSH is unavailable.'],examTip:'Choose RDS when the requirement favors managed operations; choose EC2 only when host-level database control is essential.'
    },
    'RDS storage scaling and backup foundations':{
      sourcePages:'163, 180',summary:'Let RDS grow storage toward a configured maximum and use automated backups plus transaction logs for point-in-time recovery.',
      explanation:['Storage Auto Scaling increases allocated RDS storage as free space becomes low. The customer sets a maximum storage threshold; the slide lists low free space, sustained low storage, and a time since the last modification as scaling triggers.','Automated backups take a daily full backup and save transaction logs every five minutes, producing point-in-time recovery down to the oldest backup in the retention window. Manual snapshots persist until explicitly deleted. Numeric timing and retention ranges are source-era settings.'],
      slideTopics:[{heading:'Storage Auto Scaling',bullets:['Set a maximum storage threshold.','RDS expands capacity when free space is low.','Supports unpredictable database growth without manual resizing.']},{heading:'Backup foundations',bullets:['Daily automated full backup.','Transaction logs backed up every five minutes in the slide.','Automated retention is time-bound; manual snapshots remain until deleted.']}],
      takeaways:['Storage Auto Scaling grows allocated storage.','Maximum threshold controls growth.','Automated backups support point-in-time restore.','Manual snapshots have independent retention.'],examTip:'Use storage auto scaling for unpredictable growth and backups/snapshots for recovery; they solve different problems.'
    },
    'RDS read replicas':{
      sourcePages:'164–166',summary:'Scale reads asynchronously with up to the deck’s stated replica count, including cross-AZ and cross-Region topologies.',
      explanation:['RDS read replicas receive asynchronous replication from the primary database and can serve read-only application traffic. The slides show up to 15 replicas and support same-AZ, cross-AZ, and cross-Region placement; the count is source-era information.','A reporting workload can read from a replica without overloading production. Applications must update their connection configuration to use replicas. Cross-AZ replication is described as free, while cross-Region replication incurs transfer charges.'],
      slideTopics:[{heading:'Read scaling',bullets:['Asynchronous replication from the primary.','Replicas serve read traffic.','Replicas may themselves be promoted.','Applications must connect to the read-replica endpoints.']},{heading:'Placement and cost',bullets:['Same AZ, cross AZ, or cross Region.','Cross-Region replication supports geographic use cases.','Replica count and transfer pricing reflect the source deck.']}],
      takeaways:['Read replicas scale reads.','Replication is asynchronous.','Applications must route reads to replicas.','Cross-Region transfer can cost money.'],examTip:'Use read replicas for read scaling; do not confuse them with the synchronous standby used by Multi-AZ.'
    },
    'RDS Multi-AZ high availability':{
      sourcePages:'167–168',summary:'Use synchronous standby replication and one failover DNS name for disaster recovery, not read scaling.',
      explanation:['RDS Multi-AZ synchronously replicates the primary database to a standby in another Availability Zone. The application uses one DNS name, and RDS automatically fails over after primary loss, AZ loss, instance-type change, or software patching.','The standby is not a read-scaling target. Converting Single-AZ to Multi-AZ is described as a zero-downtime modification in which RDS snapshots the primary, restores the standby in another AZ, and establishes synchronization.'],
      slideTopics:[{heading:'Multi-AZ behavior',bullets:['Synchronous standby in another AZ.','One DNS endpoint with automatic failover.','Raises availability; does not serve reads.']},{heading:'Conversion flow',bullets:['Modify the database to enable Multi-AZ.','RDS snapshots and restores a standby.','Synchronization is established without stopping the database.']}],
      takeaways:['Multi-AZ is for high availability.','Replication is synchronous.','Failover uses one DNS name.','The standby does not scale reads.'],examTip:'Read replica means performance; Multi-AZ standby means availability and disaster recovery.'
    },
    'RDS Custom for host-level control':{
      sourcePages:'169',summary:'Use RDS Custom for managed Oracle or SQL Server when the database or operating system must be customized.',
      explanation:['RDS Custom is presented for Oracle and Microsoft SQL Server databases that need OS or database customization. It provides access to the underlying database and operating system.','Standard RDS automates setup, operations, and scaling, while RDS Custom gives the customer additional configuration responsibility. The slide explicitly requires disabling automation mode before making customizations.'],
      slideTopics:[{heading:'RDS Custom scope',bullets:['Oracle and Microsoft SQL Server in the supplied deck.','Access to underlying OS and database.','Supports legacy, packaged, or customization-dependent applications.']},{heading:'Operational tradeoff',bullets:['Standard RDS automates more of the platform.','Custom access adds customer responsibility.','Disable automation mode before customization.']}],
      takeaways:['RDS Custom provides host-level access.','The deck limits it to Oracle and SQL Server.','It fits customization-dependent applications.','Greater control reduces managed automation.'],examTip:'Choose RDS Custom when the scenario requires OS-level database changes but still wants an RDS-based service.'
    },
    'Aurora cluster architecture and endpoints':{
      sourcePages:'170–173',summary:'Use Aurora’s distributed six-copy storage, one writer, multiple readers, and separate writer/reader endpoints.',
      explanation:['Aurora is an AWS proprietary database compatible with PostgreSQL and MySQL drivers. The deck describes cloud-optimized performance, storage that grows automatically, and up to 15 read replicas with rapid failover.','Data is stored as six copies across three AZs, with four copies needed for writes and three for reads in the slide. A writer endpoint connects to the primary; a reader endpoint balances read connections across replicas. Numeric capacity and performance claims are source-era facts.'],
      slideTopics:[{heading:'Storage and availability',bullets:['Six data copies across three AZs.','Slide quorum: four copies for writes, three for reads.','Self-healing storage with peer-to-peer repair.']},{heading:'Cluster endpoints',bullets:['Writer endpoint targets the primary instance.','Reader endpoint balances across Aurora replicas.','Shared storage grows automatically in the deck’s range.']}],
      takeaways:['Aurora supports MySQL/PostgreSQL compatibility.','Storage is distributed across three AZs.','Writer and reader endpoints have distinct roles.','Readers provide both scaling and failover capacity.'],examTip:'Send writes to the writer endpoint and read-only traffic to the reader endpoint.'
    },
    'Aurora replicas, custom endpoints, and Serverless':{
      sourcePages:'174–176',summary:'Scale reader capacity, isolate special replica groups with custom endpoints, or use Aurora Serverless for unpredictable and intermittent demand.',
      explanation:['Aurora Replica Auto Scaling changes the number of readers as load rises or falls, while the reader endpoint distributes connections. A custom endpoint represents a selected subset of instances, such as larger replicas reserved for analytics.','Aurora Serverless automatically instantiates and scales database capacity based on demand through a managed proxy fleet. The slide fits it to infrequent, intermittent, or unpredictable workloads and bills per second of use.'],
      slideTopics:[{heading:'Replica routing',bullets:['Auto Scaling adds/removes Aurora readers.','Reader endpoint balances general read connections.','Custom endpoint isolates a selected replica subset.']},{heading:'Aurora Serverless',bullets:['Automated instantiation and demand-based scaling.','Managed proxy fleet connects clients to capacity.','Fits intermittent, unpredictable, or infrequent workloads.']}],
      takeaways:['Aurora can autoscale readers.','Custom endpoints isolate workload classes.','Serverless adjusts database capacity.','Reader endpoints and custom endpoints serve different routing needs.'],examTip:'Use a custom endpoint to keep analytics on selected replicas; use Serverless when demand itself is highly variable.'
    },
    'Aurora global and specialized capabilities':{
      sourcePages:'177–179',summary:'Cover cross-Region replicas, Aurora Global Database, Aurora Machine Learning, and Babelfish exactly as the specialized slides present them.',
      explanation:['Aurora cross-Region read replicas support disaster recovery. Aurora Global Database uses one primary Region and up to five read-only secondary Regions in the deck, with low-latency replication and managed promotion for recovery; all counts and timings are source-era values.','Aurora Machine Learning invokes SageMaker or Comprehend predictions through SQL. Babelfish lets Aurora PostgreSQL understand Microsoft SQL Server-oriented T-SQL, reducing migration code changes.'],
      slideTopics:[{heading:'Global deployment',bullets:['Cross-Region replicas support DR.','Global Database has one write Region and read-only secondary Regions.','Secondary promotion supports regional recovery.']},{heading:'Specialized integrations',bullets:['Aurora ML integrates SageMaker and Comprehend predictions with SQL.','Babelfish interprets T-SQL for SQL Server migrations to Aurora PostgreSQL.']}],
      takeaways:['Global Database serves global reads and regional DR.','Only the primary Region writes in the slide model.','Aurora ML exposes predictions through SQL.','Babelfish eases SQL Server migration.'],examTip:'Choose Global Database for globally distributed Aurora reads and low-RPO cross-Region recovery.'
    },
    'RDS and Aurora restore and cloning options':{
      sourcePages:'180–183',summary:'Restore backups into new databases, restore MySQL or PostgreSQL data from S3, or clone Aurora quickly with copy-on-write.',
      explanation:['Restoring an RDS or Aurora backup or snapshot creates a new database rather than overwriting the source. The slides also show restoring MySQL from Percona XtraBackup in S3 and PostgreSQL from pgBackRest in S3.','Aurora automated backups cannot be disabled in the deck, while manual snapshots persist until deletion. Aurora Database Cloning is faster than snapshot/restore because it begins with shared storage and uses copy-on-write as source and clone diverge.'],
      slideTopics:[{heading:'Restore options',bullets:['Backup or snapshot restore creates a new database.','MySQL backups can be imported from S3.','PostgreSQL backups can be imported from S3.']},{heading:'Aurora cloning',bullets:['Creates a new Aurora cluster from an existing one.','Uses copy-on-write.','Begins with shared storage and allocates new pages as data changes.']}],
      takeaways:['Restore creates a new DB.','Manual snapshots persist until deleted.','S3-based engine restore paths exist in the deck.','Aurora clone is faster than full copy restoration.'],examTip:'Use Aurora cloning for rapid test/dev copies; use backups and snapshots for retained recovery points.'
    },
    'RDS and Aurora security':{
      sourcePages:'184',summary:'Protect managed databases with KMS at rest, TLS in flight, IAM authentication where supported, security groups, and disabled SSH access.',
      explanation:['The security slide states that master and replica encryption uses KMS and must be chosen at launch; if the master is unencrypted, its read replicas cannot be encrypted in that model. TLS protects client connections in flight.','IAM authentication can replace a password for supported engines, while security groups control network access. RDS does not provide SSH access except via RDS Custom, and audit logs can be sent to CloudWatch Logs for longer retention.'],
      slideTopics:[{heading:'Encryption and authentication',bullets:['KMS protects database and replica data at rest.','TLS protects data in flight.','IAM authentication is available for supported access patterns.']},{heading:'Network and audit',bullets:['Security groups control reachability.','No SSH to standard managed hosts.','Audit logs can be exported to CloudWatch Logs.']}],
      takeaways:['KMS encrypts at rest.','TLS encrypts in flight.','Security groups restrict network access.','RDS Custom is the host-access exception.'],examTip:'Encryption, authentication, and network reachability are separate controls; secure designs usually need all three.'
    },
    'Amazon RDS Proxy':{
      sourcePages:'185',summary:'Pool and share database connections through a managed, highly available proxy to reduce failover time and connection pressure.',
      explanation:['RDS Proxy lets applications pool and share established database connections, reducing CPU, RAM, and open-connection stress on RDS. It is serverless, automatically scaling, highly available across AZs, and does not require application code changes in the slide model.','The slide says failover time can be reduced by up to 66%, credentials are stored in Secrets Manager, and IAM authentication can be enforced. The proxy is not publicly accessible and supports RDS MySQL, PostgreSQL, MariaDB, SQL Server, and Aurora in the source edition.'],
      slideTopics:[{heading:'Connection management',bullets:['Pools and shares database connections.','Reduces database resource pressure.','Automatically scales and spans AZs.']},{heading:'Security and failover',bullets:['Integrates with Secrets Manager.','Can enforce IAM authentication.','Not publicly accessible.','Failover improvement percentage is a source-era claim.']}],
      takeaways:['RDS Proxy pools connections.','It improves database efficiency and resilience.','Secrets Manager stores credentials.','The proxy remains private.'],examTip:'Choose RDS Proxy for Lambda or other highly concurrent clients that can exhaust database connections.'
    },
    'ElastiCache architecture and common uses':{
      sourcePages:'186–188',summary:'Use managed Redis or Memcached to place frequently used data and user sessions in memory, while planning invalidation carefully.',
      explanation:['ElastiCache is the managed Redis or Memcached counterpart to managed relational RDS. In-memory caches deliver very high performance and low latency while AWS manages operating-system maintenance, patching, setup, monitoring, recovery, and backups.','The database-cache pattern checks ElastiCache first, reads RDS on a miss, and stores the result in cache. The session-store pattern writes user session data into ElastiCache so any application instance can load the shared session.'],
      slideTopics:[{heading:'Database cache',bullets:['Application reads cache first.','On a miss, retrieve from RDS and populate cache.','Relieves repeated load on the relational database.','Requires an invalidation strategy.']},{heading:'Session store',bullets:['Any application instance writes session state to ElastiCache.','Another instance can retrieve the same session.','Supports a horizontally scaled stateless application tier.']}],
      takeaways:['ElastiCache manages Redis or Memcached.','Caching reduces database load.','Shared sessions support multiple app instances.','Invalidation is an application design responsibility.'],examTip:'Use ElastiCache for microsecond/low-latency repeated reads or shared sessions, not as a transparent replacement for the system of record.'
    },
    'Redis, Memcached, and cache security':{
      sourcePages:'189–190',summary:'Compare Redis high-availability and durability features with Memcached sharding and multithreading, then apply the deck’s cache-security controls.',
      explanation:['The deck gives Redis Multi-AZ auto failover, read replicas, AOF persistence, backup/restore, and sets/sorted sets. Memcached uses multi-node sharding, no high availability or replication, a nonpersistent cache, no backup/restore, and multithreaded architecture.','ElastiCache IAM policies protect AWS API actions; Redis supports IAM authentication in the source deck. Redis AUTH can require a password/token, SSL in-flight encryption is supported, and security groups provide network security.'],
      slideTopics:[{heading:'Redis versus Memcached',bullets:['Redis: replicas, Multi-AZ failover, durability features, sets/sorted sets.','Memcached: sharding, multiple nodes, multithreading, no persistence or backup.']},{heading:'Security',bullets:['IAM controls service API actions.','Redis AUTH or IAM authentication controls data access where supported.','TLS and security groups protect transport and reachability.']}],
      takeaways:['Redis offers richer HA and persistence.','Memcached favors simple multithreaded sharding.','IAM service control differs from cache data authentication.','TLS and security groups protect access paths.'],examTip:'Choose Redis when replicas, failover, persistence, or sorted sets are required; choose Memcached for a simple distributed multithreaded cache.'
    },
    'Caching patterns and Redis decision rules':{
      sourcePages:'187–192',summary:'Choose Lazy Loading, Write Through, and TTL combinations from consistency and access-pattern requirements, and use Redis sorted sets for leaderboards.',
      explanation:['Lazy Loading places read data in cache only after a miss, so unused data is not cached but values may become stale. Write Through updates cache when the database changes, improving freshness while potentially caching data that is never read.','TTL expires cached entries after a selected duration and can complement either strategy. The Redis use-case slide maps gaming leaderboards to sorted sets, which enforce uniqueness and ordering while updating an element’s score.'],
      slideTopics:[{heading:'Cache patterns',bullets:['Lazy Loading: cache after a read miss; stale data is possible.','Write Through: update cache with database writes.','TTL: expire entries to limit staleness and storage.']},{heading:'Redis sorted sets',bullets:['Maintain unique ordered members.','Update a member’s score as rank changes.','Fits gaming leaderboards.']}],
      takeaways:['Lazy Loading avoids caching unread data.','Write Through improves cache freshness.','TTL controls entry lifetime.','Sorted sets fit ranked unique data.'],examTip:'No single cache pattern is universal; combine Lazy Loading or Write Through with a TTL that matches tolerated staleness.'
    }
  };

  sectionNineLectures.forEach(lecture=>Object.assign(lecture,sectionNineSlideOverrides[lecture.title]||{}));

  const sectionTenSlideOverrides={
    'DNS hierarchy and name resolution':{
      sourcePages:'194–196',summary:'Follow a DNS query from a browser through a local resolver, root servers, a TLD server, and an authoritative server until a hostname becomes an IP address.',
      explanation:['The Domain Name System translates human-friendly hostnames such as www.google.com into machine IP addresses. The deck calls DNS the backbone of the internet and introduces registrar, record, zone file, name server, TLD, second-level domain, subdomain, FQDN, protocol, and URL terminology.','In the resolution diagram, a browser asks its local DNS resolver. On a cache miss, that resolver follows referrals from a root server to the .com TLD server and then the authoritative server for example.com before returning the record to the client.'],
      slideTopics:[{heading:'DNS vocabulary',bullets:['Registrar sells or registers the domain.','A zone file contains DNS records.','Name servers answer DNS queries.','FQDN identifies the complete hostname.']},{heading:'Resolution path',bullets:['Browser asks a local DNS resolver.','Resolver consults root, then TLD, then authoritative servers.','The authoritative answer is returned and cached.']}],
      takeaways:['DNS maps names to addresses.','Resolution is hierarchical.','Authoritative servers own the record answer.','Resolvers cache answers.'],examTip:'A registrar owns the registration workflow; an authoritative DNS service hosts the records. They can be different providers.'
    },
    'Route 53 records and core record types':{
      sourcePages:'197–199',summary:'Define Route 53 as managed authoritative DNS and construct records from name, type, value, routing policy, and TTL.',
      explanation:['Route 53 is a highly available, scalable, fully managed authoritative DNS service and domain registrar. The name refers to the traditional DNS port, 53, and the service can perform resource health checks.','Each record has a domain or subdomain name, record type, value, routing policy, and TTL. The core types shown are A for IPv4, AAAA for IPv6, CNAME for another hostname, and NS for the hosted zone’s authoritative name servers.'],
      slideTopics:[{heading:'Record components',bullets:['Name.','Type.','Value.','Routing policy.','TTL.']},{heading:'Core record types',bullets:['A maps a hostname to IPv4.','AAAA maps a hostname to IPv6.','CNAME maps a hostname to another hostname.','NS lists authoritative name servers.']}],
      takeaways:['Route 53 is authoritative managed DNS.','Records combine identity, value, policy, and TTL.','A and AAAA map to IP versions.','NS delegates authoritative service.'],examTip:'Choose A for IPv4, AAAA for IPv6, and CNAME only where a hostname-to-hostname mapping is valid.'
    },
    'Public and private hosted zones':{
      sourcePages:'200–201',summary:'Use a public hosted zone for internet DNS and a private hosted zone for DNS visible only inside associated VPCs.',
      explanation:['A hosted zone is the container of records for a domain and its subdomains. Public hosted zones answer how traffic reaches resources from the internet.','Private hosted zones answer how traffic reaches resources inside one or more VPCs. The diagrams contrast internet clients resolving public EC2, load balancer, S3 website, or CloudFront targets with VPC clients resolving private EC2 addresses.'],
      slideTopics:[{heading:'Public hosted zone',bullets:['Answers public internet DNS queries.','Contains records for internet-facing resources.','Examples include public EC2, ALB, S3 website, and CloudFront.']},{heading:'Private hosted zone',bullets:['Answers inside associated VPCs.','Maps internal names to private resources.','Not exposed as public internet DNS.']}],
      takeaways:['Hosted zones contain domain records.','Public zones serve internet resolution.','Private zones serve VPC resolution.','The same naming model can have different visibility.'],examTip:'Use a private hosted zone for internal service discovery that must not resolve publicly.'
    },
    'DNS caching and TTL':{
      sourcePages:'202',summary:'Set TTL by balancing fewer Route 53 queries against the need to change record values quickly.',
      explanation:['A resolver caches a DNS record for its Time to Live. During that interval, clients reuse the cached answer rather than querying Route 53 again.','A high TTL lowers Route 53 query volume but leaves clients on an old value longer after a change. A low TTL increases query traffic and cost but allows faster updates. The slide notes TTL is mandatory for ordinary records but not set directly on Alias records.'],
      slideTopics:[{heading:'High TTL',bullets:['Longer client-side cache.','Fewer DNS queries and lower query cost.','Slower propagation of record changes.']},{heading:'Low TTL',bullets:['Shorter cache lifetime.','More DNS queries and higher query cost.','Faster movement to a new record value.']}],
      takeaways:['TTL controls resolver caching.','High TTL favors cost and cache efficiency.','Low TTL favors rapid change.','Alias records do not expose the same TTL setting.'],examTip:'Lower TTL before a planned DNS migration, wait for old caches to expire, then change the record.'
    },
    'CNAME and Route 53 Alias records':{
      sourcePages:'203–205',summary:'Use CNAME for non-apex hostname aliases and Route 53 Alias for supported AWS targets, including the zone apex.',
      explanation:['A CNAME maps one hostname to another hostname and cannot be used at the zone apex, though it can map a subdomain such as app.example.com.','An Alias is a Route 53 extension that maps a hostname to a supported AWS resource, tracks target IP changes, works at the zone apex, has no additional DNS query charge in the deck, and has an AWS resource health-evaluation option. Alias targets include ELB, CloudFront, API Gateway, Elastic Beanstalk, S3 websites, interface endpoints, Global Accelerator, and same-zone Route 53 records—not EC2 DNS names.'],
      slideTopics:[{heading:'CNAME',bullets:['Hostname-to-hostname mapping.','Valid for subdomains.','Not valid at the zone apex.']},{heading:'Alias',bullets:['Maps to supported AWS resources.','Valid at the zone apex and on subdomains.','Tracks target address changes.','Cannot directly target an EC2 DNS name.']}],
      takeaways:['CNAME is standard hostname aliasing.','CNAME cannot serve the apex.','Alias can serve the apex.','Alias target support is an explicit AWS list.'],examTip:'For example.com pointing to an ALB or CloudFront distribution, use an Alias record.'
    },
    'Routing policies and simple routing':{
      sourcePages:'206–207',summary:'Treat a routing policy as Route 53’s method for answering DNS queries, then use Simple when no specialized routing decision is required.',
      explanation:['Route 53 routing policies decide which DNS values to return; they do not forward packets like a load balancer. Route 53 supports Simple, Weighted, Failover, Latency, Geolocation, Multi-Value Answer, Geoproximity, and IP-based policies in the supplied chapter.','Simple routing commonly points to one resource. One record can contain multiple values, and the client chooses among returned values; Simple records cannot be associated with health checks in the slide. Alias with Simple routing returns one AWS resource.'],
      slideTopics:[{heading:'DNS policy, not packet routing',bullets:['A policy chooses a DNS response.','The client then connects to the returned endpoint.','Route 53 is not a reverse proxy or load balancer.']},{heading:'Simple routing',bullets:['Typically points to one resource.','May return multiple values in one record.','Does not use health checks in the deck.']}],
      takeaways:['Routing policy selects DNS answers.','Simple is the basic policy.','Multiple returned values are client-selected.','Simple does not provide health-aware failover.'],examTip:'Choose Simple only when the requirement has no percentage, latency, geography, health, or source-network decision.'
    },
    'Weighted routing':{
      sourcePages:'208',summary:'Split DNS responses by relative record weights for controlled releases, experiments, or multi-Region distribution.',
      explanation:['Weighted routing sends traffic in proportion to each record’s weight divided by the sum of all record weights. Weights do not need to total 100.','Records share the same name and type and can be associated with health checks. A weight of zero stops traffic to that resource unless all record weights are zero, in which case all records are returned equally.'],
      slideTopics:[{heading:'Weight calculation',bullets:['Traffic share is a record weight divided by total weight.','Weights are relative and need not total 100.','Same-name, same-type records form the weighted set.']},{heading:'Operational uses',bullets:['Test a new application version.','Distribute traffic across Regions.','Set weight zero to stop normal selection.','Associate records with health checks.']}],
      takeaways:['Weights are relative.','Weighted records share name and type.','Health checks can filter unhealthy records.','Zero weight can suppress a destination.'],examTip:'Use Weighted routing for canary or blue/green percentages; use Failover for an active/passive primary and standby.'
    },
    'Latency-based routing':{
      sourcePages:'209',summary:'Return the resource whose configured AWS Region provides the lowest measured latency for the querying user.',
      explanation:['Latency-based routing chooses the resource with the least latency from the user. The decision is based on traffic latency between users and AWS Regions, not simply geographic distance.','Each record identifies a Region and can be associated with a health check. The diagram sends different users to us-east-1 or ap-southeast-1 based on the lower-latency path.'],
      slideTopics:[{heading:'Decision input',bullets:['AWS latency measurements between users and Regions.','Select the lowest-latency configured resource.','Geographic closeness alone does not define the choice.']},{heading:'Record behavior',bullets:['Associate each endpoint with its AWS Region.','Optionally attach health checks.','Useful when user latency is the priority.']}],
      takeaways:['Latency policy optimizes measured latency.','It is Region-aware.','It differs from geolocation rules.','Health checks can participate.'],examTip:'Choose Latency routing when the requirement says best response time, not when it prescribes content by country.'
    },
    'Route 53 endpoint health checks':{
      sourcePages:'210–211',summary:'Use globally distributed Route 53 checkers to monitor public HTTP, HTTPS, or TCP endpoints and enable automated DNS failover.',
      explanation:['The chapter groups health checks into endpoint monitors, calculated checks, and CloudWatch-alarm checks for private resources. Direct Route 53 HTTP health checks reach public resources only.','About 15 global checkers are shown testing an endpoint at a configured interval and threshold. A healthy determination can require more than 18% of checkers reporting healthy; HTTP checks can inspect the first 5,120 response bytes for text. Counts and timing options are source-era settings.'],
      slideTopics:[{heading:'Public endpoint monitor',bullets:['Supports HTTP, HTTPS, and TCP checks.','Configure endpoint, port, interval, and healthy/unhealthy threshold.','Checkers originate outside the VPC.']},{heading:'Health decision',bullets:['Global checkers evaluate the endpoint.','Optional HTTP text matching inspects the response.','Health status can drive DNS failover.']}],
      takeaways:['Endpoint checks require public reachability.','Checkers run globally.','Protocol, port, interval, and thresholds are configurable.','Health results integrate with records.'],examTip:'A private IP cannot be directly probed by public Route 53 health checkers.'
    },
    'Calculated checks and private-resource health':{
      sourcePages:'212–213',summary:'Combine child health checks with Boolean logic, or monitor private resources indirectly through a CloudWatch alarm.',
      explanation:['A calculated health check combines other health checks using OR, AND, or NOT. The source slide allows monitoring up to 256 child checks and selecting how many must be healthy; that numeric limit is deck-era information.','Route 53 checkers cannot reach private VPC or on-premises endpoints. For those, a CloudWatch metric and alarm can represent resource health, and a Route 53 health check monitors the alarm state.'],
      slideTopics:[{heading:'Calculated check',bullets:['Combines child checks.','Supports OR, AND, and NOT logic.','Can express how many children must be healthy.']},{heading:'Private resource pattern',bullets:['Create a CloudWatch metric for the private resource.','Create an alarm on that metric.','Point the Route 53 health check at the CloudWatch alarm.']}],
      takeaways:['Calculated checks aggregate health.','Boolean operators build composite status.','Public checkers cannot directly reach private endpoints.','CloudWatch alarms bridge private health into Route 53.'],examTip:'For a private application, publish a metric and alarm rather than opening the endpoint to Route 53 health checker IPs.'
    },
    'Failover routing':{
      sourcePages:'214',summary:'Implement active-passive DNS by returning the primary while healthy and the secondary when the mandatory primary health check fails.',
      explanation:['Failover routing pairs a Primary record with a Secondary disaster-recovery record. The client normally receives the primary EC2 endpoint.','A health check is mandatory on the primary in the diagram. When the primary becomes unhealthy, Route 53 answers with the secondary endpoint, implementing active-passive failover at DNS resolution time.'],
      slideTopics:[{heading:'Normal state',bullets:['Primary record is active.','Primary health check reports healthy.','Clients resolve the primary endpoint.']},{heading:'Failure state',bullets:['Primary check becomes unhealthy.','Route 53 returns the secondary record.','Secondary serves as disaster recovery.']}],
      takeaways:['Failover is active-passive.','Records have Primary and Secondary roles.','Health determines when DNS changes.','Client caching still affects transition time.'],examTip:'Use Failover for primary/standby DR, and set TTL with the required recovery responsiveness in mind.'
    },
    'Geolocation routing':{
      sourcePages:'215',summary:'Return records based on the user’s location at continent, country, or US-state granularity, with a required default for unmatched users.',
      explanation:['Geolocation routing uses user location rather than measured latency. Locations may be specified by continent, country, or US state, and the most precise matching location wins when definitions overlap.','The slide lists localization, content distribution restriction, and load balancing as use cases. A Default record should handle users who match no configured location, and records may use health checks.'],
      slideTopics:[{heading:'Location hierarchy',bullets:['Continent.','Country.','US state.','Most precise matching record wins.']},{heading:'Design rules',bullets:['Use for localized or restricted content.','Provide a Default record.','Optionally associate health checks.']}],
      takeaways:['Geolocation uses the user’s location.','It differs from latency optimization.','Specific location beats broad location.','Default covers unmatched users.'],examTip:'Choose Geolocation when the destination or content must be selected by a named jurisdiction.'
    },
    'Geoproximity routing and bias':{
      sourcePages:'216–218',summary:'Route by the relative geography of users and resources, then expand or shrink a resource’s catchment area with bias.',
      explanation:['Geoproximity considers both user and resource geographic locations. AWS resources specify a Region; non-AWS resources specify latitude and longitude.','A bias from -99 to +99 shifts traffic boundaries. Positive bias attracts more traffic by expanding a resource’s geographic region, while negative bias sends traffic away by shrinking it. The deck says this policy uses Route 53 Traffic Flow.'],
      slideTopics:[{heading:'Resource definition',bullets:['AWS endpoint: identify the AWS Region.','Non-AWS endpoint: supply latitude and longitude.','Route users according to geographic proximity.']},{heading:'Bias',bullets:['Zero uses the neutral geographic boundary.','Positive bias expands the region and attracts traffic.','Negative bias shrinks the region and repels traffic.']}],
      takeaways:['Geoproximity considers users and resources.','Bias shifts traffic boundaries.','Positive attracts; negative repels.','Non-AWS endpoints use coordinates.'],examTip:'Choose Geoproximity when the architecture must deliberately shift a geographic boundary rather than simply match a user country.'
    },
    'IP-based routing':{
      sourcePages:'219',summary:'Map client CIDR blocks to endpoints when routing must follow known source networks, ISP ranges, or corporate locations.',
      explanation:['IP-based routing selects a record from the client’s IP address. The customer supplies CIDR blocks and their corresponding endpoints or locations.','The slide lists performance optimization and reduced network cost as benefits, including routing a known ISP’s users to a particular endpoint. It also gives routing users from a specific location to a chosen resource as a use case.'],
      slideTopics:[{heading:'Configuration',bullets:['Define client CIDR ranges.','Associate each range with a record endpoint.','Route according to source IP membership.']},{heading:'Use cases',bullets:['Optimize performance for known networks.','Reduce network costs for known ISP paths.','Send corporate or location-specific ranges to selected resources.']}],
      takeaways:['IP routing uses source CIDR.','The customer supplies range mappings.','It can optimize known network paths.','It differs from inferred geolocation.'],examTip:'Choose IP-based routing when the scenario provides CIDR blocks or specific ISP networks as the decision input.'
    },
    'Multi-value answer routing':{
      sourcePages:'220',summary:'Return several healthy resource values in one DNS response for client-side distribution without claiming it is a load balancer.',
      explanation:['Multi-Value Answer routing creates multiple same-name records, optionally with a health check on each. Route 53 returns only healthy values.','The slide states that up to eight healthy records are returned per query; the number is source-era information. This is not a substitute for an ELB because Route 53 answers DNS rather than proxying connections or continuously balancing requests.'],
      slideTopics:[{heading:'Response behavior',bullets:['Create one record per resource.','Associate resource health checks.','Return multiple healthy values.','The slide states up to eight results.']},{heading:'Boundary',bullets:['Clients choose among returned values.','DNS caches affect the chosen list.','Route 53 does not proxy the traffic.','Not a replacement for Elastic Load Balancing.']}],
      takeaways:['Multi-Value returns several answers.','Health checks filter results.','Clients select returned endpoints.','It is DNS distribution, not a load balancer.'],examTip:'Use Multi-Value for simple health-aware DNS answers; use ELB when connection-level traffic distribution is required.'
    },
    'Domain registration and DNS delegation':{
      sourcePages:'221–223',summary:'Keep registration and authoritative DNS independent by delegating a registrar’s name-server records to Route 53.',
      explanation:['A domain registrar registers the domain, while a DNS service hosts authoritative DNS records. Although Route 53 can perform both functions, the deck emphasizes that buying a domain from one provider does not require using its DNS service.','For a third-party-registered domain, create a Route 53 public hosted zone, copy its assigned name servers, and update the registrar’s NS configuration to those Route 53 servers.'],
      slideTopics:[{heading:'Separate roles',bullets:['Registrar manages domain registration.','DNS service hosts the zone and records.','The providers may be the same or different.']},{heading:'Delegate to Route 53',bullets:['Create a public hosted zone.','Read its Route 53 name-server values.','Enter those NS values at the third-party registrar.']}],
      takeaways:['Registration and DNS hosting are separate.','Route 53 can be authoritative for an externally registered domain.','NS records perform delegation.','Registrar configuration must point to Route 53 name servers.'],examTip:'When a domain remains at a third-party registrar, change its delegated name servers rather than transferring registration unnecessarily.'
    },
    'Route 53 Resolver and hybrid DNS':{
      sourcePages:'224–226',summary:'Extend the VPC’s built-in Route 53 Resolver across a private network connection using inbound and outbound endpoints.',
      explanation:['By default, Route 53 Resolver answers local EC2 names, private hosted-zone records, and public internet DNS names. Hybrid DNS connects this resolver to on-premises DNS over Direct Connect or VPN.','Inbound endpoints let on-premises resolvers send AWS-domain queries into the VPC. Outbound endpoints let Route 53 Resolver forward selected queries to on-premises resolvers according to forwarding rules.'],
      slideTopics:[{heading:'Default VPC resolver',bullets:['Resolves local EC2 names.','Resolves associated private hosted zones.','Resolves public DNS names.']},{heading:'Hybrid directions',bullets:['Inbound: on premises asks AWS Resolver.','Outbound: AWS Resolver asks on-premises DNS.','Direct Connect or VPN provides the private network path.']}],
      takeaways:['Route 53 Resolver serves VPC DNS.','Hybrid DNS needs private connectivity.','Inbound and outbound endpoints solve opposite query directions.','Rules determine outbound forwarding.'],examTip:'Name the query origin: on-premises-to-AWS requires inbound; AWS-to-on-premises requires outbound.'
    },
    'Resolver inbound endpoints':{
      sourcePages:'225',summary:'Let on-premises DNS resolvers resolve AWS private names by forwarding queries to inbound endpoint IPs in the VPC.',
      explanation:['An inbound endpoint receives DNS queries from on-premises resolvers. The example resolves AWS resource domain names and records from private hosted zones.','The inbound endpoint is reached across Direct Connect or VPN and uses endpoint IP addresses inside the VPC. The on-premises DNS server must forward the appropriate AWS private domain queries to those addresses.'],
      slideTopics:[{heading:'Query direction',bullets:['Origin: on-premises client and DNS resolver.','Destination: Route 53 Resolver inbound endpoint.','Answer source: AWS private DNS and private hosted zones.']},{heading:'Requirements',bullets:['Private connectivity through Direct Connect or VPN.','Inbound endpoint addresses in the VPC.','On-premises forwarding configuration for selected domains.']}],
      takeaways:['Inbound receives queries into AWS.','It enables on-premises resolution of private AWS names.','A private network path is required.','On-premises DNS performs the forwarding.'],examTip:'The word inbound refers to DNS queries entering the VPC, not general application traffic.'
    },
    'Resolver outbound endpoints and forwarding rules':{
      sourcePages:'226',summary:'Forward selected VPC DNS queries through an outbound endpoint to on-premises DNS servers using Route 53 Resolver rules.',
      explanation:['An outbound endpoint sends DNS queries from Route 53 Resolver toward customer DNS resolvers on premises. The diagram shows the path across Direct Connect or VPN.','Forwarding rules select domain suffixes that should use the outbound path. This permits AWS workloads to resolve private on-premises names while other DNS queries continue using normal Resolver behavior.'],
      slideTopics:[{heading:'Query direction',bullets:['Origin: VPC client using Route 53 Resolver.','Outbound endpoint forwards the selected query.','Destination: on-premises DNS resolver.']},{heading:'Rules and connectivity',bullets:['Rules match domains that require forwarding.','Direct Connect or VPN carries the DNS traffic.','Unmatched queries retain standard resolver behavior.']}],
      takeaways:['Outbound sends queries from AWS.','It resolves on-premises private names.','Forwarding rules select domains.','Hybrid connectivity carries the query.'],examTip:'Use an outbound endpoint plus a forwarding rule when EC2 must resolve an internal on-premises domain.'
    },
    'Route 53 architecture decision rules':{
      sourcePages:'193–226',summary:'Select record, hosted-zone visibility, policy, health mechanism, and hybrid endpoint direction from the scenario’s exact DNS requirement.',
      explanation:['The chapter’s decision sequence is: decide public versus private visibility, choose the record type or Alias target, set TTL, then select a routing policy from Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, IP-based, or Multi-Value.','Add public endpoint health checks, calculated health, or a CloudWatch alarm as applicable. For hybrid resolution, inbound means on-premises queries AWS; outbound means AWS queries on-premises. Domain registration remains independent from authoritative Route 53 hosting.'],
      slideTopics:[{heading:'Routing-policy map',bullets:['Weighted: relative percentages.','Latency: lowest measured AWS Region latency.','Failover: active-passive health-based answer.','Geolocation: user jurisdiction.','Geoproximity: geographic boundary plus bias.','IP-based: client CIDR.','Multi-Value: several healthy answers.']},{heading:'Supporting decisions',bullets:['Alias supports AWS targets and zone apex.','Public/private hosted zones control visibility.','Health checks filter or fail over answers.','Resolver endpoints connect hybrid DNS.']}],
      takeaways:['DNS requirements determine routing policy.','Alias and CNAME have different apex behavior.','Health checks do not make Route 53 a proxy.','Inbound/outbound follow DNS query direction.'],examTip:'Underline the decision word in the scenario—percentage, latency, country, CIDR, proximity, or standby—before selecting a Route 53 policy.'
    }
  };

  sectionTenLectures.forEach(lecture=>Object.assign(lecture,sectionTenSlideOverrides[lecture.title]||{}));

  const sectionElevenSlideOverrides={
    'Develop the solutions architect mindset':{
      sourcePages:'227–228',summary:'Use the chapter’s architecture discussions to connect previously learned services, justify each evolution, and recognize repeated exam patterns.',
      explanation:['The section introduction says its purpose is to understand how the technologies already covered work together. The diagrams are not a new service catalog; they are decision sequences that begin with a simple requirement and add components as scale, availability, state, or deployment needs change.','The deck explicitly identifies these architectures as important for the exam. Study the reason for each transition—not merely the final diagram—and connect the change to public/private addressing, DNS, load balancing, Auto Scaling, storage, databases, caching, and Multi-AZ design.'],
      slideTopics:[{heading:'Architecture method',bullets:['Start from the stated workload and constraints.','Add one component for one new requirement.','Name the limitation each component removes.','Keep operational and failure behavior visible.']},{heading:'Chapter scenarios',bullets:['Stateless time web application.','Stateful e-commerce application.','Scalable WordPress storage.','Fast stack instantiation.','Three-tier and Elastic Beanstalk patterns.']}],
      takeaways:['Architectures combine services into outcomes.','Each new requirement should justify a component.','Incremental diagrams expose tradeoffs.','The section consolidates earlier exam concepts.'],examTip:'When comparing answers, reconstruct the requirement-to-component chain instead of choosing the diagram with the most services.'
    },
    'Evolve a stateless web application':{
      sourcePages:'229–239',summary:'Follow WhatIsTheTime.com from one public EC2 instance to a private, load-balanced, automatically scaled, Multi-AZ fleet.',
      explanation:['The scenario needs no database, starts small, accepts initial downtime, then must scale vertically and horizontally with minimal downtime. It begins with one public EC2 instance and Elastic IP, scales the instance up, then adds instances and moves from per-instance IPs to a Route 53 Alias that targets an ELB.','The ELB fronts private instances and performs health checks; an ASG adds and removes instances and spans multiple AZs. The final design maintains capacity in at least two AZs and can use Reserved capacity for the minimum baseline plus On-Demand or Spot for elastic capacity.'],
      slideTopics:[{heading:'Early evolution',bullets:['One public EC2 instance with Elastic IP.','Scale vertically by changing instance size, with downtime.','Scale horizontally by adding more instances.','Replace instance-specific DNS values with an Alias to ELB.']},{heading:'Final resilient shape',bullets:['ELB fronts private EC2 instances.','ASG maintains and scales the fleet.','Instances span multiple AZs.','Reserve predictable minimum capacity; vary excess capacity as appropriate.']}],
      takeaways:['Stateless servers can be replaced freely.','ELB removes direct instance endpoint management.','ASG automates horizontal capacity.','Multi-AZ removes one-AZ dependence.'],examTip:'A stateless application is the easiest candidate for horizontal scaling because no client session data must remain on one instance.'
    },
    'Design a stateful e-commerce web application':{
      sourcePages:'240–250',summary:'Move shopping-cart sessions and user data away from individual servers so the MyClothes.com application tier can scale across AZs.',
      explanation:['The scenario begins with a multi-AZ ASG and ELB but must preserve a shopping cart. Stickiness keeps a user on one instance yet can create load imbalance and loses the session if that instance fails. Client cookies can hold limited state, while a server-side session ID in the cookie points to shared session data in ElastiCache.','User data moves to RDS, reads scale through read replicas or a cache-aside Lazy Loading pattern, and Multi-AZ protects RDS and Redis. Security groups form tier boundaries: web traffic reaches ELB, applications accept only ELB traffic, and database/cache access accepts only from the application tier.'],
      slideTopics:[{heading:'Session evolution',bullets:['Stickiness preserves affinity but can unbalance the fleet.','Client cookies can carry suitable user state.','Server session ID can retrieve shared state from ElastiCache.','External state makes application instances replaceable.']},{heading:'Data, scale, and resilience',bullets:['RDS stores durable user data.','Read replicas or Lazy Loading reduce read pressure.','RDS Multi-AZ and Redis Multi-AZ improve recovery.','Security groups restrict each tier to its caller.']}],
      takeaways:['Local sessions obstruct horizontal scaling.','Shared cache externalizes session state.','RDS remains the durable system of record.','Read scaling and high availability use different database features.'],examTip:'For a stateful web tier that must scale, externalize session state rather than relying only on load-balancer stickiness.'
    },
    'Scale WordPress with shared storage':{
      sourcePages:'251–257',summary:'Use Aurora for scalable relational data and EFS for shared WordPress uploads across a Multi-AZ application fleet.',
      explanation:['MyWordPress.com must scale, show uploaded pictures correctly from every web instance, and avoid storing images in the database. The database layer starts with Multi-AZ RDS and evolves to Aurora for Multi-AZ shared storage and read replicas.','A single EBS volume stores files for one instance in one AZ; separate EBS volumes do not automatically share uploaded images. EFS provides a shared network file system mounted by instances in multiple AZs, so every WordPress server sees the same uploaded content.'],
      slideTopics:[{heading:'Database layer',bullets:['RDS Multi-AZ provides database availability.','Aurora adds easy Multi-AZ storage and read replicas.','The relational database stores application data, not uploaded image files.']},{heading:'Upload storage',bullets:['One EBS volume fits one-instance block storage.','Multiple EBS volumes create divergent image copies.','EFS shares one file system across instances and AZs.']}],
      takeaways:['WordPress uploads require shared files.','EBS is instance-oriented and AZ-bound.','EFS provides multi-AZ shared storage.','Aurora supports database availability and read scaling.'],examTip:'When every Linux web server must see the same uploaded files, choose EFS rather than independent EBS volumes.'
    },
    'Instantiate full application stacks quickly':{
      sourcePages:'258–259',summary:'Prebuild or restore each tier through Golden AMIs, EBS snapshots, RDS snapshots, and startup automation.',
      explanation:['Launching EC2, EBS, and RDS can be slow when applications, dependencies, initial data, and configuration must be installed at launch. The slides recommend shifting work into reusable images and snapshots.','For EC2, create a Golden AMI with the OS dependencies and application already installed, and use user data only for dynamic startup configuration. Restore EBS volumes and RDS databases from snapshots to load existing data efficiently.'],
      slideTopics:[{heading:'EC2',bullets:['Bake applications and OS dependencies into a Golden AMI.','Launch instances from that image.','Use user data for dynamic configuration at boot.']},{heading:'Data layers',bullets:['Restore EBS volumes from snapshots.','Restore RDS databases from snapshots.','Avoid rebuilding large initial data sets manually.']}],
      takeaways:['Golden AMIs reduce instance setup time.','User data handles dynamic boot work.','EBS snapshots restore block data.','RDS snapshots restore database data.'],examTip:'For the fastest fleet replacement, pre-bake stable software in an AMI and keep only environment-specific configuration in user data.'
    },
    'Assemble a secure three-tier architecture':{
      sourcePages:'260',summary:'Connect Route 53, ELB, an Auto Scaling application tier, ElastiCache, and an RDS read/write topology across AZs.',
      explanation:['The typical diagram places Route 53 and an ELB before an application Auto Scaling Group distributed across three Availability Zones. The web/application tier queries shared state in ElastiCache and durable data in RDS.','The database tier uses a primary writer, Multi-AZ standby, and read replicas for the appropriate availability and scaling roles. The architecture separates presentation/traffic entry, application compute, cache, and relational data rather than placing all responsibilities on one server.'],
      slideTopics:[{heading:'Traffic and compute tiers',bullets:['Route 53 resolves the application name.','ELB receives and distributes traffic.','ASG runs EC2 application instances across AZs.']},{heading:'State tiers',bullets:['ElastiCache serves cached or session data.','RDS writer handles writes.','Read replicas scale reads.','Multi-AZ standby provides database failover.']}],
      takeaways:['Three-tier design separates responsibilities.','ELB and ASG create a replaceable web tier.','Cache and database hold shared state.','RDS replicas and standby solve different needs.'],examTip:'Do not send writes to read replicas or treat a Multi-AZ standby as read capacity.'
    },
    'Deploy applications with Elastic Beanstalk':{
      sourcePages:'261–266',summary:'Use Elastic Beanstalk as a developer-centric managed deployment layer over EC2, ASG, ELB, RDS, and monitoring components.',
      explanation:['Elastic Beanstalk addresses common developer burdens—infrastructure management, code deployment, configuration, scaling, and service composition—while retaining control over the underlying AWS configuration. It deploys web applications using familiar components and is free as a service, with charges for created resources.','An application contains environments, versions, and configurations; an application version is a code iteration; an environment runs one version. Web server and worker tiers support many listed platforms, and deployment modes are Single Instance for development or High Availability with a load balancer and ASG for production.'],
      slideTopics:[{heading:'Beanstalk model',bullets:['Application groups environments, versions, and configurations.','Application Version identifies an iteration of code.','Environment runs a version on provisioned resources.','Only application code is the developer’s primary deployment input.']},{heading:'Tiers and modes',bullets:['Web server tier receives client traffic.','Worker tier consumes messages through SQS.','Single Instance fits development.','Load-balanced high-availability mode fits production.']}],
      takeaways:['Beanstalk is a managed application deployment layer.','It uses standard AWS infrastructure components.','Web and worker tiers have different traffic models.','Deployment mode should match availability needs.'],examTip:'Choose Elastic Beanstalk when developers want managed platform deployment but still need access to the created AWS resources and configurations.'
    }
  };

  sectionElevenLectures.forEach(lecture=>Object.assign(lecture,sectionElevenSlideOverrides[lecture.title]||{}));

  const sectionTwelveSlideOverrides={
    'Amazon S3 object storage and use cases':{
      sourcePages:'267–269',summary:'Introduce S3 as an effectively unbounded object-storage building block used across backup, recovery, analytics, hosting, and software delivery.',
      explanation:['Amazon S3 is presented as one of AWS’s main building blocks and as storage that scales without the customer managing capacity. Many AWS services integrate with it.','The use-case slide lists backup and storage, disaster recovery, archive, hybrid storage, application and media hosting, data lakes and big-data analytics, software delivery, and static websites.'],
      slideTopics:[{heading:'Service model',bullets:['Stores objects rather than mounted block devices.','Scales without preprovisioning a file-system capacity.','Acts as a backbone for many websites and AWS services.']},{heading:'Use cases in the deck',bullets:['Backup, disaster recovery, and archive.','Application, media, and static website hosting.','Hybrid storage, data lakes, analytics, and software delivery.']}],
      takeaways:['S3 is object storage.','It scales independently of servers.','It supports many durability and hosting patterns.','AWS services integrate broadly with S3.'],examTip:'Choose S3 when data is addressed as objects and the workload needs highly scalable regional storage.'
    },
    'Buckets, keys, objects, and multipart uploads':{
      sourcePages:'270–272',summary:'Model a bucket as a regional object namespace and each object as a key, body, metadata, tags, and optional version ID.',
      explanation:['S3 stores objects in buckets. Bucket names are globally unique across accounts and Regions, buckets are created in a Region, and names follow DNS-oriented rules.','An object key is the complete path-like name; S3 has no true directory hierarchy even though prefixes appear as folders. The deck lists a 50 TB maximum object size and requires multipart upload above 5 GB; those values reflect this slide edition. Objects can also have metadata, tags, and version IDs.'],
      slideTopics:[{heading:'Bucket',bullets:['Globally unique bucket name.','Defined in one AWS Region.','Lowercase naming constraints and reserved prefix/suffix rules apply.']},{heading:'Object',bullets:['Key is the full object name.','Body contains object data.','Metadata and tags add attributes.','Multipart upload is required above the deck’s threshold.']}],
      takeaways:['Buckets are Regional.','Bucket names use a global namespace.','Keys are full object identifiers.','Large objects use multipart upload.'],examTip:'A folder shown in the S3 console is a key prefix, not a filesystem directory.'
    },
    'S3 authorization model':{
      sourcePages:'273–274',summary:'Combine identity-based IAM permissions, resource-based bucket policies and ACLs, then account for explicit denies and encryption-key permissions.',
      explanation:['The security slide separates user-based IAM policies from resource-based bucket policies and object or bucket ACLs. An IAM principal can access an object when an applicable identity policy allows it or a resource policy allows it and no explicit deny applies.','Bucket policies are JSON and identify resources, Effect, Actions, and Principal. The deck also reminds the learner that encryption settings can affect access, so authorization to S3 and authorization to a KMS key may both be necessary.'],
      slideTopics:[{heading:'Permission sources',bullets:['IAM policies grant API actions to identities.','Bucket policies grant or deny at the bucket resource.','Object ACLs and bucket ACLs are additional resource controls.']},{heading:'Evaluation',bullets:['An applicable allow is required.','An explicit deny overrides allows.','Encryption permissions may be an additional gate.']}],
      takeaways:['IAM policies are identity-based.','Bucket policies are resource-based.','Explicit deny takes priority.','Encryption can add key authorization requirements.'],examTip:'For cross-account S3 access, a bucket policy is often the resource-side permission the question expects.'
    },
    'Bucket policies, roles, and Block Public Access':{
      sourcePages:'274–279',summary:'Apply the deck’s four access diagrams and leave Block Public Access enabled unless public exposure is deliberately required.',
      explanation:['The diagrams use a bucket policy for anonymous public access, an IAM policy for an IAM user, an EC2 instance role for an EC2 workload, and a bucket policy for a principal in another AWS account. Each mechanism matches the caller and ownership boundary.','S3 Block Public Access settings were created to prevent data leaks and can override otherwise public policies or ACLs. The deck recommends leaving the settings on when a bucket should never be public and allows account-level controls.'],
      slideTopics:[{heading:'Access patterns',bullets:['Public visitor: explicit public bucket policy.','IAM user: IAM identity permissions.','EC2 instance: IAM role.','Cross-account user: bucket policy naming the external principal.']},{heading:'Block Public Access',bullets:['Prevents accidental public policies and ACLs.','Can be configured at bucket or account level.','Leave enabled for nonpublic buckets.']}],
      takeaways:['Bucket policy enables public and cross-account access.','EC2 should use a role.','Block Public Access is a strong guardrail.','Public access must be intentional.'],examTip:'If a bucket must remain private, keep Block Public Access enabled even when other policy maintenance is imperfect.'
    },
    'Host a static website on S3':{
      sourcePages:'280',summary:'Serve static content from the Region-specific S3 website endpoint and use a bucket policy when public website access is intended.',
      explanation:['S3 can host a static website through a website endpoint whose hostname format depends on the Region. The bucket contains static assets such as HTML, CSS, JavaScript, and media rather than server-side application code.','The slide’s troubleshooting rule is that an HTTP 403 Forbidden response usually means the bucket policy does not permit public reads. Block Public Access must also be compatible with the intended public website configuration.'],
      slideTopics:[{heading:'Website endpoint',bullets:['Enable static website hosting on the bucket.','Use the Region-specific website URL.','Serve prebuilt static objects.']},{heading:'Public-read requirement',bullets:['Website visitors need permission to read objects.','Bucket policy commonly grants intended public reads.','403 indicates permissions or public-block settings should be checked.']}],
      takeaways:['S3 hosts static sites.','Website endpoints are Region-specific.','Static hosting does not run server code.','Public reads require compatible policy and guardrail settings.'],examTip:'For a public S3 website returning 403, inspect the bucket policy and Block Public Access configuration.'
    },
    'S3 versioning and delete markers':{
      sourcePages:'281',summary:'Enable bucket-level versioning to retain object history, recover overwrites and deletions, and understand the null-version edge case.',
      explanation:['With versioning enabled, uploading the same key creates another object version instead of destroying the previous one. This protects against unintended overwrites and supports rollback.','Deleting a versioned key normally adds a delete marker rather than erasing prior versions, so removing the marker can recover the object. Objects created before versioning have a null version, and suspending versioning does not delete existing versions.'],
      slideTopics:[{heading:'Version creation',bullets:['Enabled at bucket level.','Same-key upload creates a new version ID.','Prior versions remain available for rollback.']},{heading:'Deletion and suspension',bullets:['Ordinary delete adds a delete marker.','Delete marker removal can restore visibility.','Pre-versioning objects have a null version.','Suspension retains existing versions.']}],
      takeaways:['Versioning preserves history.','Overwrites create new versions.','Delete markers are recoverable.','Existing versions survive suspension.'],examTip:'Versioning supports recovery, but permanent deletion of a specific version still removes that version.'
    },
    'Cross-Region and Same-Region Replication':{
      sourcePages:'282',summary:'Replicate versioned objects asynchronously between buckets using CRR for another Region or SRR within one Region.',
      explanation:['S3 replication requires versioning on both source and destination buckets and an IAM role that S3 can use. Replication can cross AWS accounts.','Cross-Region Replication supports compliance, lower-latency access, and replication across accounts. Same-Region Replication supports log aggregation, live production/test synchronization, and related same-Region needs.'],
      slideTopics:[{heading:'Prerequisites',bullets:['Versioning enabled on source.','Versioning enabled on destination.','S3 receives an IAM role for replication.','Cross-account destination is supported.']},{heading:'CRR versus SRR',bullets:['CRR crosses Regions for compliance, locality, or separation.','SRR stays within one Region for aggregation or environment synchronization.']}],
      takeaways:['Replication is asynchronous.','Both buckets require versioning.','CRR crosses Regions.','SRR remains in one Region.'],examTip:'Use CRR when the requirement explicitly needs a copy in another Region; Multi-AZ S3 durability alone does not satisfy a cross-Region requirement.'
    },
    'Replication behavior and Batch Replication':{
      sourcePages:'283',summary:'Predict which existing and new objects replicate, how deletes behave, and when Batch Replication is needed.',
      explanation:['After a replication rule is enabled, new matching objects replicate automatically. Existing objects do not replicate automatically; S3 Batch Replication can copy them.','Delete markers can optionally replicate, but deleting a specific version ID is not replicated, preventing malicious permanent deletion from propagating. Replication cannot be chained: if bucket 1 replicates to bucket 2 and bucket 2 to bucket 3, objects arriving from bucket 1 do not automatically flow to bucket 3.'],
      slideTopics:[{heading:'Object timing',bullets:['New matching objects replicate after rule activation.','Existing objects need Batch Replication.','Operations are asynchronous.']},{heading:'Delete and chaining rules',bullets:['Delete-marker replication is optional.','Permanent version deletion does not replicate.','Replication received from another bucket does not chain onward.']}],
      takeaways:['Rules primarily affect new objects.','Batch Replication handles existing data.','Specific-version deletion stays local.','Replication is not transitive.'],examTip:'When a requirement includes objects that predate the rule, add S3 Batch Replication.'
    },
    'S3 durability, availability, and storage classes':{
      sourcePages:'284–285, 290',summary:'Separate object durability from service availability, then choose a storage class from access frequency, retrieval time, resilience, and cost.',
      explanation:['The deck presents S3 classes ranging from Standard and Intelligent-Tiering through Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive, and Express One Zone.','Most classes share eleven-nines durability in the source table, while availability percentages differ. Durability is the probability data is not lost; availability is whether the service can be accessed. Exact percentages and minimum durations are source-edition specifications.'],
      slideTopics:[{heading:'Two reliability measures',bullets:['Durability measures protection against object loss.','Availability measures ability to access the service.','The same durability can accompany different availability.']},{heading:'Selection dimensions',bullets:['Access frequency.','Required retrieval latency.','Multi-AZ versus one-AZ resilience.','Minimum storage duration and retrieval charges.']}],
      takeaways:['Durability and availability differ.','Storage classes optimize different access patterns.','One-Zone classes trade resilience for price/performance.','Cost includes more than storage per GB.'],examTip:'Do not choose a class from price alone; include retrieval time, retrieval fees, minimum duration, and AZ-loss tolerance.'
    },
    'S3 Standard and Infrequent Access classes':{
      sourcePages:'286–287, 290–291',summary:'Use Standard for frequent access, Standard-IA for rapid but infrequent multi-AZ access, and One Zone-IA only for recreatable data.',
      explanation:['S3 Standard provides low latency, high throughput, frequent access, and resilience to two facility failures in the slide. Listed uses include big data analytics, mobile and gaming applications, content distribution, and frequently accessed data.','Standard-IA retains rapid access across multiple AZs at lower storage cost with retrieval charges. One Zone-IA stores data in one AZ, costs less, and is suited to secondary backups or data that can be recreated. All prices and percentages shown are deck-era examples.'],
      slideTopics:[{heading:'S3 Standard',bullets:['Frequent access.','Low latency and high throughput.','Multi-AZ resilience.']},{heading:'Infrequent Access',bullets:['Standard-IA: infrequent rapid access across multiple AZs.','One Zone-IA: one AZ and lower price.','Retrieval charges and minimum durations affect total cost.']}],
      takeaways:['Standard serves hot data.','Standard-IA serves infrequent but immediately needed data.','One Zone-IA accepts AZ-loss risk.','IA retrieval adds cost.'],examTip:'Never choose One Zone-IA as the only copy when the data cannot be recreated after an AZ loss.'
    },
    'S3 Glacier archive classes':{
      sourcePages:'288, 290–291',summary:'Choose Instant Retrieval, Flexible Retrieval, or Deep Archive from archive access frequency and restoration-time requirements.',
      explanation:['Glacier Instant Retrieval provides millisecond access for archival data accessed roughly once per quarter. Glacier Flexible Retrieval offers Expedited, Standard, and Bulk restoration from minutes to hours.','Glacier Deep Archive is the lowest-cost class in the comparison and restores in Standard or Bulk time windows measured in hours. Minimum storage durations, retrieval charges, and exact timings in the source deck must be treated as edition-specific.'],
      slideTopics:[{heading:'Glacier Instant Retrieval',bullets:['Millisecond retrieval.','Archival data needing immediate occasional access.','Source slide uses a 90-day minimum.']},{heading:'Flexible and Deep Archive',bullets:['Flexible: expedited, standard, or bulk restoration.','Deep Archive: longest restoration and lowest storage price.','Source slide uses longer minimum durations.']}],
      takeaways:['Instant Retrieval is online archive access.','Flexible Retrieval offers restoration-speed choices.','Deep Archive favors lowest storage cost.','Retrieval timing and minimum duration drive selection.'],examTip:'If recovery must be immediate, do not choose a class requiring an hours-long restore even when its storage price is lower.'
    },
    'S3 Intelligent-Tiering':{
      sourcePages:'289–291',summary:'Let S3 move objects among access tiers when usage is unknown or changes, paying a monitoring fee instead of retrieval charges.',
      explanation:['Intelligent-Tiering monitors access and automatically moves objects between Frequent Access and lower-cost tiers. The source slide states a small monitoring and auto-tiering fee and no retrieval charges.','It lists automatic Infrequent Access and Archive Instant Access transitions after nonaccess periods, plus optional Archive Access and Deep Archive Access tiers for longer inactivity. The day counts in the slide are source-era settings.'],
      slideTopics:[{heading:'Automatic tiers',bullets:['Frequent Access for active objects.','Infrequent Access after the slide’s inactivity period.','Archive Instant Access after a longer inactivity period.']},{heading:'Optional archive tiers',bullets:['Archive Access can be enabled.','Deep Archive Access can be enabled.','Monitoring fee applies while retrieval charges do not in the deck.']}],
      takeaways:['Intelligent-Tiering adapts to access.','It fits unknown or changing patterns.','Monitoring adds a per-object cost.','Optional archive tiers support long inactivity.'],examTip:'Choose Intelligent-Tiering when access frequency is unpredictable and automatic class movement is preferred.'
    },
    'S3 Express One Zone directory buckets':{
      sourcePages:'292',summary:'Use Express One Zone for extremely high-performance, latency-sensitive workloads that accept storage in one Availability Zone.',
      explanation:['S3 Express One Zone is a single-AZ high-performance class stored in a Directory Bucket. The slide describes hundreds of thousands of requests per second, single-digit millisecond latency, and up to ten-times better performance than S3 Standard.','Named use cases are data-intensive applications, machine learning training, media processing, high-performance computing, and financial modeling. Performance and price comparisons are source-era claims; the architectural tradeoff is one-AZ placement.'],
      slideTopics:[{heading:'Storage model',bullets:['Directory Bucket in one Availability Zone.','Designed for very high request rates.','Single-digit millisecond access in the source slide.']},{heading:'Workloads and tradeoff',bullets:['ML training, media processing, HPC, and financial modeling.','Co-locate compute and storage in one AZ.','Accept one-AZ resilience for performance.']}],
      takeaways:['Express One Zone uses directory buckets.','It is single-AZ.','It targets latency-sensitive high-throughput work.','Numeric performance claims are source-era facts.'],examTip:'Choose Express One Zone only when single-AZ placement is acceptable and S3 Standard latency is not sufficient.'
    },
    'Select an S3 storage class by total cost':{
      sourcePages:'284–292',summary:'Combine storage price, retrieval fees, minimum duration, availability, retrieval time, and access pattern instead of comparing only per-GB rates.',
      explanation:['The comparison slides place every class across durability, availability, Availability Zones, minimum storage duration, minimum billable object size, retrieval fee, and retrieval time. The price table uses us-east-1 examples that must not be treated as current universal prices.','Start with required resilience and retrieval time, then expected access frequency and object lifetime. Use Standard for hot data, IA for infrequent online data, Glacier for archives, Intelligent-Tiering for uncertain patterns, One Zone classes for acceptable single-AZ risk, and Express One Zone for maximum single-AZ performance.'],
      slideTopics:[{heading:'Total-cost inputs',bullets:['Monthly storage charge.','Retrieval charge and access frequency.','Minimum storage duration and billable object size.','Monitoring or auto-tiering fees.']},{heading:'Nonprice requirements',bullets:['Required retrieval time.','Multi-AZ or single-AZ tolerance.','Availability target.','Performance and request-rate need.']}],
      takeaways:['Lowest storage price may not mean lowest total cost.','Retrieval time can eliminate archive classes.','Minimum duration penalizes short-lived objects.','Access uncertainty favors Intelligent-Tiering.'],examTip:'Eliminate classes that violate retrieval or resilience requirements before comparing their prices.'
    }
  };

  sectionTwelveLectures.forEach(lecture=>Object.assign(lecture,sectionTwelveSlideOverrides[lecture.title]||{}));

  const sectionThirteenSlideOverrides={
    'Automate storage with S3 Lifecycle rules':{
      sourcePages:'293–295, 298',summary:'Move objects through storage classes or expire them automatically with Lifecycle transition and expiration actions.',
      explanation:['S3 Lifecycle rules automate object movement along the class-transition path shown in the deck. Transition actions can move current or noncurrent versions to Standard-IA, Intelligent-Tiering, One Zone-IA, Glacier classes, or other supported destinations after a chosen age.','Expiration actions delete current objects, old versions, or incomplete multipart uploads. S3 Analytics Storage Class Analysis can recommend Standard-to-Standard-IA transition timing, emits a daily CSV report, and does not cover One Zone-IA or Glacier in the source slide.'],
      slideTopics:[{heading:'Lifecycle actions',bullets:['Transition current or noncurrent versions to lower-cost classes.','Expire objects after a chosen age.','Delete old versions.','Abort incomplete multipart uploads.']},{heading:'Storage Class Analysis',bullets:['Analyzes access patterns for Standard and Standard-IA.','Provides transition recommendations.','Exports a daily CSV report.','The first report takes 24–48 hours in the deck.']}],
      takeaways:['Lifecycle rules automate transitions.','Expiration removes objects or versions.','Rules can clean incomplete multipart uploads.','Analytics supports transition timing.'],examTip:'Use Lifecycle for predictable age-based movement; use Intelligent-Tiering when access timing is unpredictable.'
    },
    'Design Lifecycle policies from recovery requirements':{
      sourcePages:'296–297',summary:'Translate thumbnail cleanup and deleted-object recovery requirements into versioning, transitions, and expiration rules.',
      explanation:['In scenario one, EC2 creates recreatable image thumbnails beside source images. A prefix-based Lifecycle rule can transition source images to Glacier while expiring thumbnails after 60 days because they can be regenerated.','In scenario two, deleted objects must be immediately recoverable for 30 days and recoverable within 48 hours for the next 365 days. Versioning preserves noncurrent versions; a rule transitions noncurrent versions to Standard-IA for immediate access and later to Glacier Deep Archive for slower long-term recovery.'],
      slideTopics:[{heading:'Thumbnail scenario',bullets:['Use prefixes to distinguish source images and thumbnails.','Transition source images to archival storage.','Expire thumbnails after their useful period.','Recreate thumbnails from the retained source.']},{heading:'Deleted-object scenario',bullets:['Enable versioning.','Keep noncurrent versions in an immediately accessible class for 30 days.','Transition them to Deep Archive for the remaining recovery period.']}],
      takeaways:['Object prefixes can target different policies.','Recreatable derived data can expire.','Versioning supports deleted-object recovery.','Recovery time determines the destination class.'],examTip:'Build the rule backward from required recovery time, retention length, and whether data can be recreated.'
    },
    'Share large data sets with Requester Pays':{
      sourcePages:'299',summary:'Shift S3 request and download transfer costs to authenticated requesters while the bucket owner continues paying storage.',
      explanation:['Normally the bucket owner pays S3 storage and data-transfer costs. With Requester Pays enabled, the requester pays the request and download transfer costs while the owner still pays for stored data.','The requester must authenticate in AWS so billing can be attributed; anonymous access does not satisfy the pattern. The slide presents this for sharing large data sets whose consumers should fund their downloads.'],
      slideTopics:[{heading:'Cost split',bullets:['Bucket owner pays storage.','Requester pays request costs.','Requester pays download data-transfer costs.']},{heading:'Access requirement',bullets:['Requester must be authenticated in AWS.','The request explicitly acknowledges requester billing.','Fits large shared data sets with external consumers.']}],
      takeaways:['Requester Pays shifts access costs.','Storage remains the owner’s cost.','Requesters must authenticate.','It is a billing feature, not an authorization grant.'],examTip:'Requester Pays does not make a bucket public; the requester still needs permission and authenticated billing identity.'
    },
    'React to object changes with S3 Event Notifications':{
      sourcePages:'300–301',summary:'Send filtered S3 object events to SNS, SQS, or Lambda with the destination-side resource permissions shown in the deck.',
      explanation:['S3 Event Notifications can react to object creation, removal, restoration, and replication events and filter object names, such as a .jpg suffix. The thumbnail-generation example invokes a Lambda function after an image upload.','S3 needs permission to publish or invoke the destination: a Lambda resource policy for functions, an SNS resource policy for topics, or an SQS resource policy for queues. The source slide says delivery usually occurs in seconds but can take a minute or longer.'],
      slideTopics:[{heading:'Events and targets',bullets:['Events include create, remove, restore, and replication.','Prefix or suffix filters narrow matching objects.','Targets are Lambda, SNS, and SQS in the direct model.']},{heading:'Destination permission',bullets:['Lambda resource policy allows invocation.','SNS topic policy allows publish.','SQS queue policy allows message delivery.']}],
      takeaways:['S3 emits object lifecycle events.','Filters reduce unwanted notifications.','Destination resource policies authorize S3.','Delivery is asynchronous.'],examTip:'When S3 cannot invoke or publish, inspect the destination resource policy rather than adding permissions only to a user.'
    },
    'Route S3 events through Amazon EventBridge':{
      sourcePages:'302',summary:'Send all S3 events to EventBridge for JSON filtering, multiple destinations, archive/replay, and reliable delivery.',
      explanation:['The EventBridge integration sends S3 events to an event bus, where JSON rules can filter metadata, object size, names, and other fields. The deck contrasts this with the narrower direct notification filters.','EventBridge can route to more than 18 AWS services in the source slide, including Step Functions, Kinesis Data Streams, and Firehose. It supports multiple destinations, event archive, replay, and more reliable delivery.'],
      slideTopics:[{heading:'Advanced filtering',bullets:['All S3 events can enter EventBridge.','Rules inspect JSON event fields.','Filter by metadata, object size, name, and other attributes.']},{heading:'Routing features',bullets:['More destination types than direct notifications.','Multiple rules and destinations.','Archive and replay events.','Reliable event delivery.']}],
      takeaways:['EventBridge broadens S3 event routing.','JSON rules provide richer filters.','One event can feed multiple workflows.','Archive and replay support recovery.'],examTip:'Choose EventBridge when the design needs complex filters, several downstream services, or event replay.'
    },
    'Scale S3 requests and large-object transfers':{
      sourcePages:'303–305',summary:'Parallelize S3 traffic by prefix, multipart upload, transfer acceleration, and byte-range GET requests.',
      explanation:['S3 automatically scales request throughput by prefix. The deck states at least 3,500 write-class or 5,500 GET/HEAD requests per second per prefix, and unlimited prefixes; those are source-era baseline figures. Spreading keys across prefixes increases aggregate throughput.','Multipart upload sends parts in parallel and is recommended above 100 MB and mandatory above 5 GB in the slide. Transfer Acceleration uploads through an AWS edge location to use the AWS private network. Byte-range fetches parallelize downloads and can retrieve only an object header or other selected range.'],
      slideTopics:[{heading:'Request scaling',bullets:['Performance scales independently per prefix.','Multiple prefixes increase aggregate throughput.','Quoted request rates reflect the source edition.']},{heading:'Large-object tools',bullets:['Multipart upload parallelizes uploads.','Transfer Acceleration uses the nearest edge path.','Byte-range fetches parallelize or selectively retrieve downloads.']}],
      takeaways:['S3 scales by key prefix.','Multipart improves large uploads.','Transfer Acceleration improves long-distance transfer paths.','Byte ranges improve download parallelism and resilience.'],examTip:'Use multipart upload for large objects and byte-range GETs when large downloads can be split into independent ranges.'
    },
    'Transform object fleets with S3 Batch Operations':{
      sourcePages:'306',summary:'Run one managed bulk job over an object list for metadata, copy, encryption, ACL, tag, restore, or Lambda actions.',
      explanation:['S3 Batch Operations applies a selected operation to many existing objects. The deck lists modifying metadata and properties, copying between buckets, encrypting unencrypted objects, changing ACLs or tags, restoring Glacier objects, and invoking Lambda per object.','A Batch job uses an object list, chooses one operation, accepts parameters and permissions, and produces a completion report. S3 Inventory can generate the object list, while S3 Select can help filter it.'],
      slideTopics:[{heading:'Bulk operations',bullets:['Modify metadata, ACLs, or tags.','Copy between buckets.','Encrypt existing objects.','Restore archive objects.','Invoke Lambda for custom per-object work.']},{heading:'Managed workflow',bullets:['Provide a manifest or Inventory list.','Choose one operation and parameters.','Grant required permissions.','Receive a completion report with retries handled by S3.']}],
      takeaways:['Batch Operations targets existing objects.','A manifest defines the fleet.','S3 manages execution and retries.','A completion report records results.'],examTip:'Choose Batch Operations when the same action must be applied to millions of existing objects without custom fleet orchestration.'
    },
    'Analyze an S3 estate with Storage Lens':{
      sourcePages:'307–312',summary:'Use organization-wide S3 Storage Lens dashboards and metrics to find growth, cost, protection, performance, and activity issues.',
      explanation:['S3 Storage Lens analyzes storage across an AWS Organization, Regions, accounts, buckets, and prefixes. The default dashboard is preconfigured, covers multi-account/multi-Region data, cannot be deleted, and can be disabled.','Metric categories include summary, cost optimization, data protection, access management, event, performance, and activity. Free metrics provide a smaller set and shorter history; Advanced metrics add recommendations, longer retention, contextual aggregation, and optional CloudWatch publishing. Counts and retention periods are source-era plan details.'],
      slideTopics:[{heading:'Analysis scopes',bullets:['Organization, accounts, Regions, buckets, and prefixes.','Default dashboard summarizes multi-account and multi-Region trends.','Metrics identify anomalies and optimization opportunities.']},{heading:'Metric families',bullets:['Summary and cost optimization.','Data protection and access management.','Events and performance.','Detailed activity such as request counts and bytes.']},{heading:'Free versus Advanced',bullets:['Free metrics are automatically available.','Advanced adds recommendations and longer history.','Advanced can publish metrics to CloudWatch.']}],
      takeaways:['Storage Lens analyzes an S3 estate centrally.','Metric families cover cost, security, and performance.','The default dashboard is preconfigured.','Advanced adds deeper history and recommendations.'],examTip:'Choose Storage Lens for fleet-wide S3 visibility; choose a single bucket metric or log when the question asks for one resource’s operational event.'
    }
  };

  sectionThirteenLectures.forEach(lecture=>Object.assign(lecture,sectionThirteenSlideOverrides[lecture.title]||{}));

  const sectionFourteenSlideOverrides={
    'Choose an S3 encryption model':{
      sourcePages:'313–315, 318–319',summary:'Choose among SSE-S3, SSE-KMS, SSE-C, and client-side encryption by deciding who must own and operate the keys.',
      explanation:['The deck defines four object-encryption methods. SSE-S3 uses S3-owned AES-256 keys; SSE-KMS uses KMS-managed keys; SSE-C accepts a customer-supplied key on each request without S3 storing it; client-side encryption encrypts before upload.','All four protect object data at rest, but key custody, auditability, request headers, and operational responsibility differ. The durable decision is whether AWS/S3, AWS KMS, the external customer, or the client application controls the key workflow.'],
      slideTopics:[{heading:'Server-side choices',bullets:['SSE-S3: S3 owns and manages AES-256 keys.','SSE-KMS: KMS manages keys with customer control and audit.','SSE-C: customer supplies an external key for each operation.']},{heading:'Client-side choice',bullets:['Client encrypts before upload.','Client decrypts after download.','S3 never receives the plaintext or encryption key.']}],
      takeaways:['SSE-S3 is AWS-owned key management.','SSE-KMS adds KMS control and audit.','SSE-C keeps keys outside AWS.','Client-side encryption moves cryptography to the client.'],examTip:'Identify the required key owner and audit boundary before choosing an S3 encryption method.'
    },
    'Control and audit keys with SSE-KMS':{
      sourcePages:'316–317',summary:'Use KMS keys for S3 when key control and CloudTrail audit are required, while planning for KMS API quotas.',
      explanation:['SSE-KMS encrypts objects server-side with keys managed in AWS KMS. Compared with SSE-S3, the slides emphasize user control of key policy and an audit trail of key usage in CloudTrail.','Uploads call GenerateDataKey and downloads call Decrypt, so very high S3 request rates can encounter KMS request quotas. The deck gives Region-dependent KMS request-rate examples and recommends requesting quota increases when necessary; numeric quotas are source-era details.'],
      slideTopics:[{heading:'KMS benefits',bullets:['Customer control over the KMS key.','CloudTrail records key usage.','S3 performs server-side object encryption.','The request identifies SSE-KMS and the chosen key.']},{heading:'Scaling constraint',bullets:['Uploads invoke GenerateDataKey.','Downloads invoke Decrypt.','KMS request quotas can become the limiting dependency.']}],
      takeaways:['SSE-KMS adds key governance.','CloudTrail provides key-use audit.','KMS API calls occur per object operation.','High throughput must account for KMS quotas.'],examTip:'When encryption is enabled but S3 throughput is unexpectedly throttled, check KMS API limits as well as S3.'
    },
    'Supply external keys with SSE-C':{
      sourcePages:'318',summary:'Provide a customer-managed external key over HTTPS for every upload and retrieval while S3 stores no copy of that key.',
      explanation:['SSE-C performs encryption and decryption on the S3 server, but the customer fully manages the key outside AWS. S3 does not store the supplied encryption key.','HTTPS is mandatory because the key travels with the request headers. Reading the object later requires providing the same key; losing it makes the ciphertext unusable.'],
      slideTopics:[{heading:'Key custody',bullets:['Customer creates and stores the key outside AWS.','S3 uses but does not retain the key.','The same key must be supplied for decryption.']},{heading:'Request requirements',bullets:['Use HTTPS.','Send the key in HTTP headers.','Protect key availability and rotation outside S3.']}],
      takeaways:['SSE-C keys remain external.','S3 performs server-side encryption.','HTTPS is required.','The customer owns key durability and availability.'],examTip:'Choose SSE-C only when externally held keys are a hard requirement and the customer can supply them securely on every request.'
    },
    'Encrypt objects before upload':{
      sourcePages:'319',summary:'Perform client-side encryption and decryption in the application when S3 must receive only ciphertext.',
      explanation:['With client-side encryption, the client encrypts object data before sending it to Amazon S3 and decrypts it after retrieval. The slide references client libraries such as the Amazon S3 Client-Side Encryption Library.','The client fully manages keys and the encryption cycle. S3 stores the already encrypted object, so application key loss or algorithm mistakes cannot be repaired by S3.'],
      slideTopics:[{heading:'Upload path',bullets:['Client selects and manages the key.','Client encrypts plaintext locally.','Only ciphertext is uploaded to S3.']},{heading:'Download path',bullets:['S3 returns ciphertext.','Client retrieves the correct key.','Client decrypts outside S3.']}],
      takeaways:['Encryption occurs before S3.','Decryption occurs after download.','Clients manage the complete key lifecycle.','S3 stores ciphertext only.'],examTip:'Choose client-side encryption when plaintext must never reach the S3 service boundary.'
    },
    'Enforce TLS for data in transit':{
      sourcePages:'320–321',summary:'Use HTTPS and explicitly deny requests where aws:SecureTransport is false.',
      explanation:['S3 exposes HTTP and HTTPS endpoints. HTTPS provides SSL/TLS encryption in flight and is mandatory for SSE-C; the deck recommends HTTPS generally.','A bucket policy can force TLS by using an explicit Deny when the aws:SecureTransport condition is false. The diagram allows HTTPS requests while denying HTTP requests regardless of another Allow.'],
      slideTopics:[{heading:'Transport endpoints',bullets:['HTTP endpoint is not encrypted in transit.','HTTPS endpoint uses SSL/TLS.','Most clients use HTTPS by default.','SSE-C requires HTTPS.']},{heading:'Policy enforcement',bullets:['Condition key: aws:SecureTransport.','Explicitly deny when its value is false.','The deny overrides other allows for HTTP.']}],
      takeaways:['TLS protects data in flight.','HTTPS is the secure S3 endpoint.','SecureTransport is a bucket-policy condition.','Explicit deny reliably enforces transport security.'],examTip:'To require HTTPS for every principal, deny s3 actions when aws:SecureTransport is false.'
    },
    'Combine default encryption and bucket policy controls':{
      sourcePages:'322',summary:'Use default encryption as the fallback and bucket-policy conditions when requests must specify a required encryption mode.',
      explanation:['The supplied slide says new objects receive SSE-S3 automatically through default encryption. A bucket policy can additionally force an encryption header or a particular encryption type.','The order shown is bucket policy evaluation before the default encryption setting. Therefore, a policy that requires a request header can reject an upload even though default encryption would otherwise encrypt it.'],
      slideTopics:[{heading:'Default encryption',bullets:['Automatically encrypts new objects.','The deck uses SSE-S3 as the automatic default.','Protects objects even when the uploader omits an optional selection.']},{heading:'Bucket-policy enforcement',bullets:['Can require an encryption request header.','Can require a specific mode such as SSE-KMS.','Policy is evaluated before default encryption applies.']}],
      takeaways:['Default encryption supplies a baseline.','Bucket policies enforce caller behavior.','Policy can require a stronger named mode.','Default encryption does not bypass an explicit policy denial.'],examTip:'Use a bucket policy when the requirement says uploads must explicitly use a designated KMS key or encryption method.'
    },
    'Allow browser access with S3 CORS':{
      sourcePages:'323–325',summary:'Return the correct cross-origin response headers when browser code from one origin requests objects from another origin.',
      explanation:['An origin is scheme, host, and port. Requests between different origins trigger browser Cross-Origin Resource Sharing checks, often including an OPTIONS preflight with the Origin header and requested method.','S3 CORS configuration lists allowed origins, methods, and headers so the bucket returns the required response headers. CORS is a browser rule and does not grant S3 authorization; permissions must already allow the operation. The deck recommends allowing only a specific origin or * when truly required.'],
      slideTopics:[{heading:'Origin and preflight',bullets:['Origin = protocol + host + port.','Different origin triggers CORS evaluation.','Browser may send an OPTIONS preflight.']},{heading:'S3 configuration',bullets:['Allow the required origin.','Allow the required HTTP methods and headers.','S3 returns CORS response headers.','Authorization remains a separate requirement.']}],
      takeaways:['CORS is enforced by browsers.','Origin includes scheme, host, and port.','S3 must allow the requesting origin.','CORS does not replace IAM or bucket policy.'],examTip:'A browser-only cross-origin failure with otherwise valid access points to CORS configuration.'
    },
    'Protect destructive actions with MFA Delete':{
      sourcePages:'326',summary:'Require MFA for permanent version deletion and versioning-state changes on a versioned bucket.',
      explanation:['MFA Delete adds a second-factor code to selected destructive S3 operations. It protects permanent deletion of object versions and suspension of versioning.','Listing deleted versions and enabling versioning do not require MFA in the slide. Versioning must first be enabled, and only the bucket owner’s root user can enable or disable MFA Delete through the CLI in the source workflow.'],
      slideTopics:[{heading:'MFA-protected operations',bullets:['Permanently delete an object version.','Suspend versioning on the bucket.']},{heading:'Setup rules',bullets:['Bucket versioning must be enabled.','Root bucket owner enables/disables MFA Delete.','The source workflow uses the AWS CLI.']}],
      takeaways:['MFA Delete protects permanent deletion.','It protects versioning suspension.','It depends on versioning.','Root configures the feature in the deck.'],examTip:'Use MFA Delete for an additional human-control barrier against irreversible version deletion, not for ordinary object reads.'
    },
    'Audit requests with S3 server access logging':{
      sourcePages:'327–328',summary:'Deliver authorized and denied S3 request records into a separate logging bucket for audit and analysis.',
      explanation:['S3 server access logging records requests from any account, including authorized and denied attempts, into another S3 bucket. The logs can later be analyzed with tools such as Athena.','The logging target must be in the same AWS Region in the source slide. It must not be the monitored bucket itself, because new log objects would generate more access logs and create an exponential logging loop.'],
      slideTopics:[{heading:'Audit coverage',bullets:['Records requests from any account.','Includes authorized and denied requests.','Writes log objects to a target S3 bucket.','Logs can be queried for analysis.']},{heading:'Loop warning',bullets:['Use a separate logging bucket.','Keep the target in the same Region per the deck.','Never log a bucket into itself.']}],
      takeaways:['Access logging captures request history.','Denied requests are included.','Logs live in a target bucket.','Self-logging creates a runaway loop.'],examTip:'When configuring server access logs, always choose a distinct destination bucket.'
    },
    'Delegate temporary access with presigned URLs':{
      sourcePages:'329',summary:'Create a time-limited URL whose user temporarily inherits the signer’s permission for a specific S3 operation.',
      explanation:['A presigned URL can be generated through the S3 console, CLI, or SDK with an expiration. The source slide gives console and CLI expiration examples that are tool/version-specific.','The recipient inherits the permissions of the identity that generated the URL for that operation. Uses include private downloads, temporarily allowing an upload, or sharing a purchased video without making the bucket public.'],
      slideTopics:[{heading:'Delegation model',bullets:['Signer must have permission for the S3 operation.','URL embeds signed temporary authorization.','Recipient does not need separate AWS credentials.','Access ends at expiration.']},{heading:'Use cases',bullets:['Private file download.','Temporary upload to a precise location.','Time-limited access to paid or protected content.']}],
      takeaways:['Presigned URLs are temporary.','They inherit signer permission.','They avoid public bucket access.','Expiration limits exposure.'],examTip:'Generate the URL with an identity that has only the exact object operation the recipient should inherit.'
    },
    'Lock Glacier archives with a Vault Lock policy':{
      sourcePages:'330',summary:'Enforce an immutable Write Once Read Many compliance policy by locking an S3 Glacier vault policy against future edits.',
      explanation:['Glacier Vault Lock creates a WORM model through a Vault Lock policy. After testing and locking the policy, it can no longer be changed or deleted.','The slide associates the feature with compliance and data retention. Its key distinction is policy-level immutability for the vault, rather than merely setting ordinary access permissions.'],
      slideTopics:[{heading:'Lock sequence',bullets:['Create a Vault Lock policy.','Validate the intended retention controls.','Lock the policy.','The locked policy cannot be edited or deleted.']},{heading:'Purpose',bullets:['Write Once Read Many behavior.','Regulatory retention and compliance.','Protection from later policy weakening.']}],
      takeaways:['Vault Lock creates WORM retention.','The policy becomes immutable.','It targets Glacier vault archives.','It supports compliance retention.'],examTip:'Choose Vault Lock when the scenario specifically uses Glacier vault archives and requires an unchangeable retention policy.'
    },
    'Retain object versions with S3 Object Lock':{
      sourcePages:'331',summary:'Use version-enabled Object Lock retention or legal holds to prevent deletion of a specific object version.',
      explanation:['S3 Object Lock requires versioning and provides WORM protection for individual object versions. A retention period blocks deletion for a fixed time; a legal hold protects the version without an expiration date.','Compliance mode prevents overwrite or deletion by any user, including root. Governance mode allows specially authorized users to alter retention. Legal holds are independent of retention mode and can be placed or removed by users with the appropriate permission.'],
      slideTopics:[{heading:'Retention modes',bullets:['Compliance: no user, including root, can shorten or remove retention.','Governance: specially permitted users can alter retention.','Both protect the version until the retain-until date.']},{heading:'Legal hold',bullets:['No fixed expiration date.','Independent of retention mode.','Requires separate permission to place or remove.']}],
      takeaways:['Object Lock requires versioning.','Protection applies to versions.','Compliance is stronger than Governance.','Legal holds have no expiration date.'],examTip:'Choose Compliance mode when even the root user must be unable to delete the protected version during retention.'
    },
    'Scale permissions with S3 Access Points':{
      sourcePages:'332',summary:'Replace one growing bucket policy with named access endpoints and policies for teams or application prefixes.',
      explanation:['S3 Access Points provide separate DNS endpoints and access-point policies over one bucket. The diagram gives Finance, Sales, and Analytics their own endpoints and policies for specific prefixes or read/write needs.','Each access point’s policy works with a simpler bucket policy that delegates to access points. This makes permissions easier to scale when many applications, teams, and data partitions share one bucket.'],
      slideTopics:[{heading:'Per-consumer endpoints',bullets:['Finance Access Point grants finance-prefix access.','Sales Access Point grants sales-prefix access.','Analytics Access Point can read both prefixes.']},{heading:'Policy model',bullets:['Each access point has its own policy.','Access points have distinct DNS names.','Bucket policy delegates permitted access-point use.']}],
      takeaways:['Access Points create scoped S3 endpoints.','Each endpoint has a policy.','They simplify large shared-bucket permissions.','Prefixes can separate team data.'],examTip:'Choose Access Points when one bucket policy is becoming unmanageable across many teams or applications.'
    },
    'Keep S3 access private with a VPC Access Point':{
      sourcePages:'333',summary:'Restrict an S3 Access Point to a VPC and reach it through an S3 VPC endpoint whose policy also permits the operation.',
      explanation:['An access point can use a VPC origin so it is accessible only from that VPC. Clients reach it through an S3 VPC endpoint, identified in the slide as a Gateway endpoint.','The VPC endpoint policy must allow access to both the target bucket and access point. The access-point policy, bucket policy, and endpoint policy therefore form separate authorization layers.'],
      slideTopics:[{heading:'Private path',bullets:['Create an Access Point with VPC origin.','Create/use an S3 Gateway VPC endpoint.','Keep traffic on the private AWS path.']},{heading:'Policy layers',bullets:['Access Point policy scopes the caller and data.','Bucket policy permits delegated access.','VPC endpoint policy permits the bucket and Access Point.']}],
      takeaways:['VPC-origin Access Points are private.','An S3 VPC endpoint is required.','Endpoint policy is an additional gate.','All applicable policies must allow access.'],examTip:'When a VPC Access Point request fails, inspect the endpoint policy as well as the S3 resource policies.'
    },
    'Transform responses with S3 Object Lambda':{
      sourcePages:'334',summary:'Invoke Lambda during retrieval to return a transformed view of one stored object through an Object Lambda Access Point.',
      explanation:['S3 Object Lambda places a Lambda function in the retrieval path. A supporting S3 Access Point reaches the underlying bucket, while an Object Lambda Access Point exposes the transformed response to the application.','The deck’s examples include redacting personally identifiable information, converting XML to JSON, and resizing or watermarking images according to the caller. Only one source object needs to be stored even when callers need different representations.'],
      slideTopics:[{heading:'Request path',bullets:['Application calls an Object Lambda Access Point.','Lambda fetches through a supporting S3 Access Point.','Function transforms the object.','Caller receives the modified response.']},{heading:'Transformations',bullets:['PII redaction.','XML-to-JSON conversion.','Image resize and watermark.','Caller-specific presentation.']}],
      takeaways:['Object Lambda transforms on retrieval.','One source object can serve multiple views.','Access Points form the access path.','Lambda code defines the transformation.'],examTip:'Choose S3 Object Lambda when stored data should remain unchanged but each requester needs a transformed response.'
    }
  };

  sectionFourteenLectures.forEach(lecture=>Object.assign(lecture,sectionFourteenSlideOverrides[lecture.title]||{}));

  const sectionFifteenSlideOverrides={
    'Deliver content globally with CloudFront':{
      sourcePages:'335–336, 338',summary:'Cache origin content at CloudFront edge locations to reduce latency, improve read performance, and add edge-layer DDoS protection.',
      explanation:['Amazon CloudFront is a content delivery network. Requests reach an edge location; cached objects return locally, while cache misses forward to the configured origin and the response can populate the edge cache.','The slides emphasize improved global read performance, hundreds of points of presence, and integration with Shield, AWS WAF, and edge-location filtering. CloudFront can expose external origins as well as AWS origins. Counts of locations are source-era capacity facts.'],
      slideTopics:[{heading:'CDN request path',bullets:['Client requests the CloudFront distribution.','Nearest edge checks its local cache.','Cache hit returns without contacting origin.','Cache miss forwards to origin and can cache the response.']},{heading:'Benefits',bullets:['Lower read latency for global users.','Reduced repeated load on the origin.','Edge integration with Shield and AWS WAF.','Supports AWS and non-AWS HTTP origins.']}],
      takeaways:['CloudFront is a CDN.','Objects cache at edge locations.','Origins supply cache misses.','Edge integrations improve protection.'],examTip:'Choose CloudFront when global users repeatedly retrieve cacheable HTTP content.'
    },
    'Select and secure a CloudFront origin':{
      sourcePages:'337, 339, 341–342',summary:'Choose S3, VPC-origin, public ALB/EC2, or custom HTTP origins and expose only the minimum network path CloudFront requires.',
      explanation:['For S3, CloudFront distributes or uploads objects and secures a private bucket with Origin Access Control plus an S3 bucket policy. The deck says OAC replaces Origin Access Identity and is not used with an S3 website endpoint, which behaves as a custom HTTP origin.','VPC origins can reach ALB, NLB, or EC2 resources in private subnets. In the public-origin pattern, an EC2 origin must be public or an ALB must be public while its backend EC2 instances may remain private; origin security groups allow CloudFront public edge IPs or the CloudFront managed prefix list.'],
      slideTopics:[{heading:'S3 origin',bullets:['Use OAC and bucket policy for a private S3 bucket.','OAC replaces the legacy OAI model.','S3 website endpoints are custom HTTP origins.']},{heading:'Application origins',bullets:['VPC origins reach private-subnet ALB, NLB, or EC2.','Public-network origins require a public EC2 address or public ALB.','Restrict origin security groups to CloudFront paths.']}],
      takeaways:['Origin type determines security pattern.','OAC protects private S3 origins.','VPC origins avoid public application exposure.','Public origins should restrict CloudFront source traffic.'],examTip:'For a private S3 bucket behind CloudFront, use OAC and a bucket policy that authorizes the distribution.'
    },
    'Choose CloudFront or S3 replication':{
      sourcePages:'340',summary:'Use CloudFront for globally cached, TTL-based delivery and S3 CRR for durable full-object copies in selected Regions.',
      explanation:['CloudFront uses a global edge network and caches objects for a TTL. It fits static content that must be available worldwide, while an edge may contact the origin when an object is absent or expired.','S3 Cross-Region Replication copies objects asynchronously into each configured Region, requires replication setup per destination, and gives read-only consumers a complete regional copy with no cache-miss dependency.'],
      slideTopics:[{heading:'CloudFront',bullets:['Global edge network.','Objects cached for a TTL.','Worldwide low-latency static delivery.','Origin remains authoritative on cache miss.']},{heading:'S3 CRR',bullets:['Creates full copies in selected Regions.','Replication is asynchronous.','Must configure each desired destination Region.','Regional consumers read the replicated bucket.']}],
      takeaways:['CloudFront caches globally.','CRR copies regionally.','TTL controls cache freshness.','CRR serves durability/local-copy requirements.'],examTip:'Choose CloudFront for global content acceleration; choose CRR when the requirement is an owned persistent copy in another Region.'
    },
    'Control geography and refresh CloudFront caches':{
      sourcePages:'343–344',summary:'Restrict countries with CloudFront Geo Restriction and invalidate cached paths when waiting for TTL expiry is unacceptable.',
      explanation:['Geo Restriction can use an allowlist of countries permitted to access content or a blocklist of countries denied access. CloudFront determines country from a third-party Geo-IP database.','CloudFront does not automatically detect every origin update before TTL expiry. An invalidation request can remove all files with * or selected paths such as /images/* so the next request fetches current origin content.'],
      slideTopics:[{heading:'Geo Restriction',bullets:['Allowlist permits only named countries.','Blocklist denies named countries.','Country is inferred from Geo-IP data.','Useful for content licensing or distribution rules.']},{heading:'Invalidation',bullets:['Evicts cached objects before TTL expires.','Can target all paths or selected path patterns.','Next request repopulates from the origin.']}],
      takeaways:['Geo Restriction filters by country.','Allowlist and blocklist are alternatives.','TTL normally controls freshness.','Invalidation forces early refresh.'],examTip:'Use invalidation for an urgent content correction; shorten TTL for content expected to change frequently.'
    },
    'Enter AWS through Global Accelerator anycast addresses':{
      sourcePages:'345–347',summary:'Give global clients two stable anycast IPs that enter the AWS network at the nearest edge and travel privately toward the application.',
      explanation:['The deck contrasts unicast, where one server holds one IP, with anycast, where many edge servers advertise the same address and route a client to the nearest edge.','AWS Global Accelerator creates two anycast IPs for an application. Client traffic enters at an edge location and uses the AWS internal network to reach the configured regional endpoint, avoiding more of the variable public-internet path.'],
      slideTopics:[{heading:'Anycast',bullets:['Multiple edge locations advertise the same IP.','Routing takes the client to the nearest edge.','Provides stable application IP addresses.']},{heading:'Accelerated path',bullets:['Global Accelerator supplies two anycast IPs.','Traffic enters the AWS network at the edge.','AWS internal routing carries it toward the endpoint.']}],
      takeaways:['Global Accelerator uses anycast.','Applications receive two stable IPs.','Clients enter through a nearby edge.','AWS backbone carries the long-distance path.'],examTip:'A requirement for static global IP addresses points to Global Accelerator rather than CloudFront DNS caching.'
    },
    'Route to healthy regional endpoints with Global Accelerator':{
      sourcePages:'347–348',summary:'Continuously health-check Elastic IP, EC2, ALB, or NLB endpoints and route global traffic to the lowest-latency healthy Region.',
      explanation:['Global Accelerator supports Elastic IP addresses, EC2 instances, Application Load Balancers, and Network Load Balancers, whether public or private in the slide model.','It provides intelligent lowest-latency routing, fast regional failover through health checks, stable client IP behavior, edge traffic control, and compatibility with client IP allowlisting. The deck compares its performance with the unreliable hop-by-hop public internet.'],
      slideTopics:[{heading:'Endpoint types',bullets:['Elastic IP.','EC2 instance.','Application Load Balancer.','Network Load Balancer.','Public or private endpoints as supported.']},{heading:'Routing and recovery',bullets:['Select a healthy regional endpoint.','Optimize the AWS-network path for latency.','Fail over rapidly when health changes.','Keep stable anycast client endpoints.']}],
      takeaways:['Health checks drive endpoint selection.','Several regional endpoint types are supported.','Routing optimizes latency and availability.','Stable IPs simplify firewall allowlists.'],examTip:'Choose Global Accelerator for non-cacheable application traffic that needs fast multi-Region failover and static global IPs.'
    },
    'Choose CloudFront or Global Accelerator':{
      sourcePages:'349',summary:'Choose CloudFront for cacheable HTTP edge delivery and Global Accelerator for TCP/UDP proxying, static IPs, and deterministic regional failover.',
      explanation:['Both services use the AWS global network, edge locations, and AWS Shield. CloudFront is a CDN that caches HTTP content at the edge, supports origins such as S3 and HTTP servers, and uses TTL plus cache behavior.','Global Accelerator proxies TCP or UDP packets to regional endpoints, fits non-HTTP uses such as gaming or IoT, supports static anycast IPs, and accelerates dynamic HTTP traffic without caching it. Health checks remove unhealthy endpoints quickly.'],
      slideTopics:[{heading:'CloudFront',bullets:['HTTP content delivery network.','Caches objects at edge locations.','Works with S3 and HTTP origins.','Best for cacheable content and edge request features.']},{heading:'Global Accelerator',bullets:['TCP and UDP proxy at the edge.','Does not cache content.','Provides static anycast IPs.','Fits dynamic traffic and fast regional failover.']}],
      takeaways:['Both use AWS edge infrastructure.','CloudFront caches HTTP content.','Global Accelerator proxies network traffic.','Static IP needs favor Global Accelerator.'],examTip:'Ask whether the solution needs a cache or a stable accelerated network entry point; that distinction usually selects the service.'
    }
  };

  sectionFifteenLectures.forEach(lecture=>Object.assign(lecture,sectionFifteenSlideOverrides[lecture.title]||{}));

  const sectionSixteenSlideOverrides={
    'Move offline data and compute at the edge with Snowball':{
      sourcePages:'350–355',summary:'Use secure portable Snowball Edge devices when network transfer is too slow or unreliable, and run limited edge computing where data is produced.',
      explanation:['Snowball devices move up to petabyte-scale data into or out of AWS by local high-speed copy and physical shipment. The transfer table shows why limited bandwidth, connectivity, cost, and shared links can make online migration take days or years; all timings and device capacities are source-era examples.','Snowball Edge can also process data in disconnected locations such as ships, mines, or trucks using supported EC2 AMIs or Lambda functions. Data cannot import directly into Glacier: import it to S3, then apply an S3 Lifecycle transition.'],
      slideTopics:[{heading:'Offline migration',bullets:['AWS ships a secure device to the customer.','Customer copies data locally and ships it back.','AWS imports or exports data from S3.','Useful when network transfer time is unacceptable.']},{heading:'Edge computing',bullets:['Process data where it is generated.','Works with intermittent or no internet.','Run supported EC2 or Lambda workloads.','Use S3 plus Lifecycle to reach Glacier.']}],
      takeaways:['Snowball moves data physically.','It avoids constrained WAN transfers.','Snowball Edge supports disconnected compute.','Glacier import requires an S3 intermediate step.'],examTip:'Choose Snowball when the migration window cannot be met over the available network; choose DataSync when online recurring synchronization is practical.'
    },
    'Run Windows shares with FSx for Windows File Server':{
      sourcePages:'356–357',summary:'Provide a managed Windows NTFS file share with SMB, Active Directory integration, Windows ACLs, and optional Multi-AZ deployment.',
      explanation:['FSx for Windows File Server is a fully managed Windows shared file system supporting SMB and NTFS. It integrates with Microsoft Active Directory, Windows ACLs, user quotas, and Distributed File System namespaces.','The deck lists SSD and HDD storage, access from Windows and Linux, scale to tens of GB/s and millions of IOPS, on-premises access, Multi-AZ availability, daily S3 backups, and data deduplication. Numeric performance claims are source-era facts.'],
      slideTopics:[{heading:'Windows compatibility',bullets:['SMB protocol and NTFS.','Microsoft Active Directory integration.','Windows ACLs and user quotas.','DFS namespace support.']},{heading:'Managed operation',bullets:['SSD or HDD choices.','Single-AZ or Multi-AZ deployment.','Daily backups to S3.','Accessible from AWS and on premises.']}],
      takeaways:['FSx for Windows is a managed SMB share.','It supports Windows identity and ACLs.','Multi-AZ improves availability.','It can serve hybrid clients.'],examTip:'Choose FSx for Windows when the application needs native SMB/NTFS and Active Directory semantics.'
    },
    'Accelerate parallel workloads with FSx for Lustre':{
      sourcePages:'356, 358–359',summary:'Use a managed parallel Lustre file system for HPC, machine learning, video processing, and S3-backed high-throughput workloads.',
      explanation:['Lustre is a distributed parallel file system for large-scale computing. FSx for Lustre targets machine learning, HPC, video processing, financial modeling, and electronic design automation and integrates with S3 as a repository.','Scratch deployments provide temporary, unreplicated, high-burst storage for short processing with lower cost. Persistent deployments replicate data in the same AZ and fit long-term processing or sensitive data. The performance figures in the deck are source-era specifications.'],
      slideTopics:[{heading:'Workload and S3 integration',bullets:['High-performance parallel Linux file access.','Reads S3 objects as files.','Writes results back to S3.','Fits HPC and data-intensive processing.']},{heading:'Deployment types',bullets:['Scratch: temporary, unreplicated, high burst.','Persistent: long-lived and replicated within the AZ.','Choose from durability and job-lifetime needs.']}],
      takeaways:['Lustre is a parallel file system.','FSx integrates Lustre with S3 data.','Scratch favors temporary speed.','Persistent favors long-lived availability.'],examTip:'Choose FSx for Lustre when many compute nodes need concurrent high-throughput access to an S3-backed data set.'
    },
    'Choose FSx for NetApp ONTAP or OpenZFS':{
      sourcePages:'356, 360–361',summary:'Use ONTAP for multiprotocol NetApp/NAS migration and OpenZFS for NFS-based ZFS workloads and point-in-time cloning.',
      explanation:['FSx for NetApp ONTAP is managed ONTAP supporting NFS, SMB, and iSCSI for Linux, Windows, and macOS. It provides automatic capacity growth/shrink, snapshots, replication, compression, deduplication, and thin provisioning, fitting ONTAP or NAS migrations.','FSx for OpenZFS supports NFS versions 3 through 4.2 for Linux, Windows, and macOS clients. It fits ZFS workloads, offers very high IOPS and sub-millisecond latency in the slide, and supports snapshots, compression, and point-in-time copy-on-write cloning.'],
      slideTopics:[{heading:'FSx for NetApp ONTAP',bullets:['NFS, SMB, and iSCSI protocols.','Migrate NetApp ONTAP or NAS workloads.','Compression, deduplication, thin provisioning, snapshots, and replication.']},{heading:'FSx for OpenZFS',bullets:['NFS protocol family.','Migrate ZFS workloads.','Snapshots and compression.','Instant point-in-time cloning through copy-on-write.']}],
      takeaways:['ONTAP is multiprotocol.','OpenZFS focuses on NFS/ZFS compatibility.','Both are managed third-party file systems.','Existing storage platform determines the migration fit.'],examTip:'Choose ONTAP for SMB/iSCSI or existing NetApp features; choose OpenZFS for native ZFS and NFS workflows.'
    },
    'Bridge local file applications with Storage Gateway':{
      sourcePages:'362–365, 368',summary:'Use S3 File Gateway to expose cloud-backed S3 objects through local NFS or SMB shares with a low-latency cache.',
      explanation:['Storage Gateway bridges on-premises applications and AWS storage for disaster recovery, backup/restore, tiering, and cached low-latency access. The chapter distinguishes S3 File Gateway, FSx File Gateway, Volume Gateway, and Tape Gateway.','S3 File Gateway presents configured S3 buckets through NFS or SMB, caches recently used data locally, maps files to S3 objects, and supports several S3 storage classes plus Lifecycle transitions. Authentication can use Active Directory for SMB or bucket policies for NFS.'],
      slideTopics:[{heading:'Hybrid bridge',bullets:['Gateway runs on premises with local cache.','Applications retain familiar file protocols.','Durable data is stored in AWS.']},{heading:'S3 File Gateway',bullets:['NFS and SMB front end.','Files become S3 objects.','Recent data remains cached locally.','Supports AD authentication for SMB.']}],
      takeaways:['Storage Gateway is hybrid.','File Gateway exposes NFS/SMB.','S3 stores the object-backed data.','Local cache reduces access latency.'],examTip:'Choose S3 File Gateway when on-premises file applications must access S3 through NFS or SMB without being rewritten for the S3 API.'
    },
    'Present cloud-backed iSCSI with Volume Gateway':{
      sourcePages:'364, 366, 368',summary:'Expose iSCSI block volumes on premises while backing data with S3 and EBS snapshots, choosing cached or stored volume mode.',
      explanation:['Volume Gateway presents block storage through iSCSI and backs it with Amazon S3. EBS snapshots capture the volumes and can restore on-premises data or create AWS volumes.','Cached volumes keep recent data locally for low-latency access while placing the primary data in S3. Stored volumes keep the complete data set on premises and send scheduled backups to S3 as EBS snapshots.'],
      slideTopics:[{heading:'Cached volumes',bullets:['Primary data lives in S3.','Frequently accessed blocks cache on premises.','Reduces local storage capacity needs.']},{heading:'Stored volumes',bullets:['Primary data remains on premises.','Entire data set has low local latency.','Scheduled EBS snapshots back up to AWS.']}],
      takeaways:['Volume Gateway exposes iSCSI.','EBS snapshots provide recovery.','Cached mode makes AWS primary.','Stored mode keeps on-premises primary data.'],examTip:'Choose cached volumes when local capacity is limited; choose stored volumes when every block must remain available locally.'
    },
    'Replace physical tape infrastructure with Tape Gateway':{
      sourcePages:'364, 367–368',summary:'Keep existing tape-backup software while replacing physical media with a cloud-backed Virtual Tape Library.',
      explanation:['Tape Gateway presents a Virtual Tape Library using iSCSI, allowing companies to retain existing tape backup processes and supported backup applications.','Virtual tapes are backed by S3 and archived through Glacier or Glacier Deep Archive. This modernizes media handling without requiring the backup application to adopt an object-storage interface.'],
      slideTopics:[{heading:'Compatibility layer',bullets:['Virtual Tape Library presented over iSCSI.','Existing tape-based backup application continues operating.','No physical tape handling is required.']},{heading:'AWS backing',bullets:['Active virtual tapes use cloud storage.','Archived tapes use Glacier classes.','Gateway maintains a local cache for active operations.']}],
      takeaways:['Tape Gateway emulates tape.','It preserves backup software workflows.','S3/Glacier replace physical media.','VTL uses iSCSI.'],examTip:'Choose Tape Gateway when the requirement explicitly retains an existing tape-oriented backup process.'
    },
    'Modernize managed file exchange with AWS Transfer Family':{
      sourcePages:'369–370',summary:'Provide managed FTP, FTPS, SFTP, and AS2 endpoints that store transferred files in S3 or EFS.',
      explanation:['AWS Transfer Family is a managed file-transfer service for moving data into and out of S3 or EFS using established business protocols. The deck lists FTP, FTPS, SFTP, and Applicability Statement 2.','The service supports authentication through managed credentials, Microsoft Active Directory, LDAP, Okta, Cognito, or custom identity providers. It scales, supports Multi-AZ, and charges for provisioned endpoints plus transferred data. FTP is shown as VPC-only because it is unencrypted.'],
      slideTopics:[{heading:'Protocols and storage',bullets:['FTP, FTPS, SFTP, and AS2.','Destination/source storage is S3 or EFS.','Managed endpoints avoid running transfer servers.']},{heading:'Identity and availability',bullets:['Integrates several enterprise identity sources.','Supports highly available Multi-AZ service.','FTP is VPC-only in the deck.']}],
      takeaways:['Transfer Family modernizes protocol endpoints.','S3/EFS store transferred files.','It supports enterprise identity.','SFTP/FTPS provide encrypted protocols.'],examTip:'Choose Transfer Family when partners require an existing file-transfer protocol rather than an AWS-native API.'
    },
    'Automate storage movement with AWS DataSync':{
      sourcePages:'371–373',summary:'Schedule fast online data copies between on-premises/other clouds and AWS or among AWS storage services, including metadata and verification.',
      explanation:['DataSync moves large data sets from on-premises or another cloud through NFS, SMB, HDFS, or S3-compatible APIs into S3, EFS, or FSx. These external-source transfers use a DataSync agent.','AWS-to-AWS transfers between supported storage services do not need an agent. Tasks can run on schedules, preserve file permissions and metadata, and use a purpose-built network protocol with encryption and integrity validation.'],
      slideTopics:[{heading:'External-to-AWS',bullets:['Install a DataSync agent near the source.','Read NFS, SMB, HDFS, or S3 API sources.','Write to S3, EFS, or FSx.','Schedule hourly, daily, or weekly tasks in the deck.']},{heading:'AWS-to-AWS',bullets:['No agent required.','Copy among supported AWS storage services.','Preserve metadata and permissions.','Validate copied data.']}],
      takeaways:['DataSync is online automated transfer.','External sources require an agent.','AWS-internal copies do not.','Metadata and integrity can be preserved.'],examTip:'Choose DataSync for repeatable online migration or synchronization; choose Snowball for offline bulk movement.'
    },
    'Select the right AWS storage and transfer service':{
      sourcePages:'350–374',summary:'Choose from object, archive, block, ephemeral disk, shared file, offline appliance, gateway, protocol endpoint, and online synchronization based on the required interface.',
      explanation:['The summary maps S3 to object storage, Glacier to object archive, EBS to one-instance block storage, Instance Store to ephemeral high-IOPS disk, EFS to multi-AZ NFS, and FSx to managed Windows, Lustre, ONTAP, or OpenZFS file systems.','For movement and hybrid access, Snowball handles offline bulk or edge work; Storage Gateway keeps local file/block/tape interfaces; Transfer Family supplies FTP-family/AS2 endpoints; DataSync performs scheduled online copies. The interface, location, latency, durability, and migration cadence identify the correct service.'],
      slideTopics:[{heading:'Storage interface',bullets:['Object: S3 and Glacier.','Block: EBS, Instance Store, Volume Gateway.','File: EFS and FSx families.','Tape: Tape Gateway.']},{heading:'Movement and hybrid access',bullets:['Snowball: offline shipment and edge processing.','Storage Gateway: persistent hybrid protocol bridge.','Transfer Family: managed partner file-transfer protocols.','DataSync: automated online copying.']}],
      takeaways:['Begin with object, block, file, or tape.','Then locate clients and data.','Migration frequency separates Snowball from DataSync.','Legacy protocol needs identify gateways or Transfer Family.'],examTip:'The named protocol—SMB, NFS, iSCSI, SFTP, or tape—is often the fastest way to eliminate incorrect storage choices.'
    }
  };

  sectionSixteenLectures.forEach(lecture=>Object.assign(lecture,sectionSixteenSlideOverrides[lecture.title]||{}));

  const sectionSeventeenSlideOverrides={
    'Decouple application communication':{
      sourcePages:'375–377',summary:'Replace fragile synchronous point-to-point calls with asynchronous messaging when producers and consumers scale or fail independently.',
      explanation:['The section begins with synchronous and asynchronous application communication. Synchronous calls connect services directly and can propagate sudden traffic spikes or downstream failure back to the caller.','Asynchronous middleware queues or streams work between applications so a producer can continue while consumers process at their own rate. The deck maps this pattern to SQS for queues, SNS for publish/subscribe, and Kinesis for streaming.'],
      slideTopics:[{heading:'Synchronous risk',bullets:['Caller waits for downstream response.','Traffic spikes reach the downstream service immediately.','A slow or failed consumer can affect the producer.']},{heading:'Asynchronous decoupling',bullets:['Producer places work in middleware.','Consumers process independently.','Backlog absorbs demand spikes.','SQS, SNS, and Kinesis implement different messaging patterns.']}],
      takeaways:['Synchronous calls couple availability and capacity.','Queues buffer uneven demand.','Asynchronous consumers scale independently.','Messaging choice depends on delivery pattern.'],examTip:'When one tier must survive a downstream slowdown, place a durable asynchronous buffer between them.'
    },
    'Process work with an SQS Standard queue':{
      sourcePages:'378–382',summary:'Use a fully managed pull queue with durable messages, many parallel consumers, at-least-once delivery, and best-effort ordering.',
      explanation:['Producers call SendMessage and SQS persists each message until a consumer successfully processes and deletes it. The deck lists unlimited Standard queue throughput, a default four-day and maximum fourteen-day retention, message bodies up to 1,024 KB, and sub-10-ms publish/receive latency; these are source-era limits.','Consumers on EC2, servers, or Lambda poll in batches, process work, and call DeleteMessage. Many consumers process in parallel, so Standard queues provide at-least-once delivery and best-effort ordering; applications must tolerate duplicates and order variation.'],
      slideTopics:[{heading:'Producer and retention',bullets:['Send with the SQS SDK/API.','Queue persists until deletion or retention expiry.','Standard queues scale without preprovisioned throughput.']},{heading:'Consumer behavior',bullets:['Poll and receive messages in batches.','Process, then delete the message.','Many consumers run in parallel.','Delivery is at least once with best-effort order.']}],
      takeaways:['SQS is pull-based.','Messages persist until deletion or expiry.','Standard queues can duplicate messages.','Consumers must be idempotent.'],examTip:'For Standard SQS, design idempotent processing because the same message may be delivered more than once.'
    },
    'Scale workers from SQS backlog':{
      sourcePages:'383–384, 390–393',summary:'Scale consumers from queue depth and use SQS as a shock absorber between web, processing, and database tiers.',
      explanation:['CloudWatch exposes ApproximateNumberOfMessages, which can drive an alarm and Auto Scaling policy for an EC2 consumer group. More backlog adds workers; declining backlog removes them.','The diagrams place SQS between a front-end and Auto Scaling backend and before database writes. The queue absorbs request spikes so compute and database consumers process at sustainable rates without dropping transactions.'],
      slideTopics:[{heading:'Backlog scaling',bullets:['Monitor ApproximateNumberOfMessages.','CloudWatch alarm triggers scaling.','ASG or ECS workers poll the queue.','Capacity follows pending work.']},{heading:'Buffer pattern',bullets:['Front end enqueues quickly.','Back end dequeues at its own rate.','Queue protects a database from sudden insert load.','Tiers scale independently.']}],
      takeaways:['Queue depth is a worker-demand metric.','SQS buffers traffic spikes.','Producers and consumers scale separately.','Database writes can be smoothed.'],examTip:'Scale queue consumers from backlog per worker when total queue depth alone would grow with fleet size.'
    },
    'Secure an SQS queue':{
      sourcePages:'385',summary:'Protect SQS with HTTPS in transit, KMS at rest, IAM identity policies, and queue resource policies for cross-account or service access.',
      explanation:['The slide lists HTTPS for in-flight encryption, KMS keys for server-side encryption at rest, and optional client-side encryption when the application owns encryption and decryption.','IAM policies control SQS API permissions for identities. SQS access policies are resource policies used for cross-account queue access or to permit another AWS service, such as SNS or S3, to send messages.'],
      slideTopics:[{heading:'Encryption',bullets:['HTTPS protects messages in transit.','KMS protects queue data at rest.','Client-side encryption keeps cryptography in the application.']},{heading:'Authorization',bullets:['IAM policies grant caller API permissions.','Queue policies authorize cross-account principals.','Queue policies authorize AWS service publishers.']}],
      takeaways:['HTTPS protects transit.','KMS protects stored messages.','IAM policies are identity controls.','Queue policies support resource-side delegation.'],examTip:'For SNS-to-SQS delivery, the SQS queue policy must allow the SNS topic to send messages.'
    },
    'Tune the SQS visibility timeout':{
      sourcePages:'386–387',summary:'Hide a received message long enough for one consumer to finish, extend the timeout when needed, and delete after success.',
      explanation:['After ReceiveMessage, SQS makes the message invisible to other consumers for the visibility timeout. The source default is 30 seconds; if the consumer does not delete the message before expiry, it becomes visible and may be processed again.','A high timeout delays retry after a crash; a low timeout causes duplicate concurrent processing. Consumers can call ChangeMessageVisibility while working, then DeleteMessage after completion.'],
      slideTopics:[{heading:'Timeline',bullets:['Receive makes the message temporarily invisible.','Successful consumer deletes it.','Timeout expiry makes it visible again.','Another consumer may then receive it.']},{heading:'Tuning',bullets:['Set longer than typical processing time.','Extend dynamically for long-running work.','Avoid excessively long retry delays.','Keep processing idempotent.']}],
      takeaways:['Visibility is not message deletion.','Timeout protects active processing.','Expiry causes redelivery.','Consumers can extend visibility.'],examTip:'If work routinely takes longer than visibility, extend the timeout rather than accepting overlapping duplicate processing.'
    },
    'Reduce empty receives with SQS long polling':{
      sourcePages:'388',summary:'Wait for messages during ReceiveMessage to reduce empty responses, API calls, cost, and false empty results.',
      explanation:['Long polling holds a receive request open when no message is immediately available, returning when a message arrives or the wait expires. The slide allows a wait from one to twenty seconds and recommends setting it to twenty seconds when possible; values are source-era settings.','It can be enabled at queue level or per API call. Compared with short polling, it reduces the number of empty receives and unnecessary SQS requests.'],
      slideTopics:[{heading:'Long-poll behavior',bullets:['Receive request waits when queue appears empty.','Returns when a message arrives.','Returns empty only after the wait period expires.']},{heading:'Benefits',bullets:['Fewer empty responses.','Fewer API calls and lower cost.','Lower latency than repeated fixed-delay polling.','Configurable by queue or request.']}],
      takeaways:['Long polling waits for work.','It reduces empty receives.','It reduces request cost.','The deck recommends the maximum wait where suitable.'],examTip:'Enable long polling for consumers that otherwise issue frequent empty ReceiveMessage calls.'
    },
    'Preserve ordered work with SQS FIFO':{
      sourcePages:'389',summary:'Use a FIFO queue when ordering and deduplication are required, accepting the throughput model and FIFO naming rules.',
      explanation:['FIFO means messages are processed in first-in, first-out order. The deck lists exactly-once send behavior through duplicate removal and requires queue names ending in .fifo.','The source slide lists 300 messages per second without batching and 3,000 with batching, with higher-throughput modes evolving over time. FIFO suits workloads where order and deduplication matter more than unrestricted Standard-queue throughput.'],
      slideTopics:[{heading:'FIFO guarantees',bullets:['Preserves message order within the FIFO model.','Deduplicates repeated sends.','Queue name ends with .fifo.']},{heading:'Tradeoff',bullets:['Throughput is constrained compared with Standard.','Batching raises the slide’s throughput.','Numeric rates are source-era limits.']}],
      takeaways:['FIFO adds ordering.','FIFO deduplicates sends.','Naming identifies FIFO queues.','Throughput differs from Standard.'],examTip:'Choose FIFO when the scenario explicitly requires ordered operations or duplicate-send suppression.'
    },
    'Publish one event to many SNS subscribers':{
      sourcePages:'394–396',summary:'Push one topic message to every subscribed endpoint, including queues, functions, HTTP endpoints, email, SMS, and mobile clients.',
      explanation:['An SNS producer publishes once to a topic, and each subscription receives the notification. This replaces direct integration from one buying service to separate email, fraud, and shipping receivers.','Subscribers shown include SQS, Lambda, Firehose, email, SMS, mobile notifications, and HTTP/HTTPS endpoints. AWS services such as CloudWatch alarms, S3 events, Auto Scaling notifications, budgets, and CloudFormation can publish to SNS. Subscriber and topic counts in the deck are source-era quotas.'],
      slideTopics:[{heading:'Publish/subscribe',bullets:['Producer publishes to one topic.','Topic pushes to every subscription.','Each subscriber handles the event independently.']},{heading:'Subscriber examples',bullets:['SQS, Lambda, and Firehose.','HTTP/HTTPS endpoints.','Email, SMS, and mobile push.','Many AWS services can act as publishers.']}],
      takeaways:['SNS is push-based.','One publication fans out.','Subscriptions can use different protocols.','Publishers and receivers remain decoupled.'],examTip:'Choose SNS when one event must immediately notify several independent receivers.'
    },
    'Control SNS publishing and delivery':{
      sourcePages:'397–398',summary:'Publish through topics or mobile-platform endpoints and secure SNS with TLS, KMS, IAM policies, and topic resource policies.',
      explanation:['Topic publish requires creating a topic, adding subscriptions, and publishing to that topic. Direct publish targets a mobile platform endpoint after creating platform applications and endpoints.','SNS uses HTTPS for in-flight encryption, KMS for at-rest encryption, and optional client-side encryption. IAM policies control API calls; SNS access policies support cross-account access or permission for AWS services such as S3 to publish.'],
      slideTopics:[{heading:'Publishing modes',bullets:['Topic publish sends to all topic subscriptions.','Direct publish targets mobile platform endpoints.','Applications use SDK/API operations.']},{heading:'Security',bullets:['HTTPS in transit.','KMS at rest.','IAM identity policies.','SNS topic policies for cross-account or service publishers.']}],
      takeaways:['Topics serve general fan-out.','Direct publish serves mobile endpoints.','Encryption and authorization are separate controls.','Topic policies enable service publishers.'],examTip:'When S3 must publish to SNS, add a topic resource policy permitting the S3 service and expected source.'
    },
    'Build durable fan-out with SNS and SQS':{
      sourcePages:'399–401',summary:'Subscribe multiple SQS queues to an SNS topic so every consumer gets a durable independent copy and can process at its own pace.',
      explanation:['SNS pushes one event to all subscribed SQS queues. Each queue persists its copy for delayed processing, retries, and independent consumer scaling, producing fully decoupled fan-out without losing an event merely because one consumer is offline.','Queue access policies must allow the SNS topic, and subscriptions must use compatible Region/account configuration. The deck applies the pattern to S3 events feeding several queues and to SNS delivery into S3 through Data Firehose.'],
      slideTopics:[{heading:'Durable fan-out',bullets:['Publisher sends once to SNS.','Every subscribed SQS queue receives a copy.','Consumers process independently.','Queue retention and retry protect slow consumers.']},{heading:'Examples',bullets:['One S3 event reaches several queues through SNS.','SNS can deliver into Firehose for S3 storage.','Queue policies authorize topic delivery.']}],
      takeaways:['SNS fans out; SQS persists.','Each consumer owns a separate backlog.','Failures are isolated by queue.','Resource policies enable delivery.'],examTip:'Use SNS plus one SQS queue per consumer when every consumer needs every event with independent retry and scaling.'
    },
    'Filter and order SNS fan-out':{
      sourcePages:'402–404',summary:'Use SNS FIFO with SQS FIFO for ordered deduplicated fan-out and subscription filter policies to deliver only matching messages.',
      explanation:['SNS FIFO topics provide ordering by message group, deduplication by deduplication ID or content, and can subscribe only SQS FIFO queues in the deck. Combining SNS FIFO and SQS FIFO gives fan-out plus ordered, deduplicated processing.','A subscription filter policy is JSON that selects matching message attributes or message body fields. A subscription without a filter receives every topic message.'],
      slideTopics:[{heading:'FIFO fan-out',bullets:['SNS FIFO preserves order by message group.','Deduplication suppresses repeated publishes.','SQS FIFO queues receive ordered copies.','Topic name ends in .fifo.']},{heading:'Message filtering',bullets:['JSON policy belongs to each subscription.','Only matching messages reach that subscriber.','No filter means receive all messages.']}],
      takeaways:['SNS FIFO supports ordered fan-out.','SQS FIFO preserves each subscriber’s order.','Filter policies reduce irrelevant deliveries.','Unfiltered subscriptions receive everything.'],examTip:'Use one topic with subscription filters instead of creating a separate topic for every event category.'
    },
    'Store replayable events in Kinesis Data Streams':{
      sourcePages:'405–406',summary:'Collect real-time clickstream, IoT, metric, and log records into a retained stream that several consumers can replay independently.',
      explanation:['Kinesis Data Streams ingests streaming records from producers such as applications, agents, SDKs, IoT devices, clickstreams, metrics, and logs. Consumers include applications, Lambda, Firehose, and managed analytics services.','Unlike queue messages deleted after consumption, Kinesis records remain for the configured retention period and can be replayed by consumers. Records remain immutable until expiry; the source slide lists retention up to 365 days and payload size up to 10 MB, which are edition-specific limits.'],
      slideTopics:[{heading:'Streaming pipeline',bullets:['Many producers continuously append records.','Records are partitioned across the stream.','Several consumers read independently.','Fits real-time analytics and event processing.']},{heading:'Retention semantics',bullets:['Consumption does not delete the record.','Consumers can replay retained data.','Records expire after the retention period.','Data is immutable while retained.']}],
      takeaways:['Kinesis stores a stream.','Records are replayable.','Multiple consumers read independently.','Retention differs from SQS deletion semantics.'],examTip:'Choose Kinesis when consumers need ordered streaming data retention and replay, not merely one-time work distribution.'
    },
    'Plan Kinesis capacity and consumers':{
      sourcePages:'406–407',summary:'Choose provisioned shards for explicit capacity control or on-demand mode for automatic scaling, then account for producer and consumer throughput.',
      explanation:['Provisioned mode selects shard count. The source slide assigns each shard 1 MB/s or 1,000 records/s inbound and 2 MB/s outbound and requires manual shard scaling.','On-demand mode removes capacity provisioning and automatically scales with observed throughput. The source shows a default 4 MB/s inbound and 8 MB/s outbound capacity and bills per stream per hour plus data volume; figures are deck-era pricing/capacity examples.'],
      slideTopics:[{heading:'Provisioned mode',bullets:['Choose shard count.','Each shard has defined read/write capacity.','Scale by adding or removing shards.','Billing follows provisioned shards.']},{heading:'On-demand mode',bullets:['No shard provisioning.','Capacity adapts automatically.','Billing follows stream hours and data volume.','Fits unpredictable throughput.']}],
      takeaways:['Shards define provisioned capacity.','Provisioned needs capacity planning.','On-demand scales automatically.','Consumer count and egress affect design.'],examTip:'Choose on-demand for unpredictable stream volume and provisioned when throughput is understood and shard control matters.'
    },
    'Deliver streams with Amazon Data Firehose':{
      sourcePages:'408–410',summary:'Use a fully managed near-real-time delivery stream to buffer, optionally transform, and load records into S3, Redshift, OpenSearch, or HTTP destinations.',
      explanation:['Amazon Data Firehose accepts producers including applications, agents, SDKs, Kinesis Data Streams, and CloudWatch sources. It delivers to AWS destinations, partner services, or custom HTTP endpoints.','Firehose is fully managed, automatically scales, charges for data processed, and delivers near real time according to buffer size or interval. It can invoke Lambda for transformations, convert formats, compress data, and send failed records to an S3 backup bucket.'],
      slideTopics:[{heading:'Delivery path',bullets:['Producers send directly or through Kinesis Data Streams.','Firehose buffers by size or time.','Optional Lambda transform and format conversion.','Destinations include S3, Redshift, OpenSearch, and HTTP.']},{heading:'Managed behavior',bullets:['No consumer application to operate.','Automatic scaling.','Near-real-time batch delivery.','Failed or source records can back up to S3.']}],
      takeaways:['Firehose is a delivery service.','It buffers rather than offering millisecond stream reads.','It can transform and convert records.','S3 can capture backup/failure data.'],examTip:'Choose Firehose for managed delivery into analytics/storage destinations; choose Data Streams when custom real-time consumers and replay are required.'
    },
    'Choose SQS, SNS, or Kinesis':{
      sourcePages:'410–411',summary:'Select pull queue, push fan-out, or replayable ordered stream from delivery, retention, consumer, and throughput requirements.',
      explanation:['SQS consumers pull messages, work is deleted after successful processing, workers scale horizontally, Standard ordering is best effort, and FIFO provides ordering. SNS pushes one publication to many subscribers and does not retain messages for later replay in the base comparison.','Kinesis consumers pull from a stream, multiple applications can read the same retained data, records expire by retention rather than consumption, and shard partitioning supplies ordering. Firehose complements streams by delivering buffered data to destinations.'],
      slideTopics:[{heading:'SQS and SNS',bullets:['SQS: durable work queue, pull, one consumer processes a copy.','SNS: push notifications and fan-out to many subscribers.','SNS + SQS: durable independent fan-out.']},{heading:'Kinesis',bullets:['Replayable retained stream.','Several consumers read the same records.','Ordering is tied to shards/partition keys.','Provisioned or on-demand throughput.']}],
      takeaways:['SQS distributes work.','SNS broadcasts notifications.','Kinesis retains replayable streams.','Delivery semantics determine the service.'],examTip:'Ask whether the event is consumed once, broadcast immediately, or retained for replay; the answer maps to SQS, SNS, or Kinesis.'
    },
    'Preserve broker protocols with Amazon MQ':{
      sourcePages:'412–413',summary:'Use managed ActiveMQ or RabbitMQ when migrating applications that require MQTT, AMQP, STOMP, Openwire, or WSS rather than AWS-native APIs.',
      explanation:['SQS and SNS use AWS-proprietary APIs, while traditional applications may already depend on open broker protocols. Replatforming those applications can be costly, so Amazon MQ provides managed ActiveMQ and RabbitMQ brokers with both queue and topic behavior.','Amazon MQ does not scale as highly as SQS/SNS in the deck and runs on servers. For high availability, the diagram places active and standby brokers in two AZs with shared storage—EFS for ActiveMQ and multi-AZ replication for RabbitMQ.'],
      slideTopics:[{heading:'Protocol compatibility',bullets:['MQTT, AMQP, STOMP, Openwire, and WSS.','Managed ActiveMQ or RabbitMQ.','Supports queues and topics.','Fits lift-and-shift broker migrations.']},{heading:'High availability',bullets:['Active and standby brokers across AZs.','Failover endpoint connects clients to the active broker.','Storage/replication model depends on broker engine.']}],
      takeaways:['Amazon MQ preserves standard broker protocols.','It fits migration compatibility.','SQS/SNS are more cloud-native.','Multi-AZ broker design provides failover.'],examTip:'Choose Amazon MQ when protocol compatibility is explicit; choose SQS/SNS for new cloud-native applications without legacy broker constraints.'
    }
  };

  sectionSeventeenLectures.forEach(lecture=>Object.assign(lecture,sectionSeventeenSlideOverrides[lecture.title]||{}));

  const sectionEighteenSlideOverrides={
    'Package applications as container images':{
      sourcePages:'414–420',summary:'Build portable Docker images from Dockerfiles, store them in a registry, and run isolated containers that share the host operating system.',
      explanation:['Docker packages an application and its dependencies into a container image that runs consistently across environments. Multiple containers share a host OS and Docker daemon, making them lighter than virtual machines that each include a guest OS.','A Dockerfile builds an image; a registry such as Docker Hub or Amazon ECR stores it; a runtime pulls the image and starts containers. The deck lists microservices, lift-and-shift application packaging, and consistent development/production behavior as benefits.'],
      slideTopics:[{heading:'Image lifecycle',bullets:['Write a Dockerfile.','Build an immutable image.','Push image to a repository.','Pull and run one or more containers.']},{heading:'Containers versus VMs',bullets:['Containers share the host OS kernel.','Virtual machines include separate guest operating systems.','Many containers fit on one host.','Isolation is process-oriented rather than full-machine virtualization.']}],
      takeaways:['Images package application dependencies.','Containers are image instances.','Registries store and distribute images.','Containers share host resources.'],examTip:'A container image is the deployable artifact; ECS or EKS provides the orchestration layer that schedules it.'
    },
    'Run ECS tasks on EC2 or Fargate':{
      sourcePages:'420–422',summary:'Choose ECS EC2 launch type when managing cluster instances is acceptable or Fargate when AWS should supply serverless task capacity.',
      explanation:['Amazon ECS is AWS’s container platform. A task is a running container workload in a cluster. With EC2 launch type, the customer provisions and maintains EC2 instances, and each host runs the ECS agent to register with the cluster.','With Fargate, no EC2 infrastructure is managed. The customer supplies task CPU and memory requirements, and Fargate runs each task with the required capacity. Billing follows task resource use rather than an owned host fleet.'],
      slideTopics:[{heading:'ECS on EC2',bullets:['Customer manages EC2 container instances.','ECS agent registers hosts and starts tasks.','Customer controls instance families, AMIs, and capacity.']},{heading:'ECS on Fargate',bullets:['No EC2 instances to provision or maintain.','Specify CPU and memory per task.','AWS runs task infrastructure.','Pay for task resources used.']}],
      takeaways:['ECS schedules tasks.','EC2 launch type exposes host management.','Fargate removes host management.','Task definition remains the workload specification.'],examTip:'Choose Fargate when the scenario emphasizes no server management; choose EC2 when host control or specialized capacity is required.'
    },
    'Separate ECS infrastructure and application IAM':{
      sourcePages:'423',summary:'Use the EC2 instance profile for ECS agent infrastructure calls and a task role for permissions used by application containers.',
      explanation:['The EC2 instance profile exists only for EC2 launch type and is used by the ECS agent for ECS API calls, CloudWatch log delivery, ECR image pulls, and Secrets Manager or SSM references.','The ECS task role is assigned to the task definition and gives each task application-specific AWS permissions. Different ECS services can therefore run on one cluster while receiving different roles and least-privilege access.'],
      slideTopics:[{heading:'EC2 instance profile',bullets:['Used by the ECS agent on EC2 hosts.','Registers and manages cluster infrastructure.','Pulls images and sends logs on behalf of the platform.']},{heading:'Task role',bullets:['Used by application code inside a task.','Defined per task definition.','Grants service-specific permissions such as S3 or DynamoDB.']}],
      takeaways:['Host role and task role are separate.','Instance profile serves ECS infrastructure.','Task role serves application code.','Per-task roles enable least privilege.'],examTip:'When a containerized application needs S3 access, grant it through the ECS task role, not the EC2 host profile.'
    },
    'Connect and persist ECS services':{
      sourcePages:'424–425',summary:'Front ECS services with ALB or NLB and mount EFS when tasks across EC2 or Fargate need shared persistent files.',
      explanation:['The deck recommends Application Load Balancer for most ECS HTTP use cases and Network Load Balancer for very high throughput, very low latency, or AWS PrivateLink integration. Classic Load Balancer is supported but not recommended for advanced features.','EFS can mount into ECS tasks on both EC2 and Fargate. Tasks in different AZs share the same EFS data, providing serverless persistent storage; S3 cannot be mounted as a file system through this ECS volume feature.'],
      slideTopics:[{heading:'Load balancing',bullets:['ALB fits most HTTP ECS services.','NLB fits high-throughput/low-latency or PrivateLink needs.','Load balancer distributes requests across running tasks.']},{heading:'Persistent files',bullets:['EFS mounts into EC2 or Fargate tasks.','Tasks across AZs share one file system.','EFS provides persistent serverless file storage.']}],
      takeaways:['ALB is the general ECS load-balancer choice.','NLB serves transport/performance needs.','EFS persists shared task files.','Tasks remain replaceable.'],examTip:'Choose EFS when multiple ECS tasks need a shared POSIX filesystem, including on Fargate.'
    },
    'Scale ECS services and cluster capacity':{
      sourcePages:'426–428, 431',summary:'Scale task count through Application Auto Scaling and, for EC2 launch type, separately scale the underlying container-instance capacity.',
      explanation:['ECS Service Auto Scaling changes desired task count from average CPU, average memory, ALB request count per target, or custom metrics. It supports target tracking, step, and scheduled policies. Fargate has no host-fleet scaling layer.','EC2 launch type must also add or remove EC2 instances. Capacity Providers integrate ECS with an Auto Scaling Group and are preferred over raw ASG policies; queue depth can drive ECS service scaling for worker tasks.'],
      slideTopics:[{heading:'Service scaling',bullets:['Adjust desired ECS task count.','Use CPU, memory, request count, queue depth, or custom metrics.','Target tracking, step, and scheduled policies are available.']},{heading:'EC2 capacity scaling',bullets:['Underlying EC2 instances must fit the tasks.','Capacity Providers manage ASG capacity for ECS.','Task scaling and host scaling are distinct control loops.']}],
      takeaways:['Service scaling changes tasks.','Cluster scaling changes EC2 hosts.','Fargate removes host-capacity scaling.','Capacity Providers coordinate EC2 capacity.'],examTip:'For ECS on EC2, verify both desired task count and available cluster host capacity.'
    },
    'Launch and observe event-driven ECS tasks':{
      sourcePages:'429–432',summary:'Start Fargate tasks from EventBridge object events or schedules, process SQS backlogs with services, and alert when tasks stop.',
      explanation:['EventBridge can react to an S3 object event by starting a new ECS/Fargate task and passing object information for processing. A scheduled EventBridge rule can run a periodic ECS task, such as hourly S3 batch processing.','An ECS service can poll SQS and scale with backlog. EventBridge also captures stopped-task events; an event pattern can route those events to SNS so administrators receive failure notifications.'],
      slideTopics:[{heading:'Task triggers',bullets:['S3 event enters EventBridge.','Rule starts a new Fargate task.','Scheduled rule starts periodic tasks.','Task processes the referenced S3 object or batch.']},{heading:'Operations',bullets:['Long-running ECS service polls SQS.','Service task count scales with work.','Stopped-task event reaches EventBridge.','SNS sends an administrator notification.']}],
      takeaways:['EventBridge starts one-off ECS tasks.','Schedules replace cron hosts.','SQS supports worker services.','Stopped-task events enable alerting.'],examTip:'Use EventBridge plus Fargate for event-driven work that exceeds Lambda’s runtime or container requirements.'
    },
    'Store and govern images with Amazon ECR':{
      sourcePages:'417, 419, 433',summary:'Store public or private Docker images in a managed AWS registry with IAM, image scanning, versioning, and lifecycle controls.',
      explanation:['Amazon Elastic Container Registry stores and manages Docker images. ECS/EKS runtimes pull images from private ECR repositories or the ECR Public Gallery.','ECR integrates with IAM for access control, supports image vulnerability scanning, image versioning and tags, lifecycle rules, and KMS encryption. The service replicates repository storage for availability as managed infrastructure.'],
      slideTopics:[{heading:'Registry workflow',bullets:['Build an image from a Dockerfile.','Authenticate and push to ECR.','Reference repository/image tag in the orchestrator.','ECS or EKS pulls the image at launch.']},{heading:'Governance',bullets:['Private and public repositories.','IAM-controlled access.','Image vulnerability scanning.','Lifecycle rules, tagging/versioning, and KMS encryption.']}],
      takeaways:['ECR is AWS’s image registry.','IAM controls repository access.','Scanning detects image vulnerabilities.','Lifecycle rules clean old images.'],examTip:'ECR stores images; ECS and EKS run them. Do not confuse registry with orchestrator.'
    },
    'Operate Kubernetes with Amazon EKS':{
      sourcePages:'420, 434–435',summary:'Run managed Kubernetes control planes with worker nodes in public or private subnets across multiple AZs.',
      explanation:['Amazon Elastic Kubernetes Service runs managed Kubernetes clusters on AWS. Kubernetes is an open-source system for automatic deployment, scaling, and management of containerized applications and is cloud-agnostic.','EKS is an alternative to ECS when Kubernetes APIs and ecosystem compatibility are required. The diagram places a managed EKS control plane across AZs and worker nodes in VPC subnets; services can be exposed with CLB, NLB, or ALB as appropriate.'],
      slideTopics:[{heading:'Managed Kubernetes',bullets:['AWS operates the EKS control plane.','Kubernetes schedules Pods onto worker nodes.','Standard Kubernetes tooling supports portability.']},{heading:'AWS architecture',bullets:['Worker nodes run in customer VPC subnets.','Nodes span AZs for availability.','Load balancers expose Kubernetes services.','Control plane remains managed by EKS.']}],
      takeaways:['EKS is managed Kubernetes.','Kubernetes portability differentiates it from ECS.','Workers run in the customer data plane.','Multi-AZ nodes improve availability.'],examTip:'Choose EKS when the requirement explicitly names Kubernetes or cross-cloud Kubernetes portability.'
    },
    'Choose EKS compute and node management':{
      sourcePages:'436',summary:'Select managed node groups, self-managed nodes, or Fargate based on host control and operational responsibility.',
      explanation:['Managed node groups create and manage EC2 worker nodes in an EKS-managed Auto Scaling Group and support On-Demand or Spot Instances. Self-managed nodes give the customer direct responsibility for node creation and lifecycle.','Fargate runs Pods without managing EC2 nodes. The slide lists AWS Outposts for on-premises EKS node deployment.'],
      slideTopics:[{heading:'EC2 node choices',bullets:['Managed node group: EKS creates/manages nodes and ASG.','Self-managed node: customer owns the full node lifecycle.','On-Demand and Spot can supply node capacity.']},{heading:'Other placement',bullets:['Fargate runs serverless Pods.','Outposts can place EKS nodes on premises.','Choice follows control, operations, and placement needs.']}],
      takeaways:['Managed node groups reduce node operations.','Self-managed nodes maximize control.','Fargate removes nodes from customer management.','Outposts serves on-premises placement.'],examTip:'Choose Fargate for no node management and managed node groups when Kubernetes needs EC2-level features with reduced operations.'
    },
    'Attach persistent storage to EKS Pods':{
      sourcePages:'437',summary:'Install a CSI-compliant driver and declare a Kubernetes StorageClass for EBS, EFS, FSx for Lustre, or FSx for NetApp ONTAP.',
      explanation:['EKS persistent storage uses the Container Storage Interface. A cluster installs the appropriate CSI driver and a Kubernetes StorageClass manifest describes how volumes are provisioned for Pods.','The slide lists EBS, EFS, FSx for Lustre, and FSx for NetApp ONTAP drivers. EBS is block storage with AZ attachment constraints; EFS and supported FSx systems provide shared file interfaces with different workload characteristics.'],
      slideTopics:[{heading:'Kubernetes integration',bullets:['Install a CSI-compliant storage driver.','Define a StorageClass manifest.','PersistentVolumeClaim requests storage.','Driver provisions/attaches the AWS resource.']},{heading:'AWS storage choices',bullets:['EBS block volumes.','EFS shared NFS files.','FSx for Lustre parallel files.','FSx for NetApp ONTAP multiprotocol files.']}],
      takeaways:['CSI connects EKS to storage.','StorageClass defines provisioning behavior.','EBS is AZ-bound block storage.','File services fit shared access.'],examTip:'Match the Pod’s access mode and AZ behavior to the storage service before selecting a CSI driver.'
    }
  };

  sectionEighteenLectures.forEach(lecture=>Object.assign(lecture,sectionEighteenSlideOverrides[lecture.title]||{}));

  const sectionNineteenSlideOverrides={
    'Think in serverless building blocks':{
      sourcePages:'438–440',summary:'Compose managed services so developers deploy code and configuration without provisioning or maintaining servers.',
      explanation:['The deck defines serverless as a paradigm in which developers no longer manage servers and initially introduces it through functions as a service. It then broadens the category to managed services whose infrastructure and scaling are handled by AWS.','The serverless list includes Lambda, DynamoDB, Cognito, API Gateway, S3, SNS, SQS, Data Firehose, Aurora Serverless, Step Functions, and Fargate. A serverless architecture connects these event, compute, data, identity, API, and orchestration building blocks.'],
      slideTopics:[{heading:'Serverless principle',bullets:['No server provisioning or operating-system maintenance.','Deploy code, data models, APIs, events, or workflow configuration.','Service capacity scales through managed controls.','Billing follows requests, usage, or allocated execution resources.']},{heading:'AWS building blocks in the deck',bullets:['Compute: Lambda and Fargate.','Data: DynamoDB, S3, and Aurora Serverless.','Integration: SNS, SQS, Firehose, and Step Functions.','Identity/API: Cognito and API Gateway.']}],
      takeaways:['Serverless removes server management.','It is broader than Lambda.','Managed services compose into architectures.','Scaling and billing models remain service-specific.'],examTip:'Serverless does not mean no servers exist; it means the customer does not provision or operate them.'
    },
    'Run event-driven code with AWS Lambda':{
      sourcePages:'441–443, 447',summary:'Run short event-driven functions with automatic scaling and request/duration pricing instead of operating continuously running virtual servers.',
      explanation:['The Lambda comparison contrasts EC2 virtual servers—continuously running with manually managed capacity—with functions invoked on demand. Lambda scales executions automatically and integrates with many AWS services.','The slides list Node.js, Python, Java, .NET/PowerShell, Ruby, custom runtimes, and container-image packaging. Pricing uses invocation count and compute duration in GB-seconds; the exact Free Tier and numerical examples are source-era pricing.'],
      slideTopics:[{heading:'Execution model',bullets:['Upload a function and its dependencies.','AWS invokes it in response to a request or event.','Executions scale independently.','No EC2 host lifecycle to operate.']},{heading:'Runtime and pricing',bullets:['Managed runtimes plus custom runtime API.','Container images are supported.','Pay for requests and execution duration.','Memory allocation affects compute and price.']}],
      takeaways:['Lambda is event-driven compute.','It scales by concurrent executions.','Functions use managed or custom runtimes.','Cost follows calls and duration.'],examTip:'Choose Lambda for event-driven work that fits its execution limits; choose containers or EC2 for long-running or host-dependent processing.'
    },
    'Connect Lambda to events and schedules':{
      sourcePages:'444–446',summary:'Invoke Lambda from AWS service events and EventBridge schedules, then write results or metadata to managed destinations.',
      explanation:['The integration slide connects Lambda with S3, Kinesis, DynamoDB, API Gateway, CloudFront, EventBridge, CloudWatch Logs, SNS, SQS, and Cognito. Each source supplies a different invocation and retry model.','The thumbnail example uses an S3 new-image event to invoke Lambda, writes a thumbnail back to S3, and stores image metadata in DynamoDB. The cron example replaces a scheduled server with an EventBridge rule that invokes a function every hour.'],
      slideTopics:[{heading:'Thumbnail flow',bullets:['User uploads an image to S3.','S3 event invokes Lambda.','Function creates and stores the thumbnail.','Function writes metadata to DynamoDB.']},{heading:'Scheduled flow',bullets:['EventBridge rule defines the schedule.','Rule invokes Lambda at the selected interval.','Function performs the periodic task.']}],
      takeaways:['AWS services can trigger Lambda.','S3 events enable object workflows.','EventBridge replaces cron hosts.','Outputs can go to S3 or DynamoDB.'],examTip:'Use EventBridge schedules for periodic Lambda invocation rather than keeping an EC2 instance running only for cron.'
    },
    'Design within Lambda quotas':{
      sourcePages:'448',summary:'Check regional execution limits, deployment-package limits, runtime duration, memory, temporary disk, and environment-variable size before selecting Lambda.',
      explanation:['The source slide lists execution memory from 128 MB to 10 GB, a 15-minute maximum, 4 KB of environment variables, /tmp storage from 512 MB to 10 GB, and 1,000 concurrent executions per Region. These are deck-edition quotas and must be verified for implementation.','Deployment limits distinguish compressed ZIP size, uncompressed package size, and container-image size. The deck notes that limits such as concurrency can be increased while limits such as maximum execution duration are fixed.'],
      slideTopics:[{heading:'Execution quotas',bullets:['Memory and CPU scale together.','Execution duration has a fixed maximum.','Environment variables and /tmp have bounded size.','Concurrency is regional unless otherwise allocated.']},{heading:'Deployment quotas',bullets:['Compressed ZIP upload limit.','Uncompressed package limit.','Larger container-image package limit.','Some quotas are adjustable; others are not.']}],
      takeaways:['Lambda has hard runtime boundaries.','Memory determines CPU allocation.','Temporary storage is configurable but finite.','Package format affects size limit.'],examTip:'A job that can exceed fifteen minutes does not fit the source deck’s Lambda model; select another compute service or split the work.'
    },
    'Control Lambda concurrency and startup latency':{
      sourcePages:'449–454',summary:'Use reserved concurrency for allocation and throttling, provisioned concurrency or SnapStart for startup latency, and queues for asynchronous overflow.',
      explanation:['Concurrency counts simultaneous function executions. Reserved concurrency guarantees and limits capacity for one function, preventing it from consuming all account concurrency or overwhelming downstream services. Synchronous invocations receive throttling errors; asynchronous invocations retry and then can reach a DLQ in the deck.','Cold starts occur when Lambda initializes a new execution environment. Provisioned concurrency initializes environments before requests. SnapStart snapshots a preinitialized function and resumes from that snapshot for supported Java, Python, and .NET runtimes in the source slide.'],
      slideTopics:[{heading:'Concurrency controls',bullets:['Reserved concurrency reserves and caps a function.','Unreserved functions share remaining regional capacity.','Synchronous throttling returns an error.','Asynchronous events retry and can use a DLQ.']},{heading:'Startup controls',bullets:['Cold start loads code and initialization.','Provisioned concurrency keeps environments initialized.','SnapStart restores a preinitialized snapshot for supported runtimes.']}],
      takeaways:['Concurrency is simultaneous execution.','Reserved concurrency is both guarantee and limit.','Provisioned concurrency reduces cold starts.','SnapStart accelerates supported runtime initialization.'],examTip:'Use reserved concurrency to protect a database from too many simultaneous Lambda connections; use provisioned concurrency for predictable low-latency starts.'
    },
    'Customize CloudFront at the edge':{
      sourcePages:'455–460',summary:'Choose CloudFront Functions for lightweight viewer-request/response logic or Lambda@Edge for richer origin-aware processing.',
      explanation:['Edge functions run code near CloudFront users without managing servers. CloudFront Functions use JavaScript, start in sub-millisecond time, scale to millions of requests per second in the source slide, and run only on viewer request or viewer response.','Lambda@Edge uses Node.js or Python, supports viewer and origin request/response events, longer execution, network access, and larger packages. Use cases include cache-key normalization, header manipulation, URL rewrites, authentication, bot handling, SEO, dynamic routing, and A/B testing.'],
      slideTopics:[{heading:'CloudFront Functions',bullets:['Lightweight JavaScript at very high scale.','Viewer request and viewer response only.','No network or file-system access.','Fits cache keys, headers, redirects, and simple authorization.']},{heading:'Lambda@Edge',bullets:['Node.js or Python.','Viewer and origin event phases.','Longer runtime, network access, larger packages.','Fits richer request/response and origin logic.']}],
      takeaways:['Both execute at CloudFront edge.','CloudFront Functions are lighter and faster.','Lambda@Edge supports origin events and network access.','Event phase determines available context.'],examTip:'Use CloudFront Functions for simple high-volume viewer manipulation and Lambda@Edge when origin events or external calls are required.'
    },
    'Reach private resources from Lambda safely':{
      sourcePages:'461–465',summary:'Attach Lambda to VPC subnets and security groups for private resources, add NAT for internet access, and pool relational connections through RDS Proxy.',
      explanation:['A default Lambda can reach public internet endpoints and public AWS APIs but cannot directly reach a private RDS database. VPC-enabled Lambda creates ENIs in selected subnets and uses chosen security groups to reach private VPC resources.','Putting Lambda in a public subnet does not give it internet access; private-subnet functions need routing through a NAT Gateway or instance. RDS Proxy pools connections and stores credentials in Secrets Manager. Database-triggered Lambda invocation differs from RDS event notifications, which report instance lifecycle events rather than row data.'],
      slideTopics:[{heading:'VPC networking',bullets:['Select VPC, subnets, and security groups.','Lambda creates ENIs in the chosen subnets.','Private resources become reachable.','NAT is required for public internet access from private subnets.']},{heading:'Database integrations',bullets:['RDS Proxy pools and shares DB connections.','Secrets Manager holds database credentials.','RDS/Aurora can invoke Lambda for supported database events.','RDS event notifications describe instance/service events.']}],
      takeaways:['Default Lambda is outside customer VPC reach.','VPC attachment enables private access.','Public subnet alone does not grant internet access.','RDS Proxy protects connection capacity.'],examTip:'For bursty Lambda access to RDS, combine VPC networking with RDS Proxy rather than opening one database connection per invocation.'
    },
    'Model data in DynamoDB':{
      sourcePages:'466–468',summary:'Design a serverless NoSQL table around primary-key access with items, attributes, partition keys, and optional sort keys.',
      explanation:['DynamoDB is a fully managed, multi-AZ, serverless NoSQL database with transaction support, low-millisecond performance, integrated IAM, and table classes. The deck contrasts it with relational databases and emphasizes scaling without database-server provisioning.','Every table has a primary key chosen at creation. A simple primary key uses only a partition key, which must be unique per item. A composite primary key combines partition and sort keys, allowing repeated partition-key values when the pair remains unique. Items contain flexible attributes with a 400 KB source-era maximum.'],
      slideTopics:[{heading:'Table structure',bullets:['Table contains items.','Item contains attributes.','Primary key identifies each item.','Attributes may vary by item except required key fields.']},{heading:'Primary keys',bullets:['Partition key alone must be unique.','Composite key adds a sort key.','Partition + sort combination must be unique.','Key design determines access and distribution.']}],
      takeaways:['DynamoDB is managed NoSQL.','Primary key is an upfront design decision.','Composite keys group related items.','Items can have flexible attributes.'],examTip:'Start DynamoDB design from query access patterns and choose keys that avoid hot partitions while answering those queries.'
    },
    'Choose DynamoDB capacity mode':{
      sourcePages:'469',summary:'Use provisioned mode for planned throughput and reserved capacity, or on-demand mode for unpredictable workloads without capacity planning.',
      explanation:['Provisioned mode specifies read and write capacity units and can add Auto Scaling. It fits predictable traffic and offers provisioned-capacity pricing options.','On-demand mode automatically scales with workload and charges per request, fitting unknown, unpredictable, or steeply varying demand. The deck says mode can be switched every 24 hours; timing and pricing details are source-era settings.'],
      slideTopics:[{heading:'Provisioned',bullets:['Set read and write capacity units.','Optionally enable Auto Scaling.','Plan throughput in advance.','Fits stable, predictable traffic.']},{heading:'On-demand',bullets:['No capacity planning.','Automatically accommodates demand.','Pay per request.','Fits unknown or spiky traffic.']}],
      takeaways:['Provisioned reserves throughput.','Auto Scaling adjusts provisioned capacity.','On-demand follows requests automatically.','Workload predictability guides selection.'],examTip:'Choose on-demand for a new table with unpredictable traffic and provisioned for stable, understood throughput that benefits from planning.'
    },
    'Accelerate DynamoDB reads with DAX':{
      sourcePages:'470–471',summary:'Place a managed in-memory DAX cluster before DynamoDB for microsecond item/query reads without changing application logic.',
      explanation:['DynamoDB Accelerator is a managed, highly available, DynamoDB-compatible cache. It addresses read congestion by caching individual objects plus Query and Scan results and can scale to a ten-node cluster in the source slide.','DAX provides microsecond cached reads and uses a default five-minute TTL in the deck. Unlike ElastiCache, it is designed specifically as a DynamoDB-compatible cache; ElastiCache fits more general object/data structures or aggregation results.'],
      slideTopics:[{heading:'DAX path',bullets:['Application uses the DAX-compatible client.','Cache hit returns in microseconds.','Cache miss reads DynamoDB and populates DAX.','Cluster nodes provide availability and read scaling.']},{heading:'DAX versus ElastiCache',bullets:['DAX caches DynamoDB items, Query, and Scan results.','ElastiCache is a general Redis/Memcached data store.','Choose from the data and API model, not latency alone.']}],
      takeaways:['DAX is DynamoDB-specific.','It reduces repeated read load.','Cached reads reach microsecond latency.','ElastiCache serves broader cache structures.'],examTip:'Choose DAX when the application needs DynamoDB API compatibility and microsecond cached reads.'
    },
    'React to changes with DynamoDB Streams':{
      sourcePages:'472–473',summary:'Capture an ordered sequence of table item modifications and process each shard with Lambda or KCL-based consumers.',
      explanation:['DynamoDB Streams records item-level create, update, and delete modifications in order for each item/key. The deck lists real-time reactions, analytics, derived tables, OpenSearch insertion, and cross-Region replication as use cases.','Stream records retain for 24 hours in the source slide. Processing can use Lambda or the DynamoDB KCL Adapter, with consumers then invoking SNS or writing derived data. Kinesis Data Streams is shown as an alternative destination with longer retention and more consumer capacity.'],
      slideTopics:[{heading:'Change stream',bullets:['Captures create, update, and delete events.','Preserves item-level modification order.','Record can include key and selected before/after images.','Retention is 24 hours in the deck.']},{heading:'Processing',bullets:['Lambda event source mapping.','DynamoDB KCL Adapter.','Publish notifications or update derived systems.','Kinesis Data Streams offers another streaming path.']}],
      takeaways:['Streams expose item changes.','Order is per item/partition key.','Lambda can process records automatically.','Retention is limited.'],examTip:'Use DynamoDB Streams to react to table mutations without placing event-publishing code in every writer.'
    },
    'Replicate globally with DynamoDB Global Tables':{
      sourcePages:'474',summary:'Create active-active multi-Region DynamoDB replicas so applications can read and write locally with low latency.',
      explanation:['Global Tables replicate one DynamoDB table across selected AWS Regions. The design is active-active: applications can read and write in every participating Region.','The slide requires DynamoDB Streams because changes must replicate between replicas. Global Tables fit low-latency multi-Region applications and improve regional resilience.'],
      slideTopics:[{heading:'Active-active topology',bullets:['Create replicas in multiple Regions.','Each Region accepts reads.','Each Region accepts writes.','Changes replicate among table replicas.']},{heading:'Prerequisite and fit',bullets:['DynamoDB Streams must be enabled.','Applications use a local regional endpoint.','Fits globally distributed users and regional failover.']}],
      takeaways:['Global Tables are multi-Region.','Every replica is writable.','Replication is active-active.','Streams support change replication.'],examTip:'Choose Global Tables when writes must continue in more than one Region; read replicas in other database products may be read-only.'
    },
    'Manage DynamoDB retention, backup, and S3 exchange':{
      sourcePages:'475–477',summary:'Expire items with TTL, restore independent tables with PITR or on-demand backups, and import/export data through S3 without consuming table capacity.',
      explanation:['DynamoDB TTL automatically deletes items after an expiry timestamp, supporting current-data retention, regulations, and web-session cleanup. Deleted items can appear in DynamoDB Streams.','Point-in-time recovery provides continuous backups for the source-era 35-day window; on-demand backups persist until deletion. Restore creates a new table. PITR-enabled tables can export any point in the window to S3 without consuming read capacity, and S3 data in CSV, DynamoDB JSON, or Ion can import into a new table without consuming write capacity.'],
      slideTopics:[{heading:'TTL and backups',bullets:['TTL removes expired items automatically.','PITR provides continuous recovery points.','On-demand backups persist until deleted.','Restore creates a new table.']},{heading:'S3 integration',bullets:['Export PITR snapshots to S3.','Export does not consume read capacity.','Import CSV/JSON/Ion into a new table.','Import does not consume write capacity.']}],
      takeaways:['TTL is automatic item expiration.','PITR and on-demand backups have different retention.','Restore does not overwrite the source table.','S3 exchange avoids live table capacity use.'],examTip:'Use TTL for item lifecycle, not as a precise scheduler; use PITR or backups for recovery.'
    },
    'Build managed APIs with API Gateway':{
      sourcePages:'478–481',summary:'Expose Lambda, HTTP services, or AWS service APIs through a managed REST/WebSocket gateway with stages, throttling, caching, and transformations.',
      explanation:['The serverless API diagram connects an HTTPS REST client to API Gateway, Lambda, and DynamoDB. API Gateway manages versioning, environments, authentication, API keys, throttling, transformations, caching, SDK generation, and API definitions without server infrastructure.','Integrations include Lambda proxy, public or private HTTP backends, and direct AWS service APIs. The Kinesis example authenticates and throttles clients before sending records without an intermediary Lambda, and can transform incoming requests to the service format.'],
      slideTopics:[{heading:'API management',bullets:['REST and WebSocket protocols.','Stages for development environments.','Throttling, caching, API keys, and monitoring.','Request/response transformations and SDK generation.']},{heading:'Backends',bullets:['Lambda function.','Public HTTP endpoint.','Private ALB through VPC Link.','Direct AWS service action such as Kinesis PutRecord.']}],
      takeaways:['API Gateway is a managed API front door.','It supports serverless and HTTP backends.','Direct service integration can remove Lambda.','Stages and throttling are built in.'],examTip:'Use direct AWS service integration when API Gateway can transform and authorize the request without custom compute logic.'
    },
    'Select and secure an API Gateway endpoint':{
      sourcePages:'482–483',summary:'Choose edge-optimized, Regional, or private endpoints and authenticate callers with IAM, Cognito, or a Lambda authorizer.',
      explanation:['Edge-optimized endpoints route global clients through CloudFront while the API remains in one Region. Regional endpoints serve clients in the same Region and can be paired with a customer-controlled CloudFront distribution. Private endpoints are reachable only from a VPC through an interface endpoint and use a resource policy.','Authentication options are IAM roles for internal AWS clients, Cognito for external web/mobile users, and Lambda authorizers for custom token logic. API Gateway can use custom domains with ACM certificates; edge endpoint certificates belong in us-east-1 while Regional certificates belong in the API Region in the source slide.'],
      slideTopics:[{heading:'Endpoint types',bullets:['Edge-optimized for geographically distributed clients.','Regional for clients near the API Region.','Private for VPC-only access through an interface endpoint.']},{heading:'Security',bullets:['IAM authorization.','Cognito user identity.','Lambda custom authorizer.','Custom domains and ACM certificates.']}],
      takeaways:['Endpoint scope controls reachability.','Private APIs use interface endpoints.','IAM, Cognito, and authorizers serve different identities.','Certificate Region depends on endpoint type.'],examTip:'Choose private API Gateway plus an interface VPC endpoint when the API must not be reachable from the public internet.'
    },
    'Orchestrate workflows with Step Functions':{
      sourcePages:'484',summary:'Build visual state-machine workflows with sequencing, parallelism, conditions, waits, timeouts, and error handling across AWS services.',
      explanation:['AWS Step Functions orchestrates Lambda and other services in a serverless visual workflow. It expresses sequence, parallel branches, conditions, timeouts, retries, and error handling without embedding the entire coordination state in one function.','The slide lists EC2, ECS, on-premises servers, API Gateway, SQS, and SNS among integrations. Human approval, order fulfillment, data processing, and web application workflows are representative uses.'],
      slideTopics:[{heading:'Workflow controls',bullets:['Sequence tasks.','Run parallel branches.','Choose conditions.','Wait or time out.','Catch and retry errors.']},{heading:'Integrated work',bullets:['Lambda and API Gateway.','ECS and EC2 jobs.','SQS and SNS messaging.','On-premises activities and human approval patterns.']}],
      takeaways:['Step Functions orchestrates state.','State machines make flow visual.','Retries and catches are explicit.','Workflows integrate many AWS services.'],examTip:'Use Step Functions for multi-step coordination; use SQS when the primary need is durable decoupled work buffering.'
    },
    'Authenticate app users with Cognito User Pools':{
      sourcePages:'485–487',summary:'Create a managed web/mobile user directory that signs users in, federates identities, and returns JWT tokens to API Gateway or ALB.',
      explanation:['Cognito User Pools provide application sign-up and sign-in through a serverless user directory. Features include username/email and password login, password reset, email/phone verification, MFA, compromised-credential checks, adaptive authentication, and custom flows through Lambda triggers.','User Pools can federate Facebook, Google, SAML, and OpenID Connect identities. After login, the pool returns a JWT; API Gateway or an Application Load Balancer validates the token before allowing the request.'],
      slideTopics:[{heading:'User directory',bullets:['Managed sign-up and sign-in.','Password policies, reset, verification, and MFA.','Lambda triggers customize authentication events.','Block compromised or suspicious credentials.']},{heading:'Federation and integration',bullets:['Social, SAML, and OpenID Connect providers.','Returns JWT tokens.','API Gateway validates tokens for REST APIs.','ALB can authenticate browser traffic.']}],
      takeaways:['User Pools authenticate application users.','They issue JWT tokens.','Federation unifies external providers.','API Gateway and ALB integrate directly.'],examTip:'Choose a User Pool when the application needs sign-up/sign-in and tokens, not direct AWS resource credentials.'
    },
    'Authorize direct AWS access with Cognito Identity Pools':{
      sourcePages:'488–490',summary:'Exchange trusted user tokens for temporary IAM credentials so web/mobile clients can call AWS services directly with scoped permissions.',
      explanation:['Cognito Identity Pools create federated identities and temporary AWS credentials. Users may come from a Cognito User Pool, third-party provider, SAML/OpenID Connect, or an optional guest flow.','The Identity Pool maps authenticated or guest identities to IAM roles, allowing direct access to services such as S3 or DynamoDB. The row-level DynamoDB example uses the identity ID in an IAM LeadingKeys condition so each user accesses only items whose partition key matches that identity.'],
      slideTopics:[{heading:'Credential exchange',bullets:['User signs in with an identity provider.','Application submits the resulting token to Identity Pools.','Identity Pool returns temporary AWS credentials.','IAM role defines permitted AWS actions.']},{heading:'Fine-grained access',bullets:['Authenticated and guest roles can differ.','Clients call S3 or DynamoDB directly.','Policy variables can include Cognito identity ID.','DynamoDB LeadingKeys can enforce per-user rows.']}],
      takeaways:['Identity Pools authorize AWS access.','They return temporary credentials.','User Pools and Identity Pools solve different tasks.','IAM policies scope each identity’s resources.'],examTip:'Use User Pools for authentication and Identity Pools when the client also needs temporary credentials to call AWS services directly.'
    }
  };

  sectionNineteenLectures.forEach(lecture=>Object.assign(lecture,sectionNineteenSlideOverrides[lecture.title]||{}));

  const sectionTwentySlideOverrides={
    'Design a serverless mobile to-do application':{
      sourcePages:'491–497',summary:'Assemble API Gateway, Lambda, DynamoDB, Cognito, S3, DAX, and API caching from the mobile app’s authentication, file, and throughput requirements.',
      explanation:['MyTodoList needs HTTPS REST APIs, a serverless design, user authentication, per-user data access, and the ability to read and write to-dos. The base flow authenticates with Cognito, calls API Gateway, invokes Lambda, and reads or writes DynamoDB.','For direct file access, Cognito Identity Pools issue temporary credentials restricted to the user’s S3 prefix. DAX accelerates repeated reads of dynamic DynamoDB data; static data can move to S3. API Gateway caching reduces repeated backend calls, and usage plans/API keys can meter customers.'],
      slideTopics:[{heading:'Core API',bullets:['Cognito authenticates mobile users.','API Gateway exposes HTTPS REST endpoints.','Lambda implements CRUD logic.','DynamoDB stores to-do items.']},{heading:'Files and read performance',bullets:['Identity Pools grant scoped temporary S3 access.','IAM policy restricts each user’s S3 prefix.','DAX caches frequent DynamoDB reads.','Static content can be stored directly in S3.']},{heading:'API controls',bullets:['API Gateway cache reduces Lambda/DynamoDB calls.','Usage plans and API keys meter customer access.','Throttling protects the backend.']}],
      takeaways:['Cognito handles identity.','API Gateway and Lambda form the serverless API.','Identity Pools enable direct scoped S3 access.','DAX and API caching operate at different layers.'],examTip:'Use DAX for DynamoDB-compatible caching and API Gateway cache for repeated full API responses.'
    },
    'Build a globally scalable serverless website':{
      sourcePages:'498–505',summary:'Serve a global blog with private S3 plus CloudFront, a serverless API, DynamoDB Global Tables, and asynchronous SNS/S3/Lambda workflows.',
      explanation:['MyBlog.com is read-heavy, globally accessed, partly static, and partly dynamic. CloudFront distributes static S3 content while Origin Access Control and a bucket policy keep the bucket private. API Gateway and Lambda provide the public REST API for dynamic requests.','DynamoDB Global Tables give multi-Region reads and writes. A new user record in DynamoDB Streams invokes Lambda, which publishes a welcome message to SNS. Image uploads to S3 trigger Lambda thumbnail generation, with separate S3 prefixes and CloudFront cache behavior for images.'],
      slideTopics:[{heading:'Global content and API',bullets:['CloudFront caches private S3 static content.','OAC and bucket policy restrict direct S3 access.','API Gateway routes dynamic REST calls to Lambda.','Lambda reads/writes DynamoDB.']},{heading:'Global and event-driven data',bullets:['Global Tables replicate active-active across Regions.','DynamoDB Streams trigger welcome-email Lambda.','Lambda publishes email through SNS.','S3 uploads trigger thumbnail generation.']}],
      takeaways:['CloudFront and S3 serve global static content.','API Gateway/Lambda serve dynamic APIs.','Global Tables provide active-active regional data.','Streams and S3 events decouple side effects.'],examTip:'Separate the static read path from dynamic API calls, then add event-driven workflows for asynchronous email and media processing.'
    },
    'Compose independently designed microservices':{
      sourcePages:'506–508',summary:'Let each microservice choose its own compute and data stack while using synchronous APIs or asynchronous queues for communication.',
      explanation:['The microservices diagram combines API Gateway, Lambda, ALB, EC2 Auto Scaling, ECS, RDS, ElastiCache, and DynamoDB. Each service can scale and be implemented independently, and DNS names provide stable endpoints as infrastructure changes.','Synchronous integration uses API Gateway or load balancers, but traffic spikes can amplify through downstream services. Asynchronous integration through SQS, Kinesis, SNS, Lambda triggers, or S3 events provides decoupling and sudden-load resistance. API cloning and Swagger/OpenAPI support help reproduce API environments.'],
      slideTopics:[{heading:'Independent stacks',bullets:['Lambda + DynamoDB for one service.','EC2/ALB + RDS/ElastiCache for another.','ECS behind load balancing for a containerized service.','Each service scales and deploys independently.']},{heading:'Communication styles',bullets:['Synchronous: API Gateway and load balancers.','Asynchronous: SQS, Kinesis, SNS, S3 events, and Lambda triggers.','Asynchronous buffers reduce spike propagation.']}],
      takeaways:['Microservices can use different AWS stacks.','Stable DNS/API endpoints hide implementation changes.','Synchronous calls couple latency and availability.','Asynchronous events improve decoupling.'],examTip:'Choose asynchronous messaging between services when downstream capacity must be protected from bursty callers.'
    },
    'Offload software distribution with CloudFront':{
      sourcePages:'509–512',summary:'Place CloudFront before an existing EC2/EFS software-download architecture to cache immutable updates and absorb global download spikes.',
      explanation:['The original application runs on a Multi-AZ EC2 Auto Scaling fleet and stores software updates on EFS. A release causes a sudden wave of downloads, forcing expensive EC2 and EFS scaling even though every user requests the same static file.','Adding CloudFront requires no application redesign. The first request reaches the origin, then edge caches serve repeated downloads. Because software update files are static and never change, they are ideal for long cache lifetimes, reducing origin load, EC2/EFS cost, and user latency.'],
      slideTopics:[{heading:'Original bottleneck',bullets:['EC2 fleet serves every download.','EFS supplies the same update file repeatedly.','Release spikes force both tiers to scale.','Global users traverse the public path to the origin.']},{heading:'CloudFront offload',bullets:['Distribution sits in front of the existing origin.','Edge locations cache the static update.','Repeated requests avoid EC2 and EFS.','AWS backbone and local edges improve global delivery.']}],
      takeaways:['Static immutable files cache well.','CloudFront absorbs repeated downloads.','Origin capacity and cost decline.','Existing architecture can remain unchanged.'],examTip:'When many global users download the same static file, cache it at CloudFront instead of scaling the origin for every request.'
    }
  };

  sectionTwentyLectures.forEach(lecture=>Object.assign(lecture,sectionTwentySlideOverrides[lecture.title]||{}));

  const sectionTwentyOneSlideOverrides={
    'Choose a database from the access pattern':{
      sourcePages:'513–515',summary:'Select a database from workload access patterns, data shape, consistency, latency, scale, durability, and operational requirements.',
      explanation:['The deck asks whether the system is read- or write-heavy, how much data exists and for how long, whether it grows, its average and peak users, latency target, concurrent users, query model, join and schema needs, and required availability/durability.','It groups relational OLTP into RDS/Aurora, NoSQL into DynamoDB, ElastiCache, Neptune, DocumentDB, and Keyspaces, object storage into S3/Glacier, data warehousing into Redshift, search into OpenSearch, and graph relationships into Neptune.'],
      slideTopics:[{heading:'Workload questions',bullets:['Read/write mix and peak concurrency.','Latency, throughput, scale, and growth.','Structured, semi-structured, or unstructured data.','Strong schema, joins, transactions, or flexible access.']},{heading:'Operational questions',bullets:['Managed/serverless or host control.','Multi-AZ, read replicas, and cross-Region needs.','Backup, restore, retention, and cost.','Engine compatibility or migration constraints.']}],
      takeaways:['Access pattern comes before product name.','SQL joins and transactions point toward relational engines.','NoSQL families optimize distinct data models.','Resilience and operations are selection inputs.'],examTip:'Eliminate databases whose native data model cannot answer the required query efficiently before comparing price or scaling.'
    },
    'Run relational OLTP with Amazon RDS':{
      sourcePages:'516',summary:'Use managed RDS engines for relational SQL, joins, transactions, and conventional database compatibility.',
      explanation:['The RDS summary lists PostgreSQL, MySQL, Oracle, SQL Server, Db2, MariaDB, and RDS Custom. Customers provision an RDS instance size and EBS volume type/size, while storage can autoscale.','Read replicas scale reads and Multi-AZ provides disaster recovery. RDS includes security through IAM integration, security groups, KMS at rest, and TLS in flight, plus automated backups and maintenance; RDS Custom provides underlying-instance access for Oracle/SQL Server.'],
      slideTopics:[{heading:'Relational service',bullets:['Managed commercial and open-source SQL engines.','Provisioned database instance and EBS storage.','Supports joins and OLTP transactions.']},{heading:'Scale and operations',bullets:['Read replicas scale reads.','Multi-AZ provides failover.','Backups, patching, and maintenance are managed.','RDS Custom exposes deeper host/database customization.']}],
      takeaways:['RDS serves relational OLTP.','Engine compatibility can drive migration.','Read replicas and Multi-AZ differ.','RDS Custom adds host access.'],examTip:'Choose RDS for a standard managed relational engine and RDS Custom only when host/database customization is explicitly required.'
    },
    'Use Aurora for cloud-native relational scale':{
      sourcePages:'517',summary:'Use MySQL/PostgreSQL-compatible Aurora when relational workloads need distributed storage, many readers, rapid failover, and serverless/global options.',
      explanation:['Aurora separates compute from storage and keeps six data copies across three AZs in the deck. Storage is self-healing and auto-scaling, while one writer and up to 15 readers provide compute endpoints and fast failover; counts and scale figures are source-era specifications.','Features include automated backups, point-in-time recovery, security controls, cloning, Serverless capacity, Global Database, Machine Learning integration, and Babelfish for SQL Server-oriented migration.'],
      slideTopics:[{heading:'Cluster architecture',bullets:['MySQL and PostgreSQL compatible APIs.','One writer with multiple reader instances.','Six storage copies across three AZs.','Reader endpoint distributes read connections.']},{heading:'Specialized options',bullets:['Aurora Serverless for variable demand.','Global Database for multi-Region reads/DR.','Fast copy-on-write cloning.','Babelfish and ML integrations.']}],
      takeaways:['Aurora is AWS-native relational.','Compute and distributed storage are separate.','Readers scale and assist failover.','Global/Serverless options address specialized requirements.'],examTip:'Choose Aurora when relational compatibility must be combined with cloud-native availability and read scaling.'
    },
    'Cache hot data with Amazon ElastiCache':{
      sourcePages:'518',summary:'Use managed Redis or Memcached for sub-millisecond hot data, sessions, counters, and cache-aside acceleration.',
      explanation:['ElastiCache is a managed in-memory key/value data store. Customers choose a Redis or Memcached engine and node type, while clustering supports scale; it complements rather than replaces a durable database.','Redis provides Multi-AZ, read replicas, persistence, backup/restore, and richer data types. Memcached offers simple distributed sharding and multithreading without native high availability, persistence, or backup.'],
      slideTopics:[{heading:'Common roles',bullets:['Cache repeated database reads.','Store shared web sessions.','Maintain counters and leaderboards.','Deliver sub-millisecond access.']},{heading:'Engine choice',bullets:['Redis: HA, replicas, persistence, backup, data structures.','Memcached: simple multithreaded distributed cache.','Applications must plan cache invalidation and misses.']}],
      takeaways:['ElastiCache stores hot in-memory data.','Redis has richer durability/HA features.','Memcached is a simpler cache.','The durable system of record remains elsewhere.'],examTip:'Use ElastiCache when the application can tolerate cache misses and rebuild values from a durable source.'
    },
    'Scale key-value workloads with DynamoDB':{
      sourcePages:'519',summary:'Use serverless DynamoDB for millisecond key-value/document access, automatic multi-AZ operation, and high-scale event-driven integrations.',
      explanation:['DynamoDB is an AWS-proprietary managed serverless NoSQL database. It offers provisioned capacity with optional Auto Scaling or on-demand capacity, low-millisecond latency, IAM security, and no database-server administration.','Features in the summary include DAX caching, DynamoDB Streams, TTL, continuous/on-demand backups, Standard and Standard-IA table classes, and active-active Global Tables. Data modeling begins with partition and optional sort keys rather than joins.'],
      slideTopics:[{heading:'Core model',bullets:['Key-value/document items.','Partition key and optional sort key.','Provisioned or on-demand capacity.','Managed multi-AZ scaling.']},{heading:'Extensions',bullets:['DAX for microsecond cached reads.','Streams for item change processing.','TTL and backup/restore.','Global Tables for active-active Regions.']}],
      takeaways:['DynamoDB is serverless NoSQL.','Key access replaces relational joins.','Capacity mode follows traffic predictability.','Streams and Global Tables extend the model.'],examTip:'Choose DynamoDB for known key-based access at scale; do not force relational ad hoc joins into its data model.'
    },
    'Store large immutable objects in Amazon S3':{
      sourcePages:'520',summary:'Use S3 as a serverless key/object-value store for large immutable blobs, not as a low-latency small-row database.',
      explanation:['The database summary frames S3 as key/value object storage that is strong for larger objects but less suitable for many small records. It scales without database provisioning and uses object keys as identifiers.','S3 provides multi-AZ durability, tiers, versioning, encryption, access controls, and event notifications. It fits static content, archives, backups, and data lakes, but querying/searching object contents generally requires analytics services rather than transactional database operations.'],
      slideTopics:[{heading:'Object data model',bullets:['Bucket contains keyed objects.','Object body can be very large.','No relational joins or row updates.','Best for immutable or whole-object access.']},{heading:'Platform features',bullets:['Serverless scale and multi-AZ durability.','Storage classes and Lifecycle policies.','Encryption and IAM/bucket policies.','Event notifications integrate processing.']}],
      takeaways:['S3 is object storage.','Keys identify blobs, not database rows.','Whole-object access differs from OLTP queries.','Analytics tools query data lakes stored in S3.'],examTip:'Choose S3 for files, media, backups, and data-lake objects; choose a database for fine-grained transactional records.'
    },
    'Run MongoDB-compatible documents with DocumentDB':{
      sourcePages:'521',summary:'Use DocumentDB for a managed MongoDB-compatible JSON document database with replicated storage and read replicas.',
      explanation:['The slide describes DocumentDB as AWS’s managed implementation for MongoDB-compatible workloads, analogous to Aurora’s compatibility approach. MongoDB-style databases store, query, and index JSON documents.','DocumentDB uses storage replicated across three AZs, automatically grows in source-era increments, and can scale reads with up to 15 replicas in the deck. It offers managed availability and backups for document-oriented migration.'],
      slideTopics:[{heading:'Document model',bullets:['Store and query JSON-like documents.','Create indexes over document fields.','Use MongoDB-compatible APIs and drivers.']},{heading:'Managed architecture',bullets:['Storage replicated across three AZs.','Automatic storage growth.','Read replicas scale queries.','Managed backups and availability.']}],
      takeaways:['DocumentDB is document-oriented.','It targets MongoDB compatibility.','Replicas scale reads.','Compatibility should be validated for the workload.'],examTip:'Choose DocumentDB when MongoDB API compatibility and managed AWS operation are explicit requirements.'
    },
    'Traverse relationships with Amazon Neptune':{
      sourcePages:'522–523',summary:'Use Neptune for graph traversals across densely connected relationships and Neptune Streams for ordered graph-change processing.',
      explanation:['Neptune is a fully managed graph database. The slides use social networks, knowledge graphs, fraud detection, recommendation engines, and life sciences as examples where relationships are first-class query targets.','The service replicates across three AZs, supports up to 15 read replicas in the source slide, and stores billions of relationships with millisecond latency. Neptune Streams provides an ordered, duplicate-free sequence of graph changes for immediate event processing.'],
      slideTopics:[{heading:'Graph workloads',bullets:['Social connections and shared posts.','Fraud relationship detection.','Recommendation and knowledge graphs.','Life-sciences relationships.']},{heading:'Neptune Streams',bullets:['Ordered sequence of graph changes.','Available immediately after writes.','No duplicate stream records in the slide model.','Supports event notifications and cross-Region synchronization.']}],
      takeaways:['Neptune models vertices and relationships.','Graph traversal is its core strength.','Read replicas scale graph reads.','Streams expose ordered changes.'],examTip:'Choose Neptune when queries traverse relationships several hops deep rather than retrieving documents by key.'
    },
    'Preserve Cassandra access with Amazon Keyspaces':{
      sourcePages:'524',summary:'Use serverless Amazon Keyspaces for managed Apache Cassandra-compatible workloads without operating Cassandra clusters.',
      explanation:['Apache Cassandra is an open-source distributed NoSQL database. Amazon Keyspaces provides a managed Cassandra-compatible service, keeping the application query/API model while removing server provisioning.','The deck describes it as serverless, scalable, highly available, and multi-AZ, with on-demand and provisioned capacity modes, encryption, backup/PITR, and single-digit millisecond latency in the source edition.'],
      slideTopics:[{heading:'Compatibility',bullets:['Apache Cassandra query/API model.','Migrate Cassandra-oriented applications.','No cluster nodes for the customer to manage.']},{heading:'Managed features',bullets:['Serverless multi-AZ availability.','On-demand or provisioned capacity.','Encryption, backup, and PITR.','Single-digit millisecond source-era latency.']}],
      takeaways:['Keyspaces is Cassandra-compatible.','AWS manages the database infrastructure.','Capacity modes match DynamoDB-like choices.','It fits Cassandra migration constraints.'],examTip:'Choose Keyspaces when the requirement names Cassandra compatibility; choose DynamoDB for a new AWS-native key-value design without that constraint.'
    },
    'Store time-series measurements with Timestream patterns':{
      sourcePages:'525–526',summary:'Use Timestream for serverless time-stamped measurements, automatic tiering, scheduled queries, and analytics integrations.',
      explanation:['Amazon Timestream is a managed, scalable, serverless time-series database designed to store and analyze very large event volumes. It automatically adjusts capacity and stores recent data in memory while moving older data to a cost-optimized tier.','The architecture ingests from IoT, Kinesis Data Streams, Lambda, Prometheus, and MSK. Flink, Lambda, Grafana, QuickSight, SageMaker, and other tools consume or analyze data. Scheduled queries calculate and store aggregates on a recurring schedule.'],
      slideTopics:[{heading:'Time-series model',bullets:['Records measurements with timestamps and dimensions.','In-memory tier serves recent data.','Cost-optimized tier retains older history.','Built-in time-series analytics functions.']},{heading:'Architecture',bullets:['Ingest IoT, streams, Lambda, Prometheus, or Kafka.','Run real-time or scheduled aggregations.','Visualize through Grafana or QuickSight.','Feed analytics and machine-learning tools.']}],
      takeaways:['Timestream is purpose-built for time series.','Storage tiers follow data age.','Scheduled queries precompute aggregates.','Streaming and visualization services integrate directly.'],examTip:'Choose Timestream when timestamped measurements, retention tiers, and time-window analytics dominate the access pattern.'
    }
  };

  sectionTwentyOneLectures.forEach(lecture=>Object.assign(lecture,sectionTwentyOneSlideOverrides[lecture.title]||{}));

  const sectionTwentyTwoSlideOverrides={
    'Query S3 data with Amazon Athena':{
      sourcePages:'527–530',summary:'Run serverless SQL over files in S3, reduce scanned bytes with columnar formats and partitions, and federate queries through Lambda connectors.',
      explanation:['Amazon Athena is a serverless SQL query service for S3 data. It supports CSV, JSON, ORC, Avro, and Parquet and charges by bytes scanned, making it useful for ad hoc analytics, log queries, and reports.','The deck recommends Parquet or ORC, compression, partitioned data sets, and larger files to improve performance and cost. Federated Query invokes Lambda data-source connectors to query relational, NoSQL, object, and custom sources and stores results back in S3.'],
      slideTopics:[{heading:'Serverless S3 SQL',bullets:['Point Athena at data stored in S3.','Use standard SQL through the Presto-based engine in the deck.','No cluster to provision.','Pay for scanned data.']},{heading:'Optimize and federate',bullets:['Convert to Parquet or ORC.','Compress and partition data.','Use Lambda connectors for external data sources.','Store federated results in S3.']}],
      takeaways:['Athena queries S3 in place.','Columnar formats reduce scanning.','Partitions prune data.','Federation extends beyond S3.'],examTip:'When Athena cost is high, reduce bytes scanned with Parquet/ORC compression and partition filters.'
    },
    'Build an OLAP warehouse with Amazon Redshift':{
      sourcePages:'531–532, 534',summary:'Use a columnar MPP Redshift cluster or Serverless workgroup for analytical warehousing, loading data in large batches through COPY.',
      explanation:['Redshift is PostgreSQL-based but designed for OLAP rather than OLTP. Its columnar storage and massively parallel processing provide analytical performance at data-warehouse scale.','A provisioned cluster has a leader node for planning/aggregation and compute nodes for execution; Redshift Serverless automatically provisions capacity. Large COPY loads from S3 are preferred, while Firehose can stage through S3 and EC2 applications can insert using a JDBC driver.'],
      slideTopics:[{heading:'Warehouse architecture',bullets:['Columnar OLAP storage.','Leader node plans and aggregates.','Compute nodes execute query work in parallel.','Provisioned cluster or Serverless mode.']},{heading:'Loading patterns',bullets:['COPY large batches from S3.','Firehose delivers through S3 COPY.','JDBC inserts are possible but large loads are more efficient.','Enhanced VPC Routing keeps COPY/UNLOAD traffic in the VPC.']}],
      takeaways:['Redshift is OLAP, not OLTP.','MPP distributes analytical queries.','COPY is the preferred bulk load.','Serverless removes cluster provisioning.'],examTip:'Choose Redshift for repeated structured warehouse analytics; choose Athena for serverless ad hoc queries directly on S3.'
    },
    'Protect and extend Redshift analytics':{
      sourcePages:'533, 535',summary:'Recover Redshift with incremental S3-backed snapshots and query external S3 data through Redshift Spectrum.',
      explanation:['Redshift snapshots are incremental point-in-time cluster backups stored internally in S3. Automated snapshots use a retention window; manual snapshots persist until deletion. Cross-Region snapshot copy can support disaster recovery, and some clusters support Multi-AZ in the deck.','Redshift Spectrum runs SQL against data already in S3 without loading it into cluster storage. A Redshift cluster initiates the query, then a large Spectrum compute fleet scans external data and returns results to the cluster.'],
      slideTopics:[{heading:'Snapshots and DR',bullets:['Incremental snapshots stored internally in S3.','Automated retention versus manual persistence.','Restore creates a new cluster.','Cross-Region copy supports DR.']},{heading:'Spectrum',bullets:['Query S3 data without loading it into Redshift.','A running Redshift cluster submits the query.','Spectrum fleet performs distributed scan.','Join external S3 and local warehouse data.']}],
      takeaways:['Snapshots protect cluster state.','Manual and automated retention differ.','Spectrum leaves data in S3.','Spectrum still requires Redshift compute.'],examTip:'Use Spectrum when warehouse queries must join Redshift tables with a large S3 data lake without ingesting every object.'
    },
    'Search and analyze text with Amazon OpenSearch Service':{
      sourcePages:'536–539',summary:'Index arbitrary fields for search and log analytics, feeding OpenSearch from DynamoDB Streams, CloudWatch Logs, Kinesis, or Firehose.',
      explanation:['OpenSearch is the successor to Elasticsearch in the deck and supports searching any indexed field, full-text search, analytical queries, and dashboard visualization. It is commonly paired with a system of record because it does not replace transactional storage.','DynamoDB changes can flow through Streams and Lambda into OpenSearch. CloudWatch Logs subscriptions can use Lambda or Firehose, and Kinesis Data Streams can feed Firehose with optional Lambda transformation before near-real-time indexing.'],
      slideTopics:[{heading:'Search model',bullets:['Index many fields for flexible search.','Full-text and log analytics.','OpenSearch Dashboards visualizes results.','Cluster or Serverless option in the deck.']},{heading:'Ingestion patterns',bullets:['DynamoDB Streams + Lambda.','CloudWatch Logs subscription.','Kinesis Data Streams + Firehose.','Lambda can transform records before indexing.']}],
      takeaways:['OpenSearch is a search index.','A source database remains authoritative.','Streams keep indexes synchronized.','Firehose delivers logs/streams near real time.'],examTip:'Use OpenSearch when queries must search arbitrary text or fields that a primary-key database cannot efficiently query.'
    },
    'Process big data with Amazon EMR':{
      sourcePages:'540–541',summary:'Create managed Hadoop ecosystem clusters on EC2 and choose master, core, and task node purchasing options from workload durability.',
      explanation:['Elastic MapReduce provisions clusters for Hadoop ecosystem tools such as Apache Spark, HBase, Presto, Flink, and Hive. It fits large-scale data processing, analytics, machine learning, web indexing, and big-data workloads.','The master node coordinates and should be long-running; core nodes run tasks and store data; optional task nodes run work only. The deck recommends On-Demand for reliable master/core, Reserved for persistent clusters, and Spot for fault-tolerant task nodes.'],
      slideTopics:[{heading:'Managed ecosystem',bullets:['Provision hundreds of EC2 instances as a cluster.','Install supported Hadoop/Spark tools.','Auto Scaling and AWS integrations are available.']},{heading:'Node roles',bullets:['Master: cluster coordination and health.','Core: processing plus data storage.','Task: processing only.','Purchasing model follows node criticality.']}],
      takeaways:['EMR manages big-data clusters.','Node roles have distinct durability.','Task nodes are the safest Spot candidates.','Persistent clusters can use commitments.'],examTip:'Do not place irreplaceable HDFS data only on interruptible task capacity; task nodes do not store core cluster data.'
    },
    'Visualize insights with Amazon Quick Sight':{
      sourcePages:'542–544',summary:'Create serverless, embeddable BI analyses and dashboards from AWS, SaaS, database, and file data sources.',
      explanation:['Amazon QuickSight is a serverless, ML-powered business intelligence service for interactive dashboards with automatic scale and per-session pricing. It integrates with RDS, Aurora, Redshift, Athena, S3, OpenSearch, Timestream, SaaS tools, JDBC sources, and imported files.','An analysis is the editable workspace; a dashboard is its published read-only view. QuickSight users and groups are internal QuickSight identities rather than IAM identities. Enterprise features include row-level security and SPICE in-memory acceleration.'],
      slideTopics:[{heading:'BI workflow',bullets:['Connect/import a data source.','Build visuals in an analysis.','Publish a dashboard.','Share or embed the dashboard.']},{heading:'Service features',bullets:['SPICE in-memory calculation engine.','Automatic scaling and per-session pricing.','Enterprise row-level security.','Users/groups are not IAM principals.']}],
      takeaways:['QuickSight is managed BI.','Analysis is editable; dashboard is published.','SPICE accelerates interactive queries.','QuickSight identities differ from IAM.'],examTip:'Choose QuickSight for dashboards and visualization, not for performing the upstream ETL transformation itself.'
    },
    'Transform analytics data with AWS Glue':{
      sourcePages:'545–546, 548',summary:'Run serverless ETL jobs, convert data to analytics-friendly formats, and avoid reprocessing through job bookmarks.',
      explanation:['AWS Glue is a managed serverless extract, transform, and load service. A job can read S3 or RDS, transform data, and write another target, such as converting CSV into Parquet for Athena.','Glue jobs are Spark-based, with streaming ETL supported in the deck. Job Bookmarks track processed data, DataBrew provides prebuilt visual cleaning, Studio supplies a graphical ETL interface, and Sensitive Data Quality features identify and transform PII.'],
      slideTopics:[{heading:'ETL flow',bullets:['Extract from S3, RDS, and other sources.','Transform/clean with managed Spark jobs.','Load a target such as a Parquet S3 data set.','Trigger from an S3 event through Lambda when needed.']},{heading:'Authoring and state',bullets:['Job Bookmarks prevent reprocessing.','DataBrew cleans data with prebuilt transformations.','Glue Studio visually creates and monitors jobs.','Streaming ETL processes continuous data.']}],
      takeaways:['Glue is serverless ETL.','Parquet conversion improves Athena.','Bookmarks preserve processing state.','Studio and DataBrew reduce custom coding.'],examTip:'Use Glue to change data format or quality; use Athena after the transformed files are ready to query.'
    },
    'Catalog shared data with AWS Glue Data Catalog':{
      sourcePages:'547–548',summary:'Crawl S3 and database sources into a central metadata catalog reused by Glue, Athena, Redshift Spectrum, and EMR.',
      explanation:['Glue Data Catalog stores metadata as databases and tables that describe data sets in S3, RDS, DynamoDB, JDBC sources, and other systems. A crawler inspects source data and writes or updates that metadata.','Analytics services use the shared catalog rather than rediscovering schema independently. The catalog contains definitions and locations, not the underlying data itself.'],
      slideTopics:[{heading:'Crawler and metadata',bullets:['Crawler scans source structure.','Infers schema and partitions.','Writes databases/tables into Data Catalog.','Re-runs to discover changes.']},{heading:'Consumers',bullets:['Glue ETL jobs.','Amazon Athena.','Redshift Spectrum.','EMR and Lake Formation governance.']}],
      takeaways:['Catalog stores metadata.','Crawler discovers schema.','Data remains in its source.','Many analytics engines share the catalog.'],examTip:'If Athena cannot identify table structure in a data lake, use a Glue crawler/catalog definition rather than moving the data.'
    },
    'Govern an S3 data lake with Lake Formation':{
      sourcePages:'549–551',summary:'Create and secure a central S3 data lake with ingestion blueprints, Glue-backed metadata, and centralized row/column permissions.',
      explanation:['Lake Formation accelerates data-lake setup by discovering, cleansing, transforming, and ingesting data from S3, RDS, on-premises SQL/NoSQL systems, and other sources. It builds on Glue capabilities.','It centralizes complex access control for analytics services and supports row- and column-level security. The diagram allows a user to query selected columns through Athena after Lake Formation applies its permissions over the shared S3 lake.'],
      slideTopics:[{heading:'Lake creation',bullets:['Connect AWS and on-premises sources.','Use source crawlers and ETL/data preparation.','Store central data in S3.','Maintain metadata in the catalog.']},{heading:'Governance',bullets:['Central permission management.','Row-level and column-level controls.','Analytics services receive governed access.','Built on top of AWS Glue.']}],
      takeaways:['Lake Formation builds governed data lakes.','S3 stores lake data.','Glue provides core metadata/ETL components.','Fine-grained permissions centralize access.'],examTip:'Choose Lake Formation when the requirement is centralized fine-grained governance across many data-lake consumers.'
    },
    'Process streams with Managed Service for Apache Flink':{
      sourcePages:'552',summary:'Run managed Java, Scala, or SQL Flink applications for real-time transformations and analytics over streaming sources.',
      explanation:['Amazon Managed Service for Apache Flink, formerly Kinesis Data Analytics for Apache Flink, runs Flink applications without managing the processing cluster. Flink supports Java, Scala, and SQL.','Streaming inputs include Kinesis Data Streams and Amazon MSK. The deck contrasts this with Firehose-style SQL transformations and notes that managed Flink handles provisioning, Auto Scaling, and backups while charging for compute and storage.'],
      slideTopics:[{heading:'Stream application',bullets:['Consume Kinesis Data Streams or MSK.','Execute Flink Java, Scala, or SQL logic.','Maintain state for continuous calculations.','Emit transformed/aggregated results.']},{heading:'Managed operation',bullets:['No Flink cluster provisioning.','Automatic scaling and backups.','Pay for processing and application storage.']}],
      takeaways:['Managed Flink performs real-time processing.','It supports code and SQL.','Kinesis/MSK are common inputs.','AWS manages the runtime infrastructure.'],examTip:'Choose Flink for stateful real-time stream processing; choose Firehose for simpler buffered delivery to a destination.'
    },
    'Run Kafka workloads with Amazon MSK':{
      sourcePages:'553–556',summary:'Use managed Apache Kafka when applications require Kafka APIs, topics, brokers, partitions, and ecosystem compatibility.',
      explanation:['Amazon Managed Streaming for Apache Kafka creates, updates, and deletes Kafka clusters while AWS operates brokers and ZooKeeper/control infrastructure. Customers create producers and consumers and retain control of Kafka data and configuration.','MSK offers provisioned clusters and MSK Serverless. The deck contrasts Kinesis shards and 1 MB records with Kafka topics/partitions and a 1 MB default configurable message limit. Consumers include managed Flink, Glue streaming ETL, Lambda, EC2, ECS, and EKS applications.'],
      slideTopics:[{heading:'Kafka model',bullets:['Producers write topics split into partitions.','Brokers store and serve partition records.','Consumers track offsets and replay data.','AWS manages cluster infrastructure.']},{heading:'MSK choices and consumers',bullets:['Provisioned or Serverless cluster mode.','TLS in flight and KMS at rest.','Flink, Glue, Lambda, EC2, ECS, and EKS consumers.','Use when Kafka compatibility matters.']}],
      takeaways:['MSK is managed Kafka.','Kafka topics use partitions.','Consumers manage offsets and replay.','Serverless removes broker-capacity planning.'],examTip:'Choose MSK when existing applications require Kafka protocols/ecosystem; choose Kinesis for a new AWS-native stream without that constraint.'
    },
    'Assemble a serverless analytics pipeline':{
      sourcePages:'557–559',summary:'Collect IoT events in real time, deliver transformed data to S3, query it with Athena, and visualize results with QuickSight.',
      explanation:['The final architecture requires fully serverless real-time collection, transformation, SQL querying, reporting, and durable storage in a data lake. IoT Core harvests device data, Kinesis Data Streams collects it, and Firehose with Lambda transformation delivers it into S3.','SQS can buffer Lambda jobs after S3 events, supporting retries and asynchronous processing. Athena runs serverless SQL over S3 and QuickSight builds reports and dashboards. The slide also highlights IoT rules that can send events directly into Kinesis.'],
      slideTopics:[{heading:'Ingest and transform',bullets:['IoT Core receives device messages.','Kinesis Data Streams collects real-time events.','Firehose buffers delivery.','Lambda transforms records.','S3 stores the data lake.']},{heading:'Process and analyze',bullets:['S3 events can enqueue processing in SQS.','Lambda workers process asynchronously.','Athena queries S3 with SQL.','QuickSight visualizes Athena results.']}],
      takeaways:['The pipeline is serverless end to end.','Kinesis collects; Firehose delivers.','S3 is the durable lake.','Athena and QuickSight provide query and BI.'],examTip:'Keep stream collection, delivery, storage, query, and visualization roles distinct when selecting services for an analytics pipeline.'
    }
  };

  sectionTwentyTwoLectures.forEach(lecture=>Object.assign(lecture,sectionTwentyTwoSlideOverrides[lecture.title]||{}));

  const sectionTwentyThreeSlideOverrides={
    'Analyze images and video with Amazon Rekognition':{
      sourcePages:'560–562',summary:'Use pretrained computer vision to label images/video, analyze faces, identify celebrities, search face collections, and moderate unsafe content.',
      explanation:['Amazon Rekognition detects objects, people, text, scenes, and activities in images and videos. It supports facial analysis/search, user verification, people counting, celebrity recognition, and familiar-path analysis in video.','Content Moderation returns moderation labels for inappropriate, unwanted, or offensive media with confidence scores. Human review can be added through Amazon Augmented AI, and minimum confidence thresholds tune false-positive/false-negative tradeoffs.'],
      slideTopics:[{heading:'Vision capabilities',bullets:['Object, person, text, and scene labels.','Face analysis, comparison, and searchable face collections.','Celebrity recognition and people counting.','Pathing and activity in video.']},{heading:'Content moderation',bullets:['Detect unsafe image/video categories.','Return hierarchical labels and confidence scores.','Set a confidence threshold.','Route uncertain results to human review with A2I.']}],
      takeaways:['Rekognition analyzes visual media.','Face collections enable search.','Moderation uses labels and confidence.','Human review can handle uncertain cases.'],examTip:'Choose Rekognition for image/video understanding; it does not transcribe audio or extract structured document tables.'
    },
    'Convert speech to text with Amazon Transcribe':{
      sourcePages:'563',summary:'Turn audio into text with automatic speech recognition, language detection, redaction, vocabulary, and multi-speaker identification.',
      explanation:['Amazon Transcribe uses automatic speech recognition to convert speech into text. The slide lists automatic language identification and support for language-specific custom vocabularies.','It can remove personally identifiable information with redaction and identify multiple speakers in an audio stream. Named uses include customer-service transcription, closed captions/subtitles, and media metadata for search.'],
      slideTopics:[{heading:'Speech recognition',bullets:['Input is recorded or streaming audio.','Output is written transcript text.','Automatic language identification.','Custom vocabulary improves domain words.']},{heading:'Processing features',bullets:['PII redaction.','Multi-speaker identification.','Customer-service analytics input.','Captions and searchable media metadata.']}],
      takeaways:['Transcribe converts audio to text.','Custom vocabulary improves specialized terms.','Redaction protects PII.','Speaker labels separate participants.'],examTip:'Audio-to-text points to Transcribe; text-to-audio points to Polly.'
    },
    'Create lifelike speech with Amazon Polly':{
      sourcePages:'564–565',summary:'Synthesize lifelike speech from text and control pronunciation, emphasis, pace, and phrasing through lexicons and SSML.',
      explanation:['Amazon Polly uses deep learning to convert text into speech so applications can speak. The basic input is text and the output is synthesized audio.','Pronunciation lexicons define how stylized names or acronyms should be spoken. Speech Synthesis Markup Language adds controls such as emphasis, phonetic pronunciation, whispering, and speaking style or pacing.'],
      slideTopics:[{heading:'Text-to-speech',bullets:['Application submits text.','Polly synthesizes lifelike audio.','Use in speaking applications and accessibility.']},{heading:'Speech customization',bullets:['Lexicons customize words and acronyms.','SSML controls emphasis and pronunciation.','SSML can alter delivery such as whispering or pacing.']}],
      takeaways:['Polly converts text to speech.','Lexicons customize pronunciation.','SSML customizes delivery.','Generated audio can be reused by applications.'],examTip:'Choose Polly when the desired output is spoken audio, and SSML when the speech needs fine-grained presentation control.'
    },
    'Translate text with Amazon Translate':{
      sourcePages:'566',summary:'Translate text between languages to localize websites, applications, and high-volume content for international users.',
      explanation:['Amazon Translate provides natural language translation as a managed service. Its core boundary is text in one language to text in another language.','The slide emphasizes website/application localization and efficient translation of large volumes of text. It complements Transcribe and Polly but does not itself process speech audio.'],
      slideTopics:[{heading:'Translation flow',bullets:['Provide source-language text.','Select or detect the language as supported.','Receive translated target-language text.']},{heading:'Use cases',bullets:['Localize websites and applications.','Translate high-volume documents or content.','Serve international users with multilingual text.']}],
      takeaways:['Translate is text-to-text.','It localizes content.','It scales managed translation workloads.','Speech conversion requires Transcribe or Polly.'],examTip:'For a spoken-language workflow, compose Transcribe, Translate, and Polly in that input-to-output order.'
    },
    'Build conversational contact centers with Lex and Connect':{
      sourcePages:'567',summary:'Use Lex for speech recognition and intent understanding, then integrate it with Amazon Connect for a cloud contact-center chatbot or IVR.',
      explanation:['Amazon Lex uses the same underlying technology family as Alexa: automatic speech recognition converts speech to text and natural language understanding recognizes user intent. It builds conversational bots.','Amazon Connect is a virtual cloud contact center that receives calls and creates contact flows. The slide combines Connect with Lex to recognize caller requests such as scheduling an appointment and invoke the appropriate Lambda-backed action.'],
      slideTopics:[{heading:'Amazon Lex',bullets:['ASR converts caller speech to text.','NLU identifies intent.','Bot gathers conversational slots/parameters.','Lambda can fulfill the intent.']},{heading:'Amazon Connect',bullets:['Managed virtual contact center.','Receives phone calls and routes contact flows.','Integrates Lex conversational bots.','Supports metrics and contact-center operation.']}],
      takeaways:['Lex builds conversational interfaces.','ASR and NLU are separate steps.','Connect runs contact centers.','Lambda can fulfill a recognized intent.'],examTip:'Choose Lex for chatbot intent recognition and Connect when the scenario also needs a managed telephone/contact-center platform.'
    },
    'Extract meaning from text with Amazon Comprehend':{
      sourcePages:'568',summary:'Apply managed natural-language processing to identify language, entities, phrases, sentiment, topics, and personally identifiable information.',
      explanation:['Amazon Comprehend is a fully managed serverless natural-language-processing service that uses machine learning to find insights and relationships in text.','The slide lists language detection, key phrases, places/people/brands/events, sentiment, tokenization/syntax, topic grouping, and PII detection. It can organize large text collections by inferred topics.'],
      slideTopics:[{heading:'Text insights',bullets:['Detect source language.','Extract key phrases and named entities.','Measure sentiment.','Analyze tokens and syntax.']},{heading:'Collection analysis',bullets:['Detect personally identifiable information.','Group documents by inferred topics.','Find relationships across unstructured text.']}],
      takeaways:['Comprehend performs general NLP.','It extracts entities and phrases.','Sentiment scores opinions.','Topic modeling organizes collections.'],examTip:'Choose Comprehend for meaning within general text; use Comprehend Medical for specialized clinical entities and healthcare codes.'
    },
    'Understand clinical text with Comprehend Medical':{
      sourcePages:'569',summary:'Detect medical conditions, medications, dosages, tests, treatments, procedures, and protected health information in unstructured clinical text.',
      explanation:['Amazon Comprehend Medical processes physician notes, discharge summaries, test results, and case notes. It returns structured medical entities and relationships from unstructured healthcare text.','The slide lists PHI detection through DetectPHI and mappings to standards such as ICD-10-CM and RxNorm, with natural-language query integration to clinical information.'],
      slideTopics:[{heading:'Clinical entities',bullets:['Medical conditions and anatomy.','Medications and dosages.','Tests, treatments, and procedures.','Relationships among clinical concepts.']},{heading:'Healthcare controls',bullets:['Detect protected health information.','Map diagnoses to ICD-10-CM.','Map medications to RxNorm.','Process clinical notes without building a custom model.']}],
      takeaways:['Comprehend Medical is healthcare-specific NLP.','It extracts clinical entities.','DetectPHI identifies protected information.','Code mappings normalize diagnoses and drugs.'],examTip:'Clinical notes plus PHI or medical-code extraction points to Comprehend Medical, not general Comprehend.'
    },
    'Build and deploy models with Amazon SageMaker AI':{
      sourcePages:'570',summary:'Use one managed platform to prepare data, train and tune custom machine-learning models, and deploy hosted inference endpoints.',
      explanation:['Amazon SageMaker AI is a fully managed service for developers and data scientists to build machine-learning models without independently provisioning every training and hosting server.','The slide presents an end-to-end workflow: label and prepare data, build an ML model, train and tune it, then deploy it for predictions. SageMaker is the custom-model platform in contrast with the task-specific pretrained AI services in this section.'],
      slideTopics:[{heading:'Model lifecycle',bullets:['Prepare and label training data.','Build/select the model.','Train and tune model parameters.','Deploy an endpoint for inference.']},{heading:'Managed responsibility',bullets:['AWS provisions training infrastructure.','AWS hosts scalable inference infrastructure.','Teams retain control of data, algorithms, and model behavior.']}],
      takeaways:['SageMaker builds custom ML models.','It covers training and deployment.','Managed infrastructure reduces operations.','Task-specific AI APIs may require less ML work.'],examTip:'Choose SageMaker when the requirement is to train or customize a model, not merely call a pretrained vision or language API.'
    },
    'Search enterprise documents with Amazon Kendra':{
      sourcePages:'571',summary:'Return natural-language answers from indexed enterprise documents across formats and repositories with relevance learning and access control.',
      explanation:['Amazon Kendra is a managed machine-learning document search service. It extracts answers from text, PDF, HTML, PowerPoint, Word, and FAQ content and accepts natural-language questions.','The slide lists incremental learning from user feedback, manual relevance tuning, data-source connectors such as S3, RDS, Google Drive, and SharePoint, plus document access controls.'],
      slideTopics:[{heading:'Question answering',bullets:['Index enterprise document formats.','Accept natural-language questions.','Extract direct answers and ranked passages.','Improve relevance from feedback and tuning.']},{heading:'Enterprise integration',bullets:['Connect S3 and relational sources.','Connect document systems such as Google Drive and SharePoint.','Respect document access controls.']}],
      takeaways:['Kendra searches enterprise documents.','It answers natural-language questions.','Connectors ingest multiple repositories.','Access controls limit results.'],examTip:'Choose Kendra when users ask questions over an enterprise document corpus; choose OpenSearch for building a more general search/index platform.'
    },
    'Generate recommendations with Amazon Personalize':{
      sourcePages:'572',summary:'Build real-time personalized recommendations from user behavior and item data using the technology family behind Amazon.com recommendations.',
      explanation:['Amazon Personalize is a fully managed ML service for real-time recommendations, personalized product ranking, and customized direct marketing.','The workflow sends user interaction data—for example through S3 or streaming APIs—and item/user metadata to Personalize, which trains and deploys a custom recommendation model and returns a personalization API. The source claims model creation in days rather than months.'],
      slideTopics:[{heading:'Inputs',bullets:['User-item interaction events.','Item metadata.','Optional user metadata.','Historical bulk data or real-time behavior.']},{heading:'Outputs',bullets:['Recommended items.','Personalized re-ranking.','Customized marketing offers.','Real-time recommendation API.']}],
      takeaways:['Personalize creates recommendations.','Behavior and catalog data train the model.','Results can be real time.','The service avoids building recommendation infrastructure from scratch.'],examTip:'Choose Personalize for user-specific product/content ranking, not for generic text or image classification.'
    },
    'Extract forms and tables with Amazon Textract':{
      sourcePages:'573',summary:'Extract printed text, handwriting, form fields, and table structure from scanned documents rather than returning only raw OCR text.',
      explanation:['Amazon Textract uses AI/ML to read scanned documents and automatically extract text and handwriting.','Its distinguishing feature is structured document understanding: it extracts key-value pairs from forms and rows/columns from tables. Uses include financial documents, medical records, tax forms, and identity documents.'],
      slideTopics:[{heading:'Document inputs',bullets:['Scanned pages and images.','Printed text.','Handwriting.','Forms, tables, and identity-style documents.']},{heading:'Structured outputs',bullets:['Raw text blocks.','Form key-value pairs.','Table cells, rows, and columns.','Relationships between detected elements.']}],
      takeaways:['Textract is document extraction.','It reads handwriting and print.','Forms become key-value data.','Tables retain structure.'],examTip:'Choose Textract when layout, forms, or tables matter; simple text sentiment belongs to Comprehend after extraction.'
    },
    'Choose the right managed AI service':{
      sourcePages:'574',summary:'Map each managed AI service from the required input and output rather than from a broad request to use machine learning.',
      explanation:['The summary maps Rekognition to visual labels/faces, Transcribe to audio-to-text, Polly to text-to-audio, Translate to text translation, Lex to conversational bots, Connect to contact centers, Comprehend to general NLP, SageMaker to custom models, Kendra to document search, Personalize to recommendations, and Textract to structured document extraction.','These APIs solve narrow pretrained tasks. Use SageMaker when the organization must build, train, tune, or host a custom model rather than consume the service’s predefined capability.'],
      slideTopics:[{heading:'Media and language',bullets:['Rekognition: image/video.','Transcribe: speech to text.','Polly: text to speech.','Translate: language-to-language text.','Comprehend: meaning from text.']},{heading:'Applications and models',bullets:['Lex/Connect: conversational contact center.','Kendra: enterprise document answers.','Personalize: recommendations.','Textract: forms/tables.','SageMaker: custom ML lifecycle.']}],
      takeaways:['Input/output boundary selects the service.','Pretrained APIs minimize ML development.','SageMaker serves custom model work.','Services can be composed into pipelines.'],examTip:'Write the input and required output beside the scenario; the matching transformation usually identifies the managed AI service.'
    }
  };

  sectionTwentyThreeLectures.forEach(lecture=>Object.assign(lecture,sectionTwentyThreeSlideOverrides[lecture.title]||{}));

  const sectionTwentyFourSlideOverrides={
    'Measure resources with CloudWatch metrics':{
      sourcePages:'575–576',summary:'Organize AWS service measurements by namespace, metric, dimensions, timestamp, and resolution, then build custom metrics when managed telemetry is insufficient.',
      explanation:['CloudWatch provides metrics for AWS services. A metric is a time-series variable such as CPUUtilization or NetworkIn, belongs to a namespace, and is identified by dimensions such as instance ID, environment, or another resource attribute.','Metrics have timestamps and can feed dashboards. Standard resolution is one minute in the source slide, while custom high-resolution metrics can publish as frequently as one second. The deck states custom metrics can have up to 30 dimensions; numerical capabilities are source-era facts.'],
      slideTopics:[{heading:'Metric identity',bullets:['Namespace groups service metrics.','Metric name identifies the measurement.','Dimensions identify a resource or context.','Timestamp and value form each data point.']},{heading:'Resolution and use',bullets:['AWS services publish managed metrics.','Custom metrics add application measurements.','High-resolution metrics provide finer intervals.','Dashboards and alarms consume metric data.']}],
      takeaways:['Metrics are time-series measurements.','Namespaces and dimensions identify them.','Custom metrics fill telemetry gaps.','Resolution affects detail and cost.'],examTip:'EC2 memory and disk-space percentages are not default service metrics; collect them with the CloudWatch agent.'
    },
    'Stream metrics with CloudWatch Metric Streams':{
      sourcePages:'577',summary:'Continuously deliver selected CloudWatch metrics near real time through Firehose to S3 or third-party monitoring destinations.',
      explanation:['CloudWatch Metric Streams continuously exports metrics with near-real-time, low-latency delivery. Amazon Data Firehose carries the stream to supported destinations.','The deck shows Amazon S3 plus partner services such as Datadog, Dynatrace, New Relic, Splunk, and Sumo Logic. Metric selection can include or exclude chosen namespaces and metrics, reducing custom polling API work.'],
      slideTopics:[{heading:'Delivery path',bullets:['CloudWatch produces metric updates.','Metric Stream selects included/excluded metrics.','Data Firehose delivers the stream.','Destination stores or analyzes metrics.']},{heading:'Destinations and fit',bullets:['Amazon S3 archive/data lake.','Third-party observability platforms.','Near-real-time delivery without repeated GetMetricData polling.']}],
      takeaways:['Metric Streams push metrics continuously.','Firehose is the delivery layer.','Filters control exported telemetry.','Third-party tools can ingest directly.'],examTip:'Choose Metric Streams for broad continuous metric export; choose alarms when the requirement is to act on a threshold.'
    },
    'Organize and retain CloudWatch Logs':{
      sourcePages:'578–579',summary:'Place related log streams in log groups, set retention and encryption, and ingest from agents and AWS service integrations.',
      explanation:['A log group normally represents an application or workload, while log streams represent individual instances, files, or containers within it. Log groups can have expiration policies, never-expire retention, and KMS encryption.','Sources include SDKs, the CloudWatch Logs/Unified agents, Elastic Beanstalk, ECS, Lambda, VPC Flow Logs, API Gateway, CloudTrail, Route 53 DNS logs, and other services. Logs can later export to S3 or stream to processing destinations.'],
      slideTopics:[{heading:'Hierarchy',bullets:['Log group groups related workload logs.','Log stream identifies one producer or source.','Retention is configured per log group.','KMS can encrypt stored logs.']},{heading:'Sources',bullets:['CloudWatch agent and SDK.','Elastic Beanstalk, ECS, and Lambda.','VPC Flow Logs and API Gateway.','CloudTrail and Route 53 DNS queries.']}],
      takeaways:['Groups contain streams.','Retention controls log lifetime.','Many AWS services publish directly.','Host files require an agent.'],examTip:'Choose an intentional retention period; never-expire logs can become a long-term cost and compliance liability.'
    },
    'Investigate logs with CloudWatch Logs Insights':{
      sourcePages:'580–581',summary:'Run purpose-built interactive queries across selected log groups to filter, parse, aggregate, sort, and visualize stored events.',
      explanation:['CloudWatch Logs Insights searches and analyzes logs already stored in CloudWatch Logs. Examples include finding an IP address and counting occurrences of ERROR.','Its query language supports fields, filter, parse, stats, sort, and limit-style operations and can automatically discover fields from many AWS log types and JSON events. Queries can span groups and accounts, be saved, and be added to dashboards.'],
      slideTopics:[{heading:'Investigation workflow',bullets:['Select log groups and time range.','Write a Logs Insights query.','Filter and parse matching events.','Aggregate or visualize the result.']},{heading:'Capabilities',bullets:['Automatic field discovery.','Cross-group and cross-account query support.','Saved queries.','Dashboard integration.']}],
      takeaways:['Logs Insights queries stored logs.','Time range limits scanned data.','Parsing extracts structured fields.','Stats aggregates incident evidence.'],examTip:'Use Logs Insights for ad hoc interactive log investigation; use subscription filters for continuous real-time processing.'
    },
    'Export and subscribe to CloudWatch Logs':{
      sourcePages:'582–585',summary:'Use S3 export for delayed bulk archival and subscription filters for real-time Lambda, Kinesis, Firehose, multi-account, or multi-Region processing.',
      explanation:['CreateExportTask sends CloudWatch log data to S3, but the deck warns that data can take up to 12 hours to become exportable; it is not a real-time path.','Subscription filters continuously send matching events to Kinesis Data Streams, Data Firehose, or Lambda. A central Kinesis stream can aggregate logs from many accounts and Regions. Cross-account subscriptions use a destination resource plus an IAM role and destination access policy.'],
      slideTopics:[{heading:'S3 export',bullets:['Create an asynchronous export task.','Good for bulk archive or later analysis.','Source slide allows up to 12 hours before availability.','Not a live event stream.']},{heading:'Subscriptions',bullets:['Filter events in real time.','Send to Kinesis, Firehose, or Lambda.','Aggregate multiple groups/accounts/Regions.','Cross-account destination policy authorizes senders.']}],
      takeaways:['Export is delayed bulk movement.','Subscriptions are real time.','Kinesis supports central aggregation.','Cross-account delivery needs destination authorization.'],examTip:'For immediate log alerting or transformation, use a subscription filter rather than S3 export.'
    },
    'Collect host telemetry with the CloudWatch agent':{
      sourcePages:'586–588',summary:'Install the Unified Agent on EC2 or on-premises servers to send application logs and operating-system metrics absent from default EC2 telemetry.',
      explanation:['EC2 does not automatically send operating-system log files to CloudWatch Logs. A CloudWatch agent must run with an IAM role or credentials that permit publishing; the agent can also run on-premises.','The older Logs Agent sends only logs, while the Unified Agent sends logs and granular metrics including memory, disk space/I/O, processes, swap, and detailed CPU/network measurements. Unified Agent configuration can be stored in SSM Parameter Store.'],
      slideTopics:[{heading:'Installation and permission',bullets:['Install agent on EC2 or on-premises host.','Select files and metrics to collect.','Grant publish permission through IAM.','Store shared configuration in Parameter Store.']},{heading:'Unified Agent metrics',bullets:['Detailed CPU.','Disk space and disk I/O.','Memory and swap.','Network and process counts.']}],
      takeaways:['Default EC2 metrics exclude guest OS logs.','The Unified Agent collects logs and metrics.','Memory/disk require agent telemetry.','IAM authorizes publishing.'],examTip:'A question asking for EC2 memory usage or application log files points to the CloudWatch Unified Agent.'
    },
    'Create actionable CloudWatch alarms':{
      sourcePages:'589–590, 592',summary:'Evaluate a metric over periods into OK, INSUFFICIENT_DATA, or ALARM and trigger EC2, Auto Scaling, or SNS actions.',
      explanation:['A CloudWatch alarm evaluates a metric statistic against a threshold over configured periods. States are OK, INSUFFICIENT_DATA, and ALARM, and high-resolution custom metrics support shorter source-era alarm periods.','Targets include EC2 stop, terminate, reboot, or recover actions; Auto Scaling actions; and SNS notifications. The EC2 recovery pattern alarms on StatusCheckFailed_System, moves the instance to new hardware, and retains private/public/Elastic IP, metadata, placement group, and attached EBS volumes.'],
      slideTopics:[{heading:'Evaluation',bullets:['Choose metric, statistic, threshold, period, and evaluation count.','Alarm transitions among three states.','Missing data handling affects state.']},{heading:'Actions',bullets:['Recover/reboot/stop/terminate EC2.','Invoke Auto Scaling action.','Publish to SNS.','System status recovery moves an instance off failed hardware.']}],
      takeaways:['Alarms evaluate metrics.','Period and evaluation count shape sensitivity.','Actions automate response.','System and instance status checks diagnose different layers.'],examTip:'Use StatusCheckFailed_System for underlying EC2 hardware recovery; an application failure needs an application metric or health check.'
    },
    'Reduce noise with composite alarms and metric filters':{
      sourcePages:'591, 593',summary:'Combine alarm states with AND/OR logic and convert matching log events into custom metrics that can alarm.',
      explanation:['A normal CloudWatch alarm watches one metric. A composite alarm evaluates the states of multiple child alarms using AND and OR conditions, reducing notification noise when a single symptom is not sufficient.','CloudWatch Logs metric filters turn matching patterns such as ERROR into metric data. An alarm can then watch the derived metric. The slide also notes that SetAlarmState can test alarm and notification paths.'],
      slideTopics:[{heading:'Composite alarm',bullets:['References existing child alarms.','Uses AND and OR conditions.','Alerts only when the combined condition holds.','Reduces duplicate/noisy notifications.']},{heading:'Logs metric filter',bullets:['Match a pattern in log events.','Publish a numeric metric.','Create an alarm on that metric.','Test workflows with SetAlarmState.']}],
      takeaways:['Composite alarms combine alarm states.','Metric filters turn logs into metrics.','Derived metrics support thresholds.','Testing validates notification wiring.'],examTip:'Use a composite alarm when an incident should notify only if several independent symptoms occur together.'
    },
    'Monitor hybrid links with Network Synthetic Monitor':{
      sourcePages:'594',summary:'Measure packet loss and round-trip latency between AWS applications and on-premises destinations to localize hybrid network degradation.',
      explanation:['CloudWatch Network Synthetic Monitor observes paths between applications hosted on AWS and an on-premises data center. It identifies network performance degradation that affects hybrid connectivity.','The service reports packet loss and round-trip latency and can indicate whether a problem lies in the AWS network or the customer/ISP network. The diagram uses AWS Network Health Indicator events for correlation.'],
      slideTopics:[{heading:'Monitored path',bullets:['AWS source in a VPC.','On-premises destination.','Hybrid route through internet or private connectivity.']},{heading:'Signals',bullets:['Packet loss.','Round-trip latency.','AWS network health indicators.','Fault-domain localization.']}],
      takeaways:['Network Synthetic Monitor targets hybrid paths.','It measures loss and latency.','Health indicators identify AWS-side issues.','It supports faster ownership diagnosis.'],examTip:'Choose Network Synthetic Monitor when the question asks which side of a hybrid network path causes degradation.'
    },
    'Route events with Amazon EventBridge rules':{
      sourcePages:'595–596',summary:'Match scheduled or service events with rules and route them to Lambda, batch jobs, SQS, SNS, Step Functions, or other targets.',
      explanation:['Amazon EventBridge, formerly CloudWatch Events, supports schedule rules for cron-like tasks and event-pattern rules that react to AWS service events.','Sources shown include EC2 state changes, failed CodeBuild jobs, S3 uploads, Trusted Advisor findings, CloudTrail API calls, and scheduled intervals. Targets include Lambda, Batch, ECS tasks, SQS, SNS, Step Functions, CodePipeline, CodeBuild, and SSM Automation.'],
      slideTopics:[{heading:'Rule sources',bullets:['Schedule or rate expression.','AWS service event pattern.','CloudTrail-recorded API call.','Partner or custom event.']},{heading:'Targets',bullets:['Lambda and ECS/Batch compute.','SQS and SNS messaging.','Step Functions workflow.','Code services and SSM Automation.']}],
      takeaways:['Rules match events.','Schedules replace cron hosts.','One rule can route to targets.','EventBridge is event routing, not metric storage.'],examTip:'Use an EventBridge event pattern when the trigger is a service state change, not a numeric threshold.'
    },
    'Design EventBridge buses, archives, and schemas':{
      sourcePages:'597–599',summary:'Separate default, partner, and custom event buses; archive/replay events; infer schemas; and control cross-account publishing with resource policies.',
      explanation:['The default event bus receives AWS service events. Partner event buses accept supported SaaS events, and custom buses receive application events. Resource-based policies can allow other accounts or Regions to publish to a bus, enabling central event aggregation.','EventBridge archives can retain all or filtered events and replay them later. Schema Discovery infers event structure, stores it in the Schema Registry, and generates typed code bindings for applications.'],
      slideTopics:[{heading:'Event buses',bullets:['Default bus for AWS service events.','Partner bus for SaaS integrations.','Custom bus for application events.','Resource policy governs publishers.']},{heading:'Durability and development',bullets:['Archive all or filtered events.','Replay archived events into the bus.','Schema Discovery infers structure.','Registry generates code bindings.']}],
      takeaways:['Bus type follows event source.','Resource policies enable cross-account publish.','Archives support replay.','Schemas improve producer/consumer development.'],examTip:'Choose archive and replay when new event-processing logic must be tested against historical events.'
    },
    'Observe containers and Lambda runtimes':{
      sourcePages:'600–601, 604',summary:'Use Container Insights for ECS/EKS/Kubernetes telemetry and Lambda Insights for function runtime diagnostics.',
      explanation:['Container Insights collects, aggregates, and summarizes metrics and logs from ECS, EKS, Kubernetes on EC2, and Fargate. It uses a containerized CloudWatch agent for Kubernetes environments and provides dashboards for cluster, node, Pod, task, and service behavior.','Lambda Insights is a monitoring and troubleshooting solution for Lambda that gathers CPU time, memory, disk, network, cold starts, and worker shutdown information through a Lambda layer.'],
      slideTopics:[{heading:'Container Insights',bullets:['ECS, EKS, Kubernetes, and Fargate.','Cluster and workload metrics/logs.','Containerized agent where required.','Operational dashboards.']},{heading:'Lambda Insights',bullets:['System-level function metrics.','CPU, memory, disk, and network.','Cold start and execution environment diagnostics.','Installed as a Lambda layer.']}],
      takeaways:['Container Insights focuses on orchestrated containers.','Lambda Insights focuses on execution environments.','Both add workload-level telemetry.','Installation requirements differ.'],examTip:'Choose Lambda Insights for memory/cold-start runtime evidence and Container Insights for Pod/task/node visibility.'
    },
    'Find top contributors and application problems':{
      sourcePages:'602–604',summary:'Use Contributor Insights to rank high-cardinality log contributors and Application Insights to create automated problem dashboards for supported applications.',
      explanation:['Contributor Insights analyzes log data and produces time-series views of top-N contributors and unique contributor counts. Examples include highest-traffic accounts, hosts with most errors, or IP addresses causing network activity.','Application Insights creates automated dashboards for monitored applications, correlates telemetry, and highlights potential problems to accelerate isolation. The deck associates it with Java and .NET applications on EC2 and selected AWS resources.'],
      slideTopics:[{heading:'Contributor Insights',bullets:['Analyze structured log fields.','Rank top-N contributors.','Count unique contributors.','Find heavy users, error sources, or talkers.']},{heading:'Application Insights',bullets:['Automated application dashboards.','Detect and correlate potential problems.','Integrate resource metrics, logs, and alarms.','Reduce manual troubleshooting setup.']}],
      takeaways:['Contributor Insights ranks entities.','It derives time series from logs.','Application Insights correlates application health.','Insight products solve distinct scopes.'],examTip:'Choose Contributor Insights when the question asks “who or what contributes most” to traffic, errors, or usage.'
    },
    'Audit account activity with AWS CloudTrail':{
      sourcePages:'605–606',summary:'Record who called which AWS API, from where, when, and with what request/response for governance, compliance, and investigation.',
      explanation:['CloudTrail records account activity and AWS API calls made through the console, CLI, SDKs, and AWS services. It is enabled by default for event history.','An event records identity, time, source IP, action, parameters, and response information. Trails deliver records to S3 for retention and optionally CloudWatch Logs for alerting, while the CloudTrail console supports inspection and audit.'],
      slideTopics:[{heading:'Recorded activity',bullets:['Console actions.','CLI and SDK API calls.','AWS service calls.','IAM user and role identity context.']},{heading:'Destinations and uses',bullets:['Event history for recent inspection.','S3 trail for durable records.','CloudWatch Logs for processing/alerts.','Governance, compliance, and security investigation.']}],
      takeaways:['CloudTrail records API activity.','Caller identity and source are central evidence.','Trails deliver long-term logs.','CloudWatch metrics and CloudTrail events differ.'],examTip:'When the question asks who deleted or changed a resource, inspect CloudTrail.'
    },
    'Choose CloudTrail event types and detect anomalies':{
      sourcePages:'607–608',summary:'Separate management, data, and Insights events, then enable Insights when unusual API rate or error patterns must be detected.',
      explanation:['Management events record control-plane operations such as attaching IAM policies or configuring routing rules and are logged by default. Data events record high-volume resource operations such as S3 GetObject/DeleteObject or Lambda Invoke and are not logged by default.','CloudTrail Insights analyzes normal management-event behavior and detects unusual write activity, including inaccurate provisioning, service-limit pressure, IAM action bursts, maintenance gaps, and periodic activity changes. It produces a start/end anomaly event and baseline/error-rate graphs.'],
      slideTopics:[{heading:'Event classes',bullets:['Management: control-plane configuration.','Data: high-volume resource operations.','Read and write categories can be selected.','Data events require explicit configuration.']},{heading:'CloudTrail Insights',bullets:['Establish normal API call/error rates.','Detect unusual management activity.','Emit anomaly start and end events.','Visualize baseline versus observed behavior.']}],
      takeaways:['Management events are control plane.','Data events are resource-level operations.','Data events can be high volume.','Insights detects unusual API patterns.'],examTip:'To audit individual S3 object reads, enable S3 data events; ordinary management-event history is insufficient.'
    },
    'Retain and analyze CloudTrail events':{
      sourcePages:'609–611',summary:'Deliver events beyond the default history window to S3, query them with Athena, and route sensitive API calls through EventBridge for alerts.',
      explanation:['The deck states CloudTrail event history retains events for 90 days. For longer retention, configure a trail to S3 and use Athena to query the log objects; the retention period is a source-era service behavior.','EventBridge can match CloudTrail API calls such as DeleteTable, AssumeRole, or AuthorizeSecurityGroupIngress and route them to SNS or another target. This turns audit records into near-real-time security or operational responses.'],
      slideTopics:[{heading:'Long-term retention',bullets:['Recent events appear in CloudTrail event history.','Trail delivers logs to S3.','S3 lifecycle controls retention/archive.','Athena queries JSON audit records.']},{heading:'API-call automation',bullets:['CloudTrail records the API call.','EventBridge rule matches the action.','SNS or another target receives the event.','Use for destructive or privileged changes.']}],
      takeaways:['Event history is time-limited.','S3 provides durable retention.','Athena supports audit queries.','EventBridge reacts to selected API calls.'],examTip:'Use CloudTrail + EventBridge + SNS for a notification when a named sensitive API action occurs.'
    },
    'Record compliance with AWS Config':{
      sourcePages:'612–616',summary:'Record resource configuration history, evaluate managed/custom compliance rules, and remediate noncompliance through SSM Automation.',
      explanation:['AWS Config records resource configurations and changes over time and evaluates compliance against rules. It can answer whether security groups were unrestricted, whether buckets were public, or how ALB configuration changed; it is Regional and can aggregate across Regions/accounts.','Rules can be AWS-managed or custom Lambda-backed, run on change or schedule, and have no native deny effect. Remediations invoke managed or custom SSM Automation documents, with retry controls. EventBridge or SNS can notify on noncompliance and configuration changes.'],
      slideTopics:[{heading:'History and rules',bullets:['Configuration timeline per resource.','Compliance timeline.','Managed or custom Config rules.','Change-triggered or periodic evaluation.']},{heading:'Response',bullets:['Rule reports compliant/noncompliant.','SSM Automation performs remediation.','EventBridge sends noncompliance notifications.','Aggregators centralize accounts and Regions.']}],
      takeaways:['Config records configuration state.','Rules evaluate compliance.','Rules do not prevent a change.','SSM can remediate after detection.'],examTip:'Choose Config for “was this resource compliant over time,” not for “who made the API call.”'
    },
    'Distinguish CloudWatch, CloudTrail, and Config':{
      sourcePages:'617–618',summary:'Use CloudWatch for performance/logs/alerts, CloudTrail for API activity, and Config for resource-state history and compliance.',
      explanation:['CloudWatch monitors metrics, dashboards, logs, events, and alarms. CloudTrail records governance and audit history for API calls. Config records how resource configurations change and evaluates them against compliance rules.','For an ELB, CloudWatch shows incoming connections and error percentages, CloudTrail shows who changed security groups or load-balancer settings, and Config shows the load balancer’s rules/configuration and compliance evolution over time.'],
      slideTopics:[{heading:'Three questions',bullets:['CloudWatch: how is it performing and should we alert?','CloudTrail: who called what API and when?','Config: what was the resource configuration and was it compliant?']},{heading:'ELB example',bullets:['CloudWatch graphs connections/errors.','CloudTrail audits configuration API calls.','Config records security group/rule changes and compliance.']}],
      takeaways:['CloudWatch is observability.','CloudTrail is API audit.','Config is configuration/compliance history.','Architectures commonly use all three together.'],examTip:'Translate the question verb: monitor -> CloudWatch, audit who -> CloudTrail, assess configuration -> Config.'
    }
  };

  sectionTwentyFourLectures.forEach(lecture=>Object.assign(lecture,sectionTwentyFourSlideOverrides[lecture.title]||{}));

  const sectionTwentyFiveSlideOverrides={
    'Organize multiple accounts with AWS Organizations':{
      sourcePages:'619–623',summary:'Create a global multi-account hierarchy with one management account, member accounts, organizational units, consolidated billing, and centralized controls.',
      explanation:['AWS Organizations is a global service for managing multiple AWS accounts. One management account controls the organization; invited or created member accounts can belong to only one organization. The root organizational unit contains nested OUs and accounts.','The deck recommends multi-account separation over one account with many VPCs, using OUs by business unit, environment, project, or regulatory need. Benefits include consolidated billing, shared discounts, tag standards, central CloudTrail/CloudWatch logging, cross-account roles, and organization-wide governance.'],
      slideTopics:[{heading:'Hierarchy',bullets:['Organization root.','Management account.','Nested organizational units.','Member accounts placed in OUs.']},{heading:'Benefits',bullets:['Separate workloads and blast radius by account.','Consolidated billing and pooled discounts.','Central logging, tagging, and security policies.','Automated account creation and cross-account access.']}],
      takeaways:['Organizations is global.','Management and member accounts have distinct roles.','OUs group accounts for policy.','Consolidated billing aggregates costs.'],examTip:'Use separate accounts for strong workload/security boundaries, then group them into OUs for consistent governance.'
    },
    'Set permission ceilings with SCPs and RCPs':{
      sourcePages:'624–625',summary:'Apply Service Control Policies through the organization hierarchy as permission ceilings, while noting that this deck does not cover Resource Control Policies.',
      explanation:['An SCP applies to accounts or OUs and sets the maximum permissions available to their IAM users and roles. It does not grant permissions. SCPs flow down the hierarchy and do not restrict the management account in the source deck.','The diagrams show blocklist and allowlist strategies and hierarchy inheritance: a FullAWSAccess baseline plus targeted denies, or an explicit allowlist. This PDF chapter contains no Resource Control Policy (RCP) slide, so RCP behavior is outside the supplied material.'],
      slideTopics:[{heading:'SCP behavior',bullets:['Permission ceiling for member-account users and roles.','Does not grant any API action by itself.','Attached at root, OU, or account.','Child accounts inherit ancestor SCP effects.']},{heading:'Strategies and coverage',bullets:['Blocklist starts broad and denies selected services/actions.','Allowlist permits only explicitly named services/actions.','Management account is outside SCP restriction in the deck.','RCPs are not covered in this PDF version.']}],
      takeaways:['SCPs limit maximum permissions.','IAM still must allow the action.','Hierarchy combines applicable SCPs.','RCP is not taught in the supplied slides.'],examTip:'An SCP Allow never grants access; the identity or resource policy must still allow the request.'
    },
    'Standardize governance with organization policies':{
      sourcePages:'623, 626',summary:'Use organization-wide tag policies and centralized service configuration to standardize accounts, allocation metadata, and governance.',
      explanation:['The Organizations benefits slide recommends tagging standards for billing, centralized CloudTrail and CloudWatch logs, cross-account administrative roles, and shared reserved/discount benefits.','Tag Policies standardize tag keys and allowed values across an organization, audit tagged resources, and help maintain consistent resource categorization. The deck lists EC2, RDS, EFS, S3, Lambda, and similar tagged resource types and uses cost allocation as a key outcome.'],
      slideTopics:[{heading:'Tag policy',bullets:['Define standardized tag keys.','Define acceptable tag values/capitalization.','Audit resources against the standard.','Support consistent cost allocation.']},{heading:'Central governance',bullets:['Central CloudTrail logs.','Aggregate CloudWatch Logs.','Cross-account administrative roles.','Account creation and OU placement standards.']}],
      takeaways:['Tag policies standardize metadata.','Consistent tags improve billing analysis.','Central logs improve governance.','Organization policies apply at account hierarchy scope.'],examTip:'Use tag policies to standardize/audit tags; use SCPs to limit API permissions.'
    },
    'Scope IAM access with conditions and resource ARNs':{
      sourcePages:'627–630',summary:'Narrow IAM requests by source IP, requested Region, resource tags, MFA presence, exact S3 ARN level, and organization membership.',
      explanation:['The condition slides use aws:SourceIp to restrict client IP, aws:RequestedRegion to restrict API target Regions, ec2:ResourceTag for tag-based control, and aws:MultiFactorAuthPresent to require MFA.','S3 permissions distinguish bucket ARN actions such as ListBucket from object ARN actions such as GetObject, PutObject, and DeleteObject on bucket/*. Resource policies can use aws:PrincipalOrgID to accept principals only from accounts in a named AWS Organization.'],
      slideTopics:[{heading:'Condition keys',bullets:['aws:SourceIp restricts request origin.','aws:RequestedRegion restricts API Region.','ec2:ResourceTag scopes tagged resources.','aws:MultiFactorAuthPresent requires MFA context.']},{heading:'Resources and organization',bullets:['Bucket-level actions target the bucket ARN.','Object actions target bucket/* ARNs.','aws:PrincipalOrgID restricts resource access to organization accounts.']}],
      takeaways:['Conditions add request context.','RequestedRegion differs from global-service endpoints.','S3 bucket and object ARNs are distinct.','PrincipalOrgID simplifies organization-wide trust.'],examTip:'A policy allowing s3:GetObject must name object ARNs ending in /*, not only the bucket ARN.'
    },
    'Choose roles or resource-based cross-account access':{
      sourcePages:'631–633',summary:'Decide whether a principal should assume another role and replace its permissions or retain its identity while a resource policy grants direct access.',
      explanation:['Cross-account access can use a role in the target account or a resource-based policy on resources such as S3, SNS, SQS, Lambda, or EventBridge.','When a user assumes a role, the session gives up the original identity permissions and uses the role permissions. A resource-based policy grants the original principal direct access without that permission replacement. Some services, such as EventBridge targets, use resource policies for Lambda/SNS/SQS/S3/API Gateway and IAM roles for Kinesis, Systems Manager, and Step Functions.'],
      slideTopics:[{heading:'Assume role',bullets:['Target account trusts the source principal.','Principal calls STS AssumeRole.','Temporary session uses target role permissions.','Original permissions are not combined with the role session.']},{heading:'Resource policy',bullets:['Resource directly names the external principal.','Caller retains original identity.','Useful for supported resources and service-to-service delivery.']}],
      takeaways:['Roles create temporary sessions.','Assumed role permissions replace original permissions.','Resource policies grant direct resource access.','Service support determines available pattern.'],examTip:'Choose a resource policy when the caller must retain its original identity and the target service supports resource-based permissions.'
    },
    'Delegate safely with permissions boundaries':{
      sourcePages:'634–635',summary:'Set a managed-policy ceiling on IAM users or roles so delegated administrators cannot grant identities more effective permission than intended.',
      explanation:['An IAM permissions boundary defines the maximum permissions an IAM user or role can receive. It does not grant access and is not supported on IAM groups.','Effective identity permission is the intersection of the identity policy and boundary, still constrained by Organizations SCPs and explicit denies. The use cases are delegating IAM creation to non-administrators and allowing developers to self-assign policies without escalating beyond a fixed ceiling.'],
      slideTopics:[{heading:'Boundary behavior',bullets:['Attach a managed policy as maximum permission.','Supported for users and roles, not groups.','Does not grant an action.','Identity policy and boundary must both permit it.']},{heading:'Delegation use',bullets:['Allow team leads to create IAM users.','Allow developers to attach policies to their roles.','Prevent privilege escalation beyond the boundary.','Combine with SCPs for organization ceilings.']}],
      takeaways:['Boundary is a ceiling.','It applies to users and roles.','Identity policy remains required.','Boundaries support safe administration delegation.'],examTip:'If an identity policy allows an action but the permissions boundary omits it, the action is denied.'
    },
    'Evaluate IAM policies and troubleshoot denials':{
      sourcePages:'635–637',summary:'Evaluate Organizations controls, resource policies, identity policies, boundaries, session policies, and explicit denies in the deck’s decision order.',
      explanation:['The policy-evaluation diagram starts with an implicit deny. An explicit deny in any applicable policy wins. SCPs/RCP-like organization controls, resource-based policies, identity policies, permissions boundaries, and session policies each constrain the final decision according to context.','The sample policy permits sqs:CreateQueue but explicitly denies sqs:DeleteQueue and allows ec2:Describe* through a wildcard. Troubleshooting requires matching action, resource, principal, and conditions across every applicable policy layer.'],
      slideTopics:[{heading:'Evaluation rules',bullets:['Start with implicit deny.','Any applicable explicit deny wins.','An applicable allow is required.','Ceilings and session policies can remove otherwise allowed actions.']},{heading:'Sample policy reading',bullets:['Allow sqs:CreateQueue.','Deny sqs:DeleteQueue.','Allow ec2:Describe* wildcard operations.','Resource and condition context still matters.']}],
      takeaways:['Explicit deny has highest priority.','Missing allow remains denied.','Boundaries/SCPs do not grant.','Wildcard action matching must be read carefully.'],examTip:'When access is denied despite an Allow, search first for explicit denies and permission ceilings.'
    },
    'Centralize workforce access with IAM Identity Center':{
      sourcePages:'638–642',summary:'Provide one workforce login across Organizations accounts and business applications using identities, permission sets, and account assignments.',
      explanation:['IAM Identity Center, successor to AWS Single Sign-On, supplies one login for AWS accounts in Organizations, business cloud applications, and custom SAML 2.0 applications. Identities can come from its built-in store, Active Directory, or external identity providers.','Permission Sets define account permissions and are provisioned as IAM roles in member accounts. Assignments connect users/groups, permission sets, and accounts. Attribute-based access control can use Identity Center user attributes in policies for fine-grained access.'],
      slideTopics:[{heading:'Single sign-on',bullets:['One user portal for multiple AWS accounts.','Access business and SAML applications.','Use built-in or external identity source.','Avoid separate IAM users in every account.']},{heading:'AWS account authorization',bullets:['Permission Sets define permissions.','Assignments map users/groups to accounts.','IAM roles are created in target accounts.','ABAC uses identity attributes for resource access.']}],
      takeaways:['Identity Center centralizes workforce login.','Permission Sets define account roles.','Assignments connect people and accounts.','External identity sources can be federated.'],examTip:'Choose Identity Center for workforce multi-account access; choose Cognito for customer-facing web/mobile application identities.'
    },
    'Integrate Microsoft identity with Directory Service':{
      sourcePages:'643–645',summary:'Choose AWS Managed Microsoft AD, AD Connector, or Simple AD and connect the selected directory to IAM Identity Center.',
      explanation:['Microsoft Active Directory stores users, computers, printers, shares, and security groups in a domain and supports centralized authentication and Group Policy.','AWS Managed Microsoft AD creates a managed AD in AWS and can trust on-premises AD. AD Connector proxies requests to an existing on-premises AD without caching users. Simple AD is an AD-compatible standalone directory that cannot join an on-premises AD. Identity Center integrates directly with AWS Managed Microsoft AD or through AD Connector for self-managed AD.'],
      slideTopics:[{heading:'Directory choices',bullets:['AWS Managed Microsoft AD: managed directory with trust support.','AD Connector: proxy to existing on-premises AD.','Simple AD: standalone AD-compatible directory.']},{heading:'Identity Center setup',bullets:['Managed AD integrates directly.','Self-managed AD uses AD Connector in the slide.','Users/groups become available for account assignments.']}],
      takeaways:['Managed AD runs a directory in AWS.','AD Connector proxies existing identity.','Simple AD does not trust on-prem AD.','Identity Center consumes directory identities.'],examTip:'Choose AD Connector when the organization must keep users in its existing on-premises Active Directory.'
    },
    'Govern a landing zone with AWS Control Tower':{
      sourcePages:'646–647',summary:'Set up and continuously govern a best-practice multi-account landing zone using Organizations, Identity Center, and preventive or detective guardrails.',
      explanation:['AWS Control Tower automates setup and governance of a secure, compliant multi-account environment. It uses AWS Organizations for accounts and OUs and IAM Identity Center for account access.','Guardrails provide ongoing governance: preventive guardrails use SCPs to block actions, while detective guardrails use AWS Config to detect noncompliant resources. Examples include Region restriction and untagged-resource detection.'],
      slideTopics:[{heading:'Landing zone',bullets:['Automated multi-account environment.','Best-practice account/OUs baseline.','Organizations provides hierarchy.','Identity Center provides workforce access.']},{heading:'Guardrails',bullets:['Preventive uses SCPs to stop actions.','Detective uses Config to report violations.','Guardrails are enabled over OUs/accounts.','Dashboard shows compliance status.']}],
      takeaways:['Control Tower builds a landing zone.','It composes Organizations and Identity Center.','Preventive guardrails block.','Detective guardrails detect.'],examTip:'Choose preventive guardrails when a prohibited action must be impossible and detective guardrails when violations must be identified/remediated.'
    }
  };

  sectionTwentyFiveLectures.forEach(lecture=>Object.assign(lecture,sectionTwentyFiveSlideOverrides[lecture.title]||{}));

  const sectionTwentySixSlideOverrides={
    'Choose encryption in transit, at rest, or client side':{
      sourcePages:'648–651',summary:'Place encryption at the correct boundary: TLS before transport, server-side after receipt, or client-side before data ever reaches the server.',
      explanation:['Encryption in flight uses TLS/SSL so the sender encrypts before transmission and the receiver decrypts after receipt; HTTPS endpoints and certificates establish the secure transport.','Server-side encryption receives plaintext and stores encrypted data, while client-side encryption sends ciphertext that the server never decrypts. Each model changes key custody, trust boundary, and which component can see plaintext.'],
      slideTopics:[{heading:'Three boundaries',bullets:['In transit: protect data crossing networks with TLS.','Server-side at rest: service encrypts stored data.','Client-side: client encrypts/decrypts and server stores ciphertext.']},{heading:'Decision inputs',bullets:['Who may see plaintext.','Who owns/manages keys.','Where encryption/decryption runs.','Transport and storage compliance requirements.']}],
      takeaways:['TLS protects network transit.','At-rest encryption protects stored media.','Client-side keeps plaintext outside the service.','Architectures often combine multiple layers.'],examTip:'“AWS must never see plaintext” requires client-side encryption; server-side encryption does not satisfy that boundary.'
    },
    'Manage encryption keys with AWS KMS':{
      sourcePages:'652',summary:'Create and control regional encryption keys through a managed, highly available service integrated with CloudTrail and AWS data services.',
      explanation:['AWS Key Management Service manages encryption keys and integrates with services such as EBS, S3, RDS, SSM, and others. Keys remain protected in KMS and operations are authorized through IAM plus key policies.','KMS records API use in CloudTrail, providing audit evidence. The slide states KMS key material never leaves KMS unencrypted and advises not calling Encrypt directly for data larger than 4 KB, instead using envelope encryption.'],
      slideTopics:[{heading:'Managed key service',bullets:['Create and control KMS keys.','Regional service with managed availability.','Integrated with AWS storage/database services.','CloudTrail audits key operations.']},{heading:'Usage model',bullets:['Authorize Encrypt, Decrypt, and data-key operations.','Keep master key material protected.','Use envelope encryption for larger payloads.']}],
      takeaways:['KMS centrally manages keys.','Key use is auditable.','KMS keys are Regional by default.','Envelope encryption handles application data.'],examTip:'When an AWS service needs customer-controlled at-rest encryption with audit logs, choose a customer-managed KMS key.'
    },
    'Select KMS key ownership and key type':{
      sourcePages:'653–654',summary:'Choose symmetric or asymmetric cryptography and AWS-owned, AWS-managed, or customer-managed ownership from control, visibility, rotation, and cost needs.',
      explanation:['Symmetric KMS keys use one AES-256 key for encryption and decryption and are the key type integrated with AWS services. Asymmetric keys use a public/private RSA or ECC pair for encrypt/decrypt or sign/verify and allow the public key to be downloaded.','AWS-owned keys are free and shared behind service defaults; AWS-managed keys are service-named and visible but not fully customer-controlled; customer-managed keys add policy control, creation/import, rotation controls, and per-key/API cost.'],
      slideTopics:[{heading:'Cryptographic type',bullets:['Symmetric: one secret key, AWS service integrations.','Asymmetric: public/private key pair.','Public key can be used outside AWS.','Private key remains protected by KMS.']},{heading:'Ownership',bullets:['AWS-owned: hidden/shared service default.','AWS-managed: visible service key.','Customer-managed: customer policy, lifecycle, rotation, and audit control.']}],
      takeaways:['AWS services normally use symmetric KMS keys.','Asymmetric keys support external public-key use.','Ownership controls administrative flexibility.','Customer-managed keys incur management responsibility.'],examTip:'Choose a customer-managed key when cross-account key policy, explicit rotation control, or administrative separation is required.'
    },
    'Authorize KMS with key policies and grants':{
      sourcePages:'656–657',summary:'Use a mandatory key policy as the root authorization layer, then add IAM permissions or grants for delegated and cross-account use.',
      explanation:['Every KMS key requires a key policy. The default policy grants the account root principal access and permits IAM policies to delegate key use; a custom policy explicitly names administrators and users.','For cross-account encrypted snapshot sharing, the source account key policy must authorize the target account and the target principal also needs IAM permission for the key. Grants offer temporary or scoped programmatic permission to use a KMS key.'],
      slideTopics:[{heading:'Key policy',bullets:['Mandatory resource policy for the key.','Names key administrators and users.','Can enable IAM delegation from the owning account.','Cross-account trust starts here.']},{heading:'Additional authorization',bullets:['External account IAM policy also allows key actions.','Grant delegates selected operations.','Both resource-side trust and caller-side permission may be required.']}],
      takeaways:['KMS cannot be controlled without a key policy.','IAM alone may be insufficient.','Cross-account use requires both sides.','Grants provide delegated key use.'],examTip:'When an external principal can see a snapshot but cannot decrypt it, inspect the KMS key policy and its IAM permissions.'
    },
    'Copy encrypted snapshots and AMIs safely':{
      sourcePages:'655, 657, 663',summary:'Re-encrypt copies with a destination key and share both the encrypted artifact and its customer-managed source key permissions.',
      explanation:['A cross-Region EBS snapshot copy decrypts with the source Region key and encrypts with a key in the destination Region. KMS keys themselves remain Regional.','For cross-account snapshots, use a customer-managed key, authorize the target account in its key policy, share the snapshot, then let the target copy it with its own key. Encrypted AMI sharing additionally modifies launch permissions, shares backing snapshots, and permits key use; the target launches with or copies to its own KMS key.'],
      slideTopics:[{heading:'Cross-Region copy',bullets:['Source snapshot is encrypted with source Region key.','Copy operation uses a destination Region key.','Destination snapshot/volume remains encrypted.']},{heading:'Cross-account sharing',bullets:['Customer-managed key policy trusts target.','Share snapshot or AMI permissions.','Target IAM permits key use.','Target can copy and re-encrypt under its own key.']}],
      takeaways:['KMS keys do not move across Regions.','Artifact sharing and key sharing are separate.','AWS-managed keys cannot satisfy every sharing flow.','Destination ownership favors re-encryption.'],examTip:'For portable encrypted backups, copy and re-encrypt under a key controlled in the destination account/Region.'
    },
    'Use KMS multi-Region keys deliberately':{
      sourcePages:'658–661',summary:'Replicate identical key material and key IDs across Regions only when applications need interchangeable regional cryptographic identities.',
      explanation:['KMS multi-Region keys consist of one primary and regional replicas with the same key ID, material, and automatic rotation state, while key policies are managed independently. They can encrypt in one Region and decrypt in another without re-encryption.','The deck warns they are not global keys and recommends treating each replica as a regional key. Examples are client-side encryption for DynamoDB Global Tables and Aurora Global Database so encrypted attributes can move across Regions while local applications use the matching replica.'],
      slideTopics:[{heading:'Shared properties',bullets:['Same key ID and key material.','Primary and replica keys in selected Regions.','Interchangeable ciphertext across replicas.','Independent regional policies.']},{heading:'Use cases',bullets:['Client-side encrypted Global Tables attributes.','Client-side encrypted Aurora Global Database fields.','Multi-Region application signing or encryption.','Avoid when ordinary regional keys suffice.']}],
      takeaways:['Multi-Region replicas share material.','They remain regional resources.','Policies differ by Region.','They avoid cross-Region re-encryption for chosen applications.'],examTip:'Do not choose multi-Region keys merely because data is replicated; many AWS replication services can use separate regional keys.'
    },
    'Replicate KMS-encrypted S3 objects':{
      sourcePages:'662',summary:'Enable replication of SSE-KMS objects explicitly, authorize the S3 role to both keys, and select the destination KMS key.',
      explanation:['Unencrypted and SSE-S3 objects replicate by default once S3 replication is configured; SSE-C can also replicate in the slide. SSE-KMS objects require the replication rule to opt in.','The destination KMS key is specified in the rule, and its policy must allow the S3 replication role. The IAM role needs kms:Decrypt for the source key and kms:Encrypt for the destination key. KMS throttling can affect replication throughput.'],
      slideTopics:[{heading:'Rule configuration',bullets:['Enable replication of KMS-encrypted objects.','Select destination KMS key.','Destination may use another account/Region.']},{heading:'Permissions',bullets:['Replication role decrypts with source key.','Role encrypts with destination key.','Both key policies/IAM must allow operations.','KMS quotas can constrain throughput.']}],
      takeaways:['SSE-KMS replication is explicit.','Source and destination keys have different roles.','Replication role needs both permissions.','Destination objects use the chosen destination key.'],examTip:'When SSE-KMS objects alone fail replication, inspect the opt-in setting and both KMS key policies.'
    },
    'Store configuration in Systems Manager Parameter Store':{
      sourcePages:'664–667',summary:'Store hierarchical configuration and secure strings with versioning, optional KMS encryption, tier choices, and advanced expiration policies.',
      explanation:['SSM Parameter Store is serverless, scalable, durable storage for configuration and secrets with SDK access, version tracking, optional KMS encryption, and EventBridge notifications. Hierarchical names such as /department/app/dev/db-url organize environments and support IAM paths.','Public parameters under /aws/service expose AWS-maintained information, and /aws/reference/secretsmanager can reference Secrets Manager values. Standard and Advanced tiers differ in count, size, policy, cost, and throughput; advanced policies can expire parameters or notify before expiry/no-change. Values are source-era limits.'],
      slideTopics:[{heading:'Hierarchy and integration',bullets:['Path-like parameter names.','String, StringList, or encrypted SecureString.','Version history and IAM path access.','Lambda/CloudFormation/SDK retrieval.']},{heading:'Tiers and policies',bullets:['Standard and Advanced capacity/size differences.','Advanced expiration policy.','Expiration notification and no-change notification.','EventBridge emits policy events.']}],
      takeaways:['Parameter Store holds configuration and secrets.','SecureString uses KMS.','Hierarchy improves organization and IAM scope.','Advanced policies automate lifecycle warnings.'],examTip:'Use Parameter Store for hierarchical configuration; choose Secrets Manager when managed secret rotation is central.'
    },
    'Rotate credentials with AWS Secrets Manager':{
      sourcePages:'668–669',summary:'Store and automatically rotate database or application secrets, then replicate synchronized read copies across Regions for disaster recovery.',
      explanation:['Secrets Manager is designed for secrets and can force rotation on a schedule. It generates new credentials during rotation and invokes a Lambda function to update the target system.','The deck highlights native RDS integration for MySQL, PostgreSQL, Aurora, and other engines and KMS encryption. Multi-Region secrets maintain read replicas synchronized from a primary; a replica can be promoted to a standalone secret during regional failure.'],
      slideTopics:[{heading:'Rotation',bullets:['Store encrypted secret value.','Schedule rotation.','Lambda rotation function changes target credentials.','Applications retrieve current secret at runtime.']},{heading:'Multi-Region',bullets:['Replicate primary secret to selected Regions.','Secrets Manager keeps replicas synchronized.','Promote a replica for regional recovery.']}],
      takeaways:['Secrets Manager automates rotation.','Lambda performs custom rotation.','RDS integrations simplify database secrets.','Regional replicas support DR.'],examTip:'Choose Secrets Manager when the requirement explicitly says automatic credential rotation.'
    },
    'Provision TLS certificates with AWS Certificate Manager':{
      sourcePages:'670–673',summary:'Request, validate, renew, import, and deploy TLS certificates to supported AWS integrations such as load balancers and CloudFront.',
      explanation:['AWS Certificate Manager provisions and manages public/private TLS certificates for HTTPS. Public certificates are free and automatically renewed when ACM issued them, but cannot be exported in the source slide.','Public requests list FQDNs or wildcard names and validate ownership by DNS or email; DNS validation integrates with Route 53 and is preferred. Imported certificates do not auto-renew, so ACM emits daily expiration metrics and EventBridge warnings. ACM integrates with ALB, NLB, CloudFront, API Gateway, and Elastic Beanstalk, not EC2 directly.'],
      slideTopics:[{heading:'ACM-issued certificate',bullets:['List domain and wildcard names.','Validate domain through DNS or email.','Deploy to supported AWS service.','Automatic renewal when eligible.']},{heading:'Imported certificate',bullets:['Generate externally and import.','No automatic renewal.','CloudWatch expiration metric.','EventBridge warning before expiry.']}],
      takeaways:['ACM manages TLS certificates.','DNS validation supports automatic renewal.','Imported certs require manual replacement.','ACM attaches through supported services.'],examTip:'For HTTPS on EC2, terminate TLS at an ACM-integrated ALB or install a separately managed certificate on the instance.'
    },
    'Secure API Gateway custom domains':{
      sourcePages:'674–675',summary:'Match API Gateway endpoint type to certificate Region and map the custom domain through Route 53 Alias records.',
      explanation:['Edge-optimized endpoints serve global clients through CloudFront, Regional endpoints serve clients near the API Region, and private endpoints are VPC-only.','For a custom domain, edge-optimized API certificates must be in us-east-1 because CloudFront owns the edge distribution. Regional API certificates must be in the same Region as the API. Route 53 Alias records map the domain to the endpoint.'],
      slideTopics:[{heading:'Endpoint types',bullets:['Edge-optimized: CloudFront edge path.','Regional: direct regional endpoint.','Private: interface-endpoint/VPC access.']},{heading:'Certificate placement',bullets:['Edge-optimized ACM certificate in us-east-1.','Regional ACM certificate in API Region.','Create API Gateway custom domain.','Route 53 Alias points the name to API Gateway.']}],
      takeaways:['Endpoint type determines scope.','Edge certificates live in us-east-1.','Regional certificates match API Region.','Alias records complete DNS mapping.'],examTip:'Certificate Region mismatch is a common API Gateway custom-domain failure.'
    },
    'Control dedicated key hardware with AWS CloudHSM':{
      sourcePages:'676–679',summary:'Use single-tenant FIPS HSM hardware when the customer must exclusively manage cryptographic keys and appliance users.',
      explanation:['AWS CloudHSM provisions dedicated hardware security modules while the customer manages keys. It supports symmetric/asymmetric keys, has no AWS service integration by default, and uses a CloudHSM client over SSL. IAM manages cluster lifecycle but CloudHSM’s own users manage keys.','A production cluster spans multiple AZs with multiple HSMs for high availability. A KMS Custom Key Store can connect KMS to CloudHSM so services such as EBS, S3, and RDS use keys backed by customer-controlled HSMs.'],
      slideTopics:[{heading:'Responsibility',bullets:['AWS provisions and maintains HSM hardware.','Customer creates/manages keys and HSM users.','Single-tenant hardware.','CloudHSM client performs cryptographic operations.']},{heading:'Availability and integration',bullets:['Add HSMs across AZs.','Cluster synchronizes keys.','Custom Key Store bridges KMS integrations.','Customer remains responsible for cluster/key availability.']}],
      takeaways:['CloudHSM is dedicated hardware.','Customer exclusively manages keys.','Multi-AZ requires multiple HSMs.','Custom Key Store enables AWS service use.'],examTip:'Choose CloudHSM when dedicated single-tenant hardware and customer-only key control are hard requirements.'
    },
    'Compare KMS, CloudHSM, and custom key stores':{
      sourcePages:'679–681',summary:'Choose managed multi-tenant KMS, customer-operated single-tenant CloudHSM, or KMS APIs backed by a CloudHSM custom key store.',
      explanation:['KMS is a managed multi-tenant service with AWS-owned, AWS-managed, customer-managed, and imported key options, automatic service integration, managed availability, IAM/key policies, and CloudTrail audit.','CloudHSM is single-tenant dedicated hardware, customer-managed for users, keys, availability, and backups, with CloudWatch/CloudTrail evidence. A KMS Custom Key Store presents familiar KMS integration while storing key material in a customer CloudHSM cluster, combining interfaces but adding HSM operations.'],
      slideTopics:[{heading:'KMS',bullets:['Managed multi-tenant service.','Native AWS service integrations.','AWS manages availability.','Key policies/IAM and CloudTrail.']},{heading:'CloudHSM and custom store',bullets:['Dedicated single-tenant HSM.','Customer owns keys/users/HA.','Custom Key Store exposes KMS API over HSM-backed keys.','Higher control with greater operational responsibility.']}],
      takeaways:['KMS maximizes managed integration.','CloudHSM maximizes hardware/key control.','Custom Key Store combines KMS integration and HSM backing.','Control increases operational burden.'],examTip:'Select the simplest managed KMS model unless dedicated hardware or sole customer key custody is explicit.'
    },
    'Filter application traffic with AWS WAF':{
      sourcePages:'682–683',summary:'Attach a Layer 7 Web ACL to supported HTTP resources and filter requests by IP, headers, body, URI, size, geography, or rate.',
      explanation:['AWS WAF protects HTTP web applications from common exploits. It deploys on ALB, API Gateway, CloudFront, AppSync, Cognito User Pools, and App Runner; it does not attach to an NLB because NLB operates at Layer 4.','Web ACL rules match IP sets, headers/body, URI strings, SQL injection, cross-site scripting, size, geography, or rates. Managed rule groups and marketplace rules supplement custom logic. Web ACLs are Regional except CloudFront ACLs, which are configured globally in us-east-1.'],
      slideTopics:[{heading:'Rule inputs',bullets:['IP/CIDR sets.','HTTP headers, body, and URI.','SQL injection and XSS patterns.','Size, geography, and request rate.']},{heading:'Attachment scope',bullets:['ALB and API Gateway.','CloudFront.','AppSync, Cognito, and App Runner.','Not Network Load Balancer.']}],
      takeaways:['WAF is Layer 7.','Web ACLs contain ordered rules.','Rate rules mitigate abusive clients.','Attachment support follows HTTP-aware services.'],examTip:'Choose WAF for malicious HTTP patterns; a security group cannot inspect SQL injection or URI content.'
    },
    'Combine WAF with stable entry points':{
      sourcePages:'684',summary:'Use Global Accelerator static anycast IPs before an ALB protected by WAF when clients require fixed IP allowlists plus Layer 7 filtering.',
      explanation:['WAF cannot attach to Network Load Balancer, even though NLB provides static IPs. ALB supports WAF but exposes a DNS name rather than fixed addresses.','The deck resolves both requirements by placing Global Accelerator in front of an ALB. Global Accelerator supplies two fixed anycast IPs; the ALB provides HTTP routing; WAF attaches to the ALB for Layer 7 inspection.'],
      slideTopics:[{heading:'Conflicting requirements',bullets:['Fixed ingress IP addresses.','Layer 7 WAF inspection.','NLB has static IP behavior but no WAF.','ALB supports WAF but no fixed node IP.']},{heading:'Combined design',bullets:['Global Accelerator exposes static anycast IPs.','Traffic reaches the ALB.','WAF Web ACL protects the ALB.','ALB routes to application targets.']}],
      takeaways:['WAF does not support NLB.','ALB supports WAF.','Global Accelerator supplies stable IPs.','Services compose to meet both needs.'],examTip:'Static IP plus WAF points to Global Accelerator -> ALB -> WAF-protected application.'
    },
    'Mitigate DDoS attacks with AWS Shield':{
      sourcePages:'685',summary:'Use Shield Standard for automatic baseline DDoS protection or Shield Advanced for premium attack response, cost protection, and enhanced detection.',
      explanation:['AWS Shield protects against distributed denial-of-service attacks. Shield Standard is free and automatically enabled for every AWS customer, defending against common network and transport attacks.','Shield Advanced is a paid optional service for EC2, ELB, CloudFront, Global Accelerator, and Route 53. The slide adds 24/7 DDoS Response Team access, protection from scaling charges caused by attacks, and automatic application-layer mitigation with WAF.'],
      slideTopics:[{heading:'Shield Standard',bullets:['Automatically enabled.','No extra charge.','Protects against common network/transport attacks.']},{heading:'Shield Advanced',bullets:['Premium protected-resource coverage.','DDoS Response Team access.','Attack-related cost protection.','Advanced application-layer integration with WAF.']}],
      takeaways:['Shield is DDoS protection.','Standard is automatic.','Advanced adds response and financial safeguards.','WAF complements application-layer defense.'],examTip:'Choose Shield Advanced when the scenario requires DDoS cost protection or direct DDoS Response Team support.'
    },
    'Apply security policies with AWS Firewall Manager':{
      sourcePages:'686–687',summary:'Centrally create and enforce WAF, Shield Advanced, security-group, Network Firewall, and Route 53 Resolver DNS Firewall policies across Organizations accounts.',
      explanation:['AWS Firewall Manager manages common security rules across accounts in an AWS Organization. Policies can apply to new resources automatically, keeping protection consistent as accounts and applications grow.','The deck lists WAF Web ACL rules, Shield Advanced, security groups for EC2/ALB/ENI, Network Firewall, and Route 53 Resolver DNS Firewall. WAF defines request filtering, Shield provides DDoS protection, and Firewall Manager applies these controls centrally.'],
      slideTopics:[{heading:'Policy coverage',bullets:['WAF rules.','Shield Advanced protected resources.','Common security-group rules.','Network Firewall and DNS Firewall.']},{heading:'Organization operation',bullets:['Apply across selected accounts/OUs.','Automatically include new resources.','Audit policy compliance centrally.','Combine WAF, Shield, and Firewall Manager.']}],
      takeaways:['Firewall Manager is central policy management.','It depends on Organizations.','It manages several firewall/control types.','It does not replace WAF or Shield engines.'],examTip:'Choose Firewall Manager when identical security policies must remain enforced across many accounts.'
    },
    'Design a DDoS-resilient architecture':{
      sourcePages:'688–691',summary:'Layer edge absorption, scalable infrastructure, application filtering, and origin obfuscation using the deck’s DDoS best-practice controls.',
      explanation:['Edge mitigation uses CloudFront and Global Accelerator, with Route 53 edge protection. Infrastructure defense relies on ELB and Auto Scaling to absorb attacks and Shield Advanced for protected resources.','Application-layer defense uses CloudFront caching plus WAF rules and rate limits. Attack-surface reduction hides origins behind CloudFront/API Gateway/ELB, uses security groups/NACLs, private subnets, Elastic IP transfer, and API Gateway throttling or usage plans.'],
      slideTopics:[{heading:'Absorb and scale',bullets:['CloudFront/Global Accelerator edge network.','Route 53 protected DNS.','ELB distributes load.','Auto Scaling adds capacity.','Shield protects supported resources.']},{heading:'Filter and reduce exposure',bullets:['WAF blocks malicious Layer 7 requests.','Rate-based rules and API throttles control floods.','Keep origin resources private/obscured.','Security groups and NACLs minimize open paths.']}],
      takeaways:['DDoS resilience is layered.','Edge services absorb traffic early.','Scaling and filtering solve different attack layers.','Hidden origins prevent bypass.'],examTip:'A resilient answer usually combines edge protection, scalable endpoints, WAF filtering, and restricted origins rather than relying on one control.'
    },
    'Detect threats with Amazon GuardDuty':{
      sourcePages:'692–693',summary:'Enable managed threat detection over CloudTrail, VPC Flow, DNS, and optional workload data, then route findings through EventBridge.',
      explanation:['Amazon GuardDuty uses machine learning, anomaly detection, third-party threat intelligence, and AWS data sources to discover account threats. Core inputs are CloudTrail events, VPC Flow Logs, and AWS DNS logs.','Optional protections include EKS audit/runtime monitoring, RDS/Aurora login activity, EBS volume data, Lambda network activity, and S3 data events in the source deck. Findings can trigger EventBridge, SNS, and Lambda responses; GuardDuty can detect cryptocurrency-mining behavior.'],
      slideTopics:[{heading:'Detection sources',bullets:['CloudTrail management/data activity.','VPC Flow Logs.','AWS DNS query logs.','Optional EKS, RDS, EBS, Lambda, and S3 signals.']},{heading:'Finding response',bullets:['GuardDuty scores and reports findings.','EventBridge matches findings.','SNS notifies responders.','Lambda can automate containment.']}],
      takeaways:['GuardDuty is threat detection.','It consumes existing AWS telemetry.','Optional protections deepen workload coverage.','EventBridge automates response.'],examTip:'Choose GuardDuty for suspicious behavior and compromised-resource detection, not software vulnerability scanning.'
    },
    'Scan vulnerabilities with Amazon Inspector':{
      sourcePages:'694–695',summary:'Continuously assess EC2, ECR container images, and Lambda packages for software vulnerabilities and unintended network exposure.',
      explanation:['Amazon Inspector performs automated security assessments on EC2 using the SSM agent, container images pushed to ECR, and Lambda functions/packages. It evaluates operating-system and package vulnerabilities against a vulnerability database.','For EC2 it also examines unintended network accessibility. Findings include risk scores and can be sent through EventBridge to Security Hub or automated workflows. The deck emphasizes continuous scanning when infrastructure changes.'],
      slideTopics:[{heading:'Supported targets',bullets:['EC2 instances.','ECR container images.','Lambda functions and layers.','Network reachability for EC2.']},{heading:'Assessment output',bullets:['Known package/OS vulnerabilities.','Continuous rescanning as software changes.','Risk score prioritization.','EventBridge/Security Hub integration.']}],
      takeaways:['Inspector finds vulnerabilities.','SSM agent supports EC2 scanning.','ECR images and Lambda packages are covered.','Findings prioritize remediation.'],examTip:'Use Inspector for CVEs and exposure; use GuardDuty for malicious activity and Macie for sensitive S3 data.'
    },
    'Discover sensitive S3 data with Amazon Macie':{
      sourcePages:'696',summary:'Use managed machine learning and pattern matching to inventory S3 security and discover personally identifiable or otherwise sensitive data.',
      explanation:['Amazon Macie is a managed data-security and privacy service focused on S3. It inventories buckets and evaluates security/access controls.','Macie scans object data with machine learning and pattern matching to find sensitive information such as personally identifiable data. Findings can reach EventBridge for alerting and automated remediation.'],
      slideTopics:[{heading:'S3 discovery',bullets:['Inventory S3 buckets.','Assess bucket security and access controls.','Inspect object content.','Classify sensitive information and PII.']},{heading:'Operational response',bullets:['Generate findings.','Route through EventBridge.','Notify security teams.','Automate remediation workflows.']}],
      takeaways:['Macie focuses on S3 data privacy.','It discovers PII/sensitive content.','It also inventories bucket posture.','EventBridge integrates findings.'],examTip:'Choose Macie when the requirement is to find sensitive data inside S3 objects.'
    }
  };

  sectionTwentySixLectures.forEach(lecture=>Object.assign(lecture,sectionTwentySixSlideOverrides[lecture.title]||{}));

  const sectionTwentySevenSlideOverridesA={
    'Build regional networks with Amazon VPC':{
      sourcePages:'697–698, 705',summary:'Create an isolated Regional virtual network containing AZ-scoped subnets, routes, gateways, endpoints, and layered traffic controls.',
      explanation:['Amazon VPC is a Regional Virtual Private Cloud whose IPv4/IPv6 CIDR ranges define its address space. A Region can contain multiple VPCs, and each VPC spans Availability Zones while each subnet belongs to one AZ.','The opening diagram connects public/private subnets, route tables, an internet gateway, NAT, endpoints, peering, VPN/Direct Connect, Transit Gateway, security groups, and NACLs. Source limits such as five VPCs or five CIDRs per Region/VPC are adjustable deck-era defaults.'],
      slideTopics:[{heading:'Scope',bullets:['VPC is Regional.','Subnet is tied to one Availability Zone.','CIDR blocks define private address space.','Router and route tables direct traffic.']},{heading:'Connectivity and security',bullets:['IGW/NAT for internet paths.','Peering/endpoints/hybrid links for private paths.','Security groups protect ENIs.','NACLs protect subnet boundaries.']}],
      takeaways:['VPC is a Regional network boundary.','Subnets are AZ-scoped.','Routes choose next hops.','Security is layered.'],examTip:'Start every VPC question by drawing source subnet, destination, route-table next hop, and both stateful/stateless filters.'
    },
    'Plan IPv4 ranges with CIDR':{
      sourcePages:'699–702',summary:'Calculate IPv4 address ranges from a base address and subnet mask, then avoid overlap across connected networks.',
      explanation:['Classless Inter-Domain Routing describes an IP range as base address plus prefix length. /32 identifies one address, /24 covers 256 addresses, /16 covers 65,536, and /0 covers all IPv4 addresses.','The subnet mask fixes the leading bits; remaining bits vary. The deck exercises 192.168.0.0/24, /16, /26, and /32 and introduces common private ranges. CIDR is used in VPCs, subnets, routes, security groups, and NACLs.'],
      slideTopics:[{heading:'CIDR components',bullets:['Base IP belongs to the range.','Prefix length fixes network bits.','Smaller prefix number means a larger range.','Range size is 2^(32-prefix).']},{heading:'Examples',bullets:['/32 = one IPv4 address.','/24 = 256 addresses.','/16 = 65,536 addresses.','/0 = every IPv4 address.']}],
      takeaways:['CIDR allocates IP ranges.','Prefix length controls size.','Connected VPCs need nonoverlapping ranges.','CIDR appears in routing and firewall rules.'],examTip:'Before peering or Transit Gateway design, verify that all participating VPC CIDRs do not overlap.'
    },
    'Distinguish public, private, and Elastic IPv4 addresses':{
      sourcePages:'703',summary:'Use IANA private ranges internally, public IPv4 for internet routing, and Elastic IP when a stable account-owned public address is required.',
      explanation:['Private IPv4 ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They are not publicly internet-routable and may be reused by separate networks.','Public addresses are internet-routable and globally unique. An automatically assigned EC2 public IPv4 can change after stop/start; an Elastic IP remains allocated to the account until released and can be remapped.'],
      slideTopics:[{heading:'Private ranges',bullets:['10.0.0.0/8.','172.16.0.0/12.','192.168.0.0/16.','Used inside LAN/VPC networks.']},{heading:'Public addressing',bullets:['Public IPv4 is globally routable.','Auto-assigned EC2 public address can change.','Elastic IP is stable and account-owned while allocated.']}],
      takeaways:['Private IPs are not internet-routable.','Private ranges can be reused.','Public IPs must be globally unique.','Elastic IP provides stability.'],examTip:'A public IP alone is insufficient; the subnet route and internet gateway path must also exist.'
    },
    'Choose a default or custom VPC':{
      sourcePages:'704–705',summary:'Use the default VPC for immediate public experimentation and a custom VPC for intentional CIDR, subnet, route, and security design.',
      explanation:['Every new AWS account has a default VPC. Its default subnets exist in each AZ, have internet connectivity, and assign public IPv4 addresses to launched EC2 instances unless configured otherwise.','A custom VPC starts from chosen CIDRs and explicit subnet, route-table, gateway, and security decisions. The deck’s source default VPC CIDR is 172.31.0.0/16 and adjustable quota numbers are time-specific.'],
      slideTopics:[{heading:'Default VPC',bullets:['Precreated in a Region/account.','Default subnet per AZ.','Internet gateway and main routes provided.','Default EC2 launch is internet-oriented.']},{heading:'Custom VPC',bullets:['Choose CIDR deliberately.','Create public/private subnets.','Attach only required gateways.','Control routing and security from first principles.']}],
      takeaways:['Default VPC favors convenience.','Custom VPC favors design control.','Default subnets are public.','Production isolation normally uses custom networking.'],examTip:'A custom VPC is the clearer answer when the scenario requires private tiers, controlled egress, or nondefault address planning.'
    },
    'Design subnets and usable address capacity':{
      sourcePages:'707–708',summary:'Split a VPC CIDR into nonoverlapping AZ-scoped subnets and subtract AWS’s five reserved IPv4 addresses from each subnet.',
      explanation:['A subnet is an IP range tied to one Availability Zone. Public or private behavior comes from routing and address assignment, not the subnet name.','AWS reserves the first four and last IPv4 addresses of every subnet: network address, VPC router, DNS mapping, future use, and network broadcast address. A /27 therefore provides 32 total but only 27 usable addresses in the slide example.'],
      slideTopics:[{heading:'Subnet design',bullets:['Choose nonoverlapping ranges inside VPC CIDR.','Assign each subnet to one AZ.','Create tiers and AZ redundancy with multiple subnets.']},{heading:'Reserved addresses',bullets:['First address: network.','Second: VPC router.','Third: DNS.','Fourth: future use.','Last: broadcast-reserved.']}],
      takeaways:['Subnets are AZ-specific.','Routes make a subnet public/private.','Five IPv4 addresses are unavailable.','Capacity plans need usable, not total, counts.'],examTip:'When asked how many resources fit, calculate CIDR size and subtract five reserved IPv4 addresses.'
    },
    'Route traffic with VPC route tables':{
      sourcePages:'711',summary:'Associate subnets with route tables and let longest-prefix matching choose a local, gateway, NAT, peering, endpoint, or hybrid next hop.',
      explanation:['A route table contains destination CIDRs and targets. Every subnet is associated with one route table, explicitly or through the VPC main route table.','The local route connects subnets inside the VPC. Adding 0.0.0.0/0 to an internet gateway makes an IPv4 internet route; private-subnet egress routes can target NAT. More-specific routes win over broader routes.'],
      slideTopics:[{heading:'Route components',bullets:['Destination prefix.','Target/next hop.','Subnet association.','Local VPC route.']},{heading:'Common targets',bullets:['Internet or egress-only gateway.','NAT gateway/instance.','Peering or Transit Gateway.','VPC endpoint, VPN, or Direct Connect gateway.']}],
      takeaways:['Route tables direct traffic.','Each subnet has one associated route table.','Local route connects VPC subnets.','Longest prefix wins.'],examTip:'A firewall Allow cannot overcome a missing or incorrect route-table next hop.'
    },
    'Provide internet access with an internet gateway':{
      sourcePages:'709–711',summary:'Attach one internet gateway to a VPC, route public-subnet traffic to it, and give instances public addressing for bidirectional IPv4 internet access.',
      explanation:['An internet gateway is horizontally scaled, highly available, redundant VPC infrastructure that allows VPC resources to communicate with the internet. One VPC attaches to one IGW and an IGW attaches to one VPC.','An instance needs a public IPv4 or Elastic IP, a subnet route such as 0.0.0.0/0 to the IGW, and security group/NACL permission. Merely attaching the gateway does not make a subnet or instance public.'],
      slideTopics:[{heading:'Required path',bullets:['Attach IGW to the VPC.','Route public subnet default traffic to IGW.','Assign instance public IPv4/EIP.','Permit traffic in security controls.']},{heading:'Gateway properties',bullets:['Managed and highly available.','Scales horizontally.','One-to-one VPC attachment.','Performs public IPv4 network translation for instances.']}],
      takeaways:['IGW enables VPC internet routing.','Public address is required for IPv4.','Route table creates the path.','Security controls still apply.'],examTip:'To diagnose public EC2 access, verify address, route, IGW attachment, SG, NACL, and application listener.'
    },
    'Administer private instances without exposing SSH':{
      sourcePages:'712',summary:'Follow the supplied bastion-host pattern for private SSH access while recognizing that this VPC chapter does not present Session Manager.',
      explanation:['The slide places a bastion host in a public subnet and uses it as the SSH jump point to private EC2 instances. Its security group permits port 22 only from trusted administrator CIDRs.','Private instances allow SSH only from the bastion host security group, not from the internet. The accepted title says “without exposing SSH”; in this supplied deck the private instances are not public, but the bastion still exposes tightly restricted SSH. Session Manager is not covered on this page.'],
      slideTopics:[{heading:'Bastion path',bullets:['Administrator connects to public bastion.','Bastion connects to private instance.','Private instance has no direct public SSH route.']},{heading:'Security groups',bullets:['Bastion port 22 allows trusted IP ranges only.','Private port 22 allows bastion security group only.','Keep bastion hardened and minimal.']}],
      takeaways:['Bastion is a public jump host.','Private instances remain nonpublic.','Security-group references restrict second hop.','Session Manager is absent from this slide.'],examTip:'For strict slide fidelity, choose the bastion pattern; in a current architecture, evaluate managed no-inbound administration separately.'
    },
    'Recognize legacy NAT instance designs':{
      sourcePages:'713–715',summary:'Understand the examinable legacy NAT instance path and its scaling, availability, and administration disadvantages.',
      explanation:['A NAT instance is an EC2 instance in a public subnet that lets private-subnet instances initiate IPv4 internet access. It requires a public/Elastic IP, route from private subnets, and disabled EC2 source/destination checks.','The preconfigured AMI reached end of standard support in 2020. NAT instances are not inherently highly available, have instance-size bandwidth limits, need patching and security groups, and can serve as bastions. They remain in the deck for comparison.'],
      slideTopics:[{heading:'Configuration',bullets:['Launch NAT instance in public subnet.','Assign public/EIP and IGW route.','Disable source/destination check.','Route private default traffic to the instance.']},{heading:'Limitations',bullets:['Customer manages software and failover.','Bandwidth follows EC2 instance type.','Single instance is a failure point.','Legacy AMI support ended.']}],
      takeaways:['NAT instance is legacy EC2 NAT.','Source/destination check must be disabled.','Customer owns availability and patching.','NAT Gateway is generally preferred.'],examTip:'If a NAT instance stops forwarding packets, check the source/destination check before changing application routes.'
    },
    'Provide zonal egress with NAT gateways':{
      sourcePages:'716–719',summary:'Route private IPv4 egress through an AWS-managed NAT Gateway in a public subnet, deploying one per AZ for resilient zonal design.',
      explanation:['A public NAT Gateway is created in a specific AZ and public subnet, receives an Elastic IP, and needs an internet gateway. Private-subnet route tables point 0.0.0.0/0 to it.','NAT Gateway is managed, scales bandwidth, needs no security group, and is resilient within its AZ. For AZ-independent failover, deploy a NAT Gateway per AZ and route each private subnet to the local one; cross-AZ NAT creates dependency and transfer cost. The source performance numbers are dated.'],
      slideTopics:[{heading:'Traffic path',bullets:['Private instance sends default route to NAT Gateway.','NAT Gateway resides in public subnet.','Public subnet routes to IGW.','Response returns through the stateful translation.']},{heading:'High availability',bullets:['NAT Gateway is AZ-specific.','Deploy one in each used AZ.','Route private subnets to same-AZ gateway.','Avoid cross-AZ dependency and charges.']}],
      takeaways:['NAT Gateway provides outbound IPv4.','It does not accept unsolicited inbound sessions.','It is zonal.','Per-AZ deployment improves resilience.'],examTip:'A private subnet should route to a NAT Gateway; the NAT Gateway’s public subnet routes to the IGW.'
    },
    'Simplify egress with regional NAT gateways':{
      sourcePages:'720',summary:'Use the deck’s Regional NAT Gateway model for highly available VPC-level NAT with its own route tables and optional IGW attachment.',
      explanation:['The v48 slide introduces Regional NAT Gateway as a highly available NAT Gateway associated with a VPC rather than one AZ, eliminating per-AZ NAT deployments.','RNAT has its own route tables and can provide public or private connectivity. Attaching an internet gateway to the RNAT gives public internet access; without an IGW it can route private traffic such as to Transit Gateway. This is edition-specific material that should be checked against current availability.'],
      slideTopics:[{heading:'Regional properties',bullets:['Associated with the VPC.','Highly available across the Region in the slide.','Own route tables.','No per-AZ NAT Gateway deployment.']},{heading:'Connectivity modes',bullets:['Attach IGW for public internet egress.','Use without IGW for private connectivity.','Can route toward Transit Gateway.']}],
      takeaways:['RNAT is presented as Regional.','Its route tables control egress.','IGW attachment selects public connectivity.','Feature details are source-edition specific.'],examTip:'For this PDF, distinguish the new Regional NAT model from traditional zonal NAT Gateways; verify current service support before implementation.'
    },
    'Filter instance traffic with security groups':{
      sourcePages:'721, 728',summary:'Apply stateful allow-only rules at ENI/instance level and rely on automatic return-traffic tracking.',
      explanation:['Security groups operate at instance/ENI level and contain allow rules only. They evaluate all associated group rules before deciding whether new inbound or outbound traffic is permitted.','They are stateful: return traffic for an allowed connection is automatically permitted regardless of a matching reverse-direction rule. This contrasts with subnet-level stateless NACLs.'],
      slideTopics:[{heading:'Scope and rules',bullets:['Attached to network interfaces.','Allow rules only.','Inbound and outbound directions.','Can reference CIDRs or security groups.']},{heading:'Stateful behavior',bullets:['Track accepted connections.','Return traffic is automatically allowed.','Rule order does not matter.','All associated SG rules are combined.']}],
      takeaways:['Security groups protect ENIs.','They allow but do not explicitly deny.','They are stateful.','References express tier relationships.'],examTip:'Do not add ephemeral-port inbound SG rules merely for response traffic; state tracking already allows the return path.'
    },
    'Control subnet traffic with network ACLs':{
      sourcePages:'722–724',summary:'Use ordered stateless allow and deny rules at subnet boundaries, with one NACL per subnet and explicit return-path rules.',
      explanation:['A Network ACL controls inbound and outbound traffic for a subnet. Each subnet has exactly one associated NACL, while one NACL can protect multiple subnets.','Rules have numbers and are evaluated from lowest to highest until the first match. Custom NACLs deny by default; the default NACL allows all traffic and the deck recommends creating custom NACLs instead of modifying it.'],
      slideTopics:[{heading:'NACL mechanics',bullets:['Subnet-level firewall.','Allow and deny rules.','Separate inbound/outbound lists.','First matching numbered rule wins.']},{heading:'Association/defaults',bullets:['One NACL per subnet.','One NACL may cover many subnets.','Default NACL allows all.','Custom NACL denies unmatched traffic.']}],
      takeaways:['NACLs are subnet-scoped.','They support explicit deny.','Rule order matters.','They are stateless.'],examTip:'A lower-numbered broad Allow can prevent a later Deny from ever being evaluated.'
    },
    'Handle ephemeral ports and compare firewalls':{
      sourcePages:'725–728',summary:'Open both request and ephemeral response paths in stateless NACLs, then select SG or NACL from scope, state, and deny requirements.',
      explanation:['Clients choose an ephemeral source port for a connection. A server replies to that high-numbered port, so stateless NACLs must allow the request on the service port and the response on the client ephemeral range in the opposite direction.','Security groups are instance-level, stateful, allow-only, and evaluate all rules. NACLs are subnet-level, stateless, allow/deny, and process ordered rules. Both apply to a packet path.'],
      slideTopics:[{heading:'Ephemeral response',bullets:['Client opens a high source port.','Server listens on service port such as 3306.','Response targets client ephemeral port.','Both NACL directions need matching rules.']},{heading:'SG versus NACL',bullets:['SG: ENI scope, stateful, allow-only.','NACL: subnet scope, stateless, allow/deny.','SG combines rules; NACL uses first numbered match.']}],
      takeaways:['Ephemeral ports carry responses.','Stateless filters need reverse rules.','SG and NACL both apply.','NACL is the explicit-deny option.'],examTip:'When one direction works but responses fail, inspect the NACL ephemeral-port rule.'
    },
    'Connect VPCs with peering':{
      sourcePages:'729',summary:'Privately connect two nonoverlapping VPCs across accounts or Regions and add routes in both directions.',
      explanation:['VPC Peering connects two VPCs through the AWS network so they can communicate as private networks. The VPC CIDRs must not overlap.','A peering connection alone does not route traffic. Both VPC route tables need destination routes to the peering connection, and security groups/NACLs must permit the flows.'],
      slideTopics:[{heading:'Prerequisites',bullets:['Two VPCs with nonoverlapping CIDRs.','Requester creates peering connection.','Accepter approves it.']},{heading:'Traffic path',bullets:['Add reciprocal route-table entries.','Use private IP addresses.','Permit traffic in SGs and NACLs.','AWS backbone carries packets.']}],
      takeaways:['Peering is one-to-one private connectivity.','CIDRs cannot overlap.','Both sides need routes.','Security rules remain required.'],examTip:'An active peering connection without reciprocal routes still provides no end-to-end connectivity.'
    },
    'Respect VPC peering limitations':{
      sourcePages:'730–731',summary:'Avoid overlapping CIDRs and transitive routing, and explicitly route each peering relationship, including cross-account or cross-Region peers.',
      explanation:['VPC peering is not transitive. If A peers with B and B peers with C, A cannot reach C through B; A and C need their own direct peering connection.','Peering can cross accounts and Regions. Route tables are updated in each VPC, and cross-account security-group references work only in supported same-Region scenarios; the source diagrams emphasize private AWS connectivity rather than an internet path.'],
      slideTopics:[{heading:'Nontransitive mesh',bullets:['A-B peering serves only A and B.','B-C peering serves only B and C.','A-C requires another direct peer.','Every peer needs explicit reciprocal routes.']},{heading:'Scope',bullets:['Same or different account.','Same or different Region.','No overlapping CIDRs.','Data transfer behavior depends on placement.']}],
      takeaways:['Peering is nontransitive.','Large meshes need many connections.','Cross-Region peering is supported.','Transit Gateway fits hub-and-spoke scale.'],examTip:'When dozens of VPCs need transitive connectivity, choose Transit Gateway instead of a peering mesh.'
    },
    'Keep AWS service traffic private with VPC endpoints':{
      sourcePages:'732–734',summary:'Reach public AWS service APIs through private VPC endpoints without internet gateway, NAT, public IP, or VPN/Direct Connect.',
      explanation:['AWS service APIs normally expose public URLs. VPC endpoints powered by PrivateLink connect a VPC privately to supported services, keeping traffic on the AWS network.','Endpoints are horizontally scaled managed resources and remove the internet/NAT path. Endpoint policies add a resource-level permission layer, while IAM/service resource policies still apply. Troubleshooting must verify DNS, endpoint policy, route/security controls, and service Region.'],
      slideTopics:[{heading:'Private service path',bullets:['Private subnet sends request to endpoint.','No public IP or internet gateway needed.','No NAT Gateway needed.','Traffic stays on AWS network.']},{heading:'Control and troubleshooting',bullets:['Endpoint policy limits accessible actions/resources.','IAM and service policies also apply.','Endpoint is Regional.','DNS/routes/security depend on endpoint type.']}],
      takeaways:['Endpoints privatize AWS API access.','They replace internet/NAT for supported services.','Policies add another authorization layer.','Endpoints are Region-specific.'],examTip:'When a private subnet accesses S3 or DynamoDB, a gateway endpoint usually avoids NAT data-processing cost.'
    },
    'Use gateway endpoints for S3 and DynamoDB':{
      sourcePages:'734–735',summary:'Add a free route-table target for S3 or DynamoDB from VPC resources without provisioning endpoint ENIs.',
      explanation:['Gateway endpoints support Amazon S3 and DynamoDB. They are route-table targets and do not create private IP ENIs or require security groups.','The comparison says gateway endpoints are preferred for in-VPC S3 access because they are free. They cannot be extended from on premises, another VPC, or another Region; interface endpoints support those broader access paths at hourly/data cost.'],
      slideTopics:[{heading:'Gateway endpoint',bullets:['S3 and DynamoDB only.','Configured in selected route tables.','No security group.','No hourly/data processing charge in the source comparison.']},{heading:'Limitations',bullets:['Accessible from associated VPC routes.','Not extended through peering/TGW/on-premises.','Regional service destination.','Use interface endpoint for those other paths.']}],
      takeaways:['Gateway endpoints are route targets.','They support S3/DynamoDB.','They are the lowest-cost in-VPC choice.','They have limited network reach.'],examTip:'Choose a gateway endpoint for ordinary private S3/DynamoDB access from the same VPC.'
    },
    'Use interface endpoints and AWS PrivateLink':{
      sourcePages:'733–735',summary:'Provision private-IP ENIs with security groups for many AWS services and expose private applications to consumer VPCs through PrivateLink.',
      explanation:['An interface endpoint uses AWS PrivateLink and provisions an ENI/private IP entry point in selected subnets. Security groups protect it, private DNS can map the public service hostname, and the endpoint incurs hourly/data costs.','Interface endpoints support many AWS services and can be reached from on premises or other connected networks. PrivateLink also lets a provider expose a service behind an NLB to consumer VPC endpoint ENIs without peering or shared CIDRs.'],
      slideTopics:[{heading:'Interface endpoint',bullets:['ENI with private IP per selected subnet/AZ.','Security group controls access.','Private DNS can preserve service hostname.','Hourly and data-processing charges.']},{heading:'PrivateLink service',bullets:['Provider fronts service with NLB.','Consumer creates interface endpoint.','No VPC peering or CIDR relationship.','One-way private service exposure.']}],
      takeaways:['Interface endpoints use ENIs.','They support many services.','Security groups apply.','PrivateLink exposes services without network mesh connectivity.'],examTip:'Choose PrivateLink when consumers need private access to one service but must not receive broad VPC-to-VPC routing.'
    },
    'Give VPC-connected Lambda functions service access':{
      sourcePages:'736',summary:'Route a VPC-attached Lambda function to DynamoDB through a gateway endpoint or through NAT plus IGW when no endpoint is used.',
      explanation:['DynamoDB exposes a public service endpoint. Once Lambda is attached to private VPC subnets, it no longer uses the default Lambda public networking path.','The diagram compares private-subnet routing through a NAT Gateway in a public subnet and internet gateway versus a DynamoDB gateway endpoint. The endpoint is the private, lower-cost path and does not require NAT.'],
      slideTopics:[{heading:'NAT path',bullets:['Lambda ENI in private subnet.','Default route to NAT Gateway.','NAT public subnet routes to IGW.','Request reaches public DynamoDB endpoint.']},{heading:'Endpoint path',bullets:['Add DynamoDB gateway endpoint.','Associate private subnet route table.','Traffic remains on AWS network.','No NAT/IGW required for DynamoDB.']}],
      takeaways:['VPC Lambda needs an explicit egress path.','Public subnet attachment alone is insufficient.','NAT reaches public APIs.','Gateway endpoint privately reaches DynamoDB.'],examTip:'Prefer a DynamoDB gateway endpoint for Lambda-in-VPC access unless the function also needs general internet egress.'
    }
  };

  const sectionTwentySevenSlideOverridesB={
    'Capture network metadata with VPC Flow Logs':{
      sourcePages:'737–740',summary:'Record accepted and rejected IP-flow metadata at VPC, subnet, or ENI scope for troubleshooting and security analysis.',
      explanation:['VPC Flow Logs capture metadata about IP traffic entering or leaving network interfaces at VPC, subnet, or ENI scope. They can deliver to S3, CloudWatch Logs, or Data Firehose and can include AWS-managed interface traffic such as ELB, RDS, ElastiCache, Redshift, WorkSpaces, and NAT Gateway.','The deck notes flow logs do not capture every protocol, naming DHCP, DNS to the Amazon resolver, Windows license activation, instance metadata, and Amazon Time Sync as exclusions. Records describe flows rather than packet payloads.'],
      slideTopics:[{heading:'Scope and destination',bullets:['Create at VPC, subnet, or ENI.','Capture accepted, rejected, or all flows.','Deliver to CloudWatch Logs, S3, or Firehose.','Use for many AWS-managed ENIs.']},{heading:'Boundary',bullets:['Records source/destination/ports/protocol/action.','Does not store packet content.','Several AWS infrastructure flows are excluded.']}],
      takeaways:['Flow Logs capture metadata.','Scope determines interfaces covered.','ACCEPT/REJECT supports diagnosis.','Payload inspection needs another tool.'],examTip:'Use Flow Logs to prove whether SG/NACL allowed a flow; use Traffic Mirroring when packet payload inspection is required.'
    },
    'Analyze flow logs and delivery permissions':{
      sourcePages:'739–742',summary:'Read flow-record fields to identify rejected endpoints and ports, aggregate top talkers, and grant the delivery role permission to publish logs.',
      explanation:['Fields such as srcaddr, dstaddr, srcport, dstport, protocol, packets, bytes, start/end, action, and log-status identify the communicating parties and result. REJECT inbound commonly points to NACL or SG; REJECT outbound can identify outbound NACL issues in the deck’s examples.','CloudWatch Logs plus Contributor Insights can rank top IP addresses and alarms can notify. Publishing to CloudWatch Logs requires a service role with CreateLogGroup/Stream, DescribeLogGroups/Streams, and PutLogEvents as shown; destination policies differ for S3/Firehose.'],
      slideTopics:[{heading:'Record interpretation',bullets:['Source/destination address and port.','Protocol, bytes, packets, and time.','ACCEPT or REJECT action.','Log status identifies capture errors.']},{heading:'Delivery and analytics',bullets:['IAM role publishes to CloudWatch Logs.','Contributor Insights ranks top talkers.','Metric/alarm can alert on patterns.','S3/Athena enables long-term analysis.']}],
      takeaways:['Flow fields identify path and result.','REJECT localizes filters.','Destination needs delivery permission.','Contributor Insights finds top sources.'],examTip:'If no records arrive, troubleshoot the Flow Logs delivery role/policy before concluding there is no traffic.'
    },
    'Connect on premises with Site-to-Site VPN':{
      sourcePages:'743–745',summary:'Build an IPsec connection over the public internet between an AWS virtual private gateway and an on-premises customer gateway.',
      explanation:['Site-to-Site VPN connects a VPC to on-premises through a Virtual Private Gateway attached to the VPC and a Customer Gateway resource/device on the customer side.','The customer device uses an internet-routable IP, or a NAT public IP when behind NAT with UDP 4500 traversal enabled. The connection includes two VPN tunnels for resilience, but the underlying path uses the public internet.'],
      slideTopics:[{heading:'AWS side',bullets:['Create Virtual Private Gateway.','Attach VGW to VPC.','Create VPN routes/propagation.','AWS supplies two tunnel endpoints.']},{heading:'Customer side',bullets:['Create Customer Gateway resource.','Configure compatible physical/software device.','Use public IP or NAT-T address.','Run BGP or static routing as selected.']}],
      takeaways:['VPN uses IPsec.','VGW terminates AWS side.','Customer Gateway represents on-premises side.','Two tunnels improve availability.'],examTip:'VPN is encrypted quickly over the internet; Direct Connect is dedicated/private but not encrypted by default.'
    },
    'Connect multiple sites with VPN CloudHub':{
      sourcePages:'746',summary:'Use multiple Site-to-Site VPN connections on one virtual private gateway as a low-cost hub-and-spoke link among customer sites.',
      explanation:['VPN CloudHub provides secure communication among several on-premises sites when each has a Site-to-Site VPN connection to the same AWS Virtual Private Gateway.','It uses the public internet and BGP route exchange. The deck positions it as a simple low-cost hub-and-spoke model for primary or secondary connectivity between locations.'],
      slideTopics:[{heading:'Topology',bullets:['One VGW acts as hub.','Each site has a customer gateway/VPN.','BGP advertises site routes.','Traffic can pass site-to-site through the hub.']},{heading:'Fit',bullets:['Low-cost multi-site connection.','Encrypted public-internet tunnels.','Primary or backup connectivity.']}],
      takeaways:['CloudHub joins multiple VPN sites.','It uses one VGW.','BGP exchanges routes.','It is hub-and-spoke over internet VPN.'],examTip:'Choose VPN CloudHub when several branch sites already use Site-to-Site VPN and need simple mutual connectivity.'
    },
    'Establish dedicated links with Direct Connect':{
      sourcePages:'747–750',summary:'Provision a private dedicated circuit from a customer network to an AWS Direct Connect location for consistent hybrid bandwidth.',
      explanation:['Direct Connect creates a dedicated private connection from a remote network to AWS. The customer establishes the physical path to a DX location, then uses virtual interfaces to reach private VPC resources or public AWS services.','Provisioning commonly takes at least a month in the deck. Dedicated connections allocate a physical port; hosted connections come through a partner. Source bandwidth sizes and lead times are edition-specific.'],
      slideTopics:[{heading:'Physical setup',bullets:['Customer/data center reaches a DX location.','AWS or partner provisions the circuit.','Connection provides consistent private bandwidth.','No internet path for the long-haul link.']},{heading:'Logical access',bullets:['Create virtual interfaces.','Private VIF reaches VPC resources.','Public VIF reaches public AWS endpoints.','Transit VIF reaches Transit Gateway through DX Gateway.']}],
      takeaways:['DX is dedicated private connectivity.','It has provisioning lead time.','Connection and virtual interface are separate layers.','DX is not encrypted by default.'],examTip:'Choose Direct Connect for predictable dedicated bandwidth, and add VPN when encryption is also required.'
    },
    'Choose Direct Connect virtual interfaces and gateways':{
      sourcePages:'748–750',summary:'Use private, public, or transit VIFs and a Direct Connect Gateway to reach the required VPC, AWS public service, or multi-Region network scope.',
      explanation:['A private VIF reaches private VPC addresses through a virtual private gateway. A public VIF reaches public AWS endpoints such as S3/Glacier over DX. A transit VIF reaches VPCs attached to Transit Gateway through a Direct Connect Gateway.','A Direct Connect Gateway connects one DX to one or more VPCs in different Regions in the same account in the deck, while Transit Gateway/DX Gateway patterns expand centralized connectivity.'],
      slideTopics:[{heading:'VIF types',bullets:['Private VIF -> VGW/VPC private IPs.','Public VIF -> AWS public endpoints.','Transit VIF -> Transit Gateway through DX Gateway.']},{heading:'Gateway scope',bullets:['DX Gateway decouples circuit from one Region/VPC.','Associate supported gateways/VPCs.','Plan route advertisements with BGP.']}],
      takeaways:['VIF selects logical destination.','Private and public VIFs are distinct.','Transit VIF serves TGW.','DX Gateway extends circuit reach.'],examTip:'S3 over its public service endpoint uses a public VIF unless a different private architecture is specified.'
    },
    'Encrypt traffic over Direct Connect':{
      sourcePages:'751',summary:'Overlay Site-to-Site VPN/IPsec on a Direct Connect public VIF when dedicated private transport also requires encryption.',
      explanation:['Direct Connect traffic is private but not encrypted by default. The slide combines a Direct Connect connection/public VIF with an IPsec Site-to-Site VPN to create an encrypted private path.','This design provides the more consistent network behavior of DX plus encryption from VPN. MACsec may apply to supported dedicated connections as a separate link-layer option, but the supplied page focuses on VPN over DX.'],
      slideTopics:[{heading:'Base DX',bullets:['Dedicated/private transport.','Stable bandwidth and path.','No encryption by default.']},{heading:'VPN overlay',bullets:['Public VIF reaches AWS VPN endpoint.','IPsec encrypts traffic.','VPN tunnels run over the DX path.']}],
      takeaways:['Private does not mean encrypted.','DX lacks default encryption.','VPN adds IPsec confidentiality.','The deck uses public VIF for the overlay.'],examTip:'When the requirement says “dedicated and encrypted,” combine Direct Connect with Site-to-Site VPN.'
    },
    'Design resilient hybrid connectivity':{
      sourcePages:'752–753',summary:'Use separate Direct Connect devices and locations for critical resiliency and keep Site-to-Site VPN as a lower-cost backup path.',
      explanation:['The resiliency diagrams progress from multiple connections at one location to connections at multiple DX locations, with maximum resiliency using redundant devices at both locations.','If DX fails, a second DX can provide high-quality backup but is expensive; Site-to-Site VPN provides a faster/lower-cost backup over the internet. Routing preference and failure testing determine whether failover works.'],
      slideTopics:[{heading:'DX redundancy',bullets:['Avoid one connection/device.','Use separate DX devices.','Use multiple DX locations for critical workloads.','Maximum pattern duplicates at each location.']},{heading:'Backup options',bullets:['Second DX for dedicated backup.','Site-to-Site VPN for economical internet backup.','BGP/routing controls failover.']}],
      takeaways:['One DX is a single point of failure.','Device and location diversity matter.','VPN is a common backup.','Failover must be tested.'],examTip:'Maximum resilience requires independent connections at independent locations, not two logical VIFs on one circuit.'
    },
    'Create a routing hub with Transit Gateway':{
      sourcePages:'754–755',summary:'Replace complicated peering and VPN meshes with a Regional, transitive hub connecting VPCs and on-premises networks.',
      explanation:['Transit Gateway provides hub-and-spoke transitive routing among thousands of VPCs and on-premises connections. It is a Regional resource but can peer with Transit Gateways in other Regions.','Attachments connect VPCs, VPNs, and Direct Connect gateways; Transit Gateway route tables segment domains. It supports IP multicast in the source deck and removes the nontransitive limitation of VPC peering.'],
      slideTopics:[{heading:'Hub attachments',bullets:['Attach many VPCs.','Attach Site-to-Site VPNs.','Reach Direct Connect through DX Gateway.','Peer TGWs across Regions.']},{heading:'Routing',bullets:['Transitive hub-and-spoke.','TGW route tables select/segment paths.','Scale beyond peering mesh.','Centralize network control.']}],
      takeaways:['TGW enables transitive routing.','It is Regional.','Attachments connect network domains.','Route tables provide segmentation.'],examTip:'Choose Transit Gateway when many VPCs and sites need centralized transitive connectivity.'
    },
    'Scale Transit Gateway with ECMP and sharing':{
      sourcePages:'756–758',summary:'Aggregate equal-cost VPN paths for throughput and share a central Transit Gateway or Direct Connect architecture across accounts.',
      explanation:['Equal-Cost Multi-Path routing sends traffic across multiple equal routes. Transit Gateway supports ECMP over multiple Site-to-Site VPN connections, multiplying aggregate tunnel throughput beyond one VPN connection.','The source diagram contrasts one VGW VPN path with multiple TGW VPN paths and source-era throughput figures. AWS Resource Access Manager can share Transit Gateway across accounts so a central networking account shares Direct Connect connectivity with client accounts.'],
      slideTopics:[{heading:'ECMP',bullets:['Create multiple equal-cost VPN connections.','TGW distributes flows across tunnels.','Aggregate throughput scales with paths.','Dynamic routing advertises equal routes.']},{heading:'Multi-account sharing',bullets:['Networking account owns TGW/DX architecture.','RAM shares Transit Gateway.','Client VPCs attach from other accounts.','Central team controls routing.']}],
      takeaways:['ECMP aggregates equal paths.','TGW scales VPN throughput.','RAM enables cross-account sharing.','Central networking reduces duplicate circuits.'],examTip:'Choose TGW ECMP when VPN throughput must exceed the capacity of one Site-to-Site VPN connection.'
    },
    'Inspect packets with VPC Traffic Mirroring':{
      sourcePages:'759',summary:'Copy selected ENI packets to security appliances for payload inspection, content analysis, threat monitoring, and troubleshooting.',
      explanation:['VPC Traffic Mirroring captures network traffic from selected ENIs and sends copies to a target, such as a Network Load Balancer or security appliance fleet.','A filter selects which packets to mirror. Unlike Flow Logs metadata, mirrored traffic enables packet-level content inspection, intrusion detection, and deep troubleshooting without placing the analyzer inline.'],
      slideTopics:[{heading:'Mirroring configuration',bullets:['Source is an ENI.','Filter selects traffic.','Target receives packet copies.','NLB can distribute to appliance fleet.']},{heading:'Use cases',bullets:['Content inspection.','Threat monitoring.','Intrusion detection.','Packet-level troubleshooting.']}],
      takeaways:['Traffic Mirroring copies packets.','It is out-of-band inspection.','Filters limit mirrored volume.','It provides payload detail absent from Flow Logs.'],examTip:'Choose Traffic Mirroring for packet capture; choose Flow Logs for lightweight connection metadata.'
    },
    'Adopt dual-stack IPv6 networking':{
      sourcePages:'760–762',summary:'Add globally unique IPv6 ranges while retaining mandatory IPv4, then route and secure both protocol families independently.',
      explanation:['IPv6 expands the address space and represents addresses in hexadecimal. In the source VPC model, IPv4 cannot be disabled; enabling IPv6 creates a dual-stack VPC/subnet.','IPv6 addresses are public/global rather than using NAT like private IPv4. Applications, route tables, security groups, NACLs, and DNS records must support both families. The troubleshooting slide notes depleted IPv4 subnet capacity can still prevent an EC2 launch even when IPv6 space exists.'],
      slideTopics:[{heading:'Dual stack',bullets:['VPC/subnet retains IPv4 CIDR.','Add IPv6 CIDR.','Instances may receive both address families.','Use AAAA DNS for IPv6.']},{heading:'Operational implications',bullets:['IPv6 is globally routable.','Add ::/0 routes where needed.','Create IPv6 SG/NACL rules separately.','IPv4 address exhaustion can still block launches.']}],
      takeaways:['IPv6 does not replace IPv4 in this deck.','Dual-stack runs both protocols.','IPv6 avoids NAT address translation.','Security/routes are protocol-specific.'],examTip:'Adding IPv6 does not increase a subnet’s available private IPv4 addresses for resources that still require IPv4.'
    },
    'Control IPv6 egress with an egress-only internet gateway':{
      sourcePages:'763–764',summary:'Allow private-subnet IPv6 clients to initiate internet connections while blocking unsolicited inbound IPv6 connections.',
      explanation:['An egress-only internet gateway serves IPv6 and is described as analogous to NAT Gateway’s outbound-only behavior, though it performs no address translation.','The private subnet routes ::/0 to the egress-only gateway. Public IPv6 subnets can route ::/0 to the ordinary internet gateway. Stateful egress-only behavior permits responses to initiated connections.'],
      slideTopics:[{heading:'Private IPv6 path',bullets:['Instance has global IPv6 address.','Private route table sends ::/0 to egress-only IGW.','Outbound connection reaches internet.','Unsolicited inbound connection is blocked.']},{heading:'Contrast',bullets:['Ordinary IGW supports inbound/outbound IPv6 when allowed.','Egress-only IGW is outbound initiated only.','NAT Gateway is an IPv4 translation service.']}],
      takeaways:['Egress-only IGW is IPv6-only.','It allows initiated outbound sessions.','It blocks unsolicited inbound sessions.','It does not translate addresses.'],examTip:'For outbound-only IPv6 from a private subnet, use an egress-only internet gateway, not a NAT Gateway.'
    },
    'Understand AWS network data-transfer cost':{
      sourcePages:'768–769',summary:'Distinguish free ingress, internet egress, cross-AZ, and cross-Region charges and keep high-volume traffic on the shortest private path.',
      explanation:['The simplified cost slide shows inbound internet traffic as free, outbound internet traffic as charged, cross-AZ private/public traffic charged in both directions, and cross-Region traffic charged at a higher source-era example rate.','Using a resource’s public/Elastic IP for same-AZ communication can incur regional transfer cost, while private IP keeps the path cheaper. Pricing figures in the deck are illustrative and Region/service dependent.'],
      slideTopics:[{heading:'Cost directions',bullets:['Ingress to AWS is generally free in the simplified model.','Internet egress is charged.','Cross-AZ traffic may charge both sides.','Cross-Region traffic is charged.']},{heading:'Design guidance',bullets:['Use private IP for internal paths.','Keep chatty services in same AZ when resilience permits.','Evaluate managed gateway processing fees.','Treat slide prices as dated examples.']}],
      takeaways:['Egress is a major cost.','Cross-AZ traffic is not always free.','Private addressing can reduce cost.','Architecture placement affects network bill.'],examTip:'When cost is the stated priority, inspect every AZ/Region boundary and every per-GB gateway in the path.'
    },
    'Reduce S3 and NAT transfer expense':{
      sourcePages:'770–771',summary:'Use S3 gateway endpoints for private VPC access and choose transfer paths from latency, internet egress, acceleration, and NAT processing cost.',
      explanation:['The S3 pricing slide distinguishes free ingress, charged internet egress, faster but additional-cost Transfer Acceleration, and CloudFront caching that can reduce repeated S3 origin egress. Numerical prices are source-era examples.','A private instance reaching S3 through NAT Gateway pays NAT hourly/data processing and follows the public service path. An S3 gateway endpoint is free in the source comparison and avoids NAT for in-Region S3 API access.'],
      slideTopics:[{heading:'S3 external transfer',bullets:['Ingress is free in the simplified slide.','Internet egress is charged.','Transfer Acceleration adds edge-path cost.','CloudFront caches repeated delivery.']},{heading:'VPC-to-S3',bullets:['NAT Gateway adds hourly and per-GB cost.','Gateway endpoint routes S3 privately.','Gateway endpoint avoids NAT processing.','Endpoint policy scopes access.']}],
      takeaways:['NAT can dominate S3 path cost.','Gateway endpoint is preferred for same-VPC S3.','CloudFront reduces repeated origin delivery.','Acceleration trades cost for speed.'],examTip:'If private workloads send large data to S3, add an S3 gateway endpoint before scaling NAT.'
    },
    'Inspect VPC traffic with AWS Network Firewall':{
      sourcePages:'772–774',summary:'Deploy a managed stateful VPC firewall for centralized Layer 3–7 inspection of VPC, internet, peering, VPN, and Direct Connect traffic.',
      explanation:['AWS Network Firewall protects an entire VPC and can inspect traffic in any direction: VPC-to-VPC, outbound internet, inbound internet, VPN, and Direct Connect. It uses managed infrastructure across AZs and integrates with Firewall Manager.','Rules can filter thousands of IPs/ports, protocols, domains, and regex patterns. It supports allow/drop/alert actions and active flow inspection; logs can go to S3, CloudWatch Logs, or Firehose. Source scale figures are dated.'],
      slideTopics:[{heading:'Inspection paths',bullets:['Internet ingress/egress.','VPC-to-VPC traffic.','Site-to-Site VPN.','Direct Connect.']},{heading:'Fine-grained rules',bullets:['IP and port.','Protocol.','Domain and regex pattern.','ALLOW, DROP, or ALERT.','Central policy through Firewall Manager.']}],
      takeaways:['Network Firewall is managed VPC inspection.','It spans Layer 3 through Layer 7 rules.','Routing must steer traffic through endpoints.','Logs support audit.'],examTip:'Choose Network Firewall for centralized stateful deep network inspection, not merely instance-level port filtering.'
    },
    'Choose the correct network protection layer':{
      sourcePages:'721–728, 772–774',summary:'Match SG, NACL, WAF, Shield, Network Firewall, and third-party appliances to ENI, subnet, HTTP, DDoS, or centralized inspection scope.',
      explanation:['Security groups are stateful ENI allow lists; NACLs are stateless subnet allow/deny lists. WAF inspects Layer 7 HTTP at supported application endpoints, while Shield mitigates DDoS attacks.','Network Firewall provides centralized managed Layer 3–7 VPC traffic inspection. Third-party appliances can run behind Gateway Load Balancer for specialized functions. Layer, scope, statefulness, deny requirement, and packet steering identify the right control.'],
      slideTopics:[{heading:'Native layers',bullets:['SG: stateful instance/ENI.','NACL: stateless subnet.','WAF: HTTP application requests.','Shield: DDoS.','Network Firewall: centralized VPC L3-L7.']},{heading:'Selection questions',bullets:['Which network layer?','Which resource/subnet/VPC scope?','Need explicit deny or payload inspection?','Inline, edge, or out-of-band placement?']}],
      takeaways:['No firewall solves every layer.','SG and NACL are foundational.','WAF is HTTP-specific.','Network Firewall is centralized inline inspection.'],examTip:'Choose by layer first: URI/SQLi -> WAF; subnet deny -> NACL; ENI allow -> SG; full VPC inspection -> Network Firewall.'
    },
    'Troubleshoot VPC connectivity systematically':{
      sourcePages:'765–767, 737–740',summary:'Trace address, DNS, route, gateway, stateful and stateless filters, endpoint policies, and application listeners in both directions.',
      explanation:['The VPC summary ties CIDR, VPC/subnet scope, gateways, NAT, security groups, NACLs, peering, endpoints, hybrid links, Transit Gateway, and Flow Logs into one diagnostic model.','Start with the source and resolved destination address, then inspect the source-subnet route and target. Check return routing, SG state/rules, NACL service and ephemeral ports, gateway/endpoint policy, and application listener. Use Flow Logs ACCEPT/REJECT evidence to narrow where filtering occurs.'],
      slideTopics:[{heading:'Path checklist',bullets:['Correct DNS/address and available subnet IP.','Forward and return routes.','Correct IGW/NAT/endpoint/peer/TGW/VPN target.','SG and NACL rules in both directions.','Application process listens on expected port.']},{heading:'Evidence',bullets:['Flow Logs address/port/action.','Reachability and service health signals.','Route-table and association inspection.','Endpoint/IAM/resource policy evaluation.']}],
      takeaways:['Troubleshoot the full round trip.','Routes and filters are separate gates.','Stateless NACLs need return ports.','Flow Logs provide path evidence.'],examTip:'Do not change several controls at once; find the first failed gate in the packet path and correct it.'
    }
  };

  sectionTwentySevenLectures.forEach(lecture=>Object.assign(lecture,sectionTwentySevenSlideOverridesA[lecture.title]||sectionTwentySevenSlideOverridesB[lecture.title]||{}));

  const sectionTwentyEightSlideOverrides={
    'Define recovery with RPO and RTO':{
      sourcePages:'776–777',
      summary:'Define disaster recovery around business continuity, then express acceptable data loss and downtime as RPO and RTO.',
      explanation:['The slides define a disaster as an event that harms business continuity or finances and show recovery paths from on premises to on premises, on premises to AWS, or one AWS Region to another. Every design starts by identifying the systems and data that must recover.','Recovery point objective measures the acceptable data-loss window before the disaster; recovery time objective measures the acceptable downtime after it. Smaller objectives require more replication, automation, and continuously available recovery capacity.'],
      slideTopics:['Disaster-recovery scope','On-premises, hybrid, and cross-Region recovery','RPO data-loss window','RTO downtime window'],
      takeaways:['RPO is measured backward from the disruption.','RTO is measured forward until service returns.','Business requirements determine the recovery investment.'],
      examTip:'Five minutes of acceptable lost transactions is RPO; restoring service within one hour is RTO.'
    },
    'Choose a disaster-recovery strategy':{
      sourcePages:'778',
      summary:'Choose among backup and restore, pilot light, warm standby, and hot or multi-site recovery by balancing speed and cost.',
      explanation:['The slide orders four strategies from slower recovery toward faster RTO: backup and restore, pilot light, warm standby, and hot site or multi-site. Moving toward an always-running recovery site increases readiness and recurring cost.','A complete decision must satisfy both RPO and RTO. Data replication can improve RPO, while pre-provisioned application capacity and automated traffic failover primarily improve RTO.'],
      slideTopics:['Backup and restore','Pilot light','Warm standby','Hot site / multi-site','RTO and cost tradeoff'],
      takeaways:['Backup and restore keeps the least idle infrastructure.','Warm standby keeps a full but smaller environment running.','Multi-site offers the fastest recovery at the highest cost.'],
      examTip:'Select the least expensive strategy that still meets every stated recovery objective.'
    },
    'Recover from backups':{
      sourcePages:'779, 784',
      summary:'Restore protected data and recreate compute when a higher RPO and longer RTO are acceptable.',
      explanation:['The backup-and-restore diagram sends on-premises data through Storage Gateway or Snowball to S3 and archival storage, and protects AWS data with EBS snapshots, RDS backups, and AMIs. Lifecycle policies and cross-Region replication can place recovery copies where they are needed.','After a disaster, the application environment and databases must be recreated from those artifacts. CloudFormation or Elastic Beanstalk can automate infrastructure recovery, but restore testing is necessary because a stored backup alone does not prove the application can return within its RTO.'],
      slideTopics:['Storage Gateway and Snowball','S3 and archival lifecycle','EBS snapshots and RDS backups','AMIs','Infrastructure recreation'],
      takeaways:['Backup and restore usually has a high RPO and slower RTO.','Copies must include data and rebuild configuration.','Automation and restore drills reduce recovery time.'],
      examTip:'A strong cost constraint with relaxed recovery objectives points to backup and restore.'
    },
    'Maintain a pilot-light environment':{
      sourcePages:'780',
      summary:'Keep the critical core and replicated data running while leaving most application capacity stopped until a disaster.',
      explanation:['In the slide architecture, RDS remains running in AWS and receives replicated data from the corporate data center, while EC2 application capacity is not running. This small live core is the pilot light.','At failover, the stopped or absent application tier is launched and Route 53 redirects clients. Because critical systems already exist, recovery is faster than rebuilding entirely from backups but slower than a full warm standby.'],
      slideTopics:['Small live application core','Continuous data replication','RDS running','EC2 not running','Route 53 failover'],
      takeaways:['Only critical core components remain active.','Most capacity starts during recovery.','Pilot light is faster than backup and restore.'],
      examTip:'A running recovery database with application servers launched only during an incident describes pilot light.'
    },
    'Run a warm standby':{
      sourcePages:'781',
      summary:'Run the complete recovery system at minimum size, then scale it to production load during failover.',
      explanation:['The warm-standby diagram includes a running secondary database, load balancer, and EC2 Auto Scaling group at minimum capacity. Data is replicated from the primary site and every application layer already exists.','When the primary site fails, Route 53 changes traffic and the recovery Auto Scaling group expands. The design costs more than pilot light but avoids provisioning missing application tiers during the event.'],
      slideTopics:['Full system at minimum size','RDS secondary','Elastic Load Balancing','EC2 Auto Scaling','Route 53 failover'],
      takeaways:['Every application tier is already running.','Recovery capacity begins below production scale.','Failover consists mainly of scaling and traffic redirection.'],
      examTip:'A complete secondary stack that runs continuously at reduced capacity is warm standby.'
    },
    'Operate active-active multi-site recovery':{
      sourcePages:'782–783',
      summary:'Run production-scale environments in multiple sites for very low RTO, accepting the highest cost and coordination complexity.',
      explanation:['The hot-site slide shows full production capacity on premises and in AWS serving traffic active-active, with data replication and Route 53 failover. This can restore service in minutes or seconds because the secondary site does not need to scale first.','The all-AWS example places production Auto Scaling and load-balanced tiers in two Regions with Aurora Global Database replication. Applications must handle cross-Region data behavior and avoid split-brain writes when both sites are active.'],
      slideTopics:['Hot site / multi-site','Active-active traffic','Full production capacity','All-AWS multi-Region','Aurora Global Database'],
      takeaways:['Both sites can serve production traffic.','Very low RTO comes with high steady-state cost.','Cross-site data replication is part of the design.'],
      examTip:'Production-scale stacks running simultaneously in two locations indicate hot-site or multi-site recovery.'
    },
    'Recover servers with AWS Elastic Disaster Recovery':{
      sourcePages:'785',
      summary:'Continuously replicate server disks into a low-cost AWS staging area and launch target EC2 resources during recovery.',
      explanation:['AWS Elastic Disaster Recovery, formerly CloudEndure Disaster Recovery, installs a replication agent on physical, virtual, or cloud servers. It performs continuous block-level replication into low-cost EC2 and EBS staging resources.','During failover it launches target EC2 instances and EBS volumes in the production recovery environment, with recovery measured in minutes and replicated changes measured in seconds in the slide. It also supports failback after the original site is ready.'],
      slideTopics:['Former CloudEndure Disaster Recovery','Replication agent','Block-level replication','Low-cost staging area','Failover and failback'],
      takeaways:['DRS protects whole servers.','Staging uses low-cost compute and EBS.','Target production instances launch at recovery time.'],
      examTip:'Continuous block replication of existing servers into AWS with on-demand EC2 recovery points to Elastic Disaster Recovery.'
    },
    'Migrate databases with AWS DMS and schema conversion':{
      sourcePages:'786–792',
      summary:'Keep source databases available while DMS performs full load and CDC, adding schema conversion only for different engines.',
      explanation:['Database Migration Service supports homogeneous and heterogeneous migrations and can continuously replicate changes with change data capture. A DMS replication instance connects the source and target; a Multi-AZ deployment maintains a synchronous standby for the replication service.','For different engines, the slides use AWS Schema Conversion Tool to convert database objects before DMS moves data; same-engine moves do not require schema conversion. The deck also compares snapshot, read-replica, backup-import, and DMS paths for MySQL and PostgreSQL migrations into Aurora.'],
      slideTopics:['DMS sources and targets','Full load and CDC','DMS Multi-AZ','Schema Conversion Tool','MySQL and PostgreSQL to Aurora'],
      takeaways:['DMS moves data while the source can remain online.','SCT is for heterogeneous engine conversion.','Same-engine migrations do not need SCT.'],
      examTip:'For Oracle to Aurora PostgreSQL with minimal downtime, convert the schema and use DMS full load plus CDC.'
    },
    'Rehost servers with Application Migration Service':{
      sourcePages:'793, 799–800',
      summary:'Use Application Migration Service for minimally disruptive lift-and-shift, while recognizing the slide deck’s other VM migration options.',
      explanation:['Application Migration Service is presented as the evolution of CloudEndure Migration and replacement for Server Migration Service. Its agent continuously replicates physical, virtual, or cloud server disks to a low-cost staging area, then launches native EC2 instances for test and cutover.','The slides also identify VM Import/Export and VMware Cloud on AWS for customers retaining VMware tooling. Application Discovery Service and Migration Hub support planning, utilization analysis, and dependency mapping before grouping servers into migration waves.'],
      slideTopics:['Application Migration Service','Lift-and-shift rehosting','Continuous server replication','VM Import/Export','VMware Cloud on AWS'],
      takeaways:['MGN rehosts servers with minimal application change.','Test launches precede the final cutover.','VMware Cloud retains a vSphere operating model.'],
      examTip:'Migrating live servers to run natively on EC2 with minimal downtime is an Application Migration Service scenario.'
    },
    'Centralize protection with AWS Backup':{
      sourcePages:'794–797',
      summary:'Centrally automate backups across supported AWS services with plans, resource assignments, lifecycle, and immutable vault controls.',
      explanation:['AWS Backup manages scheduled and on-demand protection for services shown in the deck, including EC2, EBS, S3, RDS, Aurora, DynamoDB, EFS, FSx, Storage Gateway, DocumentDB, and Neptune. Backup plans specify frequency, backup windows, cold-storage transition, retention, and tag-based resource assignment.','Cross-Region and cross-account backups improve isolation. Backup Vault Lock enforces write-once-read-many retention so protected recovery points cannot be deleted or shortened—even by the root user under the slide’s locked-vault description.'],
      slideTopics:['Supported AWS Backup services','Backup plans','Tag-based assignment','Cross-Region and cross-account copies','Backup Vault Lock WORM'],
      takeaways:['Backup plans replace per-service scripts.','Lifecycle and retention are policy controlled.','Vault Lock protects backups from deletion and shortened retention.'],
      examTip:'Centrally enforce immutable retention across supported services with AWS Backup and Vault Lock.'
    },
    'Discover workloads and move bulk data':{
      sourcePages:'793, 798, 801',
      summary:'Inventory servers and dependencies before migration, then choose network or offline transfer from data size, bandwidth, and deadline.',
      explanation:['The slide-era Application Discovery Service uses agentless discovery for VM inventory and performance history, and agent-based discovery for deeper system, process, and network-connection details. Results appear in Migration Hub to support migration planning. This service name reflects the supplied deck and should be checked against current AWS availability for a live project.','For a 200 TB example, the slides compare roughly 185 days over 100 Mbps internet, 18.5 days of transfer over 1 Gbps Direct Connect after its setup, and about one week end to end with Snowball. Ongoing replication can use Site-to-Site VPN or Direct Connect with DMS or DataSync.'],
      slideTopics:['Application Discovery Service','Agentless versus agent-based discovery','Migration Hub','200 TB transfer comparison','Snowball, Direct Connect, DMS, and DataSync'],
      takeaways:['Dependency mapping helps group migration waves.','Transfer time equals data volume divided by effective bandwidth.','Offline Snowball can beat network transfer for one-time bulk data.'],
      examTip:'If the available link cannot meet a large one-time migration deadline, choose Snowball and synchronize later changes separately.'
    }
  };
  sectionTwentyEightLectures.forEach(lecture=>Object.assign(lecture,sectionTwentyEightSlideOverrides[lecture.title]||{}));

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
  window.AWS_COURSE_CURRICULUM[1].lectures=sectionTwoLectures;
  window.AWS_COURSE_CURRICULUM[2].lectures=sectionThreeLectures;
  window.AWS_COURSE_CURRICULUM[3].lectures=sectionFourLectures;
  window.AWS_COURSE_CURRICULUM[4].lectures=sectionFiveLectures;
  window.AWS_COURSE_CURRICULUM[5].lectures=sectionSixLectures;
  window.AWS_COURSE_CURRICULUM[6].lectures=sectionSevenLectures;
  window.AWS_COURSE_CURRICULUM[7].lectures=sectionEightLectures;
  window.AWS_COURSE_CURRICULUM[8].lectures=sectionNineLectures;
  window.AWS_COURSE_CURRICULUM[9].lectures=sectionTenLectures;
  window.AWS_COURSE_CURRICULUM[10].lectures=sectionElevenLectures;
  window.AWS_COURSE_CURRICULUM[11].lectures=sectionTwelveLectures;
  window.AWS_COURSE_CURRICULUM[12].lectures=sectionThirteenLectures;
  window.AWS_COURSE_CURRICULUM[13].lectures=sectionFourteenLectures;
  window.AWS_COURSE_CURRICULUM[14].lectures=sectionFifteenLectures;
  window.AWS_COURSE_CURRICULUM[15].lectures=sectionSixteenLectures;
  window.AWS_COURSE_CURRICULUM[16].lectures=sectionSeventeenLectures;
  window.AWS_COURSE_CURRICULUM[17].lectures=sectionEighteenLectures;
  window.AWS_COURSE_CURRICULUM[18].lectures=sectionNineteenLectures;
  window.AWS_COURSE_CURRICULUM[19].lectures=sectionTwentyLectures;
  window.AWS_COURSE_CURRICULUM[20].lectures=sectionTwentyOneLectures;
  window.AWS_COURSE_CURRICULUM[21].lectures=sectionTwentyTwoLectures;
  window.AWS_COURSE_CURRICULUM[22].lectures=sectionTwentyThreeLectures;
  window.AWS_COURSE_CURRICULUM[23].lectures=sectionTwentyFourLectures;
  window.AWS_COURSE_CURRICULUM[24].lectures=sectionTwentyFiveLectures;
  window.AWS_COURSE_CURRICULUM[25].lectures=sectionTwentySixLectures;
  window.AWS_COURSE_CURRICULUM[26].lectures=sectionTwentySevenLectures;
  window.AWS_COURSE_CURRICULUM[27].lectures=sectionTwentyEightLectures;
  window.AWS_COURSE_CURRICULUM[28].lectures=sectionTwentyNineLectures;
  window.AWS_COURSE_CURRICULUM[29].lectures=sectionThirtyLectures;
  window.AWS_COURSE_CURRICULUM[30].lectures=sectionThirtyOneLectures;
  window.AWS_COURSE_CURRICULUM[31].lectures=sectionThirtyTwoLectures;
  window.AWS_COURSE_CURRICULUM[32].lectures=sectionThirtyThreeLectures;
})();
