import "./HomePage.css";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="dashboard">
      <SideBar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="main">
        <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default DashboardLayout;
