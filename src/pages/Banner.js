import React, { useState, useEffect } from "react";

// Custom hook for incrementing numbers at regular intervals
function useIncrement(initialValue, maxValue, interval) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      if (value < maxValue) {
        setValue((prevValue) => {
          const newValue = prevValue + 1;
          return newValue <= maxValue ? newValue : maxValue;
        });
      }
    }, interval);

    return () => clearInterval(incrementInterval);
  }, [value, maxValue, interval]);

  return value;
}

export default function Banner() {
  const experience = useIncrement(0, 7, 1000);
  const opened = useIncrement(0, 2, 1000);
  const furnitureSold = useIncrement(0, 15, 1000);
  const variantFurniture = useIncrement(0, 250, 500);

  return (
    <div className="banner-container">
      <div className="banner">
        <h2>{experience}</h2>
        <span>Year Experience</span>
      </div>
      <div className="banner">
        <h2>{opened}</h2>
        <span>Opened in the country</span>
      </div>
      <div className="banner">
        <h2>{furnitureSold}k+</h2>
        <span>Furniture sold</span>
      </div>
      <div className="banner">
        <h2>{variantFurniture}k+</h2>
        <span>Variant Furniture</span>
      </div>
    </div>
  );
}
