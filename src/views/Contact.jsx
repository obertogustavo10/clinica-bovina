import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/IconWhatsapp";
import Form from "../section/Contacto/Form";
import Banner from "../section/Contacto/Banner";
import Info from "../section/Contacto/Info";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Banner />
      <Form />
      <Info />
      <Footer />
      <WhatsApp />
    </>
  );
}
