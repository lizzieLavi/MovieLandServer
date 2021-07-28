const mongoose = require('mongoose');

let MoviesSchema = new mongoose.Schema({

    Name: String,
    Genres: Array,
    Image: String,
    Premiered: Date,
    summary:String,
    Runtime: Number
})

module.exports = mongoose.model('movies',MoviesSchema);
