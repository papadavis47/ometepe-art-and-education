import Image from "next/image";
import { IoColorPalette } from "react-icons/io5";
import { useAppContext } from "../Context/appContext.js";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const { spanish, toggleSpanish } = useAppContext();
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand has-text-weight-medium'>
          <Link href='/'>
            <a className='navbar-item'>
              <IoColorPalette size={64} style={{ fontWeight: "bold" }} />
              <span className='is-size-5 pl-4'>
                {spanish ? "Arte Nicaraguense" : "Nicaraguan Art"}
              </span>
            </a>
          </Link>
          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div className='navbar-menu'>
          <div className='navbar-end is-size-4'>
            <Link href='#'>
              <a className='navbar-item'>Our Mission |</a>
            </Link>
            <Link href='#'>
              <a className='navbar-item'>Programs</a>
            </Link>
            <Link href='/summer-camp'>
              <a className='navbar-item'>Summer Camp</a>
            </Link>
            <Link href='#'>
              <a className='navbar-item'>Enrollment &nbsp;|</a>
            </Link>

            <div
              className={`navbar-item has-dropdown ${!isActive ? "is-hoverable" : null}`}
              onMouseEnter={() => setIsActive(false)}
            >
              <a className='navbar-link is-arrowless'>Staff</a>

              <div className='navbar-dropdown is-size-6' onClick={() => setIsActive(true)}>
                <Link href='/sandra'>
                  <a className='navbar-item'>Maestra Sandra</a>
                </Link>
                <hr className='navbar-divider' />
                <Link href='/inma'>
                  <a className='navbar-item'>Maestra Inma</a>
                </Link>
                <hr className='navbar-divider' />
                <Link href='#'>
                  <a className='navbar-item'>Inmaculada Cruz</a>
                </Link>
                <hr className='navbar-divider' />
                <Link href='#'>
                  <a className='navbar-item'>Victor Fuentes</a>
                </Link>
              </div>
            </div>
            <Link href='#'>
              <a className='navbar-item'>Location</a>
            </Link>
            <Link href='#'>
              <a className='navbar-item'>Events</a>
            </Link>
            <Link href='#'>
              <a className='navbar-item'>Contact</a>
            </Link>
          </div>

          <div className='navbar-end mr-4'>
            <div className='navbar-item'>
              <div className='buttons is-large'>
                <a className='button is-warning is-light'>
                  <p className='is-size-5'>En Español</p>
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
