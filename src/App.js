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

function App() {
  return (
    <Router>
      <div className="main-container">
          <Sidebar />


      </div>

    </Router>
  );
}

export default App;
