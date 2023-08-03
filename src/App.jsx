import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Pages
import Raiz from './pages/Raiz'
import Pokedex from './pages/Pokedex'
import PokedexId from './pages/PokedexId'

// Components
import Protected from './components/Protected'
import Loader from './components/loeader'

function App() {

  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(!true)
  }, 3000)


  return (
    <>
      {loader && <Loader/>}

      <HashRouter>
        <Routes>
          <Route path='/' element={<Raiz/>}/>

          <Route element={<Protected/>}>
            <Route path='/pokedex' element={<Pokedex/>} />
            <Route path='/pokedex/:id' element={<PokedexId/>} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
