import React from "react";
import { Linkedin } from "react-feather";

const Footer = () => {
  return (
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
  );
};

export default Footer;
