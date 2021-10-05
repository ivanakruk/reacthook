import { useState } from "react";
import Card from "../card/Card";
import axios from "axios"; 

const Get = () => {
    
    const [users, setUsers] = useState([]);
    const baseURL = 'https://rickandmortyapi.com/api/character';

     
    const getUsers = async () => {

        try {
            const response = await axios.get(baseURL);
            setUsers(response.data.results);
        } catch (error) {
            alert(error)    
        }

     /*    try {
            const response = await fetch (`${baseURL}`);
            const json = await response.json();
            setUsers(json.results);
        } catch (error) {
            alert(error)
        } */
    }
     return (
         <div className= 'characters-button'>
             {users.map( (u,i) =>  <Card key={i} { ... u}/> )}                                   
            <button className='showButton' onClick= {getUsers} type= 'button'>Mostrar personajes</button>
             
         </div>
     )   
} 

 export default Get; 