const mongoose = require("mongoose");
const ScreeningSchema = mongoose.Schema;
const filmSchema = require("./Film-Schema.js");
const screening = new ScreeningSchema({
    Title : String,
    Runtime : Number,
    ScreeningType : String,
    ScreeningTime : Date,
    NumberOfSeats : {type:Number, default: 30},
    Film : filmSchema
});

module.export = screening;