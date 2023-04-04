import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import ButtonRow from "../../components/ButtonRow";
import { motion } from "framer-motion";

export default function Contacto() {
  const StyleSection = styled(Container)`
    /*     border-top: 1px solid grey;
    background-color: #f5f5f4;
    text-align: center;
    height: 100%; */
    background-color: #015641;
    background-image: url("https://uploads-ssl.webflow.com/63576df30b897b865756b4a3/63610153798bc245970747f0_lines-overlay.svg");
    background-position: 100% 100%;
    text-align: center;
    background-repeat: no-repeat;
  `;
  const StyleH1 = styled.h2`
    color: #f5f5f4;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 700;
  `;
  const StyleH4 = styled.h4`
    padding: 0.125rem 0.25rem;
    border-radius: 50px;
    background-color: #f5f5f4;
    color: #79716b;
    font-size: 0.75rem;
    line-height: 1.2;
  `;
  const StyleP = styled.p`
    color: #f5f5f4;
    font-size: 1.3rem;
    line-height: 1.25;
  `;
  const StyleCol = styled(Col)`
    padding: 20px;
  `;
  const StyleCola = styled(Col)`
    margin-top: 60px;
  `;
  /* Animations */
  const textAnimateLeft = {
    offscreen: { x: -90, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        fade: 0.4,
        duration: 2,
      },
    },
  };
  const textAnimateRight = {
    offscreen: { x: 90, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        fade: 0.4,
        duration: 2,
      },
    },
  };
  return (
    <StyleSection fluid>
      <Row
        as={motion.div}
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <StyleCola xs={12} md={4} lg={4}>
          <motion.div as={motion.h2} variants={textAnimateLeft}>
            <ButtonRow text="Mas Información" to="/contacto"></ButtonRow>
          </motion.div>
        </StyleCola>
        <StyleCol xs={12} md={4} lg={8}>
          <StyleP as={motion.p} variants={textAnimateRight}>
            ¿Quieres más Información?
          </StyleP>
          <StyleH1 as={motion.h2} variants={textAnimateRight}>
            Contactanos
          </StyleH1>
        </StyleCol>
      </Row>
    </StyleSection>
  );
}
