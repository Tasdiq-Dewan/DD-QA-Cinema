const {FilmSchema} = require("./API/Schema/Film-Schema.js");
const {ScreeningSchema} = require("./API/Schema/Screening-Schema.js");
const {BookingSchema} = require("./API/Schema/Bookings-Schema.js");
const {DiscussionSchema} = require("./API/Schema/Discussions-Schema.js");

const mongoose = require("mongoose");
const { json } = require("express");
const { dblClick } = require("@testing-library/user-event/dist/click.js");

mongoose.connect("mongodb://localhost:27017/qa-cinema-test").then(res=>{
    console.log("connected to test db");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});

async function clearCollections(){

    await FilmModel.deleteMany({});
    await ScreeningModel.deleteMany({});
    await BookingModel.deleteMany({});
    await DiscussionModel.deleteMany({});
}
//clearCollections();

const FilmModel = mongoose.model("Films", FilmSchema);

const newFilm1 = new FilmModel({
    Film_id: "1",
    Title: "The Batman",
    Runtime: 200,
    Synopsis: "Batman film init",
    Classification: "15",
    Genres: ["Superhero", "Comic Book", "Crime"],
    Poster: "https://cdn.europosters.eu/image/750webp/122127.webp"
});

const newFilm2 = new FilmModel({
    Film_id: "2",
    Title: "Nope",
    Runtime: 135,
    Synopsis: "Alien in the clouds, init",
    Classification: "15",
    Genres: ["Horror", "Sci-Fi"],
    Poster: "https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg"
});

const newFilm3 = new FilmModel({
    Film_id: "3",
    Title: "Dragon Ball Super: Broly",
    Runtime: 100,
    Synopsis: "Super Saiyans fighting, init",
    Classification: "PG",
    Genres: ["Anime", "Shonen", "Action"],
    Poster: "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
});

const newFilm4 = new FilmModel({
    Film_id: "4",
    Title: "I Am Legend",
    Runtime: 101,
    Synopsis: "Dog dies, init",
    Classification: "15",
    Genres: ["Post-apocalypse", "Action", "Thriller"],
    Poster: "https://images-na.ssl-images-amazon.com/images/I/A19WwNrox0L._RI_.jpg"
});

const newFilm5 = new FilmModel({
    Film_id: "5",
    Title: "The Dark Knight",
    Runtime: 152,
    Synopsis: "Why so serious Batman, init",
    Classification: "12",
    Genres: ["Superhero", "Action", "Comic Book", "Crime", "Clown"],
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
});

async function saveFilms(){
    newFilm1.isNew = true;
    newFilm2.isNew = true;
    newFilm3.isNew = true;
    newFilm4.isNew = true;
    newFilm5.isNew = true;
    await newFilm1.save();
    await newFilm2.save();
    await newFilm3.save();
    await newFilm4.save();
    await newFilm5.save();
    console.log("All films saved", newFilm1, newFilm2, newFilm3, newFilm4, newFilm5);
}

//saveFilms();

const ScreeningModel = mongoose.model("Screenings", ScreeningSchema);

const newScreening1 = new ScreeningModel({
    Screening_id: 1,
    Title : "Dragon Ball Super: Broly",
    Runtime : 100,
    ScreeningType : ["2D", "Subtitle", "Audio Described"],
    ScreeningTime : "2022-09-02T12:00:00Z",
    Film : {
        Film_id: '3',
        Title: 'Dragon Ball Super: Broly',
        Runtime: 100,
        Synopsis: 'Super Saiyans fighting, init',
        Classification: 'PG',
        Genres: [ 'Anime', 'Shonen', 'Action' ],
        Poster: "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      }
});

const newScreening2 = new ScreeningModel({
    Screening_id: 2,
    Title : "Dragon Ball Super: Broly",
    Runtime : 100,
    ScreeningType : ["2D", "Subtitle", "Audio Described"],
    ScreeningTime : "2022-09-02T15:30:00Z",
    Film : {
        Film_id: '3',
        Title: 'Dragon Ball Super: Broly',
        Runtime: 100,
        Synopsis: 'Super Saiyans fighting, init',
        Classification: 'PG',
        Genres: [ 'Anime', 'Shonen', 'Action' ],
        Poster: "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      }
});

const newScreening3 = new ScreeningModel({
    Screening_id: 3,
    Title : "The Batman",
    Runtime : 200,
    ScreeningType : ["2D", "Audio Described"],
    ScreeningTime : "2022-09-02T19:00:00Z",
    Film : {
        Film_id: '1',
        Title: "The Batman",
        Runtime: 200,
        Synopsis: "Batman film init",
        Classification: "15",
        Genres: ["Superhero", "Comic Book", "Crime"],
        Poster: "https://cdn.europosters.eu/image/750webp/122127.webp"
      }
});

const newScreening4 = new ScreeningModel({
    Screening_id: 4,
    Title : "The Batman",
    Runtime : 200,
    ScreeningType : ["2D", "Audio Described"],
    ScreeningTime : "2022-09-02T23:00:00Z",
    AvailableSeats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    Film : {
        Film_id: '1',
        Title: "The Batman",
        Runtime: 200,
        Synopsis: "Batman film init",
        Classification: "15",
        Genres: ["Superhero", "Comic Book", "Crime"],
        Poster: "https://cdn.europosters.eu/image/750webp/122127.webp"
      }
});

async function saveScreenings(){
    newScreening1.isNew = true;
    newScreening2.isNew = true;
    newScreening3.isNew = true;
    newScreening4.isNew = true;
    await newScreening1.save();
    await newScreening2.save();
    await newScreening3.save();
    await newScreening4.save();
    console.log("All screenings saved", newScreening1, newScreening2, newScreening3, newScreening4);
}

//saveScreenings();

const BookingModel = mongoose.model("Bookings", BookingSchema);

const newBooking = new BookingModel({
    CustomerRef: "90AB223",
    CustomerName: "Andrew McCall",
    Seats: ["15", "16"],
    AdultPrice: 7,
    ChildPrice: 5,
    AdultQuantity: 1,
    ChildQuantity: 1,
    AmountPaid: 12,
    TransactionRef: 1239875987,
    Screening: {
        Screening_id: 4,
        Title : "The Batman",
        Runtime : 200,
        ScreeningType : ["2D", "Audio Described"],
        ScreeningTime : "2022-09-02T23:00:00Z",
    }
});

async function saveBookings(){
    newBooking.isNew = true;
    await newBooking.save();
    console.log("All bookings saved", newBooking);
}

//saveBookings();

const DiscussionModel = mongoose.model("Discussions", DiscussionSchema);

const newPost1 = new DiscussionModel(
{
    Post_id:1,
    Username:"Dzza",
    PostTitle:"I am Legend Review",
    PostMessage:"Dog dies, init"
});


const newPost2 = new DiscussionModel(
    {
        Post_id:2,
        Username:"TheVikingCoder",
        PostTitle:"I am fake",
        PostMessage:"Daniyal is real, I am fake, I am sorry for being fake, thank you babes"
    });

async function saveDiscussions(){
    newPost1.isNew = true;
    newPost2.isNew = true;
    
    await newPost1.save();
    await newPost2.save();
    console.log("All discussions saved", newPost1, newPost2);
}

//saveDiscussions();

const createData = async () => {
    //await clearCollections();
    await saveBookings();
    await saveScreenings();
    
    await saveDiscussions();
    await saveFilms();
}

//createData();

module.exports = {createData, clearCollections};