import React from 'react'

const NavBar = ({ handleSearchChange }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Buscar titulo...'
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default NavBar
