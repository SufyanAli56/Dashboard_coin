import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoices from "./Ui/Invoinces/Invoices";
import Dashboard from "./Ui/Dashboard/Dashboard";
import Transaction from "./Ui/Transaction/Transaction";
import Cards from "./Ui/Cards/Cards";
import Promos from "./Ui/Promos/Promos";
import Investments from "./Ui/Investments/Investments";
import Inbox from "./Ui/Inbox/Inbox";
import Insights_Main from "./Ui/Insights/Insights_Main";
import The_Rise from "./Ui/Insights/The_Rise";
import Finance from "./Ui/Insights/Finance";
import Innovations from "./Ui/Insights/Innovations";



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
            <Route path="/Insights_Main" element={<Insights_Main  />} />
            <Route path="/The_Rise" element={<The_Rise />} />
            <Route path="/inbox" element={<Inbox  />} />
            <Route path="/Finance" element={<Finance  />} />
            <Route path="/Innovations" element={<Innovations  />} />
            <Route path="/investments" element={< Investments />} />
 
            </Routes>

          </div>
    
    </Router>
  );
};

export default App;
