const mongoose = require("mongoose");
const FilmSchema = mongoose.Schema;

const filmSchema = new FilmSchema({
    Title : String,
    Runtime : Number,
    Synopsis : String,
    Classification : String
});


module.export = filmSchema;


