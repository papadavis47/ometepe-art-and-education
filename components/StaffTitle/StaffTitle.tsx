import { useAppContext } from '../../Context/appContext';

function StaffTitle({ title, titulo, name }) {
  const { spanish } = useAppContext();
  return (
    <div className='pt-2 pl-4 mt-4 text-white sm:pt-4 sm:pl-6'>
      <h1 className='mt-6 mb-4 font-serif text-4xl sm:text-6xl'>{name}</h1>
      <h2 className='mb-4 font-serif text-3xl italic sm:text-4xl'>{spanish ? titulo : title}</h2>
    </div>
  );
}

export default StaffTitle;
