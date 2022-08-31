const router = require("express").Router();
const mongoose = require("mongoose");
import film from "./Film-Schema.js";
let errMessage = new Error("Error, fix the problem and then proceed\n");
//connection to mongodb
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});

module.exports = router;