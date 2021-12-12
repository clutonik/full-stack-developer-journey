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

## Terraform Cloud Workspaces

- Terraform cloud allows you to manage your work in a workspace.
- This workspace can be configured to run terraform apply in terraform cloud infrastructure or terraform apply in a local environment.
- When you select a workspace to use local environment, your variable references will be resolved locally.
- But if you select a workspace to run terraform apply in terraform cloud, your variable references will be resolved in the workspace.
- So, if you want to use terraform infrastructure to run your code, you need to create variables in the workspace.
- when you are using terraform infrastructure, you also need to provide your AWS ACCESS KEY and SECRET KEY as environment variables.

  - ![workspace variables](images/workspace-variables.png)

## Projects to do

- Install ECE using Terraform and ansible in AWS
