import Image from 'next/image';
import { useSpanishContext } from '@context/spanishContext';
import StaffTitle from '@components/StaffTitle';
import { englishParagraphs } from '@data/InmaBioData';
import BioParagraph, { BioContent } from '@components/BioParagraph';

const Inma = () => {
  const { spanish } = useSpanishContext();
  return (
    <div className='max-w-4xl px-4 mx-auto page-spacing'>
      <StaffTitle title='Teacher' titulo='Maestra' name='Maria Inma Fuentes' />
      <div className='sm:pl-4'>
        <Image
          src='/images/staff/inma-profile.jpg'
          alt='Maria Inma - profile picture'
          width={400}
          height={410}
          className='rounded-lg'
        />
      </div>
      {englishParagraphs.map((para: BioContent) => (
        <BioParagraph text={para.text} key={para.key} />
      ))}
    </div>
  );
};

export default Inma;
