// tryCatch包装统一处理

function  tryCatch(funcObj) {
  const name = Object.keys(funcObj)[0];
  const func = funcObj[name];

  return function (...args) {
    try {
      return func(...args);
    } catch (error) {
      const errorStack = error.stack.split('\n')[1].trim(); // 获取出错位置信息
      console.log(`${name} 报错了: ${error.message}，出错位置：${errorStack}`);
    }
  };
  }

module.exports = tryCatch
