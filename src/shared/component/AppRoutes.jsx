import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scroll-to-top";
import AboutUs from "./footer/about-us";
import ContactUs from "./footer/contact-us";
import Landing from "./landing";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="contactUs" element={<ContactUs />}></Route>
        <Route path="aboutUs" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
