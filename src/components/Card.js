import React from "react";
import "../styles/Card.css";

function CustomCard({ title, paragraph, backgroundColor, color }) {
  const cardStyle = {
    backgroundColor: backgroundColor,
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: color,
    border: `1px solid ${color}`,
  };

  return (
    <div style={cardStyle} className="card-container">
      <h2>{title}</h2>
      <span>⭐⭐⭐⭐⭐</span>
      <p>{paragraph}</p>
    </div>
  );
}

export default CustomCard;
