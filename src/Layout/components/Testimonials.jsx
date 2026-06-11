import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Philip Anthropy",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Innovix Technology helped us generate quality leads and improve our online performance. Their team is proactive, reliable, and results-focused.",
  },
  {
    id: 2,
    name: "David Alexon",
    role: "MH Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "From strategy to execution, Innovix delivered outstanding results. Our conversions and ROI improved significantly.",
  },
  {
    id: 3,
    name: "Shilpa Shethy",
    role: "CEO, Founder",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The Innovix team understands our goals and delivers consistently. Their support and expertise truly stand out.",
  },
];

export default function Testimonials() {
  const [count, setCount] = useState(0);
  const scrollRef = useRef(null);

  /* ================= Counter Animation ================= */
  useEffect(() => {
    let start = 0;
    const end = 1372;
    const duration = 2000;
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  /* ================= Auto Horizontal Scroll ================= */
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (container) {
        scrollAmount += 1;
        container.scrollLeft += 1;

        // Infinite effect
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);

    // Pause on hover
    container?.addEventListener("mouseenter", () => clearInterval(interval));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray py-10 px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2">
        {/* Heading */}
        <div className="flex justify-between items-center flex-wrap gap-6 mb-12">
          <div>
            <p className="text-orange-500 font-semibold mb-2">— Testimonials</p>
            <h2 className="text-3xl font-bold">
              Consen Trusted Customers
              Awesome <span className="text-orange-500">Reviews</span>
            </h2>
          </div>

          {/* Counter */}
          <div className="flex gap-12 text-center">
            <div>
              <h3 className="text-4xl font-bold text-orange-500">{count}+</h3>
              <p className="text-gray">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">100%</h3>
              <p className="text-gray">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-6"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[350px] bg-white text-gray-800 p-6 rounded-xl shadow-lg transition duration-300 hover:bg-orange-50 hover:shadow-2xl"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-orange-500 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-4">{item.review}</p>

              {/* Stars */}
              <div className="flex text-orange-500">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
