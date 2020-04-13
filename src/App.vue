<template>
  <div id="app">
    <Header :content="i18n.content.navbar" />
    <SearchDomainSection title="Cari nama domain yang diinginkan. Gratis!" />
    <BuyNowSection
      title="Mudah digunakan, cepat, dan dapat diandalkan"
      subTitle="pilih paket hosting dan online website"
    />
  </div>
</template>

<script>
import Header from "./components/header/Header";
import SearchDomainSection from "./components/searchdomainsection/SearchDomainSection";
import BuyNowSection from "./components/buynowsection/BuyNowSection";

export default {
  name: "App",
  components: {
    Header,
    SearchDomainSection,
    BuyNowSection,
  },
  data() {
    return {
      i18n: require("./i18n/content-id.js"),
    };
  },
  // created: function() {
  //   console.log(this.i18n.content);
  // },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rebeccapurple;
}

.wrapper {
  display: flex;
}
</style>
