import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const data = useContext(AppContext);
  console.log("7", data);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">Show modal</button>
    </main>
  );
};

export default Home;
