"use client"
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure, Transition } from "@headlessui/react";
import { login } from "@/actions/login";
import { useEffect } from "react";
const Navbar = ({navLinks,transition}) => {
  // const navLinks = [
  //   {
  //     text: "Register",
  //     link: "#home"
  //   },
  //   {
  //     text: "Features",
  //     link: "#features"
  //   },
  //   {
  //     text: "Courses",
  //     link: "#courses"
  //   },
  //   {
  //     text: "Company",
  //     link: "#company"
  //   },
  //   {
  //     text: "FaQ",
  //     link: "#faq"
  //   },
  // ]

  return (
    <div className="w-full z-50">
      <nav className="container px-5 relative flex flex-wrap items-center justify-between pt-8 pb-0 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>

          {({ open,close}) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/symbol.png"
                        alt="symbol"
                        width={50}
                        height={50}
                        className=""
                      />
                    </span>

                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              
                  {transition == true ? 
                    <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {navLinks.map((item, index) => (
                        <a key={index} href={`${item.link}`} className="w-full  dark:hover:text-slate-50 px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:text-slate-50">
                          {item.text}
                        </a>

                      ))}
       
                      {
                        <a onClick={async () => {
                          await login('/dashboard')
                        }} className="w-full select-none hover:cursor-pointer dark:hover:text-slate-50 px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:text-slate-50">Signin</a>
                      }
                      <span className="px-4 py-2 w-full">
                        <ThemeChanger />
                      </span>
                    </>
                  </Disclosure.Panel>
                 </Transition>
                :<Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navLinks.map((item, index) => (
                    <a key={index} href={`${item.link}`} onClick={()=>close()}  className="w-full  dark:hover:text-slate-50 px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:text-slate-50">
                      {item.text}
                    </a>

                  ))}
   
                  {
                    <a onClick={async () => {
                      close();
                      await login('/dashboard')
                    }} className="w-full select-none hover:cursor-pointer dark:hover:text-slate-50 px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:text-slate-50">Signin</a>
                  }
                  <span className="px-4 py-2 w-full">
                    <ThemeChanger />
                  </span>
                </>
              </Disclosure.Panel>}
                  
                 
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navLinks.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a href={`${menu.link}`} className="inline-block dark:hover:text-slate-50 px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 dark:focus:text-slate-50">
                  {menu.text}
                </a>
              </li>
            ))}
            {/* <li className="mr-3 nav__item">
              <Link href='/dashboard'>
                <span className="inline-block px-4 py-2 text-lg font-normal hover:cursor-pointer text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  Dashboard</span>
              </Link>
            </li> */}
            {
              <li className="mr-3 nav__item " onClick={async () => {
                await login('/dashboard')
              }}>
                <a className="inline-block select-none  px-4 py-2 text-lg dark:hover:text-slate-50 font-normal hover:cursor-pointer text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 dark:focus:text-slate-50">Signin</a>

              </li>
            }

          </ul>
        </div>

        {/* <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
          </Link> */}
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;