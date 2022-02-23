import Image from "next/image";
import EnglishStatement from "../../src/components/EnglishStatement";

const Mission = () => {
  return (
    <div className='column is-centered'>
      <div className='content mt-5'>
        <h1 className='title has-text-centered has-text-light is-size-1 has-text-weight-light'>
          Our Mission
        </h1>
      </div>
      <section className='content has-text-light'>
        <p className='is-size-6-mobile has-text-justified is-size-4-desktop'>
          To share, with as wide an audience as possible, the traditional dance, musical culture and
          culinary dishes unique to our beautiful Central American country. We also wish to expose
          as many people as possible to our visual arts.
        </p>
      </section>
      <div className='columns is-flex is-centered mt-6'>
        <figure className='image'>
          <Image src='/dancer-ometepe.jpg' width={600} height={500} alt='Dancer in Ometepe' />
          <figcaption className='has-text-light is-size-6'>
            Dancer, The Island of Ometepe June 2021
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Mission;
