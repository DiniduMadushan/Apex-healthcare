import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { motion } from "framer-motion";
import Player from "lottie-react";
// import MedicalCareSVG from '../assets/medical-care.svg';
import LottieHero from "../assets/lottie-hero.json";

const Home: React.FC = () => {
  return (
    <header className="hero-section">
      <div className="hero-container">
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
          </motion.div>
          <div className="hero-lottie">
            <Player
              autoplay
              loop
              animationData={LottieHero}
              style={{ height: 400, width: 400 }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
