<template>
  <div>
    <div class="columns">
      <div v-for="(menu, i) in firstThreeMenus" :key="`footer_menu-${i}`" class="column">
        <VerticalMenu :menus="menu" />
      </div>
      <div class="column is-4 about-section">
        <div class="about-us">
          <img class="brand" :src="logo" alt />
          <p class="about">{{content.about}}</p>
          <div class="payment-method-container">
            <img
              v-for="payment in content.paymentMethods"
              :key="payment.name"
              :src="payment.img"
              :alt="payment.name"
              class="payment-method"
            />
          </div>
          <div class="social-media-container">
            <a
              v-for="socialMedia in content.socialMedia"
              :key="socialMedia.name"
              :href="socialMedia.link"
            >
              <img class="social-media" :src="socialMedia.img" :alt="socialMedia.name" />
            </a>
          </div>
        </div>
        <div class="about-menu-container">
          <div
            v-for="(menu, i) in lastThreeMenus"
            :key="`footer_menu-${i}`"
            class="column about-menu"
          >
            <VerticalMenu :menus="menu" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns footer-bottom">
      <p class="text">© 2004-2020 hostinger.co.id - Layanan Web Hosting Terbaik & Domain Gratis.</p>
      <p class="text">harga belum termasuk ppn</p>
    </div>
  </div>
</template>

<script>
import VerticalMenu from "../verticalmenu/VerticalMenu";
import hostingerLogo from "../../assets/hostinger-logo.webp";

export default {
  name: "h-footer",
  components: {
    VerticalMenu,
  },
  data() {
    return {
      logo: hostingerLogo,
    };
  },
  props: {
    content: Object,
  },
  computed: {
    firstThreeMenus: function() {
      return this.content.menus.slice(0, 3);
    },
    lastThreeMenus: function() {
      return this.content.menus.slice(3, 6);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.columns {
  background-color: $hostingerDark;
  margin: 0;
  padding: 40px 0;
  border-top: 1px solid white;

  &:not(:last-child) {
    margin: 0;
  }
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.text {
  color: white;
  font-size: 12px;
  text-align: center;
  word-spacing: 2px;
}

.about {
  color: $hostingerLightGray;
}

.brand {
  min-width: 134px;
  height: 27px;
  margin-bottom: 10px;
}

.payment-method-container {
  margin: 1.2rem 0;
}

.payment-method {
  border: 1px solid $hostingerLightGray;
  border-radius: 5px;
  padding: 1px 0;
  margin-right: 5px;
  opacity: 0.7;
}

.social-media {
  margin-right: 10px;
}
.about-section {
  display: flex;
  flex-direction: column-reverse;
}

.about-menu {
  padding-left: 0;
}

@media only screen and (min-width: 1024px) {
  .about-section {
    flex-direction: column;
  }

  .about-menu {
    width: fit-content;
  }

  .about-menu-container {
    display: flex;
  }

  .footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>