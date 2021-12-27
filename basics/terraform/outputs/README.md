# Terraform Outputs

Terraform outputs can be used to process the provisioned resources. e.g. to get the public IP address of the instance and doing something important with it.

## Chaining Outputs

We can chain Terraform outputs from modules i.e. we can use an output from a sub-module.

**Syntax**:

```
output "public_ip" {
  value = module.module_name.output_name
}
```

## Commands

- `terraform output`: to get the outputs of the terraform project
- `terraform output -json`: to get the outputs of the terraform project in json format. This can be used with jq to get the value of the output.
- `terraform output -raw public_ip`: to get the public ip address of the instance in raw format
