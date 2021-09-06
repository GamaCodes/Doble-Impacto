import React from "react";
import Layout from "../layouts/index";
import {
  Article,
  ArticleContent,
  ArticleMedia,
} from "../components/layout/Article";

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Misión">
          <p>
            Contribuir al desarrollo y Profesionalización de los comerciantes de
            la región, satisfaciendo sus necesidades de aprovisionamiento,
            ofreciendo el mejor servicio, variedad de productos y las mejores
            facilidades crediticias.
          </p>
          <p>
            Cumplir siempre con los acuerdos establecidos con nuestros
            proveedores y socios comerciales, sin dejar de tener en mente
            nuestra constante mejora en eficiencia operativa, rentabilidad e
            innovación.
          </p>
          <h1 className="mb-3 text-4xl font-bold lg:leading-tight text-primary-500 font-variant h1-primary-color">
            Visión
          </h1>
          <p>
            Ser la mejor opción como distribuidor mayorista de Materias Primas
            en la industria, mayormente en materiales metálicos.
          </p>
          <p>
            Contar con los mayores niveles de utilidad, productividad y
            eficiencia del giro en la región, a través de los siguientes puntos:
          </p>
          <ol>
            <li>
              Ejercicio de procesos adecuados a las necesidades de nuestros
              clientes.
            </li>
            <li>
              Ejecución de las mejores prácticas tanto administrativas como
              operativas.
            </li>
            <li>
              Impulsar las marcas de nuestros socios comerciales promocionando
              detalladamente cada uno de sus productos, con marcas propias.
            </li>
            <li>
              Impulsar la Profesionalización de nuestros colaboradores, mediante
              cursos de capacitación constante.
            </li>
          </ol>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="https://images.pexels.com/photos/7437499/pexels-photo-7437499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="acerca de"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  );
}
