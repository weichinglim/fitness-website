import React from 'react';
import { Link } from 'react-router-dom'; // Links to Detail.js
import { Button, Stack, Typography } from '@mui/material';

// Each of our cards is going to be a link
const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`} >
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{ml:'21px', color:'#FFF', background:'#FFA9A9', fontSize:'14px',
                         borderRadius:'20px', textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>

            <Button sx={{ml:'21px', color:'#FFF', background:'#FCC757', fontSize:'14px',
                         borderRadius:'20px', textTransform:'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px'
                    sx={{ fontSize: { lg: '24px', xs: '20px' } }}
                    textTransform='capitalize' fontSize='22px'>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard