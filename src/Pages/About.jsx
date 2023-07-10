import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SectioOne from '../Components/SectioOne'
import SectionTwo from '../Components/SectionTwo'

const About = () => {
  const [peli, setPeli] = useState({})
  const [temp, setTemp] = useState({})
  const { peliId } = useParams()

  useEffect(() => {
    Promise.all([
      fetch(`https://api.tvmaze.com/shows/${peliId}`),
      fetch(`https://api.tvmaze.com/shows/${peliId}/episodes`)
    ])
      .then(([resPelis, resTemp]) =>
        Promise.all([resPelis.json(), resTemp.json()])
      )
      .then(([dataPeli, dataTemp]) => {
        setPeli(dataPeli)
        setTemp(dataTemp)
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
            <SectionTwo
              name={temp.name}
              id={temp.id}

            />
          </div>
        </div>
      </main>

    </>

  )
}

export default About
