# Terraform modules

Modules help to encapsulate the complex configuration needed to provision a resource i.e. provisioning an EC2 instance will need security groups, key pairs, ingress, egress rules, etc. But all of this can be passed as variables to a module and users will not have to create resources over and over again.

## Local Modules

- When you use local modules, you can use the `module` block to import the code from a submodule. E.g.

```hcl
module "terraform-module-httpd" {
  source        = "./terraform-module-httpd"
  instance_type = "t2.micro"
  key_pair_name = "test-ec2-keypair"
  ami_id        = "ami-0ed9277fb7eb570c9"
  ingress_rules = [
    {
      description  = "Allow SSH access to the instance",
      protocol     = "tcp",
      from_port    = 22,
      to_port      = 22,
      cidr_ip      = ["0.0.0.0/0"],
      ipv6_cidr_ip = ["::/0"]
    },
    {
      description  = "Allow HTTP access to the instance",
      protocol     = "tcp",
      from_port    = 80,
      to_port      = 80,
      cidr_ip      = ["0.0.0.0/0"],
      ipv6_cidr_ip = ["::/0"]
    }
  ]
}
```

- The `source` attribute specifies the path to the module.
- The variables needed by the module have to be passed from the `module` block i.e. not through a `.tfvars` file.
