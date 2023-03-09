module.exports = {
  // root: true, // 当前配置为根配置，将不再从上级文件夹查找配置
  env: {
    browser: true, // 浏览器环境
    es2021: true, // 设置所需检查代码为 es6 语法书写
  },
  // 指定语言版本为和模块类型
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // extends 指定扩展的配置, 支持规则的覆盖和聚合
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // 如果同时使用了eslint和prettier发生冲突了，会关闭掉与prettier有冲突的规则，也就是使用prettier认为对的规则
  ],
  // 配置那些我们想要Linting规则的插件
  plugins: [
    "react",
    "prettier", // eslint 会使用pretter的规则对代码格式化
  ],
  // 自定义规则，可以覆盖掉extends的配置
  rules: {
    // lint
    "linebreak-style": 0,
    // react
    "react/react-in-jsx-scope": 0, // 验证 react来源
    "react/prop-types": 0, // react默认的props-type验证
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // 可免去后缀
    // import
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": [2, { ignore: ["@"] }], // 设置路径别名
    // prettier
    "prettier/prettier": [
      2,
      {
        printWidth: 100, // 指定代码长度，超出换行
        tabWidth: 2, // 缩进空格数
        useTabs: false, // 使用空格代替tab缩进
        semi: true, // 语句末尾是否带分号
        singleQuote: false, // 是否单引号
        quoteProps: "as-needed", // 要求对象字面量属性是否使用引号包裹
        jsxSingleQuote: false, // jsx中使用单引号
        trailingComma: "es5", // 多行时尽可能打印尾随逗号 none则没有
        bracketSpacing: true, // 在对象前后添加空格
        jsxBracketSameLine: false, // 多属性jsx中把'>' 放同一行
        endOfLine: "auto", // 结束行形式 结尾是 \n \r \n\r auto
        arrowParens: "always", // (x) => {} 箭头函数参数只有一个时是否要有小括号
        parser: "babel", // 格式化的解析器，默认是babylon
        requirePragma: false, // 仅格式化带有 @format 、 @prettier 头的文件
        insertPragma: false, // 在已被preitter格式化的文件顶部加上标注@format
        proseWrap: "preserve", // 超宽换行
        htmlWhitespaceSensitivity: "ignore", // strict是所有的空格换行情况都保留，ignore的话就是所有元素间的
        embeddedLanguageFormatting: "auto", // 对引用代码进行格式化
        singleAttributePerLine: false, // 每行强制使用单个属性
      },
    ], // 这项配置 对于不符合prettier规范的写法，eslint会提示报错
  },
};
