import Head from "next/head";

const Camp = () => {
  return (
    <div className='has-text-light has-text-weight-light'>
      <Head>
        <title>Summer Camps 2022</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='is-size-1 is-size-3-mobile  title mt-6 has-text-light has-text-weight-light has-text-centered'>
        Summer Camps 2022
      </h1>
      <p className='is-size-6-mobile has-text-justified is-size-4-desktop'>
        Summer Camps are open students from 5-12 years olds.{" "}
      </p>
      <p className='is-size-6-mobile has-text-justified is-size-4-desktop mt-3'>
        <strong className='has-text-light'>No prior Spanish language required.</strong>
      </p>
      <p className='is-size-6-mobile has-text-justified is-size-4-desktop mt-3'>
        Our Ometepe summer camp has been designed to accommodate your family’s schedule, offering
        weekly camps.
      </p>
      <p className='is-size-6-mobile has-text-justified is-size-4-desktop mt-3'>
        Our camps are well-supervised, engaging, and educational. Available all day, children will
        participate in creative projects, hands-on activities, and clubs.{" "}
      </p>
      <p className='is-size-6-mobile has-text-justified is-size-4-desktop mt-3'>
        Our Summer Camp curriculum explores a variety of topics and concepts. Among other physical
        activities - we include field trips around TT. Minor Park and Miller Park - for play and
        exercise.
      </p>
      <section className='block has-text-light has-text-weight-light mt-4 pt-4'>
        <h2 className='title is-size-2 is-size-4-mobile has-text-light has-text-centered has-text-weight-semibold'>
          {" "}
          Schedule for Summer 2022
        </h2>
        <ul>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 1: &nbsp;June 20 - June 24{" "}
              <span className='has-text-weight-bold'>&nbsp;We Are All Amigos</span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 2: &nbsp;June 27 - July 01{" "}
              <span className='has-text-weight-bold'>&nbsp;Under the Sea</span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 3: &nbsp;July 05 - July 08{" "}
              <span className='has-text-weight-bold'>
                &nbsp;Central America - Knowing Nicaragua
              </span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 4: &nbsp;July 11 - July 15{" "}
              <span className='has-text-weight-bold'>&nbsp;Crazy Scientist</span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 5: &nbsp;July 18 - July 22{" "}
              <span className='has-text-weight-bold'>
                &nbsp;Central America - Knowing Guatemala
              </span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 6: &nbsp;July 25 - July 29{" "}
              <span className='has-text-weight-bold'>&nbsp;The Wildlife</span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 7: &nbsp;August 01 - August 25{" "}
              <span className='has-text-weight-bold'>&nbsp;Central America - Knowing Honduras</span>
            </p>
          </li>
          <li className='is-size-4 is-size-6-mobile'>
            <p>
              Session 8: &nbsp;August 08 - August 12{" "}
              <span className='has-text-weight-bold'>&nbsp;DIY Makers</span>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Camp;
