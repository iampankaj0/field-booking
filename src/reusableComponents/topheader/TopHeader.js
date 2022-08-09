import React from "react";
import "./topheader.css";

const TopHeader = ({ page_name }) => {
  return (
    <div className="top_header">
      <div className="pagename_section">
        <h1 className="page_name"> {page_name} </h1>
      </div>
    </div>
  );
};

export default TopHeader;
