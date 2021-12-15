## remote-exec

Terraform's remote-exec allows you to execute commands on remote hosts once they are provisioned.

- Requires an ssh or winrm connection.
- It supports 3 arguments:

  - `inline`: List of commands executed in order.
  - `script`: Path to a script file.
  - `scripts`: List of paths to script files which will be copied to remote host and executed.

- We can not specify any arguments to `remote-exec`. If you want to specify arguments, you will have to use `file` provisioner to copy the script to remote host first.

  ```
    resource "aws_instance" "web" {
    # ...

    provisioner "file" {
        source      = "script.sh"
        destination = "/tmp/script.sh"
    }

    provisioner "remote-exec" {
        inline = [
        "chmod +x /tmp/script.sh",
        "/tmp/script.sh args",
        ]
    }
    }
  ```
