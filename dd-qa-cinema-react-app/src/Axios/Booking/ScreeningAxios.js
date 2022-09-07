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
    
    return(
        <>
            <h1>Screenings</h1>
            <div className="bookingPageContainer">   
                <Link to='BookingPage' className="bookingPage"><h4>Booking</h4></Link>
    
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
                        Screen Seats: {screening.AvailableSeats}
                        </p>
                        
               
                </div>
                )
            })}
          
            </div>
        </>
    )
  
            }

export default ScreeningAxios;