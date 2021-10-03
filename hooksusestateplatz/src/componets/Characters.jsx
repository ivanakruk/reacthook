import { useState, useEffect } from "react"
import './character.css'

export const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
   
    }, []);

    
    return (
        <div className= 'Characters'>
           
            {characters.map(character => (
            <div className= 'card'>
                <h2>{character.name}</h2>
                <h3>{character.gender}</h3>
                <img src={character.image} alt="foto"/>
            </div>
            ))}          
           
          
        </div>
    )
}

export default Characters;