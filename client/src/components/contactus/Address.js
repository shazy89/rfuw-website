import React from "react";
import { Home, Mail } from "react-feather";

const Address = () => {
  return (
    <section className="contact__address">
      <div className="footer__info--box u-margin-top-3">
        <div className="contact__info--box1">
          <Home className="news__card--icon u-margin-right-1" size={40} />
          <p className="font__size-2 contact__text">
            21 Bukit Batok Crescent, Floor 15 Unit 75, <br /> WCEGA Tower
            Singapore 658065
          </p>
        </div>
        <div className="contact__info--box1">
          <p
            className="footer__info--email font__size-2"
            style={{ color: "#535353" }}
          >
            <Mail className="news__card--icon u-margin-right-1" size={40} />
            Email:{" "}
            <a
              className="rfu_cta_button"
              style={{ color: "#535353" }}
              href="mailto:sales@rfuw-engineering.com"
            >
              sales@rfuw-engineering.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Address;
