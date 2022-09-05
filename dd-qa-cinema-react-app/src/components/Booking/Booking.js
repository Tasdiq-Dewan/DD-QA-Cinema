import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router";
import './Booking.css'


function Booking(){

    const [ticket, setTicket] = useState({
        AdultQuantity:0,
        ChildQuantity:0
    })

    const [screening, setScreening] = useState({
        Screening_id:0,
        Title:"",
        Runtime:0,
        ScreeningType: "",
        ScreeningTime: ""

    })

    const [booking, setBooking] = useState({
        Seats:"",
        Tickets: ticket,
        AmountPaid: 0,
        Screening: screening
    })

    function updateTicket(value){
        return setTicket((prev) => {
            return {...prev, ...value};
        })
    }

    function updateScreening(value){
        return setScreening((prev) => {
            return {...prev, ...value};
        })
    }

    function updateBooking(value){
        return setTicket((prev) => {
            return {...prev, ...value};
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
    
    }

    const newTicket = { ...ticket};
    const newScreening = {...screening};
    const newBooking = {...booking};
    



    return(

    <div className='form-container'>
        <div className='headings'>
            <h5 className='screen-title'>Cinema booking:</h5>
        </div>
        <table>
            <tr>  
                <th><h5 className='tbl-heading'>Booking: </h5></th>
                <th><h5 className='tbl-heading'>Payment: </h5></th>
            
            </tr>
            <tr>
                <td>
                    <form className='booking-form'>
                       <p><label for="name"><b>Name:</b></label></p>
                       <p><input type="text" id="name" placeholder="Enter name" required /></p>
                       <p><label for="adultQuantity"><b>Adult tickets:</b></label></p>
                       <p><input type="number" id="adultQuantity" placeholder="Enter number of tickets" required/></p>
                       <p><label for="childQuantity"><b>Child tickets:</b></label></p>
                       <p><input type="number" id="childQuantity" placeholder="Enter number of tickets" required/></p>
                       <p><label for="screening_id"><b>Enter screening number:</b></label></p>
                       <p><input type="number" id="screening_id" placeholder='00' required/></p>
                       <p><button type="submit" className='btn'>Get screening information</button></p>
                       <p><label for="seats"><b>Seats:</b></label></p>
                       <p><input type="text" id="seats" placeholder="e.g. 3, 4, 5...." required/></p>
                    </form>
                </td>
                <td>
                    <form className='payment-form'>
                      <p><label for="name"><b>Name on card:</b></label></p>
                      <p><input type="text" id="name" placeholder="Enter name on card" required/></p>
                      <p><label for="cardNumber"><b>Card number:</b></label></p>
                      <p><input type="number" id="cardNumber" placeholder="Enter name on card" required/></p>
                      <p><label for="expireDate"><b>Expiery date:</b></label></p>
                      <p><input type="text" id="expireDate" placeholder="mm/yy" required/></p>
                      <p><label for="cvc"><b>cvc:</b></label></p>
                      <p><input type="number" id="cvc" placeholder='000' required/></p>
                    </form>
                </td>
            </tr> 
        </table> 
        <button type='submit' className='btn'>Submit</button>
        <button type="button" className='btn'>Close</button>
    </div>
    )
}


export default Booking;