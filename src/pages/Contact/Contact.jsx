import React from "react";
import "./Contact.scss";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="heading">
          <h2>Contact</h2>
          <span></span>
        </div>
        <div className="form-con">
          <div className="left">
            <div className="form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="5"
                rows="2"
                placeholder="Enter your message"
              ></textarea>

              <button type="submit">
                <IoCloudDownloadOutline stroke="#FFB800" size={"1.5em"} />{" "}
                Download CV
              </button>
            </div>
          </div>
          <div className="right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7717237.773121404!2d72.84074730000002!3d19.187229400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714585703592!5m2!1sen!2sin"
              // width="600"
              // height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
