import React from 'react'

const Inicio = ({ title, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>Hola{title}</h1>

    </div>
  )
}

export default Inicio
