import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateHotle from './components/CreateHotle/CreateHotle';
import CreatePeriods from './components/CreatePerids/CreatePeriods';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Login from './components/Login/Login';
import NavBar from './constants/NavBar/NavBar';
import Slideshow from './components/Slideshow/Slideshow';
import SignUp from './components/SignUp/SignUp';
import Prices from './components/Prices/Prices';
import MyHotels from './components/MyHotels/MyHotels';
import { useEffect, useState } from 'react';
import Promotion from './components/Promotion/Promotion';
import AddReservation from './components/Reservation/AddReservation/AddReservation';
import Rooms from './components/Reservation/Rooms';
import { store } from './store';
import {Provider} from 'react-redux'
import UpdateReservation from './components/Reservation/UpdateReservation';

function App() {
  const [hotelId,setHotelId]=useState('')
  const [newHotel,setNewHotel]=useState('')
  useEffect(()=>{setNewHotel(hotelId)},[hotelId])
  return (

      <Provider store={store} >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreateHotle setHotelId={setHotelId}/>} />
          {/* delete the hotel details component */}
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="/CreatePeriods" element={<CreatePeriods hotelId={newHotel}/>} />
          <Route path="/Prices/:NPeriode" element={<Prices  hotelId={newHotel}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Slideshow" element={<Slideshow />} />
          <Route path="/myHotels" element={<MyHotels />} />
          <Route path="/p" element={<Promotion />} />
          <Route path="/add" element={<AddReservation />} />
          <Route path="/room" element={<Rooms />} />
          <Route path="/validReservation" element={<UpdateReservation />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */} 
          
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
