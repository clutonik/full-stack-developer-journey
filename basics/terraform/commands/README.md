# Terraform Commands

#### Basics

- Command to initialize project: `terraform init`

- Command to check what changes terraform will make: `terraform plan`
  - This will show you what changes will be made to your infrastructure
  - This will create a state file which terraform uses to keep track of your infrastructure
  - We can use -out to save the plan to a file
  - `terraform plan -out=plan.tfplan`
- If you have stored variables in a `.tfvars` file, you can load variables from that file using the command below:
  - `terraform plan -var-file=dev.tfvars`
  - If you have a file with name `dev.auto.tfvars`, then terraform will autoload that file for you and you do not have to specify the file using the command line flag mentioned above.
- Command to apply changes: `terraform apply`
  - If you want to execute a saved plan, use terraform apply "plan.tfplan"
- Command to refresh your state file: `terraform refresh`
  - This will refresh your state file with the latest changes from your infrastructure.
  - It does not remove anything but adds additional information from infrastructure
  - This is an alias for command: `terraform apply -refresh-only -auto-approve`
- Command to print outputs of your infrastructure: `terraform output`
- Command to destroy your infrastructure: `terraform destroy`
- Command to list all providers and modules used by a terraform project: `terraform providers`
- Terraform state commands:
  - `terraform state list` - list all resources in your state file
  - `terraform state show <resource-name>` - show the attributes of a resource in your state file
  - `terraform state mv <resource-name> <new-resource-name>` - rename a resource in your state file
