import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import NavBar from './constants/NavBar/NavBar';
import routes from './routes';

function App() {
  const [hotelId, setHotelId] = useState('');
  const [newHotel, setNewHotel] = useState('');

  useEffect(() => {
    setNewHotel(hotelId);
  }, [hotelId]);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
