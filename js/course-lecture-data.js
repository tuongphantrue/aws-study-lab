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
})();
