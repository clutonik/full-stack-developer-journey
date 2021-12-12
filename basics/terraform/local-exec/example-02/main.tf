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

resource "aws_instance" "test" {
  ami             = "ami-0ed9277fb7eb570c9"
  instance_type   = var.instance_type
  security_groups = [aws_security_group.allow_ssh.name]
  key_name        = "test-ec2-keypair"


  provisioner "remote-exec" {
    inline = [
      "echo 'Waiting for SSH to be available...'",
    ]
    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file(local.private_key_path)
      host        = aws_instance.test.public_ip
    }

  }
  provisioner "local-exec" {
    command = "ansible-playbook -i ${self.public_ip}, httpd.yml --private-key ~/.ssh/test-ec2-keypair.pem -u ec2-user"
  }

}
