import Head from "next/head";
import Image from "next/image";

const Programs = () => {
  return (
    <div className='max-w-4xl px-4 mx-auto text-white page-spacing'>
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
            <p>Arts and Crafts</p>
          </li>
          <li className=''>
            <p>Dance Classes</p>
          </li>
          <li className=''>
            <p>Cooking Workshops</p>
          </li>
          <li className=''>
            <p>Spanish Language Classes (For Beginners)</p>
          </li>
        </ul>
      </section>
      <div className='mt-6'>
        <Image
          src='/images/programs/family-dancers.jpg'
          width={900}
          height={700}
          alt='Traditional Nicaraguan Folklore'
          className='rounded-xl'
        />
        <figcaption className='font-semibold'>
          Our Family, Traditional Nicaraguan Dancers - Seattle
        </figcaption>
      </div>
    </div>
  );
};

export default Programs;
