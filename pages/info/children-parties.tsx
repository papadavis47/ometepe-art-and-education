import Head from 'next/head';
import Image from 'next/image';
import { useAppContext } from '../../Context/appContext';
import Construction from '../../components/Construction';

const Parties = () => {
  const { spanish } = useAppContext();
  return (
    <div className='max-w-5xl px-4 mx-auto text-white page-spacing'>
      <Head>
        <title>Children&apos;s Party Service</title>
        <meta name='description' content='Ometepe Art and Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='py-4 my-2'>
        <Construction title={spanish ? 'Fiestas infantiles' : "Children's Parties"} />
      </div>
    </div>
  );
};
export default Parties;
