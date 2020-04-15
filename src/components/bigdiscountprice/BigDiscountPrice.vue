<template>
  <div class="big-discount-container">
    <div class="discount-number">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "big-discount-price",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.big-discount-container {
  background-color: $hostingerPastelRed;
  width: fit-content;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  position: relative;
  padding: 0.4em 1.4em;
  margin-bottom: 0.5em;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 1em solid transparent;
    border-top-color: $hostingerPastelRed;
    border-bottom: 0;
    margin-left: -1em;
    margin-bottom: -0.7em;
  }
}
</style>