const connect = require("express");
const bodyParser = require('body-parser');
const app = connect();

const FilmsAPI = require("./Films.js");
const BookingsAPI = require("./Bookings.js");
const ScreeningAPI = require("./Screenings.js");
app.use("/api", bodyParser.json(), FilmsAPI, BookingsAPI, ScreeningAPI);
const server = app.listen(8081, () =>{
    console.log("Connected");
});