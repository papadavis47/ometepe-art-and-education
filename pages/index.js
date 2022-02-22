import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../src/Context/appContext.js";

export default function Home() {
  const { spanish, setSpanish, toggleSpanish } = useAppContext();
  return (
    <div>
      <Head>
        <title>Ometepe Art and Education</title>
        <meta name='description' content='Website for Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          Ometepe Art and Education
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          Adding Our Voices to a Beautifully Diverse World
        </h2>
      </div>
      <div className='buttons'>
        <button className='button is-success is-small'>Small</button>
        <button className='button is-warning is-medium'>Medium</button>
        <button className='button is-danger is-large' onClick={toggleSpanish}>
          {spanish ? "Grande" : "Large"}
        </button>
      </div>
      <div className='buttons'>
        <button className='button is-success is-outlined'>Outlined</button>
        <button className='button is-danger' disabled>
          Disabled
        </button>
      </div>
    </div>
  );
}
