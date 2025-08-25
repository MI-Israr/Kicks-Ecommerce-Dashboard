import "./HomePage.css";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard">
      <SideBar />
      <main className="main">
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default DashboardLayout;
