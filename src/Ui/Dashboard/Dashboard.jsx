import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SavingsTransactions from "./      SavingsTransactions ";
import BalanceOverview from "./BalanceOverview";
import ChartsStatistics from "./ChartsStatistics";

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <Sidebar />
      <div className="p-4 lg:p-6 lg:ml-44 mt-12 min-h-screen text-sm">
        <BalanceOverview />
        <ChartsStatistics/>
        <SavingsTransactions/>
      </div>
    </>
  );
};

export default Dashboard;
