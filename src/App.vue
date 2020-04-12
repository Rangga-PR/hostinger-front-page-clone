<template>
  <div id="app">
    <Header :content="i18n.content.navbar" />
    <div class="wrapper">
      <Input placeholder="Ketik nama domain" icon="lock" />
      <Button text="Cari domain" variant="red" />
    </div>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Input from "./components/input/Input";

export default {
  name: "App",
  components: {
    Header,
    Button,
    Input,
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
