import "./Categories.css";
import { Link, Outlet } from "react-router-dom";

export default function Categories() {
  return (
    <section className="categories container py-5">
      <div className="p-4 bg-light border rounded-4 shadow-sm">
        <h2 className="h1 fw-bold mb-4">Categories Component</h2>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <Link className="btn btn-outline-primary" to="Kitchen">
            Kitchen
          </Link>
          <Link className="btn btn-outline-primary" to="Electronics">
            Electronics
          </Link>
          <Link className="btn btn-outline-primary" to="Clothes">
            Clothes
          </Link>
          <Link className="btn btn-outline-primary" to="Cleaning">
            Cleaning
          </Link>
        </div>

        <div className="border-top pt-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
