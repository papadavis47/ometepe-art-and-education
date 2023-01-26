import { useAppContext } from '../../Context/appContext';

type pageName = {
  title?: string;
};

const Construction = ({ title }: pageName) => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='text-center'>
        <h1 className='mt-6 text-4xl text-white'>{title}</h1>
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
