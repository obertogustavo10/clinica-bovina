import React from "react";
import { Card, Col, Accordion } from "react-bootstrap";
import styled from "styled-components";
import "../App.css";
export default function AccordionComponent({
  id,
  description,
  description1,
  description2,
  title,
  url,
}) {
  // Style Components
  //crema #f5f1e9 rgba(245, 241, 233, 0.5)
  //verde #015641 rgba(1, 86, 65, 0.5)
  //verdeClaro #87a851 rgba(135, 168, 81, 0.5)
  const StyleAccordion = styled(Accordion)`
    margin-top: 10px;
  `;
  const StyleAccordionItem = styled(Accordion.Item)`
    background-color: #fff;
    border: 1.5px solid #87a851;
  `;
  const StyleP = styled.span`
    font-size: 20px;
    font-weight: 500;
  `;
  const StyleTitle = styled(Accordion.Header)`
    color: #fff;
  `;
  console.log(url);
  return (
    <StyleAccordion>
      <StyleAccordionItem eventKey={id}>
        <StyleTitle>
          <StyleP>{title}</StyleP>
        </StyleTitle>
        <Accordion.Body>
          {description}
          {description1 && description1.length > 0 ? (
            <p>* {description1}</p>
          ) : (
            ""
          )}
          {description2 && description2.length > 0 ? (
            <p>* {description2}</p>
          ) : (
            ""
          )}
          {url && url.length ? (
            <img className="img-fluid" src={url} alt="modelo de certificado" />
          ) : (
            ""
          )}
        </Accordion.Body>
      </StyleAccordionItem>
    </StyleAccordion>
  );
}
