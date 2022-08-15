import Construction from "../../components/Construction";
import { useAppContext } from "../../Context/appContext.js";
import Poster1 from "../../public/images/events/central-american-festival.jpg";
import Poster2 from "../../public/images/events/central-american-festival2.jpg";
import Image from "next/image";

const Events = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 pt-6 mx-auto mt-8 text-white page-spacing'>
      <h1 className='font-serif text-4xl sm:text-6xl'>{spanish ? "Eventos" : "Events"}</h1>
      <p className='my-4 text-lg sm:text-xl'>
        {spanish ? "Estamos participando en:" : "We are participating in:"}
      </p>
      <p className='py-2 text-lg font-semibold sm:text-xl'>
        {spanish ? "Festival Centro Americano 2022" : "Central American Festival 2022"}
      </p>
      <div className='flex space-x-4'>
        <div className='max-w-fit'>
          <Image
            alt='Poster for Central American Festival 2022'
            src={Poster1}
            height={700}
            width={500}
            placeholder='blur'
          />
        </div>
        <div>
          <Image
            alt='Poster for Central American Festival 2022'
            src={Poster2}
            height={700}
            width={500}
            placeholder='blur'
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
