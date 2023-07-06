const SerieCard = ({ title, image, description, genero, id }) => {
  const handleButtonClick = () => {
    const url = `./about/${id}`
    window.open(url)
  }
  return (
    <>
      <main>
        <div className='album py-5 bg-gradient'>
          <div className='container'>
            <div className='col'>
              <div className='card shadow-sm'>
                <img src={image} alt={title} style={{ objectFit: 'cover', maxHeight: '300px' }} />

                <div className='card-body'>
                  <h1 className='text-truncate'>{title}</h1>
                  <h3 className='text-truncate'>{genero}</h3>
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
