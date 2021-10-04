import { useState } from "react";
import './form.css'
const Form = () =>{

    const [name, setName] = useState('');

    const handleChangeName  = (e )=> {
        setName(e.target.value);
    }

    return(
        <div className= 'container-form'>
            <input onChange={handleChangeName} value={name} type= 'text' />
            <button type='button'>Buscar</button>
            
        </div>
    )
}

export default Form;