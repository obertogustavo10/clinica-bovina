import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

export default function Cards({ img, title, text, modalidad }) {
  // Style Components
  //crema #f5f1e9 rgba(245, 241, 233, 0.5)
  //verde #015641 rgba(1, 86, 65, 0.5)
  //verdeClaro #87a851 rgba(135, 168, 81, 0.5)
  const StyleCard = styled(Card)`
    width: auto;
    text-align: left;
    box-shadow: -8px 8px 5px 0px rgba(0, 0, 0, 0.4);
    transition: ease-in-out 0.5s;

    &:hover {
      transform: translateY(-20px);
    }
    @media (max-width: 576px) {
      margin-bottom: 10px;
      margin-top: 10px;
    }
  `;
  const StyleCardImg = styled(Card.Img)`
    height: 15rem;
  `;
  const StyleCardBody = styled(Card.Body)`
    background: #fff;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
  `;
  const StyleCardTitle = styled(Card.Title)`
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  `;
  const StyleCardTitleGreen = styled(Card.Text)`
    font-size: 0.8rem;
    color: #c9d4ac;
  `;
  const StyleSpan = styled.span`
    padding: 0.125rem 0.25rem;
    border-radius: 50px;
    background-color: #f5f5f4;
    color: #79716b;
    font-size: 0.75rem;
    line-height: 1.2;
  `;
  return (
    <StyleCard>
      <StyleCardImg variant="top" src={img} />
      <StyleCardBody>
        <StyleCardTitleGreen>{text}</StyleCardTitleGreen>
        <StyleCardTitle>{title}</StyleCardTitle>
        <StyleSpan>{modalidad}</StyleSpan>
      </StyleCardBody>
    </StyleCard>
  );
}
