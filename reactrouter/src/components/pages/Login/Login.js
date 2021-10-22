/* import { Link } from "react-router-dom" */
import { useState } from "react";
import { useHistory } from "react-router"


const Login = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const history = useHistory();

    const onLogin = async () => {

        try {
            const response =await fetch('https://back-sandbox.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            console.log(response);
            
            if(response.status !==200){
                const json = await response.json();
                console.log(json);
                history.push('/products'); 
            }else{
                alert('che le pifiaste');
            }
          

        } catch (error) {
            alert(error)
        }

        
    }

    return (
        <div>
            
            <h1>Soy Login</h1>
            <form>
                <input  onChange={handleChangeEmail} type='text' value={email} />
                <input onChange={handleChangePassword} type='text' value={password} />
                <button type='button' onClick={onLogin}>Login</button>
                  {/*  <Link to='/products'>Login</Link> */}
            </form>
        </div>
    )
}

export default Login
