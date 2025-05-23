import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../assets/images/Logo.png';

const Navbar = ({ onExercisesClick }) => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap: { sm: '123px', xs: '40px'}, mt: {sm: '32px', xs:'20px'}, justifyContent:'none'}} px='20px' >
      <Link to= "/" >
        <img src={Logo} alt="logo" style={{width: '48px', height:'48px', margin:'0 20px'}} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link to='/' style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}} >Home</Link>
        {/* <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212' }} >Exercises</a> */}

        <ScrollLink
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
      </Stack>
    </Stack>
  )
}

export default Navbar

