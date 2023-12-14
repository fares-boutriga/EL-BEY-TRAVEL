import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateHotle from './components/CreateHotle/CreateHotle';
import CreatePeriods from './components/CreatePerids/CreatePeriods';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Login from './components/Login/Login';
import NavBar from './constants/NavBar/NavBar';
import Slideshow from './components/Slideshow/Slideshow';
import Prices from './components/Prices/Prices';

function App() {
  return (

      <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreateHotle />} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="/CreatePeriods" element={<CreatePeriods />} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="/Prices" element={<Prices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Slideshow" element={<Slideshow />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
