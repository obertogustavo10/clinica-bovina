import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import data from "../../../data.json";
import Img from "../../assets/skills.png";
import Img1 from "../../assets/skills.jpg";
export default function Mision() {
  const [api, setApi] = React.useState([]);

  const StyleSection = styled(Container)`
    background-color: #015641;
    text-align: left;
  `;
  const StyleH1 = styled.h1`
    color: ${(props) =>
      props.variant === "whiteText" ? "#f5f5f4" : "#015641"};
    font-size: 2rem;
    line-height: 1.35;
    font-weight: 700;
  `;
  const StylePie = styled.p`
    font-family: cursive;
    color: #87a851;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    text-align: right;
  `;
  const StyleP = styled.p`
    font-family: Inter, sans-serif;
    color: ${(props) =>
      props.variant === "whiteText" ? "#f5f5f4" : "#015641"};
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;
  `;
  const StyleCol = styled(Col)`
    text-align: center;
    padding-top: 4rem;
  `;
  const StyleRow = styled(Row)`
    background-color: ${(props) =>
      props.variant === "grayBackgroud" ? "#f5f5f4" : "#015641"};
    @media (max-width: 576px) {
      ${(props) =>
        props.variant === "grayBackgroud"
          ? "padding-top: 2rem"
          : "padding-bottom: 2rem"};
    }
  `;
  /* Animations */
  const textAnimateLeft = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        fade: 0.4,
        duration: 1,
      },
    },
  };
  const textAnimateRight = {
    offscreen: { x: 50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        fade: 0.4,
        duration: 1,
      },
    },
  };
  React.useEffect(() => {
    setApi(data.skills);
  }, []);
  return (
    <StyleSection fluid>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <StyleRow>
          <StyleCol xs={12} md={6} lg={6}>
            <StyleH1
              variant="whiteText"
              as={motion.h1}
              variants={textAnimateLeft}
            >
              Mision.
            </StyleH1>
            <StyleP
              variant="whiteText"
              as={motion.p}
              variants={textAnimateLeft}
            >
              {" "}
              Nuestro propósito es de prestar con eficacia y categoría el
              servicio de medicina veterinaria preventiva, calidad en producción
              de leche y/o carne, laboratorio clínico y reproducción, en
              rumiantes, brindando de esta manera bienestar al productor y al
              sector donde se desenvuelve; procurando la salud de su rebaño
              aunado a sus conocimientos y esfuerzos desarrollados en sus años
              de experiencia en campo.
            </StyleP>
            <StylePie as={motion.p} variants={textAnimateLeft}>
              Clinica Bovina
            </StylePie>
          </StyleCol>
          <Col xs={12} md={6} lg={6}>
            <motion.img
              variants={textAnimateRight}
              style={{ width: "100%" }}
              className="img-fluid"
              src={Img}
              alt="skills"
            />
          </Col>
        </StyleRow>

        <StyleRow variant="grayBackgroud">
          <Col xs={12} md={6} lg={6}>
            <motion.img
              variants={textAnimateLeft}
              style={{ width: "100%" }}
              className="img-fluid"
              src={Img1}
              alt="skills"
            />
          </Col>
          <StyleCol xs={12} md={6} lg={6}>
            <StyleH1 as={motion.h1} variants={textAnimateRight}>
              Vision.
            </StyleH1>
            <StyleP as={motion.p} variants={textAnimateRight}>
              {" "}
              Prestar un servicio de vanguardia en el campo de la Clínica de
              Rumiantes, orientado el diagnóstico del problema, estando siempre
              actualizados en cuanto a los avances médicos, permitiendo el
              desarrollo intelectual y práctico, brindando el mejor servicio y
              tranquilidad al productor.
            </StyleP>
            <StylePie as={motion.p} variants={textAnimateRight}>
              Clinica Bovina
            </StylePie>
          </StyleCol>
        </StyleRow>
      </motion.div>
    </StyleSection>
  );
}
