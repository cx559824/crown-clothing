import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Hatspage from "./pages/hatspage/hatspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
