

import Contact from "./Pages/Contact";

//import logo from './logo.svg';
//import './App.css';
import GettingThere from './Pages/GettingThere';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <>
    {/* nav
<<<<<<< HEAD
    search
    router
    
    footer */}
    {/* <Contact />
======= */}
    
    <Router>
      <GettingThere/><Contact />
    </Router>
 

    </>
  );
}

export default App;
