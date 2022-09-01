import { useState } from "react";
import "./Contact.css";


function Contact(){
    // set the state for the form 
    const [ contactData, setData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        body: ""
    })

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return(
        
        <>

          <h2 style={{
               fontSize: "30px",
               paddingBottom: "0px",
               marginTop: "80px",
               textAlign: "center",
               fontFamily: "monospace"
               

          }}>Contact Us</h2>

           <form onSubmit={handleSubmitForm}>
              <label htmlFor="firstName">FirstName</label>
              <input onChange={(e) => setData({...contactData, firstName: e.target.value})} value={contactData.firstName} type="text" name="firstName" id="firstName" />

              <label htmlFor="lastName">LastName</label>
              <input onChange={(e) => setData({...contactData, lastName: e.target.value})} value={contactData.lastName} type="text" name="lastName" id="lastName" />

              <label htmlFor="email">Email</label>
              <input onChange={(e) => setData({...contactData, email: e.target.value})} value={contactData.email} type="text" name="email" id="email" />

              <label htmlFor="body">More Information</label>
              <textarea onChange={(e) => setData({...contactData, body: e.target.value})} value={contactData.body} type="text" name="body" id="body" />

              <button>Submit</button>
           </form>
          


        </>
    );
}

export default Contact;