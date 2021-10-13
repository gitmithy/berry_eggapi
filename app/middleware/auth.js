/* eslint-disable no-unused-vars */
'use strict';
module.exports = (option, app) => {
  return async (ctx, next) => {
    // 获取 header 头token
    const { token } = ctx.header;
    if (!token) {
      ctx.throw(400, '您没有权限访问该接口!');
    }


    await next();
  };
};
