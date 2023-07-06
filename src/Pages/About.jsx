import React, { useState, useEffect } from 'react'
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
    <div>TITULO:{peli.name}</div>
  )
}

export default About
