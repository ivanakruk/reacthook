import { useState, useEffect } from "react";
import { useHistory } from "react-router"


const Register = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [name,setName] = useState('');
    const [lastname,setLastName] = useState('');
    const [age,setAge] = useState(0);

   
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    } 
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleChangeAge = (e) => {
        setAge(e.target.value);
    }
    
    

    const history = useHistory();

    const onRegister = async () => {

        try {
            const response =await fetch('https://back-sandbox.herokuapp.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password, name, lastname, age})
            });

            console.log(response);
            
            if(response.status ===200){ 
                setError(false)
                const json = await response.json();
                console.log(json);
                alert('Te registraste');

                history.push('/login'); 
            }else{
                setError(true);
            }
          

        } catch (error) {
            alert(error)
        }

        
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token){
            history.push('/products');
        }
      
    }, []);

    return (
        <div>
            
            <h1>Registrate!</h1>
            <form style={{display:'flex', flexDirection: 'column'}} >
                <input placeholder='Nombre' onChange={handleChangeName} type='text' value={name}/>
                <input placeholder='Apellido' onChange={handleChangeLastName} type='text' value={lastname}/>
                <input placeholder='Edad' onChange={handleChangeAge} type='number' value={age}/>
                <input placeholder='Email' onChange={handleChangeEmail} type='text' value={email} />
                <input placeholder='Contraseña' onChange={handleChangePassword} type='text' value={password}/> 
                {error && <p style={{color:'red'}} >Campos incompletos o invalidos</p>}         
                <button type='button' onClick={onRegister}>Registrate</button>
           
            </form>
        </div>
    )
}

export default Register
