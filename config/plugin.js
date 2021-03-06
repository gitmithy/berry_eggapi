'use strict';

/** @type Egg.EggPlugin */
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};
exports.redis = {
  enable: false,
  package: 'egg-redis',
};
exports.valparams = {
  enable: true,
  package: 'egg-valparams',
};
exports.swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc',
};
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
