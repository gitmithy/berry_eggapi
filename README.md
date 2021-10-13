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
| egg-valparams | 参数校验 |
| crypto | 数据加密 |

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
// 开启post请求（关闭csrf规范）
config.security = {
  csrf: {
    enable: false,
  },
  // domainWhiteList: [ 'http://localhost:3000' ],
};
```


#### egg-jwt 的使用
- 配置 config/plugin.js

```js
 //plugin.js
exports.jwt = {
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

- 分别配置config/config.local.js config.prod.js config.test.js
因为上线后每台服务器的配置后有所区别
```js
config.redis = {
  client: {
    port: 15001, // redis端口
    host: '192.168.10.1', // redis ip
    password: '123456', // redis 密码
    db: 0,
  },
};
```
#### egg-redis 的使用
- 配置 config/plugin.js

```js
exports.redis = {
  enable: false,
  package: 'egg-redis',
};
```
- 配置config/config.default.js
```js
config.validate = {
  convert: true, // 对参数可以使用convertType规则进行类型转换
  // validateRoot: false,   // 限制被验证值必须是一个对象。
};
```
#### egg-valparams 参数校验

- 配置 config/plugin.js

```js
exports.valparams = {
  enable : true,
  package: 'egg-valparams'
};
```

- 配置config/config.default.js

```js
// 参数校验
exports.valparams = {
  locale: 'zh-cn',
  throwError: false,
};
```
#### egg-sequelize 数据模型


### egg-swagger-doc
文档的使用参考以下链接：
- https://www.npmjs.com/package/egg-swagger-doc
- https://www.jianshu.com/p/a47a12f030cb

- 配置 config/plugin.js

```js
exports.swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc',
};
```
- 配置config/config.default.js

```js
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
```
- 在app目录下新建文件夹contract
在里面书写对应接口的请求和响应的body
```js
//书写格式
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
```
在控制器中的写法
```js
/**
* @controller LoginController 必须写，区分是哪个类
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
```

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
