import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import data from "../../../data.json";
import CardSkills from "../../components/CardSkills";

export default function Skills() {
  const [api, setApi] = React.useState([]);

  const StyleSection = styled(Container)`
    background-color: #f5f5f4;
    text-align: left;
  `;
  const StyleH1 = styled.h1`
    color: #44403c;
    font-size: 2rem;
    line-height: 1.35;
    font-weight: 700;
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
    padding: 100px;
    @media (max-width: 576px) {
      padding: 20px;
    }
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
    setApi(data.skills);
  }, []);

  return (
    <StyleSection fluid>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <StyleRow>
          <Col xs={12} md={12} lg={4}>
            <StyleH1 as={motion.h1} variants={textAnimateLeft}>
              Nuestra esencia se sustenta en pilares que nos mueven a diario.
            </StyleH1>
          </Col>
          {api.map((datos, i) => (
            <CardSkills
              key={i}
              id={datos.id}
              title={datos.title}
              text={datos.text}
            />
          ))}
        </StyleRow>
      </motion.div>
    </StyleSection>
  );
}
