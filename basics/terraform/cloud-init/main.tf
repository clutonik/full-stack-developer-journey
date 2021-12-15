locals {
  private_key_path = "~/.ssh/test-ec2-keypair.pem"
}


terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=3.68.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

variable "instance_type" {
  default = "t2.micro"
  type    = string
}

resource "aws_default_vpc" "default" {
  tags = {
    name = "default-vpc"
  }
}

resource "aws_security_group" "allow_ssh" {
  name        = "allow_ssh"
  description = "allow ssh access"
  vpc_id      = aws_default_vpc.default.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Cloud-init script
data "template_file" "cloud_init" {
  template = file("cloud-init.yml")
}

resource "aws_instance" "test" {
  ami             = "ami-0ed9277fb7eb570c9"
  instance_type   = var.instance_type
  vpc_security_group_ids = [aws_security_group.allow_ssh.id]
  key_name        = "test-ec2-keypair"
  user_data       = data.template_file.cloud_init.rendered
}
