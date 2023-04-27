const express = require('express');
const app = express();
// const port = 3001;
const port = 3005;
const cors = require('cors');
const router = require('./routes')
const initMongoose = require('./db-connection');

app.use(cors());
app.use(express.json());

app.use('/api', router);

initMongoose()
  .then(() =>
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  );
