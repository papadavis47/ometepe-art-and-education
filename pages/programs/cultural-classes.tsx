import Head from 'next/head';
import Image from 'next/image';
import ScheduleItems from '../../components/ScheduleItems';
import { schedule } from '../../data/programsData';
import Link from 'next/link';

const CulturalClasses = () => {
  return (
    <div className='max-w-4xl px-4 mx-auto text-white page-spacing'>
      <Head>
        <title>Cultural Classes</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='mt-6 '>
        <div>
          <h1 className='py-6 font-serif text-4xl sm:text-5xl'>Cultural Classes</h1>
          <p className='py-4 text-xl'>
            Taught by{' '}
            <Link className='font-bold' href='/staff/inmaculada'>
              Inmaculada Cruz
            </Link>
            &nbsp; - every SATURDAY
          </p>
          <p className='text-xl italic font-semibold'>
            Central American Cooking, knitting and traditional Nicarguan dance
          </p>
          {/* <p className='mt-4 text-lg font-semibold'>
            Cost: &nbsp;Each class $50 per week -{" "}
            <span className='font-semibold'>materials included</span>
          </p> */}
        </div>
      </section>
      <section className='mt-4'>
        <h2 className='py-2 text-xl font-semibold'>Available Classes:</h2>
        <ul className='mt-2 text-lg sm:text-xl'>
          {schedule.culturalClasses.map((item) => (
            <ScheduleItems {...item} key={item.id} />
          ))}
        </ul>
      </section>
      <div className='pt-6'>
        <figure className='mt-6'>
          <Image
            src='/images/cultural-classes/fritanga.jpg'
            width={600}
            height={500}
            alt='Children learning crafts'
          />
          <figcaption className='font-semibold'>Nicaragua food</figcaption>
        </figure>

        <figure className='mt-6'>
          <Image
            src='/images/cultural-classes/arte.jpg'
            width={500}
            height={700}
            alt='Children learning crafts'
          />
          <figcaption className='font-semibold'>Drawing with Inmaculada</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default CulturalClasses;
