import React from 'react';

const CreateHotle = React.lazy(() => import('./components/CreateHotle/CreateHotle'));
const CreatePeriods = React.lazy(() => import('./components/CreatePerids/CreatePeriods'));
const HotelDetails = React.lazy(() => import('./components/HotelDetails/HotelDetails'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Slideshow = React.lazy(() => import('./components/Slideshow/Slideshow'));
const SignUp = React.lazy(() => import('./components/SignUp/SignUp'));
const Prices = React.lazy(() => import('./components/Prices/Prices'));
const MyHotels = React.lazy(() => import('./components/MyHotels/MyHotels'));
const Promotion = React.lazy(() => import('./components/Promotion/Promotion'));
const AddReservation = React.lazy(() => import('./components/Reservation/AddReservation/AddReservation'));
const Rooms = React.lazy(() => import('./components/Reservation/Rooms'));
const UpdateReservation = React.lazy(() => import('./components/Reservation/UpdateReservation'));
const DateChecker = React.lazy(() => import('./components/Reservation/DateChecker'));
const Print = React.lazy(() => import('./components/Print'));
const KidsReduction = React.lazy(() => import('./components/KidsReduction/KidsReduction'));

const routes = [
  { path: '/', component: <CreateHotle /> },
  { path: '/HotelDetails', component: <HotelDetails /> },
  { path: '/CreatePeriods', component: <CreatePeriods /> },
  { path: '/Prices/:NPeriode', component: <Prices /> },
  { path: '/login', component: <Login /> },
  { path: '/signUp', component: <SignUp /> },
  { path: '/Slideshow', component: <Slideshow /> },
  { path: '/myHotels', component: <MyHotels /> },
  { path: '/p', component: <Promotion /> },
  { path: '/add', component: <AddReservation /> },
  { path: '/room', component: <Rooms /> },
  { path: '/validReservation', component: <UpdateReservation /> },
  { path: '/date', component: <DateChecker /> },
  { path: '/print', component: <Print /> },
  { path: '/kids', component: <KidsReduction /> },
  // Add more routes as needed
];

export default routes;
