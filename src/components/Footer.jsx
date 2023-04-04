import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import BrandImg from "../assets/logo1.png";

export default function Footer() {
  const StyleLink = styled(Link)`
    color: black;
    font-weight: bold;
    font-family: cursive;
    text-decoration: none;
    border-radius: 100px;
    &:hover {
      color: #87a851;
      border-radius: 100px;
    }
  `;
  const StyleSection = styled(Row)`
    height: 6rem;
    padding-top: 0.8rem;
    @media (max-width: 576px) {
    }
  `;
  const StyleRow = styled(Row)`
    border-top: 1px solid #d0d0d0;
    background: #f5f5f4;
    padding: 20px;
  `;
  const StyleP = styled.p`
    color: #a9a29d;
    font-size: 0.875rem;
  `;
  const StyleCol = styled(Col)`
    color: #a9a29d;
    font-size: 0.875rem;
  `;
  const StyleA = styled.a`
    color: #fff;
    text-decoration: none;
    background-color: #015641;
    font-size: 18px;
    display: inline-block;
    color: #fff;
    line-height: 1;
    padding: 8px 8px;
    margin-right: 15px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    &:hover {
      background-color: #14ae87;
      color: #fff;
    }
  `;
  const StyleImg = styled.img`
    width: 70px;
    text-align: center;
  `;

  return (
    <Container fluid>
      <StyleSection className="justify-content-center">
        <Col xs={4} md={6} lg={6}>
          <StyleImg src={BrandImg} />
        </Col>
        <Col xs={8} md={4} lg={4}>
          <p>Nuestras Redes</p>
          <StyleA href="http://">
            <BsFacebook />
          </StyleA>
          <StyleA href="http://">
            <BsTwitter />
          </StyleA>
          <StyleA href="http://">
            <BsInstagram />
          </StyleA>
          <StyleA href="http://">
            <BsWhatsapp />
          </StyleA>
        </Col>
      </StyleSection>
      <StyleRow>
        <StyleCol xs={12} md={9} lg={9}>
          Clinica Bovina © 2023. Todos los derechos reservados.
        </StyleCol>
        <StyleCol xs={12} md={3} lg={3}>
          Desarrollado por <StyleLink to="/">TIM APP</StyleLink>
        </StyleCol>
      </StyleRow>
    </Container>
  );
}
