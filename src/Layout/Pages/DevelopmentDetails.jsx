import { NavLink, useParams } from "react-router-dom";
import aiinnovation from "../../assets/images/aiinnovation.png"
import web3technology from "../../assets/images/web-3.0-technology.png"
import Cloud from "../../assets/images/Cloud-technology.png"
import Cyber from "../../assets/images/Cyber-security.png"
import { FaDatabase, FaCogs, FaBrain, FaChartLine } from "react-icons/fa";


const developments = [
{
title: "AI Innovation",
slug: "ai-innovation",
desc: "AI helps automate processes, improve decision-making, and deliver personalized experiences. Businesses use AI for chatbots, analytics, and automation. AI Innovation focuses on building smart systems that can learn, analyze, and make decisions like humans. It helps businesses automate tasks, improve efficiency, and deliver personalized experiences.",
image: aiinnovation,
web3Features: [
            {
            title: "Decentralization",
            desc: "No central authority controls the data.",
            },
            {
            title: "Blockchain",
            desc: "Secure and transparent data storage.",
            },
            {
            title: "Smart Contracts",
            desc: "Automated agreements without intermediaries.",
            },
            {
            title: "Ownership",
            desc: "Users own their digital assets and identity.",
            },
            ],
aiSteps: [
            {
            title: "Data Collection",
            desc: "AI collects large amounts of data from various sources. AI needs data (text, images, videos, etc.)",
            icon: FaDatabase,
            },
            {
            title: "Data Processing",
            desc: "Clean and prepare data. Like Remove errors, Clean data, Convert into usable format",
            icon: FaCogs,
            },
            {
            title: "Model Training",
            desc: "AI learns patterns as AI uses algorithms (like Machine Learning), Finds patterns in data",
            icon: FaBrain,
            },
            {
            title: "Prediction",
            desc: "AI gives output. AI gives results like chatbot reply, image detection, recommendations",
            icon: FaChartLine,
            },
            ],
processstep:"User Input → Data Preprocessing → AI Model → Decision → Output",        
flowSteps:[
            { label: "Input Data", color: "bg-blue-100" },
            { label: "Processing", color: "bg-green-100" },
            { label: "AI Model", color: "bg-yellow-100" },
            { label: "Output Result", color: "bg-purple-100" },
            ],
aiUseCases:[
            {
            title: "Chatbots",
            desc: "Automated customer support systems.",
            },
            {
            title: "Image Recognition",
            desc: "Detect objects and faces in images.",
            },
            {
            title: "Recommendation Systems",
            desc: "Suggest products based on user behavior.",
            },
            ],        
            },
{
title: "Web 3.0",
slug: "web-3",
desc: "Web 3.0 is decentralized and powered by blockchain. It gives users control over their data and enables smart contracts and dApps. Web 3.0 is the next generation of the internet where users have control over their data. It is decentralized, secure, and powered by blockchain technology, enabling trustless and transparent systems.",
image: web3technology,
web3Features: [
            {
            title: "Decentralization",
            desc: "No central authority controls the data.",
            },
            {
            title: "Blockchain",
            desc: "Secure and transparent data storage.",
            },
            {
            title: "Smart Contracts",
            desc: "Automated agreements without intermediaries.",
            },
            {
            title: "Ownership",
            desc: "Users own their digital assets and identity.",
            },
         ],
aiSteps: [
          {
          title: "Data Collection",
          desc: "AI collects large amounts of data from various sources.",
          icon: FaDatabase,
          },
          {
          title: "Data Processing",
          desc: "Clean and prepare data.",
          icon: FaCogs,
          },
          {
          title: "Model Training",
          desc: "AI learns patterns.",
          icon: FaBrain,
          },
          {
          title: "Prediction",
          desc: "AI gives output.",
          icon: FaChartLine,
          },
         ],
processstep:"User → Wallet → Blockchain → Smart Contract → Validation → Output",       
flowSteps:[
            { label: "User Request", color: "bg-blue-100" },
            { label: "Blockchain Network", color: "bg-green-100" },
            { label: "Smart Contract", color: "bg-yellow-100" },
            { label: "Transaction Validation", color: "bg-purple-100" },
            { label: "Final Output", color: "bg-pink-100" },

],
aiUseCases:[
          {
          title: "Cryptocurrency",
          desc: "Digital currencies like Bitcoin and Ethereum.",
          },
          {
          title: "NFTs",
          desc: "Ownership of digital art and assets.",
          },
          {
          title: "DeFi",
          desc: "Decentralized financial services.",
          },
          ],          
},
{
title: "Cloud Evolution",
slug: "cloud-evolution",
desc: "Cloud computing enables scalability, flexibility, and cost efficiency. Businesses can deploy apps globally with ease. Cloud Evolution refers to the transformation of traditional IT infrastructure into modern cloud-based systems. It allows businesses to store data, run applications, and scale resources over the internet instead of physical servers.",
image: Cloud,
web3Features: [
            {
            title: "Scalability",
            desc: "Easily scale resources up or down based on demand.",
            },
            {
            title: "Cost Efficiency",
            desc: "Pay only for what you use.",
            },
            {
            title: "Security",
            desc: "Advanced data protection and encryption.",
            },
            {
            title: "High Availability",
            desc: "Access services anytime, anywhere.",
            },
],
aiSteps: [
        {
        title: "Data Collection",
        desc: "AI collects large amounts of data from various sources.",
        icon: FaDatabase,
        },
        {
        title: "Data Processing",
        desc: "Clean and prepare data.",
        icon: FaCogs,
        },
        {
        title: "Model Training",
        desc: "AI learns patterns.",
        icon: FaBrain,
        },
        {
        title: "Prediction",
        desc: "AI gives output.",
        icon: FaChartLine,
        },
],
processstep:"User → Internet → Cloud Server → Processing → Response",
flowSteps:[
{ label: "User Request", color: "bg-blue-100" },
{ label: "Internet", color: "bg-green-100" },
{ label: "Cloud Server", color: "bg-yellow-100" },
{ label: "Processing", color: "bg-purple-100" },
{ label: "Response", color: "bg-pink-100" },

],
aiUseCases:[
          {
          title: "Cloud Storage",
          desc: "Store and access data online.",
          },
          {
          title: "Web Hosting",
          desc: "Host websites and applications.",
          },
          {
          title: "Backup & Recovery",
          desc: "Secure data backup solutions.",
          },
],  
},
{
title: "Cyber Security Areas",
slug: "cyber-security",
desc: "Cyber Security is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage.It ensures confidentiality, integrity, and availability of information.",
image: Cyber,
web3Features: [
{
    title: "Network Security",
    desc: "Protects internal networks from unauthorized access.",
  },
  {
    title: "Application Security",
    desc: "Secures software and applications from threats.",
  },
  {
    title: "Data Security",
    desc: "Protects sensitive information and user data.",
  },
  {
    title: "Cloud Security",
    desc: "Ensures safe cloud storage and infrastructure.",
  },
],
aiSteps: [
{
title: "Data Collection",
desc: "AI collects large amounts of data from various sources.",
icon: FaDatabase,
},
{
title: "Data Processing",
desc: "Clean and prepare data.",
icon: FaCogs,
},
{
title: "Model Training",
desc: "AI learns patterns.",
icon: FaBrain,
},
{
title: "Prediction",
desc: "AI gives output.",
icon: FaChartLine,
},
],
processstep:"User Activity → Threat Detection → Risk Analysis → Protection → Monitoring → Response",
flowSteps:[
{ label: "Threat Detection", color: "bg-red-100" },
  { label: "Risk Analysis", color: "bg-yellow-100" },
  { label: "Protection", color: "bg-green-100" },
  { label: "Monitoring", color: "bg-blue-100" },
  { label: "Response", color: "bg-purple-100" },
],
aiUseCases:[
{
    title: "Phishing",
    desc: "Fake emails to steal sensitive information.",
  },
  {
    title: "Malware",
    desc: "Harmful software that damages systems.",
  },
  {
    title: "Ransomware",
    desc: "Locks data and demands payment.",
  },
],  
},
];

