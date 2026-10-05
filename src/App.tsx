import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Inicio from './pages/Inicio/Inicio'
import KaboomStyle from './pages/KaboomStyle/KaboomStyle'
import BoomKaboomKids from './pages/BoomKaboomKids/BoomKaboomKids'
import Ofertas from './pages/Ofertas/Ofertas'
import QuienesSomos from './pages/QuienesSomos/QuienesSomos'
import Carrito from './pages/Carrito/Carrito'
import Internas from './pages/Internas/Internas'
import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/kaboom-style" element={<KaboomStyle />} />
          <Route path="/boom-kaboom-kids" element={<BoomKaboomKids />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/internas" element={<Internas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
