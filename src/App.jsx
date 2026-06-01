/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNabar";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import ContactUs from "./pages/ContactUs";
import Policy from "./pages/Policy";
import TermsPage from "./pages/TermsPage";

import ServicePage from "./pages/Services/ServicePage";
import Accounting from "./pages/Services/Accounting";
import Compliance from "./pages/Services/Compliance";
import Incorporation from "./pages/Services/Incorporation";
import Legal from "./pages/Services/Legal";
import Liaisoning from "./pages/Services/Liaisoning";
import Secretarial from "./pages/Services/Secretarial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<BlogPage />} />
        <Route path="/news/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms" element={<TermsPage />} />

        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/compliance" element={<Compliance />} />
        <Route path="/services/incorporation" element={<Incorporation />} />
        <Route path="/services/legal" element={<Legal />} />
        <Route path="/services/liaisoning" element={<Liaisoning />} />
        <Route path="/services/secretarial" element={<Secretarial />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
