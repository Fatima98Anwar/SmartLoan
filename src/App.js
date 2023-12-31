import "./Css/Sidebar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import User from "./pages/User";
import Transaction from "./pages/Transaction";
import TrackLoan from "./pages/TrackLoan";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import PaymentMethod from "./pages/PaymentMenthod";
import LoanStatus from "./pages/LoanStatus";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Upload from "./pages/Upload";
import Sidebar from "./Components/Sidebar";
import DisplayJSON from "./pages/DisplayJSON";
import ModelInput from "./pages/ModelInput";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/trackloan" element={<TrackLoan />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/loanstatus" element={<LoanStatus />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/displayjson" element={<DisplayJSON />} />
          <Route path="/modelinput" element={<ModelInput />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Sidebar>
      
    </Router>
  );
}

export default App;
