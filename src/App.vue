<template>
  <div id="app">
    <Header :content="i18n.content.navbar" />
  </div>
</template>

<script>
import Header from "./components/header/Header";

export default {
  name: "App",
  components: {
    Header,
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
}
</style>
