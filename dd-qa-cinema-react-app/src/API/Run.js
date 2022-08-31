const connect = require("express");

const bodyParser = require('body-parser');

const app = connect();

const FilmAPI = require("./FilmAPI.js");
const screeningAPI = require("./ScreeningAPI.js");
app.use("/api", bodyParser.json(), screeningAPI, FilmAPI);
const server = app.listen(8008, () =>{
    console.log("Connected");
});
module.exports = server;