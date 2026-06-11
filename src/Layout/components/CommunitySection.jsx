import { useEffect, useRef, useState } from "react";
import aboutImg from "../../assets/images/img-1.png"; // apni image lagao

const ProgressBar = ({ title, percentage, start }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setWidth(percentage);
      }, 200);
    }
  }, [start, percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white font-medium">{title}</span>
        <span className="text-white">{percentage}%</span>
      </div>

      <div className="w-full h-1 bg-gray-700 rounded">
        <div
          className="h-1 bg-orange-500 rounded transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const CommunitySection = () => {
  const sectionRef = useRef(null);
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B0615] text-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            Join the Community to learn <br />
            About our <span className="text-orange-500">Company</span>
          </h2>

          <div className="w-full h-px bg-gray-700 my-6 relative">
            <div className="absolute w-16 h-1 bg-orange-500 top-0"></div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            We continuously build next-generation communities and client-focused
            solutions. By combining strategic thinking with innovative
            technology, we deliver scalable products that drive long-term
            business value.
          </p>

          {/* Progress Bars */}
          <ProgressBar
            title="Business Strategy"
            percentage={65}
            start={startAnim}
          />
          <ProgressBar
            title="Technology Consulting"
            percentage={90}
            start={startAnim}
          />
          <ProgressBar
            title="Product Development"
            percentage={80}
            start={startAnim}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Team"
            className="rounded-lg shadow-xl w-full object-cover"
          />

          {/* Orange Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-orange-600 bg-opacity-90 py-6 text-center rounded-b-lg">
            <h3 className="text-4xl font-bold">17+</h3>
            <p className="text-sm tracking-widest mt-1">YEARS EXPERIENCE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
