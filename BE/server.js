const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const movies = require('./movieList');

app.use(cors());
app.use(express.json());

app.get('/api/movies', function (request, response) {
  response
    .json(movies);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
