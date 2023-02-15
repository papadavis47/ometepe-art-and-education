import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ScheduleItems from '@components/ScheduleItems';
import { schedule } from '@data/programsData';

const ArtClasses = () => {
  return (
    <div className='max-w-4xl px-4 mx-auto text-white page-spacing'>
      <Head>
        <title>Art Classes</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='mt-6 '>
        <div>
          <h1 className='py-6 font-serif text-4xl sm:text-5xl'>Art Classes</h1>
          <p className='py-4 text-xl'>
            Taught by{' '}
            <Link className='font-bold' href='/staff/victor'>
              Victor Fuentes
            </Link>
            &nbsp; - every SATURDAY
          </p>
          <p className='text-xl italic font-semibold'>
            A different painting and drawing technique will be covered each week.
          </p>
          {/* <p className='mt-4 text-lg font-semibold'>
            Cost:&nbsp; Each class $50 per week -{" "}
            <span className='font-semibold'>materials included</span>
          </p> */}
        </div>
      </section>
      <section className='mt-4'>
        <h2 className='py-2 text-xl font-semibold'>Available Classes:</h2>
        <ul className='mt-2 text-lg sm:text-xl'>
          {schedule.artClasses.map((item) => (
            <ScheduleItems {...item} key={item.id} />
          ))}
        </ul>
      </section>

      <figure className='mt-6'>
        <Image
          src='/images/art-classes/cuadros.jpg'
          width={900}
          height={700}
          alt='Painting by Victor Fuents'
        />
        <figcaption className='font-semibold'>Frutas - Victor Fuentes</figcaption>
      </figure>
    </div>
  );
};

export default ArtClasses;
