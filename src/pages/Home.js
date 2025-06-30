import React, { use } from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import supabase from '../config/supabaseClient';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  console.log(supabase)
  // (7) Moves/ Have in Home because changes in these states must be reflected across all pages, not only in SearchExercies
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home