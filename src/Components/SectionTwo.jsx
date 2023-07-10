import React, { useState, useEffect } from 'react'

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
    <div className='container'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Handle</th>
        </tr>
      </thead>

      {

          epi.map((item) => (

            <table key={item.id} id='tabla' style={{ marginBottom: '0rem' }}>
              <tbody>
                <tr>
                  <th scope='row' style={{ maxWidth: '30px' }}>{item.number}</th>
                  <td style={{ maxWidth: '15px' }}>{item.season}</td>
                  <td style={{ width: '250px' }}>{item.name}</td>
                  <td><div style={{ Width: '450px' }} dangerouslySetInnerHTML={{ __html: [item.summary] }} /></td>
                </tr>
              </tbody>
            </table>
          ))
        }
    </div>

  )
}

export default SectionTwo
