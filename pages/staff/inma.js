import Image from "next/image";
import { useAppContext } from "../../src/Context/appContext.js";

const Inma = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          Inma Davis
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          {spanish ? "Maestra" : "Teacher"}
        </h2>
      </div>
      <div className='columns is-centered  section pt-0'>
        <div className='column is-three-quarters-desktop '>
          <figure className='has-text-centered my-4'>
            <Image src='/inma-profile.jpg' alt='Inma - profile picture' width={500} height={510} />
          </figure>
          <div>
            <article className='mt-6'>
              <div className='block  has-text-white my-3 is-size-3'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Inma has more than eighteen years of experience working as an educator.{" "}
                </p>
              </div>
              <div className='block  has-text-white my-3 is-size-3'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  During that time she has worked with children of all ages. She has been a Spanish
                  teacher for more than six years - working with kids between 5 and 14 years old.
                  She has a bachelor&apos;s degree in Art History from Escuela Nacional Artes
                  Plasticas - a college in her home country of Nicaragua.
                </p>
              </div>
              <div className='block  has-text-white my-3 is-size-3'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  In the late 1990s, she worked for two years for a non-profit group - helping to
                  teach homeless children in Managua, the capital city of Nicaragua.
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Inma also paints and enjoys practicing and performing traditional Nicaraguan
                  folklore dance in her spare time. She has three bilingual children of her own.
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  These things have motivated her to continue helping and educating children as well
                  as showing and teaching the culture of Latin America to the community here in
                  Washington.
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Her favorite food is Arroz Aguado, Nicaraguan Style.
                </p>
              </div>
              <div className='block'>
                <p className='is-size-5-mobile is-size-4  has-text-white'>
                  Inma loves music, and she loves watching Netflix ( or Hulu ) - to relax and unwind
                  from her long days 😍
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inma;
