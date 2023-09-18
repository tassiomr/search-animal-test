const express = require('express');
const path = require('path');

const app = express();

const root = path.resolve(__dirname, '../build');
app.use(express.static(root));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = app;
