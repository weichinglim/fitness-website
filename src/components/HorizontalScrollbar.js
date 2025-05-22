import React, {useContext} from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
//import 'react-horizontal-scrolling-menu/dist/styles.css';

import BodyPart from './BodyPart'; // Render this inside HorizontalScrollbar
import ExerciseCard from './ExerciseCard';

import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext);
    
    return (
        <Typography onClick={() => scrollPrev()} className='right-arrow' >
            <img src={LeftArrowIcon} alt='left-arrow' />
        </Typography>
    );
};

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className='left-arrow' >
            <img src={RightArrowIcon} alt='right-arrow' />
        </Typography>
    );
};

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
// console.log('setBodyPart in HorizontalScrollbar:', setBodyPart);
  return (
    <Box sx={{ width: '100%', maxWidth: '960px', overflow: 'hidden', mx: 'auto', position: 'relative'}} >
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {data.map((item) => (
                    <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        // m='0 40px'
                        sx={{
                            width: '270px',
                            minWidth: '270px',
                            m: '22px',
                          }}
                    >
                        {/* {item} Now items are listed. (5) Create a BodyPart.js component to display in cards. Render it below */}
                        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                            : <ExerciseCard exercise={item} />}
                    </Box>
                )
            )}
        </ScrollMenu>
    </Box>
    
  )
}

export default HorizontalScrollbar