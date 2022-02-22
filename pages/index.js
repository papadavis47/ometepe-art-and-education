import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../src/Context/appContext.js";

export default function Home() {
  const { spanish, setSpanish, toggleSpanish } = useAppContext();
  return (
    <div>
      <Head>
        <title>Ometepe Art and Education</title>
        <meta name='description' content='Website for Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          Ometepe Art and Education
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          Adding Our Voices to a Beautifully Diverse World
        </h2>
      </div>
      <section className='section'>
        <div className='columns is-centered has-text-centered is-variable is-7'>
          <div className='column is-full'>
            <h3 className='has-text-light is-size-4-desktop is-size-5-mobile is-size-5-tablet block mb-6'>
              Art Lessons & Dance Lessons
            </h3>
            <figure className='is-flex is-justify-content-center block image is-4by3'>
              <Image
                className='shadow'
                src='/linda.jpg'
                layout='fill'
                alt='Painting of Nicaraguan Dancers'
              />
            </figure>
            <figure className='is-flex is-justify-content-center image is-4by3'>
              <Image
                className='shadow'
                src='/linda-dress.jpg'
                layout='fill'
                alt='A Beautiful Little Girl'
              />
            </figure>
          </div>
          <div className='column is-full'>
            <h3 className='has-text-light is-size-4-desktop is-size-5-mobile is-size-5-tablet block mb-6'>
              Celebrating Nicaraguan Culture
            </h3>
            <figure className='is-flex is-justify-content-center block image is-4by3'>
              <Image
                className='shadow'
                src='/dollsgrey.jpg'
                layout='fill'
                alt='Houses in Chinandega'
              />
            </figure>
            <figure className='is-flex is-justify-content-center image is-4by3'>
              <Image className='shadow' src='/artgallery.jpg' layout='fill' alt='Nicaragua Doll' />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
