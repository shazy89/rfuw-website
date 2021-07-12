import React from "react";
import { Home, Mail } from "react-feather";
import CustomIncuryForm from "../form/CustomIncuryForm";
import { Linkedin } from "react-feather";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="u-padding--3">
        <h2 className="footer__header font__size-6 u-center-text">
          Custom Inqury
        </h2>
        <div className="footer__form--box">
          <CustomIncuryForm />
        </div>
        <div className="footer__info--box u-margin-top-3">
          <div className="footer__info--box1">
            <Home className="news__card--icon u-margin-right-1" size={40} />
            <p className="footer__info--text font__size-2">
              21 Bukit Batok Crescent, Floor 15 Unit 75, <br /> WCEGA Tower
              Singapore 658065
            </p>
          </div>
          <div className="footer__info--box1">
            <Mail className="news__card--icon u-margin-right-1" size={40} />
            <p
              className="footer__info--email font__size-2"
              style={{ marginBottom: 0 }}
            >
              Email:{" "}
              <a
                className="rfu_cta_button"
                href="mailto:sales@rfuw-engineering.com
                "
              >
                sales@rfuw-engineering.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom-text">
          © 2021 Copyright: rfuw-engineering.com{" "}
          <span className="u-margin-left-1">
            <a
              className="rfu_cta_button"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/timothy-emery-6139203/"
            >
              <Linkedin size={30} />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
