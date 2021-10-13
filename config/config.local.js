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
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-api-local',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: true,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
