import Navbar from "./components/Navbar";
import StrategicICTConsulting from "./Strategic-ICT-Consulting";
import Footer from "./components/Footer";
import HumanResourceManagement from "./Human-Resource-Management";
import FinancialAndGrantsManagement from "./Financial-And-Grants-Management";
import ProcurementAndLogistics from "./Procurement -And-Logistics";
import ProjectManagement from "./Project-Management";

export default function Services() {
  return (
    <div>
      <div className="">
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
      <div id="project-management" className="mb-12 pl-4 pr-1 lg:px-6 " >
        <ProjectManagement />
      </div>
      <div>
        <div className="mb-12 pl-4 pr-1 w-full flex justify-center text-gray-800 font-semibold text-2xl md:text-3xl lg:text-2xl">CASE STUDIES</div>
      </div>
      <Footer />
    </div>
  );
}
