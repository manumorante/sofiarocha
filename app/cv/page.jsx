import { user, t } from 'public/data'
import cx from 'clsx'
import Image from 'next/image'
import { Aside, Jobs, Edus, Section, List, DL } from 'components'

export default function Page() {
  return (
    <>
      <div className={cx('flex flex-col md:flex-row')}>
        <Aside>
          <div className='flex md:w-full gap-6'>
            <Image
              className='rounded-b-xl object-cover object-top w-1/2 md:w-full'
              src='/sofia-rocha.jpg'
              width={320}
              height={360}
              alt='Sofia Rocha'
            />

            <div className='md:hidden'>
              <h1 className='mt-10 font-extrabold text-3xl'>{user.fullname}</h1>
              <h2 className='mb-5 font-light text-2xl'>{user.slogan}</h2>

              <div className='flex flex-col'>
                <p className='font-bold'>{user.phone}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
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
                  <dt className='font-black text-3xl'>300L</dt>
                  <dd className='uppercase text-sm'>de aceite untado</dd>
                </dl>
              </div>
            </Aside.Item>

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
          </div>
        </Aside>

        <main className='bg-gray-50'>
          <div className='hidden md:block px-10'>
            <h1 className='mt-10 font-extrabold text-3xl'>{user.fullname}</h1>
            <h2 className='mb-5 font-light text-2xl'>{user.slogan}</h2>

            <div className='mb-8 px-5 py-1 -mx-2 inline-flex gap-4 rounded-full bg-gray-200'>
              <p className='font-bold'>{user.phone}</p>
              <p>{user.email}</p>
            </div>
          </div>

          <div className='text-2xl italic my-8 mx-5'>
            Reconocer y responder a tus necesidades. Tratamientos personalizados en un ambiente muy
            acogedor.
          </div>

          <Section>
            <Section.Title>{t.experiencia_laboral}</Section.Title>

            <Jobs>
              <Jobs.Item
                from='2022'
                to='Actual'
                rol='Masajista'
                company='Centro de masajes MasVital'>
                <p>
                  Atención al cliente, selección de masaje adecuado, encargada y gestión de agenda.
                </p>
              </Jobs.Item>

              <Jobs.Item
                from='Mayo'
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
