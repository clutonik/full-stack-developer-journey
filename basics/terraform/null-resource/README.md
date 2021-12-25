# Null Resource

Terraform's null resource is a way to perform an action on a resource which was created by a previous resource i.e. running a local-exec or remote-exec provisioner on a resource after waiting for it to be created.

In the example code in this section, we have created a null resource which is used to run a local-exec provisioner on a resource after it is created.

```
resource "null_resource" "status" {
  depends_on = [aws_instance.test]
  provisioner "local-exec" {
    command = "aws ec2 wait instance-status-ok --instance-ids ${aws_instance.test.id}"
  }
}
```
