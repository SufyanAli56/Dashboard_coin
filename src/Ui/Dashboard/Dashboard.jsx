import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";


const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <Sidebar />
      <div className="mt-16 text-bold font-3xl text-red-400 ml-44 text-5xl">Dashboard</div>
     
    </>
  );
};

export default Dashboard;
