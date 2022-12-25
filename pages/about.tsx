import Navbar from "./components/Navbar";
import Head from "next/head";
import consulting from "./../Images/CONSULTING2.jpg";
import Image from "next/image";
import Footer from "./components/Footer";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import CompletedProjects from "./Completed-Projects";

export default function About() {
  return (
    <div className="">
      <div className="md:mb-48">
        <Head>
          <title>About Us | Tali </title>
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
        <div className="mb-20">
          <Navbar />
        </div>
        <div className="text-tali3 font-semibold text-2xl lg:text-3xl w-full flex justify-center mb-12 lg:mb-20">
          About us
        </div>
        <div className="lg:flex px-4 lg:px-0 lg:pr-4 lg:pl-2 text-gray-800">
          <div className="flex flex-col lg:w-1/2 px-2 mb-12 lg:mb-0">
            <div className="mb-4">
              Tali Consultancy is a comprehensive consultancy and supply chain
              service provider, &quot;life support&quot; company licensed in
              Kenya and Somalia. We provide business and government consulting
              services that bridge the gap between the desired outcome and the
              skills and knowledge required to achieve the organization&apos;s
              desired results. Our consultancy services help you understand and
              meet market demands anywhere in East Africa.
            </div>
            <div className="my-2">
              We have an extremely versative, flexible, professional and
              experienced team who dedicate themselves to their role, the
              company and the client.All of our team members have had great
              exposure in roles that encompass work relating to UN Agencies,
              NAMSA, NGOs, charitable, faith based organizations and
              Governmental bodies.
            </div>
            <div className="my-2">
              At Tali, we pride ourselves in our professionalism, accuracy, cost
              efficiency, social responsibilities and deliverables.
            </div>
          </div>
          <div className="lg:w-1/2 h-96 flex">
            <ParallaxBanner>
              <ParallaxBannerLayer speed={-5}>
                <Image
                  data-pin-no-hover="true"
                  src={consulting}
                  fill
                  alt="consulting"
                  className="object-cover"
                />
              </ParallaxBannerLayer>
              <ParallaxBannerLayer speed={1}>
                <div className="bg-tali3 relative h-full opacity-60 lg:hover:opacity-10 transition-opacity"></div>
              </ParallaxBannerLayer>
            </ParallaxBanner>
          </div>
        </div>
        <div id="completed-projects" className="mb-16 lg:mb-36">
        </div>
        <CompletedProjects />
        <div>
          <div className="text-2xl text-gray-800 w-full justify-center flex mb-8 font-semibold">
            Our values
          </div>
          <ul className="lg:text-xl lg:text-tali3 flex md:flex-row flex-col w-full justify-center list-disc pl-8 lg:pl-0">
            <li className="mx-5 my-2 lg:my-0">Vision</li>
            <li className="mx-5 my-2 lg:my-0">Mission</li>
            <li className="mx-5 my-2 lg:my-0">Quality</li>
            <li className="mx-5 my-2 lg:my-0">Expertise</li>
            <li className="mx-5 my-2 lg:my-0">Customer focus</li>
            <li className="mx-5 my-2 lg:my-0">Responsibility</li>
            <li className="mx-5 my-2 lg:my-0">Respect</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
