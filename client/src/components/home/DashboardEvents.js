import React from "react";
import DashbordHeader from "components/dashboard/DashbordHeader";
//import ContactUs from "./ContactUs";

const DashboardEvents = ({ history }) => {
  return (
    <div className="u-padding--2">
      <DashbordHeader history={history} header="Events" />
    </div>
  );
};

export default DashboardEvents;
