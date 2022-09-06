const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
chai.use(chaiHttp);
const app = require("./TestAPICall.js");
const {createData, clearCollections} = require("../src/TestInit.js");
const { expect } = require("chai");
//const expect = chai.expect;

mongoose.connect("mongodb://localhost:27017/qa-cinema-test").then(res=>{
    console.log("connected to test db");
}).catch(err => {
    
    console.log(err);
});

const booking1 = {  
    CustomerRef: "90AB223",
    CustomerName: "Andrew McCall",
    Seats: ["15", "16"],
    AdultPrice: 7,
    ChildPrice: 5,
    AdultQuantity: 1,
    ChildQuantity: 1,
    AmountPaid: 12,
    TransactionRef: "1239875987",
    Screening: {
        Screening_id: 4,
        Title : "The Batman",
        Runtime : 200,
        ScreeningType : ["2D", "Audio Described"],
        ScreeningTime : "2022-09-02T23:00:00.000Z",
    }
}

const booking2 = {
    CustomerRef: "123XYVXXBYqq",
    CustomerName: "Bob",
    Seats: ["4"],
    AdultPrice: 3,
    ChildPrice: 2,
    AdultQuantity: 2,
    ChildQuantity: 3,
    AmountPaid: 4,
    TransactionRef: "xyzhh",
    Screening: {
        Screening_id: 4,
        Title: "The Batman",
        Runtime: 200,
        ScreeningType: ["2D", "3D", "Subtitle"],
        ScreeningTime: "2022-01-01T23:28:56.782Z"
    }
}



chai.should();
describe("Bookings", function() {
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
    })
    describe("GET /getAllBookings", () => {
        it("Should get all the bookings", (done) => {
            chai.request(app)
            .get("/api/getAllBookings")
            .end((err, res) => {
                res.body = JSON.parse(res.text);
                //delete res.body[0].__flags;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).should.be.eql([booking1]);
                done();
            });
        });
    });
})

// get booking by id 
chai.should();

describe("GET /getBookingByRef/:id", function(){
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
    })
    it ("Should get a booking by id 90AB223", (done) => {
        chai.request(app)
        .get("/api/getBookingByRef/90AB223")
        .end((err, res) => {
           res.body = JSON.parse(res.text);
           //res.body.__flags;
           expect(err).to.be.null;
           expect(res).to.have.status(200);
           expect(res.body).should.be.eql(booking1)
           done();
        })
    })
})

chai.should();

describe("POST /", function(){
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
    })
    it("Should create a new booking for a film", (done) => {
        chai.request(app)
        .post("/api/addBooking").send(booking2)
        .end((err, res) => {
            res.body = JSON.parse(res.text);
            delete res.body.__v;
            delete res.body._id;
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql(booking2);
            done();
        })
    })
})

chai.should();


describe("/DELETE/:id", function(){
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
    })
    it("It should delete a booking given id", (done) => {
        chai.request(app)
        .delete("/api/deleteBooking/90AB223")
        .end((err, res) => {
            res.body = JSON.parse(res.text);
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            //expect(res.body).to.be.eql({"acknowledged":true,"deletedCount":1})
            done();
        })
    })
})
        