import axios from "axios";
import { useState } from "react";
import './BookingAxios.css'
import Screening from "./ScreeningAxios";
import PaymentForm from "../"
import { Route, Routes, Link, useLocation} from "react-router-dom";

function refGen(){
let r = (Math.random() * 9999).toString(36).substring(3);
    return r;
}

const BookingAxios = () => {
    const location = useLocation();
    const [name, setName] = useState("")
    const [seats, setSeats] = useState([])
    //const [screening, setScreening] = useState();
    const [adultTickets, setAdultTickets] = useState(1)
    const [childTickets, setChildTickets] = useState(0)
    const [amountPaid, setAmountPpaid] = useState(0)
    const [booking, setBooking] = useState([])
    const [showForm, setShowForm] = useState(false);

    const {screening} = location.state;
    const getForm = () => {
        setShowForm(!showForm);
      }

    const getName = (e) => {
        setName(e.target.value)
    }

    // const getScreen = () => {
    //     setScreening(props.screening.Screening_id)
    // }
    
    const getSeats = (e) =>{
        setSeats(e.target.value)
    }

    const getAdultTickets = (e) => {
        setAdultTickets(e.target.value)
    }

    const getChildTickets = (e) =>{
        setChildTickets(e.target.value)
    }

    const getAmountPaid = (e) =>{
        setAmountPpaid(e.target.value)
    }
    
    const updateScreening = () => {
        axios.put("http://localhost:8081/api/updateScreening/" + screening.Screening_id, {
            "bookedSeats":seats
        }).then(result => {
            console.log(result.data);
        })
    }
    console.log(screening.Screening_id);

    const createBooking = (e) => {
        axios.post("http://localhost:8081/api/addBooking", {
        "CustomerRef": refGen(),
        "CustomerName":name,
        "Seats":seats,
        "AdultTickets":adultTickets,
        "ChildTickets":childTickets,
        "TransactionRef": 'TBD',
        "Screening": {
            "Screening_id": screening.Screening_id,
            "Title" : screening.Title,
            "Runtime" : screening.Runtime,
            "ScreeningType": screening.ScreeningType,
           "ScreeningTime" : screening.ScreeningTime,
        },
        "AmountPaid": (adultTickets*7) + (childTickets*5)
        }).then(result => {
            setBooking(result.data);
            console.log(result.data);
            updateScreening();
            <Screening/>
        })
 
    }

    
    return(
        <>
                <form>
                <p><label for="name"><b>Name:</b></label></p>
                <p><input type="text" id="name" placeholder="Enter name" required onChange={e => getName(e)}/></p>
                <p><label for="adultQuantity"><b>Adult tickets:</b></label></p>
                <p><input type="number" id="adultQuantity" placeholder="Enter number of tickets" required onChange={e => getAdultTickets(e)}/></p>
                <p><label for="childQuantity"><b>Child tickets:</b></label></p>
                <p><input type="number" id="childQuantity" placeholder="Enter number of tickets" required onChange={e => getChildTickets(e)} /></p>
                <p><label for="seats"><b>Seats:</b></label></p>
                <p><input type="text" id="seats" placeholder="e.g. 3, 4, 5...." required onChange={e => getSeats(e)} /></p>
                <PaymentForm name={"batman"} bookingPrice={100} ><button onClick={e => createBooking(e)}>book!</button></PaymentForm>
                <button onClick={e => createBooking(e)}>book!</button>
            </form> 
        
            </> 
      
      
    )
}

export default BookingAxios;
