const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("./TestAPICall.js");
const expect = chai.expect;



const film1 = {
    Film_id: '1',
    Title: 'The Batman',
    Runtime: 200,
    Synopsis: 'Batman film init',
    Classification: '15',
    Genres: [ 'Superhero', 'Comic Book', 'Crime' ],
    Poster: 'https://cdn.europosters.eu/image/750webp/122127.webp'
}
const film2 = {
    Film_id: "2",
    Title: "Nope",
    Runtime: 135,
    Synopsis: "Alien in the clouds, init",
    Classification: "15",
    Genres: [
        "Horror",
        "Sci-Fi"
    ],
    Poster: "https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg"
}
const film3 = {
    Film_id: "3",
    Title: "Dragon Ball Super: Broly",
    Runtime: 100,
    Synopsis: "Super Saiyans fighting, init",
    Classification: "PG",
    Genres: [
        "Anime",
        "Shonen",
        "Action"
    ],
    Poster: "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
}
const film4 = {
    Film_id: "4",
    Title: "I Am Legend",
    Runtime: 101,
    Synopsis: "Dog dies, init",
    Classification: "15",
    Genres: [
        "Post-apocalypse",
        "Action",
        "Thriller"
    ],
    "Poster": "https://images-na.ssl-images-amazon.com/images/I/A19WwNrox0L._RI_.jpg"
}
const film5 = {
    Film_id: "5",
    Title: "The Dark Knight",
    Runtime: 152,
    Synopsis: "Why so serious Batman, init",
    Classification: "12",
    Genres: [
        "Superhero",
        "Action",
        "Comic Book",
        "Crime",
        "Clown"
    ],
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
}
const allFilms = [
    film1,
    film2,
    film3,
    film4,
    film5
]

chai.should();
describe("Films", () => {
    describe("GET /", () => {
        it("should get film with id 1", (done) => {
             chai.request(app)
                 .get('/api/getById/1')
                 .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    // expect(res).to.have.body(JSON.stringify(film1));
                    //res.text.should.be.eql(JSON.stringify(film1));
                    expect(res.body).to.be.eql(film1);
                    //res.body.should.be.eql(film1);
                    done();
                  });
         });
        });
});

chai.should();
describe("Films", () => {
    describe("GET /", () => {
        it("should get all films", (done) => {
             chai.request(app)
                 .get('/api/getAllFilms')
                 .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    // expect(res).to.have.body(JSON.stringify(film1));
                    //res.text.should.be.eql(JSON.stringify(film1));
                    expect(res.body).to.be.eql(allFilms);
                    //res.body.should.be.eql(film1);
                    done();
                  });
         });
        });
});