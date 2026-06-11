import BreadcrumbHero from "../components/BreadcrumbHero";
import aboutBg from "../../assets/images/braitcam.png";
import Services from "../components/Services";

const Service = () => {
  return (
    <>
      <BreadcrumbHero title="Service" bgImage={aboutBg} />
       <Services />
    </>
  );
};

export default Service;
