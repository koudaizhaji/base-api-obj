# 基于koa+sequelize的api脚手架

## 项目简介
- 为可快速搭建规范且稳定的nodejs项目api

## 技术
- koa：nodejs框架
  - koa：框架
  - koa-router：koa路由
  - koa-bodyparser：解析请求体的中间件,要支持微信的xml格式，需要安装koa-bodyparser
  - @koa/cors：解决跨域的中间件
- sequelize：基于 promise 的 Node.js ORM的数据库管理-mysql
- dotenv：读取配置文件的npm包，根目录创建.env文件，读取.env配置
- log4js：用于Node.js的日志记录模块。它可以帮助开发人员在应用程序中添加日志记录功能，以便更好地跟踪和调试代码。
- babel插件-开发用，代码编译
  - @babel/core
  - @babel/node
  - babel-plugin-module-resolver
  - nodemon
  - @babel/preset-env
- 


## 功能特点
- 清晰的文档结构
- 明确的职责和开发区域划分
- 规范的代码编写和命名
- 方便移植，可高效拓展


## 文档结构说明
> - 根目录
>   - package.json
>
>   - babel.config.js
>
>   - .env.js
>
>   - .editorconfig
>
>   - .gitignore
>
>   - index.js
>
>  > babel.config.js** 用于配置 Babel 的文件，它用于指定 Babel 的转译规则和插件。可配置一些 Babel 的选项，比如预设配置、插件配置、源码转译目标版本等
>     > **.env.js** 主要目的在于读取env配置文件并将env的配置信息给到全局变量process.env
>     > **.editorconfig** 一种用于定义编码样式的文件格式和一组文本编辑器插件组成，这些文本编辑器插件使编辑器可以读取文件格式并遵循定义的样式.【主要解决多个程序员不同编辑器的习惯】
>     > **.gitignore** git提交到仓库忽略的文件，一行一个匹配规则
>  >
>     > **index.js** 项目入口文件
>
> - 同级其他目录
>
>   - /config 项目逻辑的配置
>   - /plugins 项目的全局插件
>     - p-tryCatch.js - 封装tryCatch方法，用于对函数请求添加try...catch,方便定位管理代码
>   - /tools 项目逻辑的处理工具
>     - err-handler-对项目返回的错误信息统一处理
>     - logs - 项目的请求，响应等日志控制文件
>     - net-handler - 网络相关的一些操作封装
>
> - src 开发目录
>   - /app 项目的koa入口
>   - /logs 业务日志
>   - /utils 业务的具体处理工具封装
>   - /common 业务的公共封装
>   - /router 路由接口封装
>   - /middleware 请求操作前的中间件
>   - /controller 请求对应的操作封装
>   - /service  数据库交互相关的封装
>   - /model 数据库内的表定义的封装


## 细节规范

