<template>
  <div class="top-section">
    <div class="wrapper">
      <p>Live chat 24/7</p>
      <a href="tel:0247-2885350">
        <i class="material-icons">call</i>
        {{content.phone}}
      </a>
      <div class="separator"></div>
      <a href="mailto:id@hostinger.com" target="blank">
        <i class="material-icons">mail</i>
        {{content.email}}
      </a>
    </div>
    <a href="#">
      <i class="material-icons">school</i>Tutorial
    </a>
  </div>
</template>

<script>
export default {
  name: "contact-section",
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.wrapper {
  display: flex;
  align-items: center;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 6rem;
}

a,
p {
  font-size: 12px;
  font-weight: 700;
}

a:hover {
  color: #0056b3;
}

a,
.separator {
  color: $hostingerPurple;
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

i {
  margin-right: 0.5rem;
}

.separator {
  width: 1px;
  height: 1rem;
  border-left: 1px solid $hostingerPurple;
}

@media only screen and (max-width: 1023px) {
  .top-section {
    display: none;
  }
}
</style>