import axios from "axios";
import { useEffect, useState } from "react";

const booking = () => {

    const [name, setName] = useState("")
    const [seats, setSeats] = useState([])
    const [screenNumber, setScreenNumber] = useState([])
    const [adultTickets, setAdultTickets] = useState(0)
    const [childTickets, setChildTickets] = useState(0)
    const [amountPaid, setAmountPpaid] = useState(0)
    const [screenings, getScreenings] = useState([])

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

    const createBooking = (e) => {
        axios.post("http://localhost:8081/api/addBooking", {
        "CustomerRef":1,
        "Screening":screenNumber,
        "Seats":seats,
        "AdultTickets":adultTickets,
        "CHildTickets":childTickets,
        "AmountPaid":amountPaid
        }).then(result => {
            setPost(result.data);
            console.log(result.data);
            window.location.reload();
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8081/api/getAllScreenings").then(result => {
            getScreenings(result.data);
        })
    }, []);


    return(
        <>
            <h1>Screenings</h1>

            <div className="Screening-container"> 
            {screenings.map(screening =>{
                return(
                <div className="screening-row">
                    <h2>{screening.Title}</h2>
                    <h5>Screen number: {screening.Screening_id}</h5>
                    <h5>Runtime: {screening.Runtime}</h5>
                    <h5>Screening: Type: {screening.ScreeningType}</h5>
                    <h5>Screen Time: {screening.ScreeningTime}</h5>
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
                </form>
            )}
        </>
    )




}