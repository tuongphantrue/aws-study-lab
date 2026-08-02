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

  const sectionTwoLectures=[
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

  const sectionThreeLectures=[
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
})();
