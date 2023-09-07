// 接口跨域相关的配置信息

module.exports = {
  allowedOrigins: ["http://localhost:8080", "https://brand.yyds.top"],
  allowMethods: ["GET", "POST", "DELETE"],
  exposeHeaders: ["Token", "Server-Authorization"],
  allowHeaders: ["Content-Type", "Authorization", "Accept", "Token", "access-control-allow-origin"],
  credentials: true,
};
