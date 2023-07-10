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
                <h1 style={{ fontSize: '2vw' }} className='text-truncate'>Episodio {number}
                  <h1 style={{ color: 'red', fontSize: '1.5vw' }}>{title}</h1>
                  <h2 style={{ fontSize: '1.5vw' }}>Temporada{season}</h2>
                </h1>

                <p style={{ fontFamily: 'Gill Sans' }} dangerouslySetInnerHTML={{ __html: [summary] }} />
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
