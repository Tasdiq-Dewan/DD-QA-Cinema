import axios from "axios";
import { useEffect, useState } from "react";
import './BookingAxios.css'
import { Route, Routes, Link,} from "react-router-dom";
import Booking from "./BookingPage";
const ScreeningAxios = () => {

    const [name, setName] = useState("")
    const [seats, setSeats] = useState([])
    const [screenNumber, setScreenNumber] = useState([])
    const [adultTickets, setAdultTickets] = useState(1)
    const [childTickets, setChildTickets] = useState(0)
    const [amountPaid, setAmountPpaid] = useState(0)
    const [screenings, getScreenings] = useState([])
    const [booking, setBooking] = useState([])

    const [showForm, setShowForm] = useState(false);

    const getForm = () => {
        setShowForm(!showForm);
      }

    const getName = (e) => {
        setName(e.target.value)
    }

    const getScreen = (e) => {
        setScreenNumber(e.target.value)
    }
    
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


    useEffect(() => {
        axios.get("http://localhost:8081/api/getAllScreenings").then(result => {
            getScreenings(result.data);
        })
    }, []);


    const createBooking = (e) => {
        axios.post("http://localhost:8081/api/addBooking", {
        "CustomerRef":1,
        "CustomerName":name,
        "Screening":screenNumber,
        "Seats":seats,
        "AdultTickets":adultTickets,
        "ChildTickets":childTickets,
        "TransactionRef": 'sdfsfsf',
        "Screening": {
            "Screening_id": 1,
            "Title" : "dbz",
            "Runtime" : 200,
            "ScreeningType ": "3d",
           "ScreeningTime" : 200,
        },
        "AmountPaid": (adultTickets*7) + (childTickets*5)
        }).then(result => {
            setBooking(result.data);
            console.log(result.data);
            //window.location.reload();
        })
    }

    
    return(
        <>
            <h1>Screenings</h1>
            <div className="bookingPageContainer">   
            <Link to='/BookingPage' className="bookingPage"><h4>Booking</h4></Link>
                   <Routes>
                   <Route path="/BookingPage" element = {<Booking />}>
                   </Route>
                   </Routes>
                   </div>
            <div className="Screening-container"> 
            {screenings.map((screening, key) =>{
                return(
                    
                <div className="screening-row">
        
               
                    <img src={screening.Film.Poster} /> 
               
                        <h4>{screening.Title}</h4>
                        <p>
                        Screen number: {screening.Screening_id}<br></br>
                        Runtime: {screening.Runtime}<br></br>
                        Screening Type: {screening.ScreeningType}, <br></br>
                        Screen Time: {screening.ScreeningTime}<br></br>
                        </p>
                        
               
                </div>
                )
            })}
          
            </div>
        </>
    )
  
            }

export default ScreeningAxios;