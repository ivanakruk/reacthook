
import { useState, useEffect } from "react";
import React from 'react'

const CallGet = () => {

    const baseURl = 'https://back-sandbox.herokuapp.com/api';
    const [letra,setLetra] = useState('');
    const onChangeLetter = (e) => {
        setLetra(e.target.value);
    }

    const iniciarJuego = async () =>{
        
        try {
            const response = await fetch (`${baseURl}/hanged-game/start`, {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY3OTQxNGVmYmQ2MDAwNDg2ZWQ1NyIsImlhdCI6MTYzMzk2NDYzMX0.RlKAAFAa1OGvwIqhHTTTp_tAq1gxyohDj_pbw3FMRzE"
                }
            })
            const json = await response.json();
            console.log(json.data);
        } 
        catch (error) {
            alert(error)
        }
    }

    const enviarLetra = async () =>
    
    {
        try {
            const response = await fetch (`https://back-sandbox.herokuapp.com/api/hanged-game/try`,
            {
                method:'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY3OTQxNGVmYmQ2MDAwNDg2ZWQ1NyIsImlhdCI6MTYzMzk2NDYzMX0.RlKAAFAa1OGvwIqhHTTTp_tAq1gxyohDj_pbw3FMRzE"
                },
                body: JSON.stringify({"text": letra})
            })
            const json = await response.json();
            console.log(json);
         
        } catch (error) {
            alert(`${error} error letra`);
        }


    }

    return (
        <div>
            <button onClick={iniciarJuego}>Iniciar juego</button>
            <input type="text" onChange={onChangeLetter} />
            <button onClick={enviarLetra}>Enviar letra</button>
           
        </div>
    )
}


export default CallGet;