import React from "react";
import Button from "../components/Button";

export default function Products() {
  return (
    <div className="products-container">
      <div className="products-summary">
        <h2>Design your dream home with perfect furniture</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
          totam! Lorem ipsum dolor sit amet.
        </p>
        <Button
          backgroundColor={"transparent"}
          textColor={"white"}
          borderRadius={"20px"}
          text={"Explore All Products"}
        />
      </div>
    </div>
  );
}
