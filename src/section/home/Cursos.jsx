import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import ButtonRow from "../../components/ButtonRow";
import CardInfo from "../../components/CardInfo";
import Img from "../../assets/vaca_24.jpg";
import Img1 from "../../assets/vaca_27.jpg";
import Img2 from "../../assets/vaca_26.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import Wave from "../../assets/wave6.svg";

export default function Cusos() {
  const StyleSection = styled(Container)`
    border-bottom: 1px solid #87a851;
    background-size: cover;
    text-align: left;
    height: 100%;
    @media (max-width: 576px) {
      height: 88rem;
      padding: 30px;
    }
  `;
  const StyleH1 = styled.h2`
    color: #44403c;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 700;
    border-left: 4px solid #87a851;
    padding-left: 10px;
    @media (max-width: 576px) {
      font-size: 2.5rem;
    }
  `;
  const StyleH4 = styled.h4`
    padding: 0.125rem 0.25rem;
    border-radius: 50px;
    background-color: #f5f5f4;
    color: #79716b;
    font-size: 0.75rem;
    line-height: 1.2;
  `;
  const StyleH3 = styled.h3`
    color: ${(props) =>
      props.variant === "textGreen" ? "#015641" : "#44403c"};
    font-size: 1.5rem;
    line-height: 1.25;
    text-align: left;
    margin-bottom: 30px;
    border-left: 4px solid #87a851;
  `;
  const StyleP = styled.p`
    color: #44403c;
    font-size: 1.3rem;
    line-height: 1.25;
  `;
  const StyleCol = styled(Col)`
    margin-top: 60px;
  `;
  const StyleCola = styled(Col)`
    margin-top: 40px;
    margin-bottom: 60px;
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
    <StyleSection style={{ backgroundImage: `url(${Wave})` }} fluid>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Row>
          <StyleCol xs={12} md={4} lg={5}>
            <StyleH1 as={motion.h2} variants={textAnimateLeft}>
              Capacitaciones <FaGraduationCap />
            </StyleH1>
          </StyleCol>
        </Row>
        <Row className="justify-content-end">
          <Col
            as={motion.div}
            variants={textAnimateRight}
            xs={12}
            md={4}
            lg={3}
          >
            <CardInfo
              img={Img}
              title="Gestión de Agronegocios"
              text="POSTGRADUACIÓN"
              modalidad="On Line"
            ></CardInfo>
          </Col>
          <Col
            as={motion.div}
            variants={textAnimateRight}
            xs={12}
            md={4}
            lg={3}
          >
            <CardInfo
              img={Img1}
              title="Producción de Ganado Vacuno"
              text="POSTGRADUACIÓN"
              modalidad="Hibrido"
            ></CardInfo>
          </Col>
          <Col
            as={motion.div}
            variants={textAnimateRight}
            xs={12}
            md={4}
            lg={3}
          >
            <CardInfo
              img={Img2}
              title="Vacunación Eficiente"
              text="POSTGRADUACIÓN"
              modalidad="Presencial"
            ></CardInfo>
          </Col>
          <StyleCola
            as={motion.div}
            variants={textAnimateLeft}
            xs={12}
            md={12}
            lg={12}
          >
            <ButtonRow text="Ver todos los cursos" to="/cursos"></ButtonRow>
          </StyleCola>
        </Row>
      </motion.div>
    </StyleSection>
  );
}
