import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from "./Layout/AppRouter";
import AdminLayout from "./Layout/Pages/AdminLayout";
import { ErrorPage } from "./Layout/Pages/ErrorPage";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import ScrollToTop from "./Layout/components/ScrollToTop";
import Service from "./Layout/Pages/Service";
import Contact from "./Layout/Pages/Contact";
import Dashboard from "./Layout/Pages/Dashboard";
import { AuthProvider } from "./Layout/context/AuthContext";
import ProtectedRoute from "./Layout/components/ProtectedRoute";
import MobileStickyBar from "./Layout/components/MobileStickyBar";
import FloatingSocial from "./Layout/components/FloatingSocial";
import ServiceDetails from "./Layout/Pages/ServiceDetails";
import Development from "./Layout/Pages/Development";
import DevelopmentDetails from "./Layout/Pages/DevelopmentDetails";
import FutureDetails from "./Layout/Pages/FutureDetails";
import TrainingWorkshops from "./Layout/Pages/TrainingWorkshop";
import Blog from "./Layout/Pages/Blog";
import Blogs from "./Layout/Pages/Blogs";
import BlogDetail from "./Layout/Pages/BlogDetail";
import BlogDetails from "./Layout/Pages/BlogDetails";
import Careers from "./Layout/Pages/Careers";
import TermsConditions from "./Layout/Pages/TermsConditions";
import PrivacyPolicy from "./Layout/Pages/PrivacyPolicy";
import BankingFinance from "./Layout/Pages/BankingFinance";
import AerospaceDefense from "./Layout/Pages/AerospaceDefense";
import AutomotiveTransportation from "./Layout/Pages/AutomotiveTransportation";
import EnergyCleanTech from "./Layout/Pages/EnergyCleanTech";
import InformationCommunication from "./Layout/Pages/InformationCommunication";
import ManufacturingLogistics from "./Layout/Pages/ManufacturingLogistics";
import LifeSciencesHealthcare from "./Layout/Pages/LifeSciencesHealthcare";
import React, { useEffect } from "react";
import NewsLetter from "./Layout/Pages/NewsLetter";
import NewsDetails from "./Layout/Pages/NewsDetails";
import NewsLetters from "./Layout/Pages/Newsletters";
import NewsDetailss from "./Layout/Pages/NewsDetailss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "development",
        element: <Development />,
      },
      {
        path: "/development/:slug",
        element: <DevelopmentDetails />,
      },
      {
        path: "/futuremore",
        element: <FutureDetails />,
      },
      {
        path: "/training-workshop",
        element: <TrainingWorkshops />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "/newsletter",
        element: <NewsLetter />,
      },
      {
        path: "/newsletter/:id",
        element: <NewsDetails />,
      },
      {
        path: "/newsletters",
        element: <NewsLetters />,
      },
      {
        path: "/newsletters/:id",
        element: <NewsDetailss />,
      },
      {
        path: "term-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/banking-finance",
        element: <BankingFinance />,
      },
      {
        path: "/aerospace-defense",
        element: <AerospaceDefense />,
      },
      {
        path: "/automotive-transportation",
        element: <AutomotiveTransportation />,
      },
      {
        path: "/energy-clean-technology",
        element: <EnergyCleanTech />,
      },
      {
        path: "/information-communication",
        element: <InformationCommunication />,
      },
      {
        path: "/manufacturing-logistics",
        element: <ManufacturingLogistics />,
      },
      {
        path: "/life-sciences-healthcare",
        element: <LifeSciencesHealthcare />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  // ✅ Admin Routes Separate Layout
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  // 🔒 Right Click Disable
  // useEffect(() => {
  //   const handleContextMenu = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  // 🔒 Shortcut Keys Block
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
  //       (e.ctrlKey && e.key === "U")
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  // 🔒 DevTools Detection
  // useEffect(() => {
  //   const detectDevTools = () => {
  //     const widthThreshold = window.outerWidth - window.innerWidth > 160;
  //     const heightThreshold = window.outerHeight - window.innerHeight > 160;

  //     if (widthThreshold || heightThreshold) {
  //       document.body.innerHTML = "DevTools is not allowed!";
  //     }
  //   };

  //   const interval = setInterval(detectDevTools, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <AuthProvider>
      <ScrollToTop />
      <RouterProvider router={router} />
      <MobileStickyBar />
      <FloatingSocial />
    </AuthProvider>
  );
};

export default App;
