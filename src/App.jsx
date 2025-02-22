import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoices from "./Ui/Invoinces/Invoices";
import Dashboard from "./Ui/Dashboard/Dashboard";
import Transaction from "./Ui/Transaction/Transaction";
import Cards from "./Ui/Cards/Cards";
import Promos from "./Ui/Promos/Promos";


const App = () => {
  return (
    <Router>
    
          <div className="flex-1 p-4">
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/invoices" element={<Invoices  />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="/Promos" element={<Promos  />} />

 
            </Routes>

          </div>
    
    </Router>
  );
};

export default App;
