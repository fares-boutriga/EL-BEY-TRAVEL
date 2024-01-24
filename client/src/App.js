import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateHotle from './components/CreateHotle/CreateHotle';
import CreatePeriods from './components/CreatePerids/CreatePeriods';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Login from './components/Login/Login';
import NavBar from './constants/NavBar/NavBar';
import Slideshow from './components/Slideshow/Slideshow';
import Prices from './components/Prices/Prices';
import SignUp from './components/SignUp/SignUp';
import TestPrice from './components/Prices/TestPrice';
import MyHotels from './components/MyHotels/MyHotels';
import { useState } from 'react';
import Promotion from './components/Promotion/Promotion';
import AddReservation from './components/Reservation/AddReservation/AddReservation';
import Rooms from './components/Reservation/Rooms';

function App() {
  const [hotelId,setHotelId]=useState('')
  return (

      <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreateHotle setHotelId={setHotelId}/>} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="/CreatePeriods" element={<CreatePeriods />} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="/Prices/:NPeriode" element={<TestPrice  hotelId={hotelId}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Slideshow" element={<Slideshow />} />
          <Route path="/myHotels" element={<MyHotels />} />
          <Route path="/p" element={<Promotion />} />
          <Route path="/add" element={<AddReservation />} />
          <Route path="/room" element={<Rooms />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */} 
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
