import "./Components.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row row-cols-lg-4 row-cols-1 justify-content-between">
          <div className="col col-lg-5 mb-lg-0 mb-4">
            <Link className="navbar-brand" to={"/"}>
              <img src={logo} alt="logo" width="160" height="auto" />
            </Link>
            <p className="text-white-50 mt-5">
              Distributor resmi plafon PVC yang memberikan plafon PVC Kualitas
              terbaik dengan harga yang kompetitif
            </p>
          </div>
          <div className="col col-lg-2 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white mb-5 pt-4">Menu</h5>
            <Link to={"/"} className="text-white-50 mt-2">
              Home
            </Link>
            <Link to={"/produk"} className="text-white-50 mt-2">
              Jenis Produk
            </Link>
            <Link to={"/harga"} className="text-white-50 mt-2">
              Harga Produk
            </Link>
            <Link to={"/hubungi"} className="text-white-50 mt-2">
              Hubungi Kami
            </Link>
          </div>
          <div className="col col-lg-2 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white mb-5 pt-4">Contact</h5>
            <Link href="#" className="text-white-50 mt-2">
              <ReactWhatsapp
                className="btn text-white-50 mt-2 p-0"
                number="+6288211148998"
                message="Saya ingi memesan ..."
              >
                Marketing 1
              </ReactWhatsapp>
            </Link>
            <Link href="#" className="text-white-50 mt-2">
              <ReactWhatsapp
                className="btn text-white-50 mt-2 p-0"
                number="+6283827637634"
                message="Saya ingi memesan ..."
              >
                Marketing 2
              </ReactWhatsapp>
            </Link>
            <Link href="#" className="text-white-50 mt-2">
              <ReactWhatsapp
                className="btn text-white-50 mt-2 p-0"
                number="+62895324122257"
                message="Saya ingi memesan ..."
              >
                Marketing 3
              </ReactWhatsapp>
            </Link>
            <Link href="#" className="text-white-50 mt-4">
              harmoniinterior.id@gmail.com
            </Link>
          </div>
          <div className="col col-lg-3 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white mb-5 pt-4">Lokasi</h5>
            <Link
              to="https://goo.gl/maps/GdLvd5DaTbzD67dt6"
              className="text-white-50 mt-2"
            >
              Jl. Raya Serang Km.13,8 Kawasan Industri Tristate Cikupa Tangerang
              Banten
            </Link>
            <h5 className="fw-bold text-white mb-3 pt-4">Jam Operasional</h5>
            <p className="text-white-50 mt-2">
              Senin - Sabtu, 08.00 - 17.00 WIB
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-white text-center copytext">
              &copy; Copyright 2023 by 2F, All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
