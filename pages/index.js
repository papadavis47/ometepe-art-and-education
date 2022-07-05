import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../src/Context/appContext.js";

export default function Home() {
  const { spanish, setSpanish, toggleSpanish } = useAppContext();
  return (
    <div>
      <Head>
        <title>Ometepe Art and Education</title>
        <meta name='description' content='Adding our voices to a beautifully diverse world' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='has-text-centered text-sm'>
        <h1 className='text-5xl is-size-1 is-size-4-mobile has-text-light has-text-weight-light title mt-6'>
          Ometepe Art and Education
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          {spanish
            ? "Añadiendo nuestras voces a un mundo maravillosamente diverso"
            : "Adding Our Voices to a Beautifully Diverse World"}
        </h2>
      </div>
      <section className='section'>
        <div className='columns is-centered has-text-centered is-variable'>
          <div className='column'>
            <h3 className='mt-4 has-text-light is-size-4-desktop is-size-5-mobile is-size-5-tablet block mb-6'>
              {spanish ? "Lecciones de arte y clases de baile" : "Art Lessons & Dance Lessons"}
            </h3>
            <figure className='is-flex is-justify-content-center block image is-4by3 shadow'>
              <Image
                width={400}
                height={300}
                src='/linda.jpg'
                // width={400}
                // height={300}
                // layout='fill'
                alt='Painting of Nicaraguan Dancers'
              />
            </figure>
            <figure className='is-flex is-justify-content-center image is-4by3 shadow'>
              <Image
                src='/linda-dress.jpg'
                width={400}
                height={300}
                // layout='fill'
                alt='A Beautiful Little Girl'
              />
            </figure>
          </div>
          <div className='column'>
            <h3 className='has-text-light is-size-4-desktop is-size-5-mobile is-size-5-tablet block mb-6 mt-4'>
              {spanish ? "Celebrando la cultura nicaragüense" : "Celebrating Nicaraguan Culture"}
            </h3>
            <figure className=' shadow is-flex is-justify-content-center block image is-4by3'>
              <Image width={400} height={300} src='/dollsgrey.jpg' alt='Houses in Chinandega' />
            </figure>
            <figure className='shadow is-flex is-justify-content-center image is-4by3'>
              <Image width={400} height={300} src='/artgallery.jpg' alt='Nicaragua Doll' />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
