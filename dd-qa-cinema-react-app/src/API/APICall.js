const connect = require("express");
const bodyParser = require('body-parser');
const app = connect();

const FilmsAPI = require("./Router/FilmsAPI.js");
const BookingsAPI = require("./Router/BookingsAPI.js");
const ScreeningAPI = require("./Router/ScreeningsAPI.js");
app.use("/api", bodyParser.json(), FilmsAPI, BookingsAPI, ScreeningAPI);
const server = app.listen(8081, () =>{
    console.log("Connected");
});