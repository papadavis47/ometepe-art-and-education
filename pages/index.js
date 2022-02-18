import Head from "next/head";
import Image from "next/image";
import NavBar from "../src/components/NavBar.js";
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
      <NavBar />
      <h1 className='is-size-2 has-text-centered mt-5'>
        This is for experimenting with Bulma in Next
      </h1>
      <div className='buttons'>
        <button className='button is-success is-small'>Small</button>
        <button className='button is-warning is-medium'>Medium</button>
        <button className='button is-danger is-large' onClick={toggleSpanish}>
          Large
        </button>
      </div>
      <div className='buttons'>
        <button className='button is-success is-outlined'>Outlined</button>
        <button className='button is-danger' disabled>
          Disabled
        </button>
      </div>
      <h2 className='is-size-1 has-text-centered mt-6'>
        Now I have learned that I can use Bulma with Next.js!
      </h2>
      <h3 className='is-size-1 has-text-centered mt-6'>I can use this to reproduce it later :)</h3>
      <p className='has-text-centered is-size-2'>
        Now is the time for all good men to come to the aid
      </p>
      <p className='has-text-centered is-size-3'>Hereis another experiment!</p>
      <p className='is-size-1 has-text-centered'>Now try this!</p>
    </div>
  );
}
