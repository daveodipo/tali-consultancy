import Navbar from "./components/Navbar";
import StrategicICTConsulting from "./Strategic-ICT-Consulting";
import Footer from "./components/Footer";
import HumanResourceManagement from "./Human-Resource-Management";
import FinancialAndGrantsManagement from "./Financial-And-Grants-Management";
import ProcurementAndLogistics from "./Procurement -And-Logistics";
import ProjectManagement from "./Project-Management";
import Head from "next/head";
import MonitoringAndEvaluation from "./Monitoring-And-Evaluation";
import ProgramReengineering from "./Program-Re-engineering";
import SecuritySectorResearch from "./Security-Sector-Research";

export default function Services() {
  return (
    <div>
      <Head>
        <title>Consulting Services | Tali </title>
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
      <div className="mb-20 xl:mb-16">
        <Navbar />
      </div>
      <div id="human-resource-management" className="lg:mt-0 pl-4 pr-1 lg:px-6">
        <HumanResourceManagement />
      </div>
      <div id="strategic-ICT-consulting" className="pl-4 pr-1 lg:px-6 ">
        <StrategicICTConsulting />
      </div>
      <div id="financial-grants-and-management" className="pl-4 pr-1 lg:px-6 ">
        <FinancialAndGrantsManagement />
      </div>
      <div id="procurement-and-logistics" className="pl-4 pr-1 lg:px-6 ">
        <ProcurementAndLogistics />
      </div>
      <div id="project-management" className="mb-12 pl-4 pr-1 lg:px-6 ">
        <ProjectManagement />
      </div>
      <div id="monitoring-and-evaluation" className="mb-12 pl-4 pr-1 lg:px-6 ">
        <MonitoringAndEvaluation />
      </div>
      <div id="program-reengineering" className="mb-12 pl-4 pr-1 lg:px-6 ">
        <ProgramReengineering />
      </div>
      <div id="security-sector-research" className="mb-12 pl-4 pr-1 lg:px-6 ">
        <SecuritySectorResearch />
      </div>
      {/* <div>
        <div className="mb-12 pl-4 pr-1 w-full flex justify-center text-gray-800 font-semibold text-2xl md:text-3xl lg:text-2xl">
          CASE STUDIES
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
