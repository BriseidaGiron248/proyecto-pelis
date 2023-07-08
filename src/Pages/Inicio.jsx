import { useState, useEffect } from 'react'
import SerieCard from '../Components/SerieCard'
import NavBar from '../Components/NavBar'

const Inicio = () => {
  const [pelis, setPelis] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filtereddata = pelis.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setPelis(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])
  return (

    <div style={{ background: 'black' }}>
      <section className='py-5 text-center container' style={{ background: 'red', maxWidth: '100%', maxHeight: '300px' }}>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h2 className='fw-light' style={{ fontFamily: 'fantasy', fontSize: '60px' }}>BUSCA TU SERIE</h2>
            <NavBar handleSearchChange={handleSearch} />
          </div>
        </div>
      </section>

      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {
          filtereddata.map((peli) => (

            <SerieCard
              id={peli.id}
              key={peli.id}
              title={peli.name}
              image={peli.image.original}
              genero={peli.genres}

            />

          ))
          }

      </div>
      <footer className='text-muted py-5'>
        <div className='container'>
          <p className='float-end mb-1'>
            <a href='#'>Back to top</a>
          </p>
        </div>
      </footer>
    </div>

  )
}

export default Inicio
