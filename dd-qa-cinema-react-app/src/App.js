import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Home/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
