

import { useState } from 'react';

const ActionButton = () => {
    const [title, setTitle] = useState('Soy un título');
    const [title1, setTitle1] = useState('Soy un título1');
    const cambiarEstado = (newTitle) => {
        setTitle(newTitle);
        setTitle1('soy el segundo titulo cambiado');
        /* alert('Me tocaste dfa sdfasd!'); */
      
    }

    return (
        <div>
            <h1>{title}</h1>
            <h1>{title1}</h1>
            <button onClick  = {() => cambiarEstado('Esto ya se cambio')}>
                cambiar titulo
                
            </button>
        </div>
    ) 
}
console.dir(ActionButton)
export default ActionButton;
