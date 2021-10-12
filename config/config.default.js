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
  config.middleware = [];

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
    // domainWhiteList: [ 'http://localhost:3000' ],
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
  return {
    ...config,
    ...userConfig,
  };
};
