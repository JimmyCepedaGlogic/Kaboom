import { useEffect, useRef, useState, type ComponentType } from 'react'
import {
  PiTShirtBold,
  PiPantsBold,
  PiBootBold,
  PiSneakerBold,
  PiBabyBold,
  PiGenderIntersexBold,
  PiHandbagBold,
  PiHoodieBold,
  PiDressBold,
  PiWatchBold,
  PiCoatHangerBold,
  PiSunglassesBold,
  PiBaseballCapBold,
  PiScissorsBold,
  PiHeartBold,
} from 'react-icons/pi'
import { FaChild, FaSocks } from 'react-icons/fa6'
import { MdChildCare } from 'react-icons/md'
import './Categorias.css'

export type CategoriaItem = {
  label: string
  Icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' }>
}

export const categoriasInicio: CategoriaItem[] = [
  { label: 'Camisas', Icon: PiTShirtBold },
  { label: 'Pantalones', Icon: PiPantsBold },
  { label: 'Zapatos', Icon: PiBootBold },
  { label: 'Zapatillas', Icon: PiSneakerBold },
  { label: 'Ropa Niños', Icon: FaChild },
  { label: 'Ropa Bebé', Icon: PiBabyBold },
  { label: 'Ropa Adulto', Icon: PiGenderIntersexBold },
  { label: 'Accesorios', Icon: PiHandbagBold },
  { label: 'Sudaderas', Icon: PiHoodieBold },
  { label: 'Vestidos', Icon: PiDressBold },
  { label: 'Relojes', Icon: PiWatchBold },
]

export const categoriasStyle: CategoriaItem[] = [
  { label: 'Camisas', Icon: PiTShirtBold },
  { label: 'Blazers', Icon: PiCoatHangerBold },
  { label: 'Pantalones', Icon: PiPantsBold },
  { label: 'Jeans', Icon: PiScissorsBold },
  { label: 'Sudaderas', Icon: PiHoodieBold },
  { label: 'Zapatos', Icon: PiBootBold },
  { label: 'Zapatillas', Icon: PiSneakerBold },
  { label: 'Gafas', Icon: PiSunglassesBold },
  { label: 'Gorras', Icon: PiBaseballCapBold },
  { label: 'Accesorios', Icon: PiHandbagBold },
  { label: 'Relojes', Icon: PiWatchBold },
]

export const categoriasKids: CategoriaItem[] = [
  { label: 'Bebé', Icon: PiBabyBold },
  { label: 'Niños', Icon: FaChild },
  { label: 'Bodies', Icon: MdChildCare },
  { label: 'Conjuntos', Icon: PiHeartBold },
  { label: 'Camisetas', Icon: PiTShirtBold },
  { label: 'Pantalones', Icon: PiPantsBold },
  { label: 'Sudaderas', Icon: PiHoodieBold },
  { label: 'Vestidos', Icon: PiDressBold },
  { label: 'Zapatos', Icon: PiBootBold },
  { label: 'Zapatillas', Icon: PiSneakerBold },
  { label: 'Medias', Icon: FaSocks },
  { label: 'Accesorios', Icon: PiHandbagBold },
]

type CategoriasProps = {
  items?: CategoriaItem[]
  variante?: 'inicio' | 'style' | 'kids'
}

const COPIAS = 3
const VELOCIDAD = 0.55

function Categorias({
  items = categoriasInicio,
  variante = 'inicio',
}: CategoriasProps) {
  const seccionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const grupoRef = useRef<HTMLUListElement>(null)
  const pausadoRef = useRef(false)
  const interactuandoRef = useRef(false)
  const [compacto, setCompacto] = useState(false)

  useEffect(() => {
    const seccion = seccionRef.current
    if (!seccion) return

    const comprobarCompacto = () => {
      const topbar =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--app-topbar-height',
          ),
        ) || 0
      const top = seccion.getBoundingClientRect().top
      setCompacto(top <= topbar + 1)
    }

    comprobarCompacto()
    window.addEventListener('scroll', comprobarCompacto, { passive: true })
    window.addEventListener('resize', comprobarCompacto)

    return () => {
      window.removeEventListener('scroll', comprobarCompacto)
      window.removeEventListener('resize', comprobarCompacto)
    }
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    const grupo = grupoRef.current
    if (!viewport || !grupo) return

    const anchoGrupo = () => grupo.scrollWidth

    const centrarCopia = () => {
      viewport.scrollLeft = anchoGrupo()
    }

    centrarCopia()

    const normalizarScroll = () => {
      const ancho = anchoGrupo()
      if (ancho <= 0) return

      if (viewport.scrollLeft <= 1) {
        viewport.scrollLeft += ancho
      } else if (viewport.scrollLeft >= ancho * 2 - 1) {
        viewport.scrollLeft -= ancho
      }
    }

    let frame = 0
    const animar = () => {
      if (!pausadoRef.current && !interactuandoRef.current) {
        viewport.scrollLeft += VELOCIDAD
        normalizarScroll()
      }
      frame = requestAnimationFrame(animar)
    }

    frame = requestAnimationFrame(animar)

    const iniciarInteraccion = () => {
      interactuandoRef.current = true
    }

    const terminarInteraccion = () => {
      interactuandoRef.current = false
      normalizarScroll()
    }

    viewport.addEventListener('scroll', normalizarScroll, { passive: true })
    viewport.addEventListener('pointerdown', iniciarInteraccion)
    viewport.addEventListener('touchstart', iniciarInteraccion, { passive: true })
    window.addEventListener('pointerup', terminarInteraccion)
    window.addEventListener('touchend', terminarInteraccion)
    window.addEventListener('resize', centrarCopia)

    return () => {
      cancelAnimationFrame(frame)
      viewport.removeEventListener('scroll', normalizarScroll)
      viewport.removeEventListener('pointerdown', iniciarInteraccion)
      viewport.removeEventListener('touchstart', iniciarInteraccion)
      window.removeEventListener('pointerup', terminarInteraccion)
      window.removeEventListener('touchend', terminarInteraccion)
      window.removeEventListener('resize', centrarCopia)
    }
  }, [items])

  return (
    <section
      ref={seccionRef}
      className={`categorias categorias--${variante}${compacto ? ' categorias--compacto' : ''}`}
      aria-label="Categorías"
      onMouseEnter={() => {
        pausadoRef.current = true
      }}
      onMouseLeave={() => {
        pausadoRef.current = false
      }}
    >
      <div
        ref={viewportRef}
        className="categorias__viewport"
        tabIndex={0}
        role="region"
        aria-label="Desliza para ver categorías"
      >
        <div className="categorias__pista">
          {Array.from({ length: COPIAS }, (_, copyIndex) => (
            <ul
              key={copyIndex}
              ref={copyIndex === 0 ? grupoRef : undefined}
              className="categorias__lista"
              aria-hidden={copyIndex > 0 ? true : undefined}
            >
              {items.map(({ label, Icon }) => (
                <li key={`${copyIndex}-${label}`} className="categorias__item">
                  <button type="button" className="categorias__boton">
                    <span className="categorias__icono">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="categorias__nombre">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categorias
