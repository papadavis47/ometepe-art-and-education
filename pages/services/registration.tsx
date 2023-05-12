import { useSpanishContext } from '@context/spanishContext';
// import ComingSoon from '@components/ComingSoon';
import Image from 'next/image';

const Registration = () => {
  const { spanish } = useSpanishContext();
  return (
    <div className='max-w-4xl px-6 mx-auto text-white page-spacing'>
      <h1 className='my-4 font-serif text-3xl sm:text-5xl'>OAE 2023 Summer Camps</h1>
      <div className='my-4'>
        <p className='py-4 text-lg font-bold'>Click the flyer to register:</p>
        <a href='https://form.jotform.com/221290155777156' target='_blank' rel='noreferrer'>
          <Image
            src='/images/camps/campflyer2023.jpg'
            width={900}
            height={1000}
            alt='Flyer for summer camp information'
          />
        </a>
      </div>
      {/* <ComingSoon
        title={spanish ? 'Registracion' : 'Registration'}
        text={spanish ? 'Formulario disponible pronto!' : 'Registration Form Coming Soon!'}
      /> */}
      <div className='text-lg '>
        <p className=''>Or for more information, email:</p>
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
