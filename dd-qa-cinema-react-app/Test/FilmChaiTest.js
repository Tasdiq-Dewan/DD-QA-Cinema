const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("./TestAPICall.js");
const expect = chai.expect;
const {createData, clearCollections} = require("../src/TestInit.js")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/qa-cinema-test").then(res=>{
    console.log("connected to test db");
}).catch(err => {
    console.log(errMessage);
    console.log(err);
});


const film1 = {
    Film_id: '1',
    Title: 'The Batman',
    Runtime: 200,
    Synopsis: 'Batman film init',
    Classification: '15',
    Genres: [ 'Superhero', 'Comic Book', 'Crime' ],
    Poster: 'https://cdn.europosters.eu/image/750webp/122127.webp',
}

chai.should();
describe("Films", function (){

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