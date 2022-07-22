import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../Context/appContext.js";

export default function Home() {
  const { spanish, setSpanish, toggleSpanish } = useAppContext();
  return (
    <div className='px-4 text-white'>
      <Head>
        <title>Ometepe Art and Education</title>
        <meta name='description' content='Adding our voices to a beautifully diverse world' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='pt-4 mt-8 text-center'>
        <h1 className='mt-6 font-serif text-4xl sm:text-5xl'>Ometepe Art and Education</h1>
        <h2 className='font-serif text-2xl italic sm:text-3xl'>
          {spanish
            ? "Añadiendo nuestras voces a un mundo maravillosamente diverso"
            : "Adding Our Voices to a Beautifully Diverse World"}
        </h2>
      </div>
      <section>
        <div>
          <div>
            <h3 className='text-2xl'>
              {spanish ? "Lecciones de arte y clases de baile" : "Art Lessons & Dance Lessons"}
            </h3>
            <Image
              width={400}
              height={300}
              className='rounded-xl'
              src='/linda.jpg'
              alt='Painting of Nicaraguan Dancers'
            />
            <Image
              src='/images/landing/linda-dress.jpg'
              width={400}
              height={300}
              alt='A Beautiful Little Girl'
              className='rounded-xl'
            />
          </div>
          <div>
            <h3 className='mt-4 mb-6 text-2xl'>
              {spanish ? "Celebrando la cultura nicaragüense" : "Celebrating Nicaraguan Culture"}
            </h3>
            <Image
              width={400}
              height={300}
              src='/images/landing/dollsgrey.jpg'
              alt='Houses in Chinandega'
              className='rounded-xl'
            />
            <Image
              width={400}
              height={300}
              src='/images/landing/artgallery.jpg'
              alt='Nicaragua Doll'
              className='rounded-xl'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
