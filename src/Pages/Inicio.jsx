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
    <div>
      <section className='py-5 text-center container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='fw-light'>BUSCA TU SERIE</h1>
            <NavBar handleSearchChange={handleSearch} />
          </div>
        </div>
      </section>

      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {
      filtereddata.map((peli) => (

        <SerieCard
          key={peli.id}
          title={peli.name}
          id={peli.id}
          image={peli.image.original}
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
