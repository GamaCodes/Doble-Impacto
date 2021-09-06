import React from "react";
import Layout from "../layouts/index";
import {
  Article,
  ArticleContent,
  ArticleMedia,
} from "../components/layout/Article";

export default function ServicesPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Servicios">
          <p>
            Atención personalizada en nuestra área de ventas con descuentos
            adicionales con la mención de ser recomendados por alguno de
            nuestros clientes ya consolidados. Venta directa con nuestra fuerza
            de promotores en calle. Servicio de telemarketing o venta
            telefónica.
          </p>
          <p>
            Entrega de su pedido en la puerta de su negocio, en un plazo no
            mayor a 24 horas. Armado de despensas para empresas y hogares, donde
            usted elige los productos que desea incluir.
          </p>
          <h1 className="mb-3 h1-variant-color font-bold text-primary-500 h1-primary-color">
            Transportación
          </h1>
          <p>
            Obtenga más información sobre nuestras soluciones de cadena de
            suministro, solicite información o comience a cotizar un servicio.
          </p>
          <ul>
            <li>Entrega inmediata</li>
            <li>Entrega en domicilio</li>
          </ul>
          <h1 className="mb-3 h1-variant-color font-bold text-primary-500 h1-primary-color">
            Almacén
          </h1>
          <p>
            Contamos con todos los productos realmente comerciales más de 5mil
            productos en nuestros almacenes.
          </p>
          <ul>
            <li>Ordenes</li>
            <li>Ordenes especiales</li>
            <li>Entrega directa</li>
          </ul>
          <h1 className="mb-3 h1-variant-color font-bold text-primary-500 h1-primary-color">
            Administración de Logística
          </h1>
          <p>
            Compruebe nuestra administración en la logística de solicitud de
            pedidos y entrega para la su satisfacción y confianza.
          </p>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Servicios"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  );
}
