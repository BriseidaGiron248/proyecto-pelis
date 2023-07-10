import React, { useState, useEffect } from 'react'
import EpiCard from './EpiCard'

const SectionTwo = ({ peliId }) => {
  const [epi, setEpi] = useState([])

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
    <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

        {

    epi.map((item) => (

      <EpiCard
        KEY={item.id}
        number={item.number}
        title={item.name}
        season={item.season}
        summary={item.summary}
        image={item.image?.original}
      />
    ))
  }
      </div>
    </div>

  )
}

export default SectionTwo
