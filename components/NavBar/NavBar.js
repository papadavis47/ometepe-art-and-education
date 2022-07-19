import { IoColorPalette } from "react-icons/io5";
import { useAppContext } from "../../Context/appContext.js";
import { MyLink } from "../../utils/myLink.js";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../utils/classnames.js";
import {
  navigation,
  spanishNavigation,
  campRegistration,
  spanishRegistration,
  staff,
} from "../../data/navData.js";

const NavBar = () => {
  const { spanish, toggleSpanish } = useAppContext();
  return (
    <div className='sticky top-0 z-50'>
      <Disclosure as='nav' className='bg-white border-b border-stone-200 '>
        {({ open }) => (
          <>
            <div className='max-w-full px-4 mx-auto sm:px-6 lg:px-10'>
              <div className='flex justify-between h-20'>
                {/* left side of bar */}
                <div className='flex items-center flex-shrink-0 text-stone-800'>
                  <MyLink href='/'>
                    <IoColorPalette size={36} style={{ fontWeight: "bold" }} />
                  </MyLink>
                  <MyLink href='/'>
                    <span className='pl-4 font-serif text-xl'>
                      {spanish ? "Arte Nicaraguense" : "Nicaraguan Art"}
                    </span>
                  </MyLink>
                </div>

                {/* center of bar */}
                <div className='flex items-center'>
                  <div className='hidden flex-shrink-1 lg:ml-6 xl:flex xl:space-x-8'>
                    {!spanish &&
                      navigation.map((item) => (
                        <MyLink
                          key={item.name}
                          href={item.href}
                          className='inline-flex items-center px-1 pt-1 text-base font-medium capitalize border-b-2 border-transparent text-stone-900 hover:border-orange-200'
                        >
                          {item.name}
                        </MyLink>
                      ))}
                    {spanish &&
                      spanishNavigation.map((item) => (
                        <MyLink
                          key={item.name}
                          href={item.href}
                          className='inline-flex items-center px-1 pt-1 text-base font-medium border-b-2 border-transparent text-stone-900 hover:border-orange-200'
                        >
                          {item.name}
                        </MyLink>
                      ))}

                    {/* dropdown registration desktop */}
                    <div className='flex items-center'>
                      <Menu as='div' className='relative ml-3'>
                        <div>
                          <Menu.Button className='flex items-center max-w-xs p-2 pb-1 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-orange-100'>
                            <span className='sr-only'>Camp Registration</span>
                            <p className='text-base font-medium text-gray-900 border-b-2 border-transparent hover:border-orange-200'>
                              {spanish ? "Registro de Campamento" : "Camp Registration"}
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
                          <Menu.Items className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {!spanish &&
                              campRegistration.map((item) => (
                                <Menu.Item key={item.text}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-stone-800"
                                      )}
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      {item.text}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            {spanish &&
                              spanishRegistration.map((item) => (
                                <Menu.Item key={item.text}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-stone-800"
                                      )}
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      {item.text}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    {/* end registration menu */}
                    {/* begin staff menu */}
                    <div className='flex items-center'>
                      <Menu as='div' className='relative ml-3'>
                        <div>
                          <Menu.Button className='flex items-center max-w-xs p-2 pb-1 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-100'>
                            <span className='sr-only'>Staff Members</span>
                            <p className='text-base font-medium border-b-2 border-transparent text-stone-900 hover:border-orange-200'>
                              {spanish ? "Personal" : "Staff"}
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
                          <Menu.Items className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {staff.map((item) => (
                              <Menu.Item key={item.text}>
                                {({ active }) => (
                                  <MyLink
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-stone-800"
                                    )}
                                  >
                                    {item.text}
                                  </MyLink>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    {/* end desktop staff menu */}
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
                    <span className='p-3 text-sm'>{spanish ? "English" : "En Español"}</span>
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

            <Disclosure.Panel className='h-screen lg:hidden'>
              <div className='pt-2 pb-3 space-y-1'>
                {!spanish &&
                  navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={MyLink}
                      href={item.href}
                      className='block py-2 pl-3 pr-4 text-base font-medium capitalize border-l-4 border-indigo-500 text-stone-700 bg-indigo-50 hover:bg-gray-50 hover:border-gray-300 hover:text-stone-800'
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                {spanish &&
                  spanishNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={MyLink}
                      href={item.href}
                      className='block py-2 pl-3 pr-4 text-base font-medium text-gray-600 capitalize border-l-4 border-indigo-500 bg-indigo-50 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                {/* submenu 1 */}
                <div className='pt-4 pb-3 border-t border-gray-200'>
                  <p className='ml-3'>{spanish ? "Registro de Campamento" : "Camp Registration"}</p>
                  {!spanish &&
                    campRegistration.map((item) => (
                      <Disclosure.Button
                        key={item.text}
                        as='a'
                        href={item.href}
                        className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {item.text}
                      </Disclosure.Button>
                    ))}
                  {spanish &&
                    spanishRegistration.map((item) => (
                      <Disclosure.Button
                        key={item.text}
                        as='a'
                        href={item.href}
                        className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {item.text}
                      </Disclosure.Button>
                    ))}
                </div>
                {/* end submenu 1 */}
                {/* submenu 2 */}
                <div className='pt-4 pb-3 border-t border-gray-200'>
                  <p className='ml-3'>{spanish ? "Personal" : "Staff"}</p>
                  {staff.map((link) => (
                    <Disclosure.Button
                      key={link.text}
                      as={MyLink}
                      href={link.href}
                      className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                    >
                      {link.text}
                    </Disclosure.Button>
                  ))}
                </div>
                {/* language toggle for mobile */}
                <button
                  type='button'
                  className='p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={toggleSpanish}
                >
                  <span className='sr-only'>Toggle Spanish</span>
                  <span className='p-3 text-lg'>{spanish ? "English" : "En Español"}</span>
                </button>
                {/* end language toggle for mobile */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default NavBar;
