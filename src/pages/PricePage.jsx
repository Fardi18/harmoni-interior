import "./Pages.css";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import iconBuletCoksu from "../assets/icon-bulat-coksu.jpg";
import iconBuletPutih from "../assets/icon-bulat-putih.png";

const PricePage = () => {
  return (
    <>
      <Navbar />
      <Intro heading={"Daftar Harga Produk"} />
      <div className="container harga">
        <div className="row">
          <div className="col">
            <h2 className="text-center">
              Daftar Harga Produk <br /> Harmoni Interior
            </h2>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Plafon PVC</h3>
                <p>Polivinil Clorida</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
              </div>
              <div className="total">
                <h6 className="text-center">Rp50.000/meter</h6>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-coksu">
              <div className="text-center text-white nama">
                <h3>Plafon PVC</h3>
                <p>Polivinil Clorida</p>
              </div>
              <div className="benefits text-white">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
              </div>
              <div className="total">
                <h6 className="text-center text-white">Rp50.000/meter</h6>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Plafon PVC</h3>
                <p>Polivinil Clorida</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
              </div>
              <div className="total">
                <h6 className="text-center">Rp50.000/meter</h6>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Plafon PVC</h3>
                <p>Polivinil Clorida</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
              </div>
              <div className="total">
                <h6 className="text-center">Rp50.000/meter</h6>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-coksu">
              <div className="text-center text-white nama">
                <h3>Plafon PVC</h3>
                <p>Polivinil Clorida</p>
              </div>
              <div className="benefits text-white">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Api</p>
                </div>
              </div>
              <div className="total">
                <h6 className="text-center text-white">Rp50.000/meter</h6>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Plafon PVC</h3>
                <p>Polivinil Clorida</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
              </div>
              <div className="total">
                <h6 className="text-center">Rp50.000/meter</h6>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Plafon PVC</h3>
                <p>Polivinil Clorida</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
              </div>
              <div className="total">
                <h6 className="text-center">Rp50.000/meter</h6>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricePage;
