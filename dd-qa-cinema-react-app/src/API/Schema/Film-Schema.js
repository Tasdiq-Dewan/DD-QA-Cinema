const mongoose = require("mongoose");
const FilmSchema = mongoose.Schema;

const filmSchema = new FilmSchema({
    Film_id : {type: String, required: true, unique: true},
    Title : {type: String, required: true},
    Runtime : {type: Number, required: true},
    Synopsis : {type: String, required: true},
    Classification : {type: String, required: true},
    Genres: {type: [String], required: true, min: 1},
    Poster:{type: String}
});

filmSchema.index({Title: "text", Genres: "text", Synopsis: "text", Classification: "text"});

const FilmModel = mongoose.model("Films", filmSchema);

module.export = {FilmModel: FilmModel, FilmSchema: filmSchema};


