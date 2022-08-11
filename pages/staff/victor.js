import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import StaffTitle from "../../components/StaffTitle";
import BioParagraph from "../../components/BioParagraph";
import { englishParagraphs } from "../../data/victorBioData.js";

const Victor = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto'>
      <StaffTitle name='Victor Fuentes' titulo='Pintor y Poeta' title='Painter and Poet' />
      <div className='sm:pl-4'>
        <Image
          src='/images/staff/victor-portrait.jpg'
          alt='Victor Fuentes, Painter'
          width={700}
          height={400}
          className='shadow-lg rounded-3xl shadow-black'
        />
      </div>
      <div className=''>
        <h1 className='py-2 my-8 font-serif text-3xl text-white sm:text-4xl'>
          {spanish ? "Declaración del artista" : "Artist's Statement"}
        </h1>
        {englishParagraphs.map((para) => (
          <BioParagraph text={para.text} key={para.id} />
        ))}
      </div>
    </div>
  );
};

export default Victor;
