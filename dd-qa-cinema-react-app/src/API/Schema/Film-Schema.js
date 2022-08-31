const mongoose = require("mongoose");
const FilmSchema = mongoose.Schema;

const filmSchema = new FilmSchema({
    Title : String,
    Runtime : Number,
    Synopsis : String,
    Classification : String
});

const FilmModel = mongoose.model("Films", filmSchema);

module.export = {FilmModel: FilmModel, FilmSchema: FilmSchema};


