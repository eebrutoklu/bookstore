import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* nested route */}
        <Route path="categories" element={<Categories />}>
          <Route path="romance" element={<h1>Romance</h1>} />
          <Route path="fantasy" element={<h1>Fantasy</h1>} />
          <Route path="biography" element={<h1>Biography</h1>} />
          <Route path="children" element={<h1>Children's</h1>} />
          <Route path="fiction" element={<h1>Fiction</h1>} />
        </Route>
        {/* undined route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
