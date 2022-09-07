import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout'


const handleToken = (token) =>{
    
    console.log({token})
}

function PaymentForm({Title, bookingPrice, createBooking, name, seats, adults, childs, screen}){
    return(
        <div>
            <StripeCheckout 
            stripeKey="pk_test_51Lf1fEJZZzPMafliFZgLMTzCZW3hv9V2Ictygbq67I1k0wtbop770IBt5lgVuQUSsUY9xeJqqFhaTfvOSqF4lJOk009grTvVva"
            token={handleToken}
            name={Title}
            amount={bookingPrice * 100} 
            currency="GBP"
            panelLabel='ff'  
            >
                <button id="btn2" className="">dd</button>
            </StripeCheckout> 
            
        </div>
    )
}

export default PaymentForm;