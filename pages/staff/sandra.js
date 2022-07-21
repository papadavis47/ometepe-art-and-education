import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import StaffTitle from "../../components/StaffTitle";
import { englishParagraphs } from "../../data/sandraBioData.js";
import BioParagraph from "../../components/BioParagraph";

const Sandra = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <StaffTitle name='Sandra Gutierrez' titulo='Maestra' title='Teacher' />
      <div className='flex flex-col items-center px-4 mx-auto sm:max-w-6xl'>
        <Image
          src='/images/staff/sandra-profile.jpg'
          alt='Sandra - profile picture'
          width={500}
          height={500}
          className='shadow-lg rounded-3xl shadow-black'
        />
        <div className=''>
          <section className='mt-6 text-white'>
            {englishParagraphs.map((para) => (
              <BioParagraph text={para.text} key={para.id} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Sandra;
