import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../assets/images/Logo.png';

const Navbar = ({ onExercisesClick }) => {
  
  const location = useLocation(); // to show or hide certain navbar elements on diff pages

  const linkStyle = ({isActive}) => ({
    textDecoration: 'none',
    color: '#3A1212',
    borderBottom: isActive? '3px solid #FF2625' : 'none',
  });

  return (
    <Stack 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center'
      px='50px' 
      sx={{gap: { sm: '123px', xs: '40px'}, mt: {sm: '32px', xs:'20px'}, justifyContent:'space-between'}} 
    >

    {/* Justified Left on Page */}
    <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='center'
      >
        <NavLink to= "/" >
          <img src={Logo} alt="logo" style={{width: '48px', height:'48px', margin:'0 20px'}} />
        </NavLink>
        <NavLink to='/' style={linkStyle} >Home</NavLink>

        {/* <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212' }} >Exercises</a> */}
        {location.pathname !== '/login' && location.pathname !== '/signup' &&
          (<ScrollLink
          to="searchExercises"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true} // enables active state
          activeClass="active-link" // apply class when target is active
          style={{ textDecoration: 'none', color: '#3A1212', cursor: 'pointer'}} 
        >
          Exercises
        </ScrollLink>
        )}
        
      </Stack>

      {/* Justified Right on Page */}
      <Stack
          direction='row'
          gap='40px'
          fontSize='24px'
          alignItems='center'
      >
        <NavLink to='/login' style={linkStyle} >Log In</NavLink>
        <NavLink to='/signup' style={linkStyle} >Sign Up</NavLink>
      </Stack>

    </Stack>
  )
}

export default Navbar

