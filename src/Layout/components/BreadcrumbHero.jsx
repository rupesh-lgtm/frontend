import { NavLink } from "react-router-dom";

const BreadcrumbHero = ({ title, bgImage }) => {
  return (
    <section
      className="relative h-[250px] md:h-[300px] w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md text-sm mb-4">
          <NavLink to="/" className="hover:text-orange-400 transition">
            HOME
          </NavLink>
          <span className="text-orange-500">›</span>
          <span className="uppercase">{title}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default BreadcrumbHero;
