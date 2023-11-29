import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa6";
import { MdOutlineDownloading } from "react-icons/md";
import { MdTrackChanges } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

const routes = [
  {
    name: "User",
    path: "./components/User",
    icon: <FaUserAlt />,
  },
  {
    name: "Dashboard",
    path: "./components/Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    name: "Loan Application",
    path: "./components/LoanApplication",
    icon: <FaWpforms />,
  },
  {
    name: "Loan Status",
    path: "./components/LoanStatus",
    icon: <MdOutlineDownloading />,
  },
  {
    name: "Loan Tracking",
    path: "./components/LoanTracking",
    icon: <MdTrackChanges />,
  },
  {
    name: "Accounts",
    path: "./components/Accounts",
    icon: <FcMoneyTransfer />,
  },
  {
    name: "Transaction",
    path: "./components/Transaction",
    icon: <AiOutlineTransaction />,
  },
  {
    name: "Payment Method",
    path: "./components/PaymentMethod",
    icon: <RiSecurePaymentFill />,
  },
];

const extra = [
  {
    name: "Support",
    path: "./components/Support",
    icon: <BiSupport />,
  },
  {
    name: "Settings",
    path: "./components/Settings",
    icon: <IoSettingsOutline />,
  },
];

const Sidebar = ({ children }) => {
  return (
    <div className="main-container">
      <div className="Sidebar">
        <div className="Logo">
          <img className="LogoImage" src={logo} alt="logo" />
          <div className="Text">
            <h1 className="SmartLoan">Smart Loan</h1>
            <h2 className="Slogan">Loan and auditing made easy</h2>
          </div>
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink className="link" to={route.path} key={route.name}>
              <div className="icon">{route.icon}</div>
              <div className="LinkText">{route.name}</div>
            </NavLink>
          ))}
        </section>
        <h3 className="ExtraText">EXTRA</h3>
        <section className="Extra">
          {extra.map((extra) => (
            <NavLink className="link2" to={extra.path} key={extra.name}>
              <div className="icon2">{extra.icon}</div>
              <div className="LinkText2">{extra.name}</div>
            </NavLink>
          ))}
        </section>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
