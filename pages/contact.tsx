import Navbar from "./components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Footer from "./components/Footer";
import Image from "next/image";
import redirect from "./../public/redirect.png";

export default function Contact() {
  return (
    <>
      <div className="">
        <Head>
          <title>Contact Us | Tali </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <div className="mb-28">
          <Navbar />
        </div>
        <div className="w-full flex justify-center px-4">
          <div className="font-semibold text-3xl lg:text-4xl text-tali3 mt-6 lg:mb-20 xl:mb-32 mb-16">
            Thanks for your interest. How can we help?
          </div>
        </div>
        <div className=" justify-center text-center px-4 w-full lg:flex-row text-gray-800 lg:mb-20 mb-16">
          We have 2 offices in the region. Interested in working with us?
          Explore our{" "}
          <Link
            href="/services"
            className="lg:hover:text-tali2 text-tali3 underline underline-offset-4 md:font-semibold"
          >
            consulting services
          </Link>
          .
        </div>
        <div className="w-full items-center flex flex-col lg:mb-20 mb-16">
          <div className="text-3xl font-semibold text-gray-800">Locations</div>
          <div className="flex md:flex-row w-full flex-col items-center md:justify-center text-gray-800 text-center">
            <div className="my-6 md:mr-10">
              <p>Second floor,</p>
              <p>Banadir plaza building,</p>
              <p>Maka Al Mukarama Road,</p>
              <p>Mogadishu</p>
            </div>
            <div className="my-6 md:ml-10 ">
              <p>Apartment 2D,</p>
              <p>AMCO Crystal building</p>
              <p>City Park estate,</p>
              <p>Parklands,</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center text-tali3 lg:hover:scale-[1.02] transition ease-in-out duration-150 font-semibold text-2xl mb-10">
          <Link href="" className="flex items-center">
            Email us{" "}
            <div className="pb-1 lg:pb-2 lg:pt-1 ml-2">
              <Image src={redirect} height={26} width={32} alt="redirect" />
            </div>
          </Link>
        </div>
        <div className="flex justify-center flex flex-col items-center">
          <div className="text-3xl font-semibold text-gray-800 mb-6">
            Social Media
          </div>
          <div className="text-center text-teal-600 flex flex-col">
            <div className="my-2 lg:cursor-pointer lg:hover:underline underline-offset-4">
              Find us on Facebook
            </div>
            <Link
              href="https://twitter.com/Taliconsultancy"
              className="my-2 lg:hover:underline underline-offset-4"
            >
              Follow us on Twitter
            </Link>
            <div className="lg:cursor-pointer my-2 lg:hover:underline underline-offset-4">
              Connect with us on LinkedIn
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
