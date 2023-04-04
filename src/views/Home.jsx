import React from "react";
import Navbar from "../components/Navbar";
import CarouselMain from "../components/CarouselMain";
import Us from "../section/home/Us";
import Market from "../section/home/Market";
import Cursos from "../section/home/Cursos";
import Footer from "../components/Footer";
import Contacto from "../section/home/Contacto";
import WhatsApp from "../components/IconWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <CarouselMain />
      <Us />
      <Cursos />
      <Contacto />
      <Market />
      <WhatsApp />
      <Footer />
    </>
  );
}
