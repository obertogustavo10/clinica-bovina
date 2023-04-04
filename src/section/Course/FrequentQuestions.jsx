import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import data from "../../../data.json";
import Accordion from "../../components/Accordion";
export default function FrequentQuestions() {
  const [api, setApi] = React.useState([]);
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
  React.useEffect(() => {
    setApi(data.preguntasFrecuentes);
  }, []);
  return (
    <StyleSection fluid>
      <Row>
        <StyleCol xs={12} md={12} lg={12}>
          <StyleH1>Preguntas frecuentes</StyleH1>
        </StyleCol>
        <Col xs={12} md={12} lg={12}>
          {api.map((datos, i) => (
            <Accordion
              key={i}
              id={datos.id}
              description={datos.description}
              title={datos.title}
              description1={datos.description1}
              description2={datos.description2}
            />
          ))}
        </Col>
      </Row>
    </StyleSection>
  );
}
