import { useAppContext } from "../../Context/appContext.js";

function StaffTitle({ title, titulo, name }) {
  const { spanish } = useAppContext();
  return (
    <div className='w-full mx-auto text-center text-white max-w-8xl'>
      <h1 className='mt-6 mb-4 font-serif text-4xl sm:text-5xl'>{name}</h1>
      <h2 className='mb-4 font-serif text-3xl italic sm:text-4xl'>{spanish ? titulo : title}</h2>
    </div>
  );
}

export default StaffTitle;
