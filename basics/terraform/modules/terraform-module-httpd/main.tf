resource "aws_default_vpc" "default" {
  tags = {
    name = "default-vpc"
  }
}

resource "aws_security_group" "allow_ssh" {
  name        = "allow_ssh"
  description = "allow ssh access"
  vpc_id      = aws_default_vpc.default.id

  dynamic "ingress" {
    for_each = var.ingress_rules
    content {
      description      = ingress.value.description
      from_port        = ingress.value.from_port
      to_port          = ingress.value.to_port
      protocol         = ingress.value.protocol
      cidr_blocks      = ingress.value.cidr_ip
      ipv6_cidr_blocks = ingress.value.ipv6_cidr_ip
      security_groups  = []
      prefix_list_ids  = []
      self             = false
    }
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
  template = file("${abspath(path.module)}/cloud-init.yml")
}

resource "aws_instance" "httpd" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  vpc_security_group_ids = [aws_security_group.allow_ssh.id]
  key_name               = var.key_pair_name
  user_data              = data.template_file.cloud_init.rendered
  # key_name               = "test-ec2-keypair"
  # ami                    = "ami-0ed9277fb7eb570c9"
}
