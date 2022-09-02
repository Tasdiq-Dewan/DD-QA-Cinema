const router = require("express").Router();
const {BookingSchema} = require("../Schema/Bookings-Schema.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected BookingsAPI");
}).catch(err => {
    console.log(err);
});

const BookingModel = mongoose.model("Bookings", BookingSchema);

router.get("/getAllBookings", (req, res) =>{
    BookingModel.find({}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});


router.get("/getBookingByRef/:ref", (req, res) =>{
    BookingModel.findOne({CustomerRef: req.params.ref}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

router.post("/addBooking", (req, res) => {
    BookingModel.create(req.body).then((result)=>{
        res.send(JSON.stringify(result));
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
})

router.delete("/deleteBooking/:ref", (req, res) => {
    BookingModel.findOneAndDelete({CustomerRef: req.params.ref}).then((result)=>{
        res.send(JSON.stringify(result));
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router;
