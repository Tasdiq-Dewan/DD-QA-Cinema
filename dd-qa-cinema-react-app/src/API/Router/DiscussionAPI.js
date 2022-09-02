const router = require("express").Router();
const {DiscussionSchema} = require("../Schema/Discussions-Schema.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected DiscussionsAPI");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});

const discussionModel = mongoose.model("Discussions", DiscussionSchema);

router.post("/addDiscussionPost", (req, res) =>{
    discussionModel.create(req.body).then(result =>{
        res.send(JSON.stringify(result));
    }).catch(err =>{
        console.log(err);
    })
});

router.get("/getAllPosts", (req, res) =>{
    discussionModel.find({}).select('-_id -__v').then(result =>{
        res.send(JSON.stringify(result));
    }).catch(err =>{
        console.log(err);
    })
});

router.delete("/deletePost/:id", (req, res) => {
    discussionModel.findOneAndDelete({Post_id:req.params.id}).then(result =>{
        res.send(JSON.stringify(result));
    }).catch(err =>{
        console.log(err);
    })
})
module.exports = router;