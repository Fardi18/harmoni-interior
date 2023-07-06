import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProdukPage = () => {
  return (
    <>
      <Navbar />
      <Intro heading={"Daftar Produk"} />
      <div className="product container">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Daftar Produk di Harmoni Interior</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Plafon PVC</h5>
                <p className="card-text">
                  Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air,
                  anti rayap, tidak merambat api, mudah dibersihkan dan gampang
                  dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/plafonpvc" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">WPC</h5>
                <p className="card-text">
                  Wpc dibuat dari bahan berkualitas tinggi, tahan air, anti
                  rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
                  pemasangan dan perawatannya.
                </p>
                <Link to="/produk/plafonWPC" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">List Plafon</h5>
                <p className="card-text">
                  List Plafon dibuat dari bahan berkualitas tinggi, tahan air,
                  anti rayap, tidak merambat api, mudah dibersihkan dan gampang
                  dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/ListPlafon" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lantai Vinyl</h5>
                <p className="card-text">
                  Lantai Vinyl dibuat dari bahan berkualitas tinggi, tahan air,
                  anti rayap, tidak merambat api, mudah dibersihkan dan gampang
                  dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/LantaiVinyl" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Marmer PVC</h5>
                <p className="card-text">
                  Marmer PVC terbuat dari bahan berkualitas tinggi, tahan air,
                  anti rayap, tidak merambat api, mudah dibersihkan dan gampang
                  dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/MarmerPVC" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wallfoam</h5>
                <p className="card-text">
                  Wallfoam dibuat dari bahan berkualitas tinggi, tahan air, anti
                  rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
                  pemasangan dan perawatannya.
                </p>
                <Link to="/produk/Wallfoam" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wallpaper</h5>
                <p className="card-text">
                  Wallpaper dibuat dari bahan berkualitas tinggi, tahan air,
                  anti rayap, tidak merambat api, mudah dibersihkan dan gampang
                  dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/Wallpaper" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Edging</h5>
                <p className="card-text">
                  Edging dibuat dari bahan berkualitas tinggi, tahan air, anti
                  rayap, tidak merambat api, mudah dibersihkan dan gampang dalam
                  pemasangan dan perawatannya.
                </p>
                <Link to="/produk/Edging" className="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProdukPage;
