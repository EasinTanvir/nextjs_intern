import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container">
      <div className="features">
        <div className="top-features">
          <div className="f-left">
            <h3>OUR FEATURES</h3>
            <h1>
              Know your audience and <br />
              boost sales
            </h1>
            <hr />
          </div>
          <div className="f-right">
            <p>
              Effective emails convey the most significant substance to a client
              at the proper time which is our marketing approaches include
              sheduled emails.
            </p>
          </div>
        </div>
        <div className="m-features">
          <div className="mf-left">
            <h1>Save precious time with automation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              facere sit quod voluptate dicta quaerat pariatur numquam
              laudantium minus.
            </p>
            <button>
              <span>Learn More</span>
              <Image src="/images/V.png" width={25} height={25} alt="" />
            </button>
          </div>
          <div className="mf-right">
            <Image
              src="/images/Automation 1.png"
              width={480}
              height={320}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
