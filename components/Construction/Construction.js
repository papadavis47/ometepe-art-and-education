import { useAppContext } from "../../Context/appContext.js";

const Construction = ({ title }) => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='text-center'>
        <h1 className='mt-6 text-4xl'>{title}</h1>
        <h2 className='italic'>{spanish ? "En Proceso" : "Under Construction"} 🔨</h2>
      </div>
      <section className=''>
        <div className=''></div>
      </section>
    </>
  );
};

export default Construction;
