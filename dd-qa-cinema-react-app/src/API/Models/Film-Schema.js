const mongoose = require("mongoose");
const FilmSchema = mongoose.Schema;

const filmSchema = new FilmSchema({
    Title : String,
    Runtime : Number,
    Synopsis : String,
    Classification : String
});

const filmModel = mongoose.model("Films", filmSchema);

module.exports = filmModel;


