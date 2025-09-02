// src/components/DoctorsSection.tsx
import React, { useState } from 'react';
import '../styles/DoctorSection.css';
import doc1 from '../assets/images/doctors/doc1.jpg';
import doc2 from '../assets/images/doctors/doc2.webp';
import doc3 from '../assets/images/doctors/doc3.jpg';
import doc4 from '../assets/images/doctors/doc1.jpg';
import doc5 from '../assets/images/doctors/doc1.jpg';

interface Doctor {
  image: string;
  name: string;
  description: string;
}

const doctors: Doctor[] = [
  { image: doc1, name: 'Dr. Sarah Johnson', description: 'Cardiologist with 15 years of experience in advanced cardiac care.' },
  { image: doc2, name: 'Dr. Michael Lee', description: 'Renowned pediatrician specializing in child wellness and development.' },
  { image: doc3, name: 'Dr. Emily Davis', description: 'Expert neurologist with a focus on innovative treatment methods.' },
  { image: doc4, name: 'Dr. James Brown', description: 'Orthopedic surgeon skilled in minimally invasive procedures.' },
  { image: doc5, name: 'Dr. Olivia White', description: 'Leading dermatologist offering personalized skincare solutions.' },
];

const DoctorsSection: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>{
    if(currentIndex < doctors.length - 3){
      setCurrentIndex(prev => prev+1);
    }
  };

  const prevSlide = () => {
    if(currentIndex > 0){
      setCurrentIndex(prev => prev -1);
    }
  };

  return (
    <section className="doctors-section">
      <h2>Meet Our Doctors</h2>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {doctors.map((doc, index) => (
              <div
                className="doctor-card"
                key={index}
              >
                <div className='doctor-card-content'>
                  <img src={doc.image} alt={doc.name} />
                <h3>{doc.name}</h3>
                <p>{doc.description}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  )
};

export default DoctorsSection;
