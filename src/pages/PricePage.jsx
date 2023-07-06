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
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Lama</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Air & Kelembaban</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Mudah di pasang</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Banyak pilihan motif</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Ringan</p>
                </div>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-coksu">
              <div className="text-center text-white nama">
                <h3>WPC</h3>
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits text-white">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Lama</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Anti Rayap</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tampilan Kayu Alami</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Mudah Untuk Perawatan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Ramah Lingkungan</p>
                </div>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>List Plafon</h3>
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Mudah di pasang</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Berbagai Pilihan Motif</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Memberi Tampilan Astetis</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Bahan Berkuwalitas </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Berbagai Pilihan Bentuk</p>
                </div>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Lantai Vinyl</h3>
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Goresan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Mudah di pasang</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Lama</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Berbagai Pilihan Design</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tekstur Yang Nyaman</p>
                </div>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-coksu">
              <div className="text-center text-white nama">
                <h3>Marmer PVC</h3>
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits text-white">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Goresan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Design Yang Elegan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Menambah Nilai Ruangan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Mudah di bersihkan</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tampilan Elegan & Astetic</p>
                </div>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Wallfoam</h3>
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Tahan Api</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Berbagai Pilihan Design</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Meredamkan Suhu</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Mudah Digunakan</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Mampu Menyekat Suara</p>
                </div>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-putih">
              <div className="text-center nama">
                <h3>Wallpaper</h3>
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Berbagai Pilihan Design</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Mudah di pasang</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Memperindah Ruangan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Memberikesan Astetik  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={iconBuletCoksu} alt="" />
                  <p>Menutupi Cat Yang Rusak</p>
                </div>
              </div>
              <div className="pemesanan">
                <h6 className="text-center">Pemesanan</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-harga-coksu">
              <div className="text-center text-white nama">
                <h3>Edging</h3>
                <p>Harmoni Interior</p>
              </div>
              <div className="benefits text-white">
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Berbagai Macam Bahan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Memberikesan Rapih</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Tahan Gores & Benturan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Mudah Digunakan</p>
                </div>
                <div className="d-flex align-items-center benefits-list">
                  <img src={iconBuletPutih} alt="" />
                  <p>Melindungi Tepi Meja, Dll</p>
                </div>
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
