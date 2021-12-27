# Terraform Meta arguments

Terraform language meta arguments can be used with a resource to change its behavior. There are few meta arguments available to use with resources.

- [**depends_on**](#depends-on): To declare a resource dependency on another resource. It helps in ordering the resources in the Terraform plan.
- [**count**](#count): To declare a resource count. We can provision multiple resources using the same configuration.
- [**provider**](#provider): To declare a non-default resource provider.
- [**lifecycle**](#lifecycle): To declare a resource lifecycle.
- [**for_each**](#for_each): To declare a resource for each item in a list/map.
- **provisioner**: To declare a resource provisioner.

### Depends on

It adds dependency on another resource i.e. it will not create or destroy the resource if the resource it depends on is not created or destroyed.

**Example:**

```
resource "aws_instance" "db" {
    ami = "ami-12345678"
    instance_type = "t2.micro"
    tags = {
        Name = "db"
    }
}

resource "aws_instance" "web" {
  depends_on = [aws_instance.db]
    ami = "ami-12345678"
    instance_type = "t2.micro"
}
```

### Count

It can be used to create multiple resources with the same configuration.

**Example:**

```
resource "aws_instance" "web" {
  count = 3
  ami = "ami-12345678"
  instance_type = "t2.micro"
  tags = {
    Name = "Server ${count.index}"
  }
}

Numeric expression:

resource "aws_instance" "server" {
    count = length(var.servers)
    ami = "ami-12345678"
    instance_type = "t2.micro"
    tags = {
        Name = "Server ${count.index}"
    }
}
```

### for_each

It allows you to iterate over a list or map and create multiple resources with the same configuration.

**Example:**

```
resource "aws_instance" "web" {
    for_each = {
        nano = "t2.small"
        micro = "t2.micro"
        small = "t2.small"
    }
    ami = "ami-12345678"
    instance_type = each.value
    tags = {
        Name = "Server-${each.key}"
    }
}
```

### lifecycle

Supported lifecycle settings are:

- **ignore_changes**: To ignore changes in a resource if a change occurs for the listed attributes.
- **prevent_destroy**: To prevent a resource from being destroyed.
- **create_before_destroy**: To create a resource before destroying it. The default behavior is to destroy the resource first.

**Example:**

```
resource "aws_instance" "web"{
    ami = "ami-12345678"
    instance_type = "t2.micro"
    lifecycle {
        create_before_destroy = true
    }
}
```

### Provider

If you need to override the default provider for a resource, you can use the provider keyword.

**Example:**

```
provider "aws" {
    region = "us-east-1"
}

# Provider with Alias
provider "aws" {
    alias = "west1"
    region = "us-west-1"
}

resource "aws_instance" "web" {
    ami = "ami-12345678"
    instance_type = "t2.micro"
    provider = aws.west-1
}
```
