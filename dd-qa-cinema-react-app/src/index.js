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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScreeningAxios/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
