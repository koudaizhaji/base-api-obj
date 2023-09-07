// 接口请求体解析相关配置
const path = require('path')

module.exports = {
  enableTypes: ["json", "form", "text"],
  extendTypes: {
    text: ["text/xml", "application/xml"],
  },
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, "../../static/uploads"),
    keepExtensions: true,
  },
};
