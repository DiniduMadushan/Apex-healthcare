import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { motion } from "framer-motion";
import IntroSection from "./IntroSection";
import FacilitiesSection from "./Facilities";
import DoctorsSection from "./DoctorsSection";
import AboutSection from "./AboutSection";

const Home: React.FC = () => {
  return (
    <>
      <header className="hero-section">
          <Navbar />
          <div className="hero-main">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Welcome to Apex Healthcare</h1>
              <p>
                Revolutionizing modern medical services with futuristic solutions.
              </p>
              <button onClick={()=>{
                const element = document.getElementById("intro");
                if(element){
                  element.scrollIntoView({behavior: 'smooth'});
                }
              }}>
                View More
              </button>
            </motion.div>
          </div>
      </header>

      <IntroSection />
      <FacilitiesSection />
      <AboutSection />
      <DoctorsSection />
    </>
    
  );
};

export default Home;
