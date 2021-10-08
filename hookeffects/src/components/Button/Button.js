import React from 'react'
import { useEffect, useState  } from 'react'


const Button = () => {
     
    const [clicked,setClicked] = useState(false);


     useEffect( () => {
         console.log('Me clickeaste', clicked);
     });
    
    const handleClick = () => {
        setClicked(true)
    }
        
    

    return (
        <div>
            <button onClick={handleClick} >Soy un boton</button>
        </div>
    )
}

export default Button
