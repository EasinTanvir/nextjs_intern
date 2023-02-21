import React from "react";
import Navbars from "./Navbars";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbars />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
