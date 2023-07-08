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
      <body className='angled-gradient'>
        <main>
          <div>
            <div style={{ padding: '50px' }}>
              <h1 id='titulo'>Los mejores Shows  TvMaze</h1>
            </div>
            <div id='contenedor1' className='shadow-lg p-3 mb-5 bg-white-opacity rounded'>
              <div className='flex-container'>
                <img style={{ maxHeight: '400px', paddingLeft: '50px' }} src={peli.image.original} alt={peli.name} />
              </div>
              <h1 id='titulodescription' style={{ color: 'white' }}>{peli.name} <p>{peli.summary}</p></h1>
            </div>
          </div>
        </main>
      </body>
    </>

  )
}

export default About
