import React from 'react'
import Contact from "../components/Contact";

const Service = (para) => {







  

  return (
<>

    
    <p>React components can accept data passed to them called props.</p> <br></br>
<p>Props are passed from the parent component to a child component.</p>
 <Contact head={para.head}/> 

</>
  )
}

export default Service;