const mongoose = require("mongoose");
const ScreeningSchema = mongoose.Schema;
//const filmSchema = require("./Film-Schema.js");
const screeningSchema = new ScreeningSchema({
    Screening_id: {type: Number, required: true, unique: true},
    Title : {type: String, required: true},
    Runtime : {type: Number, required: true},
    ScreeningType : [{type: String, required: true}],
    ScreeningTime : {type: Date, required: true, default: Date.now},
    AvailableSeats : {type:[String], required: true, default: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]},
    Film : {
        Film_id : {type: String, required: true},
        Title : {type: String, required: true},
        Runtime : {type: Number, required: true},
        Synopsis : {type: String, required: true},
        Classification : {type: String, required: true},
        Genres: {type: [String], required: true, min: 1},
        Poster:{type: String}
    }
});

screeningSchema.index({Title: "text", Genres: "text", Synopsis: "text", Classification: "text", ScreeningType: "text"});

const ScreeningModel = mongoose.model("Screenings", screeningSchema);

module.export = {ScreeningModel: ScreeningModel, ScreeningSchema: screeningSchema};