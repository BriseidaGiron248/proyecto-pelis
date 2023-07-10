import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectioOne from '../Components/SectioOne'
import SectionTwo from '../Components/SectionTwo'

const About = () => {
  const [peli, setPeli] = useState({})
  const [epi, setEpi] = useState([])

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
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${peliId}/episodes`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setEpi(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [peliId])

  return (

    <>

      <main className='angled-gradient'>
        <div>
          <div>
            <h1 id='titulo'>Los mejores Shows  TvMaze</h1>
            <SectioOne
              key={peli.id}
              title={peli.name}
              summary={peli.summary}
              image={peli.image?.original}
            />
          </div>
          <div>
            {
            epi.map((item) => (
              <SectionTwo
                key={item.id}
                name={item.name}
              />
            ))
          }
          </div>
        </div>
      </main>

    </>

  )
}

export default About
