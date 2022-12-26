# CRA-QDD

**dependencies**
| 依赖 | 说明 |
| :---------- | :---- |
| `react`| react 框架安装 |
| `react-dom`| react-dom 安装 |

**devDependencies**

| 依赖| 说明|
| :-------------------------- | :----------------------------- |
| `@babel/core`| Babel 的核心模块，将其他 Babel 的核心代码封装到一块，用于和其他插件进行集成开发|
| `@babel/preset-env` | 负责将 ES6 版本的代码转换为向后兼容的 JavaScript 语法 |
| `@babel/preset-react` | 负责转换 React 的 JSX 代码，以及支持 React 的 API 的命名 |
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
| `file-loader` | 对项目中使用到的图片文件进行处理，将处理后的文件保存到 输出文件夹 |
| `less`        | -- |
| `less-loader`        | 编译 Less 为 CSS |
| `style-loader`        | 从 JS 中创建样式节点 将css打包到style标签中 |
| `css-loader`          | 转化 CSS 为 CommonJS | 
| `webpack`             | 打包工具 webpack |
| `webpack-cli`         | webpack cli 工具 |
| `webpack-dev-server`  | 开启服务 |
| `html-webpack-plugin` | 自动生成打包后的 html 文件 |
| `webpack-merge`          | 在一个公用配置文件的基础下，添加额外配置 | 
| `clean-webpack-plugin` | 启动服务时会清空build文件夹 |
| `mini-css-extract-plugin` | css提取成一个独立的文件 当使用style-loader会把cs |
| `cross-env` | 可以兼容多个系统设置环境变量 |

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

**css**
- `style-loader` 、`css-loader` 二者是配合使用把css打包在js中
- `mini-css-extract-plugin`插件可以把css打包成独立的文件夹 ；与`style-loader`是存在冲突 二选一
- `less`、`less-loader` 配合可以使用less预编译器

**image**
-  `file-loader` 对项目中的图片进行处理编译
-  `url-loader` 可对图片进行优化（暂未添加）
