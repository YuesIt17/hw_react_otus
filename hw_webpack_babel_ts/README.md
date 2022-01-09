# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

1. Init project -> 
    - npm init
    - echo > .gitignore
2. Install webpack -> 
    - npm install webpack webpack-cli webpack-dev-server --save-dev
    -  echo {}> tsconfig.json
3. Install babel -> 
    - npm install --save-dev @babel/core @babel/cli @babel/preset-env 
    - npm install --save-dev @babel/preset-typescript
    - npm install --save-dev babel-loader
4. Install jest -> npm install --save-dev jest
5. Install ts -> 
    - npm install --save-dev typescript
    - echo {}> tsconfig.json
6. Install eslint -> 
    - npm install eslint --save-dev
    - npm install --save-dev eslint-plugin-prettier
    - npm install --save-dev --save-exact prettier
        - echo {}> .prettierrc.json - if there is a problem with encoding https://github.com/prettier/prettier/issues/8815
        - echo > .prettierignore
    - npm install --save-dev eslint-config-prettier
    https://github.com/prettier/prettier/issues/8815