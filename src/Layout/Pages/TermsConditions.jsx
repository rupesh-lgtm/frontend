import { Helmet } from "react-helmet-async";
import BreadcrumbHero from "../components/BreadcrumbHero";
import development from "../../assets/images/development.png";
const TermsConditions = () => {
  return (
    <>
    {/* SEO */}
      <Helmet>
        <title>Terms & Conditions | Innovix Technology</title>
        <meta
          name="description"
          content="Read the Terms and Conditions of Innovix Technology for using our services, website, and solutions."
        />
        <meta
          name="keywords"
          content="Innovix Technology terms, conditions, agreement, policies"
        />
      </Helmet>
    <BreadcrumbHero title="Terms Conditions" bgImage={development} />
    <div className="bg-gray-50 text-gray-800 py-12 px-6 md:px-20">
      
      {/* Page Title */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="mt-3 text-gray-600">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow space-y-6">

        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our website. By accessing or using our services, you agree 
            to be bound by these Terms and Conditions. If you do not agree, 
            please do not use our services.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Use of Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to use our website only for lawful purposes. You must not 
            misuse our services or attempt to disrupt the platform.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. User Responsibilities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Users are responsible for maintaining the confidentiality of their 
            account information and ensuring that all activities comply with 
            applicable laws.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy 
            to understand how we collect and use your information.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not liable for any damages arising from the use or inability 
            to use our services. All services are provided "as is".
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update these terms at any time. Continued 
            use of the website means you accept those changes.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2 text-blue-600 font-medium">
            info@innovixtechnology.com
          </p>
        </div>

      </div>
    </div>
    </>

  );
};

export default TermsConditions;