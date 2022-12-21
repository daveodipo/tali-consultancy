import { Slant as Hamburger } from "hamburger-react";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import Image from "next/image";
import tali from "./../../public/Tali-logo.png";
import useScrollPosition from "../hooks/useScrollPosition";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef<any | null>(null);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  function handleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (!isOpen) return;
    function handleOutsideClick(event: React.MouseEvent<HTMLElement>) {
      if (modal.current && !modal.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleOutsideClick as any);

    return () => window.removeEventListener("click", handleOutsideClick as any);
  }, [isOpen]);

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
          className={`flex fixed top-16 h-2/5 lg:h-full lg:w-3/4 bg-tali1 text-gray-50 w-full shadow-xl z-10 ${
            isOpen ? "left-0" : "left-[-500px]"
          }`}
          ref={modal}
        >
          <div className="fixed pt-1 flex flex-col text-2xl md:pt-8 md:pl-8 justify-center w-full font-medium pl-4 mb-10">
            <div className="flex items-center">
              <Link href="/" className="my-3 mr-1" onClick={handleIsOpen}>
                Home
              </Link>
              <div className="text-teal-500">
                <MdArrowRight />
              </div>
            </div>
            <div className="flex items-center">
              <Link href="about" className="my-3 mr-1" onClick={handleIsOpen}>
                About
              </Link>
              <div className="text-teal-500">
                <MdArrowRight />
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="services"
                className="my-3 mr-1"
                onClick={handleIsOpen}
              >
                Services
              </Link>
              <div className="text-teal-500">
                <MdArrowRight />
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="insights"
                className="my-3 flex items-center mr-1"
                onClick={handleIsOpen}
              >
                Insights
              </Link>
              <div className="text-teal-500">
                <MdArrowRight />
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="contact"
                className="my-3 flex items-center mr-1"
                onClick={handleIsOpen}
              >
                Contact
              </Link>
              <div className="text-teal-500">
                <MdArrowRight />
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <div
        className={classNames(
          scrollPosition > 20
            ? " bg-gray-50 opacity-90 shadow transition-shadow z-50"
            : "shadow-none",
          "w-full h-16 items-center justify-center px-2 pt-2 lg:hidden text-tali1 top-0 fixed"
        )}
      >
        <div className="h-14 w-36 flex left-3 absolute lg:hidden">
          <Image src={tali} alt="tali" />
        </div>
        <div className="top-2 z-20 right-3 absolute">
          <Hamburger toggled={isOpen} toggle={handleIsOpen} />
        </div>
      </div>
      <div
        className={classNames(
          scrollPosition > 16
            ? "bg-gray-50 text-gray-800 shadow opacity-90"
            : "shadow-none text-gray-50",
          "hidden lg:flex top-0 w-full h-16  items-center px-5 fixed transition-shadow z-20 font-semibold"
        )}
      >
        <Link href="/" className="h-14 w-36 flex top-1 left-3 absolute">
          <Image src={tali} alt="tali" />
        </Link>
        <div className="flex ml-auto">
          <Link href="/" className="mx-2 lg:hover:text-tali3 transition ease-in-out duration-150">
            Home
          </Link>
          <Link href="about" className="mx-2 lg:hover:text-tali3 transition ease-in-out duration-150">
            About
          </Link>
          <Link href="services" className="mx-2 lg:hover:text-tali3 transition ease-in-out duration-150">
            Services
          </Link>
          <Link href="insights" className="mx-2 lg:hover:text-tali3 transition ease-in-out duration-150">
            Insights
          </Link>
          <Link href="contact" className="mx-2 lg:hover:text-tali3 transition ease-in-out duration-150">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
