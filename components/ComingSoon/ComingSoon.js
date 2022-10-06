import { useAppContext } from "../../Context/appContext.js";

const ComingSoon = ({ title }) => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='p-6 mt-6 text-center'>
        <h1 className='text-3xl text-white lg:text-5xl'>{title}</h1>
        <h2 className='mt-4 text-2xl italic text-white'>
          {spanish ? "Viene Pronto" : "Coming Soon"} 🔨
        </h2>
      </div>
      <section className=''>
        <div className=''></div>
      </section>
    </>
  );
};

export default ComingSoon;
