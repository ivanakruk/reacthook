//useState 
import { useState } from 'react';

const ChangeTitle = () => {
    const [title, setTitle] = useState('Soy un título');
    const cambiarEstado = (newTitle) => {
        setTitle(newTitle);
        /* alert('Me tocaste dfa sdfasd!'); */
      
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick  = {() => cambiarEstado('Esto ya se cambio')}>
                cambiar titulo
                
            </button>
        </div>
    ) 
}

export default ChangeTitle