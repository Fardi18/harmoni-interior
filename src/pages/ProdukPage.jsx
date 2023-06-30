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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, cum!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  veniam.
                </p>
                <Link href="#" class="card-link">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Lis Plafon</h5>
                <p class="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsa, iusto?
                </p>
                <Link href="#" class="card-link">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque, error!
                </p>
                <Link href="#" class="card-link">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, dolor?
                </p>
                <Link href="#" class="card-link">
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore, itaque.
                </p>
                <Link href="#" class="card-link">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, doloribus?
                </p>
                <Link href="#" class="card-link">
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
