import { Route, Routes } from 'react-router-dom'
import Inicio from '../Pages/Inicio'
import About from '../pages/About'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/about/:peliId' element={<About />} />
    </Routes>
  )
}

export default RoutesIndex
