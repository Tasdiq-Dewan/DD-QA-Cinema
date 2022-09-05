import React from 'react';
import Booking from './Pages/BookingPage';
import ScreenData from './MockData.json'

function App() {
  return (
    <>
    <Booking data={ScreenData}/>
    </>
  );
}

export default App;