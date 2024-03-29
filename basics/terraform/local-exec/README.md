## Terraform local-exec provisioner example

This code here represents how we can leverage the local-exec provisioner to run a command on the local machine or a set of instructions using a configuration management tool like Ansible, chef or puppet.

These examples use aws_provider to provision infrastructure in AWS.

### Default VPC

My examples use `aws_default_vpc` resource type which allows us to use default VPC created by AWS in our code. This resource does not manage the default VPC and only allow us to refer it. [Read More](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_vpc)

### example-01

- The example code here `main.tf` is a simple example of how to use the local-exec provisioner.
- This example shows how to run a `local-exec` provisioner command to write the public ip of the resource provisioned to a file.
- The `local-exec` provisioner does not execute whenever we run `terraform destroy` i.e. the example here will not remove the entry from `terraform-inventory` file when `terraform destroy` is executed.

### example-02

- example-02 provisions a new EC2 instance and installs HTTPD on it using ansible.

### Key points

- local-exec allows you to specify:
  - environment variables
  - interpreter
  - command
  - working directory

## References

- [local-exec](https://www.terraform.io/docs/language/resources/provisioners/local-exec.html)
