import React from "react";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import PlafonPVCPage from "./pages/PlafonPVCPage";
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
      </Routes>
    </>
  );
}

export default App;
