import React from 'react'
import { useEffect } from 'react'
const Button = () => {
     
    const [clicked,setClicked] = useState(false);


     useEffect( () => {
         console.log('Hola', clicked);
     },[]);
    
    const handleClick = () => [
        setClicked(true)
    ]
    return (
        <div>
            <button onClick={handleClick} >Soy un boton</button>
        </div>
    )
}

export default Button
