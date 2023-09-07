// 共享axios请求的session的插件封装

const axios = require('axios');
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

class SharedAxios {
  constructor() {
    this.axiosInstance = axios.create();
    axiosCookieJarSupport(this.axiosInstance);
    this.cookieJar = new tough.CookieJar();
    this.axiosInstance.defaults.jar = this.cookieJar;
  }

  async get(url, config = {}) {
    try {
      const response = await this.axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(url, data = {}, config = {}) {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 可以添加更多请求方法，如put、delete等

  // 清除cookie方法
  clearCookies() {
    this.cookieJar.removeAllCookiesSync();
  }
}

module.exports = SharedAxios;
