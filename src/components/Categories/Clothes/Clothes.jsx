import { Link, Outlet } from "react-router-dom";
export default function Clothes() {
  return (
    <section className="container py-4">
      <div className="p-4 border rounded-4 bg-white shadow-sm">
        <h1 className="h2 fw-bold mb-4">Clothes</h1>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <Link className="btn btn-outline-secondary" to="Jeans">
            Jeans
          </Link>
          <Link className="btn btn-outline-secondary" to="Shoes">
            Shoes
          </Link>
          <Link className="btn btn-outline-secondary" to="Shirts">
            Shirts
          </Link>
        </div>

        <Outlet />
      </div>
    </section>
  );
}
