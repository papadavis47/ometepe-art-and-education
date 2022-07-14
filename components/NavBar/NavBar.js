import Image from "next/image";
import { IoColorPalette } from "react-icons/io5";
import { useAppContext } from "../../Context/appContext.js";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const { spanish, toggleSpanish } = useAppContext();
  const [isActive, setIsActive] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeBurgerMenu = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <nav className='sticky bg-white'>
        <div className='font-medium'>
          <Link href='/'>
            <a className=''>
              <IoColorPalette size={36} style={{ fontWeight: "bold" }} />
              <span className='pl-4'>{spanish ? "Arte Nicaraguense" : "Nicaraguan Art"}</span>
            </a>
          </Link>
          <a
            className={`navbar-burger ${mobileOpen ? "is-active" : null}`}
            onClick={() => toggleBurgerMenu()}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div className=''>
          <div className='text-lg'>
            <Link href='/info/mission'>{spanish ? "Nuestra misión" : "Our Mission"}</Link>
            <Link href='/info/programs'>{spanish ? "Programas" : "Programs"}</Link>
            <Link href='/info/summer-camp'>
              {spanish ? "Campamento de Verano" : "Summer Camp Information"}
            </Link>

            <div>
              <a className='navbar-link is-arrowless' onClick={closeBurgerMenu}>
                {spanish ? "Registro" : "Camp Registration"}&nbsp; {!mobileOpen && "  |"}
              </a>
              <div className=''>
                <a href='https://form.jotform.com/221290155777156' target='_blank' rel='noreferrer'>
                  {spanish ? "Formulario de inscripción" : "Registration Form"}
                </a>

                <hr className='navbar-divider' />
                <a
                  href='https://www.paypal.com/donate/?hosted_button_id=F6WPQX2HNRTGA'
                  target='_blank'
                  rel='noreferrer'
                >
                  PayPal
                </a>
              </div>
            </div>

            <div>
              <a className=''>{spanish ? "Personal" : "Staff"}</a>

              <div className=''>
                <Link href='/staff/inma'>Maestra Inma</Link>
                <hr className='navbar-divider' />
                <Link href='/staff/sandra'>Maestra Sandra</Link>
                <hr className='navbar-divider' />
                <Link href='/staff/inmaculada'>Inmaculada Cruz</Link>
                <hr className='navbar-divider' />
                <Link href='/staff/victor'>Victor Fuentes</Link>
              </div>
            </div>
            <Link href='/info/location'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                {spanish ? "Localización" : "Location"}
              </a>
            </Link>
            <Link href='/info/events'>{spanish ? "Eventos" : "Events"}</Link>
            <Link href='/info/contact'>{spanish ? "Contactar" : "Contact"}</Link>
          </div>

          <div className='mr-4'>
            <div className=''>
              <button className='' onClick={toggleSpanish}>
                <a className=''>
                  <p className='p-3 text-lg'>{spanish ? "English" : "En Español"}</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
