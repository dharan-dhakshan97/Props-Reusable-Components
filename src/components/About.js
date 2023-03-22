import React from 'react';


const About = ({favourites,title,handleDelete}) => {


    // const favourites=props.favourites;
    // const title=props.title;

  return (

   <>
<h1 style={{textAlign:'center'}}> Props & Reusable Components </h1>

<h1>{title}</h1>

    {favourites.map((favourite)=>(
        <div className="blog-preview" key={favourite.index}>
<h2 style={{color:'black'}}>My Index No is {favourite.index} </h2>
            <h4 style={{color:'green'}}>My Favourite color is {favourite.color}</h4>
            <h4 style={{color:'green'}}>My Favourite place is {favourite.place}</h4>



<button onClick={()=>handleDelete(favourite.index)}>Delete</button>




  </div>
    ))}   

</>



  )
}

export default About;