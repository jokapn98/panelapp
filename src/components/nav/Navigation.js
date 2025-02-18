import React, { useState, useEffect } from "react";
import Logo from "../../assets/navbar/Logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  const [toggle, setToggle] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="nav bg-white ">
      <div className="nav-main">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-links">
          {isMobile && <button onClick={handleToggle}>☰</button>}
          {(toggle || !isMobile) && (
            <ul>
              <ol>
                <a className="c-black-900 fw-300" href="https://example.com/">
                  Početna
                </a>
              </ol>
              <ol>
                <a className="c-black-900 fw-300" href="https://example.com/">
                  Proizvodi
                </a>
              </ol>
              <ol>
                <a className="c-black-900 fw-300" href="https://example.com/">
                  O nama
                </a>
              </ol>
              <ol>
                <a className="c-orange fw-600" href="https://example.com/">
                  Kontakt
                </a>
              </ol>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
