import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "../components/PokeCard";

const Pokedex = () => {

    const [types, setTypes] = useState([])
    const [option, setOption] = useState("")
    const random = Math.floor(Math.random()*18) +1

    const [pages, setPaget] = useState(1)
    const pokemonsForPage = 10
    const lastIndex = pokemonsForPage * pages
    const firtsindex = lastIndex - pokemonsForPage
    const pokemonsPage = types.slice(firtsindex, lastIndex)
    const total = Math.ceil(types?.length / pokemonsForPage)
    const pagesArray = []

    for (let i = 1; i <= total; i++) {
        pagesArray.push(i)
    }

    useEffect(() => {
        axios 
            .get(`https://pokeapi.co/api/v2/type/${random}/`)
            .then(resp => {setTypes(resp.data.pokemon)})
            .catch(error => console.log(error))
    }, [])

    const typeOfPoke = () => {
        axios 
            .get(`https://pokeapi.co/api/v2/type/${option}`)
            .then(resp => {setTypes(resp.data.pokemon)})
            .catch(error => console.log(error))
    }

    const userName = useSelector(state => state.userName)

    return (
        <section className="sec-pokedex">
            <h1 className="title-pokedex">Hello {userName}!, here you will find your favorite pokemon.</h1>

            <div className="div-pokedex">
                <select className="sel-pokedex" value={option} onChange={e => setOption(e.target.value)}>
                    <option value="/">Find the type you like</option>
                    <option value="normal/">Normal</option>
                    <option value="fighting/">Fighting</option>
                    <option value="flying/">Flying</option>
                    <option value="poison/">Poison</option>
                    <option value="ground/">Ground</option>
                    <option value="rock/">Rock</option>
                    <option value="bug/">Bug</option>
                    <option value="ghost/">Ghost</option>
                    <option value="steel/">Steel</option>
                    <option value="fire/">Fire</option>
                    <option value="water/">Water</option>
                    <option value="grass/">Grass</option>
                    <option value="electric/">Electric</option>
                    <option value="psychic/">Psychic</option>
                    <option value="ice/">Ice</option>
                    <option value="dragon/">Dragon</option>
                    <option value="dark/">Dark</option>
                    <option value="fairy/">Fairy</option>
                </select>
                <button className="btn-pokedex" onClick={typeOfPoke}>
                <svg className="svg-pokedex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z"/></svg>
                </button>
            </div>

            <ul className="ul-pokedex">
                {
                    pokemonsPage?.map(type => (
                            <PokeCard
                            key={type.pokemon.url}
                            url={type.pokemon.url}
                            />
                    ))
                }
            </ul>

            {
                pagesArray?.map(num => (
                    <button className="btn-pokedex_pages" key={num} onClick={() => setPaget(num)}>{num}</button>
                ))
            }
        </section>
    )
}

export default Pokedex