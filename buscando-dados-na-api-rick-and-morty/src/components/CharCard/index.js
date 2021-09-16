import "./styles.css"

function CharCard({name, image, status}){

    if(name.length >= 15){
        name = name.slice(0, 14)
        name += "..."
    }

    return (
        <div className={`cardDiv ${status}`}>
            <p className="cardDiv__p">{name}</p>
            <img className="cardDiv__img" src={image} alt={name}/>
        </div>
    )
}

export default CharCard