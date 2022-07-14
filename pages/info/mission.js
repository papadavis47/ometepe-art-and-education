import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";

const spanishMissionStatement =
  "La misión de nuestra organizacíon es compartir y dar a conocer nuestra cultura destacando la danza folklorica, arte visual, historia de la música y lengua de nuestro hermoso país Nicaragua de America Central a traves de la conexión y participacion de nuestra communidad en el Noroeste.";

const englishMissionStatement =
  "To share, with as wide an audience as possible, the traditional dance, musical culture and culinary dishes unique to our beautiful Central American country. We also wish to expose as many people as possible to our visual arts.";

const Mission = () => {
  const { spanish } = useAppContext();
  return (
    <div className='column is-centered'>
      <div className='mt-5 content'>
        <h1 className='title has-text-centered has-text-light is-size-1 has-text-weight-light'>
          {spanish ? "Nuestra misión" : "Our Mission"}
        </h1>
      </div>
      <section className='content has-text-light'>
        <p className='is-size-6-mobile has-text-justified is-size-4-desktop'>
          {spanish ? spanishMissionStatement : englishMissionStatement}
        </p>
      </section>
      <div className='mt-6 columns is-flex is-centered'>
        <figure className='image'>
          <Image src='/dancer-ometepe.jpg' width={600} height={500} alt='Dancer in Ometepe' />
          <figcaption className='has-text-light is-size-6'>
            {spanish
              ? "Bailarín, La Isla de Ometepe Junio ​​2021"
              : "Dancer, The Island of Ometepe June 2021"}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Mission;
