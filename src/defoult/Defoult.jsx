import React from "react";
import Navbar from "../componants/navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function Defoult() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
