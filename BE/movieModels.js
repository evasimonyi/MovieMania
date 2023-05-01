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
  playTime: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    enum: ['disney', 'action', 'romantic comedy', 'horror', 'sci-fi', 'drama', 'documentary'],
    default: [],
  }
});

const Movie = mongoose.model('Movie', MovieSchema, 'movies');

module.exports = Movie;
