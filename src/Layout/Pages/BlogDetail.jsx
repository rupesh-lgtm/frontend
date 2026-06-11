import { useParams } from "react-router-dom";
import digital from "../../assets/images/DigitalLandscape.png";
import digitalimg from "../../assets/images/jcm-14-02519.jpg";
import postpartum from "../../assets/images/postpartumslider.png";
import postpartto from "../../assets/images/postpartum.jpeg";
import ai from "../../assets/images/aisolutionsautomation.png";
import bar from "../../assets/images/bar.png";
import { desc, title } from "framer-motion/client";
import talik from "../../assets/images/workflow-Do24YdTm.png";
import pms from "../../assets/images/pms.png";
import automation from "../../assets/images/automation-in-healthcare-header.jpeg";
import phi from "../../assets/images/phi.png";
import idhm from "../../assets/images/idhm.png";
import hms from "../../assets/images/hms.png";
export const blogs = [
  {
    id: "1",
    title:
      "AI & Machine Learning in Healthcare: Transforming the US Medical Landscape",
    content:
      "Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing the healthcare industry in the United States. From improving patient outcomes to reducing operational costs, these technologies are reshaping how healthcare providers diagnose, treat, and manage diseases.",
    image: ai,
    image1: talik,
    subtitle: "The Growing Role of AI in US Healthcare",
    desc: "The US healthcare system is one of the most advanced yet complex in the world. With rising patient demands and increasing costs, AI and ML provide scalable solutions to enhance efficiency and accuracy. AI systems can analyze vast amounts of medical data within seconds—something that would take humans hours or even days. This capability allows healthcare professionals to make faster, data- driven decisions.",

    techtitle: "Key Applications of AI &amp; ML in Healthcare",
    technologies: [
      {
        title: "Early Disease Detection",
        desc: "AI-powered tools can detect diseases like cancer, heart conditions, and neurological disorders at early stages using imaging and predictive analytics. Early diagnosis significantly improves survival rates and treatment success.",

        // list:[
        //         "Provide 24/7 emotional support",
        //         "Detect early signs of postpartum depression",
        //         "Recommend coping strategies and professional help",
        // ],
        //desc1:"Personalized Treatment Plans",
      },
      {
        title: "Personalized Treatment Plans",
        desc: "Machine learning algorithms analyze patient history, genetics, and lifestyle to recommend personalized treatment plans. This approach ensures better outcomes compared to traditional “one- size-fits-all” treatments.",

        // list:[
        //         "Routine check-ups",
        //         "Mental health counseling",
        //         "Lactation consultations",
        // ],
        //desc1:"Telemedicine ensures continuous care while reducing stress and travel burdens.",
      },
      {
        title: "AI-Enabled Electronic Health Records (EHR)",
        desc: "AI enhances EHR systems by automating documentation, reducing errors, and providing actionable insights. Doctors can access patient data quickly and make informed decisions.",

        // list:[
        //         "Daily health tracking (sleep, nutrition, mood)",
        //         "Personalized recovery plans",
        //         "Reminders for medication and baby care",
        // ],
        //desc1:"These tools empower women to stay informed and proactive about their health.",
      },
      {
        title: "Virtual Assistants &amp; Chatbots",
        desc: "AI-driven virtual assistants help patients schedule appointments, receive medication reminders, and get basic medical advice—reducing the workload on healthcare staff.",

        // list:[
        //        "Share experiences",
        //      "Seek advice",
        //     "Build emotional connections",
        // ],
        //desc1:"Peer support plays a crucial role in reducing feelings of isolation and anxiety.",
      },
      {
        title: "Predictive Analytics",
        desc: "Hospitals use AI to predict patient admissions, optimize staffing, and prevent readmissions. This improves operational efficiency and reduces healthcare costs.",

        // list:[
        //         "Customized fitness routines",
        //         "Nutrition plans",
        //         "Mental wellness exercises",
        // ],
        //desc1:"Personalization enhances recovery outcomes and boosts confidence in new mothers.",
      },
    ],
    //   list:{
    //     title:"Clinical Trials Distribution (Last 20 Years)",
    //     subduble:"🌍 By Continents",
    //   Continents:[
    //     {
    //       title:"North America, Asia & Europe dominate global clinical trials.",
    //     },
    //     {
    //       title:"Asia is the fastest-growing region due to expanding healthcare infrastructure.",
    //     },
    //     {
    //       title:"Africa & South America still have limited participation in trials.",
    //     }
    //   ],
    //   list1:{
    //     subduble:"🌍 By Disease:",
    //   Continents:[
    //     {
    //       title:"Cancer (Oncology) has the highest number of trials",
    //     },
    //     {
    //       title:"Followed by cardiovascular, neurological & diabetes",
    //     },
    //     {
    //       title:"COVID-19 caused a major surge in research",
    //     }
    //   ]
    // },

    // },
    keymain: "How is AI currently being used in healthcare",
    // keycontent:"Trials are growing globally, but distribution is still unequal",
    sublist: {
      title: "Benefits of AI in US Healthcare",

      Continents: [
        {
          title: "Improved Accuracy",
          desc: "Reduced human errors in diagnosis",
        },
        {
          title: "Cost Reduction",
          desc: "Lower operational and treatment costs",
        },
        {
          title: "Time Efficiency",
          desc: "Faster decision-making and patient care",
        },
        {
          title: "Enhanced Patient Experience",
          desc: "Personalized and proactive care",
        },
        {
          title: "Better Resource Management",
          desc: "Optimized hospital operations",
        },
      ],
      list1: {
        title: "Challenges and Concerns",
        sublistone:
          "Despite its advantages, AI in healthcare comes with challenges:",
        Continents: [
          {
            title: "Data Privacy &amp; Security",
            desc: "Protecting sensitive patient data",
          },
          {
            title: "Regulatory Compliance",
            desc: "Meeting strict US healthcare regulations (HIPAA)",
          },
          {
            title: "Integration Issues",
            desc: "Implementing AI into existing systems",
          },
          {
            title: "Trust & Adoption",
            desc: "Gaining confidence from healthcare professionals",
          },
        ],
      },
    },
    futuremain: "Future of AI in US Healthcare",
    futuretitle:
      "The future looks promising. With continuous advancements, AI will play a crucial role in:",
    futurelist: [
      "1.Robotic surgeries",
      "2.Drug discovery and development",
      "3.Remote patient monitoring",
      "4.Real-time diagnostics",
    ],
    futuresubtitle:
      "As AI technology evolves, it will further bridge gaps in accessibility and quality of care across the United States.",
    image2: talik,
    main: "Conclusion",
    maintitle:
      "AI and Machine Learning are not just trends—they are the future of healthcare in the US. By improving efficiency, accuracy, and patient outcomes, these technologies are setting new standards in medical care. Organizations that adopt AI today will lead the healthcare revolution tomorrow.",
  },
  {
    id: "2",
    title:
      "How Digital Innovation Can Support Girls Through Postpartum Recovery",
    content:
      "In today’s fast-evolving digital landscape, technology is not just transforming businesses.it is also reshaping healthcare and emotional well-being. Digital solutions are playing a powerful role in supporting new mothers through one of the most sensitive phases of life: postpartum recovery.",
    image: postpartum,
    image1: postpartto,
    subtitle: "Understanding Postpartum Challenges",
    desc: "The postpartum period can be physically, emotionally, and mentally demanding. Many women experience mood swings, fatigue, anxiety, or even postpartum depression. Traditionally, support systems relied heavily on family and in-person healthcare. However, modern digital solutions are bridging critical gaps especially for women who may lack immediate access to support.",
    techtitle: "Role of Digital Technology in Postpartum Care",
    technologies: [
      {
        title: "AI-Powered Mental Health Support",
        desc: "Artificial Intelligence (AI) is revolutionizing mental health care. Smart chatbots and virtual assistants can:",

        list: [
          "Provide 24/7 emotional support",
          "Detect early signs of postpartum depression",
          "Recommend coping strategies and professional help",
        ],
        desc1:
          "Machine learning algorithms can analyze behavioral patterns, helping identify risk factors early and enabling timely intervention.",
      },
      {
        title: "Telehealth and Remote Consultations",
        desc: "Digital platforms allow new mothers to connect with healthcare professionals without leaving home. This is especially beneficial for:",

        list: [
          "Routine check-ups",
          "Mental health counseling",
          "Lactation consultations",
        ],
        desc1:
          "Telemedicine ensures continuous care while reducing stress and travel burdens.",
      },
      {
        title: "Mobile Apps for Daily Guidance",
        desc: "Postpartum-focused mobile applications provide:",

        list: [
          "Daily health tracking (sleep, nutrition, mood)",
          "Personalized recovery plans",
          "Reminders for medication and baby care",
        ],
        desc1:
          "These tools empower women to stay informed and proactive about their health.",
      },
      {
        title: "Online Communities and Peer Support",
        desc: "Digital platforms create safe spaces where mothers can:",

        list: [
          "Share experiences",
          "Seek advice",
          "Build emotional connections",
        ],
        desc1:
          "Peer support plays a crucial role in reducing feelings of isolation and anxiety.",
      },
      {
        title: "Data-Driven Personalized Care",
        desc: "With the help of AI and machine learning, digital systems can analyze user data to deliver tailored recommendations. This includes:",

        list: [
          "Customized fitness routines",
          "Nutrition plans",
          "Mental wellness exercises",
        ],
        desc1:
          "Personalization enhances recovery outcomes and boosts confidence in new mothers.",
      },
    ],
    //   list:{
    //     title:"Clinical Trials Distribution (Last 20 Years)",
    //     subduble:"🌍 By Continents",
    //   Continents:[
    //     {
    //       title:"North America, Asia & Europe dominate global clinical trials.",
    //     },
    //     {
    //       title:"Asia is the fastest-growing region due to expanding healthcare infrastructure.",
    //     },
    //     {
    //       title:"Africa & South America still have limited participation in trials.",
    //     }
    //   ],
    //   list1:{
    //     subduble:"🌍 By Disease:",
    //   Continents:[
    //     {
    //       title:"Cancer (Oncology) has the highest number of trials",
    //     },
    //     {
    //       title:"Followed by cardiovascular, neurological & diabetes",
    //     },
    //     {
    //       title:"COVID-19 caused a major surge in research",
    //     }
    //   ]
    // },

    // },
    // keymain:"📊 Key Insight",
    // keycontent:"Trials are growing globally, but distribution is still unequal",
    // sublist:{
    //     title:"Benefits of Digital Clinical Trials",

    //   Continents:[

    //     {
    //       title:"Faster Patient Recruitment",
    //       desc:"Digital platforms help reach a larger and more diverse population.",
    //     },
    //     {
    //       title:"Improved Patient Engagement",
    //       desc:"Participants can join trials from the comfort of their homes, increasing retention rates.",
    //     },
    //     {
    //       title:"Cost Efficiency",
    //       desc:"Reduced need for physical infrastructure and logistics lowers overall trial costs.",
    //     },
    //     {
    //       title:"Real-Time Data Collection",
    //       desc:"Continuous monitoring allows for better insights and faster decision-making.",
    //     }
    //   ],
    //   list1:{
    //     title:"Challenges in Digital Clinical Trials",
    //   Continents:[
    //     {
    //       title:"Data Privacy Concerns",
    //       desc:"Handling sensitive patient data requires strict compliance with regulations.",
    //     },
    //     {
    //       title:"Technology Accessibility",
    //       desc:"Not all participants may have access to digital tools or stable internet.",
    //     },

    //   ]
    // },

    // },
    futuremain: "The Future of Digital Postpartum Care",
    futuretitle: "As technology continues to evolve, we can expect:",
    futurelist: [
      "Smarter predictive healthcare systems",
      "Wearable devices for real-time monitoring",
      "More inclusive and accessible digital platforms",
    ],
    futuresubtitle:
      "These innovations will further empower women and improve postpartum recovery experiences worldwide.",
    main: "Conclusion",
    maintitle:
      "Digital technology is not just a convenience it is becoming a lifeline for new mothers navigating postpartum challenges. By leveraging advanced tools and platforms, we can create a supportive ecosystem that prioritizes both physical and emotional well-being, helping women recover with confidence and care.",
  },
  {
    id: "3",
    title:
      "Clinical Trials in the Digital Landscape: Transforming Research for the Future",
    content:
      "Clinical trials have always been the backbone of medical innovation. From testing new drugs to validating treatment methods, they ensure safety and effectiveness before reaching patients. Today, with the rise of digital technologies, clinical trials are undergoing a massive transformation—making them faster, more efficient, and more patient-centric.",
    image: digital,
    image1: digitalimg,
    subtitle: "What Are Digital Clinical Trials?",
    desc: "Digital clinical trials, also known as decentralized or virtual trials, use technology to conduct research remotely. Instead of requiring patients to visit trial sites frequently, these trials leverage digital tools to collect data, monitor health, and communicate with participants.",
    techtitle: "Key Technologies Driving Digital Clinical Trials",
    technologies: [
      {
        title: "Artificial Intelligence (AI)",
        desc: "AI helps in patient recruitment, data analysis, and predicting trial outcomes. It can quickly identify suitable candidates by analyzing large datasets.",
      },
      {
        title: "Wearable Devices",
        desc: "Smartwatches and fitness trackers collect real-time health data such as heart rate, sleep patterns, and activity levels, reducing the need for in-person visits.",
      },
      {
        title: "Telemedicine",
        desc: "Virtual consultations allow researchers and patients to stay connected without geographical limitations.",
      },
      {
        title: "Electronic Data Capture (EDC)",
        desc: "Digital systems replace manual paperwork, ensuring accurate and efficient data collection.",
      },
      {
        title: "Blockchain Technology",
        desc: "Enhances data security and transparency, ensuring that patient information remains safe and tamper-proof.",
      },
    ],
    list: {
      title: "Clinical Trials Distribution (Last 20 Years)",
      subduble: "🌍 By Continents",
      Continents: [
        {
          title:
            "North America, Asia & Europe dominate global clinical trials.",
        },
        {
          title:
            "Asia is the fastest-growing region due to expanding healthcare infrastructure.",
        },
        {
          title:
            "Africa & South America still have limited participation in trials.",
        },
      ],
      list1: {
        subduble: "🌍 By Disease:",
        Continents: [
          {
            title: "Cancer (Oncology) has the highest number of trials",
          },
          {
            title: "Followed by cardiovascular, neurological & diabetes",
          },
          {
            title: "COVID-19 caused a major surge in research",
          },
        ],
      },
    },
    keymain: "📊 Key Insight",
    keycontent:
      "Trials are growing globally, but distribution is still unequal",
    sublist: {
      title: "Benefits of Digital Clinical Trials",

      Continents: [
        {
          title: "Faster Patient Recruitment",
          desc: "Digital platforms help reach a larger and more diverse population.",
        },
        {
          title: "Improved Patient Engagement",
          desc: "Participants can join trials from the comfort of their homes, increasing retention rates.",
        },
        {
          title: "Cost Efficiency",
          desc: "Reduced need for physical infrastructure and logistics lowers overall trial costs.",
        },
        {
          title: "Real-Time Data Collection",
          desc: "Continuous monitoring allows for better insights and faster decision-making.",
        },
      ],
      list1: {
        title: "Challenges in Digital Clinical Trials",
        Continents: [
          {
            title: "Data Privacy Concerns",
            desc: "Handling sensitive patient data requires strict compliance with regulations.",
          },
          {
            title: "Technology Accessibility",
            desc: "Not all participants may have access to digital tools or stable internet.",
          },
        ],
      },
    },
    futuremain: "The Future of Clinical Trials",
    futuretitle:
      "The integration of digital technologies is shaping a new era in clinical research. Hybrid models combining traditional and digital approaches are becoming more common. With continuous advancements, clinical trials will become more inclusive, efficient, and patient- friendly.",
    main: "Conclusion",
    maintitle:
      "Digital transformation is revolutionizing clinical trials by making them more accessible, efficient, and data-driven. As technology continues to evolve, the healthcare industry will witness faster innovations and improved patient outcomes.",
  },
  {
    id: "4",
    title:
      "Practice Management System (PMS): The Backbone of Modern Business Efficiency",
    content:
      "In today’s fast-paced digital landscape, businesses need more than just tools—they need smart systems that streamline operations, reduce manual effort, and improve overall productivity. This is where a Practice Management System (PMS) becomes a game- changer.",
    image: pms,
    //image1:digitalimg,
    subtitle: "What is a Practice Management System (PMS)?",
    desc: "A Practice Management System (PMS) is a software solution designed to manage day-to- day business operations such as scheduling, billing, client management, reporting, and workflow automation—all in one centralized platform.",
    despara:
      "Originally popular in healthcare and professional services, PMS is now widely adopted across industries to enhance efficiency and decision-making.",
    techtitle: "Why Businesses Need PMS",
    techpara:
      "Managing operations manually or across multiple disconnected tools often leads to:",
    technologies: [
      {
        title: "Data duplication",
        //desc: "AI helps in patient recruitment, data analysis, and predicting trial outcomes. It can quickly identify suitable candidates by analyzing large datasets.",
      },
      {
        title: "Communication gaps",

        //desc: "Smartwatches and fitness trackers collect real-time health data such as heart rate, sleep patterns, and activity levels, reducing the need for in-person visits.",
      },
      {
        title: "Reduced productivity",

        //desc: "Virtual consultations allow researchers and patients to stay connected without geographical limitations.",
      },
      {
        title: "Increased operational costs",
        //desc: "Digital systems replace manual paperwork, ensuring accurate and efficient data collection.",
      },
      // {
      //   title: "Blockchain Technology",
      //   desc: "Enhances data security and transparency, ensuring that patient information remains safe and tamper-proof.",
      // },
    ],
    list: {
      title: "Key Features of a PMS",
      //subduble:"🌍 By Continents",
      Continents: [
        {
          title: "Centralized Data Management",
          desc: "All your client, employee, and operational data in one place—secure and easily accessible.",
        },
        {
          title: "Automated Scheduling",
          desc: "Efficient appointment and task scheduling that reduces conflicts and saves time.",
        },
        {
          title: "Billing & Invoicing",
          desc: "Simplifies financial processes with automated billing, invoicing, and payment tracking.",
        },
        {
          title: "Reporting &amp; Analytics",
          desc: "Real-time insights to help you make smarter business decisions.",
        },
        {
          title: "Workflow Automation",
          desc: "Automates repetitive tasks, improving efficiency and reducing human error.",
        },
      ],
      list1: {
        subduble: "Benefits of Implementing PMS",
        Continents: [
          {
            title: "Improved operational efficiency",
          },
          {
            title: "Better customer/client experience",
          },
          {
            title: "Enhanced data accuracy",
          },
          {
            title: "Cost reduction",
          },
          {
            title: "Scalable business growth",
          },
        ],
      },
    },
    keymain: "PMS vs Traditional Management",
    keycontent: "Traditional Systems Practice Management System",
    sublist: {
      // title:"Key Features of a PMS",

      Continents: [
        {
          title: "Manual processes",
          desc: "Automated workflows",
        },
        {
          title: "Scattered data",
          desc: "Centralized platform",
        },
        {
          title: "Time-consuming",
          desc: "Time-efficient",
        },
        {
          title: "High error rate ",
          desc: "High accuracy",
        },
      ],
      keypm: "How PMS Supports Digital Transformation",
      keyconpm:
        "A PMS is not just a tool—it’s a strategic asset that aligns your business with digital transformation goals. It integrates seamlessly with modern technologies and supports remote operations, making your business future-ready.",
      list1: {
        title: "Why Choose Our PMS Solution?",
        desc: "At your company (Innovix Technology / Innovix Industries), we provide customized Practice Management System solutions tailored to your business needs.",
        content: "Our PMS focuses on:",
        Continents: [
          {
            title: "Scalability",

            //desc:"Handling sensitive patient data requires strict compliance with regulations.",
          },
          {
            title: "Security",
            //desc:"Not all participants may have access to digital tools or stable internet.",
          },
          {
            title: "User-friendly interface",
            //desc:"Not all participants may have access to digital tools or stable internet.",
          },
          {
            title: "Seamless integration",
          },
          {
            title: "End-to-end support",
          },
        ],
      },
    },
    //futuremain:"The Future of Clinical Trials",
    futuretitle:
      "We help businesses move from complex processes to simplified, smart operations.",
    main: "Conclusion",
    maintitle:
      "A Practice Management System is no longer optional—it’s essential for businesses aiming to stay competitive and efficient in today’s digital world.",
  },
  {
    id: "5",
    title: "Automation in Healthcare IT: How PMS Reduces Manual Workloads",
    content:
      "The healthcare industry in India is under constant pressure to deliver faster, more accurate, and patient-centric services. However, many hospitals and clinics still rely heavily on manual processes—from appointment scheduling to billing and record-keeping.",
    image: automation,
    //image1:digitalimg,
    subtitle:
      "These outdated workflows not only consume valuable time but also increase the risk of errors, inefficiencies, and staff burnout.",
    desc: "This is where automation in Healthcare IT, powered by Practice Management Systems (PMS), is making a transformative impact.",
    // despara:"Originally popular in healthcare and professional services, PMS is now widely adopted across industries to enhance efficiency and decision-making.",
    techtitle: "The Problem with Manual Workflows",
    techpara:
      "Manual administrative tasks continue to slow down healthcare operations:",
    technologies: [
      {
        title: "Repetitive patient data entry",
        //desc: "AI helps in patient recruitment, data analysis, and predicting trial outcomes. It can quickly identify suitable candidates by analyzing large datasets.",
      },
      {
        title: "Paper-based records and documentation",

        //desc: "Smartwatches and fitness trackers collect real-time health data such as heart rate, sleep patterns, and activity levels, reducing the need for in-person visits.",
      },
      {
        title: "Inefficient appointment management",

        //desc: "Virtual consultations allow researchers and patients to stay connected without geographical limitations.",
      },
      {
        title: "Billing errors and delayed payments",
        //desc: "Digital systems replace manual paperwork, ensuring accurate and efficient data collection.",
      },
      {
        title: "Lack of real-time coordination between departments",
        desc: "These challenges don’t just affect operational efficiency—they directly impact patient satisfaction and care quality.",
      },
    ],
    list: {
      title: "What is PMS in Healthcare IT?",
      subduble:
        "A Practice Management System (PMS) is a centralized digital platform designed to manage the administrative and operational aspects of healthcare facilities. By leveraging automation, PMS eliminates repetitive tasks and ensures that workflows are faster, smarter, and more accurate.",
      subtitle: "How PMS Automation Reduces Manual Workloads",

      Continents: [
        {
          title: "Automated Appointment Scheduling",
          desc: "PMS enables online booking, automated slot allocation, and instant confirmations—reducing front-desk workload and minimizing scheduling conflicts.",
        },
        {
          title: "Digital Patient Registration",
          desc: "Patient information is captured once and stored securely, eliminating repetitive paperwork and manual data entry.",
        },
        {
          title: "Smart Notifications &amp; Reminders",
          desc: "Automated SMS/email reminders reduce no-shows and keep patients informed without staff intervention.",
        },
        {
          title: "treamlined Billing &amp; Invoicing",
          desc: "From generating bills to processing payments, PMS automates financial workflows—reducing errors and improving revenue cycles.",
        },
        {
          title: "Real-Time Reporting &amp; Analytics",
          desc: "Administrative staff no longer need to compile reports manually. PMS provides instant insights into operations, revenue, and patient trends.",
        },
        {
          title: "Integrated Workflows",
          desc: "PMS connects different departments—front desk, billing, and clinical teams—ensuring seamless coordination without manual follow-ups.",
        },
      ],
      list1: {
        subduble: "Key Benefits of Automation Through PMS",
        Continents: [
          {
            title: "Reduced Administrative Burden",
            desc: "Staff can focus more on patient care rather than paperwork",
          },
          {
            title: "Improved Accuracy",
            desc: "Minimizes human errors in records, billing, and scheduling",
          },
          {
            title: "Time Efficiency",
            desc: "Faster processes lead to better patient flow and reduced waiting times",
          },
          {
            title: "Enhanced Patient Experience",
            desc: "Smooth, hassle-free interactions at every touchpoint",
          },
          {
            title: "Higher Productivity",
            desc: "Healthcare teams can handle more patients without increasing workload",
          },
        ],
      },
    },
    keymain: "The Future of Automated Healthcare IT",
    keycontent:
      "Automation in healthcare is evolving beyond basic workflows. With advancements in:",
    sublist: {
      // title:"Key Features of a PMS",

      Continents: [
        {
          title: "Artificial Intelligence (AI)",
          //desc:"Automated workflows",
        },
        {
          title: "Machine Learning (ML)",
          //desc:"Centralized platform",
        },
        {
          title: "Cloud Computing",
          //desc:"Time-efficient",
        },
        {
          title: "Predictive Analytics",
          //desc:"High accuracy",
        },
      ],
      keypm:
        "PMS platforms are becoming more intelligent—enabling proactive decision-making and personalized care delivery.",
      //keyconpm:"A PMS is not just a tool—it’s a strategic asset that aligns your business with digital transformation goals. It integrates seamlessly with modern technologies and supports remote operations, making your business future-ready.",
      list1: {
        // title:"Why Choose Our PMS Solution?",
        // desc:"At your company (Innovix Technology / Innovix Industries), we provide customized Practice Management System solutions tailored to your business needs.",
        //content:"Our PMS focuses on:",
        Continents: [
          //{
          //title:"Scalability",
          //desc:"Handling sensitive patient data requires strict compliance with regulations.",
          // },
          // {
          //title:"Security",
          //desc:"Not all participants may have access to digital tools or stable internet.",
          // },
          // {
          //title:"User-friendly interface",
          //desc:"Not all participants may have access to digital tools or stable internet.",
          // },
          //{
          //title:"Seamless integration",
          //},
          //{
          //title:"End-to-end support",
          // }
        ],
      },
    },
    futuremain: "Conclusion",
    futuretitle:
      "In a fast-paced healthcare environment, manual processes are no longer sustainable.",
    main: "Automation through Practice Management Systems is not just about improving efficiency—it’s about transforming the way healthcare operates.",
    maintitle:
      "By reducing manual workloads, PMS empowers healthcare providers to deliver better care, faster services, and smarter operations.",
  },
  {
    id: "6",
    title:
      "PHI in Healthcare: Why Protecting Patient Information Matters More Than Ever",
    content:
      "In today’s digital healthcare environment, patient information moves faster than ever before. Hospitals, clinics, diagnostic centers, and healthcare providers rely on electronic systems to store, manage, and share sensitive data. This is where PHI becomes one of the most important aspects of modern healthcare management.",
    image: phi,
    //image1:digitalimg,
    subtitle: "What is PHI?",
    desc: "PHI stands for Protected Health Information. It refers to any medical or personal information that can identify a patient and is stored, shared, or transmitted by healthcare organizations.",
    // despara:"Originally popular in healthcare and professional services, PMS is now widely adopted across industries to enhance efficiency and decision-making.",
    techtitle: "PHI includes:",
    techpara: "",
    technologies: [
      {
        title: "Patient names",
        //desc: "AI helps in patient recruitment, data analysis, and predicting trial outcomes. It can quickly identify suitable candidates by analyzing large datasets.",
      },
      {
        title: "Phone numbers and addresses",

        //desc: "Smartwatches and fitness trackers collect real-time health data such as heart rate, sleep patterns, and activity levels, reducing the need for in-person visits.",
      },
      {
        title: "Medical records",

        //desc: "Virtual consultations allow researchers and patients to stay connected without geographical limitations.",
      },
      {
        title: "Lab reports",
        //desc: "Digital systems replace manual paperwork, ensuring accurate and efficient data collection.",
      },
      {
        title: " Insurance information",
        desc: "",
      },
      {
        title: "Prescription history",
      },
      {
        title: "Appointment details",
      },
      {
        title: "Billing information",
      },
      {
        title:
          "Whether stored digitally or physically, this information must remain secure and confidential.",
      },
    ],
    list: {
      title: "Why PHI Protection is Critical",
      subduble:
        "Healthcare organizations handle thousands of sensitive records every day. A single data breach can lead to:",
      subtitle: "",

      Continents: [
        {
          title: "Loss of patient trust",
          desc: "",
        },
        {
          title: "Financial penalties",
          desc: "",
        },
        {
          title: "Legal consequences",
          desc: "",
        },
        {
          title: "Operational disruption",
          desc: "",
        },
        {
          title: "Reputation damage",
          desc: "",
        },
        {
          title:
            "Patients expect healthcare providers to protect their personal information with the highest level of security. Protecting PHI is not only a legal responsibility but also an ethical commitment.",
          desc: "As healthcare systems become more digital, cyber threats are increasing rapidly. Hackers often target healthcare databases because medical records contain highly valuable personal information.",
        },
      ],
      list1: {
        subduble: "The Growing Risk of Data Breaches Common threats include:",
        Continents: [
          {
            title: "Ransomware attacks",
            desc: "",
          },
          {
            title: "Unauthorized access",
            desc: "",
          },
          {
            title: "Weak password systems",
            desc: "",
          },
          {
            title: "Phishing emails",
            desc: "",
          },
          {
            title: "Unsecured cloud storage",
            desc: "",
          },
          {
            title: "Insider misuse of data",
            desc: "Without proper protection, healthcare organizations become vulnerable to serious security incidents.",
          },
        ],
      },
    },
    keymain: "How PMS Helps Protect PHI",
    keycontent:
      "A modern Patient Management System (PMS) plays a major role in securing patient information. Advanced PMS platforms help healthcare organizations maintain confidentiality while improving operational efficiency.",
    sublist: {
      // title:"Key Features of a PMS",

      Continents: [
        {
          title: "Role-Based Access Control",
          desc: "Only authorized staff can access specific patient information, reducing unnecessary exposure of sensitive data.",
        },
        {
          title: "Secure Data Storage",
          desc: "Modern PMS platforms use encrypted databases and secure cloud infrastructure to protect records from unauthorized access.",
        },
        {
          title: "Audit Trails",
          desc: "Every action performed within the system is tracked, making it easier to monitor suspicious activities and maintain accountability.",
        },
        {
          title: "Automated Backups",
          desc: "Regular backups help healthcare organizations recover important data during cyberattacks or system failures.",
        },
        {
          title: "Secure Communication",
          desc: "Integrated messaging and digital workflows reduce the risks associated with paper records and unsecured communication methods.",
        },
      ],
      //keypm:"",
      //keyconpm:"",
      list1: {
        title: "Benefits of PHI Security for Healthcare Providers",
        desc: "Organizations that prioritize PHI protection gain several advantages:",
        //content:"Our PMS focuses on:",
        Continents: [
          {
            title: "Stronger patient trust",

            desc: "",
          },
          {
            title: "Better compliance with healthcare regulations",
            desc: "",
          },
          {
            title: "Reduced cyber risk",
            desc: "",
          },
          {
            title: "Improved operational efficiency",
          },
          {
            title: "Safer digital transformation",
          },
          {
            title: "Enhanced brand reputation",
          },
        ],
      },
    },
    futuremain: "The Future of PHI Protection",
    futuretitle:
      "The future of healthcare depends heavily on secure digital systems. Technologies like AI, cloud computing, telemedicine, and integrated healthcare platforms will continue to expand. As innovation grows, protecting PHI will become even more important.",
    main: "Healthcare organizations must focus on:",
    maintitle: `
Advanced cybersecurity
Staff training
Secure PMS implementation
Regular security audits
Compliance management
Patient data transparency`,
    futuremain1: "Conclusion",
    futuretitle1:
      "In a fast-paced healthcare environment, manual processes are no longer sustainable.",
    main1:
      "Automation through Practice Management Systems is not just about improving efficiency—it’s about transforming the way healthcare operates.",
    maintitle1:
      "By reducing manual workloads, PMS empowers healthcare providers to deliver better care, faster services, and smarter operations.",
  },
  {
    id: "7",
    title:
      "India’s Digital Health Mission and the Expanding Role of HMS Providers",
    content:
      "India’s healthcare industry is stepping into a new digital era. With the rapid growth of healthcare technology and government-led initiatives, hospitals and healthcare institutions are transforming the way they deliver patient care. At the center of this transformation is the Ayushman Bharat Digital Mission (ABDM), a national initiative aimed at creating a connected, efficient, and patient-centric digital healthcare ecosystem.As India moves toward paperless and data-driven healthcare, Hospital Management System (HMS) providers are becoming key technology partners in this journey. From streamlining hospital operations to enabling secure digital health records, HMS solutions are now playing a much larger role than ever before.",
    image: idhm,
    //image1:digitalimg,
    subtitle: "Understanding India’s Digital Health Mission",
    desc: "The Ayushman Bharat Digital Mission was launched with a vision to digitally connect patients, hospitals, laboratories, pharmacies, and healthcare professionals across India. The goal is to create an integrated healthcare infrastructure where patient information can be accessed securely and efficiently whenever required.",
    despara:
      "One of the biggest innovations under ABDM is the creation of ABHA (Ayushman Bharat Health Account) IDs, which allow patients to maintain digital health records throughout their healthcare journey. This system reduces paperwork, minimizes duplication of records, and improves coordination between healthcare providers.",
    techtitle: "The mission is helping India move toward:",
    techpara: "",
    technologies: [
      {
        title: "Paperless healthcare systems ",
        //desc: "AI helps in patient recruitment, data analysis, and predicting trial outcomes. It can quickly identify suitable candidates by analyzing large datasets.",
      },
      {
        title: "Faster patient registration and treatment ",

        //desc: "Smartwatches and fitness trackers collect real-time health data such as heart rate, sleep patterns, and activity levels, reducing the need for in-person visits.",
      },
      {
        title: "Better healthcare accessibility ",

        //desc: "Virtual consultations allow researchers and patients to stay connected without geographical limitations.",
      },
      {
        title: "Improved clinical decision-making ",
        //desc: "Digital systems replace manual paperwork, ensuring accurate and efficient data collection.",
      },
      {
        title: "Secure digital health data management ",
        desc: "",
      },
      {
        title: "Efficient communication between hospitals and patients ",
      },

      {
        title:
          "This digital transformation is increasing the demand for modern HMS platforms that are capable of supporting these national healthcare objectives.",
      },
    ],
    list: {
      title: "The Expanding Role of HMS Providers",
      subduble:
        "Traditionally, HMS software was mainly used for managing appointments, billing, inventory, patient registration, and administrative tasks. However, the healthcare landscape has changed significantly. Today’s HMS providers are expected to deliver intelligent, integrated, and scalable solutions that can support the growing needs of digital healthcare.",
      subtitle: "Modern HMS platforms now include:",

      Continents: [
        {
          title: "Electronic Health Records (EHR)",
          desc: "",
        },
        {
          title: "Telemedicine integration ",
          desc: "",
        },
        {
          title: "Digital prescriptions ",
          desc: "",
        },
        {
          title: "Cloud-based data management ",
          desc: "",
        },
        {
          title: "AI-powered analytics ",
          desc: "",
        },
        {
          title: "Laboratory and pharmacy integration ",
          desc: "",
        },
        {
          title: "Real-time patient monitoring ",
          desc: "",
        },
        {
          title: "Automated claims processing ",
          desc: "",
        },
        {
          title: "Secure data exchange systems  ",
          desc: "Hospitals are no longer looking for basic management software. They need comprehensive digital ecosystems that improve both operational efficiency and patient care.",
        },
      ],
      list1: {
        subduble: "Government Policies Accelerating HMS Adoption",
        subtitle:
          "Government initiatives are playing a major role in encouraging healthcare institutions to adopt digital systems. Public hospitals and private healthcare organizations are increasingly integrating their infrastructure with ABDM-compliant platforms. Several healthcare institutions are upgrading from traditional paper-based systems to smart HMS solutions because of:",
        Continents: [
          {
            title: "Government digital healthcare initiatives ",
            desc: "",
          },
          {
            title: "Rising patient expectations ",
            desc: "",
          },
          {
            title: "Need for interoperability ",
            desc: "",
          },
          {
            title: "Demand for faster healthcare delivery ",
            desc: "",
          },
          {
            title: "Growth of telemedicine services ",
            desc: "",
          },
          {
            title: "Increasing focus on healthcare data security ",
            desc: "As healthcare regulations evolve, HMS providers must ensure that their platforms meet compliance standards while remaining flexible and scalable.",
          },
        ],
      },
    },
    keymain: "The Rise of Smart Hospitals in India",
    keycontent:
      "India is witnessing the emergence of smart hospitals powered by digital technologies. These hospitals rely heavily on HMS platforms for managing workflows, patient engagement, diagnostics, and healthcare analytics.",
    sublist: {
      title: "Advanced HMS systems are helping hospitals:",

      Continents: [
        {
          title: "Reduce administrative workload ",
          desc: "",
        },
        {
          title: "Improve patient experiences ",
          desc: "",
        },
        {
          title: "Minimize medical errors",
          desc: "",
        },
        {
          title: "Optimize resource utilization ",
          desc: "",
        },
        {
          title: "Enable faster clinical decisions",
          desc: "",
        },
        {
          title: "Enhance communication between departments ",
          desc: "",
        },
      ],
      keypm:
        "With AI and automation becoming more common in healthcare, HMS providers are now contributing directly to better patient outcomes and hospital efficiency.",
      keyconpm: "",
      list1: {
        title: "Challenges in Digital Healthcare Adoption",
        desc: "Despite the progress, there are still several challenges in implementing digital healthcare systems across India.",
        content:
          "Many small and mid-sized hospitals continue to face issues such as:",
        Continents: [
          {
            title: "High implementation costs ",

            desc: "",
          },
          {
            title: "Lack of technical expertise ",
            desc: "",
          },
          {
            title: "Resistance to digital transformation ",
            desc: "",
          },
          {
            title: "Cybersecurity concerns ",
          },
          {
            title: "Limited IT infrastructure ",
          },
          {
            title: "Staff training difficulties ",
          },
          {
            title:
              "Healthcare providers in Tier-2 and Tier-3 cities often require affordable and easy-to-use HMS platforms that can support gradual digital adoption.",
          },
          {
            title:
              "To address these challenges, HMS companies must focus on creating user-friendly, cost-effective, and scalable solutions suitable for healthcare organizations of all sizes. ",
          },
        ],
      },
    },
    futuremain: "The Future of HMS in India’s Healthcare Ecosystem",
    futuretitle:
      "The future of healthcare in India is undeniably digital. As ABDM continues to expand, the role of HMS providers will become even more critical in shaping the country’s healthcare infrastructure.",
    main: "In the coming years, HMS platforms are expected to become more intelligent through:",
    maintitle: `
    	Artificial Intelligence
    	Predictive analytics
    	Remote patient monitoring
    	Mobile healthcare integration
    	Advanced data security systems
    	Personalized patient experiences
`,
    futuremain1: "Conclusion",
    futuretitle1:
      "India’s Digital Health Mission is transforming the healthcare industry by building a connected and technology-driven ecosystem. This transformation is creating enormous opportunities for HMS providers to innovate and support the modernization of healthcare delivery.",
    main1: "",
    maintitle1:
      "Hospitals that adopt digital solutions early will be better positioned to deliver faster, safer, and more efficient healthcare services.",
  },
  {
    id: "8",
    title: "From Handwritten Records to Smart Healthcare: Why HMS Matters",
    content:
      "Healthcare has evolved dramatically over the years. What once depended heavily on handwritten patient files, manual billing systems, and physical record rooms is now transitioning into a digitally connected ecosystem. In today’s fast-paced medical environment, efficiency, accuracy, and accessibility are no longer optional — they are essential.This transformation is being powered by Hospital Management Systems (HMS), which are redefining how hospitals and healthcare institutions operate.",
    image: hms,
    //image1:digitalimg,
    // subtitle: "Understanding India’s Digital Health Mission",
    // desc: "This transformation is being powered by Hospital Management Systems (HMS), which are redefining how hospitals and healthcare institutions operate.",
    // despara:
    // "One of the biggest innovations under ABDM is the creation of ABHA (Ayushman Bharat Health Account) IDs, which allow patients to maintain digital health records throughout their healthcare journey. This system reduces paperwork, minimizes duplication of records, and improves coordination between healthcare providers.",
    techtitle: "The Problem with Traditional Healthcare Operations",
    techpara:
      "For decades, hospitals relied on paper-based workflows to manage patient information and daily operations. While this method served its purpose in the past, it introduced several operational challenges:",
    technologies: [
      {
        title: "Patient files getting misplaced or damaged",
        //desc: "AI helps in patient recruitment, data analysis, and predicting trial outcomes. It can quickly identify suitable candidates by analyzing large datasets.",
      },
      {
        title: "Delays in retrieving medical history",

        //desc: "Smartwatches and fitness trackers collect real-time health data such as heart rate, sleep patterns, and activity levels, reducing the need for in-person visits.",
      },
      {
        title: "Manual billing errors",

        //desc: "Virtual consultations allow researchers and patients to stay connected without geographical limitations.",
      },
      {
        title: "Lack of coordination between departments",
        //desc: "Digital systems replace manual paperwork, ensuring accurate and efficient data collection.",
      },
      {
        title: "Longer patient waiting times",
        desc: "",
      },
      {
        title: "Difficulty in generating reports and analytics",
      },

      {
        title: "Increased administrative workload for hospital staff",
      },
    ],
    list: {
      // title: "The Expanding Role of HMS Providers",
      subduble:
        "As patient volumes increase and healthcare services become more complex, traditional systems struggle to keep up with modern demands.",
      //subtitle: "Modern HMS platforms now include:",

      Continents: [
        // {
        //   title: "Electronic Health Records (EHR)",
        //   desc: "",
        // },
        // {
        //   title: "Telemedicine integration ",
        //   desc: "",
        // },
        // {
        //   title: "Digital prescriptions ",
        //   desc: "",
        // },
        // {
        //   title: "Cloud-based data management ",
        //   desc: "",
        // },
        // {
        //   title: "AI-powered analytics ",
        //   desc: "",
        // },
        // {
        //   title: "Laboratory and pharmacy integration ",
        //   desc: "",
        // },
        // {
        //   title: "Real-time patient monitoring ",
        //   desc: "",
        // },
        // {
        //   title: "Automated claims processing ",
        //   desc: "",
        // },
        // {
        //   title: "Secure data exchange systems  ",
        //   desc: "Hospitals are no longer looking for basic management software. They need comprehensive digital ecosystems that improve both operational efficiency and patient care.",
        // },
      ],
      // list1: {
      //   subduble: "Government Policies Accelerating HMS Adoption",
      //   subtitle:
      //     "Government initiatives are playing a major role in encouraging healthcare institutions to adopt digital systems. Public hospitals and private healthcare organizations are increasingly integrating their infrastructure with ABDM-compliant platforms. Several healthcare institutions are upgrading from traditional paper-based systems to smart HMS solutions because of:",
      //   Continents: [
      //     {
      //       title: "Government digital healthcare initiatives ",
      //       desc: "",
      //     },
      //     {
      //       title: "Rising patient expectations ",
      //       desc: "",
      //     },
      //     {
      //       title: "Need for interoperability ",
      //       desc: "",
      //     },
      //     {
      //       title: "Demand for faster healthcare delivery ",
      //       desc: "",
      //     },
      //     {
      //       title: "Growth of telemedicine services ",
      //       desc: "",
      //     },
      //     {
      //       title: "Increasing focus on healthcare data security ",
      //       desc: "As healthcare regulations evolve, HMS providers must ensure that their platforms meet compliance standards while remaining flexible and scalable.",
      //     },
      //   ],
      // },
    },
    keymain: "The Rise of Smart Healthcare",
    keycontent:
      "Smart healthcare focuses on delivering faster, safer, and more connected patient care through digital technologies. At the center of this transformation is the Hospital Management System.An HMS acts as a centralized digital platform that integrates multiple hospital functions into one seamless system. From patient registration and appointment scheduling to pharmacy, laboratory, billing, insurance, and discharge management — everything becomes digitally connected.",
    sublist: {
      title: "Why HMS Matters in Modern Hospitals",

      Continents: [
        {
          title: "Faster Access to Patient Information",
          desc: "Doctors and healthcare professionals can instantly access patient histories, prescriptions, lab reports, and treatment records. This improves clinical decision-making and reduces delays in care delivery.",
        },
        {
          title: "Improved Operational Efficiency",
          desc: "Automation reduces repetitive manual tasks and paperwork, allowing hospital staff to focus more on patient care instead of administrative work.",
        },
        {
          title: "Better Patient Experience",
          desc: "Digital appointments, faster billing, shorter waiting times, and smoother coordination create a more convenient and satisfying experience for patients",
        },
        {
          title: "Real-Time Hospital Monitoring",
          desc: "Hospital administrators can monitor occupancy, revenue, resource utilization, and departmental performance in real time, enabling better management decisions.",
        },
        {
          title: "Enhanced Data Security",
          desc: "Unlike paper records, digital systems offer encrypted and centralized data storage, reducing the risk of data loss and unauthorized access.",
        },
      ],
      //keypm:
      // "With AI and automation becoming more common in healthcare, HMS providers are now contributing directly to better patient outcomes and hospital efficiency.",
      //keyconpm: "",
      list1: {
        title: "HMS and the Future of Healthcare",
        desc: "Modern HMS platforms are evolving beyond basic digital recordkeeping. Today’s systems are integrating advanced technologies such as:",
        //content:
        // "Many small and mid-sized hospitals continue to face issues such as:",
        Continents: [
          {
            title: "Cloud-based infrastructure",
            desc: "",
          },
          {
            title: "AI-powered clinical insights",
            desc: "",
          },
          {
            title: "Automated workflows",
            desc: "",
          },
          {
            title: "Smart reporting dashboards",
          },
          {
            title: "Telemedicine integration",
          },
          {
            title: "Digital prescriptions",
          },
          {
            title: "Data analytics and predictive healthcare",
          },
        ],
      },
    },
    // futuremain: "The Future of HMS in India’s Healthcare Ecosystem",
    futuretitle:
      "These innovations are helping healthcare providers become more proactive, efficient, and patient-centric",
    //main: "In the coming years, HMS platforms are expected to become more intelligent through:",
    //     maintitle: `
    //     	Artificial Intelligence
    //     	Predictive analytics
    //     	Remote patient monitoring
    //     	Mobile healthcare integration
    //     	Advanced data security systems
    //     	Personalized patient experiences
    // `,
    futuremain1: "Conclusion",
    futuretitle1: `The shift from handwritten records to smart healthcare is more than just a technological upgrade — it represents a complete transformation in how healthcare is delivered.
Hospitals that adopt HMS solutions are not only improving operational efficiency but also enhancing patient trust, care quality, and long-term sustainability.
In an era where healthcare demands speed, precision, and connectivity, a modern Hospital Management System is no longer a luxury it is a necessity.
`,
    // main1: "",
    // maintitle1:
    //  "Hospitals that adopt digital solutions early will be better positioned to deliver faster, safer, and more efficient healthcare services.",
  },
  {
    id: "9",
    title:
      "The End of Manual Patient Registration: Why ABHA Integration Matters",
    content: `For decades, patient registration has been one of the most time consuming processes in
healthcare. Long queues, repetitive paperwork, manual data entry, and frequent errors have
slowed down patient onboarding and increased the workload for hospital staff. As healthcare
embraces digital transformation, the need for a faster, smarter, and more accurate registration
process has become essential.
This is where ABHA (Ayushman Bharat Health Account) is making a significant impact. By
enabling seamless digital identification and data sharing, ABHA is transforming the way
hospitals register and manage patients.`,
    image: hms,
    //image1:digitalimg,
    // subtitle: "Understanding India’s Digital Health Mission",
    // desc: "This transformation is being powered by Hospital Management Systems (HMS), which are redefining how hospitals and healthcare institutions operate.",
    // despara:
    // "One of the biggest innovations under ABDM is the creation of ABHA (Ayushman Bharat Health Account) IDs, which allow patients to maintain digital health records throughout their healthcare journey. This system reduces paperwork, minimizes duplication of records, and improves coordination between healthcare providers.",
    techtitle: "The Challenges of Manual Patient Registration",
    techpara: "Traditional patient registration processes often involve:",
    technologies: [
      {
        title: "Filling out lengthy paper forms",
        //desc: "AI helps in patient recruitment, data analysis, and predicting trial outcomes. It can quickly identify suitable candidates by analyzing large datasets.",
      },
      {
        title: "Re-entering patient information at every visit",

        //desc: "Smartwatches and fitness trackers collect real-time health data such as heart rate, sleep patterns, and activity levels, reducing the need for in-person visits.",
      },
      {
        title: "Data entry errors and duplicate records",

        //desc: "Virtual consultations allow researchers and patients to stay connected without geographical limitations.",
      },
      {
        title: "Longer waiting times at reception desks",
        //desc: "Digital systems replace manual paperwork, ensuring accurate and efficient data collection.",
      },
      {
        title: "Increased administrative burden on staff",
        desc: "",
      },
      {
        title:
          "These challenges not only affect operational efficiency but also impact the overall patient experience.",
      },
    ],
    list: {
      title: "What is ABHA?",
      subduble: `ABHA (Ayushman Bharat Health Account) is a unique health ID issued under India&#39;s
Ayushman Bharat Digital Mission (ABDM). It allows patients to securely store, access, and
share their health records digitally across healthcare providers.
With a single ABHA number, patients can establish a connected healthcare journey while
hospitals gain access to accurate and verified patient information.`,
      subtitle: "How ABHA Integration Simplifies Registration",

      Continents: [
        {
          title: "Faster Patient Check-Ins",
          desc: `Instead of manually entering demographic details, hospital staff can retrieve patient
information instantly through ABHA verification. This significantly reduces registration time
and helps minimize queues.`,
        },
        {
          title: "Reduced Data Entry Errors",
          desc: `Manual typing often leads to spelling mistakes, duplicate records, and inaccurate patient data.
ABHA integration helps ensure information is consistent and validated, improving data
quality.`,
        },
        {
          title: "Better Patient Experience",
          desc: `Patients no longer need to repeatedly provide the same information during every visit. A
streamlined registration process creates a smoother and more convenient healthcare
experience.`,
        },
        {
          title: "Improved Operational Efficiency",
          desc: `By automating routine administrative tasks, front desk teams can focus on patient assistance
rather than paperwork. This leads to better resource utilization and increased productivity.`,
        },
        {
          title: "Enhanced Digital Healthcare Connectivity",
          desc: `ABHA acts as a foundation for interoperable healthcare systems, enabling hospitals, clinics,
diagnostic centers, and patients to access health information securely when needed.`,
        },
      ],
      list1: {
        subduble: "Benefits for Hospitals",
        subtitle: "Hospitals integrating ABHA can experience:",
        Continents: [
          {
            title: "Shorter registration queues",
            desc: "",
          },
          {
            title: "Faster patient onboarding",
            desc: "",
          },
          {
            title: "Improved data accuracy",
            desc: "",
          },
          {
            title: "Reduced administrative costs",
            desc: "",
          },
          {
            title: "Enhanced compliance with digital healthcare initiatives",
            desc: "",
          },
          {
            title: "Better patient satisfaction scores",
            desc: "",
          },
          {
            title:
              "These advantages contribute directly to improved hospital performance and service quality.",
          },
        ],
      },
    },
    // keymain: "The Rise of Smart Healthcare",
    // keycontent:
    //   "Smart healthcare focuses on delivering faster, safer, and more connected patient care through digital technologies. At the center of this transformation is the Hospital Management System.An HMS acts as a centralized digital platform that integrates multiple hospital functions into one seamless system. From patient registration and appointment scheduling to pharmacy, laboratory, billing, insurance, and discharge management — everything becomes digitally connected.",
    // sublist: {
    //   title: "Why HMS Matters in Modern Hospitals",

    //   Continents: [
    //     {
    //       title: "Faster Access to Patient Information",
    //       desc: "Doctors and healthcare professionals can instantly access patient histories, prescriptions, lab reports, and treatment records. This improves clinical decision-making and reduces delays in care delivery.",
    //     },
    //     {
    //       title: "Improved Operational Efficiency",
    //       desc: "Automation reduces repetitive manual tasks and paperwork, allowing hospital staff to focus more on patient care instead of administrative work.",
    //     },
    //     {
    //       title: "Better Patient Experience",
    //       desc: "Digital appointments, faster billing, shorter waiting times, and smoother coordination create a more convenient and satisfying experience for patients",
    //     },
    //     {
    //       title: "Real-Time Hospital Monitoring",
    //       desc: "Hospital administrators can monitor occupancy, revenue, resource utilization, and departmental performance in real time, enabling better management decisions.",
    //     },
    //     {
    //       title: "Enhanced Data Security",
    //       desc: "Unlike paper records, digital systems offer encrypted and centralized data storage, reducing the risk of data loss and unauthorized access.",
    //     },
    //   ],
    //   //keypm:
    //   // "With AI and automation becoming more common in healthcare, HMS providers are now contributing directly to better patient outcomes and hospital efficiency.",
    //   //keyconpm: "",
    //   list1: {
    //     title: "HMS and the Future of Healthcare",
    //     desc: "Modern HMS platforms are evolving beyond basic digital recordkeeping. Today’s systems are integrating advanced technologies such as:",
    //     //content:
    //     // "Many small and mid-sized hospitals continue to face issues such as:",
    //     Continents: [
    //       {
    //         title: "Cloud-based infrastructure",
    //         desc: "",
    //       },
    //       {
    //         title: "AI-powered clinical insights",
    //         desc: "",
    //       },
    //       {
    //         title: "Automated workflows",
    //         desc: "",
    //       },
    //       {
    //         title: "Smart reporting dashboards",
    //       },
    //       {
    //         title: "Telemedicine integration",
    //       },
    //       {
    //         title: "Digital prescriptions",
    //       },
    //       {
    //         title: "Data analytics and predictive healthcare",
    //       },
    //     ],
    //   },
    // },
    futuremain: "The Future of Patient Registration",
    futuretitle: `Healthcare is rapidly moving toward a connected and paperless ecosystem. As digital health
records become the norm, ABHA integration will play a crucial role in ensuring seamless
patient identification and data exchange.
Hospitals that embrace ABHA today are not only improving registration workflows but also
preparing themselves for the future of digital healthcare in India.`,
    //main: "In the coming years, HMS platforms are expected to become more intelligent through:",
    //     maintitle: `
    //     	Artificial Intelligence
    //     	Predictive analytics
    //     	Remote patient monitoring
    //     	Mobile healthcare integration
    //     	Advanced data security systems
    //     	Personalized patient experiences
    // `,
    futuremain1: "Conclusion",
    futuretitle1: `Manual patient registration has long been a source of delays, inefficiencies, and frustration
for both patients and healthcare providers. ABHA integration offers a practical solution by

enabling faster registration, reducing errors, and creating a more connected healthcare
experience.
The future of patient onboarding is digital, and ABHA is helping healthcare organizations
take a major step toward that future.`,
    // main1: "",
    // maintitle1:
    //  "Hospitals that adopt digital solutions early will be better positioned to deliver faster, safer, and more efficient healthcare services.",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return <h2 className="text-center mt-10 text-xl">Blog Not Found</h2>;
  }

  return (
    <div className="bg-gray-100 p-16 mt-10">
      <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow overflow-hidden">
        {/* Image */}

        <img
          src={blog.image}
          alt={blog.title}
          className="w-[500px] object-contain rounded-xl"
        />

        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">{blog.title}</h1>

          <h2 className="text-2xl font-bold mb-4 md:text-4xl">Introduction</h2>

          {/* Content */}
          <p className="text-gray-600 mb-6 text-xl">{blog.content}</p>

          {/* Subtitle */}
          {blog.subtitle && (
            <>
              <h2 className="text-2xl font-semibold mb-3">{blog.subtitle}</h2>
              <p className="text-gray-700 mb-6 text-xl">{blog.desc}</p>
              <p className="text-gray-700 mb-6 text-xl">{blog.despara}</p>
            </>
          )}
        </div>
      </div>

      {/* Technologies Section */}
      {blog.technologies && (
        <div className="bg-white text-white rounded-2xl p-6 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-gray-900">
            {blog.techtitle}
          </h2>
          <p className="text-gray-700 mb-6 text-xl text-center">
            {blog.techpara}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blog.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-orange-500 border border-white/10 rounded-xl p-5 hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tech.title}
                </h3>

                <p className="text-white text-lg">{tech.desc}</p>
                <p className="text-white">{}</p>
                {/* FIX: list safety */}
                {tech.list && (
                  <ul className="space-y-2 mt-2">
                    {tech.list.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-400">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-white text-lg mt-2">{tech.desc1}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAIN LIST SECTION */}
      {blog.list && (
        <div className="bg-gradient-to-br from-gray-500 to-black text-white px-6 py-12">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {blog.list.title}
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              {blog.list.subtitle}
            </p>
          </div>

          {/* Section 1 */}
          {blog.list.Continents && (
            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                {blog.list.subduble}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {blog.list.Continents.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-400 transition"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2 */}
          {blog.list.list1?.Continents && (
            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-2 text-cyan-400">
                {blog.list.list1.subduble}
              </h2>
              <p className="text-gray-400 mb-4 max-w-2xl">
                {blog.list.list1.subtitle}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {blog.list.list1.Continents.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-400 transition"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Key Insight */}
      <div className="max-w-5xl mx-auto text-center m-2">
        <div className="bg-gradient-to-r from-orange-500 to-orange-500 border border-white/10 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">{blog.keymain}</h2>
          <p className="text-white text-lg">{blog.keycontent}</p>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-5xl mx-auto text-center m-2">
        <img
          src={blog.image1}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* SUBLIST SECTION */}
      {blog.sublist && (
        <div className="bg-gradient-to-br from-gray-500 to-gray-500 text-white px-6 py-12">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {blog.sublist.title}
            </h1>
          </div>

          {blog.sublist.Continents && (
            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                {blog.sublist.subdubl}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {blog.sublist.Continents.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 p-6 rounded-xl"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white-400 mt-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="max-w-5xl mx-auto text-center m-2">
            <div className="bg-gradient-to-r from-gray-500 to-gray-500 border border-white/10 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {blog.sublist.keypm}
              </h2>
              <p className="text-white text-lg">{blog.sublist.keyconpm}</p>
            </div>
          </div>

          {blog.sublist.list1?.Continents && (
            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                {blog.sublist.list1.title}
              </h2>
              <p className="text-white mt-4">{blog.sublist.list1.desc}</p>
              <p className="text-white mt-4">{blog.sublist.list1.content}</p>

              <div className="grid md:grid-cols-3 gap-6">
                {blog.sublist.list1.Continents.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 p-6 rounded-xl"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white mt-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Future */}
      <div className="max-w-8xl mx-auto m-5">
        <h2 className="text-4xl font-semibold mb-6 text-orange-500">
          {blog.futuremain}
        </h2>
        <p className="text-gray-600 mt-4">{blog.futuretitle}</p>
        {blog.futurelist && (
          <ul className="space-y-2 mt-2">
            {blog.futurelist.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-400">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="text-white text-lg mt-2">{blog.futuresubtitle}</p>
      </div>
      {/* <div className="max-w-5xl  text-center m-2">
        <img
          src={blog.image2}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div> */}
      {/* Final */}
      <div className="max-w-8xl mx-auto m-5">
        <h2 className="text-4xl font-semibold mb-6 text-orange-500">
          {blog.main}
        </h2>
        <p className="text-gray-600 mt-4">{blog.maintitle}</p>
      </div>
      <div className="max-w-8xl mx-auto m-5">
        <h2 className="text-4xl font-semibold mb-6 text-orange-500">
          {blog.futuremain1}
        </h2>
        <p className="text-gray-600 mt-4">{blog.futuretitle1}</p>
        {blog.futurelist1 && (
          <ul className="space-y-2 mt-2">
            {blog.futurelist.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-400">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="text-white text-lg mt-2">{blog.futuresubtitle}</p>
      </div>
      <div className="max-w-8xl mx-auto m-5">
        <h2 className="text-4xl font-semibold mb-6 text-orange-500">
          {blog.main}
        </h2>
        <p className="text-gray-600 mt-4">{blog.maintitle}</p>
      </div>
    </div>
  );
}
