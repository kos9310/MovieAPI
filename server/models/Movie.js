const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = mongoose.Schema({
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }

}, { timestamps: true})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie }
