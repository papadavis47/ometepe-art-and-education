import React from "react";
import NavBar from "./NavBar.js";
import Footer from "./footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
