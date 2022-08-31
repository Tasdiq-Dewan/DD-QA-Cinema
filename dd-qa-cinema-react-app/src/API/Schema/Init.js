const {FilmSchema} = require("./Film-Schema");
const mongoose = require("mongoose");
const { json } = require("express");
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected FilmAPI");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});


const FilmModel = mongoose.model("Films", FilmSchema);

const newFilm = new FilmModel({
    Title: "Batman"
});

newFilm.save().then(() => console.log("Saved film: ", newFilm));

