import React from "react";
import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='footer has-text-centered is-white column is-narrow'>
      <h2 className='is-size-4'>
        <span>&copy;</span> Ometepe Art & Education 2022
      </h2>
      <div className='block has-text-centered mt-4'>
        <h3 className='is-italic is-size-4 is-size-5-mobile'>
          <a className='has-text-dark' href='mailto:ometepeartandeducation@gmail.com'>
            ometepeartandeducation@gmail.com
          </a>
        </h3>
      </div>
      <div>
        <p className='is-size-5'>
          Built with <SiNextdotjs />
        </p>
      </div>
      <div className='mt-3'>
        <figure>
          <a href='https://bulma.io'>
            <Image src='/made-with-bulma.png' alt='Made with Bulma' width='128' height='24'></Image>
          </a>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
