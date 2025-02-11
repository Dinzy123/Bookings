import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Houses from './pages/Houses';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyBookings from './pages/MyBookings';
import Bookings from './pages/Bookings'; // Added missing import
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/houses' element={<Houses />} />
        <Route path='/houses/:houseId' element={<Houses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/bookings/:houseId' element={<Bookings />} />
      </Routes>
    </div>
  );
};

export default App;