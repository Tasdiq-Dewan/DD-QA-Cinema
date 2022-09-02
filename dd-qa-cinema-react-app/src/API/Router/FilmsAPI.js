const router = require("express").Router();
const {FilmSchema} = require("../Schema/Film-Schema");
const mongoose = require("mongoose");
mongoose.connect(global.dburl).then(res=>{
    console.log("connected FilmAPI");
}).catch(err => {

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

router.get("/getById/:id", (req, res) =>{
    FilmModel.findOne({Film_id: req.params.id}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

router.get("/searchFilm/:title", (req, res) =>{
    FilmModel.findOne({Title: req.params.title}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

router.get("/searchByTerm/:term", (req, res) =>{
    FilmModel.find({$text :{$search: req.params.term}}).select('-_id -__v').then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});


router.post("/addFilm", (req, res) =>{
    FilmModel.create(req.body).then((result) =>{
        res.send(JSON.stringify(result));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

router.delete("/deleteFilm/:id", (req, res) =>{
    FilmModel.deleteOne({Film_id : req.params.id}).then((result) =>{
        res.send(JSON.stringify(result.deletedCount === 0 ? "Error: No Film with that ID exists" : "Film deleted"));
        console.log(JSON.stringify(result));
    }).catch(err =>{
        console.log(err)
    });
});

module.exports = router;

