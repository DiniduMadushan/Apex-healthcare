import React from "react";
import "../styles/Introsection.css";
import IntroImage from "../assets/intro-img.jpg";
import { motion } from "framer-motion";

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="intro-section">
      <motion.div
        className="intro-text"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Welcome to Apex Healthcare</h2>
        <p>
          At Apex Healthcare, we bring futuristic technology and world-class
          medical care under one roof. Our team of expert doctors and modern
          infrastructure ensures precision, compassion, and innovation in every
          treatment.
        </p>
      </motion.div>

      <motion.div
        className="intro-image"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img src={IntroImage} alt="Intro image" loading="lazy" />
      </motion.div>
    </section>
  );
};

export default IntroSection;
