import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import data from "../../../data.json";
import CardTestimonialts from "../../components/CardTestimonialts";
export default function Testimonials() {
  const [api, setApi] = React.useState([]);

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
  const StyleDiv = styled.div`
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border: 2px solid #87a851;
    border-radius: 5rem;
    color: #87a851;
    font-size: 1.25rem;
    margin-bottom: 10px;
  `;
  const StyleRow = styled(Row)`
    align-items: center;
    /*     padding: 100px;
    @media (max-width: 576px) {
      padding: 20px;
    } */
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
  React.useEffect(() => {
    setApi(data.testimonials);
  }, []);
  return (
    <StyleSection fluid>
      <StyleRow>
        <Col xs={12} md={12} lg={12}>
          <StyleH1>Algunos testimonios de nuestros estudiantes</StyleH1>
        </Col>
        {api.map((datos, i) => (
          <CardTestimonialts
            key={i}
            id={datos.id}
            description={datos.description}
            name={datos.name}
            jobTitle={datos.jobTitle}
            profile={datos.profile}
          />
        ))}
      </StyleRow>
    </StyleSection>
  );
}
