import { Link } from 'react-router-dom'
import './SeccionLoMasNuevo.css'

export type ProductoNuevo = {
  id: number
  nombre: string
  categoria: string
  precio: number
  tono: string
}

export const nuevosInicio: ProductoNuevo[] = [
  {
    id: 1,
    nombre: 'Blazer Estructura Navy',
    categoria: 'Kaboom Style',
    precio: 149.9,
    tono: '#0b1c2c',
  },
  {
    id: 2,
    nombre: 'Hoodie Soft Cream',
    categoria: 'Kaboom Style',
    precio: 84.9,
    tono: '#8b7355',
  },
  {
    id: 3,
    nombre: 'Body Algodón Nube',
    categoria: 'Boom Kaboom Kids',
    precio: 29.9,
    tono: '#7dd3d8',
  },
  {
    id: 4,
    nombre: 'Tenis Bounce Kids',
    categoria: 'Boom Kaboom Kids',
    precio: 54.9,
    tono: '#f5a9a0',
  },
]

export const nuevosStyle: ProductoNuevo[] = [
  {
    id: 1,
    nombre: 'Camisa Lino Graphite',
    categoria: 'Camisas',
    precio: 79.9,
    tono: '#374151',
  },
  {
    id: 2,
    nombre: 'Blazer Estructura Navy',
    categoria: 'Blazers',
    precio: 149.9,
    tono: '#0b1c2c',
  },
  {
    id: 3,
    nombre: 'Jean Straight Wash',
    categoria: 'Jeans',
    precio: 89.9,
    tono: '#1e3a5f',
  },
  {
    id: 4,
    nombre: 'Botín Cuero Cocoa',
    categoria: 'Zapatos',
    precio: 129.9,
    tono: '#6b4f3a',
  },
]

export const nuevosKids: ProductoNuevo[] = [
  {
    id: 1,
    nombre: 'Body Algodón Nube',
    categoria: 'Bebé',
    precio: 29.9,
    tono: '#7dd3d8',
  },
  {
    id: 2,
    nombre: 'Conjunto Pastel Play',
    categoria: 'Conjuntos',
    precio: 45.9,
    tono: '#f5a9a0',
  },
  {
    id: 3,
    nombre: 'Sudadera Boom Soft',
    categoria: 'Sudaderas',
    precio: 39.9,
    tono: '#f0d56e',
  },
  {
    id: 4,
    nombre: 'Tenis Bounce Kids',
    categoria: 'Zapatillas',
    precio: 54.9,
    tono: '#c4a8e8',
  },
]

type SeccionLoMasNuevoProps = {
  productos?: ProductoNuevo[]
  descripcion?: string
  enlace?: string
  textoEnlace?: string
  variante?: 'inicio' | 'style' | 'kids'
}

function formatoPrecio(valor: number) {
  return valor.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })
}

function SeccionLoMasNuevo({
  productos = nuevosInicio,
  descripcion = 'Recién llegados para renovar tu estilo esta temporada.',
  enlace = '/kaboom-style',
  textoEnlace = 'Explorar',
  variante = 'inicio',
}: SeccionLoMasNuevoProps) {
  return (
    <section
      className={`seccion-nuevo seccion-nuevo--${variante}`}
      aria-labelledby={`seccion-nuevo-titulo-${variante}`}
    >
      <div className="seccion-nuevo__cabecera">
        <div>
          <h2 id={`seccion-nuevo-titulo-${variante}`}>Lo más nuevo</h2>
          <p>{descripcion}</p>
        </div>
        <Link to={enlace} className="seccion-nuevo__ver-todas">
          {textoEnlace}
        </Link>
      </div>

      <ul className="seccion-nuevo__grid">
        {productos.map((producto) => (
          <li key={producto.id}>
            <article className="seccion-nuevo__card">
              <div
                className="seccion-nuevo__media"
                style={{ background: producto.tono }}
              >
                <span className="seccion-nuevo__etiqueta">Nuevo</span>
              </div>
              <div className="seccion-nuevo__info">
                <span className="seccion-nuevo__categoria">
                  {producto.categoria}
                </span>
                <h3>{producto.nombre}</h3>
                <div className="seccion-nuevo__precios">
                  <span className="seccion-nuevo__precio">
                    {formatoPrecio(producto.precio)}
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

export default SeccionLoMasNuevo
