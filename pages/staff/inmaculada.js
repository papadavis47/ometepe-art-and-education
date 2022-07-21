import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import StaffTitle from "../../components/StaffTitle";
import BioParagraph from "../../components/BioParagraph";
import { englishParagraphs } from "../../data/inmaculadaBioData.js";

const Inmaculada = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <StaffTitle name='Inmaculada Cruz' titulo='Pintora y Chef' title='Painter and Chef' />
      <div className='flex flex-col items-center px-4 mx-auto sm:max-w-6xl'>
        <Image
          src='/images/staff/inmaculada.jpg'
          alt='Inmaculda - profile picture'
          width={700}
          height={510}
          className='shadow-lg rounded-3xl shadow-black'
        />
        <div className=''>
          <h1 className='py-2 my-8 font-serif text-3xl text-white sm:text-4xl md:text-center'>
            {spanish ? "Biografia del artista" : "Artist's Biography"}
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

export default Inmaculada;
