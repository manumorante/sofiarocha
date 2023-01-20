import cx from 'classnames'

export default function Page() {
  const user = {
    name: 'Sofía Rocha',
    slogan: 'Quiromasajista',
  }

  return (
    <div className='Page'>
      <div className='mb-6'>
        <h1 className='font-extrabold text-2xl'>{user.name}</h1>
        <p>{user.slogan}</p>
      </div>

      <div className='flex gap-6'>
        <aside className='flex flex-col gap-6'>
          <div>
            <strong>Contacto</strong>
            <p>647 23 82 59</p>
            <p>safiarochaaranda1981@gmail.com</p>
            <p>Calle Gregorio Espín</p>
            <p>18002 Granada</p>
          </div>

          <div>
            <strong>Idiomas</strong>
            <p>Castellano: Nativo</p>
            <p>Inglés: A2</p>
            <p>Portugués: B1</p>
          </div>

          <div>
            <strong>Más información</strong>
            <ul>
              <li>Equipo propio.</li>
              <li>Carne de conducir.</li>
              <li>Flexibilidad horaria.</li>
              <li>Disponibilidad total</li>
            </ul>
          </div>

          <div>
            <strong>Habilidades</strong>
            <ul>
              <li>Atención al cliente</li>
              <li>Empatia</li>
              <li>Escucha activa y comunicación</li>
              <li>Observación</li>
              <li>Eficaz trabajo en equipo</li>
            </ul>
          </div>

          <div>
            <p>INFO CV LINKEDIN</p>
          </div>
        </aside>

        <main>
          <p>Experiencia laboral</p>
          <div className='my-8'>
            <p>Masajista</p>
            <p>Centro de masajes MasVital</p>
            <p>2022 - actual</p>
          </div>

          <p>Experiencia laboral</p>

          <div className='my-8'>
            <p>Masajista</p>
            <p>Centro de masajes MasVital. | 2022 - Actual</p>
            <ul>
              <li>Recepción del cliente en las instalaciones.</li>
              <li>
                Reconocer y responder a las consultas, necesidades y expectativas de los clientes.
              </li>
              <li>Selección y realización del masaje o tratamiento.</li>
              <li>
                Preparar y adecuar las instalaciones, medios y productos necesarios para el masaje o
                tratamiento.
              </li>
              <li>Encargada en dias y temporadas ocasionales.</li>
              <li>Gestión de agenda</li>
            </ul>
          </div>

          <div className='my-8'>
            <p>Masajista</p>
            <p>Baños Árabes Hammam Al Andalus. | 2021 - 2021</p>
            <ul>
              <li>Recepción del cliente y ruta guiada por las instalaciones.</li>
              <li>Selección y realización del masaje o baño turco.</li>
              <li>
                Preparar y adecuar las instalaciones, medios y productos necesarios para el cliente.
              </li>
            </ul>
          </div>

          <div className='my-8'>
            <p>Masajista</p>
            <p>Profesional Independiente. | 2019 - Actual</p>
            <p>
              Realización de masaje a domicilio, en especial atención a personas con movilidad
              reducida, limitaciones y personas de la tercera edad.
            </p>
          </div>

          <p>Datos Académicos</p>

          <div className='my-8'>
            <p>Escuela Superior de Estudios Naturistas ESEN (Formación en técnicas manuales)</p>
            <p>
              Quiromasaje, quiromasaje deportivo, drenaje linfático manual, hidrotermal y
              reflexologia podal. | Octubre 2019 - Julio 2020
            </p>
          </div>

          <div className='my-8'>
            <p>Tesa Natural</p>
            <p>Maderoterapia y Cañas de Bambú. | Julio 2022 - Julio 2022</p>
          </div>

          <div className='my-8'>
            <p>MasVital</p>
            <p>Quiromasaje Mindfulness. | Abril 2022 - Junio 2022</p>
          </div>

          <div className='my-8'>
            <p>Ananke</p>
            <p>Aromaterapia. | Octubre 2021 - Octubre 2021</p>
          </div>

          <div className='my-8'>
            <p>IDECO (Iniciativa y Desarrollo del Conocimiento y Formación)</p>
            <p>Estética, Tratamientos de Spa y Balneoterapia. | Octubre 2015 - Junio 2016</p>
          </div>
        </main>
      </div>
    </div>
  )
}
