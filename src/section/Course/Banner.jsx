import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Banner() {
  const StyleSection = styled(Container)`
    background-color: #f5f1e9;
  `;
  const StyleH1 = styled.h1`
    color: #44403c;
    font-size: 60px;
    line-height: 1.35;
    font-weight: 700;
    @media (max-width: 576px) {
      font-size: 1.3rem;
    }
  `;
  const StyleP1 = styled.p`
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  `;
  const StyleP = styled.p`
    color: #87a851;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
  `;
  const StyleRow = styled(Row)`
    text-align: center;
    padding: 200px;
    @media (max-width: 576px) {
      padding: 20px;
    }
  `;
  const StyleCol = styled.div`
    width: 100%;
    max-width: 48rem;
    text-align: center;
  `;
  /* Animations */
  const textAnimateTop = {
    offscreen: { y: -90, opacity: 0 },
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
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <StyleRow as={motion.div} variants={textAnimateTop}>
          <Col xs={12} md={12} lg={12}>
            <StyleP>¡Bienvenido!</StyleP>
            <StyleH1>
              Unete a nuestra comunidad de aprendizaje online y en vivo para
              potenciar tu conocimineto.
            </StyleH1>
            <StyleP1>
              Clases online en vivo dictadas por expertos de la industria,
              enfoque 100% práctico, mentorías personalizadas y acceso a una
              comunidad de +4500 estudiantes.
            </StyleP1>
            <StyleP>#ModoAprendizaje</StyleP>
          </Col>
        </StyleRow>
      </motion.div>
    </StyleSection>
  );
}
