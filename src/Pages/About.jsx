import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const [peli, setPeli] = useState({})
  const { peliId } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${peliId}`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        setPeli(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [peliId])

  return (
    <>
      <header>
        <h1>Tv Maze <h2>Las Peliculas que buscabas</h2></h1>
      </header>
      <main>
        <section className='row' style={{ display: 'flex' }}>
          <section className='small-12 medium-8 columns row'>
            {peli.summary}
          </section>
          <section>
            <img src={peli.image.original} alt={peli.name} style={{ objectFit: 'cover', maxHeight: '300px' }} />
          </section>
        </section>
      </main>
    </>

  )
}

export default About
