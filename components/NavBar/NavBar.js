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
      <Disclosure as='nav' className='bg-white border-b border-gray-200 '>
        {({ open }) => (
          <>
            <div className='px-4 mx-auto max-w-8xl sm:px-6 lg:px-8'>
              <div className='flex justify-between h-20'>
                {/* left side of bar */}
                <div className='flex items-center'>
                  <MyLink href='/'>
                    <IoColorPalette size={36} style={{ fontWeight: "bold" }} />
                  </MyLink>
                  <MyLink href='/'>
                    <span className='pl-4'>{spanish ? "Arte Nicaraguense" : "Nicaraguan Art"}</span>
                  </MyLink>
                </div>

                {/* center of bar */}
                <div className='flex items-center'>
                  <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                    {!spanish &&
                      navigation.map((item) => (
                        <MyLink
                          key={item.name}
                          href={item.href}
                          className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 capitalize border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </MyLink>
                      ))}
                    {spanish &&
                      spanishNavigation.map((item) => (
                        <MyLink
                          key={item.name}
                          href={item.href}
                          className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </MyLink>
                      ))}

                    {/* dropdown registration desktop */}
                    <div className='flex items-center'>
                      <Menu as='div' className='relative ml-3'>
                        <div>
                          <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            <span className='sr-only'>Camp Registration</span>
                            <p>{spanish ? "Registro de Campamento" : "Camp Registration"}</p>
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
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
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
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
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
                          <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            <span className='sr-only'>Staff Members</span>
                            <p>{spanish ? "Personal" : "Staff"}</p>
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
                                      "block px-4 py-2 text-sm text-gray-700"
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
                  </div>
                </div>

                {/* right side */}
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='hidden p-1 ml-auto text-gray-400 bg-white lg:inline-block hover:text-gray-500'
                    onClick={toggleSpanish}
                  >
                    <span className='sr-only'>Toggle Spanish</span>
                    <span className='p-3 text-sm'>{spanish ? "English" : "En Español"}</span>
                  </button>
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
  );
};

export default NavBar;
