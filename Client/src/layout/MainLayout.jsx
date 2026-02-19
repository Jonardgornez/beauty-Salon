// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  const name = "John"; // Mock user name

  return (
    <div className=" flex flex-col h-screen ">
        <Navbar />

        <div style={{ padding: "20px" } } className="grow text-center text-black">
            <Outlet/>
        </div>
    </div>
  );
}

export default MainLayout;
