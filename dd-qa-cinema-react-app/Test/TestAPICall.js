const connect = require("express");
const bodyParser = require('body-parser');
const app = connect();
const { default: mongoose } = require("mongoose");

global.dburl = "mongodb://localhost:27017/qa-cinema-test";
const FilmsAPI = require("../src/API/Router/FilmsAPI.js");
const BookingsAPI = require("../src/API/Router/BookingsAPI.js");
const ScreeningAPI = require("../src/API/Router/ScreeningsAPI.js");
const DiscussionsAPI = require("../src/API/Router/DiscussionAPI.js");
app.use("/api", bodyParser.json(), FilmsAPI, BookingsAPI, ScreeningAPI, DiscussionsAPI);
const server = app.listen(8090, () =>{
    console.log("Connected");
});

module.exports = server;