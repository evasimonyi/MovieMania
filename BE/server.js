const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const movies = require('./movieList');

app.use(cors());
app.use(express.json());

app.get('/api/movies', function (request, response) {
  let res = {
    metadata: {
      status: 200,
      message: null,
    },
    data: movies,
  };
  response
    .setHeader('content-type', 'application/json')
    .status(res.metadata.status)
    .send(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
