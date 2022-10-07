import Head from "next/head";
import Image from "next/image";
import { schedule } from "../../data/programsData.js";
import ScheduleItems from "../../components/ScheduleItems";

const LearningClub = () => {
  return (
    <div className='max-w-4xl px-4 mx-auto text-white page-spacing'>
      <Head>
        <title>Afterschool Learning Club</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='mt-6 '>
        <div>
          <h1 className='py-6 font-serif text-4xl sm:text-5xl'>Afterschool Learning Club</h1>
          <p className='text-xl italic font-semibold'>
            For PreK thru 6 Grade ( 4 to 12 years old )
          </p>
        </div>
        <div className='my-4 text-lg sm:text-xl'>
          <p className='py-2'>
            We offer fun learning experiences to promote Spanish language and culture
          </p>
          <p className='py-2'>Our teachers have extensive teaching experience</p>{" "}
          <p className='py-2'>Our staff members are patient, loving and always available to help</p>
          <p className='py-2'>
            The children in our care have time to relax, learn, play and enjoy their day
          </p>
          <p className='py-2'>There is plenty of quiet space for homework and reading</p>
          <p className='py-2'>Healthy snacks provided.</p>
        </div>
        <div>
          <p className='text-lg font-semibold'>
            <span>Hours of Operation:&nbsp;</span>
            <span>&nbsp;2:30pm to 6pm</span>{" "}
          </p>
          <p className='text-lg font-semibold'>Cost: $500 per month or $150 per week</p>
        </div>
      </section>
      <section className='mt-4'>
        <h2 className='py-2 text-xl font-semibold'>Daily Schedule:</h2>
        <ul className='mt-2 text-lg sm:text-xl'>
          {schedule.daily.map((item) => (
            <ScheduleItems {...item} key={item.id} />
          ))}
        </ul>
      </section>

      <section className='mt-4'>
        <h2 className='py-2 text-xl font-semibold'>
          Daily Creative Time / Skill Learning Schedule:
        </h2>
        <ul className='mt-2 text-lg sm:text-xl'>
          {schedule.creativeTime.map((item) => (
            <ScheduleItems {...item} key={item.id} />
          ))}
        </ul>
      </section>
      <div className='mt-6'>
        <Image
          src='/images/learning-club/inmaculada-mateo.jpg'
          width={900}
          height={700}
          alt='Inmaculada with student'
        />
        <figcaption className='font-semibold'>Inmaculada with student, 2022</figcaption>
      </div>
    </div>
  );
};

export default LearningClub;
