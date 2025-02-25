import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Cards_Left from "../../components/Cards_Left/Cards_Left";


const Cards = () => {
  

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-4 md:ml-6 lg:ml-8">
          
        </div>

        {/* Cards Left Section */}
        <Cards_Left />
        
      </div>
    </>
  );
};

export default Cards;
