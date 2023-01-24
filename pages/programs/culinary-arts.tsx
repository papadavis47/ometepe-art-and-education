import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '../../Context/appContext';
import Construction from '../../components/Construction';

const CulinaryArts = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto text-white page-spacing'>
      <Head>
        <title>Culinary Arts</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1 className='py-6 font-serif text-4xl sm:text-5xl'>
          {spanish ? 'Arte Culinario' : 'Culinary Arts'}
        </h1>
      </div>
      <Construction />
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

export default CulinaryArts;
