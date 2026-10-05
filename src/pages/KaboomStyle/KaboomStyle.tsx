import Banner from '../../components/Banner/Banner'
import Categorias, { categoriasStyle } from '../../components/Categorias/Categorias'
import SeccionLoMasNuevo, {
  nuevosStyle,
} from '../../components/SeccionLoMasNuevo/SeccionLoMasNuevo'
import bannerStyle from '../../assets/images/BannerStyle.jpg'
import './KaboomStyle.css'

function KaboomStyle() {
  return (
    <div className="kaboom-style">
      <Banner
        className="kaboom-style__banner"
        image={bannerStyle}
        alt="Kaboom Style"
      />
      <Categorias items={categoriasStyle} variante="style" />
      <SeccionLoMasNuevo
        productos={nuevosStyle}
        variante="style"
        descripcion="Piezas premium recién llegadas para destacar con carácter."
        enlace="/kaboom-style"
        textoEnlace="Ver Style"
      />
    </div>
  )
}

export default KaboomStyle
