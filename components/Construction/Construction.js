import { useAppContext } from "../../Context/appContext.js";

const Construction = ({ title }) => {
  const { spanish } = useAppContext();
  return (
    <>
      <div className='section has-text-centered'>
        <h1 className='is-size-1 is-size-3-mobile has-text-light has-text-weight-light title mt-6'>
          {title}
        </h1>
        <h2 className=' is-italic is-size-4 is-size-6-mobile has-text-weight-light has-text-light subtitle'>
          {spanish ? "En Proceso" : "Under Construction"} 🔨
        </h2>
      </div>
      <section className='hero is-large is-hidden-mobile ometepe'>
        <div className='hero-body'></div>
      </section>
    </>
  );
};

export default Construction;
