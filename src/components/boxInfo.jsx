import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineLaptop,
  AiOutlineDownload,
} from "react-icons/ai";
import Wave from "../assets/wave8.svg";

export default function BoxInfo({ api }) {
  const StyleSection = styled(Container)`
    background-size: cover;
    border-bottom: 1px solid #87a851;
  `;
  const StyleDiv = styled.div`
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
  `;
  const StyleP = styled.p`
    color: #44403c;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    font-weight: 500;
    box-shadow: 7px 8px 10px -3px rgba(0, 0, 0, 0.75);
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  `;
  const StyleSpan = styled.span`
    border-left: 3px solid #44403c;
    padding-left: 10px;
    margin-left: 10px;
  `;
  const Stylea = styled.a`
    text-decoration: none;
    color: #44403c;
    &:hover {
      color: #87a851;
    }
  `;
  const StyleRow = styled(Row)`
    text-align: left;
    padding: 100px;
    padding-top: 0px;
    @media (max-width: 576px) {
      padding: 20px;
    }
  `;
  const StyleCol = styled.div`
    width: 100%;
  `;
  /* Animations */
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
  const [sobreCurso, setSobreCurso] = React.useState([]);
  React.useEffect(() => {
    setSobreCurso(api);
  }, [api]);

  return (
    <StyleSection style={{ backgroundImage: `url(${Wave})` }} fluid>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <StyleRow as={motion.div} variants={textAnimateRight}>
          <StyleCol xs={12} md={12} lg={12}>
            <StyleP>
              <span style={{ fontSize: 30 }}>
                <AiOutlineClockCircle />
              </span>{" "}
              <StyleSpan>Duración:</StyleSpan> {api.duracion}
            </StyleP>
            <StyleP>
              <span style={{ fontSize: 30 }}>
                <AiOutlineCalendar />
              </span>{" "}
              <StyleSpan>{api.clases}</StyleSpan>
            </StyleP>
            <StyleP>
              <span style={{ fontSize: 30 }}>
                <AiOutlineLaptop />
              </span>{" "}
              <StyleSpan>Modalidad: </StyleSpan>
              {api.modalidad}
            </StyleP>
            <StyleP>
              <Stylea href={api.programaDescargable} target="_blank">
                <span style={{ fontSize: 30, color: "#87a851" }}>
                  <AiOutlineDownload />
                </span>{" "}
                <StyleSpan>Programa del curso</StyleSpan>
              </Stylea>
            </StyleP>
          </StyleCol>
        </StyleRow>
      </motion.div>
    </StyleSection>
  );
}
