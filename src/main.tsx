//react-libs
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//styles
import "./index.css";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import PageHome from "./pages/pageHome";
import PageProducts from "./pages/pageProducts";
import PageContact from "./pages/pageContact";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//components
import Header from "./components/header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/products" element={<PageProducts />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
