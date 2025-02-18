import React from "react";

const Banner = () => {
  return (
    <div className="bann">
      <div className="bann-heading">
        <p className="h1 c-black-800 fw-700">
          Paneli koji <br /> grade budućnost
        </p>
      </div>
      <div className="bann-widget  ">
        <div className="bann-widget-main bg-purple-secondary">
          <div className="bann-widget-top">
            <p className="fw-500 c-white h5">Nasi radovi</p>
            <p className="p1 fw-300 c-white">
              Pouzdana zaštita,
              <br /> savremeni dizajn.
            </p>
          </div>
          <div className="bann-widget-bottom">
            <button className="bann-widget-bottom-leftbtn bg-black-800 c-white">
              1
            </button>
            <div className=" bg-white horizontal-divider"></div>
            <button className="bann-widget-bottom-rightbtn bg-black-800 c-white">
              2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
