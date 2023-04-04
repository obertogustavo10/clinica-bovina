import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

export default function Cards({ img, title, text }) {
  // Style Components
  //crema #f5f1e9 rgba(245, 241, 233, 0.5)
  //verde #015641 rgba(1, 86, 65, 0.5)
  //verdeClaro #87a851 rgba(135, 168, 81, 0.5)
  const StyleCard = styled(Card)`
    width: 15rem;
    text-align: center;
    box-shadow: -8px 8px 5px 0px rgba(0, 0, 0, 0.3);
  `;
  const StyleCardImg = styled(Card.Img)`
    height: 15rem;
  `;
  const StyleCardBody = styled(Card.Body)`
    text-align: center;
    background: #e7e7e7;
  `;
  const StyleCardTitle = styled(Card.Title)`
    text-align: center;
  `;
  const StyleCardTitleGreen = styled(Card.Text)`
    text-align: left;
  `;
  const StyleCardText = styled(Card.Text)`
    text-align: center;
  `;
  return (
    <StyleCard>
      <StyleCardImg variant="top" src={img} />
      <StyleCardBody>
        <StyleCardText>{text}</StyleCardText>
        <StyleCardTitle>${title}</StyleCardTitle>
      </StyleCardBody>
    </StyleCard>
  );
}
