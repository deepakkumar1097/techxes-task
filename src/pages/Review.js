import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Sumarry from "../assets/images/furniture.jpg";
export default function Review() {
  return (
    <div className="review-container">
      <h2>Our Review</h2>
      <div className="review-card-container">
        <Card
          title={"Tina T"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque ita"
          }
          backgroundColor={"white"}
          color={"black"}
        ></Card>
        <Card
          title={"Mike J"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque ita"
          }
          backgroundColor={"#2a6f6e"}
          color={"white"}
        ></Card>
        <Card
          title={"Justing J"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque ita"
          }
          backgroundColor={"white"}
          color={"black"}
        ></Card>
      </div>
      {/* <div className="review-summary">
        <img src={Sumarry} alt="summary" />
        <div className="summary-text">
          <h4>Get Discount From Memebership</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            unde aliquam? Voluptatibus?
          </p>
          <Button
            text={"Join Now"}
            backgroundColor={"#2a6f6e"}
            textColor={"white"}
            borderRadius={"20px"}
          />
        </div>
      </div> */}
    </div>
  );
}
