import Head from "next/head";
import Image from "next/image";

const Programs = () => {
  return (
    <div className='has-text-light has-text-weight-light columns is-flex-direction-column is-align-items-center'>
      <Head>
        <title>Programs</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='is-size-1 is-size-3-mobile  title mt-6 has-text-light has-text-weight-light has-text-centered'>
        Programs
      </h1>
      <p className='is-size-6-mobile has-text-justified is-size-4-desktop'>
        Our classes and workshops are designed to enrich the students lives by exposing them to
        Latino culture, language and creativity &hearts;
      </p>
      <section className='block mt-4 column'>
        <ul className='m-auto'>
          <li className='is-size-4 is-size-6-mobile'>
            <p>Arts and Crafts - Saturdays 10am to 1pm</p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>Dance Classes - Saturdays 10am to 1pm</p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>Cooking Workshops - Saturdays 10am to 1pm</p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>Spanish Language Classes (For Beginners)</p>
          </li>
        </ul>
      </section>
      <div className='columns is-flex is-centered mt-6'>
        <figure className='image'>
          <Image src='/dancers2-ometepe.jpg' width={600} height={500} alt='Dancers in Ometepe' />
          <figcaption className='has-text-light is-size-6'>
            Dancers, The Island of Ometepe June 2021
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Programs;
