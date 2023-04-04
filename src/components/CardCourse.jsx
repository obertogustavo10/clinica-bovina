import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import Img from "../assets/smallQuote.svg";
import { FaRocketchat } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import ButtonRow from "../components/ButtonRow";

export default function CardCourse({
  titulo,
  duracion,
  modalidad,
  precioFinal,
  precioStandar,
  clases,
  link,
  id,
}) {
  //state
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    let urlLocal = "/curso/" + id;
    setUrl(urlLocal);
  }, []);

  // Style Components
  const StyleCard = styled(Card)`
    width: 400px;
    height: 600px;
    box-shadow: -8px 8px 5px 0px rgba(0, 0, 0, 0.3);
    margin-top: 30px;
    border-radius: 5%;
    background: #f5f5f4;
  `;
  const StyleCardBody = styled(Card.Body)`
    text-align: left;
    padding: 0;
    background: #f5f5f4;
    border-radius: 5%;
  `;
  const StyleCardTitle = styled(Card.Title)`
    display: flex;
    justify-content: ${(props) =>
      props.variant === "center" ? "center" : "left"};
    align-items: center;
    background-color: ${(props) =>
      props.variant === "center" ? "#87a851" : ""};
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    padding: 5px;
    font-size: ${(props) => (props.variant === "center" ? "" : "40px")};
  `;
  const StyleCardTitleGreen = styled(Card.Text)`
    text-align: left;
  `;
  const StyleDiv = styled.div`
    padding: 40px;
  `;
  const StyleCardText = styled(Card.Text)`
    text-align: ${(props) => (props.variant === "right" ? "center" : "left")};
    font-size: ${(props) => (props.variant === "price" ? "22px" : "18px")};
    margin-top: 20px;
    font-weight: ${(props) => (props.variant === "price" ? "700" : "")};
    background-color: ${(props) =>
      props.variant === "right" ? "rgba(0, 0, 0, 0.2)" : ""};
    width: ${(props) => (props.variant === "right" ? "8rem" : "")};
    border-radius: ${(props) => (props.variant === "right" ? "60px" : "")};
  `;
  return (
    <StyleCard>
      <StyleCardBody>
        <StyleCardTitle variant="center">
          Aprovechá el descuento del 30%
        </StyleCardTitle>
        <StyleDiv>
          <StyleCardTitle>{titulo}</StyleCardTitle>
          <StyleCardText>
            <span>
              <BsFillClockFill />
            </span>{" "}
            {duracion}/{clases}
          </StyleCardText>
          <StyleCardText variant="right">{modalidad}</StyleCardText>
          <hr></hr>
          <StyleCardText style={{ textDecoration: "line-through" }}>
            Precio Standard $ {precioStandar}
          </StyleCardText>
          <StyleCardText variant="price">
            Promoción $ {precioFinal}
          </StyleCardText>
        </StyleDiv>
      </StyleCardBody>
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          backgroundColor: "#f5f5f4",
        }}
      >
        <ButtonRow text="Ver curso" to={url}></ButtonRow>
      </div>
    </StyleCard>
  );
}
