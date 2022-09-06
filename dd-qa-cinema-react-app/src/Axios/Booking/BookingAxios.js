import axios from "axios";
import { useEffect, useState } from "react";
import './BookingAxios.css'
import { Link } from "react-router-dom";

const BookingAxios = () => {

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

            <div className="Screening-container"> 
            {screenings.map(screening =>{
                return(
                <div className="screening-row">
                   <Link to='/bookingPage'> <img src={screening.Film.Poster} /> </Link>
                    <div className="screen-text">
                        <h4>{screening.Title}</h4>
                        <p>
                        Screen number: {screening.Screening_id}<br></br>
                        Runtime: {screening.Runtime}<br></br>
                        Screening Type: {screening.ScreeningType}, <br></br>
                        Screen Time: {screening.ScreeningTime}<br></br>
                        </p>
                    </div>
                </div>
                )
            })}
            </div>
            <button onClick={getForm}>Click To book!</button>
            {showForm && (
                <form className='booking-form'>
                        <p><label for="screening_id">Screen number:</label></p>
                        <p><input tpye="number" id="screening_id" placeholder="Enter screen number" onChange={e => getScreen(e)}></input></p>
                        <p><label for="name"><b>Name:</b></label></p>
                        <p><input type="text" id="name" placeholder="Enter name" required onChange={e => getName(e)}/></p>
                        <p><label for="adultQuantity"><b>Adult tickets:</b></label></p>
                        <p><input type="number" id="adultQuantity" placeholder="Enter number of tickets" required onChange={e => getAdultTickets(e)}/></p>
                        <p><label for="childQuantity"><b>Child tickets:</b></label></p>
                        <p><input type="number" id="childQuantity" placeholder="Enter number of tickets" required onChange={e => getChildTickets(e)} /></p>
                        <p><label for="seats"><b>Seats:</b></label></p>
                        <p><input type="text" id="seats" placeholder="e.g. 3, 4, 5...." required onChange={e => getSeats(e)} /></p>
                        <button onClick={e => createBooking(e)}>book!</button>
                </form>
            )}
        </>
    )
  



}

export default BookingAxios