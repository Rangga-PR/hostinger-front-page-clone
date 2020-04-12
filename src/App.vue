<template>
  <div id="app">
    <Header :content="i18n.content.navbar" />
    <Button text="Tambahkan ke cart" variant="purple" class="btn" />
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Button from "./components/button/Button";

export default {
  name: "App",
  components: {
    Header,
    Button,
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
</style>
