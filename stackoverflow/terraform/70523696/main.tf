terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

variable "master_user_password" {
  type = string
}

# Elasticsearch domain
resource "aws_elasticsearch_domain" "es_example" {
  domain_name           = "example-domain"
  elasticsearch_version = "OpenSearch_1.0"

  cluster_config {
    instance_type = "t3.small.elasticsearch"
  }

  ebs_options {
    ebs_enabled = true
    volume_size = 10
    volume_type = "gp2"
  }

  encrypt_at_rest {
    enabled = true
  }

  node_to_node_encryption {
    enabled = true
  }

  # This is required for using advanced security options
  domain_endpoint_options {
    enforce_https       = true
    tls_security_policy = "Policy-Min-TLS-1-2-2019-07"
  }

  # Authentication
  advanced_security_options {
    enabled                        = true
    internal_user_database_enabled = true
    master_user_options {
      master_user_name     = "es-admin"
      master_user_password = var.master_user_password
      # You can also use IAM role/user ARN
      # master_user_arn = var.es_master_user_arn
    }
  }

  tags = {
    Domain = "es_example"
  }
}

resource "aws_elasticsearch_domain_policy" "main" {
  domain_name     = aws_elasticsearch_domain.es_example.domain_name
  access_policies = <<POLICIES
  {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "es:*",
      "Resource": "${aws_elasticsearch_domain.es_example.arn}/*"
    }
  ]
}
POLICIES
}
