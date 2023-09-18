const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use((req, res) => {
  res.redirect('/');
});

app.use('/', (req, res) => {
  return express.static(path.resolve(__dirname, './build'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conected at PORT ' + port);
  }
});
