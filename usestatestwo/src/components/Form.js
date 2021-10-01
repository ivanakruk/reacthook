import { useState } from "react"


const Form = () => {

    const [name, setName] = useState (''); // el useState le da un valor a name, y el setter se lo modifica
    const [lastName, setLastName] = useState ('');
    const [age, setAge] = useState (0);
    const [country, setCountry] = useState ('');
    const [accept, setAccept] = useState(false);

    const handleChangeName = (e) => { // hacemos una funcion para que pueda cambiar los inputs cuando sean utilizados
        setName(e.target.value);
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleChangeAge = (e) => {
        setAge(e.target.value);
    }
    const handleChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const handleCheck = (e) => {
        setAccept(e.target.checked);
    }

    const handleClick = () => {
        alert(`Mi nombre es ${name} ${lastName}, tengo ${age} años y vivo en ${country}`)
    }


    return (
        <div>
            <input className='form-input' onChange= {handleChangeName} type='text' value= {name} placeholder= 'Nombre' />
            <input className='form-input' onChange= {handleChangeLastName} type='text' value= {lastName} placeholder= 'Apellido' />
            <input className='form-input' onChange= {handleChangeAge} type='number' value= {age} placeholder= 'Edad' />
            <select className='form-input' onChange= {handleChangeCountry} value= {country}>
                <option defaultChecked disabled value= '' >Elegir provincia:</option>
                <option  value= 'Buenos Aires' >Buenos Aires</option>
                <option  value= 'Cordoba' >Cordoba</option>
                <option  value= 'Santa fé' >Santa fé</option>
                <option  value= 'Entre Rios' >Entre Rios</option>
            </select>

            <div className='form-terminos' >
                <label htmlFor='accept' >Acepto términos y condiciones</label>                
                <input onChange= {handleCheck} type='checkbox' value= {accept}/>
            </div>

            <button onClick= {handleClick} disabled={!accept} type='button'>Enviar</button>
           
        </div>
    )
 //si acepto terminos no esta chequeado no me deja enviar

} 

export default Form;