import { useAppContext } from "../../src/Context/appContext.js";

const Contact = () => {
  const { spanish } = useAppContext();
  return (
    <div className='has-text-light has-textweight-light has-text-centered mt-6'>
      <h2 className='is-size-3'>
        {spanish ? "Correo electrónico" : "Email"}:&nbsp;{" "}
        <span className='has-text-weight-bold'> ometepeartandeducation@gmail.com</span>
      </h2>
    </div>
  );
};

export default Contact;
