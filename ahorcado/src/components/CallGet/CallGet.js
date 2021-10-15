
import { useState, useEffect } from "react";
import React from 'react'
import ShowCharacters from "../ShowCharacters/ShowCharacters";

const CallGet = () => {

    const baseURl = 'https://back-sandbox.herokuapp.com/api';
    const [letra,setLetra] = useState('');
    const [matcheds,setMatcheds] = useState([]);
    const [letrasErroneas, setLetrasErroneas] = useState([]);
    const [word, setWord]  = useState([]);

    useEffect(() => {
        /* const localToken = localStorage.getItem('token'); */
        document.title = `You clicked ${matcheds} times`;
    });


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
            const response = await fetch (`${baseURl}/hanged-game/try`,
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
            setMatcheds(json.data.matcheds);
            
            setLetrasErroneas(json.data.wrongLetters);
            setWord(json.data.word);
          
         
        } catch (error) {
            alert(`${error} error letra`);
        }


    }

    return (
        <div>
            <button  onClick ={iniciarJuego}>Iniciar juego</button>
            <input type="text" onChange={onChangeLetter} />
            <button onClick={enviarLetra}>Enviar letra</button>
            <div style={{display:'flex'}}>
                {matcheds.map( (m,i) => {
                    return <ShowCharacters character={m} key={i} />
                })}
            </div>
            <p>cantidad intentos:{setWord.attempsMade}</p>            
            <h2>Letras erroneas : {letrasErroneas}</h2>
            <h2>{word}</h2>           
         </div>
    )
}


export default CallGet;