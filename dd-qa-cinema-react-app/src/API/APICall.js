const connect = require("express");
const bodyParser = require('body-parser');
const app = connect();
// const http = require("http");
// const app = http.createServer(function(req, res){res.setHeader("Content-Type", "application-json")});
global.dburl = "mongodb://localhost:27017/qa-cinema"
const FilmsAPI = require("./Router/FilmsAPI.js");
const BookingsAPI = require("./Router/BookingsAPI.js");
const ScreeningAPI = require("./Router/ScreeningsAPI.js");
const DiscussionsAPI = require("./Router/DiscussionAPI.js");
app.use("/api", bodyParser.json(), FilmsAPI, BookingsAPI, ScreeningAPI, DiscussionsAPI);
const server = app.listen(8081, () =>{
    console.log("Connected");
});

module.exports = server;