import { useState, useEffect } from "react";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
const slides = [
  {
    title: "AI & Automation",
    desc: "Transform your business with intelligent automation and AI solutions.",
    img: slider1,
  },
  {
    title: "Web Development",
    desc: "Modern, fast and scalable web applications using latest technologies.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Cloud Computing",
    desc: "Secure and scalable cloud infrastructure for your business growth.",
    img: slider2,
  },
  {
    title: "Cyber Security",
    desc: "Protect your systems with advanced cyber security solutions.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
];

export default function TechSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Image */}
          <img src={slide.img} alt="" className="w-full h-full object-cover" />

          {/* LEFT DARK OVERLAY */}
          <div className="absolute inset-0 flex items-center">
            {/* Gradient Left Dark */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 px-10 md:px-20 max-w-xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg opacity-90 mb-6">{slide.desc}</p>

              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full shadow-lg">
                Explore More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Vertical Bullets */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-orange-500 scale-150" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Progress Line */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 h-40 w-[2px] bg-gray-300">
        <div
          className="w-full bg-orange-500 transition-all duration-500"
          style={{
            height: `${(current + 1) * 25}%`,
          }}
        />
      </div>
    </div>
  );
}
