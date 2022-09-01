const router = require("express").Router();
const {screeningSchema} = require("../Schema/Screening-Schema.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected ScreeningsAPI");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});

const ScreeningModel = mongoose.model("Screenings", screeningSchema);

router.get("/getAllScreenings", (req, res) =>{
    ScreeningModel.find({}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

router.post("/AddScreening", (req, res) =>{
    ScreeningModel.create(req.body).then((result)=>{
        res.send(JSON.stringify(result));
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router;