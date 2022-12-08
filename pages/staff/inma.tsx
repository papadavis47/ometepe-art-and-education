import Image from 'next/image';
import { useAppContext } from '../../Context/appContext';
import StaffTitle from '../../components/StaffTitle';
import { englishParagraphs } from '../../data/InmaBioData';
import BioParagraph from '../../components/BioParagraph';

const Inma = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto page-spacing'>
      <StaffTitle title='Teacher' titulo='Maestra' name='Inma Davis' />
      <div className='sm:pl-4'>
        <Image
          src='/images/staff/inma-profile.jpg'
          alt='Inma - profile picture'
          width={400}
          height={410}
          className='rounded-lg'
        />
      </div>
      {englishParagraphs.map((para) => (
        <BioParagraph text={para.text} key={para.id} />
      ))}
    </div>
  );
};

export default Inma;
