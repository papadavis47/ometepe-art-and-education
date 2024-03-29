import Link from 'next/link';
import { useSpanishContext } from '@context/spanishContext';
import LogoLink from '../LogoLink';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { classNames } from '@utils/classnames';
import { navigation, staff, programs, services } from '@data/navData';

const NavBar = () => {
  const { spanish, toggleSpanish } = useSpanishContext();
  // Change spanish / english option on data here
  let navItems = spanish ? navigation.spanish : navigation.english;
  let programItems = spanish ? programs.spanish : programs.english;
  let servicesItems = spanish ? services.spanish : services.english;
  return (
    <div className='sticky top-0 z-50'>
      <Disclosure as='nav' className='bg-white border-b border-stone-200 '>
        {({ open }) => (
          <>
            <div className='max-w-full px-4 mx-auto sm:px-6 lg:px-10'>
              <div className='flex justify-between h-20'>
                {/* left side of bar */}
                <LogoLink />

                {/* center of bar */}
                {/* Begin nav links */}
                <div className='flex items-center'>
                  <div className='hidden flex-shrink-1 lg:flex lg:space-x-4 xl:space-x-8'>
                    <Menu as='div' className='relative'>
                      <div>
                        <Menu.Button className='flex items-center max-w-xs p-2 pb-1 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-orange-100'>
                          <span className='sr-only'>Programs</span>
                          <p className='font-serif text-xl border-b-2 border-transparent hover:border-orange-200'>
                            {spanish ? 'Programas' : 'Programs'}
                          </p>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg -right-14 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {programItems.map((item) => (
                            <Menu.Item key={item.text}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 font-serif py-2 text-lg text-stone-800'
                                  )}
                                >
                                  {item.text}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    {/* end Programs menu */}
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='inline-flex items-center px-1 pt-1 font-serif text-xl font-medium capitalize border-b-2 border-transparent orange-focus text-stone-900 hover:border-orange-200'
                      >
                        {item.name}
                      </Link>
                    ))}
                    {/* End single link nav items */}

                    <div className='flex items-center lg:space-x-4 xl:space-x-8'>
                      {/* begin services menu */}
                      <Menu as='div' className='relative'>
                        <div>
                          <Menu.Button className='flex items-center max-w-xs p-2 pb-1 ml-1 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-100'>
                            <span className='sr-only'>Services</span>
                            <p className='font-serif text-xl border-b-2 border-transparent hover:border-orange-200'>
                              {spanish ? 'Servicios' : 'Services'}
                            </p>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='absolute w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg -right-16 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {servicesItems.map((item) => (
                              <Menu.Item key={item.text}>
                                {({ active }) => (
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'font-serif text-lg block px-4 py-2 text-stone-800'
                                    )}
                                  >
                                    {item.text}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      {/* end desktop services menu */}
                      {/* begin staff menu */}
                      <Menu as='div' className='relative'>
                        <div>
                          <Menu.Button className='flex items-center max-w-xs p-2 pb-1 ml-1 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-100'>
                            <span className='sr-only'>Staff Members</span>
                            <p className='font-serif text-xl border-b-2 border-transparent hover:border-orange-200'>
                              {spanish ? 'Personal' : 'Staff'}
                            </p>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='absolute w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg -right-20 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {staff.map((item) => (
                              <Menu.Item key={item.text}>
                                {({ active }) => (
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'font-serif text-lg block px-4 py-2 text-stone-800'
                                    )}
                                  >
                                    {item.text}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      {/* end desktop staff menu */}
                    </div>
                  </div>
                </div>

                {/* right side */}
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='flex-shrink-0 hidden p-1 ml-auto bg-orange-100 rounded-lg text-stone-800 xl:inline-block hover:text-stone-800'
                    onClick={toggleSpanish}
                  >
                    <span className='sr-only'>Toggle Spanish</span>
                    <span className='p-3 text-sm'>{spanish ? 'English' : 'En Español'}</span>
                  </button>
                </div>
                <div className='flex items-center -mr-2 lg:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-100'>
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

            {/* This is for the full menu transition - on mobile */}
            {/* This is mobile menu - a separate block of code */}
            <Transition
              enter='transition duration-200 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-100 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='h-screen lg:hidden'>
                <div className='pt-2 pb-3 space-y-1 '>
                  {navItems.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className='block py-2 pl-3 pr-4 text-base font-medium capitalize border-l-4 border-indigo-500 text-stone-700 bg-indigo-50 hover:bg-gray-50 hover:border-gray-300 hover:text-stone-800'
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  {/* submenu 1 */}
                  <div className='pt-4 pb-3 border-t border-gray-200'>
                    <p className='ml-3'>{spanish ? 'Programas' : 'Programs'}</p>
                    {programItems.map((item) => (
                      <Disclosure.Button
                        key={item.text}
                        as={Link}
                        href={item.href}
                        className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                      >
                        {item.text}
                      </Disclosure.Button>
                    ))}
                  </div>
                  {/* end submenu 1 */}
                  {/* submenu 2 */}
                  <div className='pt-4 pb-3 border-t border-gray-200'>
                    <p className='ml-3'>{spanish ? 'Servicios' : 'Services'}</p>
                    {servicesItems.map((link) => (
                      <Disclosure.Button
                        key={link.text}
                        as={Link}
                        href={link.href}
                        className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                      >
                        {link.text}
                      </Disclosure.Button>
                    ))}
                  </div>
                  {/* end submenu 2 */}
                  {/* submenu 3 */}
                  <div className='pt-4 pb-3 border-t border-gray-200'>
                    <p className='ml-3'>{spanish ? 'Personal' : 'Staff'}</p>
                    {staff.map((link) => (
                      <Disclosure.Button
                        key={link.text}
                        as={Link}
                        href={link.href}
                        className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                      >
                        {link.text}
                      </Disclosure.Button>
                    ))}
                  </div>
                  {/* end submenu 3 */}
                  {/* language toggle for mobile */}
                  <button
                    type='button'
                    className='p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={toggleSpanish}
                  >
                    <span className='sr-only'>Toggle Spanish</span>
                    <span className='p-3 text-lg'>{spanish ? 'English' : 'En Español'}</span>
                  </button>
                  {/* end language toggle for mobile */}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default NavBar;
