const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    default: [],
  }
});

const Movie = mongoose.model('Movie', MovieSchema, 'disney_movies');

module.exports = Movie;
