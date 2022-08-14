import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import {
  englishMissionStatement,
  spanishMissionStatement,
} from "../../data/missionStatementData.js";

const Mission = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 mx-auto mt-4 text-white page-spacing'>
      <div className='py-6 font-serif'>
        <h1 className='text-3xl sm:text-5xl'>{spanish ? "Nuestra misión" : "Our Mission"}</h1>
      </div>
      <div className='text-xl sm:text-2xl'>
        <quote className=''>{spanish ? spanishMissionStatement : englishMissionStatement}</quote>
      </div>
      <div className='mt-6'>
        <Image
          src='/images/mission/together2.jpg'
          width={800}
          height={600}
          alt='Young Folklore Dancers'
          className='rounded-xl'
        />
        <figcaption className='font-semibold sm:text-xl'>
          {spanish
            ? "Jóvenes bailarines @ Ometepe Art and Education"
            : "Young Dancers @ Ometepe Art and Education"}
        </figcaption>
      </div>
    </div>
  );
};

export default Mission;
