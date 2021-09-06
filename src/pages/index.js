import React from "react";
import Layout from "../layouts/index";
import Hero from "../components/hero/Hero";
import HeroIllustration from "../components/hero/HeroIllustration";

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        content="Comercializadora de abarrotes, dulces, desechables y materias primas."
        illustration={HeroIllustration}
      />
    </Layout>
  );
}
