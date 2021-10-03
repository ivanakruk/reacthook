import { useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

const Fetchurl = () =>{
    
    const [users, setUsers] = useState([]);
    /* const [numbers, setNumbers] = useState([]) */

    const baseURL = 'https://reqres.in/';
    const getUsers = async () =>{
        try {

            const response = await axios.get(`${baseURL}api/users?page=2}`);
            setUsers(response.data.data);

          /*   const response = await fetch(`${baseURL}api/users?page=2}`);
            const json = await response.json();
            console.log(json.data);
            setUsers(json.data); */
        } catch (error) {
            alert(error);
        }
    };

   /*  const onSetNumbers = () => {
        setNumbers([1,2,3,4,5])
    }  */

    return(
   
        <div style = {{ height:'300px', display:'flex', border:'1px solid white'}}>
            {users.map ( (u,i) => <Card key={i} {...u} />)}
         
            {/* id={u.id} email={u.email}
            first_name={u.first_name}
            last_name={u.last_name}
            avatar= {u.avatar} />)} 
 */}

         {/*    {numbers.map( (n , i) => {
                return <div key={i}>
                
                <p>El numero es:</p>
                 <strong>{n}</strong>

                 </div>
            } )} */}
            <button onClick={getUsers} >Obtener usuarios</button>
        </div>
    )
}

export default Fetchurl ;