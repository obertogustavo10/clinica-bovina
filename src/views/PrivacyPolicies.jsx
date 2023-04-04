import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/IconWhatsapp";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
export default function PrivacyPolicies() {
  const StyleContainer = styled.div`
    background-color: #fff;
    padding: 35px;
  `;
  const StyleSection = styled(Container)`
    background-color: #f5f5f4;
  `;
  const StyleH1 = styled.h1`
    color: #44403c;
    line-height: 1.35;
    margin-bottom: 50px;
    text-align: center;
    /*     @media (max-width: 576px) {
      font-size: 40px;
      margin-bottom: 30px;
    } */
  `;
  const StyleH3 = styled.h4`
    color: #44403c;
    text-transform: uppercase;
    margin-bottom: 30px;
    /*     @media (max-width: 576px) {
      font-size: 40px;
      margin-bottom: 30px;
    } */
  `;
  const StyleB = styled.b`
    color: #87a851;
  `;
  const StyleRow = styled(Row)`
    padding: 20px;
    text-align: left;
    @media (max-width: 576px) {
      padding: 20px;
    }
  `;
  return (
    <>
      <Navbar />
      <StyleContainer>
        <StyleRow>
          <Col xs={12} md={12} lg={12}>
            <StyleH1>
              Política de Privacidad{" "}
              <span style={{ fontWeight: "bold", color: "#87a851" }}>
                Clinica Bovina
              </span>
            </StyleH1>
            <StyleH3>FINALIDAD DEL TRATAMIENTO DE DATOS</StyleH3>
            <p>
              Para proceder al registro, acceso y posterior uso de la
              Aplicación, el Usuario deberá facilitar, de forma voluntaria,
              datos de carácter personal (esencialmente, identificativos y de
              contacto), los cuales serán incorporados a soportes automatizados
              por parte de <StyleB>Clinica Bovina</StyleB>. La captación,
              almacenamiento, codificación, estructuración y en su caso,
              eliminación, de los datos proporcionados por los Usuarios,
              constituirán operaciones de tratamiento llevadas a cabo por el
              Responsable, con la finalidad de garantizar el correcto
              funcionamiento de la Aplicación, mantener la relación de
              prestación de servicios y/o comercial con el Usuario, y para la
              gestión, administración, información, prestación y mejora del
              servicio. Los datos personales facilitados por el Usuario,
              especialmente, el correo electrónico, podrán emplearse también
              para remitir boletines (newsletters), así como comunicaciones
              comerciales de promociones y/o publicidad de la Aplicación,
              siempre y cuando, el Usuario haya prestado previamente su
              consentimiento expreso para la recepción de estas comunicaciones
              vía electrónica.
            </p>
            <StyleH3>LEGITIMACIÓN</StyleH3>
            <p>
              El tratamiento de los datos del Usuario, se realiza con las
              siguientes bases jurídicas que legitiman el mismo:
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                La solicitud de información y/o la contratación de los servicios
                de la Aplicación, cuyos términos y condiciones se pondrán a
                disposición del Usuario en todo caso, con carácter previo, para
                su expresa aceptación.
              </li>
              <li>
                {" "}
                El consentimiento libre, específico, informado e inequívoco del
                Usuario, poniendo a su disposición la presente política de
                privacidad, que deberá aceptar mediante una declaración o una
                clara acción afirmativa, como el marcado de una casilla
                dispuesta al efecto. En caso de que el Usuario no facilite a
                <StyleB> Clinica Bovina</StyleB> sus datos, o lo haga de forma
                errónea o incompleta, no será posible proceder al uso de la
                Aplicación.
              </li>
            </ul>
            <StyleH3>CONSERVACIÓN DE LOS DATOS PERSONALES</StyleH3>
            <p>
              Los datos personales proporcionados por el Usuario, se conservarán
              en los sistemas y bases de datos del responsable del Tratamiento
              <StyleB> Clinica Bovina</StyleB>, mientras aquél continúe haciendo
              uso de la Aplicación, y siempre que no solicite su supresión. Con
              el objetivo de depurar las posibles responsabilidades derivadas
              del tratamiento, los datos se conservarán por un período mínimo de
              cinco años.
            </p>
            <StyleH3>DESTINATARIOS</StyleH3>
            <p>
              Los datos no se comunicarán a ningún tercero ajeno a NADBIO, salvo
              obligación legal o en cualquier caso, previa solicitud del
              consentimiento del Usuario.
            </p>
            <p>
              De otra parte, NADBIO podrá dar acceso o transmitir los datos
              personales facilitados por el Usuario, a terceros proveedores de
              servicios, con los que haya suscrito acuerdos de encargo de
              tratamiento de datos, y que únicamente accedan a dicha información
              para prestar un servicio en favor y por cuenta del responsable.
            </p>
            <StyleH3>DESTINATARIOS</StyleH3>
            <p>
              <StyleB>Clinica Bovina</StyleB>, informa al Usuario de que, como
              prestador de servicio de alojamiento de datos retiene por un
              período máximo de 24 meses la información imprescindible para
              identificar el origen de los datos alojados y el momento en que se
              inició la prestación del servicio.
            </p>
            <p>
              La retención de estos datos no afecta al secreto de las
              comunicaciones y sólo podrán ser utilizados en el marco de una
              investigación criminal o para la salvaguardia de la seguridad
              pública, poniéndose a disposición de los jueces y/o tribunales o
              del Ministerio que así los requiera.
            </p>
            <p>
              La comunicación de datos a las Fuerzas y Cuerpos de Seguridad del
              Estado, se hará en virtud de lo dispuesto por la normativa sobre
              protección de datos personales, y bajo el máximo respeto a la
              misma.
            </p>
            <StyleH3>PROTECCIÓN DE LA INFORMACIÓN ALOJADA</StyleH3>
            <p>
              El responsable del Tratamiento <StyleB>Clinica Bovina</StyleB>,
              adopta las medidas necesarias para garantizar la seguridad,
              integridad y confidencialidad de los datos. Si bien el
              responsable, realiza copias de seguridad de los contenidos
              alojados en sus servidores, sin embargo, no se responsabiliza de
              la pérdida o el borrado accidental de los datos por parte de los
              Usuarios. De igual manera, no garantiza la reposición total de los
              datos borrados por los Usuarios, ya que los citados datos podrían
              haber sido suprimidos y/o modificados durante el periodo de tiempo
              transcurrido desde la última copia de seguridad. Los servicios
              facilitados o prestados a través de la Aplicación, excepto los
              servicios específicos de backup, no incluyen la reposición de los
              contenidos conservados en las copias de seguridad realizadas por
              el responsable del Tratamiento <StyleB>Clinica Bovina</StyleB>,
              cuando esta pérdida sea imputable al Usuario; en este caso, se
              determinará una tarifa acorde a la complejidad y volumen de la
              recuperación, siempre previa aceptación del Usuario. La reposición
              de datos borrados sólo está incluida en el precio del servicio
              cuando la pérdida del contenido sea debida a causas atribuibles al
              responsable. eto a la misma.
            </p>
            <StyleH3>EJERCICIO DE DERECHOS</StyleH3>
            <p>
              <StyleB>Clinica Bovina</StyleB>, informa al Usuario de que le
              asisten los derechos de acceso, rectificación, limitación,
              supresión, oposición y portabilidad, los cuales podrá ejercitar
              mediante petición dirigida al correo electrónico:
              info@clinicabovina.com
            </p>
            <StyleH3>DERECHOS DE PROPIEDAD INTELECTUAL</StyleH3>
            <p>
              Usted reconoce y acepta que el servicio y cualquier software
              utilizado en conexión con la aplicación móvil contiene información
              propietaria y confidencial, material que está protegido por
              derechos de propiedad intelectual aplicable y otras leyes. Además,
              usted reconoce y acepta que cualquier publicidad o información
              presentada está protegido por derechos de autor, marcas
              registradas, patentes u otros derechos y leyes de propiedad. Salvo
              lo expresamente permitido por la ley aplicable o como autorizado
              por <StyleB>Clinica Bovina</StyleB> u otorgante correspondiente,
              usted se compromete a no alterar, modificar, alquilar, arrendar,
              prestar, vender, distribuir, transmitir, publicar, exhibir
              públicamente o crear cualquier plagio a obras que se basan en este
              servicio, intransferible y no exclusivo derecho y licencia para
              utilizar el código objeto del Software en un ordenador (o
              dispositivo móvil), y no permitir que ningún tercero pueda
              duplicar, alterar, modificar, crear o plagiar el trabajo de
              ingeniería inversa, invertir el montaje o hacer un intento para
              localizar o descubrir cualquier código fuente, vender, ceder,
              sublicenciar, conceder un interés de seguridad y/o transferir
              cualquier derecho sobre el Software. Usted se compromete a no
              alterar o modificar el Software de ninguna forma y naturaleza, y
              no utilizar versiones modificadas del Software, con el propósito
              de obtener acceso no autorizado a los servicios. Usted también
              acepta no acceder o intentar acceder a los servicios a través de
              cualquier otro medio que no sea mediante la interfaz proporcionada
              por <StyleB>Clinica Bovina</StyleB>.
            </p>
          </Col>
        </StyleRow>
      </StyleContainer>
      <Footer />
      <WhatsApp />
    </>
  );
}
