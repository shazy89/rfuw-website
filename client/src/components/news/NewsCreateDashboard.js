import React from "react";
import DashbordHeader from "components/dashboard/DashbordHeader";
import FrormFields from "./FormFields";

const NewsCreateDashboard = ({ history }) => {
  return (
    <div className="u-padding--3">
      <DashbordHeader history={history} header="Add news" />
      <FrormFields history={history} edit={false} />
    </div>
  );
};

export default NewsCreateDashboard;
