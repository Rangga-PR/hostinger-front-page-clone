<template>
  <div class="container is-fluid">
    <div class="search-domain-wrapper">
      <h2 class="title is-3">{{title}}</h2>
      <div class="columns is-mobile">
        <div class="column is-four-fifths-desktop is-9-mobile">
          <Input placeholder="Ketik nama domain" size="medium" />
        </div>
        <div class="column is-one-fifth-desktop is-3-mobile">
          <Button variant="red" stretch icon="search" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../button/Button";
import Input from "../input/Input";

export default {
  name: "search-domain-section",
  components: {
    Button,
    Input,
  },
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.container {
  padding: 8rem 6rem;
  background-color: $hostingerPurple;
}

.title {
  color: white;
  text-align: center;

  &.is-3 {
    font-size: 36px;
    margin-bottom: 30px;
  }
}

@media only screen and (min-width: 1023px) {
  .search-domain-wrapper {
    padding: 0 5rem;
  }
}
</style>