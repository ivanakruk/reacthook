/* import { Link } from "react-router-dom" */
import { useState, useEffect } from "react";
import { useHistory } from "react-router"
import { instance } from "../../axios/axios";

const Login = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token){
            history.push('/products');
        }
      
    }, []);
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const history = useHistory();

    const onLogin = async () => {

        try {
            const response =await instance.post('/auth/login', {email, password});

            console.log(response);
            
            if(response.status ===200){ /* si esta bien la llamada guardo el token en localstorage y lo mando a la pag */
                setError(false);
                console.log(response.data);
                localStorage.setItem('token', response.data.token);

                history.push('/products'); 
            }else{
                setError(true);
            }
          

        } catch (error) {
            alert(error)
        }

        
    }

    const onRegister =() => {
        history.push('/register')
    }

    return (
        <div>
            
            <h1>Soy Login</h1>
            <form style={{display:'flex', flexDirection: 'column'}} >
                <input  onChange={handleChangeEmail} type='text' value={email} />
                <input onChange={handleChangePassword} type='text' value={password} />
                {error && <p style={{color:'red'}} >Email o contraseña invalidos</p>}
                <button type='button' onClick={onLogin}>Login</button>
                <small  style={{color:'blue'}} onClick={onRegister} >Registrate</small>
                  {/*  <Link to='/products'>Login</Link> */}
            </form>
        </div>
    )
}

export default Login
