import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";

export default function Counter(props) {
  const StyleH4 = styled.h4`
    font-size: 2rem;
    line-height: 1.35;
    font-weight: 700;
    margin-bottom: 20px;
  `;
  const StyleP = styled.p`
    font-family: Inter, sans-serif;
    color: #44403c;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 700;
  `;
  const StyleCounter = styled(CountUp)`
    font-family: Inter, sans-serif;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
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
  const StyleSpan = styled.span`
    font-family: Inter, sans-serif;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
  `;
  return (
    <Col xs={6} md={6} lg={3}>
      <StyleCounter
        start={props.start}
        end={props.end}
        duration={5}
        delay={0}
      ></StyleCounter>
      <StyleSpan>+</StyleSpan>
      <StyleP>{props.title}</StyleP>
    </Col>
  );
}
