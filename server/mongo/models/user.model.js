const mongoose = require('mongoose');
const { config } = require('../../../src/Config/config.json');

const User = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { collection: config.USER_SCHEMA });

const model = mongoose.model('UserData', User);

module.exports = model;
