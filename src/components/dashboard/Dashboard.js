import React from "react";
import styled from "styled-components";
import TopHeader from "../../reusableComponents/topheader/TopHeader";
import LeftPanel from "./LeftPanel";
import ListPanel from "./ListPanel";

const Page_content = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: block;
  }
`;

const Dashboard = () => {
  return (
    <div className="dashboard_main">
      <TopHeader page_name="Dashboard" />
      <Page_content>
        <LeftPanel />
        <ListPanel />
      </Page_content>
    </div>
  );
};

export default Dashboard;
