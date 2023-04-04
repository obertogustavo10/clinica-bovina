import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/IconWhatsapp";
import Banner from "../section/curso/Banner";
import FrequentQuestions from "../section/curso/FrequentQuestions";
import data from "../../data.json";
import BoxInfo from "../components/boxInfo";

export default function CourseSelect() {
  const { cursoId } = useParams();
  const [api, setApi] = React.useState([]);
  const [sobreCurso, setSobreCurso] = React.useState([]);
  const [certificado, setCertificado] = React.useState("");

  React.useEffect(() => {
    let cursoSeleccionado = data.cursos.find((curso) => curso.id === cursoId);
    setApi(cursoSeleccionado);
    setSobreCurso(cursoSeleccionado.sobreElCurso);
    setCertificado(cursoSeleccionado.id);
    console.log(cursoSeleccionado + "id" + cursoSeleccionado.id);
  }, []);
  return (
    <>
      <Navbar />
      <WhatsApp />
      <Banner api={api} id={certificado} />
      <FrequentQuestions about={sobreCurso} />
      <BoxInfo api={api} />
      <Footer />
    </>
  );
}
