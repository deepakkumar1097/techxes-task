import React from "react";
import Button from "../components/Button";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-title">
          <h1>Start your business today for $0 state fees</h1>
          <div className="footer-btn">
            <Button
              text="Get Started"
              backgroundColor={"#fff"}
              borderRadius={"20px"}
              textColor={"black"}
            />
            <Button
              text="Contact Sales"
              backgroundColor={"#fff"}
              borderRadius={"20px"}
              textColor={"black"}
            />
          </div>
        </div>
        <div className="footer-links-container">
          <div className="footer-about">
            <h4>FurniShop</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              nihil!
            </p>
          </div>
          <div className="footer-link">
            <h6>The Company</h6>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Company Profile</a>
              </li>
              <li>
                <a href="#">License & Certificates</a>
              </li>
              <li>
                <a href="#">Work Completion Certificate</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <h6>More Information </h6>
            <ul>
              <li>
                <a href="#">Faq</a>
              </li>
              <li>
                <a href="#">Be Our Franchise</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Hatil Project Solution</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-address">
            <h6>Corporate Office</h6>
            <address>
              Box 564, Disneyland
              <br />
              USA
            </address>
            Tel:<a href="tel:">+91 98795795885</a>
            <br />
            Mobile:<a href="tel:">+91 98795795885</a>
            <br />
            Email:<a href="email:">Example@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
