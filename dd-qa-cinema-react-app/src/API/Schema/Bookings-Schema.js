const mongoose = require("mongoose");
const BookingsSchema = mongoose.Schema;
//const ScreeningsSchema = require("./Screening-Schema.js");
const TicketsSchema = mongoose.Schema;
//Ticket Schema, defining a schema, later used as a model
const ticketsSchema = new TicketsSchema({
    AdultPrice: {type:Number, default:7},
    ChildPrice: {type:Number, default:5},
    AdultQuantity: {type: Number, default: 1},
    ChildQuantity: {type: Number, default: 0} 
});
//Bookings Schema, defining a schema, later used as a model
const bookingSchema = new BookingsSchema({
    CustomerRef: {type: String, required: true, max: 30, unique: true},
    Seats: [{type: String, default: 1, required: true, unique: true}],
    Tickets : {
        AdultPrice: {type:Number, default:7},
        ChildPrice: {type:Number, default:5},
        AdultQuantity: {type: Number, default: 1},
        ChildQuantity: {type: Number, default: 0} 
    },
    AmountPaid: {type: Number, required: true},
    TransactionRef: {type: String, required: true},
    Screening: {
        Screening_id: {type: Number, required: true},
        Title : {type: String, required: true},
        Runtime : {type: Number, required: true},
        ScreeningType : [{type: String, required: true}],
        ScreeningTime : {type: Date, required: true, default: Date.now},
    }
});

const BookingModel = mongoose.model("Bookings", bookingSchema);

module.export = {BookingModel: BookingModel, BookingSchema: bookingSchema};