import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { newUser } from "../store/slices/userName.slice"
import { useNavigate } from "react-router-dom"

const Raiz = () => {

    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const userName = useSelector(state => state.userName)
    const navigate = useNavigate()

    const handleSubmit = () => {

        dispatch(newUser(name))

        if (userName !== "") {
            return navigate("/pokedex")
        }
    }


    return(
        <section className="sec-raiz">
            <h1 className="title-raiz">Welcome, enter your name to start the adventure.</h1>

            <img src={"/img/pulsera.png"} className="img-raiz"/>

            <div className="div-raiz_input">
                <input
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                className="input-raiz"
                />

                <button onClick={handleSubmit} className="btn-raiz">
                <svg className="svg-raiz" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94a60.519 60.519 0 0 0 18.445-8.986a.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z"/></svg>
                </button>
            </div>
        </section>
    )
}

export default Raiz