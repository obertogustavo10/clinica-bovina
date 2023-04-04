import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/IconWhatsapp";
import Banner from "../section/Course/Banner";
import Testimonials from "../section/Course/Testimonials";
import FrequentQuestions from "../section/Course/FrequentQuestions";
import Market from "../section/home/Market";
import Courses from "../section/Course/Courses";

export default function Course() {
  return (
    <>
      <Navbar />
      <Banner />
      <Courses />
      <Testimonials />
      <FrequentQuestions />
      <Footer />
      <WhatsApp />
    </>
  );
}
