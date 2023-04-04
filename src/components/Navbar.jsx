import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";
import NavbLink from "./NavbLink";
import BrandImg from "../assets/logo.png";

function CollapsibleExample() {
  // Style Components
  //crema #f5f1e9 rgba(245, 241, 233, 0.5)
  //verde #015641 rgba(1, 86, 65, 0.5)
  //verdeClaro #87a851 rgba(135, 168, 81, 0.5)
  const StyleLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    padding: 7px;

    &:hover {
      background-color: rgba(245, 241, 233, 0.8);
      border-radius: 100px;
      color: black;
    }
  `;
  const StyleImg = styled.img`
    width: 40px;
  `;
  const StyleNavbar = styled(Navbar)`
    background-color: #015641;
    box-shadow: 0px 100px 100px 0px rgba(3, 96, 1, 0.1);
    position: sticky;
  `;
  const StyleNavbarBrand = styled(Navbar.Brand)`
    color: #ffffff;
    font-size: 14px;
    pointer-events: none;
  `;
  const StyleNavbarToggle = styled(Navbar.Toggle)`
    border-color: black;
    background-color: #fff;
  `;
  const StyleButton = styled(Button)`
    color: black;
    background-color: rgba(245, 241, 233, 0.8);
    border-radius: 100px;
    border-color: #fff;
    &:hover {
      background-color: #fff;
      border-radius: 100px;
      color: black;
    }
  `;
  const name = "inicio";
  return (
    <StyleNavbar collapseOnSelect expand="lg">
      <Container>
        <StyleNavbarBrand>
          {" "}
          <StyleImg src={BrandImg} /> CLINICA BOVINA
        </StyleNavbarBrand>
        <StyleNavbarToggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
            <NavbLink path="Inicio" to="/"></NavbLink>
            <StyleLink to="/clinica-bovina">Quienes Somos</StyleLink>
            <StyleLink to="/cursos">Cursos</StyleLink>
            <StyleLink to="#">Ecommerce</StyleLink>
            <StyleLink to="/contacto">Contacto</StyleLink>
          </Nav>
          <Nav>
            <StyleLink to="#">Ingresar</StyleLink>
            <StyleButton>Registrarse</StyleButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyleNavbar>
  );
}

export default CollapsibleExample;
