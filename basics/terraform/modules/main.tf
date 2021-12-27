provider "aws" {
  region = "us-east-1"
}

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
