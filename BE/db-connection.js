const mongoose = require('mongoose');

const initMongoose = async () => {
  await mongoose.connect('mongodb://localhost:27017/MovieMania');

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function () {
    console.log('Connected successfully');
  });
}

module.exports = initMongoose;
