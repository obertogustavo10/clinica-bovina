import React from "react";
import styled from "styled-components";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Forms() {
  const StyleSection = styled(Container)`
    border-top: 1px solid grey;
    background-color: #f5f5f4;
    text-align: center;
    height: 100%;
  `;
  const StyleH1 = styled.h2`
    color: #015641;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 700;
  `;
  const StyleDiv = styled.div`
    width: 100%;
  `;
  4894;
  const StyleH3 = styled.h3`
    color: ${(props) =>
      props.variant === "textGreen" ? "#015641" : "#44403c"};
    font-size: 1.5rem;
    line-height: 1.25;
    text-align: left;
    margin-bottom: 30px;
    border-left: 4px solid #87a851;
  `;
  const StyleRow = styled(Row)`
    padding: 50px;
  `;
  const StyleCol = styled(Col)`
    text-align: right;
    @media (max-width: 576px) {
      text-align: center;
    }
  `;
  const StyleFormGroup = styled(Form.Group)`
    text-align: left;
    margin-bottom: ${(props) =>
      props.variant === "paddingBotton" ? "20px" : "20px"};
  `;
  const StyleFormControl = styled(Form.Control)`
    border: 1px solid #87a851;
  `;
  const StyleButton = styled(Button)`
    border: 2px solid #87a851;
    background-color: #015641;
    border-radius: 100px;
    margin-left: 15px;
    &:hover {
      border: 2px solid #015641;
      background-color: #87a851;
      border-radius: 100px;
    }
  `;
  return (
    <StyleSection fluid>
      <Form>
        <StyleRow>
          <StyleH3 variant="textGreen">Formulario de Contacto</StyleH3>
          <Col xs={12} md={6} lg={6}>
            <StyleFormGroup>
              <Form.Label>Nombres</Form.Label>
              <StyleFormControl type="text" placeholder="nombre" />
            </StyleFormGroup>
            <StyleFormGroup>
              <Form.Label>Apellidos</Form.Label>
              <StyleFormControl type="text" placeholder="Apellido" />
            </StyleFormGroup>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <StyleFormGroup>
              <Form.Label>Correo electronico</Form.Label>
              <StyleFormControl type="email" placeholder="name@example.com" />
            </StyleFormGroup>
            <StyleFormGroup>
              <Form.Label>Telefono</Form.Label>
              <StyleFormControl type="phone" placeholder="04245631229" />
            </StyleFormGroup>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <StyleFormGroup variant="paddingBotton">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </StyleFormGroup>
          </Col>

          <Row>
            <StyleCol xs={12} md={12} lg={12}>
              <StyleButton>Enviar</StyleButton>
              <StyleButton>Limpiar</StyleButton>
            </StyleCol>
          </Row>
        </StyleRow>
      </Form>
      <StyleRow>
        <StyleH3>Nuestra Oficina</StyleH3>
        <Col xs={12} md={12} lg={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21590.543173684822!2d-69.27200402416653!3d10.05449165025804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875d91303bec0d%3A0xfe282ef7fda53d37!2sSantuario%20de%20la%20Divina%20Pastora.!5e0!3m2!1ses-419!2sar!4v1678838668763!5m2!1ses-419!2sar"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </StyleRow>
    </StyleSection>
  );
}
