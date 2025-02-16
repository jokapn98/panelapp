import React from "react";
import Logo from "../../assets/navbar/Logo.png";
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
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="footer-info-social">r</div>
      </div>
    </div>
  );
};

export default FooterInfo;
