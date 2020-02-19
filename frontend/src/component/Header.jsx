import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import "./Header.scss";

export default function Header() {
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="header">
      <h1>Better Grow</h1>
      {isLogged ? <img src="" alt="Profil" /> : <Button>Log in</Button>}
    </div>
  );
}
