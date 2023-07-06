const SerieCard = ({ title, image, description, genero, id }) => {
  const handleButtonClick = () => {
    const url = `./about/${id}`
    window.open(url)
  }
  return (
    <>
      <main>
        <div className='album py-5 bg-light'>
          <div className='container'>
            <div className='col'>
              <div className='card shadow-sm'>
                <img src={image} alt={title} />

                <div className='card-body'>
                  <h1>{title}</h1>
                  <h2>{genero}</h2>
                  <h3>{id}</h3>
                  <p className='card-text'>
                    <description />
                  </p>

                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>

                      <button
                        type='button'
                        className='btn btn-sm btn-outline-secondary'
                        onClick={handleButtonClick}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SerieCard
