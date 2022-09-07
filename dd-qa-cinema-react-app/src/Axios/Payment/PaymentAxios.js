
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

function PaymentAxios() {

    const PUBLIC_KEY ="pk_test_51Lf1fEJZZzPMafliFZgLMTzCZW3hv9V2Ictygbq67I1k0wtbop770IBt5lgVuQUSsUY9xeJqqFhaTfvOSqF4lJOk009grTvVva"

    const stripePromise = loadStripe(PUBLIC_KEY);

    return(
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )

}

export default PaymentAxios;