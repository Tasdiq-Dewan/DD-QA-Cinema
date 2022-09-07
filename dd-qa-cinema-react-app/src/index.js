import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Post from './Axios/Discussions/DiscussionsAxios'
import About from './Pages/About';
import Booking from './components/Booking/Booking';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mockdata from './MockData.json'
import BookingPage from './Pages/BookingPage';
import ScreeningAxios from './Axios/Booking/ScreeningAxios';
import BookingAxios from './Axios/Booking/BookingPage';
import PaymentForm from './Axios/Payment/PaymentForm';
import PaymentAxios from './Axios/Payment/PaymentAxios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScreeningAxios/>
   <App/>
  </BrowserRouter>
)

reportWebVitals();
