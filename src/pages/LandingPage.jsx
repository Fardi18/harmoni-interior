import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import iconImage from "../assets/icon-image.jpg";
import iconTime from "../assets/icon-time.jpg";
import iconShield from "../assets/icon-shield.jpg";
import imgPlafon from "../assets/plafon.jpg";

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
                memungkinkan Anda memasangnya dengan cepat dan mudah tanpa perlu
                keterampilan khusus. Ini menghemat waktu dan biaya instalasi,
                sehingga menjadi pilihan yang praktis untuk meningkatkan
                interior ruangan.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="list-keunggulan text-center">
              <img src={iconShield} alt="" />
              <h5>Daya Tahan & Perawatan Mudah</h5>
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
            <img src={imgPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Plafon PVC</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya
            </p>
            <Link to={"/"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>WPC</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya
            </p>
            <Link to={"/"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Lis Plafon</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya
            </p>
            <Link to={"/"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Lantai Vinyl</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya
            </p>
            <Link to={"/"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Marmer PVC</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya
            </p>
            <Link to={"/"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Wallfoam</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya
            </p>
            <Link to={"/"} className="button">
              Lihat Daftar Produk
            </Link>
          </div>
        </div>
        <div className="list-katalog row gx-lg-5 d-flex align-items-center">
          <div className="col-lg-6 mb-3">
            <img src={imgPlafon} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5>Wallpaper</h5>
            <p>
              Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti
              rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
              pemasangan dan perawatannya
            </p>
            <Link to={"/"} className="button">
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
