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
    font-size: 2rem;
    line-height: 1.35;
    font-weight: 700;
    @media (max-width: 576px) {
      font-size: 1.3rem;
    }
  `;
  const StyleP1 = styled.p`
    font-size: 1.125rem;
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  `;
  const StyleP = styled.p`
    color: #87a851;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
  `;
  const StyleRow = styled(Row)`
    text-align: center;
    padding: 100px;
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
            <StyleP>¡conocenos!</StyleP>
            <StyleH1>
              Hola, somos Clinica Bovina. ¡Una empresa lider en el sector
              agropecuario que transforma a las personas a través del
              conocimiento brindado por Médicos Veterinarios con estudios de
              cuarto nivel!
            </StyleH1>
            <StyleP1>
              Hace 10 años que estamos comprometidos con revolucionar el sector
              agropecuario Venezolano. ¡Somos curiosos, innovadores y
              apasionados por los agronegocios!
            </StyleP1>
          </Col>
        </StyleRow>
      </motion.div>
    </StyleSection>
  );
}
