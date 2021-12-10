terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws",
      version = "3.58.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "test_vpc" {
  cidr_block = "10.0.0.0/16"
}
