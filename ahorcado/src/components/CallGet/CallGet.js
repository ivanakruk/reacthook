
import { useState, useEffect } from "react";
import React from 'react'

const CallGet = () => {

    const baseURl = 'https://back-sandbox.herokuapp.com/api';
 

    const iniciarJuego = async () =>{
        
        try {
            const response = await fetch (`${baseURl}/hanged-game/start`, {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY3OTQxNGVmYmQ2MDAwNDg2ZWQ1NyIsImlhdCI6MTYzMzkwOTQ1Nn0.ewNIsqq0w5Y7P9e0y21MtDDNlqoLvwNptfQHIUTeWVI"
                }
            })
            const json = await response.json();
            console.log(json);
        } 
        catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <button onClick={iniciarJuego}>Iniciar juego</button>
         {/*    <input type="text" onChange={}/>
            <button onClick={}>Enviar letra</button>
            <h1>{}</h1>
            <h1>{}</h1> */}
        </div>
    )
}


export default CallGet;