import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    console.log('targetMuscleExercises:', targetMuscleExercises);
    console.log('equipmentExercises:', equipmentExercises);
    return (
    <Box sx={{mt: {lg: '100px', xs:'0'}}} >
        <Typography variant='h3' mb={5} ml={5} >Exercises that target the same muscle group</Typography>
            <Stack direction='row' sx={{p:'2', position:'relative', marginBottom:'60px'}} m='20px'>
                {/* Loop over our exercises */}
                {targetMuscleExercises.length ?
                    <HorizontalScrollbar data={targetMuscleExercises} maxWidth="100%" />
                    : <Loader />}
            </Stack>

        <Typography variant='h3' mb={5} ml={5} >Exercises that use the same equipment</Typography>
            <Stack direction='row' sx={{p:'2', position:'relative'}} m='20px'>
                {/* Loop over our exercises */}
                {equipmentExercises.length ?
                    <HorizontalScrollbar data={equipmentExercises} maxWidth="100%" />
                    : <Loader />}
            </Stack>

    </Box>
    )
}

export default SimilarExercises