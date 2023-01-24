import { useAppContext } from '../../Context/appContext';

type props = {
  title?: string;
};

const Construction = (props) => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='text-center'>
        <h1 className='mt-6 text-4xl text-white'>{props.title}</h1>
        <h2 className='text-2xl italic text-white'>
          {spanish ? 'En Proceso' : 'Under Construction'} 🔨
        </h2>
      </div>
      <section className=''>
        <div className=''></div>
      </section>
    </>
  );
};

export default Construction;
