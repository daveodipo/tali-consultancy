import Navbar from "./components/Navbar";
import Head from "next/head";
import consulting from "./../Images/CONSULTING2.jpg";
import Image from "next/image";
import Footer from "./components/Footer";

export default function About() {
  return (
    <div className="">
      <div className="md:mb-48">
      <Head>
        <title>About Us | Tali </title>
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
      <div className="mb-20">
        <Navbar />
      </div>
      <div className="text-tali3 font-semibold text-2xl lg:text-3xl w-full flex justify-center mb-12">
        About us
      </div>
      <div className="lg:flex pr-4 pl-2 text-gray-800 mb-20">
        <div className="flex flex-col lg:w-1/2 px-2">
          <div className="mb-4">
            Tali Consultancy is a comprehensive consultancy and supply chain
            service provider, &quot;life support&quot; company licensed in Kenya
            and Somalia. We provide business and government consulting services
            that bridge the gap between the desired outcome and the skills and
            knowledge required to achieve the organization&apos;s desired
            results. Our consultancy services help you understand and meet
            market demands anywhere in East Africa.
          </div>
          <div className="my-2">
            We have an extremely versative, flexible, professional and
            experienced team who dedicate themselves to their role, the company
            and the client.All of our team members have had great exposure in
            roles that encompass work relating to UN Agencies, NAMSA, NGOs,
            charitable, faith based organizations and Governmental bodies.
          </div>
          <div className="my-2">
            We pride ourselves in our professionalism, accuracy, cost
            efficiency, social responsibilities and deliverables.
          </div>
        </div>
        <div className="bg-sky-500 w-1/2 relative">
          <div className="relative bg-tali1 h-full w-full"></div>
          <Image
            data-pin-no-hover="true"
            src={consulting}
            fill
            objectFit="cover"
            alt="consulting"
          />
        </div>
      </div>
      <div className="">
      <div className="text-2xl text-gray-800 w-full justify-center flex mb-8 font-semibold">Our values</div>
      <ul className="lg:text-xl text-tali3 flex md:flex-row flex-col w-full justify-center list-disc pl-8 lg:pl-0">
        <li className="mx-5">Vision</li>
        <li className="mx-5">Mission</li>
        <li className="mx-5">Quality</li>
        <li className="mx-5">Expertise</li>
        <li className="mx-5">Customer focus</li>
        <li className="mx-5">Responsibility</li>
        <li className="mx-5">Respect</li>
      </ul>
      </div>
      {/* <div className="flex lg:w-full p-5">
          <div className="mb-4">
            As leaders in our industry, we hold ourselves to the highest
            standard of professional behavior. The{" "}
            <span className="uppercase">Tali Consultancy</span> Code of
            Integrity defines the main principles of professional integrity for
            Tali Consultancy and is an expression of the values that are shared
            throughout our organization, our businesses, and our affiliates.
          </div>
          <div className="my-2">
            We are committed to a culture where issues of integrity and
            professional ethics are approached with recognized international
            standards. Guidance and support is available to help employees and
            other stakeholders acting on behalf of, or representing, our
            organization to understand the Code and to help them make the right
            decision when faced with an ethical dilemma.
          </div>
          <div className="my-2">
            Our highly educated and trained team of industry specialist are able
            to work with any international organization. Languages our team are
            proficient in include: Amharic, Arabic, Chinese (simplified and
            traditional), Dutch, English, French, German, Italian, Hindi,
            Indonesian, Japanese, Portugese, Russian, Somali, Spanish, Swahili,
            Swedish and Turkish.
          </div>
        </div> */}
      {/* <div> */}
        {/* <div> */}
          {/* <div>
            To deliver best-in-class business consultative solutions for our
            clients with superior collaboration, professionalism and exceptional
            client service.
          </div> */}
          {/* <div>
            Tali Consultancy is committed to being the most respected, sought
            after Consultancy Company, providing value added services while
            creating successful partnerships with each of our clients. We see
            ourselves as our clients trusted advisors. Our clienteles can rely
            on us for the best advice regarding their strategic direction,
            development plans, studies and communications. We safely accompany
            them through short term planning, acute crises and longer-term
            transformation processes. We are committed solely to our clients and
            their objectives. Our clients’ trust, our reputation, and our
            successes are based on a clear attitude shared by our entire team –
            guided by values that all TALI CONSULTANCY employees are committed
            to.
          </div> */}
        {/* </div> */}
        {/* <div> */}
          {/* <div>
            We strive to provide the best advisory services for our clients – in
            terms of both content and form. We work with analytical precision
            and grasp complex situations with a 360° view and deliver convincing
            strategies and concepts that are well thought out. Our ideas are
            theoretically sound and realistically doable. Our services are not
            off-the-shelf, but tailor-made for each individual situation. We are
            curious about trends and changes in the environment and that is why
            we are always working to develop new approaches and innovative
            solutions
          </div> */}
        {/* </div> */}
        {/* <div> */}
          {/* <div>
            Our expertise is based on professional competence, experience and
            diversity. We aspire to be among the best in our field. We know our
            clients’ businesses and daily routines because our experienced team
            have worked in specialist and senior management positions for
            renowned companies or political institutions. We combine this
            experience with fresh ideas and innovations from a variety of
            disciplines, from which we recruit the best talent. We work
            trustfully in small teams and share our experiences, knowledge and
            networks. And we never stop learning, but keep improving and
            educating ourselves.
          </div> */}
        {/* </div> */}
        {/* <div> */}
          {/* <div>
            We systematically design communications based on our clients’
            business goals, strategies and business models. We are quick in our
            understanding, thinking and in finding answers. We are accessible
            and available as and when we are needed. We give advice as equal
            partners and provide our clients with what they need and go beyond
            what was originally requested, but do not sell our clients anything
            they do not need, because we favor long-term customer relationships
            above short-term business.{" "}
          </div> */}
        {/* </div> */}
        {/* <div> */}
          {/* <div>
            Our clients trust us in critical situations. Trust creates
            responsibility for the results and repercussions of our advice and
            recommendations. We are constantly aware of this. However, beyond
            feeling responsible for our business, we are also committed to our
            free, democratic society. That is why we invest know-how and advise
            non-profit organizations whose topics and work we feel is important.
          </div> */}
        {/* </div> */}
        {/* <div> */}
          {/* <div>
            Communication consulting always takes place between people. Thus,
            treating each other with respect is of utmost importance to us,
            whether it be in the team, in the relation to our customers or to
            other stakeholders. We listen, we appreciate other opinions, we
            respectfully strive for optimal solutions, and we are open to
            constructive improvement proposals. We keep challenging ourselves
            since quality and pride in one&apos;s achievements should go along with
            modesty and critical faculty
          </div> */}
        {/* </div> */}
      {/* </div> */}
      </div>
      <div className="">
      <Footer />
      </div>
    </div>
  );
}
