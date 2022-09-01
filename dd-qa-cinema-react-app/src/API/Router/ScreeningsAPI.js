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

router.get("/getAllScreeningsById/:id", (req, res) =>{
    ScreeningModel.findOne({Screening_id : req.params.id}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

router.post("/addScreening", (req, res) =>{
    ScreeningModel.create(req.body).then((result)=>{
        res.send(JSON.stringify(result));
    }).catch(err=>{
        console.log(err);
    })
})

router.put("/updateScreening/:id", (req, res) =>{
    ScreeningModel.findOneAndUpdate(
        { Screening_id : req.params.id }, {NumberOfSeats: req.body.NumberOfSeats})
        .then(result =>{
            res.send(JSON.stringify(result));
        })
})

module.exports = router;