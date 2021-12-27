variable "instance_type" {
  default = "t2.micro"
  type    = string
}

variable "key_pair_name" {
  type = string
}


variable "ami_id" {
  type = string
}


variable "ingress_rules" {
  type = list(object({
    description  = string
    from_port    = number
    to_port      = number
    protocol     = string
    cidr_ip      = list(string)
    ipv6_cidr_ip = list(string)
  }))
  default = [{
    description  = "Allow SSH access to all EC2 instances"
    from_port    = 22
    to_port      = 22
    protocol     = "tcp"
    cidr_ip      = ["0.0.0.0/0"]
    ipv6_cidr_ip = ["::/0"]
  }]
}
