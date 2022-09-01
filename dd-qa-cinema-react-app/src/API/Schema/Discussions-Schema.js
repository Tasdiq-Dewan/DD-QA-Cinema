const mongoose = require("mongoose");
const DiscussionSchema = mongoose.Schema;
//const ScreeningsSchema = require("./Screening-Schema.js");

//Bookings Schema, defining a schema, later used as a model
const discussionSchema = new DiscussionSchema({
    Post_id:{type:Number, required:true, unique:true},
    Username:{type:String, default:"Anonymous"},
    PostTitle:{type:String, required:true, max:30},
    PostMessage:{type:String, required:true, max:200}
});

discussionSchema.index({PostTitle: "text", PostMessage: "text"});

const discussionModel = mongoose.model("Discussions", discussionSchema);

module.export = {DiscussionModel: discussionModel, DiscussionSchema: discussionSchema};