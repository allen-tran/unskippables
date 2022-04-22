const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./mongo/models/user.model.js');
const Card = require('./mongo/models/card.model.js');
const { config } = require('../src/Config/config.json');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(config.DB);

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

app.post('/api/signin', async (req, res) => {
  console.log(req.body);
  console.log('LET ME IN BEN REED');
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(user, 'hello');
    if (user) {
      const token = jwt.sign({ username: user.username }, 'superdupersecretness');
      return res.json({ status: 'ok', user: token });
    }
    return res.json({ status: 'error', user: false });
  } catch (err) {
    res.json({ status: 'error', error: 'something went wrong signing up' });
  }
  res.json({ status: 'ok' });
});

app.post('/api/createCard', async (req, res) => {
  console.log(req.body);

  try {
    await Card.create({
      songName: req.body.songName,
      artist: req.body.artist,
      description: req.body.description,
      imageURL: req.body.imageURL,
    });
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 400 });
  }
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
