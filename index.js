const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nuevaruta', (req, res) => {
  res.json({
    name: 'arroz',
    price: 100,
  });
});

app.listen(PORT, () => {
  console.log('mi port' + PORT);
});
