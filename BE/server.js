const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

const mongoose = require('mongoose');
const movieModel = require('./models');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/MovieMania');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

app.get('/api/movies', async (request, response) => {
  const movies = await movieModel.find();

  try {
    response.send(movies);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
