import React from "react";
import "./Pages.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import ProductLantaiVinyl from "../components/ProductLantaiVinyl";

const LantaiVinylPage = () => {
  // download function
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1KkXU2_ydtP7ZtsuMng-AVHuxWt1iq6LE/view?usp=sharing";
    const fileName = "harmoni-interior-plafon-pvc.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  return (
    <>
      <Navbar />
      <Intro heading={"Lantai Vinyl"} />
      <div className="container description">
        <div className="row description-product">
          <div className="col col-lg-8">
            <h2>Lantai Vinyl Harmoni Interior</h2>
            <p>
              Lantai Vinyl memiliki banyak sekali keunggulan seperti tahan api,
              dapat meredam panas, anti rayap dan anti bocor dan yang paling
              penting adalah harga yang terjangkau dan ekonomis tetapi memiliki
              kualitas yang baik. Berikut adalah daftar{" "}
              <b>Lantai Vinyl Harmoni Interior</b>
            </p>
          </div>
        </div>
        <div className="row list-product">
          <div className="col a">
            <ProductLantaiVinyl />
          </div>
        </div>
        <div className="row download">
          <div className="col">
            <p className="text-center">
              Untuk melihat lebih lanjut tentang produk{" "}
              <strong>Lantai Vinyl Harmoni Interior</strong> <br />
              silahkan download file dibawah ini:
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button onClick={handleDownload} className="btnDwonload">
                Katalog Lantai Vinyl
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LantaiVinylPage;
