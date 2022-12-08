import Head from "next/head";
import Image from "next/image";
import { MyLink } from "../../utils/myLink.js";
import ScheduleItems from "../../components/ScheduleItems";
import { schedule } from "../../data/programsData.js";

const SpanishClasses = () => {
  return (
    <div className='max-w-4xl px-4 mx-auto text-white page-spacing'>
      <Head>
        <title>Spanish Classes</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='mt-6 '>
        <div>
          <h1 className='py-6 font-serif text-4xl sm:text-5xl'>Spanish Classes</h1>
          <p className='py-4 text-xl'>
            Taught by{" "}
            <MyLink className='font-bold' href='/staff/inma'>
              Maestra Inma
            </MyLink>{" "}
            and{" "}
            <MyLink className='font-bold' href='/staff/sandra'>
              Maestra Sandra
            </MyLink>
          </p>
          <p className='pb-2 text-xl font-semibold'>
            Learn spanish with personal and dedicated tutors
          </p>
          <p className='mt-4 text-xl italic font-semibold'>
            Saturday classes for children or Monday and Wednesday evenings classes for adults
          </p>
          {/* <p className='mt-4 text-lg font-semibold'>
            Cost:&nbsp; 6 sessions - $180 -{" "}
            <span className='font-semibold'>materials included</span>
          </p> */}
        </div>
      </section>
      <section className='mt-4'>
        <h2 className='py-2 text-xl font-semibold'>Class times:</h2>
        <ul className='mt-2 text-lg sm:text-xl'>
          {schedule.spanishClasses.map((item) => (
            <ScheduleItems {...item} key={item.id} />
          ))}
        </ul>
      </section>

      <figure className='mt-6'>
        <Image
          src='/images/programs/machoraton.jpg'
          width={900}
          height={700}
          alt='Painting of traditional dancers - Nicaragua'
        />
        <figcaption className='font-semibold'>Machoraton - Dancers - Nicaragua</figcaption>
      </figure>
    </div>
  );
};

export default SpanishClasses;
