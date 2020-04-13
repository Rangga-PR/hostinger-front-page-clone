<template>
  <section class="sectiond">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "h-section",
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.sectiond {
  //   padding: 32px, 64px;
  background-color: $hostingerPurple;
}
</style>