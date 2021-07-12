import React from "react";
import ReusableHeader from "../components/reusable/ReusableHeader";
import CustomIncuryForm from "components/form/CustomIncuryForm";
import Address from "components/contactus/Address";
import Footer from "components/contactus/Footer";
import Media from "react-media";
import ReusableHelmet from "components/reusable/ReusableHelmet";
const ContactUs = () => {
  return (
    <>
      {" "}
      <ReusableHelmet
        page="Contact Us"
        content=" tim@rfuw-engineering.com 21 Bukit Batok Crescent, Floor 15 Unit 75,
        WCEGA Tower Singapore 658065"
      />
      <Media query="(min-width: 800px)">
        <ReusableHeader
          page="Contact Us"
          backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_1800/v1622481233/Contact/stefan-widua-3YAIvBNlZM4-unsplash_opgefc.jpg"
        />
      </Media>
      <Media query="(max-width: 800px)">
        <ReusableHeader
          page="Contact Us"
          backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_700/v1622481233/Contact/stefan-widua-3YAIvBNlZM4-unsplash_opgefc.jpg"
        />
      </Media>
      <main>
        <section className="u-margin-top-4 u-padding--2">
          <h2 className="text-center header__text">Contact Us</h2>
          <div className="contact__form-box">
            <CustomIncuryForm page="Contact" />
          </div>
        </section>
        <Address />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ContactUs;
