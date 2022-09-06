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
    CustomerRef: "123XYVXXBYNG",
    Seats: ["2"],
    AdultPrice: 2,
    ChildPrice: 1,
    AdultQuantity: 1,
    ChildQuantity: 2,
    AmountPaid: 3,
    TransactionRef: "xyz",
    Screening: {
        Screening_id: 1,
        Title: "Dragon Ball Super: Broly",
        Runtime: 100,
        ScreeningType: ["2D", "3D", "Subtitle"],
        ScreeningTime: "2022-01-01T23:28:56.782Z"
    }
}

const booking2 = {
    CustomerRef: "123XYVXXBYqq",
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

const booking3 = {
    CustomerRef: "123XYVXXBYqq",
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
describe("Bookings test", function() {
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    })
})
describe("Bookings", function() {
    describe("GET /getAllBookings", () => {
        it("Should get all the bookings", (done) => {
            chai.request(app)
            .get("/api/getAllBookings")
            .end((err, res) => {
                res.body = JSON.parse(res.text);
                //expect(err).to.be.null;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).body.should.be.a("array")
                done();
            });
        });
    });
})

// get booking by id 
chai.should();
describe("Booking test id", function() {
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    })
})

describe("GET /getBookingByRef/:id", () => {
    it ("Should get a booking by id", (done) => {
        chai.request(app)
        .get("/api//getBookingByRef/:id")
        .end((err, res) => {
           res.body = JSON.parse(res.text);
           expect(err).to.be.null;
           expect(res).to.have.status(200);
           expect(res).body.should.be.a(booking1)
           done();
        })
    })
})

chai.should();
describe("Booking test id", function() {
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    })
})


describe("POST /", () => {
    it("Should create a new booking for a film", (done) => {
        chai.request(app)
        .post("/api/addBooking").send(booking2)
        .end((err, res) => {
            res.body = JSON.parse(res.text);
            delete res.body.__v;
            delete res.body.__id;
            expect(err).to.be(null);
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql(booking2);
            done();
        })
    })
})

chai.should();
describe("Booking test id", function() {
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    })
})

describe("/DELETE/:id", () => {
    it("It should delete a booking given id", (done) => {
        chai.request(app)
        .delete("/deleteBooking/:id").send(booking3)
        .end((err, res) => {
            res.body = JSON.parse(res.text);
            expect(err).to.be(null);
            expect(res).to.have.status(200);
            expect(res.body).should.be.a(booking3);
            done();
        })
    })
})
        