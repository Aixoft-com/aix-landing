import React from "react";
import "./AboutCard.scss"

interface AboutCardProps {
    image: string,
    name: string,
    description: string,
}

// eslint-disable-next-line react/prop-types
export const AboutCard: React.FC<AboutCardProps> = ({image, name, description}) => {
    return (
      <div className="about-card">
        <div className="about-card-photo">
          <img src={image} alt={name} />
        </div>
        <div className="about-card-description">
          <h4>{name}</h4>
          <p>
            {description}
          </p>
        </div>
      </div>
    )
}
