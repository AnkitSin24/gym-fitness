 import React, { useEffect, useState } from 'react';
 import { Box,  Button, Stack, TextField, Typography } from "@mui/material"
 import { exerciseOptions, fetchData } from '../utils/fetchData';
 import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart})=>{
const[search,setSearch]=useState("")
// const[exercises, setExercises]= useState([]);
const[bodyParts, setBodyParts]=useState([]);

 useEffect(() => {
    const fetchExercisesData = async () => {
        try {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            console.log('Body Parts Data:', bodyPartsData);
            setBodyParts(["all", ...bodyPartsData]);
        } catch (error) {
            console.log('Error fetching body parts data:', error);
        }
    };
    fetchExercisesData();
}, []);

  const handleSearch=async()=>{
    try{
    if(search){
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D",
      exerciseOptions);
      console.log(exercisesData);
      
      const searchedExercises =  exercisesData.filter((exercise)=>
      (exercise.name.toLowerCase().includes(search))
        ||(exercise.target.toLowerCase().includes(search))
          || (exercise.bodyPart.toLowerCase().includes(search))
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  } catch (error) {
    console.error('Error fetching exercises data:', error);
}
};
      return (
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
          fontSize: { lg: "44px", xs: "30px" }
       }} mb="50px" textAlign="center">
        Awesome Exercises you should know<br/>
     </Typography>
     <Box position="relative" mb="72px"> 
      <TextField  sx={{input:{
        fontWeight:"700px",border:"none",borderRadius:"4px"},
       width:{lg:"800px",xs:"350px"},backgroundColor:'#fff',borderRadius:'40px'}}
        height="76px"
       value={search} 
       onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder="Search Exercises" type="text"/>
      <Button className='search-btn'
      sx={{
        bgcolor:"#FF2625", color:"#fff",
        textTransform:"none",
        fontSize:{lg:"20px", xs:'14px',height:"56px", position:"absolute"}
      }} onClick={handleSearch}> Search  </Button>
      </Box>

      <Box sx={{ position:"relative", width:'100%', p:'20px'}}>
       <HorizontalScrollbar data={bodyParts} bodtPart={bodyPart} setBodyPart={setBodyPart}
         />
      </Box>


    
    </Stack>)}

export default SearchExercises
