'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/login/userLogin', controller.login.userLogin);
};
