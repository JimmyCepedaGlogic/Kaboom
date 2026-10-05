import { Link } from 'react-router-dom'
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'
import './Footer.css'

const enlaces = [
  { to: '/', label: 'Inicio' },
  { to: '/kaboom-style', label: 'Kaboom Style' },
  { to: '/boom-kaboom-kids', label: 'Boom Kaboom Kids' },
  { to: '/ofertas', label: 'Ofertas' },
  { to: '/quienes-somos', label: 'Quiénes Somos' },
]

const ayuda = [
  { to: '/login', label: 'Mi cuenta' },
  { to: '/carrito', label: 'Carrito' },
  { to: '/registro', label: 'Registro' },
]

const redes = [
  { href: 'https://instagram.com', label: 'Instagram', Icon: FaInstagram },
  { href: 'https://facebook.com', label: 'Facebook', Icon: FaFacebookF },
  { href: 'https://tiktok.com', label: 'TikTok', Icon: FaTiktok },
  { href: 'https://wa.me/', label: 'WhatsApp', Icon: FaWhatsapp },
]

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__contenido">
        <div className="footer__marca">
          <p className="footer__logo">KABOOM</p>
          <p className="footer__lema">
            Vestir a grandes y chicos es un asunto de familia. Prendas con alma,
            calidad y precios honestos.
          </p>
          <div className="footer__redes">
            {redes.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer__red"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Tienda">
          <h3>Tienda</h3>
          <ul>
            {enlaces.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__nav" aria-label="Ayuda">
          <h3>Ayuda</h3>
          <ul>
            {ayuda.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contacto">
          <h3>Contacto</h3>
          <p>hola@kaboom.com</p>
          <p>+57 300 000 0000</p>
          <p>Lunes a sábado · 9:00 a.m. – 6:00 p.m.</p>
        </div>
      </div>

      <div className="footer__base">
        <p>© {anio} Kaboom. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
