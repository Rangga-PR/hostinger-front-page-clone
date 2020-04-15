<template>
  <div class="hero-container">
    <div class="wrapper">
      <h1 class="hero-title">{{content.title}}</h1>
      <p class="hero-subTitle">{{content.subTitle}}</p>
      <Timer :endDate="content.bigDiscount.countDown.date" :content="content.dateTime" />
      <div class="btn-container">
        <Button class="discount-btn" variant="red" :text="content.bigDiscount.buyNow" stretch />
      </div>
    </div>
    <div class="wrapper">
      <BigDiscountPrice class="discount" :text="content.bigDiscount.discount" />
      <PriceTypography
        :currency="content.bigDiscount.price.currency"
        :price="content.bigDiscount.price.number"
        :perTime="content.bigDiscount.price.perTime"
      />
    </div>
  </div>
</template>

<script>
import PriceTypography from "../pricetypography/PriceTypography";
import BigDiscountPrice from "../bigdiscountprice/BigDiscountPrice";
import Timer from "../timer/Timer";
import Button from "../button/Button";

export default {
  name: "hero-section",
  components: {
    Button,
    Timer,
    BigDiscountPrice,
    PriceTypography,
  },
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  height: 96vh;
  background-image: url("../../assets/homepage-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem;
}

.discount-btn {
  opacity: 1;
}

.btn-container {
  width: 95%;
  height: 4em;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
}

.hero-title,
.hero-subTitle {
  color: white;
}

.hero-title {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1.9rem;
  line-height: 60px;
  text-align: center;
}

.hero-subTitle {
  font-size: 1.1rem;
  letter-spacing: 0.7px;
  text-align: center;
}

@media only screen and(min-width: 1023px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 6rem;
  }

  .wrapper {
    align-items: flex-start;
  }

  .hero-title {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 3rem;
    width: 530px;
    text-align: left;
  }

  .btn-container {
    width: 60%;
  }

  .discount {
    align-self: center;
  }
}
</style>