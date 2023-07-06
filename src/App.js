import React from "react";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import PlafonPVCPage from "./pages/PlafonPVCPage";
import PlafonWPCPage from "./pages/PlafonWPCPage";
import ListPlafonPage from "./pages/ListPlafonPage";
import LantaiVinylPage from "./pages/LantaiVinylPage";
import MarmerPVCPage from "./pages/MarmerPVCPage";
import WallfoamPage from "./pages/WallfoamPage";
import WallpaperPage from "./pages/WallpaperPage";
import EdgingPage from "./pages/EdgingPage";
import ProdukPage from "./pages/ProdukPage";
import PricePage from "./pages/PricePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/harga" element={<PricePage />} />
        <Route path="/produk/plafonpvc" element={<PlafonPVCPage />} />
        <Route path="/produk/plafonWPC" element={<PlafonWPCPage />} />
        <Route path="/produk/ListPlafon" element={<ListPlafonPage />} />
        <Route path="/produk/LantaiVinyl" element={<LantaiVinylPage />} />
        <Route path="/produk/MarmerPVC" element={<MarmerPVCPage />} />
        <Route path="/produk/Wallfoam" element={<WallfoamPage />} />
        <Route path="/produk/Wallpaper" element={<WallpaperPage />} />
        <Route path="/produk/Edging" element={<EdgingPage />} />
      </Routes>
    </>
  );
}

export default App;
