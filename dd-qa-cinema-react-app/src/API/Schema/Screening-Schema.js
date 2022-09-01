const mongoose = require("mongoose");
const ScreeningSchema = mongoose.Schema;
//const filmSchema = require("./Film-Schema.js");
const screeningSchema = new ScreeningSchema({
    Screening_id: {type: Number, required: true, unique: true},
    Title : {type: String, required: true},
    Runtime : {type: Number, required: true},
    ScreeningType : [{type: String, required: true}],
    ScreeningTime : {type: Date, required: true, default: Date.now},
    NumberOfSeats : {type:Number, required: true, default: 30},
    Film : {
        Film_id : {type: String, required: true, unique: true},
        Title : {type: String, required: true},
        Runtime : {type: Number, required: true},
        Synopsis : {type: String, required: true},
        Classification : {type: String, required: true},
        Genres: [{type: String, required: true, min: 1}]
    }
});

const ScreeningModel = mongoose.model("Screenings", screeningSchema);

module.export = {ScreeningModel: ScreeningModel, ScreeningSchema: screeningSchema};