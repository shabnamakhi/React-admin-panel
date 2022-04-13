import Dashboard from "../components/Dashboard/Dashboard";
import React from "react";
import DashboardMain from "../components/Dashboard/DashboardMain";

const dashboard = () => {
  return (
    <>
      <div>
        <Dashboard />
        <p className="pl-80 pb-80">
          <DashboardMain />
        </p>
      </div>
    </>
  );
};

export default dashboard;
