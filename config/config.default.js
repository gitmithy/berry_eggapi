/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634002823691_309';

  // add your middleware config here
  config.middleware = [ 'errorHandler', 'auth' ];
  /**
        注意：
        1. match 和 ignore 不允许同时配置
        2. 例如：match:'/news'，只要包含/news的任何页面都生效
        **/

  // match 和 ignore 支持多种类型的配置方式：字符串、正则、函数（推荐）
  config.errorHandler = {
    enable: true, // 控制中间件是否开启。
    // match: '/news', // 设置只有符合某些规则的请求才会经过这个中间件（匹配路由）
    // ignore: '/shop', // 设置符合某些规则的请求不经过这个中间件。
  };
  config.auth = {
    enable: true,
    match: [
      '/home',
    ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // 开启post请求
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [],
  };
  // jwt加密配置
  config.jwt = {
    secret: '123egg_api456',
  };
  // 参数校验
  exports.valparams = {
    locale: 'zh-cn',
    throwError: false,
  };
  // 数据加密的密钥
  config.crypto = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672',
  };
  // egg-swagger-doc 配置信息。
  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径。
    // 接口文档的标题，描述或其它。
    apiInfo: {
      title: 'EGG-API', // 接口文档的标题。
      description: 'swagger-ui for EGG document.', // 接口文档描述。
      version: '1.0.0', // 接口文档版本。
    },
    schemes: [ 'http', 'https' ], // 配置支持的协议。
    consumes: [ 'application/json' ], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
    produces: [ 'application/json' ], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
    securityDefinitions: { // 配置接口安全授权方式。
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false, // 是否启用授权，默认 false（不启用）。
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
    routerMap: true, // 是否启用自动生成路由，默认 true (启用)。
    enable: true, // 默认 true (启用)。
  };
  return {
    ...config,
    ...userConfig,
  };
};
