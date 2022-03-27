const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { config } = require('../src/config/config.json');

const app = express();

const pool = mysql.createPool({
  connectionLimit: config.CONNECTION_LIMIT,
  host: config.HOST, // ip address of server running mysql
  user: config.USER, // user name to your mysql database
  password: config.PASSWORD, // corresponding password
  port: config.PORT, // db port
  database: config.DATABASE, // use the specified database
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('OK');
});
