import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

export default function Layout() {
  return (
    <section className="layout min-vh-100 d-flex flex-column bg-body-tertiary">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
