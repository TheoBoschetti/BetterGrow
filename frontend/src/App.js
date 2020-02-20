import React from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
