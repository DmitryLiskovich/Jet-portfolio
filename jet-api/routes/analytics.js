const router = require('express').Router();
const mongoose = require('mongoose');
const Analytic = require('../schemes/Analytics');

mongoose.connect('mongodb+srv://dimalis:164200Dima@cluster0-9vrhz.mongodb.net/jet?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

router.get('/', async (req, res) => {
  const analytic = await mongoose.model('analytics', Analytic);
  const currentValue = await analytic.find({});

  const lastUpdate = new Date(currentValue[0].lastUpdate);
  const currentMonth = new Date();
  if(lastUpdate.getMonth() !== currentMonth.getMonth()) {
    await analytic.updateMany({}, {
      usersPerMonth: 0,
    })
  }
  if(lastUpdate.getDate() !== currentMonth.getDate()) {
    await analytic.updateMany({}, {
      usersPerDay: 0,
    })
  }
  if(lastUpdate.getHours() !== currentMonth.getHours()) {
    await analytic.updateMany({}, {
      usersPerHour: 0,
    })
  }

  await analytic.updateMany({}, {
    allUsers: currentValue[0].allUsers+1,
    usersPerMonth: currentValue[0].usersPerMonth+1,
    usersPerDay: currentValue[0].usersPerDay+1,
    usersPerHour: currentValue[0].usersPerHour+1,
    lastUpdate: Date.now()
  })

  return res.status(200).json({message: 'Ok'});
})

module.exports = router;