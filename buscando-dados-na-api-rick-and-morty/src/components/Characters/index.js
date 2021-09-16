import "./styles.css"
import CharCard from "../CharCard"

function Characters({list}){
    return(
        <div className="mainDiv">
            <h1 className="mainDiv__Title">Meus Personagens</h1>
            <div className="mainDiv__Characters">
                {list.map((element)=>{
                    return <CharCard key={element.id} 
                                     name={element.name}
                                     image={element.image}
                                     status={element.status}
                            />
                })}
            </div>
        </div>
    )
}

export default Characters