import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectioOne from '../Components/SectioOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'

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
      <>
        <nav id='navbar-example2' className='navbar navbar-light bg-light'>
          <a className='navbar-brand' href='#' />
          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <a className='nav-link' href='#Resumen'>
                Resumen
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#Episodios'>
                Episodios
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#Reparto'>
                Reparto
              </a>
            </li>
          </ul>
        </nav>

      </>

      <main className='angled-gradient'>
        <div>

          <div id='Resumen'>
            <h1 style={{ background: 'red', maxWidth: '100%', maxHeight: '300px' }} id='titulo'>Los mejores Shows  TvMaze</h1>
            <SectioOne
              key={peli.id}
              title={peli.name}
              summary={peli.summary}
              image={peli.image?.original}
            />
            <footer className='text-muted py-5'>
              <div className='container'>
                <p className='float-end mb-1'>
                  <a href='#'>Volver Arriba</a>
                </p>
              </div>
            </footer>
          </div>

          <div id='Episodios'>
            <h1 style={{ background: 'red', maxWidth: '100%', maxHeight: '150px' }} id='titulo'>Episodios</h1>
            <SectionTwo
              peliId={peli.id}
            />
            <footer className='text-muted py-5'>
              <div className='container'>
                <p className='float-end mb-1'>
                  <a href='#'>Volver Arriba</a>
                </p>
              </div>
            </footer>
          </div>

          <div id='Reparto'>

            <h1 style={{ background: 'red', maxWidth: '100%', maxHeight: '150px' }} id='titulo'>Reparto</h1>
            <SectionThree
              peliId={peli.id}
            />
            <footer className='text-muted py-5'>
              <div className='container'>
                <p className='float-end mb-1'>
                  <a href='#'>Volver Arriba</a>
                </p>
              </div>
            </footer>

          </div>

        </div>
      </main>

    </>

  )
}

export default About
