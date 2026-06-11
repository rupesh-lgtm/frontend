import { NavLink, useParams } from "react-router-dom";
import dataanalytics from "../../assets/images/dataanalytics.png"
import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaEdit,
  FaAppStore,
} from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import frontend from "../../assets/images/frontend.png"
import consultingstrategy from "../../assets/images/consulting-strategy.png"
import backendscalab from "../../assets/images/backend-scalability.png"
import clouddev from "../../assets/images/clouddev.png"
import db from "../../assets/images/db.png"
import aisolutionsautomation from "../../assets/images/aisolutionsautomation.png"
import uiux from "../../assets/images/uiux.png"
import DigitalMarketing from "../../assets/images/DigitalMarketing.png"
import app from "../../assets/images/App.png"
import supportmaintenance from "../../assets/images/supportmaintenance.png"
import { Helmet } from "react-helmet-async";
export const features = [
  {
    title: "Frontend Innovation",
    slug: "frontend-innovation",
    desc: "Crafting modern, fast, and interactive user interfaces with cutting-edge frontend technologies.",
    icon: FaCode,
    about:{
      image:frontend,
      subtitle:"We provide high-quality solutions tailored to your business needs.Our team ensures performance, scalability, and modern design. Frontend Innovation focuses on creating visually appealing, responsive, and high-performance user interfaces. It combines design, performance optimization, and modern frameworks to deliver seamless user experiences.",
      list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
        ]
      
      },
    Features:[
  {
    title: "Responsive Design",
    desc: "Works perfectly on mobile, tablet, and desktop.",
  },
  {
    title: "Fast Performance",
    desc: "Optimized loading speed and smooth interactions.",
  },
  {
    title: "Modern UI/UX",
    desc: "Clean and engaging user interfaces.",
  },
  {
    title: "Reusable Components",
    desc: "Scalable and maintainable code structure.",
  },
             ],
    workFlow: [
  { label: "User Interaction", color: "bg-blue-100" },
  { label: "UI Rendering", color: "bg-green-100" },
  { label: "API Request", color: "bg-yellow-100" },
  { label: "Data Processing", color: "bg-purple-100" },
  { label: "UI Update", color: "bg-pink-100" },
              ],
    process:"User Action → UI Event → API Call → Server Response → UI Update",          
    tools: [
  "React JS",
  "Next.js",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Framer Motion",
  "REST APIs",
           ],
  },
  {
    title: "Backend Scalability",
    slug: "backend-scalability",
    desc: "Build high-performance systems that scale seamlessly with your growing users and data.",
    icon: FaServer,
    about:{
          image:backendscalab,
          subtitle:"Backend scalability is the ability of a system to handle increasing traffic, users, and data without affecting performance. It ensures your application remains fast, reliable, and stable even during high demand.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
  {
    title: "Load Balancing",
    desc: "Distributes traffic across multiple servers.",
  },
  {
    title: "Auto Scaling",
    desc: "Automatically adds or removes resources.",
  },
  {
    title: "Caching",
    desc: "Stores frequently used data for faster access.",
  },
  {
    title: "Database Optimization",
    desc: "Efficient data handling and queries.",
  },

  ],
   process:"User → Load Balancer → Server → Cache/DB → Response",
    workFlow: [
  { label: "User Request", color: "bg-blue-100" },
  { label: "Load Balancer", color: "bg-green-100" },
  { label: "Server Cluster", color: "bg-yellow-100" },
  { label: "Database / Cache", color: "bg-purple-100" },
  { label: "Response", color: "bg-pink-100" },

              ],
    tools: [
        "E-commerce Platforms Handle thousands of users during sales.",
        "Streaming Services Deliver video content without buffering.",
        "Social Media Apps Support millions of active users.",
        "Express.js (Node.js)",
        "Django / Flask (Python)",
        "Spring Boot (Java)",
        "Laravel (PHP)",
  ],
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    desc: "Accelerate development, deployment, and scalability with modern Cloud and DevOps solutions.",
    icon: FaCloud,
    about:{
           image:clouddev,
          subtitle:"Cloud computing provides on-demand access to servers, storage, and services over the internet. DevOps is a set of practices that combines development and operations to improve collaboration, automation, and faster delivery of applications.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
  {
    title: "Scalability",
    desc: "Easily scale resources based on demand.",
  },
  {
    title: "Automation",
    desc: "Automate deployments and workflows.",
  },
  {
    title: "Continuous Integration",
    desc: "Frequent code integration and testing.",
  },
  {
    title: "Monitoring",
    desc: "Track system performance and health.",
  },

  ],
   process:"User → Query → DBMS → Database → Result → User",
    workFlow: [
    { label: "Code Development", color: "bg-blue-100" },
  { label: "Build & Test", color: "bg-green-100" },
  { label: "CI/CD Pipeline", color: "bg-yellow-100" },
  { label: "Cloud Deployment", color: "bg-purple-100" },
  { label: "Monitoring", color: "bg-pink-100" },
  ],
    tools: [
    "Web Hosting Deploy websites on cloud servers.",
    "CI/CD Automation Automate build, test, and deployment.",
    "Microservices Deploy scalable service-based architecture.",
  
  ],
  },
  {
    title: "Database Management",
    slug: "database-management",
    desc: "Efficiently store, manage, and secure your data with modern database solutions.",
    icon: FaDatabase,
    about:{
           image:db,
          subtitle:"Database Management involves organizing, storing, and retrieving data efficiently using database systems. It ensures data accuracy, security, and easy access for applications and users.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
 {
    title: "Data Storage",
    desc: "Store structured and unstructured data efficiently.",
  },
  {
    title: "Data Security",
    desc: "Protect data with authentication and encryption.",
  },
  {
    title: "Backup & Recovery",
    desc: "Ensure data safety with regular backups.",
  },
  {
    title: "Scalability",
    desc: "Handle growing data with flexible systems.",
  },


  ],
   process:"Developer → Code Repo → CI/CD Pipeline → Cloud Server → Monitoring → User",
    workFlow: [
    { label: "User Request", color: "bg-blue-100" },
  { label: "Query Processing", color: "bg-green-100" },
  { label: "Database Engine", color: "bg-yellow-100" },
  { label: "Data Retrieval", color: "bg-purple-100" },
  { label: "Response Output", color: "bg-pink-100" },

  ],
    tools: [
  "Relational Database Stores data in tables (MySQL, PostgreSQL).",
  "NoSQL Database Handles unstructured data (MongoDB).",
  "Cloud Database Hosted on cloud platforms.",
  
  ],
  },
  {
    title: "AI Solutions & Automation",
    slug: "ai-solutions",
    desc: "Automating business processes with intelligent AI systems to improve efficiency, accuracy, and productivity.",
    icon: FaRobot,
    about:{
          image:aisolutionsautomation,
          subtitle:"AI Solutions & Automation combine artificial intelligence with automated workflows to perform tasks without human intervention. It helps businesses save time, reduce costs, and improve accuracy.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
 {
    title: "Process Automation",
    desc: "Automate repetitive business tasks.",
  },
  {
    title: "Smart Decision Making",
    desc: "AI analyzes data to make better decisions.",
  },
  {
    title: "24/7 Operations",
    desc: "Systems run continuously without downtime.",
  },
  {
    title: "Cost Efficiency",
    desc: "Reduce manual labor and operational costs.",
  },
  ],
   process:"Input → AI Model → Decision Engine → Automation → Output",
    workFlow: [
    { label: "Input Data", color: "bg-blue-100" },
  { label: "AI Processing", color: "bg-green-100" },
  { label: "Decision Engine", color: "bg-yellow-100" },
  { label: "Automation Action", color: "bg-purple-100" },
  { label: "Output Result", color: "bg-pink-100" },

  ],
    tools: [
  "Customer Support Automation AI chatbots handle customer queries instantly.",
  "Email Automation Automatically send and respond to emails.",
  "Data Analysis Analyze large datasets quickly.",
  
  ],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "Creating intuitive, engaging, and user-friendly digital experiences that people love.",
    icon: FaEdit,
    about:{
           image:uiux,
          subtitle:"UI (User Interface) focuses on the visual elements like buttons, layouts, and colors, while UX (User Experience) focuses on how users interact with the product to ensure a smooth and meaningful experience.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
 {
    title: "User-Centered Design",
    desc: "Design focused on user needs and behavior.",
  },
  {
    title: "Responsive Design",
    desc: "Works perfectly on mobile, tablet, and desktop.",
  },
  {
    title: "Visual Design",
    desc: "Attractive layouts, colors, and typography.",
  },
  {
    title: "Usability",
    desc: "Easy to use and intuitive navigation.",
  },

  ],
   process:"User Research → Wireframe → Visual Design → Prototype → Testing → Final Product",
    workFlow: [
    { label: "Research", color: "bg-blue-100" },
  { label: "Wireframing", color: "bg-green-100" },
  { label: "UI Design", color: "bg-yellow-100" },
  { label: "Prototyping", color: "bg-purple-100" },
  { label: "Testing", color: "bg-pink-100" },

  ],
    tools: [
  "Website Design Design modern and responsive websites.",
  "Mobile Apps Create intuitive mobile app experiences.",
  "Dashboard UI Design user-friendly admin panels.",  
  ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Grow your business online with powerful marketing strategies, data-driven campaigns, and measurable results.",
    icon: FaRobot,
    about:{
          image:DigitalMarketing,
          subtitle:"Digital Marketing is the promotion of products or services using online channels such as search engines, social media, websites, and email to reach targeted audiences.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
 {
    title: "SEO Optimization",
    desc: "Improve website ranking on search engines like Google.",
  },
  {
    title: "Social Media Marketing",
    desc: "Promote your brand on platforms like Instagram and Facebook.",
  },
  {
    title: "PPC Advertising",
    desc: "Run paid ads to generate quick traffic and leads.",
  },
  {
    title: "Content Marketing",
    desc: "Create valuable content to attract customers.",
  },

  ],
   process:"User → Website/Ad → Engagement → Data Tracking → Analysis → Optimization → Results",
    workFlow: [
    { label: "Market Research", color: "bg-blue-100" },
  { label: "Strategy Planning", color: "bg-green-100" },
  { label: "Campaign Execution", color: "bg-yellow-100" },
  { label: "Performance Tracking", color: "bg-purple-100" },
  { label: "Optimization", color: "bg-pink-100" },

  ],
    tools: [
    "Search Engines Google, Bing for organic and paid traffic.",
    "Social Media Facebook, Instagram, LinkedIn marketing.",
    "Email Marketing Direct communication with customers.",
  
  ],
  },
  {
    title: "App Development",
    slug: "app-development",
    desc: "Building high-performance mobile and web applications that deliver seamless user experiences.",
    icon: FaAppStore,
    about:{
          image:app,
          subtitle:"App Development is the process of creating software applications for mobile devices, web platforms, and desktops. It involves designing, coding, testing, and deploying apps that solve real-world problems and enhance user experience.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
 {
    title: "User-Friendly UI",
    desc: "Easy and intuitive design for users.",
  },
  {
    title: "High Performance",
    desc: "Fast and smooth app experience.",
  },
  {
    title: "Secure",
    desc: "Data protection and secure access.",
  },
  {
    title: "Scalable",
    desc: "Grow with your business needs.",
  },

  ],
   process:"User → Website/Ad → Engagement → Data Tracking → Analysis → Optimization → Results",
    workFlow: [
   { label: "Idea & Planning", color: "bg-blue-100" },
  { label: "UI/UX Design", color: "bg-green-100" },
  { label: "Development", color: "bg-yellow-100" },
  { label: "Testing", color: "bg-purple-100" },
  { label: "Deployment", color: "bg-pink-100" },

  ],
    tools: [
      "E-commerce Apps Online shopping platforms.",
      "Social Media Apps Connect and share with users.",
      "Business Apps Manage operations efficiently.",
      "Mobile Apps Android and iOS applications for smartphones.",
      "Web Apps Browser-based applications accessible anywhere.",
      "Hybrid Apps that work across multiple platforms.",
  
  ],
  },
  {
    title: "Data & Analytics",
    slug: "data-analytics",
    desc: "Transform raw data into actionable insights with advanced analytics and intelligent decision-making.",
    icon: BiAnalyse ,
    about:{
          image:dataanalytics,
          subtitle:"Data & Analytics is the process of collecting, processing, and analyzing data to discover patterns, trends, and insights. It helps businesses make data-driven decisions and improve performance.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
 {
    title: "Data Collection",
    desc: "Gather data from multiple sources like apps, websites, and systems.",
  },
  {
    title: "Data Processing",
    desc: "Clean and transform data into usable formats.",
  },
  {
    title: "Data Visualization",
    desc: "Present insights through charts, graphs, and dashboards.",
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast future trends using machine learning.",
  },

  ],
   process:"Raw Data → Cleaning → Transformation → Analysis → Visualization → Insights",
    workFlow: [
   { label: "Data Sources", color: "bg-blue-100" },
  { label: "Data Collection", color: "bg-green-100" },
  { label: "Data Cleaning", color: "bg-yellow-100" },
  { label: "Analysis", color: "bg-purple-100" },
  { label: "Insights", color: "bg-pink-100" },

  ],
    tools: [
  "Business Intelligence Analyze performance and make better decisions.",
  "Customer Insights Understand user behavior and preferences.",
  "Fraud Detection Identify unusual patterns and prevent fraud.",
  ],
  },
   {
    title: "Creative Design",
    slug: "creative-design",
    desc: "Crafting visually stunning and user-friendly designs that elevate your brand identity and user experience.",
    icon: BiAnalyse ,
    about:{
          image:dataanalytics,
          subtitle:"Creative Design is the art of combining visuals, colors, typography, and layout to communicate ideas effectively. It focuses on making digital products attractive, engaging, and easy to use.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
 {
    title: "UI Design",
    desc: "Designing visually appealing interfaces.",
  },
  {
    title: "UX Design",
    desc: "Improving user experience and usability.",
  },
  {
    title: "Branding",
    desc: "Creating unique brand identity.",
  },
  {
    title: "Typography",
    desc: "Using fonts effectively for readability.",
  },

  ],
   process:"Idea → Research → Wireframe → Design → Testing → Final Output",
    workFlow: [
   { label: "Research", color: "bg-blue-100" },
  { label: "Wireframing", color: "bg-green-100" },
  { label: "UI Design", color: "bg-yellow-100" },
  { label: "Testing", color: "bg-purple-100" },
  { label: "Final Delivery", color: "bg-pink-100" },

  ],
    tools: [
  "Website Design Modern and responsive website layouts.",
  "Mobile App Design User-friendly mobile interfaces.",
  "Logo Design Unique brand logos and identity.",

  ],
  },
  {
    title: "Consulting Strategy",
    slug: "consulting-strategy",
    desc: "Empowering businesses with smart IT solutions, scalable systems, and future-ready technology strategies.",
    icon: BiAnalyse ,
    about:{
         image:consultingstrategy,
          subtitle:"Our IT consulting strategy focuses on transforming your business through modern technologies like cloud computing, AI, and scalable backend systems. We analyze your current infrastructure and provide optimized solutions to improve performance and efficiency.",
           list:[
                  "Scalable Architecture",
                  "Cost Optimization",
                  "Security Enhancement",
                  "Faster Deployment",
                ]
      },
    Features:[
               {
              title: "Cloud Solutions",
              desc: "Deploy and manage scalable cloud infrastructure.",
            },
            {
              title: "AI Integration",
              desc: "Implement AI-driven automation and analytics.",
            },
            {
              title: "Cyber Security",
              desc: "Protect systems with advanced security strategies.",
            },
  ],
   process:"Requirement Analysis → Strategy Planning → Implementation → Testing & Optimization → Final Output",
    workFlow: [
   { label: "Requirement Analysis", color: "bg-blue-100" },
  { label: "Strategy Planning", color: "bg-green-100" },
  { label: "Implementation", color: "bg-yellow-100" },
  { label: "Testing", color: "bg-purple-100" },
  { label: "Optimization", color: "bg-pink-100" },
  ],
    tools: [
  "Expert Team Skilled professionals with years of IT experience.",
  "Fast Response Quick resolution to minimize downtime.",
  "Affordable Pricing Cost-effective solutions for businesses of all sizes.",
  ],
  },
  {
    title: "Support & Maintenance",
    slug: "support-maintenance",
    desc: "Reliable IT support and maintenance services to keep your systems running smoothly and securely.",
    icon: BiAnalyse ,
    about:{
          image:supportmaintenance,
          subtitle:"Reliable IT support and maintenance services to keep your systems running smoothly and securely.",
           list:[
          "High Quality Work",
          "Fast Delivery",
          "24/7 Support",
          "Affordable Pricing"
                ]
      },
    Features:[
   {
    title: "24/7 Technical Support",
    desc: "Our team is available round the clock to resolve your IT issues quickly.",
  },
  {
    title: "System Monitoring",
    desc: "We continuously monitor your systems to prevent downtime and failures.",
  },
  {
    title: "Software Updates",
    desc: "Regular updates to keep your software secure and up to date.",
  },
  {
    title: "Security Management",
    desc: "Protect your business with advanced security solutions.",
  },


  ],
   process:"Issue Identification → Analysis & Diagnosis → Solution Implementation → Testing & Monitoring → Final Output",
    workFlow: [
   { label: "Issue Identification", color: "bg-blue-100" },
  { label: "Analysis & Diagnosis", color: "bg-green-100" },
  { label: "Solution Implementation", color: "bg-yellow-100" },
  { label: "Testing", color: "bg-purple-100" },
  { label: "Testing & Monitoring", color: "bg-pink-100" },
  ],
    tools: [
  "Expert Team Skilled professionals with years of IT experience.",
  "Fast Response Quick resolution to minimize downtime.",
  "Affordable Pricing Cost-effective solutions for businesses of all sizes.",
  ],
  },
];
const ServiceDetails = () => {
  const { slug } = useParams();

  const service = features.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        ❌ Service Not Found
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white">
       {/* SEO */}
      <Helmet>
        <title>AI Solutions & Automation | Frontend | Backend | Cloud & DevOps | Database Management | Innovix Technology</title>
        <meta
          name="description"
          content="Innovix Technology provides AI solutions, automation, machine learning, and predictive analytics to grow your business."
        />
        <meta
          name="keywords"
          content="AI solutions, automation, machine learning, Innovix Technology, AI services"
        />
      </Helmet>
      {/* HERO */}
      <div className="bg-orange-500 text-white py-20 text-center">
        <Icon className="text-5xl mx-auto mb-4" />
        <h1 className="text-4xl font-bold">{service.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          {service.desc}
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Choose {service.title}?
          </h2>

          <p className="text-gray-600 mb-6">
            {service.about.subtitle}
          </p>

            <ul className="space-y-4">
            {service.about.list.map((item, index) => (
            <li
            key={index}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-3 hover:shadow-lg transition"
            >
            <span className="text-green-500">✔</span>
            <span className="text-gray-700">{item}</span>
            </li>
            ))}
            </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="bg-gray-200 h-80 rounded-2xl flex items-center justify-center">
          <img
                src={service.about.image}
                alt={service.title}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                />
        </div>
      </div>
      <section className="bg-gray-100 py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {service.Features.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>
<section className="py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">How {service.title} Works</h2>

 <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
  {service.workFlow.map((item, index) => (
    <div key={index} className="flex items-center">
      
      <div className={`p-4 ${item.color} rounded-lg min-w-[140px]`}>
        {item.label}
      </div>

      {index !== service.workFlow.length - 1 && (
        <>
          <span className="hidden md:block mx-2">➡️</span>
          <span className="block md:hidden rotate-90 my-2">➡️</span>
        </>
      )}
      
    </div>
  ))}
  
</div>
<div className="text-center">{service.process}</div>
</section>
     
<section className="bg-gray-100 py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-12">Technologies We Serve</h2>

  <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
    {service.tools.map((tool, index) => (
      <span
        key={index}
        className="bg-white px-4 py-2 rounded-full shadow text-sm"
      >
        {tool}
      </span>
    ))}
  </div>
</section>
      {/* CTA */}
      <div className="text-center py-8 bg-orange-600">
        <h2 className="text-3xl text-white font-bold mb-4">
          Ready to Get Started?
        </h2>
        <NavLink to="/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceDetails;