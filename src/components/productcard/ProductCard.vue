<template>
  <div class="card-container" :class="content.tag ? 'first-item' : ''">
    <div v-if="content.tag" class="card-tag">
      <div class="tag">{{content.tag}}</div>
    </div>
    <div v-if="content.googleCloudSupport" class="card-tag google-cloud-support">
      <div class="tag">
        {{content.googleCloudSupport}}
        <img :src="googleCloudLogo" />
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="product-info">
          <h5 class="product-name">{{content.name}}</h5>
          <div class="discount-info">
            <del>{{content.originalPrice}}</del>
            <div class="discount-tag" :class="content.tag ? 'is-with-tag' : ''">{{content.discount}}</div>
          </div>
          <PriceTypography
            isProductCard
            class="discount-price"
            :currency="content.discountedPrice.currency"
            :price="content.discountedPrice.number"
            :perTime="content.discountedPrice.perTime"
          />
          <p class="product-term">{{content.term}}</p>
        </div>
        <a href="#">
          <Button
            class="add-to-cart-btn"
            text="Tambahkan ke cart"
            :variant="content.tag ? 'red' : 'purple'"
            stretch
          />
        </a>
        <div class="product-feature">
          <ul>
            <li v-for="(feature, i) in content.feature" :key="`feature-${i}`">
              <img v-if="feature.green" :src="checkIcon" alt />
              <img v-else :src="checkLimitedIcon" alt />
              <span v-html="feature.name"></span>
            </li>
          </ul>
        </div>
        <div class="see-all-feature">
          <a href>Klik untuk lihat semua fitur</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../button/Button";
import PriceTypography from "../pricetypography/PriceTypography";

export default {
  name: "product-card",
  components: {
    Button,
    PriceTypography,
  },
  data() {
    return {
      checkIcon: require("../../assets/check.svg"),
      checkLimitedIcon: require("../../assets/check-limited.svg"),
      googleCloudLogo: require("../../assets/google-cloud-logo.svg"),
    };
  },
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";
.card-container {
  display: flex;
  justify-content: center;
}

.card {
  width: 350px;
  margin: 1.5em;
}

.card-tag {
  width: fit-content;
  border-radius: 3px;
  position: absolute;
  z-index: 1;

  .tag {
    background-color: #ed412d;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    padding: 0.3em 3em;
    position: relative;
    top: -10px;
  }

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 0.6em solid transparent;
    border-top-color: #ed412d;
    border-bottom: 0;
    margin-left: -0.6em;
    margin-bottom: -0.5em;
  }

  &.google-cloud-support {
    .tag {
      background-color: #f4f3f3;
      color: #43414f;
      font-weight: 500;
      font-size: 14px;
      padding: 1.2em 1em;

      img {
        margin-left: 5px;
      }
    }

    :after {
      border-top-color: #f4f3f3;
      margin-bottom: -0.6em;
    }
  }
}

.discount-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0 1.5em 0;

  del {
    color: #999;
  }

  .discount-tag {
    background-color: #b5a4e3;
    color: white;
    font-weight: 700;
    padding: 0.25em 0.8em;
    border-radius: 15px;
    margin-left: 0.5em;

    &.is-with-tag {
      background-color: #f79b9e;
    }
  }
}

.product-info {
  text-align: center;
}

.product-feature {
  display: flex;
  justify-content: center;
  li {
    margin-top: 1em;
    font-size: 16px;
  }
}

.add-to-cart-btn {
  opacity: 1;
  margin-top: 2.2em;
  margin-bottom: 2em;
  height: 56px;
}

.discount-price {
  justify-content: center;
  margin-bottom: 10px;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 24px;
  height: 3em;
  margin-top: 1.5em;
}

.product-term {
  color: #999;
}

.see-all-feature {
  text-align: center;
  margin: 3em 0 1em 0;
  a {
    color: #999;
  }
}

.material-icons {
  font-size: 14px;
  font-weight: bolder;
}

.first-item {
  order: -1;
}

@media only screen and(min-width: 1023px) {
  .first-item {
    order: 0;
  }
}
</style>
