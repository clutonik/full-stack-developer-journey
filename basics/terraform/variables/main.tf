terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.68.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

variable "vpc_name" {
  default = "tf-test-vpc"
  type    = string
}

variable "ssh_port" {
  default = 22
  type    = number
}

variable "enabled" {
  default = true
  type    = bool
}

variable "list_type" {
  type    = list(string)
  default = ["public", "private"]
}

variable "map_type" {
  type = map(any)
  default = {
    "key1" = "value1",
    "key2" = "value2",
    "key3" = 3,
    4      = "value4"
  }
}

# variable "input_type" {
#   type        = string
#   description = "Specify the input type"
# }

resource "aws_vpc" "foo" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = var.vpc_name
    List = var.list_type[0]
    Map  = var.map_type["key3"]
    Map2 = var.map_type[4]
  }
}

variable "instance_type" {
  type    = string
}

resource "aws_instance" "test_instance_using_vars" {
  ami = "ami-c5eabb87"
  instance_type = var.instance_type
}

output "vpc_id" {
  value = aws_vpc.foo.id
}
