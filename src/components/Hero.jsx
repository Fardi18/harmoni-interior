import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h6 className="text-white">Halo, selamat datang di</h6>
            <h1 className="text-white">Harmoni Interior</h1>
            <p className="text-white text-opacity-75">
              Distributor resmi plafon PVC yang memberikan plafon PVC Kualitas
              terbaik dengan harga yang kompetitif. Cocok diaplikasikan untuk
              segala jenis bangunan seperti rumah, kantor, hotel, cafe resto,
              aula, rumah ibadah, dll.
            </p>
            <Link to={"/produk"} className="button">
              Lihat Katalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
