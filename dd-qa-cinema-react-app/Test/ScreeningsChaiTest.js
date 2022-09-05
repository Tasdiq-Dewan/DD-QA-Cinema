const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("./TestAPICall.js");
const expect = chai.expect;



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

const allScreenings = [screening1, screening2, screening3, screening4];

chai.should();
describe("Screenings test", () => {
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
    });
});