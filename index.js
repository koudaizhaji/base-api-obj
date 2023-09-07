// app相关的服务启动
const { APP_PORT } = require("./config/app/app-config.js");

require('@babel/register'); // 保障@的配置生效

const app = require("./app");

const server = app.listen(APP_PORT, () => {
  console.log(`server is running at http://127.0.0.1:${APP_PORT}`);
});

server.setTimeout(30000); // 设置服务器超时时间为30秒
