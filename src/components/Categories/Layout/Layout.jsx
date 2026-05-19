import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navbar from "../../Navbar/Navbar";
import Categories from "../Categories";

export default function Layout() {
  return (
    <section className="layout container py-4">
      <Navbar />
      <Categories />
      <Outlet />
    </section>
  );
}
