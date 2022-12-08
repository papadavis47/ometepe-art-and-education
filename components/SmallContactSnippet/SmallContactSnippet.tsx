import { useAppContext } from '../../Context/appContext.js';

function SmallContactSnippet() {
  const { spanish } = useAppContext();
  return (
    <div className='mt-6 text-lg sm:text-xl'>
      <h2 className=''>
        {spanish ? 'Para nuestro formulario de interés haga clic ' : 'For our interest form click '}
        <a className='font-bold underline' href='https://form.jotform.com/221110567022137'>
          {spanish ? 'aqui' : 'here'}
        </a>{' '}
        {spanish ? 'o:' : 'or:'}
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
