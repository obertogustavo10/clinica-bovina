import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import SlideCard from "../../components/SlideCard";
import ButtonRow from "../../components/ButtonRow";
import { motion } from "framer-motion";
import Wave from "../../assets/wave8.svg";
import { BsFillCartCheckFill } from "react-icons/bs";
export default function Market() {
  const StyleSection = styled(Container)`
    /*  background-color: #87a851;
    background-image: url("https://uploads-ssl.webflow.com/63576df30b897b865756b4a3/63692f74456b373c026da755_bg-lines.svg"); */
    background-size: cover;
    border-bottom: 1px solid #87a851;
    @media (max-width: 576px) {
      height: 42rem;
    }
  `;
  const StyleH1 = styled.h2`
    color: #44403c;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 700;
    padding-right: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: end;
    @media (max-width: 576px) {
      font-size: 2.5rem;
      justify-content: center;
    }
  `;
  const StyleH3 = styled.h3`
    color: #87a851;
    font-size: 1.5rem;
    line-height: 1.25;
    margin-bottom: 40px;
  `;
  const StyleRow = styled(Row)`
    text-align: center;
    margin-top: 55px;
  `;
  const StyleCol = styled(Col)`
    margin-top: 40px;
  `;
  const StyleSpan = styled.span`
    text-align: center;
    justify-content: center;
    display: flex;
    padding-top: 5px;
    padding-right: 10px;
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
    offscreen: { x: 10, opacity: 0 },
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
          <StyleCol xs={12} md={12} lg={12}>
            <StyleH1>
              <StyleSpan>
                <BsFillCartCheckFill />
              </StyleSpan>{" "}
              Ecommerce
            </StyleH1>
          </StyleCol>
        </Row>
        <Row as={motion.div} variants={textAnimateRight}>
          <Col>
            <SlideCard></SlideCard>
          </Col>
          <StyleRow>
            <Col xs={12} md={9} lg={9}>
              <StyleH3>Echa un vistazo a todos nuestros productos</StyleH3>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <ButtonRow text="Ver mas" to="#" />
            </Col>
          </StyleRow>
        </Row>
      </motion.div>
    </StyleSection>
  );
}
