import { Link } from 'react-router-dom'
import './SeccionOfertas.css'

const ofertas = [
  {
    id: 1,
    nombre: 'Camisa Lino Premium',
    categoria: 'Kaboom Style',
    precioAntes: 89.9,
    precioAhora: 59.9,
    descuento: 33,
    tono: '#1e3a5f',
  },
  {
    id: 2,
    nombre: 'Zapatillas Urban Boom',
    categoria: 'Calzado',
    precioAntes: 120,
    precioAhora: 79.9,
    descuento: 33,
    tono: '#c45c26',
  },
  {
    id: 3,
    nombre: 'Conjunto Kids Pastel',
    categoria: 'Boom Kaboom Kids',
    precioAntes: 65,
    precioAhora: 39.9,
    descuento: 38,
    tono: '#e11d48',
  },
  {
    id: 4,
    nombre: 'Pantalón Chino Classic',
    categoria: 'Kaboom Style',
    precioAntes: 75,
    precioAhora: 49.9,
    descuento: 33,
    tono: '#0f766e',
  },
]

function formatoPrecio(valor: number) {
  return valor.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })
}

function SeccionOfertas() {
  return (
    <section className="seccion-ofertas" aria-labelledby="seccion-ofertas-titulo">
      <div className="seccion-ofertas__cabecera">
        <div>
          <h2 id="seccion-ofertas-titulo">Ofertas</h2>
          <p>Piezas seleccionadas con precio especial por tiempo limitado.</p>
        </div>
        <Link to="/ofertas" className="seccion-ofertas__ver-todas">
          Ver todas
        </Link>
      </div>

      <ul className="seccion-ofertas__grid">
        {ofertas.map((oferta) => (
          <li key={oferta.id}>
            <article className="seccion-ofertas__card">
              <div
                className="seccion-ofertas__media"
                style={{ background: oferta.tono }}
              >
                <span className="seccion-ofertas__descuento">
                  -{oferta.descuento}%
                </span>
              </div>
              <div className="seccion-ofertas__info">
                <span className="seccion-ofertas__categoria">{oferta.categoria}</span>
                <h3>{oferta.nombre}</h3>
                <div className="seccion-ofertas__precios">
                  <span className="seccion-ofertas__precio-ahora">
                    {formatoPrecio(oferta.precioAhora)}
                  </span>
                  <span className="seccion-ofertas__precio-antes">
                    {formatoPrecio(oferta.precioAntes)}
                  </span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SeccionOfertas
