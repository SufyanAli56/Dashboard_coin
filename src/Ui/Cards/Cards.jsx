import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Cards_Left from "../../components/Cards_Left/Cards_Left";
import Cards_Graph from "../../components/Cards_Graph/Cards_Graph";
import Footer from "../../components/Footer/Footer";

const Cards = () => {
  return (
    <> 
      <Header />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <div className="flex-1 p-4 md:ml-2 lg:ml-8">
          
        </div>

        <Cards_Left />

        <Cards_Graph />
      </div>
      <Footer/>
    </>
  );
};

export default Cards;
