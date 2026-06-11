import { motion } from "framer-motion";
import { Cpu, Bot, Workflow, Zap } from "lucide-react";

const features = [
  {
    title: "Smart Automation",
    desc: "Automate repetitive tasks using AI-driven workflows.",
    icon: Cpu,
  },
  {
    title: "AI Bots",
    desc: "Deploy intelligent bots for customer interaction.",
    icon: Bot,
  },
  {
    title: "Workflow Optimization",
    desc: "Streamline business operations with automation.",
    icon: Workflow,
  },
  {
    title: "Fast Performance",
    desc: "Boost productivity with lightning-fast execution.",
    icon: Zap,
  },
];

export default function AIAutomation() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white">
      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Automation
            <span className="text-orange-500"> Revolution</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Transform your business with powerful AI automation tools that
            enhance efficiency and reduce manual work.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-2xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-3xl p-10 text-white shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Why AI Automation?</h2>
          <ul className="space-y-3">
            <li>✔ Reduce Costs</li>
            <li>✔ Save Time</li>
            <li>✔ Increase Accuracy</li>
            <li>✔ Scale Faster</li>
          </ul>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border-t-4 border-transparent hover:border-orange-500"
              >
                <Icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
