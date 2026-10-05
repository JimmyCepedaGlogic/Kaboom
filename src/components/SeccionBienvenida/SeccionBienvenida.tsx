import bannerHome from '../../assets/images/BannerHome.jpg'
import bannerStyle from '../../assets/images/BannerStyle.jpg'
import bannerKids from '../../assets/images/BannerKids.jpg'
import './SeccionBienvenida.css'

const historias = [
  {
    id: 'kaboom',
    titulo: 'KABOOM',
    imagen: bannerHome,
    alt: 'Familia Kaboom',
    texto:
      'En KABOOM, vestir a grandes y chicos es un asunto de familia. Nacimos con la fuerza de quien no se rinde ante los tiempos difíciles y celebra con gratitud los tiempos buenos. Trabajamos día a día pensando en lo que buscas para los tuyos: prendas con alma, acabados de excelente calidad y precios honestos. Queremos enamorarte en cada detalle.',
  },
  {
    id: 'style',
    titulo: 'KABOOM STYLE',
    imagen: bannerStyle,
    alt: 'Kaboom Style',
    texto:
      'Tendencia, comodidad y carácter para destacar todos los días. Una colección pensada para quienes buscan presencia, calidad y un estilo que habla por sí solo.',
  },
  {
    id: 'kids',
    titulo: 'BOOM KIDS',
    imagen: bannerKids,
    alt: 'Boom Kaboom Kids',
    texto:
      'Color, resistencia y libertad para que los más pequeños exploren el mundo. Ropa hecha para jugar, descubrir y crecer con alegría.',
  },
]

function SeccionBienvenida() {
  return (
    <section className="bienvenida" aria-label="Bienvenida a Kaboom">
      <div className="bienvenida__historias">
        {historias.map((historia, index) => (
          <article
            key={historia.id}
            className={`bienvenida__capitulo ${
              index % 2 === 1 ? 'bienvenida__capitulo--invertido' : ''
            }`}
          >
            <div className="bienvenida__imagen">
              <img src={historia.imagen} alt={historia.alt} />
            </div>
            <div className="bienvenida__relato">
              <p className="bienvenida__capitulo-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2>{historia.titulo}</h2>
              <p className="bienvenida__texto">{historia.texto}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="bienvenida__cierre">
        ¡Bienvenido a nuestro hogar, bienvenido a KABOOM!
      </p>
    </section>
  )
}

export default SeccionBienvenida
