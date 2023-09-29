import React, { useState } from "react";
import Pic1 from "../assets/images/modern-white-sofa-isolated-on-transparent-background-ai-generated-png.webp";
import Pic2 from "../assets/images/vecteezy_modern-kitchen-cabinet-isolated-on-transparent_18929797_232.png";
import Pic3 from "../assets/images/vecteezy_lamp-lamp-png-table-lamp-transparent-background-ai_27536274_410.png";
import Pic4 from "../assets/images/vecteezy_minimalistic-modern-living-room-wooden-desk-clipart-on_26844837_476.png";

export default function Categories() {
  const categories = [
    { id: 1, name: "Chair", img: Pic1 },
    { id: 2, name: "Cabinet", img: Pic2 },
    { id: 3, name: "Lamp", img: Pic3 },
    { id: 4, name: "Table", img: Pic4 },
  ];

  return (
    <div className="funiture-categories">
      <h3>Funiture Categories</h3>
      <div className="categories-slider">
        <div className="category-container">
          {categories.map((category) => (
            <div key={category.id} className="category">
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
