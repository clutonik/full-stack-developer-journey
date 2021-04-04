# Steps to use python SDK

## Initial Setup

- Use the pip requirements file `python-sdk-requirements.txt` in this directory to install required dependencies:
    - command: `pip install -r python-sdk-requirements.txt`
- Follow [Link](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html) to see aws login options.
- I used aws cli to do the initial configuration. If you don't have aws cli on your machine, you can download it(for your os) from [Link](https://aws.amazon.com/cli)
- After downloading aws cli, use below command to complete the initital setup:
    - command: `aws configure`
- Once you setup your cli using your aws access and secret keys. Test your connection using below command:
    - command: `aws ec2 describe-instances`
        - Response: 
            {
                "Reservations": []
            }

## Important note for boto3 users

- boto3 does not have auto-completion support out of the box so there is an external step which you need to do if you want to use autocompletion.
- If you want to know more about this issue. [Click here](https://github.com/boto/boto3/issues/2036) 
- I found one library which provides auto-completion/type hinting support for boto3. Use this if you want. [Link](https://github.com/vemel/mypy_boto3_builder)

# AWS Developer Associate exam

## Exam domains

- Development with AWS Services - 30% (19.5 questions)
- Security - 26%(16.9 questions)
- Deployment - 22%(14.3 questions)
- Monitoring and troubleshooting - 12% (7.8 questions)
- Refactoring - 10% (6.5 questions)

## Whitepapers

- Architecting for cloud - AWS best practices
- Practicing continous integration and continous delivery on AWS
- Accelerating Software delivery with DevOps
