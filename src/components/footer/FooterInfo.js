import React from "react";
import Logo from "../../assets/navbar/Logo.png";
import Facebook from "../../assets/footer/Facebook.png";
import Twitter from "../../assets/footer/Twitter.png";
import Linkedin from "../../assets/footer/Linkedin.png";

const FooterInfo = () => {
  return (
    <div className="footer-i">
      <div className="footer-info">
        <div className="footer-info-main">
          <div className="footer-info-main-group">
            <div className="fw-400 c-purple-primary h5">ADRESA:</div>
            <div className="h5 fw-300 c-black-800">
              6391 Elgin St. Celina, Delaware 10299
            </div>
          </div>
          <div className="footer-info-main-group">
            <div className="fw-400 c-purple-primary h5">TELEFON:</div>
            <div className="h5 fw-300 c-black-800">+84 1102 2703</div>
          </div>
          <div className="footer-info-main-group">
            <div className="fw-400 c-purple-primary h5">EMAIL:</div>
            <div className="h5 fw-300 c-black-800"> hello@thebox.com</div>
          </div>
          <div className="footer-box">
            <img src={Logo} alt="Site Logo" />
          </div>
        </div>
        <div className="footer-info-social">
          <div className="fw-400 c-purple-primary h5">NEWSLETTER:</div>
          <div className="subscribe-part">
            <label>
              <input
                className="p1 fw-300 c-neutral-300"
                name="emailInput"
                placeholder="Your email here"
              />
              <button className="p2 c-white bg-orange">Subscribe</button>
            </label>
          </div>
          <div className="social-media-icons">
            <div className="fw-400 c-purple-primary h5">SOCIAL:</div>
            <div className="social-icons">
              <a href="https://example.com">
                <img src={Facebook} alt="Facebook Logo" />
              </a>
              <a href="https://example.com">
                <img src={Twitter} alt="Twitter Logo" />
              </a>
              <a href="https://example.com">
                <img src={Linkedin} alt="Linkedin Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
