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

      <main className='angled-gradient'>
        <div>
          <div>
            <h1 style={{ background: 'red', maxWidth: '100%', maxHeight: '300px' }} id='titulo'>Los mejores Shows  TvMaze</h1>
            <SectioOne
              key={peli.id}
              title={peli.name}
              summary={peli.summary}
              image={peli.image?.original}
            />
          </div>
          <div>

            <SectionTwo
              peliId={peli.id}
            />
            <SectionThree />

          </div>
        </div>
      </main>

    </>

  )
}

export default About
