import { useState } from "react";
import { Link } from "react-router-dom";
import "./Components.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? "navbar navbar-expand-lg fixed-top navbar-dark nav-bg"
          : "navbar navbar-expand-lg fixed-top navbar-dark"
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="logo" width="160" height="auto" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active mx-1"
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1" to={"/produk"}>
                Jenis Produk
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1 text-white" to={"/harga"}>
                Harga Produk
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1" to={"/hubungi"}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
