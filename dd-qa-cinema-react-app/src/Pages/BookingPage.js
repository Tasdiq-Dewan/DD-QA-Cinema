import React, { useState } from 'react'
import './BookingPage.css'

function BookingPage({data}){


        const [showForm, setShowForm] = useState(false);

        const showForm1 = () => {
            setShowForm(!showForm);
        }




    return(
        <>
        <h1>Screenings</h1>

        <div className="screening-results">
            {data.map((value, key) =>{
                return(
                <div className="screen-row">
                    <div className="screen-photo">
                        <img src={value.image} alt=""/>
                    </div>
                    <div className="screen-info">
                        <h2> {value.Title}</h2>
                        <h5>Screen number: {value.Screening_id}</h5>
                        <h5>Runtime: {value.Runtime}</h5>
                        <h5>Screening Type: {value.ScreeningType}</h5>
                        <h5>Screen Time: {value.ScreeningTime}</h5>
                    </div>
                    <button type="button" onClick={showForm1} >Book now</button>
                </div>
                )
            
            })}
            {showForm &&(
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
            )}
        </div>
        </>
    );

}

export default BookingPage;


