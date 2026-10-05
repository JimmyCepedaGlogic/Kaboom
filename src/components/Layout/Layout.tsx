import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import MenuSuperior from '../MenuSuperior/MenuSuperior'
import Footer from '../Footer/Footer'
import HoverRedes from '../HoverRedes/HoverRedes'

const temas: Record<string, string> = {
  '/': 'inicio',
  '/kaboom-style': 'kaboom-style',
  '/boom-kaboom-kids': 'boom-kaboom-kids',
  '/ofertas': 'ofertas',
  '/quienes-somos': 'quienes-somos',
  '/carrito': 'carrito',
  '/internas': 'internas',
  '/login': 'login',
  '/registro': 'registro',
}

function Layout() {
  const { pathname } = useLocation()
  const tema = temas[pathname] ?? 'inicio'
  const topbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const topbar = topbarRef.current
    if (!topbar) return

    const actualizarAlto = () => {
      document.documentElement.style.setProperty(
        '--app-topbar-height',
        `${topbar.offsetHeight}px`,
      )
    }

    actualizarAlto()
    const observer = new ResizeObserver(actualizarAlto)
    observer.observe(topbar)
    window.addEventListener('resize', actualizarAlto)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', actualizarAlto)
    }
  }, [pathname])

  return (
    <div className={`app-shell theme-${tema}`}>
      <div className="app-topbar" ref={topbarRef}>
        <Header />
        <MenuSuperior />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <HoverRedes />
    </div>
  )
}

export default Layout
