import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import ButtonRow from "../../components/ButtonRow";
import { motion } from "framer-motion";
import Counter from "../../components/Counter";
import data from "../../../data.json";
import Wave from "../../assets/wave6.svg";
import ScrollTrigger from "react-scroll-trigger";
export default function Contacto() {
  const [api, setApi] = React.useState([]);
  const [counterStart, setCounterStart] = React.useState(false);
  const StyleSection = styled(Container)`
    /*     border-top: 1px solid grey;
    background-color: #f5f5f4;
    text-align: center;
    height: 100%; */
    background-color: #87a851;
    background-image: url("https://uploads-ssl.webflow.com/63576df30b897b865756b4a3/63610153798bc245970747f0_lines-overlay.svg");
    background-position: 100% 100%;
    text-align: center;
    background-repeat: no-repeat;
    padding: 50px;
    /*   overflow: hidden;
    background-color: #f5f5f4;
    background-image: url("https://uploads-ssl.webflow.com/63576df30b897b865756b4a3/636b5f1c73e093a8ed76c56f_bg-waves-white.svg");
    background-position: 0% 100%;
    background-size: auto;
    background-repeat: no-repeat;
    text-align: center; */
  `;
  const StyleH1 = styled.h2`
    color: #44403c;
    font-size: 2rem;
    line-height: 1.25;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 30px;
  `;
  const StyleH4 = styled.h4`
    padding: 0.125rem 0.25rem;
    border-radius: 50px;
    background-color: #f5f5f4;
    color: #79716b;
    font-size: 0.75rem;
    line-height: 1.2;
  `;
  const StyleP = styled.p`
    color: #f5f5f4;
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
  React.useEffect(() => {
    setApi(data.counter);
  }, []);
  return (
    <StyleSection fluid>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <StyleH1>Lo que hemos logrado hasta ahora</StyleH1>
        </Col>
      </Row>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        {counterStart && (
          <Row>
            {api.map((datos, i) => (
              <Counter
                key={i}
                id={datos.id}
                title={datos.title}
                start={datos.start}
                end={datos.end}
              />
            ))}
          </Row>
        )}
      </ScrollTrigger>
    </StyleSection>
  );
}
