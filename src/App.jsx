import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Ui/Dashboard/Dashboard";
import Transaction from "./Ui/Transaction/Transaction";
import Cards from "./Ui/Cards/Cards";


const App = () => {
  return (
    <Router>
    
          <div className="flex-1 p-4">
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/Cards" element={<Cards />} />

            </Routes>

          </div>
    
    </Router>
  );
};

export default App;
