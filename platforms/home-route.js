const RouterPublic = require("../common/route-public");

const userRouter = new RouterPublic();


userRouter.addRouter("/","get",(ctx) => {
    // console.log("走到这了");
    ctx.body = "欢迎使用【口袋炸鸡】接口管理服务平台！";
  },
  []
);
// 指定路径获取图片

module.exports = userRouter.register();
