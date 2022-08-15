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
      <div className='mt-6'>
        <Image
          src='/images/programs/family-dancers.jpg'
          width={900}
          height={700}
          alt='Traditional Nicaraguan Folklore'
          className='rounded-lg'
        />
        <figcaption className='font-semibold'>
          Our Family, Traditional Nicaraguan Dancers - Seattle
        </figcaption>
      </div>
      <section className='mt-4 font-medium'>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl'>Arts and Crafts</h3>
          <div className='pb-6 border-b-2 max-w-fit border-b-white'>
            <Image
              src='/images/programs/arts-crafts.jpg'
              width={400}
              height={500}
              alt='Kids learning art'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl'>Dance Classes</h3>
          <div className='pb-6 border-b-2 max-w-fit border-b-white'>
            <Image
              src='/images/programs/together.jpg'
              alt='Nicaraguan folklore dancers'
              width={600}
              height={400}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl'>Cooking Workshops</h3>
          <div className='pb-6 border-b-2 max-w-fit border-b-white'>
            <Image
              src='/images/programs/fritanga.jpg'
              alt='Cooking Nicaraguan food'
              width={600}
              height={475}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl '>
            Spanish Language Classes (For Beginners)
          </h3>
          <div>
            <Image
              src='/images/programs/machoraton.jpg'
              alt='Cooking Nicaraguan food'
              width={600}
              height={475}
              className='rounded-lg'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
