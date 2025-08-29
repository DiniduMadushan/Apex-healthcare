import React from "react";
import "../styles/Facilities.css";
import { FaUserMd, FaMicroscope, FaAmbulance, FaHeartbeat } from 'react-icons/fa';

interface Facility {
    icon: React.ReactNode,
    name: string,
    description: string
}

const facilities: Facility[] = [
    {
        icon:<FaUserMd/>,
        name: 'Expert Doctors',
        description:'Our team includes world-class doctors across multiple specialties.'
    },
    {
        icon: <FaMicroscope />,
        name: 'Advanced Labs',
        description:'Cutting-edge diagnostic and testing facilities with instant results.'
    },
    {
        icon: <FaAmbulance />,
        name: '24/7 Ambulance',
        description: 'Rapid response ambulance services available at all times.'
    },
    {
        icon: <FaHeartbeat />,
        name: 'Cardiac Care',
        description: 'Comprehensive heart care from preventive to critical treatments.'
    }
];

const FacilitiesSection: React.FC = () => {
    return (
        <section className="facilities-section">
            {/* <h2> Our Facilities</h2> */}

            <div className="facilities-grid">
                {
                    facilities.map((facility, index) => (
                        <div key = {index} className="facility-card">
                            <div className="facility-icon">{facility.icon}</div>
                            <h3>{facility.name}</h3>
                            <p>{facility.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default FacilitiesSection;