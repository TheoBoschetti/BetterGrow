import React from "react";
import { Icon } from "antd";
import "./SideBar.scss";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarContainer">
        <Icon className="mainIcon" type="fund" />
        <div>
          <Icon type="message" />
          <p>Request a feedback</p>
          <Icon type="profile" />
          <p>Your feedback</p>
        </div>
      </div>
    </div>
  );
}
