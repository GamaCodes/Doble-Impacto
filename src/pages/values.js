import React from "react";
import Layout from "../layouts/index";
import {
  Article,
  ArticleContent,
  ArticleMedia,
} from "../components/layout/Article";

export default function ValuesPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Valores">
          <p>
            En{" "}
            <span className="text-primary-500 font-bold">
              MANUFACTURA DOBLE IMPACTO{" "}
            </span>{" "}
            respetamos los derechos de todas las personas, sin distinción alguna
            de raza, color, sexo, idioma, religión, opinión política o de
            cualquier otra índole, origen nacional o social, posición económica,
            nacimiento o cualquier otra condición.
          </p>
          <p>
            Además, en{" "}
            <span className="text-primary-500 font-bold">
              MANUFACTURA DOBLE IMPACTO{" "}
            </span>{" "}
            estamos comprometidos con el cuidado ambiental debido a la relación
            que tenemos con materias primas; hemos desarrollado acciones
            sociales y de sustentabilidad, con el fin de beneficiar en algún
            punto a toda la cadena de valor, y así mantener una cultura de
            “Empresa Socialmente Responsable”.
          </p>
          <p>
            Gracias a nuestra participación activa, aplicando normas para
            obtener en breve el “Distintivo Empresa Socialmente Responsable”
            (ESR), otorgado por el Centro Mexicano para la Filantropía (CEMEFI)
            al igual que la aprobación de PROFEPA como “Empresa generadora de
            residuos no peligrosos”.
          </p>
          <ol>
            <li>Calidad</li>
            <li>Innovación</li>
            <li>Honradez</li>
            <li>Responsabilidad</li>
          </ol>
          <h1 className="mb-3 h1-variant-color font-bold text-primary-500 h1-primary-color">
            Nuestro Compromiso
          </h1>
          <p>
            Debido al acelerado crecimiento del sector industrial y al aumento
            en la demanda de soluciones específicas por parte de empresas que
            integran dicho ramo,{" "}
            <span className="text-primary-500 font-bold">
              MANUFACTURA DOBLE IMPACTO{" "}
            </span>{" "}
            nace para brindar una respuesta a sus necesidades.
          </p>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Valores"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  );
}
