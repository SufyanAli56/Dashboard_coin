import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoices from "./Ui/Invoinces/Invoices";
import Dashboard from "./Ui/Dashboard/Dashboard";
import Transaction from "./Ui/Transaction/Transaction";


const App = () => {
  return (
    <Router>
    
          <div className="flex-1 p-4">
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/invoices" element={<Invoices  />} />
            </Routes>

          </div>
    
    </Router>
  );
};

export default App;
