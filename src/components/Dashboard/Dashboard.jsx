import React from "react";
import DashboardMain from "./DashboardMain";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="md:pl-64 flex flex-col flex-1">
          <Header />
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
