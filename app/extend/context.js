'use strict';
const crypto = require('crypto');
// 扩展context方法
module.exports = {
  // 定义统一的返回格式，成功
  success(data = '', message = '', code = 200) {
    this.body = { data, message, success: true, code };
    this.code = code;
  },
  // 定义统一的返回格式，失败
  fail(message = '', code = 400) {
    this.body = { message, success: false, code };
    this.code = code;
  },
  // 加密
  async createPassword(password, app) {
    const hmac = crypto.createHash('sha256', app.config.crypto.secret);
    hmac.update(password);
    return hmac.digest('hex');
  },
  // 验证密码
  async checkPassword(password, hash_password, app) {
    // 先对需要验证的密码进行加密
    password = await this.createPassword(password, app);
    return password === hash_password;
  },
};
