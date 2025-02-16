import React from "react";
import Navigation from "../nav/Navigation";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <div className="bred">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
