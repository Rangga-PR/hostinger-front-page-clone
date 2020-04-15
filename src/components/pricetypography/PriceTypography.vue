<template>
  <div class="price-container">
    <div class="currency">{{currency + "."}}</div>
    <div class="big-number">{{price}}</div>
    <div class="per-time">{{"/" + perTime}}</div>
  </div>
</template>

<script>
export default {
  name: "price-typography",
  props: {
    currency: String,
    price: String,
    perTime: String,
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
}

.per-time {
  align-self: flex-end;
}

.currency {
  font-weight: 700;
  font-size: 1.5rem;
}

.big-number {
  font-size: 5rem;
  font-weight: 700;
  line-height: 0.8em;
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