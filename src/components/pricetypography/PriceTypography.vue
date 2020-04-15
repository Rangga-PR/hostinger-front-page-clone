<template>
  <div class="price-container">
    <div class="currency" :class="isProductCard ? 'is-product-card': ''">{{currency + "."}}</div>
    <div class="big-number" :class="isProductCard ? 'is-product-card': ''">{{price}}</div>
    <div class="per-time" :class="isProductCard ? 'is-product-card': ''">{{"/" + perTime}}</div>
  </div>
</template>

<script>
export default {
  name: "price-typography",
  props: {
    currency: String,
    price: String,
    perTime: String,
    isProductCard: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.price-container {
  display: flex;
}

.currency,
.big-number,
.per-time {
  color: white;

  &.is-product-card {
    color: #212529;
  }
}

.per-time {
  align-self: flex-end;
  &.is-product-card {
    font-size: 8px;
  }
}

.currency {
  font-weight: 700;
  font-size: 1.5rem;

  &.is-product-card {
    font-size: 16px;
  }
}

.big-number {
  font-size: 5rem;
  font-weight: 700;
  line-height: 0.8em;

  &.is-product-card {
    font-size: 48px;
  }
}

@media only screen and(min-width: 1023px) {
  .big-number {
    font-size: 10.3rem;
  }

  .currency {
    font-size: 3.4rem;
  }

  .per-time {
    font-size: 1.7rem;
  }
}
</style>