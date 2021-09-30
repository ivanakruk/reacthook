const Button = (props) => { 
    const handleClick= ()=> {
        alert("Me tocaste!");
    }
    return (
        <button onClick={handleClick}  type= 'button'> {props.text} </button>
    )
}

export default Button