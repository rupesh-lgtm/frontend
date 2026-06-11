import { useEffect, useState, useRef } from "react";
import { Cpu, Cloud, BrainCircuit, CheckCircle } from "lucide-react";
import Aboutimg from "../../assets/images/about.png";
import CommonButton from "../components/CommonButton"
const Feature = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-3 group">
      <Icon className="text-orange-500 w-5 h-5 group-hover:scale-110 transition" />
      <span className="text-gray group-hover:text-orange transition">
        {text}
      </span>
    </div>
  );
};

const FutureTech = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;

      let start = 0;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [startCount, end, duration]);

    return count;
  };

  const ai = useCounter(95);
  const cloud = useCounter(80);
  const automation = useCounter(85);
  const growth = useCounter(120);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-white to-white-200 text-gray py-16 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 group-hover:opacity-60 transition"></div>

          <img
            src={Aboutimg}
            alt="Future Tech"
            className="relative rounded-xl shadow-xl transform group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Future of <span className="text-orange-500">Technology</span>
          </h2>

          <p className="text-gray mt-6 leading-relaxed">
            The future belongs to intelligent systems powered by AI, Cloud, and
            Automation. Businesses are rapidly evolving by integrating smart
            technologies that enhance efficiency, scalability, and
            decision-making.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-4 mb-6">
            <Feature
              icon={BrainCircuit}
              text="Artificial Intelligence Solutions"
            />
            <Feature icon={Cpu} text="Machine Learning & Automation" />
            <Feature icon={Cloud} text="Cloud Infrastructure & DevOps" />
            <Feature
              icon={CheckCircle}
              text="Scalable Digital Transformation"
            />
          </div>
          <CommonButton text="Explore Future" to="/futuremore" />
          
        </div>
      </div>

      {/* STATS */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div className="hover:scale-105 transition">
          <h3 className="text-4xl font-bold text-orange-500">{ai}%</h3>
          <p className="text-gray mt-2">AI Adoption</p>
        </div>

        <div className="hover:scale-105 transition">
          <h3 className="text-4xl font-bold text-orange-500">{cloud}%</h3>
          <p className="text-gray mt-2">Cloud Usage</p>
        </div>

        <div className="hover:scale-105 transition">
          <h3 className="text-4xl font-bold text-orange-500">{automation}%</h3>
          <p className="text-gray mt-2">Automation Growth</p>
        </div>

        <div className="hover:scale-105 transition">
          <h3 className="text-4xl font-bold text-orange-500">{growth}+</h3>
          <p className="text-gray mt-2">Tech Innovations</p>
        </div>
      </div>
    </section>
  );
};

export default FutureTech;
