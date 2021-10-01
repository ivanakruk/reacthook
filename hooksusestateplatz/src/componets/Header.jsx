import { useState } from "react"



export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = () =>{
        setDarkMode(!darkMode);
    }

    return (
        <div className= 'Header' >
             <div >
              <h1>ReactHooks</h1>
                <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>   
             </div>
            
        </div>
    )
}

export default Header;

