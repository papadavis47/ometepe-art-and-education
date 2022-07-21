import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import StaffTitle from "../../components/StaffTitle";
import { englishParagraphs } from "../../data/InmaBioData.js";
import BioParagraph from "../../components/BioParagraph";

const Inma = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <StaffTitle title='Teacher' titulo='Maestra' name='Inma Davis' />
      <div className='flex flex-col items-center px-4 mx-auto sm:max-w-6xl'>
        <Image
          src='/images/staff/inma-profile.jpg'
          alt='Inma - profile picture'
          width={500}
          height={510}
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

export default Inma;
