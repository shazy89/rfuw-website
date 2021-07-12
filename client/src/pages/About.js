import React from "react";
import ReusableHeader from "../components/reusable/ReusableHeader";
import Facts from "../components/aboutus/Facts";
import Facility from "../components/aboutus/Facility";
import Footer from "components/layout/Footer";
import ReusableHelmet from "components/reusable/ReusableHelmet";
const About = () => {
  return (
    <>
      <ReusableHelmet
        page="About Us"
        content="RFuW Engineering's founders have over 50 years RF & MW business experience and understand what the customer values: Performance, Quality, Price & Reliable Service"
      />
      <ReusableHeader
        page="About Us"
        backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/v1622820879/About/Polar_Star_McMurdo_Sound_p7o3k9.jpg"
      />
      <main>
        <Facts />
        <Facility />
      </main>
      <Footer />
    </>
  );
};

export default About;
