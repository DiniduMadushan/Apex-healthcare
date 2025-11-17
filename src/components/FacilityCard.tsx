import React from "react";
import '../styles/Card.css';

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const FacilityCard:React.FC<CardProps> = ({image,title,description}) => {
    return(
        <div className="facility-card">
            <img src={image} alt={title} className="facility-card-image" />
            <div className="facility-card-body">
                <h3 className="facility-card-title">{title}</h3>
                <p className="facility-card-desc">{description}</p>
            </div>
        </div>
    );
}

export default FacilityCard;