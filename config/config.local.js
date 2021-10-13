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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.redis = {
    client: {
      port: 15001, // redis端口
      host: '192.168.10.1', // redis ip
      password: '123456', // redis 密码
      db: 0,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
