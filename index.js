const express = require('express');
const { faker } = require('@faker-js/faker');
const routerApi = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('mi port' + PORT);
});
