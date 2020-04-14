<template>
  <div>
    <div class="columns is-gapless is-multiline">
      <div class="column is-12 top-container">
        <div class="img-wrapper">
          <img :src="content.top.img" alt="shield image" />
        </div>
        <div class="text-container">
          <h2 class="title">{{content.top.title}}</h2>
          <p class="sub-title">{{content.top.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guarantee-section",
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.columns {
  background-color: $hostingerDark;
  margin: 0;
  padding: 3rem 0;
}

.column.top-container {
  .img-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .title,
  .sub-title {
    text-align: center;
  }

  .title {
    color: $hostingerLightGray;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  .sub-title {
    color: white;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media only screen and (min-width: 1024px) {
  .top-container {
    display: flex;
    justify-content: center;

    .img-wrapper {
      margin-right: 30px;
      margin-bottom: 0;
    }

    .title,
    .subtitle {
      text-align: left;
    }
  }
}
</style>