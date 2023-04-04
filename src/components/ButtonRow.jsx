import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export default function ButtonRow({ text, to, variante }) {
  const StyleLink = styled(Link)`
    ${(props) => (props.variant === "car" ? "#001301" : "#FFF")};
    color: ${(props) => (props.variant === "whiteBotton" ? "#001301" : "#FFF")};
    background-color: ${(props) =>
      props.variant === "whiteBotton" ? "#f5f1e9" : "#87a851"};
    text-decoration: none;
    border-radius: 100px;
    border: 1px solid
      ${(props) => (props.variant === "whiteBotton" ? "#252525" : "#015641")};
    padding: 10px;
    &:hover {
      background-color: ${(props) =>
        props.variant === "whiteBotton" ? "#cdcdcd" : "#d0d0d0"};
      border-radius: 100px;
      border: 1px solid
        ${(props) => (props.variant === "whiteBotton" ? "#001301" : "#252525")};
      color: black;
    }
  `;
  return (
    <StyleLink variant={variante} to={to}>
      {text} <BsArrowRight />
    </StyleLink>
  );
}
