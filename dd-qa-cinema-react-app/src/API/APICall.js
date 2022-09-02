const connect = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const app = connect();

const FilmsAPI = require("./Router/FilmsAPI.js");
const BookingsAPI = require("./Router/BookingsAPI.js");
const ScreeningAPI = require("./Router/ScreeningsAPI.js");
const DiscussionsAPI = require("./Router/DiscussionAPI.js");
app.use("/api", cors() ,bodyParser.json(), FilmsAPI, BookingsAPI, ScreeningAPI, DiscussionsAPI);
const server = app.listen(8081, () =>{
    console.log("Connected");
});
