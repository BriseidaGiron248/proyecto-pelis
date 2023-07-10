import React from 'react'

const EpiCard = ({ title, image, summary, season, number }) => {
  return (
    <>
      <div className='album py-5 bg-gradient'>
        <div className='container'>
          <div className='col'>
            <div className='card shadow-sm'>
              <img src={image} alt={title} style={{ objectFit: 'cover', maxHeight: '300px' }} />

              <div className='card-body'>
                <h1 className='text-truncate'>Episodio {number} <h1 style={{ color: 'red' }}>{title}</h1></h1>
                <h2>Temporada{season}</h2>
                <p dangerouslySetInnerHTML={{ __html: [summary] }} />
                <div className='d-flex justify-content-between align-items-center' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EpiCard
