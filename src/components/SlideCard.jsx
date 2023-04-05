import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Img from "../assets/productos/bovifor_vaca.jpg";
import Img1 from "../assets/productos/bovilis_vaca.jpg";
import Img2 from "../assets/productos/brecelei_vaca.jpg";
import Img3 from "../assets/productos/calbos_vaca.jpg";
import Img4 from "../assets/productos/calcio_vaca.jpg";
import Img5 from "../assets/productos/CALFOS2_vaxa.jpg";
import Cards from "./Cards";
import data from "../../data.json";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default () => {
  const [api, setApi] = React.useState([]);

  React.useEffect(() => {
    setApi(data.productos);
    console.log(data.productos);
  }, []);
  return (
    <Splide
      options={{
        perPage: 4,
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
            perPage: 2,
            spaceBetween: 80,
          },
          992: {
            perPage: 3,
            spaceBetween: 10,
          },
          1200: {
            perPage: 3,
            spaceBetween: 30,
          },
          1400: {
            perPage: 4,
            spaceBetween: 30,
          },
        },
        gap: "1rem",
        type: "loop",
        drag: "free",
        focus: "center",
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          speed: 0.5,
          autoStart: true,
          rewind: false,
        },
      }}
      extensions={{ AutoScroll }}
      aria-label="My Favorite Images"
    >
      {api.map((product, index) => (
        <SplideSlide key={index}>
          <Cards
            key={index}
            img={Img}
            title={product.price}
            text={product.name}
          />
        </SplideSlide>
      ))}

      {/*       <SplideSlide>
        <Cards img={Img1} title="$16.50" text="Brucella Abortus RB51" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img2} title="$24.20" text="Brucelmiq - 10D" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img3} title="$31" text="Complex Sel - 250Ml" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img4} title="$17" text="Calciomic Sol Iny" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img5} title="$11.50" text="Calfoz Sol Inyec" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img} title="$39" text="Bovifort Sol Inyect" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img1} title="$16.50" text="Brucella Abortus RB51" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img2} title="$24.20" text="Brucelmiq - 10D" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img3} title="$31" text="Complex Sel - 250Ml" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img4} title="$17" text="Calciomic Sol Iny" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img5} title="$11.50" text="Calfoz Sol Inyec" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img} title="$39" text="Bovifort Sol Inyect" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img1} title="$16.50" text="Brucella Abortus RB51" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img2} title="$24.20" text="Brucelmiq - 10D" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img3} title="$31" text="Complex Sel - 250Ml" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img4} title="$17" text="Calciomic Sol Iny" />
      </SplideSlide>
      <SplideSlide>
        <Cards img={Img5} title="$11.50" text="Calfoz Sol Inyec" />
      </SplideSlide> */}
    </Splide>
  );
};
