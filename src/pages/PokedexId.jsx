import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PokedexId = () => {

    const {id} = useParams()

    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(() => {
        axios 
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resp => setPokeInfo(resp.data))
            .catch(error => console.log(error))
    })

    return(
        <section className="sec-pokedexid">

            <div className="div-pokedexid_info">
                <img className="img-pokedexid" src={pokeInfo.sprites?.front_default} />
                <h2 className="name">{pokeInfo.name}</h2>
                <div className="div-pokedexid_info2">
                    <p className="p-pokedexid">weight: <span className="span-pokedexid">{pokeInfo.weight}</span></p>
                    <p className="p-pokedexid">#<span className="span-pokedexid">{pokeInfo.id}</span></p>
                    <p className="p-pokedexid">height: <span className="span-pokedexid">{pokeInfo.height}</span></p>
                </div>    
            </div>

            <div className="container-pokedexid">
                <div className="div-pokedex_type">
                    <h2 className="type">Type</h2>
                    <ul className="ul-pokedexid1">
                        {
                            pokeInfo.types?.map((type) => (
                                <li className="li-pokedexid" key={type.type.url}>
                                    {type.type.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="div-pokedex_move">
                    <h2 className="move">Movements</h2>
                    <ul className="ul-pokedexid2">
                        {
                            pokeInfo.moves?.map((move) => (
                                <li className="li-pokedexid2" key={move.move.url}>
                                    {move.move.name}
                                    <hr />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <Link className="Link-pokedexid" to="/pokedex">
            <p>volver</p>
            <svg className="svg-pokedexid" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><g transform="translate(512 0) scale(-1 1)"><path fill="currentColor" d="M269.03 14.47c-110.473 1.825-290.752 92.88-243.5 450.5c0-210.674 118.628-315.626 181.814-315.626c41.72 0 70.595 34.945 73.812 102.75h-40.592l7.218 13.687l114.94 218.283l8.25 15.687l8.28-15.688l114.938-218.28l7.218-13.688H441.97C438.38 104.607 361.12 15.24 274.25 14.47c-1.717-.017-3.465-.03-5.22 0zm-4.592 44.593c85.555-1.117 146.173 75.667 148.687 211.718h57.313L371 459.657L271.53 270.78h65.595c-2.322-140.208-60.25-201.84-171.72-180.25c35.16-20.848 68.674-31.07 99.032-31.468z"/></g></svg>
            </Link>
        </section>
    )
}

export default PokedexId