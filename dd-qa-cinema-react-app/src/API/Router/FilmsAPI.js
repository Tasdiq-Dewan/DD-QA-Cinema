const router = require("express").Router();
const {FilmSchema} = require("../Schema/Film-Schema");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected FilmAPI");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});


const FilmModel = mongoose.model("Films", FilmSchema);

router.get("/getAllFilms", (req, res) =>{
    FilmModel.find({}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});


router.post("/AddFilm", (req, res) =>{
    FilmModel.create(req.body).then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

module.exports = router;

