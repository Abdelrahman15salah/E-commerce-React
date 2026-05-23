import { Link } from "react-router-dom";
import "./Navbar.css";
import { countercontext } from "../../Context/appcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let { token, setToken } = useContext(countercontext);
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    setToken("");
    navigate("/Login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-semibold" to="/">
          E-commerce
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto gap-lg-2">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Products">
              Products
            </Link>
            <Link className="nav-link" to="/Categories">
              Categories
            </Link>
            <Link className="nav-link" to="/Checkout">
              Checkout
            </Link>
            <Link className="nav-link" to="/Brands">
              Brands
            </Link>
            {!token ? (
              <>
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="nav-link border-0 bg-transparent text-start"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
