import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Wave from "../../assets/wave8.svg";
import { FaClipboardList } from "react-icons/fa";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardCourse from "../../components/CardCourse";
import data from "../../../data.json";
export default function Courses() {
  const StyleSection = styled(Container)`
    background-size: cover;
    border-bottom: 1px solid #87a851;
    @media (max-width: 576px) {
      height: 47rem;
    }
  `;
  const StyleH1 = styled.h2`
    color: #44403c;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 700;
    padding-right: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: end;
    @media (max-width: 576px) {
      font-size: 2.5rem;
      justify-content: center;
    }
  `;
  const StyleH3 = styled.h3`
    color: #87a851;
    font-size: 1.5rem;
    line-height: 1.25;
    margin-bottom: 40px;
  `;
  const StyleRow = styled(Row)`
    text-align: center;
    margin-top: 55px;
  `;
  const StyleCol = styled(Col)`
    margin-top: 40px;
  `;
  const StyleSpan = styled.span`
    text-align: center;
    justify-content: center;
    display: flex;
    padding-top: 5px;
    padding-right: 10px;
  `;
  /* Animations */
  const textAnimateLeft = {
    offscreen: { x: -90, opacity: 0 },
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
  const textAnimateRight = {
    offscreen: { x: 10, opacity: 0 },
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
  const [api, setApi] = React.useState([]);

  React.useEffect(() => {
    setApi(data.cursos);
    console.log(data.productos);
  }, []);

  return (
    <StyleSection style={{ backgroundImage: `url(${Wave})` }} fluid>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Row>
          <StyleCol xs={12} md={12} lg={12}>
            <StyleH1>
              <StyleSpan>
                <FaClipboardList />
              </StyleSpan>{" "}
              Cursos
            </StyleH1>
          </StyleCol>
        </Row>
        <Row as={motion.div} variants={textAnimateRight}>
          <Col>
            <Splide
              options={{
                breakpoints: {
                  0: {
                    perPage: 1,
                    spaceBetween: 10,
                  },
                  576: {
                    perPage: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    perPage: 1,
                    spaceBetween: 0,
                  },
                  992: {
                    perPage: 2,
                    spaceBetween: 10,
                  },
                  1200: {
                    perPage: 2,
                    spaceBetween: 0,
                  },
                  1400: {
                    perPage: 3,
                    spaceBetween: 30,
                  },
                  1600: {
                    perPage: 3,
                    spaceBetween: 30,
                  },
                  1800: {
                    perPage: 4,
                    spaceBetween: 30,
                  },
                  2000: {
                    perPage: 4,
                    spaceBetween: 30,
                  },
                  2200: {
                    perPage: 4,
                    spaceBetween: 30,
                  },
                  2500: {
                    perPage: 5,
                    spaceBetween: 30,
                  },
                },
                gap: "1rem",
                focus: "center",
                autoScroll: {
                  speed: 0.5,
                  rewind: false,
                },
              }}
              extensions={{ AutoScroll }}
              aria-label="My Favorite Images"
            >
              {api.map((product, index) => (
                <SplideSlide key={index}>
                  <CardCourse
                    key={index}
                    precioFinal={product.precioFinal}
                    titulo={product.titulo}
                    duracion={product.duracion}
                    modalidad={product.modalidad}
                    precioStandar={product.precioStandar}
                    link={product.programaDescargable}
                    clases={product.clases}
                    id={product.id}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Col>
        </Row>
      </motion.div>
    </StyleSection>
  );
}
