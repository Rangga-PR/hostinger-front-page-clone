<template>
  <div class="product-container">
    <div class="tabs-container">
      <div class="tabs-wrapper">
        <a
          class="tab"
          @click="selectedTabs = i"
          :class="{active : i == selectedTabs}"
          v-for="(product, i) in content.productList"
          :key="`tab-content-${i}`"
        >{{product.category}}</a>
      </div>
    </div>

    <div
      v-for="(productItem, i) in content.productList"
      :key="`tab-content-${i}`"
      class="tab-content"
      :class="{active : i == selectedTabs}"
    >
      <ProductCard
        v-for="(product, i) in productItem.product"
        :key="`product-${i}`"
        :content="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../productcard/ProductCard";
export default {
  name: "product-section",
  components: {
    ProductCard,
  },
  data() {
    return {
      selectedTabs: 1,
    };
  },
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.tabs-container {
  display: flex;
  justify-content: center;
  position: relative;
  top: -31px;
}

.tabs-wrapper {
  display: flex;
  background-color: #4b2b8a;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.tab {
  text-align: center;
  color: white;
  font-weight: 700;
  padding: 1em;
  position: relative;

  &.active {
    background-color: white;
    color: $hostingerPurple;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

.tab-content {
  display: none;
  align-items: center;
  margin-bottom: 5rem;

  &.active {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

@media only screen and (min-width: 1023px) {
  .tabs-container {
    top: -73px;
  }

  .tab-content.active {
    flex-direction: row;
    justify-content: space-around;
  }

  .tab {
    padding: 1.3em 4em;
    font-size: 18px;
  }

  .product-container {
    padding: 0 6rem;
  }
}
</style>