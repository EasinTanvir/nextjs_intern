import React from "react";
import Image from "next/image";

const Headers = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="m-nav">
          <div className="nav-left">
            <h1>
              Reach your - <br />
              audience &amp; convert <br />
              your reads
            </h1>
            <p>
              Get your customers with SEO, rank your business with <br />
              email marketing, build sales leads
            </p>
            <div className="nav-btns">
              <button>Get Started</button>
              <button>
                <Image src="/images/Vector.png" width={15} height={15} alt="" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="nav-right">
            <Image
              src="/images/Marketing 1.png"
              width={450}
              height={321}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
