import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// COMPONENT IMPORT
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import LocationsComp from "./components/Locations/LocationsComp.jsx";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Projects />
      <LocationsComp />
      <Footer />
    </div>
  );
};

export default App;
