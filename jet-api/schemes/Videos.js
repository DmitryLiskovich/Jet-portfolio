const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Videos = new Schema({
  link: String,
  title: String,
  img: String
})

module.exports = Videos;