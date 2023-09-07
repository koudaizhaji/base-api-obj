// koa相关的业务结构
const Koa = require("koa");

const bodyParser = require("koa-bodyparser"); //解析请求体的中间件,要支持微信的xml格式，需要安装koa-bodyparser
const cors = require("@koa/cors"); // 解决跨域的中间件


// 引入配置文件
const corsConfig = require("../config/app/cors-config");
const bodyParserConfig = require("../config/app/body-parser-config");
// 读取router目录下的index将暴露的对象赋值给indexrouter
const indexrouter = require("./routes");

const app = new Koa();

// 解决跨域和域名限制的问题
app.use(cors(corsConfig));


// 接收前台传递过来的参数，挂载到ctx.request.body上
app.use(bodyParser(bodyParserConfig));



app.use(indexrouter.routes())
  .use(indexrouter.allowedMethods())

// 这里进行统一的错误处理
// 通过app.on监听error事件，如果有错误，就返回错误信息
// 错误的内容显示也可能比较长，可以单独封装显示错误的显示信息，方便管理
// app.on("error", errHandler);

module.exports = app;
