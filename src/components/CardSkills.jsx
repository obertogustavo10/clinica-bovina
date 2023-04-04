import React from "react";
import styled from "styled-components";
import {Col} from "react-bootstrap";

export default function CardSkills(props) {
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

  return (
    <Col xs={12} md={12} lg={4}>
      <StyleDiv>{props.id}</StyleDiv>
      <StyleH4>{props.title}</StyleH4>
      <StyleP>{props.text}</StyleP>
    </Col>
  );
}
