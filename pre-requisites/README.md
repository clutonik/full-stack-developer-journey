# Setting up spacemacs for javascript

This file covers steps/commands required to setup spacemacs for javascript development. You can also read this on https://clutonik.medium.com/setting-up-spacemacs-for-javascript-development-ce9c91b37eba

## Installing required packages (macOS)

Use below commands in sequence to install required packages:

- brew install npm
  
  This command will install npm on your mac which is required to install third party packages required to setup spacemacs for javascript
  
- npm install -g eslint
- npm install -g prettier
- npm install -g import-js
- npm i -g typescript typescript-language-server


### Modify spacemacs config file to enable javascript

Add javascript Layer:

     ```(javascript :variables
                 javascript-import-tool 'import-js
                 javascript-backend 'lsp
                 javascript-fmt-tool 'prettier
                 javascript-fmt-on-save t
                 )```
