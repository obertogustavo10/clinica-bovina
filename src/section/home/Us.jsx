import React from "react";
import Vete from "../../assets/vete1.jpg";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import ButtonRow from "../../components/ButtonRow";
import { motion } from "framer-motion";

export default function us() {
  const StyleSection = styled(Container)`
    background: #fff;
    height: auto;
    text-align: left;
    @media (max-width: 576px) {
      height: 47rem;
    }
  `;
  const StyleImage = styled.img`
    border-bottom-right-radius: 20%;
  `;
  const StyleH1 = styled.h2`
    color: #44403c;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 700;
  `;
  const StyleP = styled.p`
    color: #44403c;
    font-size: 1rem;
    line-height: 1.25;
    margin-bottom: 40px;
    margin-top: 30px;
    font-family: Inter, sans-serif;
  `;
  const StyleCol = styled(Col)`
    margin-top: 70px;
    @media (max-width: 576px) {
      margin-top: 40px;
    }
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
  const textAnimateBotton = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
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
        <Col xs={12} md={8} lg={8}>
          <StyleImage className="img-fluid" src={Vete} alt="" />
        </Col>
        <StyleCol xs={12} md={4} lg={4}>
          <StyleH1 as={motion.h2} variants={textAnimateLeft}>
            Sobre
          </StyleH1>
          <StyleH1 as={motion.h2} variants={textAnimateRight}>
            Clinica Bovina
          </StyleH1>
          <StyleP as={motion.h2} variants={textAnimateBotton}>
            Contamos con mas de 10 años de experiencia en consultoría y docencia
            100% especializada en agronegocios. Ya formamos más de 3000 alumnos
            en toda Venezuela y hoy atendemos a más de 35 haciendas, totalizando
            una producción de más de 1 millón de litros de leche por día,
            415.000 cabezas de ganado vacuno.
          </StyleP>
          <motion.div as={motion.h2} variants={textAnimateLeft}>
            <ButtonRow text="saber mas" to="/clinica-bovina" />
          </motion.div>
        </StyleCol>
      </Row>
    </StyleSection>
  );
}
