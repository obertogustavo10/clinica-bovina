import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import Img from "../assets/smallQuote.svg";
import { FaRocketchat } from "react-icons/fa";
import { BsFillChatQuoteFill } from "react-icons/bs";

export default function CardTestimonial({
  name,
  description,
  jobTitle,
  profile,
}) {
  // Style Components
  //crema #f5f1e9 rgba(245, 241, 233, 0.5)
  //verde #015641 rgba(1, 86, 65, 0.5)
  //verdeClaro #87a851 rgba(135, 168, 81, 0.5)
  const StyleCard = styled(Card)`
    width: 800px;
    height: 320px;
    box-shadow: -8px 8px 5px 0px rgba(0, 0, 0, 0.3);
    margin-top: 30px;
    border-radius: 5%;
  `;
  const StyleCardBody = styled(Card.Body)`
    text-align: left;
    background: #87a851;
    border-radius: 5%;
  `;
  const StyleCardTitle = styled(Card.Title)`
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const StyleCardTitleGreen = styled(Card.Text)`
    text-align: left;
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
    background-color: #fff;
    margin-right: 10px;
  `;
  const StyleCardText = styled(Card.Text)`
    text-align: ${(props) => (props.variant === "right" ? "right" : "left")};
    font-family: "Caveat", cursive;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-size: 20px;
  `;
  return (
    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center">
      <StyleCard>
        <StyleCardBody>
          <span style={{ color: "white", textAlign: "left", fontSize: "50px" }}>
            <BsFillChatQuoteFill />
          </span>
          <StyleCardText>{description}</StyleCardText>
          <div className="d-flex justify-content-end">
            <StyleDiv>{profile}</StyleDiv>
            <StyleCardTitle>{name}</StyleCardTitle>
          </div>

          <StyleCardText variant="right">{jobTitle}</StyleCardText>
        </StyleCardBody>
      </StyleCard>
    </Col>
  );
}
