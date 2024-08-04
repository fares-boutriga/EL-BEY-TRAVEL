import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import { Provider, useSelector } from 'react-redux';
import UpdateReservation from './components/Reservation/UpdateReservation';
import DateChecker from './components/Reservation/DateChecker';
import Print from './components/Print';
import routes from './routes';
import KidsReduction from './components/KidsReduction/KidsReduction';
import MyReservation from './components/SettlementHotels/MyReservation';
import useAuth from './hooks/useAuth';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { isAuth } = useSelector((state) => state.auth);

  if (isLoading) {
    return <div>Loading...</div>; // You can render a spinner or placeholder here
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const [hotelId, setHotelId] = useState('');
  const [newHotel, setNewHotel] = useState('');

  useEffect(() => {
    setNewHotel(hotelId);
  }, [hotelId]);

  return (
    <Provider store={store}>
      <Router>
        <NavBar className="nav" />
        <div style={{ padding: '0px 50px' }}>
          <Routes>
            <Route path="/" element={<ProtectedRoute element={<CreateHotle setHotelId={setHotelId} />} />} />
            <Route path="/HotelDetails" element={<ProtectedRoute element={<HotelDetails />} />} />
            <Route path="/CreatePeriods" element={<ProtectedRoute element={<CreatePeriods hotelId={newHotel} />} />} />
            <Route path="/Prices/:NPeriode" element={<ProtectedRoute element={<Prices hotelId={newHotel} />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Slideshow" element={<ProtectedRoute element={<Slideshow />} />} />
            <Route path="/myHotels" element={<ProtectedRoute element={<MyHotels />} />} />
            <Route path="/p" element={<ProtectedRoute element={<Promotion />} />} />
            <Route path="/addReservaion" element={<ProtectedRoute element={<AddReservation />} />} />
            <Route path="/room" element={<ProtectedRoute element={<Rooms />} />} />
            <Route path="/validReservation" element={<ProtectedRoute element={<UpdateReservation />} />} />
            <Route path="/date" element={<ProtectedRoute element={<DateChecker />} />} />
            <Route path="/print" element={<ProtectedRoute element={<Print />} />} />
            <Route path="/kids" element={<ProtectedRoute element={<KidsReduction />} />} />
            <Route path="/m" element={<ProtectedRoute element={<MyReservation />} />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
