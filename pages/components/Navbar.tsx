import { Slant as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Transition
        show={isOpen}
        enter="transition transition-opacity ease-in duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition transition-opacity ease-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`flex fixed top-16 h-2/5 bg-white lg:hidden w-full shadow-xl z-10 ${
            isOpen ? "left-0" : "left-[-500px]"
          }`}
        >
          <div className="fixed pt-1 flex flex-col text-2xl  justify-center w-full font-medium pl-4 mb-10">
            <div className="flex items-center">
            <Link href="/" className="my-3 mr-1" onClick={handleIsOpen}>
              Home 
            </Link>
            <div className="text-teal-500"><MdArrowRight/></div>
            </div>
            <div className="flex items-center">
            <Link href="about" className="my-3 mr-1" onClick={handleIsOpen}>
              About
            </Link>
            <div className="text-teal-500"><MdArrowRight/></div>
            </div>
            <div className="flex items-center">
            <Link href="services" className="my-3 mr-1" onClick={handleIsOpen}>
              Services
            </Link>
            <div className="text-teal-500"><MdArrowRight/></div>
            </div>
            <div className="flex items-center">
            <Link
              href="insights"
              className="my-3 flex items-center mr-1"
              onClick={handleIsOpen}
            >
              Insights
            </Link>
            <div className="text-teal-500"><MdArrowRight/></div>
            </div>
            <div className="flex items-center">
           <Link
              href="contact"
              className="my-3 flex items-center mr-1"
              onClick={handleIsOpen}
            >
              Contact
            </Link>
            <div className="text-teal-500"><MdArrowRight/></div>
            </div>
          </div>
        </div>
      </Transition>
      <div className="h-16 flex items-center justify-center px-2">
        <div>
          <p className="font-bold text-3xl font-Playfair">Tali Consultancy</p>
        </div>
        <div className="top-3 z-10 right-3 absolute">
          <Hamburger toggled={isOpen} toggle={handleIsOpen} />
        </div>
      </div>
    </>
  );
}