export default function DevelopmentDetails() {
  const { slug } = useParams();

  const development = developments.find((item) => item.slug === slug);

  if (!development) {
    return <h1 className="text-center mt-20 text-2xl">Page Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        
        <h1 className="text-4xl font-bold mb-6 text-center">
          {development.title}
        </h1>

        <img
          src={development.image}
          alt={development.title}
          className="w-full h-auto object-cover rounded-xl mb-6"
        />

        <p className="text-gray-600 leading-relaxed text-lg">
          {development.desc}
        </p>

      </div>
      <section className="bg-gray-100 py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {development.web3Features.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>
      <section className="bg-gray-100 py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">How {development.title} Works</h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
  {development.aiSteps.map((item, index) => {
    const Icon = item.icon;
    return (
      <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <Icon className="text-3xl text-indigo-600 mx-auto mb-4" />
        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    );
  })}
</div>
</section>
<section className="py-16 px-2 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12">{development.title} Processing Flow</h2>
 <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
  {development.flowSteps.map((item, index) => (
    <div key={index}>
      
      {/* Box */}
      <div className={`p-4 ${item.color} rounded-lg min-w-[140px] w-full md:w-auto`}>
        {item.label}
         
      </div>
    
      {/* Arrow */}
      {index !== development.flowSteps.length - 1 && (
        <>
          {/* Desktop Arrow → */}
          <span className="hidden md:block text-xl">➡️</span>

          {/* Mobile Arrow ↓ */}
          <span className="block md:hidden text-xl rotate-90">➡️</span>
        </>
       
      )}

    </div>
    
  ))}

</div>
 <div className="flex justify-center items-center w-full mt-4">
  <div className="w-full md:w-auto max-w-3xl text-center bg-gray p-6 rounded-xl shadow">
    {development.processstep}
  </div>
</div>

</section>
<section className="bg-gray-100 py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">{development.title} Use Cases</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {development.aiUseCases.map((item, index) => (
    <div 
      key={index} 
      className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
    >
      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    </div>
  ))}
</div>
</section>
<section className="bg-orange-500 text-white py-4 text-center">
  <h2 className="text-3xl font-bold mb-4">Start Your {development.title} Journey</h2>
  <p className="mb-6">Let’s build intelligent solutions for your business.</p>
  <NavLink to="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold">
    Get Started
  </NavLink>
</section>
    </div>
  );
}