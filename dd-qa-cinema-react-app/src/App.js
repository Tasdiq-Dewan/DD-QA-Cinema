import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import GettingThere from './Pages/GettingThere'
import Classification from './Pages/Classification'
import About from './Pages/About'
import ScreeningAxios from './Axios/Booking/ScreeningAxios'
import Booking from './Axios/Booking/BookingPage'



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path ="/location" element={<GettingThere/>} />
        <Route path ="/classification" element={<Classification/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/screenings" element={<ScreeningAxios/>} />
        <Route path="screenings/BookingPage" element = {<Booking />}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;