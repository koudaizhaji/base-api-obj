// public/index.js

const Router = require("koa-router");

class RouterPublic {
  constructor(prefix = "") {
    this.router = new Router(prefix == "" ? {} : { prefix });
    this.routes = [];
  }

  addRouter(path, method, controller, middlewares = []) {
    this.routes.push({
      path,
      method,
      controller,
      middlewares,
    });
  }

  register() {
    for (const route of this.routes) {
      const args = [route.path, ...route.middlewares, route.controller];
      this.router[route.method](...args);
    }
    return this.router; // 返回路由实例
  }
}

module.exports = RouterPublic;
