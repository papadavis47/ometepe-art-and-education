import Head from 'next/head';
import Image from 'next/image';

// This is a scratch page. Saving the content for later.

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
          className='rounded-md'
        />
        <figcaption className='font-semibold'>
          Our Family, Traditional Nicaraguan Dancers - Seattle
        </figcaption>
      </div>
      <section className='mt-4 font-medium'>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl'>Arts and Crafts</h3>
          <p className='my-4 text-xl italic sm:text-2xl'>
            We believe in the power of the visual arts to inspire confidence and personal growth in
            children.
          </p>
          <div className='pb-6 border-b-2 max-w-fit border-b-white'>
            <Image
              src='/images/programs/arts-crafts.jpg'
              width={400}
              height={500}
              alt='Kids learning art'
              className='rounded-md'
            />
          </div>
        </div>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl'>Dance Classes</h3>
          <p className='my-4 text-xl italic sm:text-2xl'>
            We love sharing the traditional folklore dance of Nicaragua.
          </p>
          <div className='pb-6 border-b-2 max-w-fit border-b-white'>
            <Image
              src='/images/programs/together.jpg'
              alt='Nicaraguan folklore dancers'
              width={600}
              height={400}
              className='rounded-md'
            />
          </div>
        </div>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl'>Cooking Workshops</h3>
          <p className='my-4 text-xl italic sm:text-2xl'>
            Every country on earth enjoys eating! Food is an amazing way of sharing cultures. And
            Nicaragua has amazing food!
          </p>
          <div className='pb-6 border-b-2 max-w-fit border-b-white'>
            <Image
              src='/images/programs/fritanga.jpg'
              alt='Cooking Nicaraguan food'
              width={600}
              height={475}
              className='rounded-md'
            />
          </div>
        </div>
        <div className='pt-6'>
          <h3 className='my-6 text-2xl font-semibold sm:text-4xl '>
            Spanish Language Classes (For Beginners)
          </h3>
          <p className='my-4 text-xl italic sm:text-2xl'>
            We teach lessons in our first language - <span className='font-bold'>Spanish</span> -
            spoken by approximately 600 million people around the world!
          </p>
          <div>
            <Image
              src='/images/programs/machoraton.jpg'
              alt='Painting of Nicaraguan dancers - Machoraton'
              width={600}
              height={475}
              className='rounded-md'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
