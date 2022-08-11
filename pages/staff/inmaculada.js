import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import StaffTitle from "../../components/StaffTitle";
import BioParagraph from "../../components/BioParagraph";
import { englishParagraphs } from "../../data/inmaculadaBioData.js";

const Inmaculada = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto'>
      <StaffTitle name='Inmaculada Cruz' titulo='Pintora y Chef' title='Painter and Chef' />
      <div className='sm:pl-4'>
        <Image
          src='/images/staff/inmaculada.jpg'
          alt='Inmaculda - profile picture'
          width={600}
          height={410}
          className='shadow-lg rounded-3xl shadow-black'
        />
      </div>
      <div className=''>
        <h1 className='py-2 my-8 font-serif text-3xl text-white sm:text-4xl'>
          {spanish ? "Biografia del artista" : "Artist's Biography"}
        </h1>
        {englishParagraphs.map((para) => (
          <BioParagraph text={para.text} key={para.id} />
        ))}
      </div>
    </div>
  );
};

export default Inmaculada;
