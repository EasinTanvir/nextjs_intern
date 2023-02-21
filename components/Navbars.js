import React from "react";
import Link from "next/link";

const Navbars = () => {
  return (
    <div className="navbars">
      <div className="container">
        <div className="main-navs">
          <div className="logo">
            <span>MARKALL</span>
          </div>
          <div className="list">
            <nav>
              <ul>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="buttons">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
