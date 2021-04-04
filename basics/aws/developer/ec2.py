import boto3

# Test s3 client
ec2 = boto3.resource('ec2')


# Create key-pair
def create_key_pair():
    outfile = open('ec2-keypair.pem', 'w')
    key_pair = ec2.create_key_pair(KeyName='ec2-keypair')
    KeyPairOut = str(key_pair.key_material)
    print(KeyPairOut)
    outfile.write(KeyPairOut)


def create_instances():
    # Create an EC2 instance using wordpress AMI
    instances = ec2.create_instances(
        ImageId='ami-0533f2ba8a1995cf9',
        MinCount=1,
        MaxCount=1,
        InstanceType='t2.micro',
        KeyName='ec2-keypair'
    )
    return instances


print('Creating key-pair')
create_key_pair()

created_instances = create_instances()
# Print created instances
for instance in created_instances:
    print(instance)
