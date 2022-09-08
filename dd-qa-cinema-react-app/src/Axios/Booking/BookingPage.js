import axios from "axios";
import { useState } from "react";
import StripeCheckout from 'react-stripe-checkout'
import './BookingAxios.css'
import Screening from "./ScreeningAxios";
import { Route, Routes, Link, useLocation} from "react-router-dom";
import PaymentForm from "../Payment/PaymentForm";

function refGen(){
let r = (Math.random() * 9999).toString(36).substring(3);
    return r;
}

const BookingAxios = () => {
    const location = useLocation();
    const [name, setName] = useState("")
    const [seats, setSeats] = useState([])
    const [adultTickets, setAdultTickets] = useState(1)
    const [childTickets, setChildTickets] = useState(0)
    const [booking, setBooking] = useState([])
    const [showForm, setShowForm] = useState(false);

    const {screening} = location.state;
    const getForm = () => {
        setShowForm(!showForm);
      }

    const getName = (e) => {
        setName(e.target.value)
    }
    
    const getSeats = (e) =>{
        let reg = /\s*/g;
        setSeats(e.target.value.replace(reg, "").split(","))
    }

    const getAdultTickets = (e) => {
        setAdultTickets(e.target.value)
    }

    const getChildTickets = (e) =>{
        setChildTickets(e.target.value)
    }

    const TotalPrice = ((adultTickets*7) + (childTickets*5));

    
    const updateScreening = () => {
        axios.put("http://localhost:8081/api/updateScreening/" + screening.Screening_id, {
            "bookedSeats":seats
        }).then(result => {
            console.log(result.data);
        })
    }
    console.log(screening.Screening_id);



    const createBooking = () => {
       console.log("gg");
        axios.post("http://localhost:8081/api/addBooking", {
        "CustomerRef":refGen(),
        "CustomerName":name,
        "Screening":screening.Screening_id,
        "Seats":seats,
        "AdultTickets":adultTickets,
        "ChildTickets":childTickets,
        "TransactionRef": 'sdfsfsf',
        "Screening": {
            "Screening_id": screening.Screening_id,
            "Title" : screening.Title,
            "Runtime" : screening.Runtime,
            "ScreeningType": screening.ScreeningType,
           "ScreeningTime" : screening.ScreeningTime,
        },
        "AmountPaid": TotalPrice
        }).then(result => {
            setBooking(result.data);
            console.log(result.data);
            updateScreening();
            window.location.reload();
        }).catch(err => {
            console.log(err);
        })
 
    }
    const handleToken = (token) =>{
        createBooking();
        console.log(token)
    }
    
    return(
        <>
                <div>
                <p><label for="name"><b>Name:</b></label></p>
                <p><input type="text" id="name" placeholder="Enter name" required onChange={e => getName(e)}/></p>
                <p><label for="adultQuantity"><b>Adult tickets:</b></label></p>
                <p><input type="number" id="adultQuantity" placeholder="Enter number of tickets" required onChange={e => getAdultTickets(e)}/></p>
                <p><label for="childQuantity"><b>Child tickets:</b></label></p>
                <p><input type="number" id="childQuantity" placeholder="Enter number of tickets" required onChange={e => getChildTickets(e)} /></p>
                <p><label for="seats"><b>Seats:</b></label></p>
                <p><input type="text" id="seats" placeholder="e.g. 3, 4, 5...." required onChange={e => getSeats(e)} /></p>

                 <div>           
            <StripeCheckout 
            stripeKey="pk_test_51Lf1fEJZZzPMafliFZgLMTzCZW3hv9V2Ictygbq67I1k0wtbop770IBt5lgVuQUSsUY9xeJqqFhaTfvOSqF4lJOk009grTvVva"
            token={handleToken}
            name={screening.Title}
            amount={TotalPrice * 100} 
            currency="GBP"
            >
            </StripeCheckout> 

                </div>

            </div> 
           

           
            </> 

      
    )
}

export default BookingAxios;
