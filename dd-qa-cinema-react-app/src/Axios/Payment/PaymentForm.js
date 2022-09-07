import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout'


function handleToken(token){
    console.log({token})
}

function PaymentForm({movieName, bookingPrice}){
    return(
        <div>
            <StripeCheckout 
            stripeKey="pk_test_51Lf1fEJZZzPMafliFZgLMTzCZW3hv9V2Ictygbq67I1k0wtbop770IBt5lgVuQUSsUY9xeJqqFhaTfvOSqF4lJOk009grTvVva"
            token={handleToken}
            name={movieName}
            amount={bookingPrice}
            currencey="GBP"/>  
        </div>
    )
}

export default PaymentForm;