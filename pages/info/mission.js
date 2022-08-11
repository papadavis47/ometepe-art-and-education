import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import {
  englishMissionStatement,
  spanishMissionStatement,
} from "../../data/missionStatementData.js";

const Mission = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto mt-8 text-white'>
      <div className='py-6 font-serif'>
        <h1 className='text-3xl sm:text-5xl'>{spanish ? "Nuestra misión" : "Our Mission"}</h1>
      </div>
      <div className='text-xl sm:text-2xl'>
        <quote className=''>{spanish ? spanishMissionStatement : englishMissionStatement}</quote>
      </div>
      <div className='mt-6'>
        <Image
          src='/images/nicaragua/dancer-ometepe.jpg'
          width={600}
          height={500}
          alt='Dancer in Ometepe'
          className='rounded-xl'
        />
        <figcaption className='font-semibold'>
          {spanish
            ? "Bailarín, La Isla de Ometepe Junio ​​2021"
            : "Dancer, The Island of Ometepe June 2021"}
        </figcaption>
      </div>
    </div>
  );
};

export default Mission;
