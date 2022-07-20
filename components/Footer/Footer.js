import React from "react";
import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import { useAppContext } from "../../Context/appContext.js";

const Footer = () => {
  const { spanish } = useAppContext();
  return (
    <footer className='flex flex-col items-center justify-center w-full py-4 mt-6 bg-white border-t-2 text-stone-700 border-stone-400'>
      <h2 className='font-semibold hover:text-[#d26914]'>
        <span>&copy;</span> Ometepe Art & Education 2022
      </h2>
      <div className=''>
        <h3 className='text-lg italic font-semibold hover:text-[#d26914]'>
          <a className='' href='mailto:ometepeartandeducation@gmail.com'>
            ometepeartandeducation@gmail.com
          </a>
        </h3>
      </div>
      <div className='flex items-center text-xl hover:text-[#d26914]'>
        <p className='mr-2 font-semibold'>{spanish ? "Construido con " : "Built with "}</p>
        <SiNextdotjs />
      </div>
    </footer>
  );
};

export default Footer;
