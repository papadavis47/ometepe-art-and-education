import { SiNextdotjs } from 'react-icons/si';
import { useAppContext } from '../../Context/appContext';

const Footer = () => {
  const { spanish } = useAppContext();
  const year = new Date().getFullYear();
  return (
    <footer className='flex flex-col items-center justify-center w-full py-12 mt-12 font-serif bg-white border-t-2 text-stone-800 border-stone-400'>
      <h2 className='text-xl hover:text-[#d26914]'>
        <span>&copy;</span> Ometepe Art & Education {year}
      </h2>
      <div className=''>
        <h3 className='text-xl italic hover:text-[#d26914]'>
          <a className='' href='mailto:ometepeartandeducation@gmail.com'>
            ometepeartandeducation@gmail.com
          </a>
        </h3>
      </div>
      <div className='flex items-center text-xl hover:text-[#d26914]'>
        <p className='mr-2'>{spanish ? 'Construido con ' : 'Built with '}</p>
        <SiNextdotjs />
      </div>
    </footer>
  );
};

export default Footer;
