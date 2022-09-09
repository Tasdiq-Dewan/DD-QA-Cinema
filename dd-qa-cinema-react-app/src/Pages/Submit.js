import thanks from './thanks.png'
import './Submit.css'

function Submit(){
    return(
        <>
        <h1>Thank you for your booking!</h1>
        <img className="thank-pic" src={thanks} alt=""/>
        </>
    );
}

export default Submit;