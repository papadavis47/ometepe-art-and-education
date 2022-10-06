import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../../Context/appContext.js";
import SmallContactSnippet from "../../components/SmallContactSnippet";

const Camp = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-5xl px-4 mx-auto text-white page-spacing'>
      <Head>
        <title>Summer Camps 2022</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='py-4 my-2'>
        <h1 className='my-4 font-serif text-3xl sm:text-5xl'>Summer Camps 2022</h1>
        <p className='py-6 text-xl'>
          Thank you to the wonderful kids and families that participated in our first summer camps
          of 2022! Much love from <span className='font-semibold'>las maestras</span>!
        </p>
        <div className='my-4'>
          <Image
            src='/images/camp/group-summer-camp.jpg'
            width={1200}
            height={700}
            alt='Flyer for summer camp information'
            className='rounded-md'
          />
        </div>
        <p className='py-4 text-xl'>Summer Camps are open to students from ages 5-12 years old. </p>
        <p className='mt-3 text-lg sm:text-xl'>
          <strong className=''>No prior Spanish language required.</strong>
        </p>
      </div>
      <section className='text-xl'>
        <p className='mt-3'>
          Our Ometepe summer camp has been designed to accommodate your family’s schedule, offering
          weekly camps.
        </p>
        <p className='mt-3'>
          Our camps are well-supervised, engaging, and educational. Available all day, children will
          participate in creative projects, hands-on activities, and clubs.{" "}
        </p>
        <p className='mt-3'>
          Our Summer Camp curriculum explores a variety of topics and concepts. Among other physical
          activities - we include field trips around TT Minor Park and Miller Park - for play and
          for exercise.
        </p>
      </section>
      <section className='pt-4 mt-4 '>
        <h2 className='text-3xl font-semibold sm:text-4xl'>Past Schedule for Summer 2022</h2>
        <ul className='mt-4 text-lg sm:text-xl'>
          <li className=''>
            <p>
              Session 1: &nbsp;June 20 - June 24{" "}
              <span className='font-bold'>&nbsp;Central America - Knowing Nicaragua</span>
            </p>
          </li>
          <li className=''>
            <p>
              Session 2: &nbsp;June 27 - July 01{" "}
              <span className='font-bold'>&nbsp;Under the Sea</span>
            </p>
          </li>
          <li className=''>
            <p>
              Session 3: &nbsp;July 05 - July 08{" "}
              <span className='font-bold'>&nbsp;Central America - Knowing El Salvador</span>
            </p>
          </li>
          <li className=''>
            <p>
              Session 4: &nbsp;July 11 - July 15{" "}
              <span className='font-bold'>&nbsp;Crazy Scientist</span>
            </p>
          </li>
          <li className=''>
            <p>
              Session 5: &nbsp;July 18 - July 22{" "}
              <span className='font-bold'>&nbsp;Central America - Knowing Guatemala</span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 6: &nbsp;July 25 - July 29{" "}
              <span className='font-bold'>&nbsp;The Wildlife</span>
            </p>
          </li>
        </ul>
      </section>
      <div className='mt-6'>
        <Image
          src='/images/informational/flyer.jpeg'
          width={700}
          height={700}
          alt='Flyer for summer camp information'
        />
      </div>
      <div className='py-3 mt-5'>
        <SmallContactSnippet />
      </div>
    </div>
  );
};

export default Camp;
