const router = require('express').Router();
const mongoose = require('mongoose');
const Category = require('../schemes/Category');

mongoose.connect('mongodb+srv://dimalis:164200Dima@cluster0-9vrhz.mongodb.net/jet?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

router.get('/', async (req, res) => {
  const videos = await mongoose.model('category', Category);
  const data = await videos.find({})

  return res.status(200).json({
    message: 'ok',
    data
  })
})

router.get('/:id', async (req, res) => {
  const videos = mongoose.model('category', Category);
  const data = await videos.findById(req.params.id);

  return res.status(200).json({
    message: 'ok',
    data
  })
})

router.delete('/:id', async (req, res) => {
  const videos = mongoose.model('category', Category);
  const data = await videos.deleteOne({_id: req.params.id});

  return res.status(200).json({
    message: 'ok',
    data
  })
})

router.patch('/:id', async (req, res) => {
  const videos = await mongoose.model('category', Category);
  const data = await videos.updateOne({_id: req.params.id}, req.body);
  console.log(data);

  return res.status(200).json({
    message: 'ok',
    data
  })
})

router.post('/', async (req, res) => {
  const videos = mongoose.model('category', Category);
  const data = await videos.create(req.body);

  return res.status(200).json({
    message: 'ok',
    data
  })
})

module.exports = router;