terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "clutonik"
    workspaces {
      name = "development"
    }
  }
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


resource "aws_instance" "my_test_instance" {
  ami           = "ami-0ed9277fb7eb570c9"
  instance_type = var.instance_type
  tags = {
    Name = "tf-test-instance"
  }
}
