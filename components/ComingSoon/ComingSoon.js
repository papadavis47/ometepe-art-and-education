import { useAppContext } from "../../Context/appContext.js";

const ComingSoon = ({ title }) => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='pt-6 mt-6 text-center'>
        <h1 className='text-5xl text-white'>{title}</h1>
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
