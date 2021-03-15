# Topics to study in detail

## EC2

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

### EC2

- Create an EC2 instance using aws console and add an EBS volume to it. Create FS on this EBS volume and take a snapshot of this volume from AWS console. Now create another EC2 instance and add an EBS volume using the first volume's snapshot.
- Create an EC2 instance using AWS CLI.
- Create an EC2 instance using AWS SDK.
- Create an EC2 instance and use EFS storage option in it. 

## EFS

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
