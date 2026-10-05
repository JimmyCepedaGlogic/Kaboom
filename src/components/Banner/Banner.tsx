import type { ReactNode } from 'react'
import './Banner.css'

type BannerProps = {
  className?: string
  image?: string
  alt?: string
  children?: ReactNode
}

function Banner({ className = '', image, alt = '', children }: BannerProps) {
  return (
    <section className={`banner ${className}`.trim()} aria-label="Banner">
      {image ? (
        <img className="banner__imagen" src={image} alt={alt} />
      ) : null}
      {children ? <div className="banner__contenido">{children}</div> : null}
    </section>
  )
}

export default Banner
