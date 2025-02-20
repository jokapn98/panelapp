import React from "react";
import { PiPhoneCallLight } from "react-icons/pi";
const Reputation = () => {
  return (
    <div className="rep">
      <div className="rep-heading">
        <p className="h2 fw-700 c-black-800">Our Reputation</p>
      </div>
      <div className="rep-boxes ">
        <div className="rep-box">
          <a href="https://www.example.com">
            <PiPhoneCallLight className="rep-box-icon" />
          </a>
          <p className="h5 fw-700 c-black-700">Best Services</p>
          <p className="c-neutral-400 fw-400 p2">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
        <div className="rep-box ">
          <a href="https://www.example.com">
            <PiPhoneCallLight className="rep-box-icon" />
          </a>
          <p className="h5 fw-700 c-black-700">Best Services</p>
          <p className="c-neutral-400 fw-400 p2">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
        <div className="rep-box ">
          <a href="https://www.example.com">
            <PiPhoneCallLight className="rep-box-icon" />
          </a>
          <p className="h5 fw-700 c-black-700">Best Services</p>
          <p className="c-neutral-400 fw-400 p2">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reputation;
