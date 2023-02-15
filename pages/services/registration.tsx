import { useSpanishContext } from '@context/spanishContext';
import ComingSoon from '@components/ComingSoon';

const Registration = () => {
  const { spanish } = useSpanishContext();
  return (
    <div className='px-6 page-spacing'>
      <ComingSoon
        title={spanish ? 'Registracion' : 'Registration'}
        text={spanish ? 'Formulario disponible pronto!' : 'Registration Form Coming Soon!'}
      />
      <div className='max-w-sm mx-auto text-lg text-white'>
        <p className=''>For now, please email:</p>
        <p>
          <a
            className='font-semibold hover:font-bold'
            href='mailto:ometepeartandeducation@gmail.com'
          >
            ometepeartandeducation@gmail.com
          </a>
        </p>
        <p className='text-lg text-white'>
          Or text:&nbsp; <span className='font-semibold'>206-866-8204</span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
