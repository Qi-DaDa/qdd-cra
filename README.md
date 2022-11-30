# CRA-QDD

**dependencies**
| 依赖 | 说明 |
| :---------- | :---- |
| `react`| react 框架安装 |
| `react-dom`| react-dom 安装 |

**devDependencies**

| 依赖| 说明|
| :-------------------------- | :----------------------------- |
| `@babel/core`         | 用于解析最新 ES 标准|
| `@babel/preset-env`   | 根据预设的环境自动选用合适 babel 插件 |
| `@babel/preset-react` | preset-react|
| `eslint`              | lint 代码的主要工具，所以的一切都是基于此包 |
| `eslint-config-airbnb`| 提供了所有的 Airbnb 的 ESLint 配置 |
| `eslint-plugin-react` | （airbnb 内部）React 专用的校验规则插件 |
| `eslint-plugin-import`| （airbnb 内部）import/export 语法的校验, 并防止文件路径/导入名称错误的情况 |
| `eslint-plugin-jsx-a11y`    | （airbnb 内部）该依赖包专注于检查 JSX 元素的可访问性 |
| `eslint-plugin-react-hooks` | （airbnb 内部）检验 react-hooks 的使用方式 |
| `eslint-config-prettier`    | 将会禁用掉所有那些非必须或者和 prettier 冲突的规则 |
| `eslint-plugin-prettier`    | 辅助 Eslint 与 Prettier 一起协作，并将 Prettier 的解析作为 Eslint 的一部分 |
| `husky`                     | git 命令 hook 专用配置，拦截 git 指令 |
| `lint-staged`               | 定制在特定的 git 阶段执行特定的命令 |
| `babel-loader`        | webpack 中需要用到的 loader |
| `style-loader`        | -- |
| `css-loader`          | --| 
| `webpack`             | 打包工具 webpack |
| `webpack-cli`         | webpack cli 工具-- |
| `webpack-dev-server`  | -- |
| `html-webpack-plugin` | 自动生成打包后的 html 文件-- |
| `webpack-merge`          | webpack-merge | 




---

**eslint**

- `yarn add eslint -g` 全局安装
- `eslint --init` 初始化配置 eslint,并生成`.eslintrc.js`
- eslint 配置可以在`.eslintrc.js`中，也可以在`package.json`中的
- 在 `yarn lint` 即可使用 eslint 对代码语法检测，`--fix` 即可修复；

**prettier**

- `eslint-config-prettier`和`eslint-plugin-prettier` 和配合使用使用；
- 记得添加`.prettierrc.js`和`.prettierignore`；
- prettier 配置既可以在`.prettierrc.js`,也可以在`.eslintrc.js`；
- 这样 elint 和 prettier 和相互配合，执行`yarn fix` 对代码语法及样式检测并修复

**husky**

- `git init` 目录中创建新的 Git 仓库
- `npx husky install`会创建 .husky 文件
- `npx husky add .husky/pre-commit "npx lint-staged"` 在.husky 文件创建 pre-commit 并指定执行 lint-staged
- `package.json`中新增`lint-staged:{"*.{js,jsx}": ["yarn fix"]}`进行配置
- 即可完成当执行`git commit`时就行`yarn fix`进行代码校验及修复

**VScode**

- 安装`ESLint`扩展，即可对配置异常的代码进行提示；
- 配置`settings.json `中`"editor.codeActionsOnSave": {"source.fixAll.eslint": true}` 则会根据规则自动修复
