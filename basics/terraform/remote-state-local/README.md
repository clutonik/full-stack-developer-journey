# Terraform Remote state

Terraform remote state allows us to use a different state file as a data source. This is useful when we want to use a different state file for different working domains e.g. network, storage, compute etc.

## Example

**State-1(network)**:

```hcl
resource "aws_vpc" "vpc" {
  cidr_block = ""
  ....
  ....
}
```

**State-2(compute)**:

```hcl
data "terraform_remote_state" "network" {
    backend = "local"
    config  = {
        path = "./state-1"
    }
}

resource "aws_instance" "instance" {
    ami = "ami-12345678"
    instance_type = "t2.micro"
    aws_vpc_id = data.terraform_remote_state.network.vpc.id
    tags = {
        Name = "Server-${count.index}"
    }
}
```

**Note**: This allows multiple teams to manage different aspects of the code i.e. network team can maintain a different state file and app teams can maintain their own state by reusing network created by network team.
