const router = require("express").Router();
const mongoose = require("mongoose");
const BookingsSchema = require ('./Schema/Bookings-Schema.js');
let errMessage = new Error("Error, fix the problem and then proceed\n");
//connection to mongodb
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected BookingsAPI");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});


module.exports = router;