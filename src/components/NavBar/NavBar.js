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
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand has-text-weight-medium'>
          <Link href='/'>
            <a className='navbar-item' onClick={closeBurgerMenu}>
              <IoColorPalette size={64} style={{ fontWeight: "bold" }} />
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
                Our Mission |
              </a>
            </Link>
            <Link href='/info/programs'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                Programs
              </a>
            </Link>
            <Link href='/info/summer-camp'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                Summer Camp
              </a>
            </Link>
            <Link href='/info/enrollment'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                Enrollment &nbsp;|
              </a>
            </Link>

            <div
              className={`navbar-item has-dropdown ${!isActive ? "is-hoverable" : null}`}
              onMouseEnter={() => setIsActive(false)}
            >
              <a className='navbar-link is-arrowless'>Staff</a>

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
                Location
              </a>
            </Link>
            <Link href='/info/events'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                Events
              </a>
            </Link>
            <Link href='/info/contact'>
              <a className='navbar-item' onClick={closeBurgerMenu}>
                Contact
              </a>
            </Link>
          </div>

          <div className='navbar-end mr-4'>
            <div className='navbar-item'>
              <div className='buttons is-large' onClick={toggleSpanish}>
                <a className='button is-warning is-light'>
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
