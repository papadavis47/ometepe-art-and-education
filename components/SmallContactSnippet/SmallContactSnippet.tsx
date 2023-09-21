import { useSpanishContext } from '@context/spanishContext';

function SmallContactSnippet() {
  const { spanish } = useSpanishContext();
  return (
    <div className='mt-6 text-xl sm:text-2xl'>
      {/* <h2 className=''>
        {spanish ? 'Para nuestro formulario de interés haga clic ' : 'For our interest form click '}
        <a className='font-bold underline' href='https://form.jotform.com/221110567022137'>
          {spanish ? 'aqui' : 'here'}
        </a>{' '}
        {spanish ? 'o:' : 'or:'}
      </h2> */}
      <p className='pb-4 mt-4'>
        <span className='italic hover:text-yellow-300'>
          <a className='' href='mailto:ometepeartandeducation@gmail.com'>
            ometepeartandeducation@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
}

export default SmallContactSnippet;
