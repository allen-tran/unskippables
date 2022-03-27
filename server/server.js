const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const mysql = require('mysql');
// const { config } = require('../src/config/config.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('OK');
});
