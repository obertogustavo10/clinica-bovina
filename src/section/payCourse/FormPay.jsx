import React from "react";
import styled from "styled-components";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  RiRadioButtonLine,
  RiShoppingCart2Line,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import Data from "../../../data.json";

export default function FormPay() {
  const StyleSection = styled(Container)`
    background-color: #f5f5f4;
  `;
  const StyleH1 = styled.h3`
    color: #44403c;
    line-height: 1.35;
    font-weight: 500;
    margin-bottom: 50px;
    @media (max-width: 576px) {
      font-size: 40px;
      margin-bottom: 30px;
    }
  `;
  const StyleP1 = styled.p`
    font-size: ${(props) => (props.variant === "price" ? "1.4rem" : "16px")};
    font-weight: ${(props) => (props.variant === "price" ? "700" : "")}; ;
  `;
  const StyleP = styled.p`
    font-size: ${(props) => (props.variant === "bold" ? "20px" : "15px")};
    color: ${(props) => (props.variant === "bold" ? "#87a851" : "")};
  `;
  const StyleP2 = styled.p`
    font-size: 12px;
    color: #87a851;
    margin-top: 20px;
  `;
  const StyleRow = styled(Row)`
    padding: 20px;
    @media (max-width: 576px) {
      padding: 20px;
    }
  `;
  const StyleButton = styled(Button)`
    margin-top: 25px;
    color: #fff;
    background-color: #87a851;
    border-radius: 100px;
    border-color: #fff;
    font-weight: 600;
    &:hover {
      background-color: #f5f5f4;
      border-radius: 100px;
      color: black;
    }
  `;
  const StyleDiv = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
  `;
  const StyleLink = styled(Link)`
    text-decoration: none;
    color: #87a851;
  `;
  const StyleLabel = styled(Form.Label)`
    margin-top: 10px;
    font-weight: bold;
  `;
  const StyleCard = styled.div`
    background-color: #fff;
    padding: 35px;
  `;
  const StyleDivPrice = styled.div`
    text-align: ${(props) => (props.variant === "left" ? "left" : "right")};
  `;
  const StyleDivHelp = styled.div`
    background-color: #f5f5f4;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
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
  const { cursoId } = useParams();
  //state
  const [provincias, setProvincias] = React.useState([]);
  const [estadoSelect, setEstadoSelect] = React.useState("");
  const [api, setApi] = React.useState({});
  const [validated, setValidated] = React.useState(false);
  const [formulario, setFormulario] = React.useState({
    ciudad: "",
    clave: "",
    direccion: "",
    documento: "",
    email: "",
    estado: "VE-T",
    nameUser: "",
    nombre: "",
    nota: "",
    telefono: "",
  });

  const handleSubmit = (event) => {
    const form = event.target;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    let dataPost = {};
    const fields = Object.fromEntries(new window.FormData(event.target));
    dataPost.formulario = fields;
    dataPost.curso = api;
    console.log(dataPost);

    setValidated(true);
  };

  React.useEffect(() => {
    let estadosLocal = Data;
    console.log(estadosLocal);
    let cursoSeleccionado = estadosLocal.cursos.find(
      (curso) => curso.id === cursoId
    );
    setApi(cursoSeleccionado);
    setProvincias(estadosLocal.estados);
    setEstadoSelect("VE-T");
  }, []);
  return (
    <StyleSection fluid>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <StyleRow>
          <Col xs={12} md={6} lg={6}>
            <StyleH1>Datos de Facturación</StyleH1>

            <Form.Group>
              <StyleLabel controlId="validationCustom01">
                Nombre ó Razón Social *
              </StyleLabel>
              <Form.Control
                onChange={(e) => (formulario.name = e.target.value)}
                required
                type="text"
                name="nombre"
                placeholder="Ej: Pablo Perez / CLinicaBovina.SRL"
                value={formulario.name}
              />
            </Form.Group>
            <Form.Group>
              <StyleLabel controlId="validationCustom02">
                Dirección Fiscal *
              </StyleLabel>
              <Form.Control
                onChange={(e) => (formulario.direccion = event.target.value)}
                required
                type="text"
                name="direccion"
                placeholder="Ej: Av Bolivar 454, entre calle independencia"
                value={formulario.direccion}
              />
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <StyleLabel>Cédula de Identidad o RIF *</StyleLabel>
              <Form.Control
                required
                name="documento"
                type="number"
                placeholder="Ingrese C.I ó RIF agregando su denominación Ej: J-000000"
                onChange={(e) => (formulario.documento = e.target.value)}
                value={formulario.documento}
              />
            </Form.Group>
            <Form.Group controlId="validationCustom04">
              <StyleLabel>
                <b>Ciudad</b>
              </StyleLabel>
              <Form.Control
                required
                type="text"
                name="ciudad"
                placeholder="Ciudad en la que te encuentras"
                onChange={(e) => (formulario.ciudad = e.target.value)}
                value={formulario.ciudad}
              />
            </Form.Group>
            <Form.Group controlId="validationCustom05">
              <StyleLabel>Estado *</StyleLabel>
              <Form.Select
                aria-label="Default select example"
                required
                name="estado"
                onChange={(e) => (formulario.estado = e.target.value)}
                value={formulario.estado}
              >
                {provincias.map((element, index) => (
                  <option key={index} value={element.codigo}>
                    {element.estado}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="validationCustom06">
              <StyleLabel>
                <b>Teléfono *</b>
              </StyleLabel>
              <Form.Control
                required
                type="tel"
                name="telefono"
                placeholder="Ej: 0258 2525-242"
                onChange={(e) => (formulario.telefono = e.target.value)}
                value={formulario.telefono}
              />
            </Form.Group>
            <Form.Group controlId="validationCustom07">
              <StyleLabel>
                <b>Correo electrónico *</b>
              </StyleLabel>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Ej: ejemplo@gmail.com"
                /*                 onChange={(e) => (formulario.email = e.target.value)}
                value={formulario.email} */
              />
            </Form.Group>
            <Form.Group controlId="validationCustom08">
              <StyleLabel>Nombre de usuario *</StyleLabel>
              <Form.Control
                required
                type="text"
                name="nameUser"
                placeholder="Ej: pablo29"
                onChange={(e) => (formulario.nameUser = e.target.value)}
                value={formulario.nameUser}
              />
            </Form.Group>
            <Form.Group controlId="validationCustom09">
              <StyleLabel>Crear una contraseña para la cuenta *</StyleLabel>
              <Form.Control
                required
                type="password"
                name="clave"
                placeholder="********"
                onChange={(e) => (formulario.clave = e.target.value)}
                value={formulario.clave}
              />
            </Form.Group>
            <Form.Group controlId="validationCustom010">
              <StyleLabel>
                <b>Notas del pedido (opcional)</b>
              </StyleLabel>
              <Form.Control as="textarea" name="nota" rows={3} />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <StyleH1>Tu pedido</StyleH1>
            <StyleCard>
              <StyleDiv>
                <StyleDivPrice variant="left">
                  <StyleP1>{api.titulo}</StyleP1>
                  <StyleP1>
                    <b>SubTotal</b>
                  </StyleP1>
                  <StyleP1 variant="price">Total</StyleP1>
                </StyleDivPrice>
                <StyleDivPrice>
                  <StyleP1>$ {api.precioFinal}</StyleP1>
                  <StyleP1>
                    <b>$ {api.precioFinal}</b>
                  </StyleP1>
                  <StyleP1 variant="price">$ {api.precioFinal}</StyleP1>
                </StyleDivPrice>
              </StyleDiv>
              <StyleDivHelp>
                <StyleP variant="bold">
                  <RiRadioButtonLine /> Pago Moneda Nacional
                </StyleP>
                <StyleP>
                  Realiza tu pago directamente en nuestra cuenta bancaria en
                  Moneda Nacional (Banco Nacional de Crédito BNC). Por favor,
                  usa el número del pedido como referencia de pago. Tu pedido no
                  se procesará hasta que se haya recibido el importe en nuestra
                  cuenta.
                </StyleP>
              </StyleDivHelp>
              <StyleP>
                Tus datos personales se utilizarán para procesar tu pedido,
                mejorar tu experiencia en esta web y otros propósitos descritos
                en nuestra{" "}
                <StyleLink to="/politicas-de-privacidad">
                  política de privacidad.
                </StyleLink>
              </StyleP>
              <Form.Group controlId="validationCustom011">
                <Form.Check
                  type="checkbox"
                  required
                  name="checkbox"
                  label={
                    "Su pedido será cancelado después de 2 horas, a menos que se informe el pago. *"
                  }
                />
              </Form.Group>
              <StyleButton type="submit">
                Realizar la compra{" "}
                <span style={{ fontSize: "19px" }}>
                  <RiShoppingCart2Line />
                </span>
              </StyleButton>
              <StyleP2>
                <RiCheckboxCircleLine /> Pago 100% seguro
              </StyleP2>
            </StyleCard>
          </Col>
        </StyleRow>
      </Form>
    </StyleSection>
  );
}
