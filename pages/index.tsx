import Head from "next/head";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import HR from "./../Images/HRM-icon.png";
import ICT from "./../Images/ICT-icon2.png";
import FM from "./../Images/FM-icon.png";
import PL from "./../Images/PL-icon2.png";
import PM from "./../Images/PM-icon.png";
import ME from "./../Images/ME-icon.png";
import PR from "./../Images/PR-icon.png";
import UNDP from "./../Images/UNDP-logo.png";
import INTERSOS from "./../Images/INTERSOS-logo.png";
import WELTHUNGER from "./../Images/welthungerhilfe-logo.png";
import NTA from "./../Images/NTA-LOGO.png";
import HAPN from "./../Images/HAPN-Logo.png";
import SAVANA from "./../Images/SAVANA-LOGO.png";
import SSR from "./../Images/SSR-icon.png";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import consultants from "./../public/consultants-small.png";
import { ParallaxBannerLayer, ParallaxBanner } from "react-scroll-parallax";
import taliAfrica from "./../public/Tali-Africa-small.png";
import { useRef } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { ImOffice } from "react-icons/im";

export default function Home() {
  const startRef = useRef<null | any>(null);

  return (
    <div className="text-gray-800">
      <Head>
        <title>Management consulting firm | Tali</title>
        <meta name="description" content="Leading management consulting firm" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

      <div className="relative shadow-lg w-full">
        <Carousel startRef={startRef} />
        <div className="absolute top-0 w-full z-10">
          <Navbar />
        </div>
      </div>
      <div
        ref={startRef}
        className="flex flex-col mb-16 xl:mb-20 md:justify-center lg:h-auto"
      >
        <div className="flex font-bold uppercase justify-center mt-20 xl:mb-16 mb-12 text-2xl lg:text-2xl text-gray-500">
          What We Do
        </div>

        <div className="lg:flex">
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={HR}
                height={80}
                width={80}
                alt="Human Resource management"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold">
                Human Resource Management
              </div>
              <div>
                Maximize the value of your most valuable asset, your employees,
                by incorporating strategies such as performance management
                systems, employee engagement initiatives and more.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#human-resource-management"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1" />
              </Link>
            </div>
          </div>
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={ICT}
                height={80}
                width={80}
                alt="Strategic ICT consulting"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold mb-2">
                Strategic ICT Consulting
              </div>
              <div>
                Identify and capitalize on key information and communication
                technology opportunities such as vendor management, security and
                compliance, cloud services and more.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#strategic-ICT-consulting"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1 " />
              </Link>
            </div>
          </div>
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={FM}
                height={80}
                width={80}
                alt="Financial and Grants Management"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold mb-2">
                Financial and Grants Management
              </div>
              <div>
                Ensure financial stability and sustainability through effective
                financial controls, budgeting, forecasting, performance and
                more.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#financial-grants-and-management"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex">
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={PL}
                height={80}
                width={80}
                alt="Procurement and Logistics"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold mb-2">
                Procurement and Logistics
              </div>
              <div>
                Optimize supply chain management and logistics processes through
                Procurement Transformation, Business Process Re-engineering,
                stock control and more.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#procurement-and-logistics"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1" />
              </Link>
            </div>
          </div>
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={PM}
                height={80}
                width={80}
                alt="project management"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold mb-2">
                Project Management
              </div>
              <div>
                Employ advanced methodology and technologies to ensure optimal
                project delivery with Monitoring and Evaluation (M&E), Community
                Development, Capacity Building and more.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#project-management"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1" />
              </Link>
            </div>
          </div>
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={ME}
                height={80}
                width={80}
                alt="Monitoring and evaluation"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold mb-2">
                Monitoring and Evaluation
              </div>
              <div>
                Assess the progress and impact of your programs, projects and
                initiatives with baseline evaluations, midline evaluations, Ex
                post evaluations and more.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#monitoring-and-evaluation"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={PR}
                height={80}
                width={80}
                alt="Program re-engineering"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold mb-2">
                Program Re-engineering
              </div>
              <div>
                Optimize and restructure programs to ensure optimal delivery
                through program project risk profiling, re-structuring, Inter al
                Controls and more.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#program-reengineering"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1" />
              </Link>
            </div>
          </div>
          <div className="flex pl-10 my-3 md:my-5 md:justify-center lg:w-1/3">
            <div>
              <Image
                data-pin-no-hover="true"
                src={SSR}
                height={80}
                width={80}
                alt="sector security research"
              />
            </div>
            <div className="flex flex-col w-2/3 md:w-full pr-3 pl-1 md:pl-3">
              <div className="text-teal-600 text-xl md:text-2xl lg:text-xl font-semibold mb-2">
                Security Sector Research
              </div>
              <div>
                Capitalize on insights on research methods and techniques to
                identify, analyze, and evaluate the effectiveness of security
                systems including security policies, regulations, and practices.
              </div>
              <Link
                className="text-teal-600 flex items-center text-sm mt-1 lg:hover:translate-x-2 transition ease-in-out delay-100"
                href="/services/#security-sector-research"
              >
                Read more{" "}
                <BsArrowRightShort className="text-2xl font-semibold pt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60 md:h-96 w-full flex lg:h-[28rem] ">
        <ParallaxBanner>
          <ParallaxBannerLayer speed={-10}>
            <Image
              src={consultants}
              alt="consultants"
              fill
              className="object-cover"
            />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={1}>
            <div className="bg-teal-900 opacity-60 h-full relative"></div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
      <div className="flex lg:hidden">
        <Image data-pin-no-hover="true" src={taliAfrica} alt="tali footprint" />
      </div>
      <div className="flex flex-col items-center mb-16 mt-20 px-4">
        <div className="text-2xl md:text-3xl lg:text-2xl justify-center flex font-bold text-gray-500 mb-8 lg:mb-10">
          COMPLETED PROJECTS
        </div>
        <div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-lg">
              <BsCheckCircleFill />
            </div>
            <div>
              End of project analysis for Pan African Food Sovereignty in Chad
              and Rwanda.
            </div>
          </div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-lg">
              <BsCheckCircleFill />
            </div>
            <div>
              Long term development strategy plans for Galmudug state, Somalia.
            </div>
          </div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-lg">
              <BsCheckCircleFill />
            </div>
            <div>
              Project analysis and development structure for The Malaria
              Consortium, UK.
            </div>
          </div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-lg">
              <BsCheckCircleFill />
            </div>
            <div>
              Set up of food supply pipelines from around the world into Darfur,
              Sudan.
            </div>
          </div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-lg">
              <BsCheckCircleFill />
            </div>
            <div>
              Rehabilitation of city infrastructure in Monrovia, Liberia.
            </div>
          </div>
          <Link
            href="/about/#completed-projects"
            className="text-teal-600 lg:hover:underline transition ease-in-out duration-150"
          >
            See more
          </Link>
        </div>
      </div>
      <div className="mb-20">
        <div className="mb-12 md:mb-16 md:mt-20">
          <div className="text-2xl md:text-3xl lg:text-2xl justify-center flex font-bold text-gray-500">
            SOME OF OUR CLIENTS
          </div>
        </div>
        <div className="flex my-10 flex-col lg:flex-row">
          <div className="flex w-full mb-8 md:mb-12 lg:mb-8">
            <div className="w-1/2 flex justify-center">
              <div className="border-2 border-teal-500 p-3 flex items-center h-40 w-40 md:h-60 md:w-60 lg:h-40 lg:w-40 justify-center">
                <Image
                  data-pin-no-hover="true"
                  src={UNDP}
                  alt="UNDP"
                  height={120}
                  width={120}
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="border-2 border-teal-500 p-3 items-center flex h-40 w-40 md:h-60 md:w-60 lg:h-40 lg:w-40 justify-center">
                <Image
                  data-pin-no-hover="true"
                  src={INTERSOS}
                  alt="INTERSOS"
                  height={120}
                  width={120}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full mb-8 md:mb-12 lg:mb-8">
            <div className="w-1/2 flex justify-center">
              <div className="border-2 border-teal-500 p-3 flex items-center h-40 w-40 md:h-60 md:w-60 lg:h-40 lg:w-40 justify-center">
                <Image
                  data-pin-no-hover="true"
                  src={WELTHUNGER}
                  alt="WELT-HUNGER-HILFE"
                  height={120}
                  width={120}
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="flex border-2 border-teal-500 p-3 items-center h-40 w-40 md:h-60 md:w-60 lg:h-40 lg:w-40 justify-center">
                <Image
                  data-pin-no-hover="true"
                  src={NTA}
                  alt="NTA"
                  height={120}
                  width={120}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full mb-8 md:mb-12 lg:mb-8">
            <div className="w-1/2 flex justify-center">
              <div className="border-2 border-teal-500 p-3 flex items-center h-40 w-40 md:h-60 md:w-60 lg:h-40 lg:w-40 justify-center">
                <Image
                  data-pin-no-hover="true"
                  src={HAPN}
                  alt="Horn of Africa Peace Network"
                  height={120}
                  width={120}
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="flex border-2 border-teal-500 p-3 items-center h-40 w-40 md:h-60 md:w-60 lg:h-40 lg:w-40 justify-center">
                <Image
                  data-pin-no-hover="true"
                  src={SAVANA}
                  alt="UNDP"
                  height={120}
                  width={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-16 lg:mb-24 px-4">
        <div className="text-2xl md:text-3xl lg:text-2xl justify-center flex font-bold text-gray-500 mb-6 lg:mb-10">
          WHY US?
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-2xl">
              <ImOffice />
            </div>
            <div>Head office in Nairobi, with regional support centers</div>
          </div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-2xl">
              <BiCurrentLocation />
            </div>
            <div>
              Familiarity with the area and its unique security requirements
            </div>
          </div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-2xl">
              <RiCustomerService2Line />
            </div>
            <div>
              Dedicated and experienced professional team to provide reliable
              support
            </div>
          </div>
          <div className="flex items-center my-4 lg:my-5">
            <div className="text-teal-600 mr-3 lg:mr-5 text-2xl">
              <FaHandshake />
            </div>
            <div>
              Track record - successfully worked with clients such as UNICEF,
              SCI, World Vision, Malaria Consortium, Government of Liberia,
              Government of Ivory Coast, Welt Hunger Hilfe and more
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
