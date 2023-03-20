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

app.post('/api/movie', async (request, response) => {
  const movie = new movieModel(request.body);

  try {
    await movie.save();
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/api/movies', async (request, response) => {
  console.log(movieModel);
  const movies = await movieModel.find();
  console.log(movies);
  try {
    response.send(movies);
  } catch (error) {
    response.status(500).send(error);
  }
});

// app.get('/api/movies', function (request, response) {
//   let res = {
//     metadata: {
//       status: 200,
//       message: null,
//     },
//     data: movies,
//   };
//   response
//     .setHeader('content-type', 'application/json')
//     .status(res.metadata.status)
//     .send(res);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
