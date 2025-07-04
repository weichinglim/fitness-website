import React from 'react';
import { Box, Stack, Typography, Button } from  '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs:'70px'}, ml: {sm: '50px'}}} position='relative' p='20px' >
        <Typography color='#FF2625' fontWeight='600' fontSize='26px' >
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize: {lg: '44px', xs:'40px'}}} mb='23px' mt='30px'>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check out the most effective exercises
        </Typography>
        {/* <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor: '#FF2625', padding:'10px'}} >Explore Exercises</Button> */}
        <ScrollLink
            to="searchExercises"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true} // enables active state
            activeClass="active-link" // apply class when target is active
            style={{ textDecoration: 'none', color: '#3A1212', cursor: 'pointer'}}
          >
            <Button variant='contained' color='error' sx={{backgroundColor: '#FF2625', padding:'10px'}} >
                Explore Exercises
            </Button>
          </ScrollLink>
        <Typography fontWeight={600} color='#FF2625'
        sx = {{opacity: 0.1, display: {lg:'block', xs:'none'}}} fontSize='200px' mt='30px'>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}
// Removed in  href='#exercises' <Button>
export default HeroBanner;