const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./mongo/models/user.model.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/unskippables');

app.get('/', (req, res) => {
  res.send('OK');
});

app.post('/api/signup', async (req, res) => {
  console.log(req.body);

  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error', error: 'something went wrong signing up' });
  }
});

app.get('/api/signin', async (req, res) => {
  console.log(req.body);

  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res.json({ status: 'ok', user: true });
    }
    return res.json({ status: 'error', user: false });
  } catch (err) {
    res.json({ status: 'error', error: 'something went wrong signing up' });
  }
  res.json({ status: 'ok' });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
