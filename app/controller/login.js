'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async userLogin() {
    const { ctx } = this;
    ctx.validate({
      account: { type: 'string', required: true, desc: '登录账号' },
      password: { type: 'string', required: true, desc: '密码' },
    });
    if (ctx.paramErrors) {
      // get error infos from `ctx.paramErrors`;
      console.log(ctx.paramErrors);
      ctx.body = {
        message: ctx.paramErrors[0].err[0],
        success: false,
        code: 200,
      };
    } else {
      ctx.body = 'login';
    }

  }
}

module.exports = LoginController;
