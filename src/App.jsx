import './App.css'
import { useState, useEffect } from 'react'
import Inicio from './Pages/Inicio'

function App () {
  const [pelis, setPelis] = useState('')

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setPelis(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div className='App'>
      {
      pelis.map((peli) => (
        <Inicio
          key={peli.id}
          title={peli.name}
          image={peli.image.original}
        />
      ))
    }

    </div>
  )
}

export default App
