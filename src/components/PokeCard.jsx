import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const PokeCard = ({url}) => {

    const [info, setinfo] = useState({})

    useEffect(() => {
        axios 
            .get(url)
            .then(resp => setinfo(resp.data))
            .catch(error => console.log(error))
    })

    return (
        <Link className="Link-pokecard" to={`/pokedex/${info.id}`}>
            <div className={info.types?.[0]?.type?.name}> 
                <h1 className="title-pokecard">{info.name}</h1>
                <hr />
                <img className="img-pokecard" src={info.sprites?.front_default} />
                <hr />
                <div className="div-pokecard">
                    <p className="p-pokecard">Type: <span className="span-pokecard">{info.types?.[0]?.type?.name}</span></p>
                </div>
                <div className="div-pokecard">
                    <p className="p-pokecard">Hp: <span className="span-pokecard">{info.stats?.[0]?.base_stat}</span></p>
                </div>
                <div className="div-pokecard">
                    <p className="p-pokecard">Attack: <span className="span-pokecard">{info.stats?.[1]?.base_stat}</span></p>
                </div>
                <div className="div-pokecard">
                    <p className="p-pokecard">Defense: <span className="span-pokecard">{info.stats?.[2]?.base_stat}</span></p>
                </div>
                <div className="div-pokecard">
                    <p className="p-pokecard">Speed: <span className="span-pokecard">{info.stats?.[5]?.base_stat}</span></p>
                </div>
            </div>
        </Link>
        
    )
}

export default PokeCard