import Banner from '../../components/Banner/Banner'
import Categorias, { categoriasInicio } from '../../components/Categorias/Categorias'
import SeccionBienvenida from '../../components/SeccionBienvenida/SeccionBienvenida'
import SeccionLoMasNuevo, {
  nuevosInicio,
} from '../../components/SeccionLoMasNuevo/SeccionLoMasNuevo'
import SeccionOfertas from '../../components/SeccionOfertas/SeccionOfertas'
import bannerHome from '../../assets/images/BannerHome.jpg'
import './Inicio.css'

function Inicio() {
  return (
    <div className="inicio">
      <Banner
        className="inicio__banner"
        image={bannerHome}
        alt="Inicio"
      />
      <Categorias items={categoriasInicio} variante="inicio" />
      <SeccionBienvenida />
      <SeccionLoMasNuevo productos={nuevosInicio} variante="inicio" />
      <SeccionOfertas />
    </div>
  )
}

export default Inicio
