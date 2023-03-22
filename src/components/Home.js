import React from 'react';

import { useState } from 'react';
import "../styles/Homestyle.css";
import About from './About';

const Home = () => {


const [favourites, setFavourites]=useState([
    {color:'black', place:'bangalore', index:1},
    {color:'green', place:'chennai', index:2},
    {color:'white', place:'coimbatore', index:3},
    {color:'blue', place:'madurai', index:4},
    {color:'pink', place:'bangalore', index:5},
])


const handleDelete=(index) =>
{
    const newFavourites=favourites.filter(favourites=>favourites.index !== index);
    setFavourites(newFavourites);
}





  return (
    <>
    

{/* <About favourites={favourites} title="My Favourite List"/> */}

{/* <About favourites={favourites.filter((favourite) => favourite.place === 'banglore')} title="My Favourite Place List"/> */}


<About favourites={favourites} title="My Favourite List!" handleDelete={handleDelete}/>

  </>
  )
}



export default Home;