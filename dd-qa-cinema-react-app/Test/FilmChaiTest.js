const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("./TestAPICall.js");
const expect = chai.expect;
const {createData, clearCollections} = require("../src/TestInit.js")
const mongoose = require("mongoose");


const film1 = {
    Film_id: '1',
    Title: 'The Batman',
    Runtime: 200,
    Synopsis: 'Batman film init',
    Classification: '15',
    Genres: [ 'Superhero', 'Comic Book', 'Crime' ],
    Poster: 'https://cdn.europosters.eu/image/750webp/122127.webp',
    ReleaseDate: "2022-03-04T00:00:00.000Z",
    Url: "/whatsOn"
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
    Poster: "https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg",
    ReleaseDate: "2022-07-22T00:00:00.000Z",
    Url: "/whatsOn"
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
    Poster: "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    ReleaseDate: "2018-12-14T00:00:00.000Z",
    Url: "/whatsOn"
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
    "Poster": "https://images-na.ssl-images-amazon.com/images/I/A19WwNrox0L._RI_.jpg",
    ReleaseDate: "2007-12-14T00:00:00.000Z",
    Url: "/whatsOn"
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
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    ReleaseDate: "2008-07-14T00:00:00.000Z",
    Url: "/whatsOn"
}

const film6 = {
    Film_id: "6",
    Title: "Black Adam",
    Synopsis: "Changing the hierarchy of the DC Universe, init",
    Classification: "12A",
    Genres: ["Superhero", "Comic Book", "Action"],
    Poster: "https://pbs.twimg.com/media/FcEcTXfacAId-13?format=jpg&name=large",
    ReleaseDate: "2022-10-21T00:00:00.000Z",
    Url: "/upcoming"
};

const film7 = {
    Film_id: "7",
    Title: "Avatar: The Way of Water",
    Synopsis: "Blue people, init",
    Classification: "12A",
    Genres: ["Sci-Fi", "Action"],
    Poster: "https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    ReleaseDate: "2022-12-16T00:00:00.000Z",
    Url: "/upcoming"
};

const allFilms = [
    film1,
    film2,
    film3,
    film4,
    film5
]

const upcomingFilms = [film6, film7];

const newFilm = {
        Film_id: "8",
        Title: "Thor: Love & Thunder",
        Runtime: 119,
        Synopsis: "Thor, init",
        Classification: "15",
        Genres: [
            "Superhero",
            "Comic Book",
            "Crime"
        ],
        Poster: "https://cdn.europosters.eu/image/750webp/122127.webp",
        ReleaseDate: "2022-07-08T00:00:00.000Z",
        Url: "/whatsOn"
}


chai.should();

describe("Films", function (){
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
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
describe("Films", function() {
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
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

chai.should();
describe("Films", function() {
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
    describe("GET /", () => {
        it("should get all upcoming films", (done) => {
             chai.request(app)
                .get('/api/getUpcomingFilms')
                .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.eql(upcomingFilms);
                    done();
                });
         });
        });
});

chai.should();
describe("Films", function() {
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
    describe("POST /", () => {
        it("should create new Film", (done) => {
            chai.request(app)
                .post('/api/addFilm').send(newFilm)
                .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    delete res.body.__v;
                    delete res.body._id;
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.eql(newFilm);
                    done();
                })
        });
    });
});

chai.should();
describe("Films", function() {
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
it("should search for films with search term 'Batman'", (done) => {
    chai.request(app)
        .get('/api/searchByTerm/Batman')
        .end((err, res) => {
           res.body = JSON.parse(res.text);
           expect(err).to.be.null;
           expect(res).to.have.status(200);
           expect(res.body).to.be.eql([film1, film5]);
           done();
    });
});
});

chai.should();
describe("Films", function() {
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
it("should search for films with title 'The Batman'", (done) => {
    chai.request(app)
        .get('/api/searchFilm/The%20Batman')
        .end((err, res) => {
           res.body = JSON.parse(res.text);
           expect(err).to.be.null;
           expect(res).to.have.status(200);
           expect(res.body).to.be.eql(film1);
           done();
    });
});
});

chai.should();
describe("Films", function() {
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
    it('should respond 200 after delete', (done) => {
       chai.request(app)
      .del(`/api/deleteFilm/1`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      
    })
  });
})


chai.should();
describe("Films", function() {
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
    it('should respond 200 after attempting to delete non existent film and return error message', (done) => {
       chai.request(app)
      .del(`/api/deleteFilm/10`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      
    })
  });
})