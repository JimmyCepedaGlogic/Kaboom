import Banner from '../../components/Banner/Banner'
import Categorias, { categoriasKids } from '../../components/Categorias/Categorias'
import SeccionLoMasNuevo, {
  nuevosKids,
} from '../../components/SeccionLoMasNuevo/SeccionLoMasNuevo'
import bannerKids from '../../assets/images/BannerKids.jpg'
import './BoomKaboomKids.css'

function BoomKaboomKids() {
  return (
    <div className="boom-kaboom-kids">
      <Banner
        className="boom-kaboom-kids__banner"
        image={bannerKids}
        alt="Boom Kaboom Kids"
      />
      <Categorias items={categoriasKids} variante="kids" />
      <SeccionLoMasNuevo
        productos={nuevosKids}
        variante="kids"
        descripcion="Novedades coloridas y cómodas para que exploren el mundo."
        enlace="/boom-kaboom-kids"
        textoEnlace="Ver Kids"
      />
    </div>
  )
}

export default BoomKaboomKids
