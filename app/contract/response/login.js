'use strict';
module.exports = {
  // 登录接口响应数据
  userLoginResponse: {
    data: { type: 'loginResponse' },
    message: { type: 'string', description: '响应信息' },
    success: { type: 'boolean', description: '是否请求成功' },
    code: { type: 'number', description: '响应码,200:成功,否则异常', example: 200 },
  },
  loginResponse: {
    token: { type: 'string', description: '用户token' },
  },
};
