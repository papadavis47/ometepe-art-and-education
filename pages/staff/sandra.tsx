import Image from 'next/image';
import { useAppContext } from '../../Context/appContext';
import StaffTitle from '../../components/StaffTitle';
import { englishParagraphs } from '../../data/sandraBioData';
import BioParagraph from '../../components/BioParagraph';

const Sandra = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto page-spacing'>
      <StaffTitle name='Sandra Gutierrez' titulo='Maestra' title='Teacher' />
      <div className='sm:pl-4'>
        <Image
          src='/images/staff/sandra-profile.jpg'
          alt='Sandra - profile picture'
          width={400}
          height={400}
          className='rounded-lg'
        />
      </div>
      {englishParagraphs.map((para) => (
        <BioParagraph text={para.text} key={para.id} />
      ))}
    </div>
  );
};

export default Sandra;
