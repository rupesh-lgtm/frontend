import BreadcrumbHero from "../components/BreadcrumbHero";
import development from "../../assets/images/development.png";
import DevelopmentsHome from '../components/DevelopmentsHome';
import { Helmet } from "react-helmet-async";
const Development = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Future Development | Innovix Technology</title>
        <meta 
          name="description" 
          content="Explore future development strategies by Innovix Technology including AI, automation, cloud computing, and digital transformation solutions." 
        />

        <meta 
          name="keywords" 
          content="future development, innovix technology, AI solutions, digital transformation, automation, cloud computing, IT services" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Future Development | Innovix Technology" />
        <meta property="og:description" content="Innovix Technology is shaping the future with AI, automation, and advanced digital solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
     <BreadcrumbHero title="Development" bgImage={development} />
     <DevelopmentsHome />
    </div>
  )
}

export default Development
