const mongoose = require("mongoose");
const BookingsSchema = mongoose.Schema;
const ScreeningsSchema = require("./Screening-Schema.js");
const TicketsSchema = mongoose.Schema;
//Ticket Schema, defining a schema, later used as a model
const ticketsSchema = new TicketsSchema({
    AdultPrice: {type:Number, default:7},
    ChildPrice: {type:Number, default:5},
    AdultQuantity:Number,
    ChildQuantity:Number
});
//Bookings Schema, defining a schema, later used as a model
const bookings = new BookingsSchema({
    Seats: [Number],
    Tickets : ticketsSchema,
    CustomerRef: String,
    AmountPaid: Number,
    TransactionRef: String,
    Screening: ScreeningsSchema
});

module.export = bookings;