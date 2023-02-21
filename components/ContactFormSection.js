import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const ContactForm = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      name: input.name,
      email: input.email,
      phone: Number(input.phone),
      message: input.message,
    };
    try {
      setLoader(true);
      await axios.post(`${process.env.SERVER_URL}/api/user/create`, formData);
      setLoader(false);
      setSuccess("Submit Successfully");
      setInput({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      if (err) {
        setError(err.response?.data.message);
      } else {
        setError("Something went wrong");
      }
    }
  };
  return (
    <div className="contact">
      <div className="c-container">
        <div className="c-main">
          <div className="c-left">
            <div className="item-1">
              <h2>
                <Image src="/images/phone.png" width={26} height={26} alt="" />
                Call us
              </h2>
              <u>+91111225252</u>
            </div>
            <div className="item-2">
              <h2>
                <Image src="/images/loca.png" width={25} height={24} alt="" />
                Location
              </h2>
              <span>Ghaziabad, Uttar Pradesh</span>
            </div>
            <div className="item-3">
              <h2>
                <Image
                  src="/images/world.png"
                  width={25}
                  height={23}
                  alt="test"
                />
                Mail us
              </h2>
              <span>info@markall.in</span>
            </div>
          </div>
          <div className="c-right">
            <div className="form-top">
              <h1>Contact Now</h1>
              <p>
                In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum
                viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum
                nisl. Id vestibulum tincidunt adipiscing gravida risus.
              </p>
            </div>
            <form onSubmit={onSubmitHandler} className="form-bottom">
              <input
                required
                onChange={onChangeHandler}
                name="name"
                type="text"
                value={input.name}
                placeholder="Name *"
              />
              <input
                required
                onChange={onChangeHandler}
                name="email"
                type="email"
                value={input.email}
                placeholder="Email *"
              />
              <input
                required
                onChange={onChangeHandler}
                name="phone"
                value={input.phone}
                type="number"
                placeholder="Phone *"
              />
              <input
                required
                onChange={onChangeHandler}
                name="message"
                value={input.message}
                type="text"
                placeholder="Message"
              />
              {error && (
                <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
              )}
              <div className="c-btns">
                <button type="submit">
                  {loader ? "Loading..." : "Submit Form"}
                </button>
              </div>
              {success && <h3>{success}</h3>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
