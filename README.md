# CRA-QDD
**dependencies**
| 依赖   | 说明 |
| :---------- | :---- |
| `react`| 基础 |
| `react-dom`| 基础 |

---

**devDependencies**

| 依赖   | 说明 |
| :---------- | :---- |
| `@babel/core`| --|
| `@babel/preset-env`|-- |
| `@babel/preset-react`| --|
| `babel-loader`| --|
| `style-loader`| --|
| `css-loader`| --|
| `html-webpack-plugin`| --|
| `webpack`| --|
| `webpack-cli`| --|
| `webpack-dev-server`| --|
| `eslint`| lint代码的主要工具，所以的一切都是基于此包 |
| `eslint-config-airbnb`| 提供了所有的Airbnb的ESLint配置 |
| `eslint-plugin-react`| （airbnb内部）React专用的校验规则插件 |
| `eslint-plugin-import`| （airbnb内部）import/export语法的校验, 并防止文件路径/导入名称错误的情况 |
| `eslint-plugin-jsx-a11y`| （airbnb内部）该依赖包专注于检查JSX元素的可访问性 |
| `eslint-plugin-react-hooks`| （airbnb内部）检验react-hooks的使用方式 |
| `eslint-config-prettier`| 将会禁用掉所有那些非必须或者和prettier冲突的规则 |
| `eslint-plugin-prettier`| 辅助Eslint与Prettier一起协作，并将Prettier的解析作为Eslint的一部分 |
| `husky` | git命令hook专用配置，拦截git指令 |
| `lint-staged` | 定制在特定的git阶段执行特定的命令 |

**eslint**
* `yarn add eslint -g` 全局安装
* `eslint --init` 初始化配置eslint,并生成`.eslintrc.js`
* eslint配置可以在`.eslintrc.js`中，也可以在`package.json`中的

**prettier**
* `eslint-config-prettier`和`eslint-plugin-prettier` 和配合使用使用；
* 记得添加`.prettierrc.js`和`.prettierignore`；
* prettier配置既可以在`.prettierrc.js`,也可以在`.eslintrc.js`；

**husky**
* 






