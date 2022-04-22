const mongoose = require('mongoose');
const { config } = require('../../../src/Config/config.json');

const Card = new mongoose.Schema({
  songName: { type: String, required: true },
  artist: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true },
}, { collection: config.CARD_SCHEMA });

const model = mongoose.model('CardData', Card);

module.exports = model;
