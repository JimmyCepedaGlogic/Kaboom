import { Link, useLocation } from 'react-router-dom'
import { HiUser } from 'react-icons/hi2'
import isologo from '../../assets/images/isologo.svg'
import './Header.css'

const kidsColors = [
  '#f5a9a0',
  '#f0d56e',
  '#7dd3d8',
  '#8ec5f2',
  '#c4a8e8',
  '#f5a9a0',
  '#a8e6a1',
  '#f0d56e',
  '#7dd3d8',
  '#c4a8e8',
  '#8ec5f2',
  '#f5a9a0',
  '#f0d56e',
  '#a8e6a1',
  '#7dd3d8',
]

function LogotipoKids() {
  return (
    <span className="header__logotipo-texto header__logotipo-texto--kids">
      <span className="header__logotipo-largo" aria-hidden="true">
        {'Boom Kaboom Kids'.split('').map((char, index) =>
          char === ' ' ? (
            <span key={`space-${index}`} className="header__logotipo-espacio">
              {' '}
            </span>
          ) : (
            <span
              key={`${char}-${index}`}
              style={{ color: kidsColors[index % kidsColors.length] }}
            >
              {char}
            </span>
          ),
        )}
      </span>
      <span className="header__logotipo-corto" aria-hidden="true">
        {'Kids'.split('').map((char, index) => (
          <span
            key={`corto-${char}-${index}`}
            style={{ color: kidsColors[index % kidsColors.length] }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  )
}

function Logotipo() {
  const { pathname } = useLocation()

  if (pathname === '/kaboom-style') {
    return (
      <span className="header__logotipo-texto header__logotipo-texto--style">
        <span className="header__logotipo-largo">Kaboom Style</span>
        <span className="header__logotipo-corto">Style</span>
      </span>
    )
  }

  if (pathname === '/boom-kaboom-kids') {
    return <LogotipoKids />
  }

  return <span className="header__logotipo-texto">KABOOM</span>
}

function Header() {
  const { pathname } = useLocation()
  const label =
    pathname === '/kaboom-style'
      ? 'Kaboom Style'
      : pathname === '/boom-kaboom-kids'
        ? 'Boom Kaboom Kids'
        : 'Kaboom'

  return (
    <header className="header">
      <Link to="/" className="header__isologo" aria-label="Inicio">
        <img src={isologo} alt="" />
      </Link>

      <Link to="/" className="header__logotipo" aria-label={label}>
        <Logotipo />
      </Link>

      <Link to="/login" className="header__persona" aria-label="Cuenta">
        <HiUser />
      </Link>
    </header>
  )
}

export default Header
