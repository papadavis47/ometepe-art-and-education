import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../Context/appContext.js";

export default function Home() {
  const { spanish } = useAppContext();
  return (
    <div className='px-4 text-white page-spacing'>
      <Head>
        <title>Ometepe Art and Education</title>
        <meta name='description' content='Adding our voices to a beautifully diverse world' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='pt-2 text-center'>
        <h1 className='mt-6 font-serif text-4xl sm:text-5xl'>Ometepe Art and Education</h1>
        <h2 className='mt-4 font-serif text-2xl italic sm:text-3xl'>
          {spanish
            ? "Añadiendo nuestras voces a un mundo maravillosamente diverso"
            : "Adding Our Voices to a Beautifully Diverse World"}
        </h2>
      </div>
      <section className='mx-auto mt-6 md:mt-10 max-w-7xl'>
        <div className='grid-cols-2 md:gap-4 md:grid'>
          <div className=''>
            <h3 className='py-4 mb-4 font-serif text-2xl text-center'>
              {spanish ? "Lecciones de arte y clases de baile" : "Art Lessons & Dance Lessons"}
            </h3>
            <Image
              width={800}
              height={600}
              className='rounded-xl'
              src='/images/landing/linda.jpg'
              alt='Painting of Nicaraguan Dancers'
            />
            <div className='py-2'>
              <Image
                src='/images/landing/linda-dress.jpg'
                width={800}
                height={600}
                alt='A Beautiful Little Girl'
                className='rounded-xl'
              />
            </div>
          </div>
          <div>
            <h3 className='py-4 mb-4 font-serif text-2xl text-center'>
              {spanish ? "Celebrando la cultura nicaragüense" : "Celebrating Nicaraguan Culture"}
            </h3>
            <Image
              width={800}
              height={600}
              src='/images/landing/dollsgrey.jpg'
              alt='Houses in Chinandega'
              className='rounded-xl'
            />
            <div className='py-2'>
              <Image
                width={800}
                height={600}
                src='/images/landing/artgallery.jpg'
                alt='Nicaragua Doll'
                className='rounded-xl'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto mt-6 md:mt-10 max-w-7xl'>
        <div className='py-4 text-center'>
          <h2 className='mb-6 font-serif text-3xl italic sm:text-4xl'>
            {spanish ? "Fomentando la creatividad" : "Encouraging Creativity"}
          </h2>
          <Image
            width={900}
            height={700}
            alt='Ometepe Dancers'
            src='/images/landing-mid/yellow.jpg'
            className='rounded-xl'
          />
        </div>
        <div className='text-center'>
          <h2 className='py-6 font-serif text-3xl italic sm:text-4xl mb-y'>
            {spanish ? "Enriqueciendo vidas" : "Enriching Lives"}
          </h2>
          <Image
            width={900}
            height={700}
            alt='Child Dancers'
            src='/images/landing-mid/kids.jpg'
            className='rounded-xl'
          />
        </div>
      </section>
    </div>
  );
}
