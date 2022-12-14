import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-gray-50 flex flex-col pb-8 pt-4 mt-16">
      <div className="flex flex-col items-center">
        <div className="text-2xl my-6 font-semibold">Tali Consultancy</div>
        {/* <div className="text-xl font-semibold my-6">CORE SERVICES</div> */}
        <div className="flex text-2xl justify-center my-6">
          <Link href="#">
          <FaLinkedinIn className="mx-3" />
          </Link>
          <Link href="#">
          <FaFacebookF className="mx-3" />
          </Link>
          <Link href="#">
          <FaTwitter className="mx-3" />
          </Link>
          {/* <FaInstagramSquare className="mx-3"/> */}
        </div>
        <ul className="text-center">
          <li className="my-4">Human Resource Management</li>
          <li className="my-4">Strategic ICT Consulting</li>
          <li className="my-4">Financial and Grants Management</li>
          <li className="my-4">Procurement and Logistics</li>
          <li className="my-4">Project Management</li>
        </ul>
      </div>
    </div>
  );
}
