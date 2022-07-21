import { useAppContext } from "../../Context/appContext.js";

function SmallContactSnippet() {
  const { spanish } = useAppContext();
  return (
    // The min-w-max class is something I am trying
    // I may revisit this later
    <div className='mt-6 text-lg sm:text-xl min-w-max'>
      <h2 className=''>
        {spanish
          ? "Complete nuestro formulario de interés haciendo clic  "
          : "Fill out our interest form by clicking "}
        <a className='font-bold underline' href='https://form.jotform.com/221110567022137'>
          {spanish ? "aqui" : "here"}
        </a>{" "}
        {spanish ? "o:" : "or:"}
      </h2>
      <p className='mt-4'>
        <span className='italic'>
          <a className='' href='mailto:ometepeartandeducation@gmail.com'>
            ometepeartandeducation@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
}

export default SmallContactSnippet;
