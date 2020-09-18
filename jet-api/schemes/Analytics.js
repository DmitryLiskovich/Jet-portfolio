const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Analytic = new Schema({
  allUsers: Number,
  usersPerMonth: Number,
  usersPerDay: Number,
  usersPerHour: Number,
  lastUpdate: Number,
})

module.exports = Analytic;