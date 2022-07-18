import React, { useState } from "react";
import "./sidebar.css";
import { SiConfluence, SiManageiq } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose, MdGpsFixed, MdReport, MdPointOfSale } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiFillDashboard, AiTwotoneWallet } from "react-icons/ai";
import { CgCalendarToday, CgProfile } from "react-icons/cg";
import { GiField } from "react-icons/gi";
import { RiEmpathizeFill, RiContactsBook2Fill } from "react-icons/ri";

const Sidebar = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="sidebar_main">
      <button className="nav_open-button" onClick={() => setNavToggle(true)}>
        <HiMenuAlt1 />
      </button>

      {navToggle && (
        <div className="side_panel-nav slide-bottom">
          <div className="sidebar_logo">
            <SiConfluence className="logo" />
            <button
              className="nav_close-button"
              onClick={() => setNavToggle(false)}
            >
              <MdClose className="icon" />
            </button>
          </div>
          <div className="sidebar_links">
            <NavLink exact to="/">
              <span>
                <AiFillDashboard className="nav_icon" />
                Dashboard
              </span>
            </NavLink>
            <NavLink to="/calendar">
              <span>
                <CgCalendarToday className="nav_icon" />
                Calendar
              </span>
            </NavLink>
            <NavLink to="/fields">
              <span>
                <GiField className="nav_icon" />
                fileds
              </span>
            </NavLink>
            <NavLink to="/admins">
              <span>
                <SiManageiq className="nav_icon" />
                user management
              </span>
            </NavLink>
            <NavLink to="/fixed-booking">
              <span>
                <MdGpsFixed className="nav_icon" />
                Fixed booking
              </span>
            </NavLink>
            <NavLink to="/reports">
              <span>
                <MdReport className="nav_icon" />
                reports
              </span>
            </NavLink>
            <NavLink to="/user-wallet">
              <span>
                <AiTwotoneWallet className="nav_icon" />
                user wallet report
              </span>
            </NavLink>
            <NavLink to="/sales-report">
              <span>
                <MdPointOfSale className="nav_icon" />
                Sales report
              </span>
            </NavLink>
            <NavLink to="/profile">
              <span>
                <CgProfile className="nav_icon" />
                Profile
              </span>
            </NavLink>
            {/* <NavLink to="/about">
              <span>
                <RiEmpathizeFill className="nav_icon" />
                About
              </span>
            </NavLink> */}
            <NavLink to="/contact">
              <span>
                <RiContactsBook2Fill className="nav_icon" />
                Contact
              </span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
