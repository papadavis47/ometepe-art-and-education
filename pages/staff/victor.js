import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import StaffTitle from "../../components/StaffTitle";
import BioParagraph from "../../components/BioParagraph";
import { englishParagraphs } from "../../data/victorBio.js";

const Victor = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <StaffTitle name='Victor Fuentes' titulo='Pintor y Poeta' title='Painter and Poet' />
      <div className='flex flex-col items-center px-4 mx-auto sm:max-w-6xl'>
        <Image
          src='/images/staff/victor-portrait.jpg'
          alt='Victor Fuentes, Painter'
          width={800}
          height={500}
          className='shadow-lg rounded-3xl shadow-black'
        />
        <div className=''>
          <h1 className='py-2 my-8 font-serif text-3xl text-white sm:text-4xl md:text-center'>
            {spanish ? "Declaración del artista" : "Artist's Statement"}
          </h1>
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

export default Victor;
