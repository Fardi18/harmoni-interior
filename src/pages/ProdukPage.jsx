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
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Plafon PVC</h5>
                <p class="card-text">
                Plafon dibuat dari bahan PVC berkualitas tinggi, tahan air, anti rayap, tidak merambat api,
                mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/plafonpvc" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">WPC</h5>
                <p class="card-text">
                Wpc dibuat dari bahan berkualitas tinggi, tahan air, anti rayap, tidak merambat api, 
                mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/plafonWPC" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">List Plafon</h5>
                <p class="card-text">
                  List Plafon dibuat dari bahan berkualitas tinggi, tahan air, anti rayap, tidak merambat api,
                  mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/ListPlafon" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Lantai Vinyl</h5>
                <p class="card-text">
                Lantai Vinyl dibuat dari bahan berkualitas tinggi, tahan air, anti rayap, tidak merambat api,
                mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/LantaiVinyl" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Marmer PVC</h5>
                <p class="card-text">
                Marmer PVC terbuat dari bahan berkualitas tinggi, tahan air, anti rayap, tidak merambat api,
                mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/MarmerPVC" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Wallfoam</h5>
                <p class="card-text">
                Wallfoam dibuat dari bahan berkualitas tinggi, tahan air, anti rayap, tidak merambat api,
                mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/Wallfoam" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Wallpaper</h5>
                <p class="card-text">
                Wallpaper dibuat dari bahan berkualitas tinggi, tahan air, anti rayap, tidak merambat api,
                mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/Wallpaper" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
            </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Edging</h5>
                <p class="card-text">
                  Edging dibuat dari bahan berkualitas tinggi, tahan air, anti rayap, tidak merambat api,
                  mudah dibersihkan dan gampang dalam pemasangan dan perawatannya.
                </p>
                <Link to="/produk/Edging" class="card-link">
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
