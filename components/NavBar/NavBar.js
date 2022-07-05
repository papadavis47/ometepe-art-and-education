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
      <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand has-text-weight-medium'>
          <Link href='/'>
            <a className='navbar-item' onClick={closeBurgerMenu}>
              <IoColorPalette size={36} style={{ fontWeight: "bold" }} />
              <span className='is-size-5 pl-4'>
                {spanish ? "Arte Nicaraguense" : "Nicaraguan Art"}
              </span>
            </a>
          </Link>
          <a
            role='button'
            className={`navbar-burger ${mobileOpen ? "is-active" : null}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
            onClick={() => toggleBurgerMenu()}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div className={`navbar-menu ${mobileOpen ? "is-active" : null}`}>
          <div className='navbar-end is-size-4'>
            <Link href='/info/mission'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                {spanish ? "Nuestra misión" : "Our Mission"}
              </a>
            </Link>
            <Link href='/info/programs'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                {spanish ? "Programas" : "Programs"}&nbsp; {!mobileOpen && "|"}
              </a>
            </Link>
            <Link href='/info/summer-camp'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                {spanish ? "Campamento de Verano" : "Summer Camp Information"}
              </a>
            </Link>
            {/* new dropdown going here */}
            <div
              className={`navbar-item has-dropdown ${!isActive ? "is-hoverable" : null}`}
              onMouseEnter={() => setIsActive(false)}
            >
              <a className='navbar-link is-arrowless' onClick={closeBurgerMenu}>
                {spanish ? "Registro" : "Camp Registration"}&nbsp; {!mobileOpen && "  |"}
              </a>
              <div className='navbar-dropdown is-size-6' onClick={() => setIsActive(true)}>
                <a
                  className='navbar-item'
                  href='https://form.jotform.com/221290155777156'
                  onClick={closeBurgerMenu}
                  target='_blank'
                  rel='noreferrer'
                >
                  {spanish ? "Formulario de inscripción" : "Registration Form"}
                </a>

                <hr className='navbar-divider' />
                <a
                  className='navbar-item'
                  href='https://www.paypal.com/donate/?hosted_button_id=F6WPQX2HNRTGA'
                  onClick={closeBurgerMenu}
                  target='_blank'
                  rel='noreferrer'
                >
                  PayPal
                </a>
              </div>
            </div>
            {/* end new setup for links */}

            <div
              className={`navbar-item has-dropdown ${!isActive ? "is-hoverable" : null}`}
              onMouseEnter={() => setIsActive(false)}
            >
              <a className='navbar-link is-arrowless'>{spanish ? "Personal" : "Staff"}</a>

              <div className='navbar-dropdown is-size-6' onClick={() => setIsActive(true)}>
                <Link href='/staff/inma'>
                  <a className='navbar-item' onClick={closeBurgerMenu}>
                    Maestra Inma
                  </a>
                </Link>
                <hr className='navbar-divider' />
                <Link href='/staff/sandra'>
                  <a className='navbar-item' onClick={closeBurgerMenu}>
                    Maestra Sandra
                  </a>
                </Link>
                <hr className='navbar-divider' />
                <Link href='/staff/inmaculada'>
                  <a className='navbar-item' onClick={closeBurgerMenu}>
                    Inmaculada Cruz
                  </a>
                </Link>
                <hr className='navbar-divider' />
                <Link href='/staff/victor'>
                  <a className='navbar-item' onClick={closeBurgerMenu}>
                    Victor Fuentes
                  </a>
                </Link>
              </div>
            </div>
            <Link href='/info/location'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                {spanish ? "Localización" : "Location"}
              </a>
            </Link>
            <Link href='/info/events'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                {spanish ? "Eventos" : "Events"}
              </a>
            </Link>
            <Link href='/info/contact'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                {spanish ? "Contactar" : "Contact"}
              </a>
            </Link>
          </div>

          <div className='navbar-end mr-4'>
            <div className='navbar-item'>
              <div className='buttons is-large' onClick={toggleSpanish}>
                <a className='button is-warning is-light' onClick={toggleBurgerMenu}>
                  <p className='is-size-5 p-3'>{spanish ? "English" : "En Español"}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
