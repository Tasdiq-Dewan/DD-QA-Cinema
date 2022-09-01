const {FilmSchema} = require("./Film-Schema");
const {ScreeningSchema} = require("./Screening-Schema");
const {BookingSchema} = require("./Bookings-Schema");
const {DiscussionSchema} = require("./Discussions-Schema.js");

const mongoose = require("mongoose");
const { json } = require("express");
mongoose.connect("mongodb://localhost:27017/mongo").then(res=>{
    console.log("connected FilmAPI");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});


const FilmModel = mongoose.model("Films", FilmSchema);

const newFilm1 = new FilmModel({
    Film_id: 1,
    Title: "The Batman",
    Runtime: 200,
    Synopsis: "Batman film init",
    Classification: "15",
    Genres: ["Superhero", "Comic Book", "Crime"]
});

newFilm1.save().then(() => console.log("Saved film: ", newFilm1));

const newFilm2 = new FilmModel({
    Film_id: 2,
    Title: "Nope",
    Runtime: 135,
    Synopsis: "Alien in the clouds, init",
    Classification: "15",
    Genres: ["Horror", "Sci-Fi"]
});

newFilm2.save().then(() => console.log("Saved film: ", newFilm2));

const newFilm3 = new FilmModel({
    Film_id: 3,
    Title: "Dragon Ball Super: Broly",
    Runtime: 100,
    Synopsis: "Super Saiyans fighting, init",
    Classification: "PG",
    Genres: ["Anime", "Shonen", "Action"]
});

newFilm3.save().then(() => console.log("Saved film: ", newFilm3));

const newFilm4 = new FilmModel({
    Film_id: 4,
    Title: "I Am Legend",
    Runtime: 101,
    Synopsis: "Dog dies, init",
    Classification: "15",
    Genres: ["Post-apocalypse", "Action", "Thriller"]
});

newFilm4.save().then(() => console.log("Saved film: ", newFilm4));

const newFilm5 = new FilmModel({
    Film_id: 5,
    Title: "The Dark Knight",
    Runtime: 152,
    Synopsis: "Why so serious Batman, init",
    Classification: "12",
    Genres: ["Superhero", "Action", "Comic Book", "Crime", "Clown"]
});

newFilm5.save().then(() => console.log("Saved film: ", newFilm5));

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
        Genres: [ 'Anime', 'Shonen', 'Action' ]
      }
});

newScreening1.save().then(() => console.log("Saved screening: ", newScreening1));

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
        Genres: [ 'Anime', 'Shonen', 'Action' ]
      }
});

newScreening2.save().then(() => console.log("Saved screening: ", newScreening2));

const newScreening3 = new ScreeningModel({
    Screening_id: 3,
    Title : "The Batman",
    Runtime : 200,
    ScreeningType : ["2D", "Audio Described"],
    ScreeningTime : "2022-09-02T19:00:00Z",
    Film : {
        Film_id: 1,
        Title: "The Batman",
        Runtime: 200,
        Synopsis: "Batman film init",
        Classification: "15",
        Genres: ["Superhero", "Comic Book", "Crime"]
      }
});

newScreening3.save().then(() => console.log("Saved screening: ", newScreening3));

const newScreening4 = new ScreeningModel({
    Screening_id: 4,
    Title : "The Batman",
    Runtime : 200,
    ScreeningType : ["2D", "Audio Described"],
    ScreeningTime : "2022-09-02T23:00:00Z",
    AvailableSeats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    Film : {
        Film_id: 1,
        Title: "The Batman",
        Runtime: 200,
        Synopsis: "Batman film init",
        Classification: "15",
        Genres: ["Superhero", "Comic Book", "Crime"]
      }
});

newScreening4.save().then(() => console.log("Saved screening: ", newScreening4));

const BookingModel = mongoose.model("Bookings", BookingSchema);

const newBooking = new BookingModel({
    CustomerRef: "90AB223",
    Seats: ["15", "16"],
    Tickets : {
        AdultPrice: 7,
        ChildPrice: 5,
        AdultQuantity: 1,
        ChildQuantity: 1
    },
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

newBooking.save().then(() => console.log("Saved booking: ", newBooking));



const discussionModel = mongoose.model("Discussions", DiscussionSchema);



const newPost1 = new discussionModel(
{
    Post_id:1,
    Username:"Dzza",
    PostTitle:"I am Legend Review",
    PostMessage:"Dog dies, init"
});
newPost1.save().then(() => console.log("Saved Post: ", newPost1));

const newPost2 = new discussionModel(
    {
        Post_id:2,
        Username:"TheVikingCoder",
        PostTitle:"I am fake",
        PostMessage:"Daniyal is real, I am fake, I am sorry for being fake, thank you babes"
    });
    newPost2.save().then(() => console.log("Saved Post: ", newPost2));