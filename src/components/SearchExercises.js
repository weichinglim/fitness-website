import React from 'react';
import {useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

// ({setExercises, bodyPart, setBodyPart}) REMEMBER TO PASS IN AS PROPS FOR FUNCTION TO WORK
const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    
    // (2) Create useEffect to fetch the Categories as soon as our page loads
    // the category banner before 'Showing Result' of exercises from search
    useEffect( () => {
        // create a new function called  fetchExercisesData
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            // once we get the data do ...
            setBodyParts(['all', ...bodyPartsData]); //spread all the body parts we got
            //setBodyParts(['all', ...(Array.isArray(bodyPartsData) ? bodyPartsData : [])]);

        
        }

        fetchExercisesData() //we want to call this function immediately when the app loads
        // (3) Now we got data, display it in component below (3a)
    }, []) // we want to call it at the start so the dependency array is [] empty
    
    // (1)
    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            //console.log(exercisesData);
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch(''); // clear the search 
            setExercises(searchedExercises); // from this, we would want to show the exercises somewhere
        }
    }

    return (
        <Stack id="searchExercises" alignItems='center' mt='37px' justifyContent='center' p='20px' >
            <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} mb='50px' textAlign='center' >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position='relative' mb='72px' >
                <TextField 
                    sx={{
                        input: {fontWeight: '700', border:'none', borderRadius:'4px'},
                        width: { lg:'800px', xs:'350px'},
                        backgroundColor: '#FFF',
                        borderRadius: '40px'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform:'none',
                        width: {lg: '170px', xs:'80px'},
                        fontSize: {lg:'20px', xs:'14px'},
                        height: '56px',
                        position: 'aboslute',
                        right: '0'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            {/* (3a) create another Box component to display the categories */}
            <Box xs={{position: 'relative', width:'100%', p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} 
                        setBodyPart={setBodyPart} isBodyParts /> {/* (4) Create HorizontalScrollbar component in the components folder */}
                {/* (6) bodyPart={bodyPart} == the one user clicked. comes from Home page*/}
            </Box>
        </Stack>
  )
}

export default SearchExercises