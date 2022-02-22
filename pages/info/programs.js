import Head from "next/head";

const Programs = () => {
  return (
    <div className='has-text-light has-text-weight-light'>
      <Head>
        <title>Programs</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='is-size-1 is-size-3-mobile  title mt-6 has-text-light has-text-weight-light has-text-centered'>
        Programs
      </h1>
      <p className='is-size-6-mobile has-text-justified is-size-4-desktop'>
        Our classes and workshops are designed to enrich the students lives by exposing them to
        Latino culture, language and creativity &hearts;
      </p>
    </div>
  );
};

export default Programs;
