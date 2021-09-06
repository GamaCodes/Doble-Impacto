import React from "react";
import Layout from "../layouts/index";
import {
  Article,
  ArticleContent,
  ArticleMedia,
} from "../components/layout/Article";

export default function UsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Nosotros">
          <p>
            <span className="text-primary-500 font-bold">
              Manufactura Doble Impacto
            </span>
            , es una empresa comercializadora de abarrotes, dulces, desechables
            y materias primas. Nos hemos concentrado en otorgar a nuestros
            clientes la mejor atención y servicio. Estamos dedicados totalmente
            en proyectar nuestro desarrollo, así como las marcas y productos que
            distribuimos.
          </p>
          <p>
            A través del tiempo hemos logrado consolidarnos como una empresa con
            toda la capacidad operativa, técnica y administrativa para cumplir
            el compromiso con nuestros clientes y proveedores.
          </p>
          <p>
            Manufactura Doble Impacto tiene su matriz y centro de distribución,
            prácticamente a un lado de la carretera México-Texcoco en ECATEPEC
            DE MORELOS.
          </p>
          <p>
            El centro de distribución está equipado con racks, jaulas para
            carga, andenes para el surtido de pedidos, área de taller, así como
            las oficinas administrativas centrales. Cuenta con una red de
            distribución en el noroeste del país a través de una matriz, 5
            centros de distribución y 8 puntos de venta en las principales
            ciudades del centro de la Republica.
          </p>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="https://images.pexels.com/photos/4484076/pexels-photo-4484076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Lorem Picsum"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  );
}
