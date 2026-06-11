import { NavLink } from "react-router-dom";

const ServiceButton = () => {
  return (
    <button className="mt-6 md:mt-0 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
      <NavLink to="/services"> Our Services +</NavLink>
    </button>
  );
};

export default ServiceButton;
