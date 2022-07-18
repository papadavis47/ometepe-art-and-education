import { IoColorPalette } from "react-icons/io5";
import { useAppContext } from "../../Context/appContext.js";
import { MyLink } from "../../utils/myLink.js";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../utils/classnames.js";
import { navigation, userNavigation } from "../../data/fakeData.js";

const NavBar = () => {
  const { spanish, toggleSpanish } = useAppContext();
  return (
    <div className='sticky top-0 z-50'>
      <Disclosure as='nav' className='bg-white border-b border-gray-200 '>
        {({ open }) => (
          <>
            <div className='px-4 mx-auto max-w-8xl sm:px-6 lg:px-8'>
              <div className='flex justify-between h-20'>
                <div className='flex'>
                  <div className='flex items-center'>
                    <MyLink href='/'>
                      <IoColorPalette size={36} style={{ fontWeight: "bold" }} />
                    </MyLink>
                    <MyLink href='/'>
                      <span className='pl-4'>
                        {spanish ? "Arte Nicaraguense" : "Nicaraguan Art"}
                      </span>
                    </MyLink>
                  </div>
                  <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                    {navigation.map((item) => (
                      <MyLink
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-orange-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium capitalize"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </MyLink>
                    ))}
                  </div>
                  <div className='flex items-center'>
                    <button
                      type='button'
                      className='hidden p-1 ml-auto text-gray-400 bg-white md:inline-block hover:text-gray-500'
                      onClick={toggleSpanish}
                    >
                      <span className='sr-only'>Toggle Spanish</span>
                      <span className='p-3 text-sm'>{spanish ? "English" : "En Español"}</span>
                    </button>
                  </div>
                </div>
                <div className='flex items-center -mr-2 sm:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block w-6 h-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='min-h-screen sm:hidden'>
              <div className='pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium capitalize"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <button
                  type='button'
                  className='p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={toggleSpanish}
                >
                  <span className='sr-only'>Toggle Spanish</span>
                  <span className='p-3 text-lg'>{spanish ? "English" : "En Español"}</span>
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>

    // Begin old code

    // <div>
    //   <nav className='sticky bg-white'>
    //     <div className='font-medium'>
    //       <Link href='/'>
    //         <a className=''>
    //           <IoColorPalette size={36} style={{ fontWeight: "bold" }} />
    //           <span className='pl-4'>{spanish ? "Arte Nicaraguense" : "Nicaraguan Art"}</span>
    //         </a>
    //       </Link>
    //       <a
    //         className={`navbar-burger ${mobileOpen ? "is-active" : null}`}
    //         onClick={() => toggleBurgerMenu()}
    //       >
    //         <span aria-hidden='true'></span>
    //         <span aria-hidden='true'></span>
    //         <span aria-hidden='true'></span>
    //       </a>
    //     </div>

    //     <div className=''>
    //       <div className='text-lg'>
    //         <Link href='/info/mission'>{spanish ? "Nuestra misión" : "Our Mission"}</Link>
    //         <Link href='/info/programs'>{spanish ? "Programas" : "Programs"}</Link>
    //         <Link href='/info/summer-camp'>
    //           {spanish ? "Campamento de Verano" : "Summer Camp Information"}
    //         </Link>

    //         <div>
    //           <a className='navbar-link is-arrowless' onClick={closeBurgerMenu}>
    //             {spanish ? "Registro" : "Camp Registration"}&nbsp; {!mobileOpen && "  |"}
    //           </a>
    //           <div className=''>
    //             <a href='https://form.jotform.com/221290155777156' target='_blank' rel='noreferrer'>
    //               {spanish ? "Formulario de inscripción" : "Registration Form"}
    //             </a>

    //             <hr className='navbar-divider' />
    //             <a
    //               href='https://www.paypal.com/donate/?hosted_button_id=F6WPQX2HNRTGA'
    //               target='_blank'
    //               rel='noreferrer'
    //             >
    //               PayPal
    //             </a>
    //           </div>
    //         </div>

    //         <div>
    //           <a className=''>{spanish ? "Personal" : "Staff"}</a>

    //           <div className=''>
    //             <Link href='/staff/inma'>Maestra Inma</Link>
    //             <hr className='navbar-divider' />
    //             <Link href='/staff/sandra'>Maestra Sandra</Link>
    //             <hr className='navbar-divider' />
    //             <Link href='/staff/inmaculada'>Inmaculada Cruz</Link>
    //             <hr className='navbar-divider' />
    //             <Link href='/staff/victor'>Victor Fuentes</Link>
    //           </div>
    //         </div>
    //         <Link href='/info/location'>
    //           <a className='navbar-item' onClick={closeBurgerMenu}>
    //             {spanish ? "Localización" : "Location"}
    //           </a>
    //         </Link>
    //         <Link href='/info/events'>{spanish ? "Eventos" : "Events"}</Link>
    //         <Link href='/info/contact'>{spanish ? "Contactar" : "Contact"}</Link>
    //       </div>

    //       <div className='mr-4'>
    //         <div className=''>
    //           <button className='' onClick={toggleSpanish}>
    //             <a className=''>
    //               <p className='p-3 text-lg'>{spanish ? "English" : "En Español"}</p>
    //             </a>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default NavBar;
