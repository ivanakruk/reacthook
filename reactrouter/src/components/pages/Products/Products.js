import { useEffect } from "react"
import { useHistory } from "react-router";
const Products = () => {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){ 
            history.push('/login');
        }
    },[]);

    const onLogout = () => {
        localStorage.clear();
        history.push('/login');
       /*  localStorage.removeItem('token'); */
    }
    return (
        <div>
        <button onClick={onLogout}>Logout</button>    
        <h1>Soy Products</h1>  
        </div>
    )
}

export default Products
