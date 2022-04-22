import { useAppContext } from "../../src/Context/appContext.js";

const Contact = () => {
  const { spanish } = useAppContext();
  return (
    <div className='has-text-light has-textweight-light has-text-centered mt-6'>
      <h2 className='is-size-3 is-size-5-mobile'>
        {spanish ? "Correo electrónico" : "Email"}:&nbsp;{" "}
      </h2>
      <span className='has-text-weight-bold is-size-5-mobile is-size-3'>
        {" "}
        ometepeartandeducation@gmail.com
      </span>
    </div>
  );
};

export default Contact;
