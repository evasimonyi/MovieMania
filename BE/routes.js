const express = require('express');
const router = express.Router();
const movieModel = require('./movieModels');

router.get('/movies', async (request, response) => {
  const movies = await movieModel.find();
  try {
    response.send(movies);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
