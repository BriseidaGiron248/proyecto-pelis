import React from 'react'

const CastCard = ({ name, character, image }) => {
  return (
    <>
      <div className='album py-5 bg-gradient'>
        <div className='container'>
          <div className='col'>
            <div className='card shadow-sm'>
              <img src={image} alt={name} style={{ objectFit: 'contain', maxHeight: '300px' }} />

              <div className='card-body'>
                <h1 style={{ fontSize: '2vw' }} className='text-truncate'>Nombre real: {name}
                  <h1 style={{ color: 'red', fontSize: '1.5vw' }}>Personaje: {character}</h1>
                </h1>
                <div className='d-flex justify-content-between align-items-center' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CastCard
