import Construction from "../../components/Construction";
import { useAppContext } from "../../Context/appContext.js";
import Poster1 from "../../public/images/events/central-american-festival.jpg";
import Poster2 from "../../public/images/events/central-american-festival2.jpg";
import Advert1 from "../../public/images/events/open-house-oae-spanish.jpg";
import Advert2 from "../../public/images/events/open-house-oae-english.jpg";
import danceLessonsEn from "../../public/images/events/dance-lessons-en.png";
import danceLessonsEs from "../../public/images/events/dance-lessons-esp.png";
import Image from "next/future/image";

const Events = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-4xl px-4 pt-6 mx-auto mt-8 text-white page-spacing'>
      <h1 className='font-serif text-4xl sm:text-6xl'>{spanish ? "Eventos" : "Events"}</h1>
      <div>
        <p className='my-6 text-xl font-semibold sm:text-2xl'>
          {spanish ? "Lecciones de baile" : "Dance Lessons"}
        </p>
        <div>
          <Image
            alt='Flyer for Dance Lessons'
            src={spanish ? danceLessonsEs : danceLessonsEn}
            height={600}
            width={900}
            placeholder='blur'
            className='block border-8 border-white border-solid'
          />
        </div>
      </div>
      <div>
        <p className='my-6 text-xl font-semibold sm:text-2xl'>
          {spanish ? "Sábado, 1 de Octubre" : "Saturday, October 1st"}
        </p>
        <div>
          <Image
            alt='Advertisement for OpenHouse'
            src={spanish ? Advert1 : Advert2}
            height={900}
            width={600}
            placeholder='blur'
            className='block border-8 border-white border-solid'
          />
        </div>
      </div>
      <p className='my-4 text-xl sm:text-2xl'>
        {spanish ? "Anteriormente, hemos participado en:" : "Previously, we have participated in:"}
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
            className='block border-8 border-white border-solid'
          />
        </div>
        <div>
          <Image
            alt='Poster for Central American Festival 2022'
            src={Poster2}
            height={700}
            width={500}
            placeholder='blur'
            className='block border-8 border-white border-solid'
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
