

export const Card = ({id,email, first_name, last_name, avatar}) => {
    return (
      <div>
            <b>Id: {id}</b>
            <p>Email: {email}</p>
            <p>{first_name} {last_name}</p>  
            <img src={avatar} alt='foto' />        
        </div>
    )
}

export default Card