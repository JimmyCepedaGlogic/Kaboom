import type { CSSProperties } from 'react'
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'
import './HoverRedes.css'

const redes = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    Icon: FaInstagram,
    color: '#e1306c',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    Icon: FaFacebookF,
    color: '#1877f2',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://tiktok.com',
    Icon: FaTiktok,
    color: '#111111',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/',
    Icon: FaWhatsapp,
    color: '#25d366',
  },
]

function HoverRedes() {
  return (
    <aside className="hover-redes" aria-label="Redes sociales">
      <ul className="hover-redes__lista">
        {redes.map(({ id, label, href, Icon, color }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`hover-redes__enlace hover-redes__enlace--${id}`}
              style={{ '--red-color': color } as CSSProperties}
              aria-label={label}
            >
              <span className="hover-redes__texto">{label}</span>
              <span className="hover-redes__icono">
                <Icon aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default HoverRedes
