import React ,{useState} from 'react'
import {Box, Stack} from "@mui/material";

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const[bodyPart,setBodyPart]=useState("all");
  const[exercises,setExercises]= useState([]);
  return (

      <Box> 
      <HeroBanner/>
       <SearchExercises
           setExercises ={setExercises}
           bodyPart={bodyPart} 
           setBodyPart={setBodyPart}
      />
      <Exercises
       setExercises={setExercises}
       Exercises={setExercises}
       bodyPart={bodyPart}/>
       <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}}
       flexWrap='wrap' justifyContent="center">
       {exercises.map((exercise,index)=>(
       <p>{exercise.name}</p>
       ))}</Stack>
      </Box>
    
  )
}

export default Home
