import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { BsGeoAlt, BsTelephoneInbound, BsEnvelope } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Info() {
  const StyleSection = styled(Container)`
    border-top: 1px solid grey;
    background-color: #f5f1e9;
    text-align: center;
    height: 100%;
  `;
  const StyleH1 = styled.h2`
    color: #015641;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 700;
  `;
  const StyleIcon = styled.div`
    font-size: 30px;
    color: #87a851;
    margin-bottom: 15px;
  `;
  const StyleP = styled.p`
    color: #015641;
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
      <Row>
        <Col xs={12} md={4} lg={4}>
          <StyleIcon>
            <BsTelephoneInbound />
          </StyleIcon>
          <p>+58 424-5631229</p>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <StyleIcon>
            <BsEnvelope />
          </StyleIcon>

          <p>mvjuangutierrez@gmail.com</p>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <StyleIcon>
            <BsGeoAlt />
          </StyleIcon>

          <p>Fundalara calle bolivar, local 69, baquisimeto-venezuela</p>
        </Col>
      </Row>
    </StyleSection>
  );
}
