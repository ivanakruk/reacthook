

const Card = ({name,gender,image}) => {
    return (
      <div className='characters-card'>
        <h5> Nombre:  {name} </h5>
        <h5> Genero: {gender}</h5>     
        <img src={image} alt='foto'/>   
      </div>  
       
    )
}

export default Card;