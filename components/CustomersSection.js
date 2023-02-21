import React from "react";
import Image from "next/image";

const Customers = () => {
  return (
    <div className="customer">
      <div className="customer-left">
        <h3>OUR HAPPY CUSTOMERS</h3>
        <h1>What our customers say about us</h1>
        <hr />
      </div>
      <div className="customer-right">
        <Image src="/images/big.png" width={35} height={35} alt="" />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quidem
          facere, aliquam asperiores dolores nostrum pariatur quia cum esse
          quasi!
        </p>
        <div className="texts">
          <h1>Jane Doe</h1>
          <p>Product Specialist, Lorem Co</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
