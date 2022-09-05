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
}

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
                    // expect(res).to.have.body(JSON.stringify(film1));
                    //res.text.should.be.eql(JSON.stringify(film1));
                    expect(res.body).to.be.eql(screening1);
                    //res.body.should.be.eql(film1);
                    done();
                  });
         });
        });
});