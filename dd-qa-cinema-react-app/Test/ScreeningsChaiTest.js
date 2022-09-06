const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("./TestAPICall.js");
const expect = chai.expect;
const mongoose = require("mongoose");
const {createData, clearCollections} = require("../src/TestInit.js")

mongoose.connect("mongodb://localhost:27017/qa-cinema-test").then(res=>{
    console.log("connected to test db");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});



const screening1 = {
    Screening_id: 1,
    Title : "Dragon Ball Super: Broly",
    Runtime : 100,
    ScreeningType : ["2D", "Subtitle", "Audio Described"],
    ScreeningTime : "2022-09-02T12:00:00.000Z",
    AvailableSeats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    Film : {
        Film_id: '3',
        Title: 'Dragon Ball Super: Broly',
        Runtime: 100,
        Synopsis: 'Super Saiyans fighting, init',
        Classification: 'PG',
        Genres: [ 'Anime', 'Shonen', 'Action' ],
        Poster: "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      }
};

const screening2 = {
    Screening_id: 2,
    Title : "Dragon Ball Super: Broly",
    Runtime : 100,
    ScreeningType : ["2D", "Subtitle", "Audio Described"],
    ScreeningTime : "2022-09-02T15:30:00.000Z",
    AvailableSeats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    Film : {
        Film_id: '3',
        Title: 'Dragon Ball Super: Broly',
        Runtime: 100,
        Synopsis: 'Super Saiyans fighting, init',
        Classification: 'PG',
        Genres: [ 'Anime', 'Shonen', 'Action' ],
        Poster: "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      }
};

const screening3 = {
    Screening_id: 3,
    Title : "The Batman",
    Runtime : 200,
    ScreeningType : ["2D", "Audio Described"],
    ScreeningTime : "2022-09-02T19:00:00.000Z",
    AvailableSeats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    Film : {
        Film_id: "1",
        Title: "The Batman",
        Runtime: 200,
        Synopsis: "Batman film init",
        Classification: "15",
        Genres: ["Superhero", "Comic Book", "Crime"],
        Poster: "https://cdn.europosters.eu/image/750webp/122127.webp"
      }
};

const screening4 = {
    Screening_id: 4,
    Title : "The Batman",
    Runtime : 200,
    ScreeningType : ["2D", "Audio Described"],
    ScreeningTime : "2022-09-02T23:00:00.000Z",
    AvailableSeats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    Film : {
        Film_id: "1",
        Title: "The Batman",
        Runtime: 200,
        Synopsis: "Batman film init",
        Classification: "15",
        Genres: ["Superhero", "Comic Book", "Crime"],
        Poster: "https://cdn.europosters.eu/image/750webp/122127.webp"
      }
};

const newScreening = {
    Screening_id: 5,
    Title : "The Batman",
    Runtime : 200,
    ScreeningType : ["2D", "Audio Described"],
    ScreeningTime : "2022-09-03T09:00:00.000Z",
    AvailableSeats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    Film : {
        Film_id: "1",
        Title: "The Batman",
        Runtime: 200,
        Synopsis: "Batman film init",
        Classification: "15",
        Genres: ["Superhero", "Comic Book", "Crime"],
        Poster: "https://cdn.europosters.eu/image/750webp/122127.webp"
      }
}

const allScreenings = [screening1, screening2, screening3, screening4];



chai.should();
describe("Screenings test", function (){
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
    describe("GET /", () => {
        it("should get screening with id 1", (done) => {
             chai.request(app)
                 .get('/api/getScreeningById/1')
                 .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.eql(screening1);
                    done();
            });
         });
         it("should get all screenings", (done) => {
            chai.request(app)
                .get('/api/getAllScreenings')
                .end((err, res) => {
                   res.body = JSON.parse(res.text);
                   expect(err).to.be.null;
                   expect(res).to.have.status(200);
                   expect(res.body).to.be.eql(allScreenings);
                   done();
            });    
        });   
        it("should search for screenings with search term 'Dragon Ball'", (done) => {
            chai.request(app)
                .get('/api/searchScreeningsByTerm/Dragon%20Ball')
                .end((err, res) => {
                   res.body = JSON.parse(res.text);
                   expect(err).to.be.null;
                   expect(res).to.have.status(200);
                   expect(res.body).to.be.eql([screening2, screening1]);
                   done();
            });
        });
    });
    describe("POST /", () => {
        it("should create new screening", (done) => {
            chai.request(app)
                .post('/api/addScreening').send(newScreening)
                .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    delete res.body.__v;
                    delete res.body._id;
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.eql(newScreening);
                    done();
                })
        });
    });
    describe("PUT /", () => {
        it("should update screening to remove available seats based on request body", (done) => {
            chai.request(app)
                .put('/api/updateScreening/2').send({bookedSeats: ["9", "10"]})
                .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    delete res.body.__v;
                    delete res.body._id;
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.eql(screening2);
                    done();
                })
        });
    });
});