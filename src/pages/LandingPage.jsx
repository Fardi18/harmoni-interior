import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import iconImage from "../assets/icon-image.jpg";
import iconTime from "../assets/icon-time.jpg";
import iconShield from "../assets/icon-shield.jpg";
import imgPlafonPvc from "../assets/plafonpvc.jpeg";
import imgWpc from "../assets/wpc.jpeg";
import imgListPlafon from "../assets/listplafon.jpeg";
import imgLantai from "../assets/lantaivnyl.jpg";
import imgMarmer from "../assets/marmer.jpeg";
import imgWallfoam from "../assets/wallfoam.jpeg";
import imgWallpaper from "../assets/wallpaper.jpeg";
import imgEdging from "../assets/edging.jpg";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* keunggukan kami */}
      <div className="keunggulan container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h3 className="title">Keunggulan Kami</h3>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 text-white">
          <div className="col">
            <div className="list-keunggulan text-center">
              <img src={iconImage} alt="" />
              <h5>Keindahan dan Estetika</h5>
              <p>
                Tersedia dalam berbagai desain, pola, dan tekstur yang
                memungkinkan andamengubah penampilan ruangan dengan mudah.
                Dengan menggunakan material ini, Anda dapat menciptakan tampilan
                yang elegan, modern, atau bahkan klasik sesuai dengan preferensi
                dan gaya dekorasi Anda.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="list-keunggulan text-center">
              <img src={iconTime} alt="" />
              <h5>Kemudahan Pemasangan</h5>
              <p>
                Dilengkapi dengan sistem penguncian atau perekat khusus yang
                memungkinkan anda untuk memasangnya dengan cepat dan mudah tanpa perlu
                keterampilan khusus. Dan keunggulan Ini menghemat waktu dan biaya instalasi,
                sehingga menjadi pilihan yang praktis untuk meningkatkan keindahan interior ruangan.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="list-keunggulan text-center">
              <img src={iconShield} alt="" />
              <h5>Daya Tahan & Perawatan</h5>
              <p>
                WPC terbuat dari campuran serat kayu dan plastik, sehingga tahan
                terhadap kerusakan, perubahan suhu, dan kelembaban. Panel
                memiliki sifat tahan air dan tahan lama. Wallpaper modern
                dilapisi dengan lapisan perlindungan sehingga tahan terhadap
                noda dan mudah dibersihkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* katalog kami */}
      <div className="katalog container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h3 className="title">Katalog Produk Kami</h3>
            </div>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgPlafonPvc} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Plafon PVC</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to="/produk/plafonpvc" className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgWpc} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>WPC</h5>
            <p>
              Wpc dibuat dari bahan berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to={"/produk/plafonWPC"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgListPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>List Plafon</h5>
            <p>
              List Plafon dibuat dari bahan berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to={"/produk/ListPlafon"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgLantai} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Lantai Vinyl</h5>
            <p>
              Lantai Vinyl dibuat dari bahan berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to={"/produk/LantaiVinyl"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgMarmer} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Marmer PVC</h5>
            <p>
              Marmer PVC terbuat dari bahan berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to={"/produk/MarmerPVC"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgWallfoam} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Wallfoam</h5>
            <p>
              Wallfoam dibuat dari bahan berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to={"/produk/Wallfoam"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgWallpaper} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Wallpaper</h5>
            <p>
              Wallpaper dibuat dari bahan berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to={"/produk/Wallpaper"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgEdging} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Edging</h5>
            <p>
              Edging dibuat dari bahan berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya.
            </p>
            <Link to="/produk/Edging" className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
