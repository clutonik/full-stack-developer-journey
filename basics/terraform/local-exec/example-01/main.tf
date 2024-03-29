terraform {
  #   backend "remote" {
  #     hostname     = "app.terraform.io"
  #     organization = "clutonik"
  #     workspaces {
  #       name = "provisioners"
  #     }
  #   }

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

resource "aws_instance" "test-provisioner" {
  ami           = "ami-0ed9277fb7eb570c9"
  instance_type = var.instance_type

  provisioner "local-exec" {
    command = "echo ${self.public_ip} >> terraform-inventory"
  }
}
