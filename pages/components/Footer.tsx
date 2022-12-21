import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image'
import tali from "./../../public/Tali-logo.png"
import taliMap from './../../public/Tali-Africa-small.png'

export default function Footer() {
  return (
    <div className="bg-tali1 w-full text-gray-50 flex flex-col pb-8 pt-4 mt-16">
      <div className="flex flex-col items-center lg:flex-row lg:my-8">
        <div className="lg:w-1/2 flex justify-center lg:justify-around flex-col lg:flex-row">
        <Link href="/" className="flex h-14 w-36 xl:w-36 mb-6 mt-2">
          <Image src={tali} alt="tali"/>
        </Link>
        <div className="flex text-2xl justify-center my-6 ">
          <Link href="#">
          <FaLinkedinIn className="mx-3 lg:hover:text-tali2" />
          </Link>
          <Link href="#">
          <FaFacebookF className="mx-3 lg:hover:text-tali2" />
          </Link>
          <Link href="https://twitter.com/Taliconsultancy">
          <FaTwitter className="mx-3 lg:hover:text-tali3" />
          </Link>
          {/* <FaInstagramSquare className="mx-3"/> */}
        </div>
        </div>
        <div className="hidden lg:flex lg:justify-center w-1/2 lg:items-center">
        <div className="relative h-40 w-60">
          <Image src={taliMap} alt="tali footprint" fill/>
        </div>
        </div>
      </div>
        <div className="text-center flex flex-col lg:flex-row lg:text-sm lg:justify-center ">
          <Link href="/services/#human-resource-management" className="my-4 lg:mx-3 lg:hover:text-gray-300">Human Resource Management</Link>
          <Link href="/services/#strategic-ICT-consulting" className="my-4 lg:mx-3 lg:hover:text-gray-300">Strategic ICT Consulting</Link>
          <Link href="/services/#financial-and-grants" className="my-4 lg:mx-3 lg:hover:text-gray-300">Financial and Grants Management</Link>
          <Link href="/services/#procurement-and-logistics" className="my-4 lg:mx-3 lg:hover:text-gray-300">Procurement and Logistics</Link>
          <Link href="/services/#project-management" className="my-4 lg:mx-3 lg:hover:text-gray-300">Project Management</Link>
        </div>
    </div>
  );
}
