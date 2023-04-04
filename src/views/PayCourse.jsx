import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/IconWhatsapp";
import FormPay from "../section/payCourse/FormPay";

export default function PayCourse() {
  return (
    <>
      <Navbar />
      <FormPay />
      <Footer />
      <WhatsApp />
    </>
  );
}
