import { useAppContext } from "../../Context/appContext.js";

const Contact = () => {
  const { spanish } = useAppContext();
  return (
    <div className='mt-6 text-white'>
      <h2 className='text-xl'>
        {spanish
          ? "Complete nuestro formulario de interés haciendo clic "
          : "Fill out our interest form by clicking "}
        <a className='' href='https://form.jotform.com/221110567022137'>
          {spanish ? "aqui" : "here"}
        </a>{" "}
        {spanish ? "o:" : "or:"}
      </h2>
      <h2 className='text-xl'>{spanish ? "Correo electrónico" : "Send an Email"}:&nbsp; </h2>
      <p>
        <span className='text-lg'> ometepeartandeducation@gmail.com</span>
      </p>
    </div>
  );
};

export default Contact;
