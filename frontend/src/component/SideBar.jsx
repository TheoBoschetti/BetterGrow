import React from "react";
import { Icon } from "antd";
import "./SideBar.scss";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarContainer">
        <Icon className="mainIcon" type="fund" />
        <div>
          <div>
            <Icon type="message" />
            <p>Request a feedback</p>
          </div>
          <div>
            <Icon type="profile" />
            <p>Your feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}
