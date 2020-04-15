<template>
  <div class="columns feature-container">
    <div class="column img-container">
      <img :src="content.img" :alt="`${content.title} image`" />
    </div>
    <div class="column">
      <p class="feature-subtitle">{{content.subTitle}}</p>
      <h2 class="feature-title">{{content.title}}</h2>
      <p class="feature-desc">{{content.desc}}</p>
      <a class="see-more-link" href="#">
        <p>{{seeMore}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "feature-section",
  props: {
    content: Object,
    seeMore: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.columns {
  padding: 30px 20px 30px 20px;
  margin: 0;
}

.img-container {
  display: flex;
  justify-content: center;
}

.feature-title {
  font-size: 36px;
  font-weight: 700;
}

.see-more-link {
  color: $hostingerPurple;
  text-decoration: underline;
}

.feature-subtitle {
  font-weight: 700;
  color: $hostingerPurple;
}

@media only screen and (max-width: 1023px) {
  .feature-subtitle,
  .feature-title,
  .feature-desc,
  .see-more-link p {
    text-align: center;
    margin-bottom: 20px;
  }

  .feature-title {
    font-size: 24px;
  }
}

@media only screen and (min-width: 1023px) {
  .feature-container {
    display: flex;
    padding: 4rem 6rem;

    &:nth-child(odd) {
      flex-flow: row-reverse;
    }
  }
}
</style>