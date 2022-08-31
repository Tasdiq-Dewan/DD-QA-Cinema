
const connect = require("express");

const bodyParser = require('body-parser');

const app = connect();

const api = require("./FilmAPI.js");
app.use("/api", bodyParser.json(), api);
const server = app.listen(8008, () =>{
    console.log("Connected");
});
module.exports = server;