import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import StaffTitle from "../../components/StaffTitle";
import { englishParagraphs } from "../../data/sandraBioData.js";
import BioParagraph from "../../components/BioParagraph";

const Sandra = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto'>
      <StaffTitle name='Sandra Gutierrez' titulo='Maestra' title='Teacher' />
      <div className='sm:pl-4'>
        <Image
          src='/images/staff/sandra-profile.jpg'
          alt='Sandra - profile picture'
          width={400}
          height={400}
          className='rounded-3xl'
        />
      </div>
      {englishParagraphs.map((para) => (
        <BioParagraph text={para.text} key={para.id} />
      ))}
    </div>
  );
};

export default Sandra;
