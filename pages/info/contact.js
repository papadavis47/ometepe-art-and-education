import { useAppContext } from "../../Context/appContext.js";

const Contact = () => {
  const { spanish } = useAppContext();
  return (
    <div className='has-text-light has-textweight-light has-text-centered mt-6'>
      <h2 className='is-size-3 is-size-5-mobile'>
        {spanish
          ? "Complete nuestro formulario de interés haciendo clic "
          : "Fill out our interest form by clicking "}
        <a
          className='has-text-light has-text-weight-bold is-underlined'
          href='https://form.jotform.com/221110567022137'
        >
          {spanish ? "aqui" : "here"}
        </a>{" "}
        {spanish ? "o:" : "or:"}
      </h2>
      <h2 className='is-size-3 is-size-5-mobile'>
        {spanish ? "Correo electrónico" : "Send an Email"}:&nbsp;{" "}
      </h2>
      <p>
        <span className='is-size-5-mobile is-size-3'> ometepeartandeducation@gmail.com</span>
      </p>
    </div>
  );
};

export default Contact;
