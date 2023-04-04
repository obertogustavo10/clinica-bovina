import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../section/us/Banner";
import Skills from "../section/us/Skills";
import Mision from "../section/us/Mision";
export default function Us() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Mision />
      <Footer />
    </>
  );
}
