'use strict';
module.exports = {
  // 登录接口请求数据
  userLoginRequest: {
    account: { type: 'string', required: true, description: '用户账号' },
    password: { type: 'string', required: true, description: '密码' },
  },
};
