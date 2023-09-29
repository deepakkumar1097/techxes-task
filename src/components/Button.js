import React from "react";
import "../styles/Button.css";

function Button({ text, backgroundColor, textColor, borderRadius, onClick }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: borderRadius,
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
