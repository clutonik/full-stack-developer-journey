# Topics to study in detail

## EC2

<details>
    <summary>Click to expand!</summary>
        - IAM Roles for Amazon EC2 instances. [Read More](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)
        - Difference between dedicated instances and dedicated hosts.
        - EC2 Saving Plans.
        - EC2 Instance Types.
        - EC2 Bare Metal Instances.
        - EC2 Burstable performance instances. (T2/T3), T2 Unlimited mode.
        - Graviton Instance Types. (Arm cores)
        - EC2 Fleet
        - Using AMIs to create EC2 instances.
        - EBS volumes. (Stop-Hibernate)
        - EC2 Placement groups (EC2 cluster networking) 
        - Single root I/O virtualization.
        - EBS Storage options. 
        - EBS snapshots and EBS encryption.
        - Elastic Network Interfaces
    </details>

## VPC

- Use of Internet gateway to expose an app running inside VPC.
- Use of virtual private gateway and customer gateway.
- Use of AWS Direct Connect.
- Use of routes defined in route table from subnet to Internet gateway.
- Use of security groups at instance level (stateful connections - Allows return traffic) 
- Use of Network Access control lists at subnet level (stateless connections - Need a specific rule for return traffic)
- Use of flow logs.
- Range of IP addresses (class A - 10.0.0.0/8, B - 172.16.0.0/12 and C - 192.168.0.0/16)
- Expand VPC by adding secondary IPv4 CIDR blocks.
- Security groups only has allow rules.
- It is important to consider rule numbers in NACLs as rule with lower number will override the rule with higher number and will be applied while filtering traffic.

## EFS

- Not available in all regions and a bit hard to configure.
- Create and manage mount targets. [Read More](https://docs.aws.amazon.com/efs/latest/ug/accessing-fs.html)
- EFS security - IAM permissions, EC2 security groups, NACLs, Linux FS permissions. (Read all these)
- VPC you use to create EFS must have subnets in each availability zone you want this EFS to be available.
- New VPC experience portal gives an option to select FS IAM policies during the EFS creation. [Read More](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html)

## S3

- Securing S3 buckets.
- S3 storage classes.
- S3 Intelligent tiering.
- Improving S3 performance using different key prefixes.
- S3 Glacier.
- S3 Lifecycle Management
- S3 Versioning
- S3 Cross Region Replication

## AWS RDS

- RDS Multi AZ.
- RDS Read Replicas.
- AWS Aurora clusters. (Upto 15 Replicas)
- AWS Aurora Serverless.
- AWS DynamoDB parition and sort keys.
- DynamoDB Provisioned Capacity.
- DynamoDB on-demand capacity.
- Amazon Neptune. (Graph Database)
- Amazon ElasticCache.
- Amazon DocumentDB. (Point in time recovery)
- Amazon timestream - Optional
- Difference between OLAP and OLTP.
- Tables and indexes in DynamoDB.
- Provisioned Throughout for DynamoDB. (Read Capacity Units and Write capacity units) [Read More](https://aws.amazon.com/dynamodb/pricing/provisioned)
- Get & update vs Atomic Counters in DynamoDB.
- Study use cases of DynamoDB and Aurora services to get more insights into when to use what.
- Conditional updates in DynamoDB.
- Add TTL to items in a table in dynamoDB.
- DynamoDB streams.
- DynamoDB Triggers.
- DynamoDB Accelerator (DAX)

## AWS Elastic Beanstalk

- Create worker environment.
- Create web environment.
- Deployment methodologies (in-place, blue-green)
- EB config files (.ebextensions, .config, Dockerrun.aws.json)
- Environment manifest file (env.yml)
- EB - Linux Server configuration (Packages, Groups, Users, Files, Commands, Services, Container Commands)
- EB CLI.
- EB Custom AMI image.

## ECS

- AWS Elastic Container Registry (ECR)
- ECS Task Definition.
- ECS Cluster and AWS Elastic Beanstalk [Read More](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html)


## Security(IAM)

- Resource based vs IAM based policies. [Read More](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html)
- SAML and Identity broker applications. [Read More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html)
- IAM best practices. [Read More](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) 
- AWS KMS. 

## AWS Support

- Upgrade AWS Support plan to use Trusted Advisor for recommendations.

# Hands-on tasks

### Setting up python SDK

- Install boto3 using pip.
    - command: `pip install boto3`

### EC2

- Create an EC2 instance using aws console and add an EBS volume to it. Create FS on this EBS volume and take a snapshot of this volume from AWS console. Now create another EC2 instance and add an EBS volume using the first volume's snapshot.
- Create an EC2 instance using AWS CLI.
- Create an EC2 instance using AWS SDK.
- Create an EC2 instance and use EFS storage option in it. 

### S3
- Create an S3 bucket and setup ACL for it.
- Create an S3 bucket and add bucket policies.
- Create an S3 bucket using AWS CLI or SDK.

### EFS

- Create a mount target in an availability zone in same subnet as EC2 instance and mount it in that EC2 instance.
- Create a mount target in an availability zone in different subnet than EC2 instance and mount it in EC2 instance.
- Mount a 'mount target' in an EC2 instance using EFS DNS name.
- Mount a 'mount target' in an EC2 instance using mount target's DNS name.
- Secure EFS using IAM, Security Groups and NACLS.

### ECS

- Create an ECS task definition using AWS SDK. (Try out different network modes.)
- Create an ECS task definition targeting EC2 instances.
- Create an ECS task definition targeting AWS Farget(serverless)
- Create an ECS cluster through EC2 or Fargate. (Try both)
- Schedule an ECS task in AWS ECS.
- Create an ECS cluster using AWS beanstalk service. 

### RDS

- Create an AWS Aurora RDS environment with multiple read replicas.
- Write Load balancing logic in software to route DB requests to a different RDS instance with every new request.
- Use HAProxy or Route 53 to load balancing for DB instances.
- Migrate an oracle database to AWS Aurora using AWS Migration service.
- Create a DynamoDB Table from UI and CLI/SDK.
- Insert data to DynamoDB Table using SDK.
- Query data from DynamoDB using JSON Query and SDK.
- Use DAX caching service with DynamoDB in your app.
