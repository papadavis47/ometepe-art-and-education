import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../Context/appContext.js";

export default function Home() {
  const { spanish, setSpanish, toggleSpanish } = useAppContext();
  return (
    <div>
      <Head>
        <title>Ometepe Art and Education</title>
        <meta name='description' content='Adding our voices to a beautifully diverse world' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-sm text-center'>
        <h1 className='mt-6 text-5xl text-red-400'>Ometepe Art and Education</h1>
        <h2 className='text-3xl italic'>
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
            <Image width={400} height={300} src='/linda.jpg' alt='Painting of Nicaraguan Dancers' />
            <Image src='/linda-dress.jpg' width={400} height={300} alt='A Beautiful Little Girl' />
          </div>
          <div>
            <h3 className='mt-4 mb-6 text-2xl'>
              {spanish ? "Celebrando la cultura nicaragüense" : "Celebrating Nicaraguan Culture"}
            </h3>
            <Image width={400} height={300} src='/dollsgrey.jpg' alt='Houses in Chinandega' />
            <Image width={400} height={300} src='/artgallery.jpg' alt='Nicaragua Doll' />
          </div>
        </div>
      </section>
    </div>
  );
}
