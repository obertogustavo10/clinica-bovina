import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import data from "../../../data.json";
import Accordion from "../../components/Accordion";
import { motion } from "framer-motion";
export default function FrequentQuestions({ about }) {
  // Style Components
  //crema #f5f1e9 rgba(245, 241, 233, 0.5)
  //verde #015641 rgba(1, 86, 65, 0.5)
  //verdeClaro #87a851 rgba(135, 168, 81, 0.5)
  const StyleSection = styled(Container)`
    background-color: #f5f5f4;
    padding: 100px;
    @media (max-width: 576px) {
      padding: 30px;
    }
  `;
  const StyleH1 = styled.h1`
    color: #44403c;
    font-size: 2rem;
    line-height: 1.35;
    font-weight: 700;
    border-left: 4px solid #87a851;
    padding-left: 10px;
  `;
  const StyleH4 = styled.h4`
    font-size: 2rem;
    line-height: 1.35;
    font-weight: 700;
    margin-bottom: 20px;
  `;
  const StyleP = styled.p`
    font-family: Inter, sans-serif;
    color: #79716b;
    font-size: 1rem;
    line-height: 1.5;
  `;
  const StyleCol = styled(Col)`
    margin-bottom: 50px;
    @media (max-width: 576px) {
      margin-bottom: 10px;
    }
  `;
  //animaciones
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
        <StyleCol xs={12} md={12} lg={12}>
          <StyleH1 as={motion.h1} variants={textAnimateLeft}>
            Sobre el Curso
          </StyleH1>
        </StyleCol>
        <Col
          as={motion.div}
          variants={textAnimateRight}
          xs={12}
          md={12}
          lg={12}
        >
          {about.map((datos, i) => (
            <Accordion
              key={i}
              id={datos.id}
              description={datos.text}
              title={datos.title}
              url={datos.url}
              description1={datos.text1}
              description2={datos.text2}
            />
          ))}
        </Col>
      </Row>
    </StyleSection>
  );
}
