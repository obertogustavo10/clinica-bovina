import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { RiRadioButtonLine } from "react-icons/ri";
import ButtonRow from "../../components/ButtonRow";

export default function Banner({ api, id }) {
  const StyleSection = styled(Container)`
    background-color: #f5f1e9;
  `;
  const StyleH1 = styled.h1`
    color: #44403c;
    font-size: 60px;
    line-height: 1.35;
    font-weight: 700;
    margin-bottom: 50px;
    @media (max-width: 576px) {
      font-size: 40px;
      margin-bottom: 30px;
    }
  `;
  const StyleP1 = styled.p`
    font-size: ${(props) => (props.variant === "subrayado" ? "20px" : "30px")};
    line-height: 30px;
    font-weight: ${(props) => (props.variant === "subrayado" ? "400" : "700")};
    text-decoration: ${(props) =>
      props.variant === "subrayado" ? "line-through" : ""};
    margin-bottom: ${(props) => (props.variant === "subrayado" ? "" : "50px")};
    @media (max-width: 576px) {
      font-size: 0.8rem;
      margin-bottom: ${(props) =>
        props.variant === "subrayado" ? "" : "30px"};
    }
  `;
  const StyleP = styled.p`
    color: #87a851;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  `;
  const StyleRow = styled(Row)`
    text-align: left;
    padding: 200px;
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
  //state
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    let urlLocal = "/pago/curso/" + id;
    setUrl(urlLocal);
    console.log(urlLocal);
  }, []);
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
            <StyleP>
              <RiRadioButtonLine /> {api.modalidad}
            </StyleP>
            <StyleH1> Curso de {api.titulo}</StyleH1>
            <StyleP1 variant="subrayado">
              {" "}
              Precio Standard $ {api.precioStandar}
            </StyleP1>
            <StyleP1> Precio Final $ {api.precioFinal}</StyleP1>
            <ButtonRow text="INSCRIBIRSE" to={`/pago/curso/${id}`} />
          </Col>
        </StyleRow>
      </motion.div>
    </StyleSection>
  );
}
