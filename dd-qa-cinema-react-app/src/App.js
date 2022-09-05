//import logo from './logo.svg';
//import './Discussion.css';
import GettingThere from './Pages/GettingThere';
import {BrowserRouter as Router} from "react-router-dom";

import Discussion from './Discussion.js'
//import Contact from './Pages/Contact';


function App() {
  return (
    <>

    <Router>
      <Discussion/>
    </Router>

    </>
  );
}

export default App;
