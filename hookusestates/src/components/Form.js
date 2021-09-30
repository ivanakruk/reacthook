import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [accept, setAccept] = useState(false);

    const handleChangeName  = (e) => {
        console.log(e);
        setName(e.target.value);
    }

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    }

    const handleClick = () => {
        alert(`Hola mi nombre es ${name} y mi edad es de ${age} años`);//dddfsdf
    }

    const handleChangeCountry = (e) => {
        console.log(e.target.value);
        setCountry(e.target.value);
    }
    
    const handleCheck = (e) => {
        setAccept(e.target.checked);
    }

    return (        
        <div>
            <input onChange= {handleChangeName} type='text' placeholder='Name' value = {name} />
            <input onChange= {handleChangeAge} type='number' placeholder='Age'  value = {age} />            
            <select onChange= {handleChangeCountry} value={country}>
                <option defaultChecked disabled value='' >Select Country</option>
                <option value='ARG' >Argentina</option>
                <option value='USA' >Estados Unidos</option>
            </select>
            <div>
                <label htmlfor= 'accept'>Acepto términos y condiciones</label>
                <input onChange={handleCheck} type='checkbox' checked= {accept}/>
            </div>
            
            <button disabled= {!accept} onClick={handleClick} type='button' >ClickME</button>
        </div>
    )
}

export default Form;