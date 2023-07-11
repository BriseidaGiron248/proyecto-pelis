import React, { useState, useEffect } from 'react'
import CastCard from './CastCard'

const SectionThree = ({ peliId }) => {
  const [cas, setCas] = useState([])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${peliId}/cast`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setCas(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [peliId])
  return (
    <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

        {

    cas.map((item) => (

      <CastCard
        key={item.id}
        name={item.person.name}
        character={item.character.name}
        image={item.character?.image?.original}
      />
    ))
  }
      </div>
    </div>
  )
}

export default SectionThree
