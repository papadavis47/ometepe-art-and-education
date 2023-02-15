import Image from 'next/image';
import { useSpanishContext } from '@context/spanishContext';
import StaffTitle from '@components/StaffTitle';
import BioParagraph from '@components/BioParagraph';
import { englishParagraphs } from '@data/victorBioData';

const Victor = () => {
  const { spanish } = useSpanishContext();
  return (
    <div className='max-w-4xl px-4 mx-auto page-spacing'>
      <StaffTitle name='Victor Fuentes' titulo='Pintor y Poeta' title='Painter and Poet' />
      <div className='sm:pl-4'>
        <Image
          src='/images/staff/victor-portrait.jpg'
          alt='Victor Fuentes, Painter'
          width={700}
          height={400}
          className='rounded-lg'
        />
      </div>
      <div className=''>
        <h1 className='py-2 my-4 font-serif text-3xl text-white sm:my-6 sm:text-4xl'>
          {spanish ? 'Declaración del artista' : "Artist's Statement"}
        </h1>
        {englishParagraphs.map((para) => (
          <BioParagraph text={para.text} key={para.key} />
        ))}
      </div>
    </div>
  );
};

export default Victor;
