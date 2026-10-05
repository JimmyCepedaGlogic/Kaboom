import { NavLink } from 'react-router-dom'
import { HiHome, HiSparkles, HiTag, HiUserGroup } from 'react-icons/hi2'
import { FaChild } from 'react-icons/fa6'
import './MenuSuperior.css'

const links = [
  { to: '/', label: 'Inicio', corto: 'Inicio', Icon: HiHome },
  { to: '/kaboom-style', label: 'Kaboom Style', corto: 'Style', Icon: HiSparkles },
  {
    to: '/boom-kaboom-kids',
    label: 'Boom Kaboom Kids',
    corto: 'Kids',
    Icon: FaChild,
  },
  { to: '/ofertas', label: 'Ofertas', corto: 'Ofertas', Icon: HiTag },
  {
    to: '/quienes-somos',
    label: 'Quiénes Somos',
    corto: 'Nosotros',
    Icon: HiUserGroup,
  },
]

function MenuSuperior() {
  return (
    <nav className="menu-superior" aria-label="Navegación principal">
      <ul className="menu-superior__lista">
        {links.map(({ to, label, corto, Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'menu-superior__link menu-superior__link--activo'
                  : 'menu-superior__link'
              }
            >
              <Icon className="menu-superior__icono" aria-hidden="true" />
              <span className="menu-superior__texto menu-superior__texto--largo">
                {label}
              </span>
              <span className="menu-superior__texto menu-superior__texto--corto">
                {corto}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuSuperior
