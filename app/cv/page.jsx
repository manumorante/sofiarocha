import { user, t } from 'public/data'
import cx from 'clsx'
import Image from 'next/image'
import avatar from '/public/sofia-rocha.jpg'
import { Aside, Jobs, Edus, Section, List, DL } from 'components'

export default function Page() {
  return (
    <>
      <div className={cx('flex flex-col sm:flex-row')}>
        <Aside>
          <div className='flex sm:w-full gap-6'>
            <Image
              className='rounded-b-xl object-cover object-top w-1/2 sm:w-full'
              src={avatar}
              alt='Sofia Rocha'
            />

            <div className='sm:hidden'>
              <h1 className='mt-10 font-extrabold text-3xl'>{user.fullname}</h1>
              <h2 className='mb-5 font-light text-2xl'>{user.slogan}</h2>

              <div className='flex flex-col'>
                <p className='font-bold'>{user.phone}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>

          <div className='hidden sm:block'>
            <Aside.Item
              title={t.idiomas}
              summary='Hablo castellano nativo y tengo niveles B2 y B1 en inglés y portugués, respectivamente.'>
              <DL>
                <DL.Item term={t.castellano} definition={t.nativo} />
                <DL.Item term={t.ingles} definition={'B2'} />
                <DL.Item term={t.portugues} definition={'B1'} />
              </DL>
            </Aside.Item>

            <Aside.Item
              title={t.mas_informacion}
              summary='Poseo equipo propio, carné de conducir, flexibilidad horaria y disponibilidad total.'>
              <List>
                <List.Item>{t.equipo_propio}</List.Item>
                <List.Item>{t.carne_de_conducir}</List.Item>
                <List.Item>{t.flexibilidad_horaria}</List.Item>
                <List.Item>{t.disponibilidad_total}</List.Item>
              </List>
            </Aside.Item>

            <Aside.Item
              title={t.habilidades}
              summary='Soy capaz de ofrecer atención al cliente con empatía, practicar una escucha activa y comunicación efectiva.'>
              <ul>
                <li>{t.atencion_al_cliente}</li>
                <li>{t.empatia}</li>
                <li>{t.escucha_activa}</li>
                <li>{t.observación}</li>
              </ul>
            </Aside.Item>

            <Aside.Item>
              <div className='flex gap-3'>
                <dl>
                  <dt className='font-black text-3xl'>+680</dt>
                  <dd className='uppercase text-sm'>Masajes realizados</dd>
                </dl>
                <dl>
                  <dt className='font-black text-3xl'>+42</dt>
                  <dd className='uppercase text-sm'>Reseñas positivas</dd>
                </dl>
                <dl>
                  <dt className='font-black text-3xl'>3</dt>
                  <dd className='uppercase text-sm'>Ciudades</dd>
                </dl>
              </div>
            </Aside.Item>
          </div>
        </Aside>

        <main className='px-10'>
          <div className='hidden sm:block'>
            <h1 className='mt-10 font-extrabold text-3xl'>{user.fullname}</h1>
            <h2 className='mb-5 font-light text-2xl'>{user.slogan}</h2>

            <div className='mb-8 px-4 py-1 -mx-2 flex gap-2 rounded-full bg-gray-200 dark:bg-gray-800'>
              <p className='font-bold'>{user.phone}</p>
              <p>{user.email}</p>
            </div>
          </div>

          <div className='text-2xl italic my-8 -mx-3'>
            Me enorgullece ofrecer tratamientos personalizados en un ambiente acogedor. Reconocer y
            responder a las necesidades del cliente
          </div>

          <Section>
            <Section.Title>{t.experiencia_laboral}</Section.Title>

            <Jobs>
              <Jobs.Item
                from='2022'
                to='actual'
                rol='Masajista'
                company='Centro de masajes MasVital'>
                <p>
                  Atención al cliente, selección de masaje adecuado, encargada y gestión de agenda.
                </p>
              </Jobs.Item>

              <Jobs.Item
                from='2021'
                to='2021'
                tol='Masajista'
                company='Baños Árabes Hammam Al Andalus'>
                <p>
                  Ruta guiada por las instalaciones, selección y realización de masaje o baño turco.
                </p>
              </Jobs.Item>

              <Jobs.Item
                from='2019'
                to='Actual'
                rol='Masajista'
                company='Profesional Independiente'>
                <p>
                  Realización de masaje a domicilio, en especial atención a personas con movilidad
                  reducida, limitaciones y personas de la tercera edad.
                </p>
              </Jobs.Item>
            </Jobs>
          </Section>

          <Section>
            <Section.Title>{t.formacion}</Section.Title>

            <Edus>
              <Edus.Item
                from='Octubre 2019'
                to='Julio 2020'
                title='Quiromasaje, quiromasaje deportivo, drenaje linfático manual, hidrotermal y
                reflexologia podal'
                center='Escuela Superior de Estudios Naturistas ESEN'
              />

              <Edus.Item
                from='Julio 2022'
                to='Julio 2022'
                title='Maderoterapia y Cañas de Bambú'
                center='Tesa Natural'
              />

              <Edus.Item
                from='Abril 2022'
                to='Junio 2022'
                title='Quiromasaje Mindfulness'
                center='MasVital'
              />

              <Edus.Item
                from='Octubre 2021'
                to='Octubre 2021'
                title='Aromaterapia'
                center='Ananke'
              />

              <Edus.Item
                from='Octubre 2015'
                to='Junio 2016'
                title='Estética, Tratamientos de Spa y Balneoterapia'
                center='IDECO (Iniciativa y Desarrollo del Conocimiento y Formación)'
              />
            </Edus>
          </Section>
        </main>
      </div>
    </>
  )
}
