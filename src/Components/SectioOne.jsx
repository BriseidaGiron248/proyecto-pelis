import React from 'react'

const SectioOne = ({ title, summary, image }) => {
  return (

    <div id='contenedor1' className='shadow-lg p-3 mb-5 bg-white-opacity rounded'>

      <div className='flex-container'>
        <div id='caja'>
          <img style={{ borderRadius: '25px' }} src={image} alt={title} />

        </div>
        <h1 id='titulodescription' style={{ color: 'white' }}>{title} <div dangerouslySetInnerHTML={{ __html: [summary] }} /></h1>
      </div>

    </div>
  )
}

export default SectioOne
