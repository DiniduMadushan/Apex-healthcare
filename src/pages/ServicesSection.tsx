import React from "react";
import '../styles/ServicesSection.css';
import CardiacUnit from '../assets/images/services/cardiac unit.jpeg';
import Dental from '../assets/images/services/dental.jpg';
import ETU from '../assets/images/services/etu.png';
import Lab from '../assets/images/services/laboratory.avif';
import Radiology from '../assets/images/services/radiology.webp';
import Pharmacy from '../assets/images/services/pharmacy.jpg';

const Services:React.FC = () => {

    const services = [
        {
           image: CardiacUnit,
           title: "Cardiac Unit",
           description: "Apex Healthcare Cardiac Unit is equipped to diagnose cardiac anomalies. The Cardiac Unit has a state of the art dedicated ECHO scanner, and for the first time in Ratnapura, an Exercise ECG unit is now available."
        },
        {
           image: Radiology,
           title: "Radiology",
           description: "Apex Healthcare Radiology unit consists of most modern equipment for most accurate patient diagnosis."
        },
        {
           image: ETU,
           title: "ETU",
           description: "ETU at Apex Healthcare is the first response unit prepared to manage an emergency. The ETU is open 24 hours and well equipped and staffed to take care of a patient in a critical condition."
        },
        {
           image: Dental,
           title: "Dental Unit",
           description: "The Dental Unit at Apex Healthcare consists of a high quality dental chair imported from Japan with Video capabilities to provide our patients with best dental care"
        },
        {
           image: Pharmacy,
           title: "Pharmacy",
           description: "Well stocked Pharmacy at Apex Healthcare provides our patients highest quality drugs at government specified prices. "
        },
        {
           image: Lab,
           title: "Laboratory",
           description: "Apex Healthcare Laboratory is by far the best Clinical Laboratory in Ratnapura. "
        }
    ];

    return (
        <section className="services-section">
            <h2>Services And Facilities</h2>

        </section>
    );
}

export default Services;