import Head from "next/head";
import Image from "next/image";

const Programs = () => {
  return (
    <div className='flex flex-col items-center text-white'>
      <Head>
        <title>Programs</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='mt-6'>Programs</h1>
      <p className=''>
        Our classes and workshops are designed to enrich the students lives by exposing them to
        Latino culture, language and creativity &hearts;
      </p>
      <section className='mt-4'>
        <ul className=''>
          <li className=''>
            <p>Arts and Crafts - Saturdays 10am to 1pm</p>
          </li>
          <li className=''>
            <p>Dance Classes - Saturdays 10am to 1pm</p>
          </li>
          <li className=''>
            <p>Cooking Workshops - Saturdays 10am to 1pm</p>
          </li>
          <li className=''>
            <p>Spanish Language Classes (For Beginners)</p>
          </li>
        </ul>
      </section>
      <div className='flex flex-col'>
        <figure className='image'>
          <Image src='/dancers2-ometepe.jpg' width={600} height={500} alt='Dancers in Ometepe' />
          <figcaption className=''>Dancers, The Island of Ometepe June 2021</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Programs;
