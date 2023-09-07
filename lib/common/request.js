// 处理各网络请求的模块

const SharedAxios = require('./SharedAxios'); // 你的SharedAxios类文件路径

const sharedAxios = new SharedAxios();

// 发起GET请求
sharedAxios.get('https://example.com/api/data')
  .then((data) => {
    console.log('GET response:', data);
  })
  .catch((error) => {
    console.error('GET error:', error);
  });

// 发起POST请求
const postData = { key: 'value' };
sharedAxios.post('https://example.com/api/post', postData)
  .then((data) => {
    console.log('POST response:', data);
  })
  .catch((error) => {
    console.error('POST error:', error);
  });
