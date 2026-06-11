import FutureTech from "../components/FutureTech";
import AboutCompany from "../components/AboutCompany";
import HeroSlider from "../components/HeroSlider";
import Whychooseus from "../components/Whychooseus";
import TrainingWorkshops from "../components/TrainingWorkshops";
import CreativeDesign from "../components/CreativeDesign";
import AIAutomation from "../components/AIAutomation";
import Services from "../components/Services";
import DevelopmentsHome from "../components/DevelopmentsHome";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSlider />
      <Services />
      <AboutCompany />
      <FutureTech />
      <TrainingWorkshops />
      <CreativeDesign />
      <AIAutomation />
      <DevelopmentsHome />
      <Whychooseus /> 
    </div>
  );
};

export default Home;
