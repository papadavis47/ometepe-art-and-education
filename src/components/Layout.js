import React from "react";
import NavBar from "./NavBar.js";
import Footer from "./footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <div className='is-flex is-flex-direction-column is-fullheight-100vh'>
      <NavBar />
      <main className='container column'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
