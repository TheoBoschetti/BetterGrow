import React from "react";
import "./TitleBar.scss";

export default function TitleBar(props) {
  return (
    <div className="titleBar">
      <h2>{props.title}</h2>
    </div>
  );
}
