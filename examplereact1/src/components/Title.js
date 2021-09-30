// 2 tipos de import, por default que me deja usarlo solo una vez
// y ser llamado con otro nombre mientras se utilice de la carpeta en donde se encuentra
// *** Y EL otro por constantes en el que podemos llamar varias a usar
//import Title , {Title1, Title2} from './components/Title';
//
// El que vamos a utilizar va a ser por default


const Title = ( ) => {
    return (
        <h1>Soy un título default</h1>
    );
}

export default Title;

/* export const Title1 = () => {
    return ( 
        <h1> Soy un título constante?</h1>
    )
}

export const Title2 = () => {
    return ( 
        <h2> Soy un h2 constante?</h2>
    )
} */

//