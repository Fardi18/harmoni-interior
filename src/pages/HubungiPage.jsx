import React from "react";
import "./Pages.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const HubungiPage = () => {
  return (
    <>
      <Navbar />
      <div className="hubungi-kami container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Hubungi Kami</h1>
            <p className="text-center my-5">
              Silahkan hubungi kontak di bawah ini untuk melakukan transaksi
              atau konsultasi
            </p>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-1 g-4">
          <div className="col phone">
            <button
              type="button"
              className="btn btn-lg btn-success rounded-5 d-flex align-items-center w-100"
            >
              <span className="bg-light ms-2 d-flex rounded-5 align-items-center justify-content-center">
                <i className="fa-brands fa-whatsapp text-success"></i>
              </span>
              <ReactWhatsapp
                className="btn fw-semibold text-white"
                number="+6288211148998"
                message="Saya ingi memesan ..."
              >
                Marketing 1
              </ReactWhatsapp>
            </button>
          </div>
          <div className="col phone">
            <button
              type="button"
              className="btn btn-lg btn-success rounded-5 d-flex align-items-center w-100"
            >
              <span className="bg-light ms-2 d-flex rounded-5 align-items-center justify-content-center">
                <i className="fa-brands fa-whatsapp text-success"></i>
              </span>
              <ReactWhatsapp
                className="btn fw-semibold text-white"
                number="+6283827637634"
                message="Saya ingi memesan ..."
              >
                Marketing 2
              </ReactWhatsapp>
            </button>
          </div>
          <div className="col phone">
            <button
              type="button"
              className="btn btn-lg btn-success rounded-5 d-flex align-items-center w-100"
            >
              <span className="bg-light ms-2 d-flex rounded-5 align-items-center justify-content-center">
                <i className="fa-brands fa-whatsapp text-success"></i>
              </span>
              <ReactWhatsapp
                className="btn fw-semibold text-white"
                number="+62895324122257"
                message="Saya ingi memesan ..."
              >
                Marketing 3
              </ReactWhatsapp>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HubungiPage;
