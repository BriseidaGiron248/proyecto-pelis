import React, { useState, useEffect } from 'react'
import Barra from './Barra'

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
    <div className='flex-container'>
      <div className='container'>
        <h1>Temporada 1</h1>
        {
      epi.map((item) => {
        if (item.season === 1) {
          return (
            <div key={item.id}>

              <div>{item.name}
              </div>
            </div>

          )
        }
      }

      )
    }
      </div>
      <div className='container'>
        <h1>Temporada 2</h1>
        {
    epi.map((item) => {
      if (item.season === 2) {
        return (
          <div key={item.id}>

            <div>{item.name}
            </div>
          </div>

        )
      }
    }

    )
  }
      </div>
      <div className='container'>
        <h1>Temporada 3</h1>
        {
    epi.map((item) => {
      if (item.season === 3) {
        return (
          <div key={item.id}>
            <div>{item.name}
            </div>
          </div>

        )
      }
    }

    )
  }
      </div>

    </div>

  )
}

export default SectionTwo
