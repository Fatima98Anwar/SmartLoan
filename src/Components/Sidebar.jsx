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
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import SearchBar from "../Components/SearchBar";
import UploadDoc from "../Components/UploadDoc";

const routes = [
  {
    name: "User",
    path: "user",
    icon: <FaUserAlt />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    name: "Loan Application",
    path: "/upload",
    icon: <FaWpforms />,
  },
  {
    name: "Loan Status",
    path: "/loanStatus",
    icon: <MdOutlineDownloading />,
  },
  {
    name: "Loan Tracking",
    path: "trackloan",
    icon: <MdTrackChanges />,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: <FcMoneyTransfer />,
  },
  {
    name: "Transaction",
    path: "/transaction",
    icon: <AiOutlineTransaction />,
  },
  {
    name: "Payment Method",
    path: "/paymentmethod",
    icon: <RiSecurePaymentFill />,
  },
];

const extra = [
  {
    name: "Support",
    path: "/support",
    icon: <BiSupport />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline />,
  },
];

const Sidebar = ({ children }) => {
  return (
    <div className="main-container">
      <div className="FlexContainer">
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

        <div className="searchbarContainer">
          <SearchBar />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
