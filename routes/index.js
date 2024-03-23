const { Router } = require('express');
const productsRouter = require('./productsRouter');

const routerApi = (app) => {
  const v1 = Router();
  app.use('/api/v1', v1);
  v1.use('/products', productsRouter);
};

module.exports = routerApi;
