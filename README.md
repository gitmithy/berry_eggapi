# egg_api 模板

### 开发环境

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 正式环境

```bash
$ npm start
$ npm stop
```

### 插件

**必需安装的插件**
| 插件名 | 描述 |
| ---- | ---- |
| egg-cors | 解决跨域问题 |
| egg-jwt | 生成 token |
| egg-redis | redis 数据缓存 |
| md5 | md5 加密 |

**可卸载插件**
| 插件名 | 描述 |
| ---- | ---- |
| node-ldap | 获取活动目录 ad 域数据 |
| egg-sequelize | 数据模型 |
| mysql2 | mysql 模块 |
| nodemailer | 发邮件 |
| uuid | uuid |

### 使用 egg 的插件

#### egg-cors 的使用

- 配置 config/plugin.js

```js
//plugin.js
exports.cors = {
  enable: true,
  package: 'egg-cors'
};
```

- 配置config/config.default.js
```js
//config.default.js
// 跨域配置
config.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
```

#### egg-jwt 的使用
- 配置 config/plugin.js

```js
exports.jwt = {
  //plugin.js
  enable: true,
  package: 'egg-jwt',
};
```
- 配置config/config.default.js
```js
//config.default.js
// jwt加密配置
config.jwt = {
  secret: '123egg_api456',
};
```

#### egg-redis 的使用


#### egg-sequelize 数据模型

### 项目目录/主要文件描述

| 目录/主要文件  | 描述         |
| -------------- | ------------ |
| app/controller | 控制器       |
| app/service    | 业务层       |
| app/middleware | 中间件       |
| app/model      | 数据模型     |
| app/public     | 存放静态资源 |
| app/router.js  | 存放静态资源 |

### 配置开发环境

在**config**目录中新建三个文件,

- config.local.js(本地开发)
- config.test.js(测试环境)
- config.prod.js(正式环境)

修改**package.json**文件，添加 4 条运行命令

```json
"start-test": "egg-scripts start --env=test --daemon --title=egg-api-test",
"stop-test": "egg-scripts stop --env=prod --title=egg-api-prod",
"start-prod": "egg-scripts start --env=test --daemon --title=egg-api-test",
"stop-prod": "egg-scripts stop --env=prod --title=egg-api-prod",
```
