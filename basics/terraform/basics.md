# VS Code Plugins

- Terraform autocomplete
- Hashicorp Terraform

# Terraform

- Command to run initialize project: `terraform init`
- Command to check what changes terraform will make: `terraform plan`
  - This will show you what changes will be made to your infrastructure
  - This will create a state file which terraform uses to keep track of your infrastructure
  - We can use -out to save the plan to a file
- Command to apply changes: `terraform apply`
  - If you want to execute a saved plan, use terraform apply "plan.tfplan"
- Command to refresh your state file: `terraform refresh`
  - This will refresh your state file with the latest changes
  - It does not remove anything but adds additional information from infrastructure
- Command to print outputs of your infrastructure: `terraform output`
- Command to destroy your infrastructure: `terraform destroy`

## Terraform state file

- The state file is a json file that contains all of the information about your infrastructure
- this file is named as terraform.tfstate
- The state file is saved in the root of your project
