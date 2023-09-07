/** 文件功能：识别【业务和平台】模块下的所有路由文件
 * 会递归地加载业务模块和平台模块下所有以 -route.js 结尾的文件，并将它们统一挂载到路由容器中。
 */
const fs = require("fs");
const path = require("path");
const Router = require("koa-router");

// 创建一个路由容器
const router = new Router();

// 递归加载路由文件
const loadRoutes = (directory) => {
  const items = fs.readdirSync(directory);
  items.forEach((item) => {
    const itemPath = path.join(directory, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();

    if (isDirectory) {
      // 如果是文件夹，继续递归加载路由
      loadRoutes(itemPath);
    } else if (item.endsWith("-route.js")) {
      // 如果是以 '-route.js' 结尾的文件，加载路由
      const route = require(itemPath);
      router.use(route.routes());
    }
  });
};

// 递归加载业务模块和平台模块的路由
loadRoutes(path.join(__dirname, "../business-modules"));
loadRoutes(path.join(__dirname, "../platforms"));

module.exports = router;
