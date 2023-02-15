import Image from 'next/image';
import Link from 'next/link';
import { useSpanishContext } from '@context/spanishContext';
import { englishMissionStatement, spanishMissionStatement } from '@data/missionStatementData';

const Mission = () => {
  const { spanish } = useSpanishContext();
  return (
    <div className='max-w-4xl px-4 mx-auto mt-4 text-white page-spacing'>
      <div className='py-6 font-serif'>
        <h1 className='text-3xl sm:text-5xl'>{spanish ? 'Nuestra misión' : 'Our Mission'}</h1>
      </div>
      <div className='text-xl'>
        <p className=''>{spanish ? spanishMissionStatement : englishMissionStatement}</p>
      </div>
      <figure className='mt-6'>
        <Image
          src='/images/mission/together2.jpg'
          width={800}
          height={600}
          alt='Young Folklore Dancers'
          className='rounded-md'
        />
        <figcaption className='font-semibold sm:text-xl'>
          {spanish
            ? 'Jóvenes bailarines @ Ometepe Art and Education'
            : 'Young Dancers @ Ometepe Art and Education'}
        </figcaption>
      </figure>
      <section className='mt-10'>
        <div>
          <h2 className='font-serif text-3xl sm:text-4xl'>
            {spanish ? 'La Isla Ometepe' : 'The Island of Ometepe'}
          </h2>
          <p className='my-4 text-xl'>
            The inspiration for our organization has come from the beautiful island of Ometepe in
            Lake Nicaragua.
          </p>
          <p className='my-4 text-xl'>
            Ometepe is the birthplace of our staff member,{' '}
            <span className='font-semibold'>
              <Link href='/staff/inmaculada'>Inmaculada Cruz</Link>
            </span>
            .
          </p>
        </div>
        <figure className='mt-6'>
          <Image
            src='/images/mission/nicaragua/dancer-ometepe.jpg'
            width={800}
            height={600}
            alt='Dancers on Ometepe'
            className='rounded-md'
          />
          <figcaption className='font-semibold sm:text-xl'>
            {spanish
              ? 'Bailarines en la Isla Ometepe, Nicaragua 2021'
              : 'Dancers on the Island of Ometepe, Nicaragua 2021'}
          </figcaption>
        </figure>
        <figure className='mt-6'>
          <Image
            src='/images/mission/nicaragua/dancers2-ometepe.jpg'
            width={800}
            height={600}
            alt='Young Folklore Dancers'
            className='rounded-md'
          />
          <figcaption className='font-semibold sm:text-xl'>
            {spanish
              ? 'Bailarines en la Isla Ometepe, Nicaragua 2021'
              : 'Dancers on the Island of Ometepe, Nicaragua 2021'}
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default Mission;
