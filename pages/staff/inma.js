import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";

const Inma = () => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='text-white'>
        <h1 className='mt-6'>Inma Davis</h1>
        <h2 className='italic'>{spanish ? "Maestra" : "Teacher"}</h2>
      </div>
      <div className=''>
        <div className=''>
          <Image src='/inma-profile.jpg' alt='Inma - profile picture' width={500} height={510} />
          <div>
            <section className='mt-6 text-white'>
              <div className='my-3'>
                <p className=''>
                  Inma has more than eighteen years of experience working as an educator.{" "}
                </p>
              </div>
              <div className=''>
                <p className=''>
                  During that time she has worked with children of all ages. She has been a Spanish
                  teacher for more than six years - working with kids between 5 and 14 years old.
                  She has a bachelor&apos;s degree in Art History from Escuela Nacional Artes
                  Plasticas - a college in her home country of Nicaragua.
                </p>
              </div>
              <div className=''>
                <p className=''>
                  In the late 1990s, she worked for two years for a non-profit group - helping to
                  teach homeless children in Managua, the capital city of Nicaragua.
                </p>
              </div>
              <div className=''>
                <p className=''>
                  Inma also paints and enjoys practicing and performing traditional Nicaraguan
                  folklore dance in her spare time. She has three bilingual children of her own.
                </p>
              </div>
              <div className=''>
                <p className=''>
                  These things have motivated her to continue helping and educating children as well
                  as showing and teaching the culture of Latin America to the community here in
                  Washington.
                </p>
              </div>
              <div className=''>
                <p className=''>Her favorite food is Arroz Aguado, Nicaraguan Style.</p>
              </div>
              <div className=''>
                <p className=''>
                  Inma loves music, and she loves watching Netflix ( or Hulu ) - to relax and unwind
                  from her long days 😍
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inma;
