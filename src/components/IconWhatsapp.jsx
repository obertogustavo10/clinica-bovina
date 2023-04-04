import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

export default function IconWhatsapp() {
  const StyleA = styled.a`
    text-decoration: none;
    display: inline-block;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    text-align: center;
    line-height: 1.6em;
    color: #ffffff;
    background: #1cc424;
    font-size: 32px;
    transition: 0.3s;
    &:hover {
      background-color: #14ae87;
      color: #fff;
    }
  `;
  const StyleDiv = styled.div`
    position: fixed;
    right: 13px;
    bottom: 5%;
  `;
  return (
    <StyleDiv>
      <StyleA target="_blank" href="https://wa.me/+584245631229?text=Hola Clinica Bovina como estas? los contacto desde su pagina web para pedir mas información">
        <BsWhatsapp />
      </StyleA>
    </StyleDiv>
  );
}
