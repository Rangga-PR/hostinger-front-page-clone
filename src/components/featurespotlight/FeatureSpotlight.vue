<template>
  <div class="feature-spotlight-container">
    <h2 class="title">{{content.title}}</h2>
    <div class="columns">
      <div class="column">
        <img :src="content.img" alt />
      </div>
      <div class="column">
        <div v-for="(feature, i) in content.features" :key="`feature-${i}`" class="column">
          <div class="box">
            <div class="content">
              <div class="title-container">
                <strong class="feature-title">
                  <i class="material-icons">check_circle</i>
                  <h4>{{feature.title}}</h4>
                </strong>
              </div>
              <p>{{feature.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "feature-spotlight",
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.feature-spotlight-container {
  margin-top: 200px;
  padding: 0 6rem;
}

.title {
  text-align: center;
}

.feature-title {
  display: flex;
  align-content: center;

  i {
    color: $hostingerPurple;
    margin-right: 10px;
  }

  h4 {
    line-height: inherit;
  }
}

@media only screen and (max-width: 1024px) {
  .columns {
    margin: 50px 0 0 0;
    display: flex;
    flex-direction: column-reverse;
  }

  .feature-spotlight-container {
    margin-top: 20px;
    padding: 1rem;
  }
}
</style>