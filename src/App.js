import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Calendar from "./components/calendar/Calendar";
import Fields from "./components/fields/Fields";
import UserManagement from "./components/userManagement/UserManagement";
import FixedBooking from "./components/fixedBooking/FixBooking";
import Reports from "./components/reports/Report";
import UserWallet from "./components/userWalletReports/UserWallet";
import SalesReport from "./components/salesReport/SalesReport";
import Profile from "./components/profile/Profile";
import FilterContext from "./context/FilterContext";

const App = () => {
  return (
    <div className="App">
      <Sidebar />

      <Switch>
        <FilterContext>
          <Route exact path="/" component={Dashboard} />
        </FilterContext>
        <Route path="/calendar" component={Calendar} />
        <Route path="/fields" component={Fields} />
        <Route path="/admins" component={UserManagement} />
        <Route path="/fixed-booking" component={FixedBooking} />
        <Route path="/reports" component={Reports} />
        <Route path="/user-wallet" component={UserWallet} />
        <Route path="/sales-report" component={SalesReport} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
