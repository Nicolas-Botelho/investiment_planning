import React from "react";
import "../style/card.css";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="p">{description}</p>
    </div>
  );
};

export default Card;