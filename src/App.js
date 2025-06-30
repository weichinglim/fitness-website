import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'; // Box = div with some shading

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
    <Navbar />
    <Box width="400px" sx={{width: {xl: '1488px '}}} m="auto" >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route> path = </Route>
            <Route path="/login" element={<LogIn/>} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
    </Box>
    </>
  )
}

export default App;