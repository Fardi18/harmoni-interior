import React from "react";
import "./Pages.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import ProductListPlafon from "../components/ProductListPlafon";

const ListPlafonPage = () => {
  // download function
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1iHSi5GEv0JoMM8ofFz7wtmJNYZy0G_Yd/view?usp=sharing";
    const fileName = "harmoni-interior-plafon-pvc.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  return (
    <>
      <Navbar />
      <Intro heading={"List Plafon"} />
      <div className="container description">
        <div className="row description-product">
          <div className="col col-lg-8">
            <h2>Plafon Harmoni Interior</h2>
            <p>
              List Plafon memiliki banyak sekali keunggulan seperti tahan api,
              dapat meredam panas, anti rayap dan anti bocor dan yang paling
              penting adalah harga yang terjangkau dan ekonomis tetapi memiliki
              kualitas yang baik. Berikut adalah daftar{" "}
              <b>List Plafon Harmoni Interior</b>
            </p>
          </div>
        </div>
        <div className="row list-product">
          <div className="col a">
            <ProductListPlafon />
          </div>
        </div>
        <div className="row download">
          <div className="col">
            <p className="text-center">
              Untuk melihat lebih lanjut tentang produk{" "}
              <strong>List Plafon Harmoni Interior</strong> <br />
              silahkan download file dibawah ini:
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button onClick={handleDownload} className="btnDwonload">
                Katalog List Plafon
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ListPlafonPage;
