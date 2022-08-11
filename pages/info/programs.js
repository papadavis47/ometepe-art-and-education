import Head from "next/head";
import Image from "next/image";

const Programs = () => {
  return (
    <div className='max-w-4xl px-4 mx-auto text-white'>
      <Head>
        <title>Programs</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mt-6 '>
        <h1 className='py-6 font-serif text-4xl sm:text-5xl'>Our Programs</h1>
        <p className='text-xl sm:text-2xl'>
          Our classes and workshops are designed to enrich the students lives by exposing them to
          Latino culture, language and creativity &hearts;
        </p>
      </div>
      <section className='mt-4 font-medium'>
        <ul className='text-base sm:text-xl'>
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
      <div className='mt-6'>
        <Image
          src='/images/nicaragua/dancers2-ometepe.jpg'
          width={600}
          height={500}
          alt='Dancers in Ometepe'
          className='rounded-xl'
        />
        <figcaption className='font-semibold'>Dancers, The Island of Ometepe June 2021</figcaption>
      </div>
    </div>
  );
};

export default Programs;
