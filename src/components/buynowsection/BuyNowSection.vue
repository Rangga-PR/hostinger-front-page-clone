<template>
  <div class="container is-fluid">
    <div class="buy-now-wrapper"></div>
    <h2 class="title is-3">{{title}}</h2>
    <p class="sub-title">{{subTitle}}</p>
    <div class="columns is-mobile is-centered">
      <div class="column is-one-fifth-desktop is-9-mobile">
        <a href="#">
          <Button class="buy-now-btn" variant="red" stretch text="Beli sekarang" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../button/Button";

export default {
  name: "buy-now-section",
  components: {
    Button,
  },
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.container {
  padding: 6rem 0;
  background-color: $hostingerPurple;
}

.column {
  height: 70px;
}

.title,
.sub-title {
  color: white;
  text-align: center;

  &.is-3 {
    font-size: 36px;
    margin-bottom: 5px;
  }
}

.sub-title {
  margin-top: 5px;
  margin-bottom: 20px;
}

.buy-now-btn {
  opacity: 1;
}
</style>