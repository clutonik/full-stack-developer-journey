## Terraform local-exec provisioner example

This code here represents how we can leverage the local-exec provisioner to run a command on the local machine or a set of instructions using a configuration management tool like Ansible, chef or puppet.

### example-01

- The example code here `main.tf` is a simple example of how to use the local-exec provisioner.
- This example shows how to run a `local-exec` provisioner command to write the public ip of the resource provisioned to a file.
- The `local-exec` provisioner does not execute whenever we run `terraform destroy` i.e. the example here will not remove the entry from `terraform-inventory` file when `terraform destroy` is executed.

### example-02

-
