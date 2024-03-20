export const exerciseOptions={
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  headers: {
    'X-RapidAPI-Key': '109562a985msh0e78deb1df1d207p1487edjsnf618e9a17508',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};






export const fetchData=async(url,options)=>{
  const response = await fetch(url,options);
  const data =await response.json();
  return data;
}