import React from "react";
import '../styles/AboutSection.css';
import HospitalImage from '../assets/images/hospital.avif'
import { motion } from 'framer-motion';

const AboutSection:React.FC = () => {
    return (
      <section className="about-section" id="about">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <div className="about-row">
          <motion.div className="about-image"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={HospitalImage} alt="Hospital image" />
          </motion.div>

          <div className="about-content">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Apex Healthcare PLC is a public quoted, BOI approved Private
              Hospital located in Balangoda. The Hospital consists of services
              such as Channeling, Emergency services, Laboratory, Radiology (CT,
              X-Ray, Ultrasound), Pharmacy, In-Ward services from economy to VIP
              Suites, Surgical services with top of the range Modular Operating
              Theaters, ICU, in house Cafe and has ample parking space as well.
              Singhe Hospitals is also one of the leading Laboratory Service
              providers in the country, with 12 Laboratories and over 60 sample
              collection centers located island wide
            </motion.p>

            <div className="about-mission-n-vision-row">
              <div>
                <h3>Our Vision</h3>
                <p>
                  To provide safest and highest quality health care service and
                  be the preferred health care provider in the country.
                </p>
              </div>

              <div>
                <h3>Our Mission</h3>
                <p>
                  To be the benchmark in quality health care in the country, by
                  transforming the health care experience through a culture of
                  good caring and quality service at affordable cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;