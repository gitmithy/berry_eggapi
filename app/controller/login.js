'use strict';

const Controller = require('egg').Controller;
/**
* @controller LoginController
*/
class LoginController extends Controller {
  /**
    * @summary 用户登录
    * @description 用户登录
    * @router post /login/userLogin
    * @request body userLoginRequest
    * @response 200 userLoginResponse 返回结果
    */
  async userLogin() {
    const { ctx } = this;
    ctx.validate({
      account: { type: 'string', required: true, desc: '登录账号' },
      password: { type: 'string', required: true, desc: '密码' },
    });
    if (ctx.paramErrors) {
      ctx.fail(ctx.paramErrors[0].err[0]);
    } else {
      ctx.success('login', '成功');
    }

  }
}

module.exports = LoginController;
