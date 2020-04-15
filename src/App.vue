<template>
  <div id="app">
    <ContactSection class="padded" id="contact-section" :content="i18n.content.contact" />
    <Header id="header" :content="i18n.content.navbar" />
    <HeroSection :content="i18n.content.heroSection" />
    <ProductSection :content="i18n.content.productSection" />
    <SearchDomainSection title="Cari nama domain yang diinginkan. Gratis!" />
    <FeatureSection
      v-for="(feature, i) in i18n.content.featureSection.features"
      :key="`feature-${i}`"
      :content="feature"
      :seeMore="i18n.content.featureSection.more"
    />
    <FeatureSpotlight :content="i18n.content.featureSpotlight" />
    <BuyNowSection
      title="Mudah digunakan, cepat, dan dapat diandalkan"
      subTitle="pilih paket hosting dan online website"
    />
    <GuaranteeSection :content="i18n.content.guarantee" />
    <Footer :content="i18n.content.footer" />
  </div>
</template>

<script>
import ContactSection from "./components/contactsection/ContactSection";
import Header from "./components/header/Header";
import SearchDomainSection from "./components/searchdomainsection/SearchDomainSection";
import BuyNowSection from "./components/buynowsection/BuyNowSection";
import FeatureSection from "./components/featuresection/FeatureSection";
import FeatureSpotlight from "./components/featurespotlight/FeatureSpotlight";
import Footer from "./components/footer/Footer";
import GuaranteeSection from "./components/guaranteesection/GuaranteeSection";
import HeroSection from "./components/herosection/HeroSection";
import ProductSection from "./components/productSection/ProductSection";

export default {
  name: "App",
  components: {
    ContactSection,
    Header,
    SearchDomainSection,
    BuyNowSection,
    FeatureSection,
    FeatureSpotlight,
    GuaranteeSection,
    HeroSection,
    ProductSection,
    Footer,
  },
  data() {
    return {
      i18n: require("./i18n/content-id.js"),
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 0;
}
</style>
